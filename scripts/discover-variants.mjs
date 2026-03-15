#!/usr/bin/env node
/**
 * Variant Discovery Script
 *
 * For each product group, searches Naver Shopping API and discovers
 * variant products (different sizes, flavors, bundles).
 * Only adds Naver catalog items (mallName: "네이버") for reliable tracking.
 *
 * Usage:
 *   node scripts/discover-variants.mjs                    # preview mode
 *   node scripts/discover-variants.mjs --write            # save to products.json
 *   node scripts/discover-variants.mjs --group "신타6"     # specific group only
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
const GROUP_FILTER = (() => {
  const idx = process.argv.indexOf("--group");
  return idx !== -1 ? process.argv[idx + 1] : null;
})();

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Error: NAVER_CLIENT_ID and NAVER_CLIENT_SECRET required");
  process.exit(1);
}

const DELAY_MS = 200;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function searchNaver(query, display = 30) {
  const url = new URL("https://openapi.naver.com/v1/search/shop.json");
  url.searchParams.set("query", query);
  url.searchParams.set("display", String(display));
  url.searchParams.set("sort", "sim");

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

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[가-힣]+/g, (m) => m) // keep Korean
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .substring(0, 80);
}

function makeSlug(name, brand) {
  // Create a URL-friendly slug from product name
  const cleaned = name
    .replace(brand, "")
    .replace(/,/g, "")
    .trim();
  // Transliterate common Korean brand names or use as-is
  return slugify(cleaned || name);
}

function extractWeight(title) {
  // Extract weight/volume: "2.27kg", "500ml", "1.5L"
  const match = title.match(/(\d+(?:\.\d+)?)\s*(kg|g|ml|L|l)\b/i);
  if (match) return `${match[1]}${match[2].toLowerCase()}`;

  // Extract count: "12개", "30팩"
  const countMatch = title.match(/(\d+)\s*(개입|개|팩|입|캔|병|봉|정|매|포|세트|ea)/i);
  if (countMatch) return `${countMatch[1]}${countMatch[2]}`;

  return undefined;
}

/**
 * Define search groups: each group generates a Naver search
 * that discovers related variants
 */
function getSearchGroups(products) {
  const groups = new Map();

  for (const p of products) {
    const groupKey = p.group || p.slug;
    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        key: groupKey,
        brand: p.brand,
        category: p.category,
        categoryLabel: p.categoryLabel,
        image: p.image,
        searchKeyword: p.naverSearchKeyword || p.name,
        existingSlugs: new Set(),
        existingProductIds: new Set(),
      });
    }
    const g = groups.get(groupKey);
    g.existingSlugs.add(p.slug);
    if (p.naverProductId) g.existingProductIds.add(p.naverProductId);
  }

  return groups;
}

async function main() {
  const today = new Date().toISOString().split("T")[0];
  console.log(`\n🔍 칼로링 변형 상품 발견기 (${today})\n`);
  console.log("═".repeat(60));

  if (!WRITE_MODE) {
    console.log("👀 미리보기 모드 — 저장하려면 --write 옵션 추가\n");
  }

  const products = JSON.parse(readFileSync(PRODUCTS_FILE, "utf-8"));
  const groups = getSearchGroups(products);

  console.log(`📦 ${products.length}개 기존 상품, ${groups.size}개 그룹\n`);

  let totalNew = 0;
  const newProducts = [];

  for (const [groupKey, group] of groups) {
    if (GROUP_FILTER && !groupKey.includes(GROUP_FILTER) && !group.brand.includes(GROUP_FILTER)) {
      continue;
    }

    // Use brand name as search keyword for broader results
    const searchQuery = group.brand + " " + group.category
      .replace("protein", "프로틴")
      .replace("chicken", "닭가슴살")
      .replace("shake", "쉐이크")
      .replace("protein-bar", "프로틴바")
      .replace("zero-drink", "제로")
      .replace("konjac", "곤약")
      .replace("lunchbox", "도시락")
      .replace("yogurt", "그릭요거트")
      .replace("kombucha", "콤부차");

    try {
      const items = await searchNaver(searchQuery);

      // Filter for Naver catalog items only (reliable, deduplicated)
      const catalogItems = items.filter(
        (item) =>
          item.mallName === "네이버" &&
          !group.existingProductIds.has(item.productId)
      );

      if (catalogItems.length > 0) {
        console.log(
          `\n📂 ${group.brand} (${groupKey}) — ${catalogItems.length}개 새 변형 발견`
        );

        for (const item of catalogItems) {
          const title = cleanTitle(item.title);
          const weight = extractWeight(title);
          const price = parseInt(item.lprice, 10);

          // Generate slug from naver product name
          const slug =
            slugify(group.brand) +
            "-" +
            item.productId.substring(0, 8);

          console.log(
            `  + ${title} — ${price.toLocaleString()}원${weight ? ` (${weight})` : ""}`
          );
          console.log(`    productId: ${item.productId}`);

          const newProduct = {
            slug,
            name: title,
            brand: group.brand,
            category: group.category,
            categoryLabel: group.categoryLabel,
            image: group.image,
            description: "",  // filled by enrich-products.mjs
            link: item.productId
              ? `https://search.shopping.naver.com/catalog/${item.productId}`
              : "#",
            ...(weight && { weight }),
            group: groupKey,
            naverProductId: item.productId,
            naverSearchKeyword: searchQuery,
            naverRank: items.indexOf(item) + 1,
            currentPrice: price,
            priceHistory: [{ date: today, price }],
            updatedAt: today,
          };

          newProducts.push(newProduct);
          totalNew++;
        }
      } else {
        console.log(`  ⏭️  ${group.brand} (${groupKey}) — 새 변형 없음`);
      }
    } catch (err) {
      console.log(`  ❌ ${group.brand} — 에러: ${err.message}`);
    }

    await sleep(DELAY_MS);
  }

  console.log("\n" + "═".repeat(60));
  console.log(`✅ 총 ${totalNew}개 새 변형 발견\n`);

  if (WRITE_MODE && newProducts.length > 0) {
    const merged = [...products, ...newProducts];
    writeFileSync(PRODUCTS_FILE, JSON.stringify(merged, null, 2), "utf-8");
    console.log(`💾 ${PRODUCTS_FILE} 저장 완료 (${merged.length}개 상품)`);
  } else if (newProducts.length > 0) {
    console.log("💡 저장하려면 --write 옵션을 추가하세요");
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
