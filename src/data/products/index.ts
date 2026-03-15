import type { Product, ProductCategory } from "@/lib/types/product";
import { formatKRW } from "@/lib/utils/format";
import productsData from "./products.json";

export const products: Product[] = productsData as Product[];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}

// Product card format for ProductRecommendation component
export interface RecommendProduct {
  name: string;
  category: string;
  price: string;
  link: string;
  image?: string;
  imageUrl?: string;
  naverRank?: number;
  slug: string;
}

// Convert Product to RecommendProduct format
function toRecommendProduct(p: Product): RecommendProduct {
  return {
    name: p.name,
    category: p.categoryLabel,
    price: formatKRW(p.currentPrice),
    link: p.link && p.link !== "#" ? p.link : `/products/${p.slug}/`,
    image: p.image,
    imageUrl: p.imageUrl,
    naverRank: p.naverRank,
    slug: p.slug,
  };
}

// Get recommended products for calculators by categories
// Returns products with lowest price first (best deals)
export function getRecommendProducts(
  categories: ProductCategory[],
  count: number = 4
): RecommendProduct[] {
  const filtered = products.filter((p) => categories.includes(p.category));
  const sorted = filtered.sort((a, b) => a.currentPrice - b.currentPrice);
  // Pick one from each category first for variety, then fill remaining
  const picked: Product[] = [];
  const used = new Set<string>();
  for (const cat of categories) {
    const catProducts = sorted.filter((p) => p.category === cat && !used.has(p.slug));
    if (catProducts.length > 0) {
      picked.push(catProducts[0]);
      used.add(catProducts[0].slug);
    }
  }
  // Fill remaining slots
  for (const p of sorted) {
    if (picked.length >= count) break;
    if (!used.has(p.slug)) {
      picked.push(p);
      used.add(p.slug);
    }
  }
  return picked.slice(0, count).map(toRecommendProduct);
}

// Score a product for homepage selection (higher = better)
function scoreProduct(p: Product): number {
  let score = 0;
  if (p.description) score += 3;
  if (p.nutrition) score += 2;
  if (p.naverRank && p.naverRank <= 5) score += 2;
  else if (p.naverRank && p.naverRank <= 10) score += 1;
  if (p.imageUrl) score += 1;
  if (p.coupangPrice) score += 1;
  return score;
}

// Get popular products for homepage (one per category, best scored)
export function getHomepageProducts(count: number = 6): RecommendProduct[] {
  const allCategories: ProductCategory[] = [
    "protein", "chicken", "shake", "protein-bar", "zero-drink",
    "konjac", "lunchbox", "yogurt", "kombucha",
  ];
  const picked: Product[] = [];
  for (const cat of allCategories) {
    const catProducts = products
      .filter((p) => p.category === cat)
      .sort((a, b) => scoreProduct(b) - scoreProduct(a) || a.currentPrice - b.currentPrice);
    if (catProducts.length > 0) picked.push(catProducts[0]);
  }
  return picked.slice(0, count).map(toRecommendProduct);
}
