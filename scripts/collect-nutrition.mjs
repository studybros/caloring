#!/usr/bin/env node
/**
 * Collect nutrition data from 식품의약품안전처 식품영양성분DB API
 *
 * Searches each product by name/brand, matches best result,
 * and updates nutrition info in products.json.
 *
 * Env vars:
 *   FOOD_API_KEY - 공공데이터포털 인증키
 *
 * Usage:
 *   node scripts/collect-nutrition.mjs
 *   node scripts/collect-nutrition.mjs --dry-run
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = resolve(__dirname, "../src/data/products/products.json");

const API_KEY =
  process.env.FOOD_API_KEY ||
  "49ca5b29131fc6125b943f044feaefa4c1ce108ef273d1d351c285b6fed0f14f";
const BASE_URL =
  "https://apis.data.go.kr/1471000/FoodNtrCpntDbInfo02/getFoodNtrCpntDbInq02";
const DRY_RUN = process.argv.includes("--dry-run");

// AMT_NUM field mapping for key nutrients (per SERVING_SIZE, usually 100g)
const NUTRIENT_FIELDS = {
  calories: "AMT_NUM1", // Energy (kcal)
  protein: "AMT_NUM3", // Protein (g)
  fat: "AMT_NUM4", // Fat (g)
  carbs: "AMT_NUM6", // Carbohydrates (g)
  sugar: "AMT_NUM7", // Sugar (g)
};

const DELAY_MS = 200;
function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function parseNum(val) {
  if (!val || val === "") return null;
  const num = parseFloat(String(val).replace(/,/g, ""));
  return isNaN(num) ? null : num;
}

/**
 * Query the food nutrition API
 */
async function searchFoodNutrition(keyword, numOfRows = 20) {
  const url = new URL(BASE_URL);
  url.searchParams.set("serviceKey", API_KEY);
  url.searchParams.set("FOOD_NM_KR", keyword);
  url.searchParams.set("pageNo", "1");
  url.searchParams.set("numOfRows", String(numOfRows));
  url.searchParams.set("type", "json");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data = await res.json();
  const body = data.body;
  if (!body || !body.items) return [];

  return body.items;
}

/**
 * Find best matching food item for a product.
 * Prioritizes commercial products (DB_GRP_CM = "P") with matching manufacturer.
 */
function findBestMatch(items, product) {
  if (!items || items.length === 0) return null;

  // Filter to commercial/processed foods only
  const commercial = items.filter((item) => item.DB_GRP_CM === "P");
  const searchPool = commercial.length > 0 ? commercial : items;

  // Extract meaningful keywords from product name (skip sizes, counts, brand)
  const brandLower = product.brand.toLowerCase();
  const nameClean = product.name
    .replace(/\d+(\.\d+)?\s*(kg|g|ml|l|팩|개|입|박스|종|세트|ea)/gi, "")
    .replace(/골라담기|혼합|선택|외|x\s*\d+/gi, "")
    .trim();
  // Remove brand from name parts so we score only product-specific keywords
  const nameParts = nameClean
    .split(/\s+/)
    .filter((p) => p.length >= 2 && p.toLowerCase() !== brandLower);

  const isZeroProduct = /제로|zero|라이트|light/i.test(product.name);

  // Identify core product type keywords that MUST appear in food name
  const coreTypeMap = {
    "곤약젤리": ["곤약", "젤리"],
    "곤약면": ["곤약", "면"],
    "두부면": ["두부면", "두부"],
    "단백질바": ["단백질바", "프로틴바", "protein bar"],
    "프로틴바": ["프로틴바", "단백질바"],
    "소시지": ["소시지", "sausage"],
    "닭가슴살": ["닭가슴살"],
    "쉐이크": ["쉐이크", "shake", "셰이크"],
    "프로틴": ["프로틴", "protein", "단백질"],
    "콤부차": ["콤부차", "kombucha"],
    "요거트": ["요거트", "yogurt", "그릭"],
    "도시락": ["도시락"],
    "사이다": ["사이다"],
    "콜라": ["콜라", "cola"],
  };
  // Find which core type this product belongs to
  let requiredTypeWords = null;
  for (const [keyword, typeWords] of Object.entries(coreTypeMap)) {
    if (product.name.includes(keyword)) {
      requiredTypeWords = typeWords;
      break;
    }
  }

  let bestScore = 0;
  let bestItem = null;

  for (const item of searchPool) {
    const foodName = (item.FOOD_NM_KR || "").toLowerCase();
    const maker = (item.MAKER_NM || "").toLowerCase();
    let score = 0;

    // Core type check: if product has a known type, food name must contain it
    if (requiredTypeWords) {
      const hasType = requiredTypeWords.some((tw) => foodName.includes(tw.toLowerCase()));
      if (!hasType) continue; // Skip entirely — wrong product type
    }

    // Brand/maker match bonus (check both MAKER_NM and FOOD_NM_KR for brand)
    const brandInMaker = maker && (maker.includes(brandLower) || brandLower.includes(maker));
    const brandInFoodName = foodName.includes(brandLower);
    if (brandInMaker || brandInFoodName) {
      score += 3;
    }

    // Name keyword matching (brand already removed from nameParts)
    let nameMatches = 0;
    for (const part of nameParts) {
      if (foodName.includes(part.toLowerCase())) {
        score += 2;
        nameMatches++;
      }
    }

    // Zero product sanity check — reject high calorie matches
    if (isZeroProduct) {
      const cal = parseNum(item[NUTRIENT_FIELDS.calories]);
      if (cal && cal > 20) {
        score = 0; // Reject: zero product shouldn't have high calories per 100g
      }
      // Bonus if food name also says zero
      if (/제로|zero/i.test(foodName)) score += 2;
    }

    // Require at least 1 name keyword match (not just brand alone)
    if (nameMatches === 0 && score > 0) {
      score = Math.min(score, 3); // Cap at 3 if only brand matched
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  // Require brand match (3) + at least 1 name keyword (2) = 5
  // Or at least 2 name keywords (4) without brand
  return bestScore >= 5 ? bestItem : null;
}

/**
 * Extract nutrition info from API item
 */
function extractNutrition(item, product) {
  const calories = parseNum(item[NUTRIENT_FIELDS.calories]);
  const protein = parseNum(item[NUTRIENT_FIELDS.protein]);
  const fat = parseNum(item[NUTRIENT_FIELDS.fat]);
  const carbs = parseNum(item[NUTRIENT_FIELDS.carbs]);
  const sugar = parseNum(item[NUTRIENT_FIELDS.sugar]);

  if (calories === null && protein === null) return null;

  const servingSize = item.NUTRI_AMOUNT_SERVING || item.SERVING_SIZE || "100g";
  const baseSize = item.SERVING_SIZE || "100g";

  // If base is 100g and serving is different, scale nutrients
  const baseGrams = parseNum(baseSize) || 100;
  const servingGrams = parseNum(servingSize) || baseGrams;
  let scale = baseGrams !== servingGrams ? servingGrams / baseGrams : 1;

  // Detect powder/concentrate products where API gives per-100g but product is small sachet
  // e.g. 콤부차 5g stick → API says 600kcal/100g → actual serving ~30kcal
  const productSizeMatch = product.name.match(/(\d+(\.\d+)?)\s*g\b/i);
  if (productSizeMatch && baseGrams === 100 && scale === 1) {
    const productGrams = parseFloat(productSizeMatch[1]);
    // If product unit is very small (< 30g) and calories are high, it's likely a powder per-100g
    if (productGrams <= 30 && (calories || 0) > 100) {
      scale = productGrams / 100;
    }
  }

  return {
    servingSize: scale < 1 ? `${Math.round(100 * scale)}g` : servingSize,
    servings: 1, // Will need manual update per package
    calories: Math.round((calories || 0) * scale),
    protein: Math.round(((protein || 0) * scale) * 10) / 10,
    carbs: Math.round(((carbs || 0) * scale) * 10) / 10,
    sugar: sugar !== null ? Math.round((sugar * scale) * 10) / 10 : undefined,
    fat: Math.round(((fat || 0) * scale) * 10) / 10,
  };
}

/**
 * Generate search keywords for a product
 */
function getSearchKeywords(product) {
  const keywords = [];

  // Try brand + short name first
  keywords.push(product.brand);

  // Try product name (first few meaningful words)
  const nameWords = product.name
    .replace(/\d+(\.\d+)?(kg|g|ml|l|팩|개|입|박스)/gi, "")
    .trim();
  if (nameWords.length > 2) {
    keywords.push(nameWords);
  }

  // Try brand + category-specific term
  const catTerms = {
    protein: "프로틴",
    chicken: "닭가슴살",
    shake: "쉐이크",
    "protein-bar": "프로틴바",
    "zero-drink": "제로",
    konjac: "곤약",
    lunchbox: "도시락",
    yogurt: "요거트",
    kombucha: "콤부차",
  };
  const catTerm = catTerms[product.category];
  if (catTerm) {
    keywords.push(`${product.brand} ${catTerm}`);
  }

  return keywords;
}

async function main() {
  console.log(`\n🍊 칼로링 영양정보 수집기\n`);
  console.log("═".repeat(60));

  if (DRY_RUN) {
    console.log("🔍 DRY RUN — 파일 수정 없이 미리보기만\n");
  }

  const products = JSON.parse(readFileSync(PRODUCTS_FILE, "utf-8"));
  console.log(`📦 ${products.length}개 상품\n`);

  let updated = 0;
  let failed = 0;
  let skipped = 0;

  for (const product of products) {
    // Skip if already has nutrition with servings > 1 (manually verified)
    if (product.nutrition && product.nutrition.servings > 1) {
      skipped++;
      continue;
    }

    const keywords = getSearchKeywords(product);
    let matched = false;

    for (const keyword of keywords) {
      try {
        const items = await searchFoodNutrition(keyword);

        if (items.length === 0) {
          await sleep(DELAY_MS);
          continue;
        }

        const best = findBestMatch(items, product);
        if (!best) {
          await sleep(DELAY_MS);
          continue;
        }

        const nutrition = extractNutrition(best, product);
        if (!nutrition) {
          await sleep(DELAY_MS);
          continue;
        }

        const makerInfo = best.MAKER_NM ? ` (${best.MAKER_NM})` : "";
        console.log(
          `  ✅ ${product.name}\n` +
            `     → ${best.FOOD_NM_KR}${makerInfo}\n` +
            `     → ${nutrition.calories}kcal, P${nutrition.protein}g, C${nutrition.carbs}g, F${nutrition.fat}g (${nutrition.servingSize})`
        );

        if (!DRY_RUN) {
          product.nutrition = nutrition;
        }

        matched = true;
        updated++;
        break; // Found match, stop trying other keywords
      } catch (err) {
        console.log(`  ❌ ${product.name} — ${keyword}: ${err.message}`);
      }

      await sleep(DELAY_MS);
    }

    if (!matched) {
      console.log(`  ⚠️  ${product.name} — 매칭 실패`);
      failed++;
    }

    await sleep(DELAY_MS);
  }

  console.log("\n" + "═".repeat(60));
  console.log(
    `✅ 완료: ${updated}개 업데이트, ${skipped}개 건너뜀, ${failed}개 매칭실패`
  );

  if (!DRY_RUN && updated > 0) {
    writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf-8");
    console.log(`💾 ${PRODUCTS_FILE} 저장 완료`);
  }

  console.log(
    "\n⚠️  servings(총 제공 횟수)는 패키지마다 다르므로 어드민에서 수동 확인 필요"
  );
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
