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
const DELAY_MS = 120;

async function searchNaver(keyword) {
  const url = `https://openapi.naver.com/v1/search/shop.json?query=${encodeURIComponent(keyword)}&display=20&sort=sim`;
  const res = await fetch(url, {
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  });
  if (!res.ok) throw new Error(`Naver API ${res.status}`);
  const data = await res.json();
  return data.items || [];
}

function findBestMatch(items, product) {
  if (product.naverProductId) {
    const byId = items.find((i) => i.productId === product.naverProductId);
    if (byId) return byId;
  }
  const brandLower = (product.brand || "").toLowerCase();
  for (const item of items) {
    const title = item.title.replace(/<\/?b>/g, "").toLowerCase();
    if (title.includes(brandLower) && title.includes(product.weight || "")) {
      return item;
    }
  }
  return items[0] || null;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const products = JSON.parse(readFileSync(PRODUCTS_FILE, "utf-8"));
  const needImage = products.filter((p) => !p.imageUrl);
  console.log(`Total: ${products.length}, Need image: ${needImage.length}`);

  // Group by keyword
  const groups = new Map();
  for (let i = 0; i < products.length; i++) {
    const kw = products[i].naverSearchKeyword;
    if (!kw || products[i].imageUrl) continue;
    if (!groups.has(kw)) groups.set(kw, []);
    groups.get(kw).push(i);
  }

  let updated = 0;
  for (const [keyword, indices] of groups) {
    try {
      const items = await searchNaver(keyword);
      for (const idx of indices) {
        const match = findBestMatch(items, products[idx]);
        if (match && match.image) {
          products[idx].imageUrl = match.image;
          updated++;
          console.log(`  ✅ ${products[idx].slug} — ${match.image.slice(0, 60)}...`);
        }
      }
    } catch (err) {
      console.log(`  ❌ "${keyword}" — ${err.message}`);
    }
    await sleep(DELAY_MS);
  }

  console.log(`\n${updated}개 이미지 수집`);
  if (updated > 0) {
    writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf-8");
    console.log("Saved.");
  }
}

main();
