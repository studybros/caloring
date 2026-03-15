#!/usr/bin/env node
/**
 * Product Enrichment Script
 *
 * Fills missing descriptions and links for products in products.json.
 * - description: Generated from product name, category, brand, nutrition info
 * - link: Naver catalog direct link using naverProductId
 * - slug: Convert Korean slugs to English (brand romanization + keywords + ID)
 *
 * Usage:
 *   node scripts/enrich-products.mjs              # dry-run (preview)
 *   node scripts/enrich-products.mjs --write       # save to products.json
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PRODUCTS_FILE = resolve(__dirname, "../src/data/products/products.json");
const WRITE_MODE = process.argv.includes("--write");

// ── Brand romanization map ──────────────────────────────────
const BRAND_ROMAN = {
  "칼로바이": "calobye",
  "밀팜": "milpam",
  "헬시오": "helsio",
  "프로틴마켓": "protein-market",
  "신타6": "syntha6",
  "옵티멈뉴트리션": "optimum-nutrition",
  "메이크바디": "makebody",
  "베네틴": "benetin",
  "잠백이": "zambaegi",
  "허닭": "heodak",
  "더하닭": "dehadak",
  "아임닭": "imdak",
  "육식토끼": "meat-rabbit",
  "한끼통살": "hankki-tongsal",
  "미트리": "meatree",
  "더건강한": "theganhan",
  "스위치온": "switchon",
  "밀잇": "milit",
  "플라이밀": "flymeal",
  "있나요": "issnayo",
  "꼬박꼬밥": "kkobak",
  "그로우잇": "growit",
  "핏트": "fitt",
  "리앤핏": "leanfit",
  "셀렉스": "cellex",
  "하이뮨": "himune",
  "매일유업": "maeil",
  "일일하우": "ilil-how",
  "닥터유": "dryu",
  "커클랜드": "kirkland",
  "소이조이": "soyjoy",
  "프로틴방앗간": "protein-mill",
  "포스트": "post",
  "베노프": "benoph",
  "펩시": "pepsi",
  "칠성사이다": "chilsung-cider",
  "스프라이트": "sprite",
  "코카콜라": "coca-cola",
  "나랑드사이다": "narangd-cider",
  "파워에이드": "powerade",
  "이온더핏": "ion-the-fit",
  "게토레이": "gatorade",
  "클룹": "klup",
  "빼빼곤약": "bbaebbae-konjac",
  "다신샵": "dasin-shop",
  "대신": "daesin",
  "농협식품": "nonghyup",
  "롯데웰푸드": "lotte-welfood",
  "빙그레": "binggrae",
  "아이엠그라운드": "im-ground",
  "마이노멀": "mynormal",
  "라라스팜": "laras-farm",
  "농가식품": "nongga",
  "얌쿡": "yamcook",
  "식스밀": "sixmeal",
  "시그니처벨": "signature-bell",
  "미스터네이처": "mr-nature",
  "헬로잇츠": "hello-eats",
  "인생닭": "insaeng-dak",
  "블랙컨슈머": "black-consumer",
  "고온어다이어트": "go-on-a-diet",
  "더바른도시락": "thebarun-dosirak",
  "요즘": "yojeom",
  "그릭씨네": "greek-cine",
  "요거트그릭요": "yogurt-greekyo",
  "코스트코": "costco",
  "덴마크우유": "denmark-milk",
  "요거트빌리지": "yogurt-village",
  "온드리목장": "ondri-farm",
  "요플레": "yoplait",
  "티젠": "teazen",
  "다농원": "danongwon",
};

// ── Keyword extraction helpers ──────────────────────────────

// Common Korean-to-English keyword mappings for slugs
const KEYWORD_MAP = {
  // Protein types
  "아이솔레이트": "isolate",
  "분리유청": "wpi",
  "농축유청": "wpc",
  "식물성": "plant",
  "단백질보충제": "protein",
  "단백질": "protein",
  "프로틴": "protein",
  // Flavors
  "초코": "choco",
  "초콜릿": "chocolate",
  "바닐라": "vanilla",
  "딸기": "strawberry",
  "곡물": "grain",
  "바나나": "banana",
  "블루베리": "blueberry",
  "레몬": "lemon",
  "피치": "peach",
  "망고": "mango",
  "카라멜": "caramel",
  "오리지널": "original",
  "플레인": "plain",
  "요거트": "yogurt",
  // Chicken types
  "닭가슴살": "chicken-breast",
  "스테이크": "steak",
  "소시지": "sausage",
  "큐브": "cube",
  "슬라이스": "slice",
  "훈제": "smoked",
  "오븐구이": "oven",
  "스팀": "steam",
  "그릴": "grill",
  "볼": "ball",
  // Product types
  "쉐이크": "shake",
  "프로틴바": "protein-bar",
  "제로": "zero",
  "콤부차": "kombucha",
  "곤약": "konjac",
  "도시락": "lunchbox",
  "그릭요거트": "greek-yogurt",
  "그릭": "greek",
  // Drinks
  "콜라": "cola",
  "사이다": "cider",
  "탄산수": "sparkling",
  // Misc
  "미니": "mini",
  "대용량": "bulk",
  "파우치": "pouch",
  "스틱": "stick",
  "리얼": "real",
  "라이트": "light",
  "다이어트": "diet",
  "무가당": "unsweetened",
  "발효": "fermented",
  "현미": "brown-rice",
  "귀리": "oat",
  "메밀": "buckwheat",
};

function extractEnglishKeywords(name, brand) {
  // Remove brand name and clean
  let cleaned = name.replace(brand, "").trim();

  const keywords = [];
  // Sort by length descending so longer matches come first
  const sortedEntries = Object.entries(KEYWORD_MAP).sort((a, b) => b[0].length - a[0].length);

  for (const [kr, en] of sortedEntries) {
    if (cleaned.includes(kr) && !keywords.includes(en)) {
      keywords.push(en);
      cleaned = cleaned.replace(kr, "");
    }
  }

  // Extract English words already in the name
  const engWords = name.match(/[a-zA-Z]{2,}/g);
  if (engWords) {
    for (const w of engWords) {
      const lower = w.toLowerCase();
      if (!keywords.includes(lower) && lower !== brand.toLowerCase()) {
        keywords.push(lower);
      }
    }
  }

  return keywords.slice(0, 4); // max 4 keywords
}

function generateEnglishSlug(product) {
  const brandRoman = BRAND_ROMAN[product.brand] || product.brand.toLowerCase().replace(/[^a-z0-9]/g, "");
  const keywords = extractEnglishKeywords(product.name, product.brand);
  const idSuffix = product.naverProductId ? product.naverProductId.substring(0, 8) : "";

  const parts = [brandRoman, ...keywords, idSuffix].filter(Boolean);
  const slug = parts
    .join("-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .substring(0, 80);

  return slug;
}

// ── Description generation ──────────────────────────────────

function generateDescription(product) {
  const { name, category, nutrition } = product;

  // Extract useful info from name
  const weight = extractWeight(name);
  const count = extractCount(name);

  // Nutrition-based selling points
  const nutritionPoints = [];
  if (nutrition) {
    if (nutrition.protein >= 20) nutritionPoints.push(`단백질 ${nutrition.protein}g`);
    else if (nutrition.protein >= 10) nutritionPoints.push(`단백질 ${nutrition.protein}g`);
    if (nutrition.calories === 0) nutritionPoints.push("제로칼로리");
    else if (nutrition.calories <= 30) nutritionPoints.push(`${nutrition.calories}kcal 저칼로리`);
    if (nutrition.fat <= 2 && nutrition.protein > 0) nutritionPoints.push("저지방");
    if (nutrition.sugar === 0) nutritionPoints.push("무당류");
  }

  // Category-specific description generation
  const generators = {
    protein: () => {
      const type = /WPI|분리유청|아이솔레이트|isolate/i.test(name) ? "WPI 분리유청단백질" :
                   /WPC|농축유청/i.test(name) ? "WPC 농축유청단백질" :
                   /식물성|비건|vegan/i.test(name) ? "식물성 단백질" :
                   /초유/i.test(name) ? "초유 단백질" :
                   "단백질보충제";
      const flavor = extractFlavor(name);
      const parts = [type];
      if (flavor) parts[0] += ` ${flavor}`;
      if (weight) parts.push(weight);
      if (nutritionPoints.length > 0) parts.push(nutritionPoints[0]);
      return parts.join(", ");
    },

    chicken: () => {
      const method = /오븐/i.test(name) ? "오븐구이" :
                     /훈제/i.test(name) ? "훈제" :
                     /스팀/i.test(name) ? "스팀" :
                     /그릴/i.test(name) ? "그릴드" : "";
      const form = /스테이크/i.test(name) ? "닭가슴살 스테이크" :
                   /소시지/i.test(name) ? "닭가슴살 소시지" :
                   /큐브/i.test(name) ? "닭가슴살 큐브" :
                   /슬라이스/i.test(name) ? "닭가슴살 슬라이스" :
                   /볼/i.test(name) ? "닭가슴살 볼" :
                   "닭가슴살";
      const parts = [method ? `${method} ${form}` : form];
      if (count && count >= 10) parts.push(`${count}팩 대용량`);
      else if (count) parts.push(`${count}팩`);
      if (nutritionPoints.length > 0) parts.push(nutritionPoints[0]);
      return parts.join(", ");
    },

    shake: () => {
      const form = /파우치/i.test(name) ? "파우치형" :
                   /RTD/i.test(name) ? "RTD 음료형" : "";
      const flavor = extractFlavor(name);
      const parts = [];
      if (flavor) parts.push(`${flavor} 쉐이크`);
      else parts.push("다이어트 쉐이크");
      if (form) parts.push(form);
      parts.push("간편한 한 끼 대용");
      if (nutritionPoints.length > 0) parts.push(nutritionPoints[0]);
      return parts.slice(0, 3).join(", ");
    },

    "protein-bar": () => {
      const flavor = extractFlavor(name);
      const parts = [];
      if (flavor) parts.push(`${flavor} 프로틴바`);
      else parts.push("프로틴바");
      if (count) parts.push(`${count}개입`);
      parts.push("간식 대용");
      if (nutritionPoints.length > 0) parts.push(nutritionPoints[0]);
      return parts.slice(0, 3).join(", ");
    },

    "zero-drink": () => {
      const type = /콜라/i.test(name) ? "제로 콜라" :
                   /사이다/i.test(name) ? "제로 사이다" :
                   /탄산수/i.test(name) ? "제로 탄산수" :
                   /이온/i.test(name) ? "제로 이온음료" :
                   /에이드/i.test(name) ? "제로 에이드" :
                   "제로 음료";
      const parts = [type, "0칼로리"];
      if (weight && count) parts.push(`${weight} ${count}캔`);
      else if (count) parts.push(`${count}캔`);
      return parts.join(", ");
    },

    konjac: () => {
      const form = /면/i.test(name) ? "곤약면" :
                   /젤리/i.test(name) ? "곤약젤리" :
                   /밥/i.test(name) ? "곤약밥" :
                   /떡볶이/i.test(name) ? "곤약떡볶이" :
                   /두부면/i.test(name) ? "두부면" :
                   "곤약";
      const parts = [form, "저칼로리 다이어트 대체식"];
      if (count) parts.push(`${count}팩`);
      return parts.join(", ");
    },

    lunchbox: () => {
      const main = /닭가슴살/i.test(name) ? "닭가슴살" :
                   /현미/i.test(name) ? "현미밥" :
                   /귀리/i.test(name) ? "귀리밥" :
                   "";
      const parts = [];
      if (main) parts.push(`${main} 도시락`);
      else parts.push("다이어트 도시락");
      if (count) parts.push(`${count}팩`);
      parts.push("간편 식단관리");
      return parts.slice(0, 3).join(", ");
    },

    yogurt: () => {
      const type = /그릭/i.test(name) ? "그릭요거트" : "요거트";
      const sweet = /무가당/i.test(name) ? "무가당 " : "";
      const parts = [`${sweet}${type}`, "고단백 간식"];
      if (count) parts.push(`${count}개입`);
      return parts.slice(0, 3).join(", ");
    },

    kombucha: () => {
      const flavor = extractFlavor(name);
      const form = /스틱/i.test(name) ? "스틱형" :
                   /캔/i.test(name) ? "캔" :
                   /병/i.test(name) ? "병" : "";
      const parts = [];
      if (flavor) parts.push(`${flavor} 콤부차`);
      else parts.push("콤부차");
      if (form && count) parts.push(`${form} ${count}포`);
      else if (count) parts.push(`${count}포`);
      parts.push("유산균 발효 음료");
      return parts.slice(0, 3).join(", ");
    },
  };

  const generator = generators[category];
  return generator ? generator() : `${product.categoryLabel}, ${product.brand}`;
}

function extractFlavor(name) {
  const flavors = [
    "초코", "초콜릿", "바닐라", "딸기", "곡물", "바나나", "블루베리",
    "레몬", "피치", "망고", "카라멜", "오리지널", "플레인", "요거트",
    "그레인", "카카오", "쿠키앤크림", "말차", "녹차", "라임",
    "자몽", "유자", "체리", "포도", "오렌지", "사과", "복숭아",
    "코코넛", "오트", "고구마", "토마토", "커피",
  ];
  for (const f of flavors) {
    if (name.includes(f)) return `${f}맛`;
  }
  return null;
}

function extractWeight(name) {
  const match = name.match(/(\d+(?:\.\d+)?)\s*(kg|g|ml|L|l)\b/i);
  return match ? `${match[1]}${match[2].toLowerCase()}` : null;
}

function extractCount(name) {
  const match = name.match(/(\d+)\s*(개입|개|팩|입|캔|병|봉|정|매|포|세트|ea)/i);
  return match ? parseInt(match[1]) : null;
}

// ── Link generation ─────────────────────────────────────────

function generateNaverCatalogLink(product) {
  if (!product.naverProductId) return "#";
  return `https://search.shopping.naver.com/catalog/${product.naverProductId}`;
}

// ── Main ────────────────────────────────────────────────────

function main() {
  console.log("\n🔧 칼로링 제품 데이터 보강 스크립트\n");
  console.log("═".repeat(60));

  if (!WRITE_MODE) {
    console.log("👀 미리보기 모드 — 저장하려면 --write 옵션 추가\n");
  }

  const products = JSON.parse(readFileSync(PRODUCTS_FILE, "utf-8"));
  console.log(`📦 총 ${products.length}개 제품\n`);

  let descCount = 0;
  let linkCount = 0;
  let slugCount = 0;
  let priceCleanCount = 0;

  for (const product of products) {
    let changed = false;

    // 0. Clean outlier prices from history
    if (product.priceHistory && product.priceHistory.length >= 2) {
      const prices = product.priceHistory.map((h) => h.price);
      const sorted = [...prices].sort((a, b) => a - b);
      const median = sorted[Math.floor(sorted.length / 2)];
      const cleaned = product.priceHistory.filter(
        (h) => h.price >= median * 0.5 && h.price <= median * 1.5
      );
      if (cleaned.length < product.priceHistory.length) {
        const removed = product.priceHistory.length - cleaned.length;
        if (!WRITE_MODE) {
          console.log(`🧹 [${product.category}] ${product.brand} — 이상 가격 ${removed}개 제거 (중앙값: ${median.toLocaleString()}원)`);
        }
        product.priceHistory = cleaned;
        // Also fix currentPrice if it was an outlier
        if (cleaned.length > 0) {
          const lastClean = cleaned[cleaned.length - 1];
          product.currentPrice = lastClean.price;
        }
        priceCleanCount += removed;
        changed = true;
      }
    }

    // 1. Fill missing description
    if (!product.description) {
      const newDesc = generateDescription(product);
      if (!WRITE_MODE) {
        console.log(`📝 [${product.category}] ${product.brand} — ${product.name.substring(0, 40)}`);
        console.log(`   → "${newDesc}"`);
      }
      product.description = newDesc;
      descCount++;
      changed = true;
    }

    // 2. Fill missing link (# → Naver catalog)
    if (product.link === "#" && product.naverProductId) {
      const newLink = generateNaverCatalogLink(product);
      if (!WRITE_MODE && !changed) {
        console.log(`🔗 [${product.category}] ${product.brand} — link → catalog`);
      }
      product.link = newLink;
      linkCount++;
      changed = true;
    }

    // 3. Convert Korean slugs to English
    const hasKorean = /[가-힣]/.test(product.slug);
    if (hasKorean) {
      const newSlug = generateEnglishSlug(product);
      if (!WRITE_MODE && changed) {
        console.log(`   slug: ${product.slug} → ${newSlug}`);
      } else if (!WRITE_MODE) {
        console.log(`🏷️  ${product.slug} → ${newSlug}`);
      }
      product.slug = newSlug;
      slugCount++;
    }
  }

  // Check for duplicate slugs and resolve
  const slugMap = new Map();
  for (const product of products) {
    const slug = product.slug;
    if (slugMap.has(slug)) {
      // Append more of the naverProductId for uniqueness
      const suffix = product.naverProductId ? `-${product.naverProductId.substring(8, 11)}` : `-${Math.random().toString(36).substring(2, 5)}`;
      product.slug = slug + suffix;
      console.log(`⚠️  중복 슬러그 해결: ${slug} → ${product.slug}`);
    }
    slugMap.set(product.slug, product);
  }

  console.log("\n" + "═".repeat(60));
  console.log(`✅ 설명 생성: ${descCount}개`);
  console.log(`✅ 링크 채움: ${linkCount}개`);
  console.log(`✅ 슬러그 변환: ${slugCount}개`);
  console.log(`✅ 이상 가격 제거: ${priceCleanCount}개`);

  if (WRITE_MODE) {
    writeFileSync(PRODUCTS_FILE, JSON.stringify(products, null, 2), "utf-8");
    console.log(`\n💾 ${PRODUCTS_FILE} 저장 완료`);
  } else {
    console.log("\n💡 저장하려면 --write 옵션을 추가하세요");
  }
}

main();
