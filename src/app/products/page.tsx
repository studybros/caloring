import { createMetadata, SITE_URL } from "@/lib/seo/metadata";
import { createItemListSchema, createBreadcrumbSchema } from "@/lib/seo/schema";
import { products } from "@/data/products";
import { ProductsPage } from "./ProductsPage";

export const metadata = createMetadata({
  title: "다이어트 식품 최저가 비교 2026",
  description:
    "단백질 보충제, 다이어트 간식, 제로 음료, 곤약, 닭가슴살 최저가를 한눈에 비교하세요.",
  path: "/products",
  keywords: [
    "다이어트 식품",
    "다이어트 간식",
    "단백질 보충제",
    "제로 음료",
    "저칼로리 식품",
    "닭가슴살",
    "곤약",
  ],
});

const jsonLd = [
  createItemListSchema(
    "다이어트 식품 최저가 비교",
    products.slice(0, 30).map((p) => ({
      name: p.name,
      url: `${SITE_URL}/products/${p.slug}/`,
      image: p.imageUrl,
    }))
  ),
  createBreadcrumbSchema([{ label: "다이어트 식품" }]),
];

export default function Products() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ProductsPage />
    </>
  );
}
