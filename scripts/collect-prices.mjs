#!/usr/bin/env node
/**
 * Naver Shopping API price collector
 *
 * Reads product data, queries Naver Shopping Search API for each product,
 * updates prices and ranking, then writes back to the data file.
 *
 * Env vars required:
 *   NAVER_CLIENT_ID
 *   NAVER_CLIENT_SECRET
 *
 * Usage:
 *   node scripts/collect-prices.mjs
 *   node scripts/collect-prices.mjs --dry-run   (preview without writing)
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = resolve(__dirname, "../src/data/products/index.ts");

const CLIENT_ID = process.env.NAVER_CLIENT_ID;
const CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;
const DRY_RUN = process.argv.includes("--dry-run");

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error("Error: NAVER_CLIENT_ID and NAVER_CLIENT_SECRET are required");
  console.error("Set them as environment variables or in .env.local");
  process.exit(1);
}

const today = new Date().toISOString().split("T")[0];

// Rate limit: max 10 requests per second for Naver API
const DELAY_MS = 150;
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

/**
 * Search Naver Shopping API
 * @param {string} query - search keyword
 * @returns {Promise<object[]>} - array of product items
 */
async function searchNaverShopping(query) {
  const url = new URL("https://openapi.naver.com/v1/search/shop.json");
  url.searchParams.set("query", query);
  url.searchParams.set("display", "30");
  url.searchParams.set("sort", "sim"); // relevance

  const res = await fetch(url.toString(), {
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Naver API error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.items || [];
}

/**
 * Find best matching item from Naver results
 * Matches by naverProductId if available, otherwise by name similarity
 */
function findBestMatch(items, product) {
  // Try matching by product ID first
  if (product.naverProductId) {
    const byId = items.find(
      (item) => item.productId === product.naverProductId
    );
    if (byId) return { item: byId, rank: items.indexOf(byId) + 1 };
  }

  // Fallback: match by brand + partial name
  const brandLower = product.brand.toLowerCase();
  const nameLower = product.name.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    const title = items[i].title.replace(/<\/?b>/g, "").toLowerCase();
    if (title.includes(brandLower) && title.includes(product.weight || "")) {
      return { item: items[i], rank: i + 1 };
    }
  }

  // Last resort: first result
  if (items.length > 0) {
    return { item: items[0], rank: 1 };
  }

  return null;
}

/**
 * Parse the products array from the TypeScript source file.
 * Returns array of product objects with their source positions.
 */
function parseProductsFromSource(source) {
  const products = [];
  // Match each product object by finding slug patterns
  const slugRegex = /slug:\s*"([^"]+)"/g;
  let match;

  while ((match = slugRegex.exec(source)) !== null) {
    products.push({ slug: match[1], position: match.index });
  }

  return products;
}

/**
 * Extract naverSearchKeyword for a product from source
 */
function getFieldValue(source, slug, field) {
  const slugIdx = source.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) return null;

  // Find the next product or end of array
  const nextSlug = source.indexOf("slug: ", slugIdx + 10);
  const chunk = source.substring(
    slugIdx,
    nextSlug === -1 ? slugIdx + 2000 : nextSlug
  );

  const regex = new RegExp(`${field}:\\s*"([^"]*)"`, "m");
  const match = chunk.match(regex);
  return match ? match[1] : null;
}

function getNumericField(source, slug, field) {
  const slugIdx = source.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) return null;

  const nextSlug = source.indexOf("slug: ", slugIdx + 10);
  const chunk = source.substring(
    slugIdx,
    nextSlug === -1 ? slugIdx + 2000 : nextSlug
  );

  const regex = new RegExp(`${field}:\\s*(\\d+)`, "m");
  const match = chunk.match(regex);
  return match ? parseInt(match[1], 10) : null;
}

/**
 * Update a field value in the source for a specific product
 */
function updateField(source, slug, field, value) {
  const slugIdx = source.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) return source;

  const nextSlug = source.indexOf("slug: ", slugIdx + 10);
  const endIdx = nextSlug === -1 ? source.length : nextSlug;

  const before = source.substring(0, slugIdx);
  const chunk = source.substring(slugIdx, endIdx);
  const after = source.substring(endIdx);

  const isString = typeof value === "string";
  const valueStr = isString ? `"${value}"` : String(value);
  const regex = new RegExp(`(${field}:\\s*)(?:"[^"]*"|\\d+)`, "m");

  let updatedChunk;
  if (regex.test(chunk)) {
    updatedChunk = chunk.replace(regex, `$1${valueStr}`);
  } else {
    // Field doesn't exist yet, add it after updatedAt or currentPrice
    const insertAfter = chunk.match(/(updatedAt:\s*"[^"]*",?\n)/);
    if (insertAfter) {
      const insertIdx = chunk.indexOf(insertAfter[0]) + insertAfter[0].length;
      updatedChunk =
        chunk.substring(0, insertIdx) +
        `    ${field}: ${valueStr},\n` +
        chunk.substring(insertIdx);
    } else {
      updatedChunk = chunk;
    }
  }

  return before + updatedChunk + after;
}

/**
 * Add a price history entry for today
 */
function addPriceHistory(source, slug, price) {
  const slugIdx = source.indexOf(`slug: "${slug}"`);
  if (slugIdx === -1) return source;

  const nextSlug = source.indexOf("slug: ", slugIdx + 10);
  const endIdx = nextSlug === -1 ? source.length : nextSlug;
  const chunk = source.substring(slugIdx, endIdx);

  // Check if today's entry already exists
  if (chunk.includes(`date: "${today}"`)) {
    // Update existing entry
    const entryRegex = new RegExp(
      `(\\{ date: "${today}", price: )\\d+(\\s*\\})`,
      "m"
    );
    const updatedChunk = chunk.replace(entryRegex, `$1${price}$2`);
    return (
      source.substring(0, slugIdx) + updatedChunk + source.substring(endIdx)
    );
  }

  // Add new entry at the end of priceHistory array
  const historyEnd = chunk.lastIndexOf("],");
  if (historyEnd === -1) return source;

  // Find the last entry to add after it
  const lastEntry = chunk.lastIndexOf("}", historyEnd);
  if (lastEntry === -1) return source;

  const insertPos = slugIdx + lastEntry + 1;
  const newEntry = `\n      { date: "${today}", price: ${price} },`;

  return (
    source.substring(0, insertPos) + newEntry + source.substring(insertPos)
  );
}

async function main() {
  console.log(`\n🍊 칼로링 가격 수집기 (${today})\n`);
  console.log("═".repeat(60));

  if (DRY_RUN) {
    console.log("🔍 DRY RUN 모드 - 파일 수정 없이 미리보기만 합니다\n");
  }

  let source = readFileSync(PRODUCTS_FILE, "utf-8");
  const products = parseProductsFromSource(source);

  console.log(`📦 ${products.length}개 상품 발견\n`);

  let updated = 0;
  let failed = 0;
  let skipped = 0;

  for (const product of products) {
    const keyword = getFieldValue(source, product.slug, "naverSearchKeyword");

    if (!keyword) {
      console.log(`  ⏭️  ${product.slug} — naverSearchKeyword 없음, 건너뜀`);
      skipped++;
      continue;
    }

    try {
      const items = await searchNaverShopping(keyword);

      if (items.length === 0) {
        console.log(`  ❌ ${product.slug} — 검색 결과 없음`);
        failed++;
        await sleep(DELAY_MS);
        continue;
      }

      const match = findBestMatch(items, {
        ...product,
        brand: getFieldValue(source, product.slug, "brand") || "",
        naverProductId: getFieldValue(source, product.slug, "naverProductId"),
        weight: getFieldValue(source, product.slug, "weight"),
      });

      if (!match) {
        console.log(`  ❌ ${product.slug} — 매칭 실패`);
        failed++;
        await sleep(DELAY_MS);
        continue;
      }

      const newPrice = parseInt(match.item.lprice, 10);
      const oldPrice =
        getNumericField(source, product.slug, "currentPrice") || 0;
      const priceDiff = newPrice - oldPrice;
      const arrow =
        priceDiff > 0 ? "📈" : priceDiff < 0 ? "📉" : "➡️";
      const diffStr =
        priceDiff !== 0
          ? ` (${priceDiff > 0 ? "+" : ""}${priceDiff.toLocaleString()}원)`
          : "";

      console.log(
        `  ${arrow} ${product.slug} — ${newPrice.toLocaleString()}원${diffStr} (네이버 ${match.rank}위)`
      );

      if (!DRY_RUN) {
        source = updateField(source, product.slug, "currentPrice", newPrice);
        source = updateField(source, product.slug, "naverRank", match.rank);
        source = updateField(source, product.slug, "updatedAt", today);
        source = addPriceHistory(source, product.slug, newPrice);
      }

      updated++;
    } catch (err) {
      console.log(`  ❌ ${product.slug} — 에러: ${err.message}`);
      failed++;
    }

    await sleep(DELAY_MS);
  }

  console.log("\n" + "═".repeat(60));
  console.log(
    `✅ 완료: ${updated}개 업데이트, ${skipped}개 건너뜀, ${failed}개 실패`
  );

  if (!DRY_RUN && updated > 0) {
    writeFileSync(PRODUCTS_FILE, source, "utf-8");
    console.log(`💾 ${PRODUCTS_FILE} 저장 완료`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
