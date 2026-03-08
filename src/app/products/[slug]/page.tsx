import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
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
  const status = getPriceStatusLabel(analysis.status);

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

  return <ProductDetailPage product={product} />;
}
