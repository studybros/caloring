import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { SITE_URL } from "@/lib/seo/metadata";
import { createProductSchema, createBreadcrumbSchema } from "@/lib/seo/schema";
import { getProductBySlug, getAllSlugs } from "@/data/products";
import { analyzePrices, getPriceStatusLabel } from "@/lib/price/analyze";
import { formatKRW } from "@/lib/utils/format";
import { ProductDetailPage } from "./ProductDetailPage";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const analysis = analyzePrices(product.currentPrice, product.priceHistory);
  const status = getPriceStatusLabel(analysis.status, analysis.hasEnoughData);

  return createMetadata({
    title: `${product.name} 가격 비교`,
    description: `${product.name} ${formatKRW(product.currentPrice)} (${status}). ${product.description}. 가격 변동 추이를 확인하고 좋은 타이밍에 구매하세요.`,
    path: `/products/${slug}`,
    keywords: [
      product.name,
      product.brand,
      `${product.name} 최저가`,
      `${product.name} 가격`,
      product.categoryLabel,
      "다이어트 식품",
      "가격 비교",
    ],
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productUrl = `${SITE_URL}/products/${slug}/`;
  const jsonLd = [
    createProductSchema({
      name: product.name,
      description: product.description,
      url: productUrl,
      image: product.imageUrl,
      brand: product.brand,
      category: product.categoryLabel,
      price: product.currentPrice,
    }),
    createBreadcrumbSchema([
      { label: "다이어트 식품", href: "/products/" },
      { label: product.name },
    ]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ProductDetailPage product={product} />
    </>
  );
}
