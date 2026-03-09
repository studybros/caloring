import type { Product, ProductCategory } from "@/lib/types/product";
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
