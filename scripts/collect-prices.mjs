#!/usr/bin/env node
/**
 * Naver Shopping API price collector
 *
 * Reads products.json, queries Naver Shopping for each product,
 * updates prices and ranking, then writes back.
 *
 * Usage:
 *   node scripts/collect-prices.mjs
 *   node scripts/collect-prices.mjs --dry-run
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = resolve(__dirname, "../src/data/products/products.json");

// Load env from .env.local
const envFile = resolve(__dirname, "../.env.local");
try {
  const envContent = readFileSync(envFile, "utf-8");
  for (const line of envContent.split("\n")) {
    const [key, ...vals] = line.split("=");
    if (key && vals.length) process.env[key.trim()] = vals.join("=").trim();
  }
} catch {}

const CLIENT_ID = process.env.NAVER_CLIENT_ID;
const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
const DRY_RUN = process.argv.includes("--dry-run");

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Error: NAVER_CLIENT_ID and NAVER_CLIENT_SECRET required");
  process.exit(1);
}

const today = new Date().toISOString().split("T")[0];
const DELAY_MS = 150;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function searchNaver(query) {
  const url = new URL("https://openapi.naver.com/v1/search/shop.json");
  url.searchParams.set("query", query);
  url.searchParams.set("display", "30");
  url.searchParams.set("sort", "sim");

  const res = await fetch(url.toString(), {
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  });

  if (!res.ok) throw new Error(`Naver API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.items || [];
}

function findBestMatch(items, product) {
  // 1. Match by Naver product ID
  if (product.naverProductId) {
    const byId = items.find((i) => i.productId === product.naverProductId);
    if (byId) return { item: byId, rank: items.indexOf(byId) + 1 };
  }

  // 2. Match by brand + weight
  const brandLower = (product.brand || "").toLowerCase();
  for (let i = 0; i < items.length; i++) {
    const title = items[i].title.replace(/<\/?b>/g, "").toLowerCase();
    if (title.includes(brandLower) && title.includes(product.weight || "")) {
      return { item: items[i], rank: i + 1 };
    }
  }

  // 3. First result
  if (items.length > 0) return { item: items[0], rank: 1 };
  return null;
}

// Group products by search keyword to avoid duplicate API calls
function groupByKeyword(products) {
  const groups = new Map();
  for (let i = 0; i < products.length; i++) {
    const keyword = products[i].naverSearchKeyword;
    if (!keyword) continue;
    if (!groups.has(keyword)) groups.set(keyword, []);
    groups.get(keyword).push(i);
  }
  return groups;
}

async function main() {
  console.log(`\n🍊 칼로링 가격 수집기 (${today})\n`);
  console.log("═".repeat(60));
  if (DRY_RUN) console.log("🔍 DRY RUN 모드\n");

  const products = JSON.parse(readFileSync(PRODUCTS_FILE, "utf-8"));
  console.log(`📦 ${products.length}개 상품\n`);

  const keywordGroups = groupByKeyword(products);
  let updated = 0, failed = 0, skipped = 0, skippedOutlier = 0;

  for (const [keyword, indices] of keywordGroups) {
    try {
      const items = await searchNaver(keyword);

      for (const idx of indices) {
        const product = products[idx];
        const match = findBestMatch(items, product);

        if (!match) {
          console.log(`  ❌ ${product.slug} — 매칭 실패`);
          failed++;
          continue;
        }

        const newPrice = parseInt(match.item.lprice, 10);
        const oldPrice = product.currentPrice || 0;
        const diff = newPrice - oldPrice;
        const arrow = diff > 0 ? "📈" : diff < 0 ? "📉" : "➡️";
        const diffStr = diff !== 0 ? ` (${diff > 0 ? "+" : ""}${diff.toLocaleString()}원)` : "";

        console.log(
          `  ${arrow} ${product.slug} — ${newPrice.toLocaleString()}원${diffStr} (${match.rank}위)`
        );

        // Find lowest Coupang price from search results
        const coupangItems = items.filter(
          (i) => i.mallName === "쿠팡" || i.mallName === "coupang"
        );
        const coupangLowest = coupangItems.length > 0
          ? Math.min(...coupangItems.map((i) => parseInt(i.lprice, 10)))
          : null;
        const competitive = coupangLowest !== null && coupangLowest <= newPrice * 1.1;

        if (coupangLowest !== null) {
          const diff = coupangLowest - newPrice;
          const pct = ((diff / newPrice) * 100).toFixed(0);
          console.log(
            `    🛒 쿠팡 ${coupangLowest.toLocaleString()}원 (${diff >= 0 ? "+" : ""}${pct}%) ${competitive ? "✅ 경쟁력" : "❌ 비쌈"}`
          );
        }

        if (!DRY_RUN) {
          // Outlier detection: reject prices that deviate >40% from last known price
          const lastPrice = product.currentPrice || newPrice;
          const changeRatio = Math.abs(newPrice - lastPrice) / lastPrice;
          const isOutlier = lastPrice > 0 && changeRatio > 0.4;

          if (isOutlier) {
            console.log(
              `    ⚠️ 이상 가격 감지 — 기존 ${lastPrice.toLocaleString()}원 → ${newPrice.toLocaleString()}원 (${(changeRatio * 100).toFixed(0)}% 변동) → 건너뜀`
            );
            // Still update rank/coupang/image, but don't touch price
            product.naverRank = match.rank;
            product.updatedAt = today;
            product.coupangPrice = coupangLowest;
            product.coupangCompetitive = competitive;
            if (match.item.image) product.imageUrl = match.item.image;
            skippedOutlier++;
          } else {
            product.currentPrice = newPrice;
            product.naverRank = match.rank;
            product.updatedAt = today;
            product.coupangPrice = coupangLowest;
            product.coupangCompetitive = competitive;

            // Save image URL from Naver API
            if (match.item.image) {
              product.imageUrl = match.item.image;
            }

            // Update price history
            const todayEntry = product.priceHistory.find((e) => e.date === today);
            if (todayEntry) {
              todayEntry.price = newPrice;
            } else {
              product.priceHistory.push({ date: today, price: newPrice });
            }
          }
        }
        updated++;
      }
    } catch (err) {
      console.log(`  ❌ "${keyword}" — ${err.message}`);
      for (const idx of indices) failed++;
    }

    await sleep(DELAY_MS);
  }

  // Count skipped (no keyword)
  skipped = products.filter((p) => !p.naverSearchKeyword).length;

  console.log("\n" + "═".repeat(60));
  console.log(`✅ ${updated}개 업데이트, ${skipped}개 건너뜀, ${failed}개 실패, ${skippedOutlier}개 이상가격 거부`);

  if (!DRY_RUN && updated > 0) {
    writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf-8");
    console.log(`💾 ${PRODUCTS_FILE} 저장`);
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
