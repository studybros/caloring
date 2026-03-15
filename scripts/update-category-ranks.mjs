#!/usr/bin/env node
/**
 * Category Bestseller Ranking Script
 *
 * Searches Naver Shopping with category-representative keywords,
 * matches results against our products, and updates naverRank
 * to reflect actual category popularity ranking.
 *
 * Usage:
 *   node scripts/update-category-ranks.mjs              # dry-run
 *   node scripts/update-category-ranks.mjs --write       # save
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
const WRITE_MODE = process.argv.includes("--write");

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Error: NAVER_CLIENT_ID and NAVER_CLIENT_SECRET required");
  process.exit(1);
}

const DELAY_MS = 200;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Category → search keywords (searched in order, results merged)
// First keyword is the broadest/most popular search term
const CATEGORY_KEYWORDS = {
  protein: ["프로틴 보충제", "다이어트 프로틴", "단백질 보충제"],
  chicken: ["다이어트 닭가슴살", "닭가슴살 대용량", "닭가슴살 스테이크", "닭가슴살 소시지"],
  shake: ["다이어트 쉐이크", "단백질 쉐이크", "식사대용 쉐이크"],
  "protein-bar": ["프로틴바", "단백질바", "프로틴바 대용량"],
  "zero-drink": ["제로음료", "제로칼로리 음료", "제로 탄산"],
  konjac: ["곤약면", "곤약젤리 다이어트", "두부면", "곤약 다이어트"],
  lunchbox: ["다이어트 도시락", "닭가슴살 도시락", "냉동 도시락 다이어트"],
  yogurt: ["그릭요거트", "다이어트 요거트", "무가당 그릭요거트"],
  kombucha: ["콤부차", "다이어트 콤부차", "콤부차 스틱"],
};

async function searchNaver(query, display = 40) {
  const url = new URL("https://openapi.naver.com/v1/search/shop.json");
  url.searchParams.set("query", query);
  url.searchParams.set("display", String(display));
  url.searchParams.set("sort", "sim"); // relevance = popularity proxy

  const res = await fetch(url.toString(), {
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  });

  if (!res.ok) throw new Error(`Naver API ${res.status}`);
  const data = await res.json();
  return data.items || [];
}

function cleanTitle(title) {
  return title.replace(/<\/?b>/g, "").trim();
}

async function main() {
  const today = new Date().toISOString().split("T")[0];
  console.log(`\n🏆 칼로링 카테고리 베스트 랭킹 업데이트 (${today})\n`);
  console.log("═".repeat(60));

  if (!WRITE_MODE) {
    console.log("👀 미리보기 모드 — 저장하려면 --write 옵션 추가\n");
  }

  const products = JSON.parse(readFileSync(PRODUCTS_FILE, "utf-8"));

  // Build productId → product index map
  const idToIndex = new Map();
  for (let i = 0; i < products.length; i++) {
    if (products[i].naverProductId) {
      idToIndex.set(products[i].naverProductId, i);
    }
  }

  let totalMatched = 0;
  let totalReset = 0;

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    const categoryProducts = products.filter((p) => p.category === category);
    const categoryLabel = categoryProducts[0]?.categoryLabel || category;

    console.log(`\n📂 ${categoryLabel} (${category}) — ${categoryProducts.length}개 제품`);

    // Collect unique results from multiple keyword searches (preserve order)
    const seen = new Set();
    const rankedProductIds = []; // ordered by rank

    for (const keyword of keywords) {
      try {
        const items = await searchNaver(keyword);
        for (const item of items) {
          // Only catalog items (네이버) for consistent matching
          if (item.productId && !seen.has(item.productId)) {
            seen.add(item.productId);
            rankedProductIds.push(item.productId);
          }
        }
        console.log(`   🔍 "${keyword}" → ${items.length}개 결과`);
      } catch (err) {
        console.log(`   ❌ "${keyword}" — ${err.message}`);
      }
      await sleep(DELAY_MS);
    }

    // Reset all category products' rank first
    for (const p of categoryProducts) {
      if (p.naverRank !== null && p.naverRank !== undefined) {
        totalReset++;
      }
      p.naverRank = null;
    }

    // Assign ranks based on search position
    let matched = 0;
    for (let rank = 0; rank < rankedProductIds.length; rank++) {
      const productId = rankedProductIds[rank];
      const idx = idToIndex.get(productId);
      if (idx !== undefined && products[idx].category === category) {
        const oldRank = products[idx].naverRank;
        products[idx].naverRank = rank + 1;
        matched++;
        totalMatched++;

        const name = products[idx].name.substring(0, 35);
        console.log(`   ${String(rank + 1).padStart(2)}위  ${name}`);
      }
    }

    const unranked = categoryProducts.length - matched;
    console.log(`   ✅ ${matched}개 순위 매칭, ${unranked}개 순위 없음`);
  }

  console.log("\n" + "═".repeat(60));
  console.log(`✅ 총 ${totalMatched}개 제품 순위 업데이트`);

  if (WRITE_MODE) {
    writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf-8");
    console.log(`💾 ${PRODUCTS_FILE} 저장 완료`);
  } else {
    console.log("💡 저장하려면 --write 옵션을 추가하세요");
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
