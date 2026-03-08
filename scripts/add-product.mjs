#!/usr/bin/env node
/**
 * Interactive product registration script
 * Usage: node scripts/add-product.mjs
 *
 * Generates product TypeScript code that can be pasted into
 * src/data/products/index.ts
 */

import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[가-힣]+/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

const CATEGORIES = {
  1: { value: "protein", label: "단백질 보충제", emoji: "🥛" },
  2: { value: "chicken", label: "닭가슴살", emoji: "🍗" },
  3: { value: "shake", label: "쉐이크/식대", emoji: "🥤" },
  4: { value: "snack", label: "다이어트 간식", emoji: "🍫" },
  5: { value: "zero-drink", label: "제로 음료", emoji: "🥫" },
  6: { value: "low-cal", label: "곤약/저칼로리", emoji: "🍚" },
};

async function main() {
  console.log("\n🍊 칼로링 상품 등록 도구\n");
  console.log("═".repeat(50));

  // Basic info
  const name = await ask("상품명: ");
  const brand = await ask("브랜드: ");

  console.log("\n카테고리:");
  for (const [key, cat] of Object.entries(CATEGORIES)) {
    console.log(`  ${key}. ${cat.emoji} ${cat.label}`);
  }
  const catNum = await ask("카테고리 번호: ");
  const category = CATEGORIES[catNum];
  if (!category) {
    console.log("잘못된 카테고리입니다.");
    rl.close();
    return;
  }

  const description = await ask("설명 (1줄): ");
  const link = await ask("제휴 링크 (없으면 #): ") || "#";
  const weight = await ask("용량/중량 (예: 2.27kg, 30팩): ");

  // Price
  const currentPrice = parseInt(await ask("현재 가격 (원): "), 10);

  // Price history
  console.log("\n가격 이력 입력 (빈 줄 입력 시 종료)");
  console.log("형식: YYYY-MM-DD 가격 (예: 2025-10-01 65900)");
  const priceHistory = [];
  while (true) {
    const line = await ask("  > ");
    if (!line.trim()) break;
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 2) {
      priceHistory.push({
        date: parts[0],
        price: parseInt(parts[1], 10),
      });
    }
  }

  // Nutrition (optional)
  const hasNutrition = (await ask("\n영양정보 입력? (y/n): ")).toLowerCase() === "y";
  let nutrition = null;
  if (hasNutrition) {
    nutrition = {
      servingSize: await ask("  1회 제공량 (예: 31g): "),
      servings: parseInt(await ask("  총 제공 횟수: "), 10),
      calories: parseInt(await ask("  칼로리 (kcal): "), 10),
      protein: parseFloat(await ask("  단백질 (g): ")),
      carbs: parseFloat(await ask("  탄수화물 (g): ")),
      sugar: parseFloat((await ask("  당류 (g, 없으면 엔터): ")) || "0") || undefined,
      fat: parseFloat(await ask("  지방 (g): ")),
    };
    if (nutrition.sugar === 0) delete nutrition.sugar;
  }

  // Generate slug
  let slug = slugify(`${brand} ${name}`);
  if (!slug || slug.length < 3) {
    slug = await ask("슬러그 (URL용 영문): ");
  } else {
    const customSlug = await ask(`슬러그 [${slug}]: `);
    if (customSlug.trim()) slug = customSlug.trim();
  }

  // Generate output
  const today = new Date().toISOString().split("T")[0];

  const priceHistoryStr = priceHistory
    .map((p) => `      { date: "${p.date}", price: ${p.price} },`)
    .join("\n");

  const nutritionStr = nutrition
    ? `
    nutrition: {
      servingSize: "${nutrition.servingSize}",
      servings: ${nutrition.servings},
      calories: ${nutrition.calories},
      protein: ${nutrition.protein},
      carbs: ${nutrition.carbs},${nutrition.sugar !== undefined ? `\n      sugar: ${nutrition.sugar},` : ""}
      fat: ${nutrition.fat},
    },`
    : "";

  const output = `
  {
    slug: "${slug}",
    name: "${name}",
    brand: "${brand}",
    category: "${category.value}",
    categoryLabel: "${category.label}",
    image: "${category.emoji}",
    description: "${description}",
    link: "${link}",
    weight: "${weight}",${nutritionStr}
    currentPrice: ${currentPrice},
    priceHistory: [
${priceHistoryStr}
    ],
    updatedAt: "${today}",
  },`;

  console.log("\n" + "═".repeat(50));
  console.log("아래 코드를 src/data/products/index.ts 의 products 배열에 추가하세요:");
  console.log("═".repeat(50));
  console.log(output);
  console.log("═".repeat(50));

  // Copy to clipboard attempt
  try {
    const { execSync } = await import("child_process");
    execSync("clip", { input: output });
    console.log("\n✅ 클립보드에 복사되었습니다!");
  } catch {
    console.log("\n(클립보드 복사 실패 - 위 코드를 수동으로 복사하세요)");
  }

  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
});
