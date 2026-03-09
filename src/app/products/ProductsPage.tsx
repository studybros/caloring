"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import {
  analyzePrices,
  getPriceStatusLabel,
  getPriceStatusColor,
} from "@/lib/price/analyze";
import { formatKRW } from "@/lib/utils/format";
import type { ProductCategory } from "@/lib/types/product";
import { CATEGORY_EMOJI } from "@/lib/types/product";

type FilterCategory = "all" | ProductCategory;

const CATEGORIES: { value: FilterCategory; label: string; emoji?: string }[] = [
  { value: "all", label: "전체" },
  { value: "protein", label: "프로틴", emoji: "🥛" },
  { value: "chicken", label: "닭가슴살", emoji: "🍗" },
  { value: "shake", label: "쉐이크/음료", emoji: "🥤" },
  { value: "protein-bar", label: "프로틴바", emoji: "🍫" },
  { value: "zero-drink", label: "제로음료", emoji: "🥫" },
  { value: "konjac", label: "곤약/두부면", emoji: "🍜" },
  { value: "lunchbox", label: "도시락", emoji: "🍱" },
  { value: "yogurt", label: "그릭요거트", emoji: "🥣" },
  { value: "kombucha", label: "콤부차", emoji: "🍵" },
];

type SortMode = "deal" | "price" | "popular";

const SORT_OPTIONS: { value: SortMode; label: string }[] = [
  { value: "deal", label: "착한가격순" },
  { value: "price", label: "낮은가격순" },
  { value: "popular", label: "인기순" },
];

function getAnalysisCache() {
  const cache = new Map<string, ReturnType<typeof analyzePrices>>();
  for (const p of products) {
    cache.set(p.slug, analyzePrices(p.currentPrice, p.priceHistory));
  }
  return cache;
}

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("all");
  const [sortMode, setSortMode] = useState<SortMode>("deal");

  const analysisCache = getAnalysisCache();

  const filtered = (
    selectedCategory === "all"
      ? [...products]
      : products.filter((p) => p.category === selectedCategory)
  ).sort((a, b) => {
    if (sortMode === "price") {
      return a.currentPrice - b.currentPrice;
    }
    if (sortMode === "popular") {
      return (a.naverRank ?? 99) - (b.naverRank ?? 99);
    }
    // "deal": sort by percentFromAvg ascending (most below average first)
    const aAnalysis = analysisCache.get(a.slug)!;
    const bAnalysis = analysisCache.get(b.slug)!;
    return aAnalysis.percentFromAvg - bAnalysis.percentFromAvg;
  });

  const cheapCount = products.filter((p) => {
    const a = analysisCache.get(p.slug)!;
    return a.status === "low";
  }).length;

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          홈
        </Link>
        <span className="mx-1.5 text-border">/</span>
        <span>다이어트 식품</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">
          다이어트 식품 가격 비교
        </h1>
        <p className="mt-2 text-muted-foreground">
          {cheapCount > 0
            ? `지금 착한 가격인 제품이 ${cheapCount}개 있어요!`
            : "가격 추적으로 최적의 구매 타이밍을 알려드려요."}
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:overflow-visible">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
              selectedCategory === cat.value
                ? "bg-primary font-medium text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat.emoji && <span className="mr-1">{cat.emoji}</span>}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="mb-4 flex items-center gap-1.5">
        {SORT_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setSortMode(opt.value)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
              sortMode === opt.value
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {opt.label}
          </button>
        ))}
        <span className="ml-auto text-xs text-muted-foreground">
          {filtered.length}개
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => {
          const analysis = analysisCache.get(product.slug)!;
          const statusColor = getPriceStatusColor(analysis.status);
          const statusLabel = getPriceStatusLabel(analysis.status);
          const isCheap = analysis.percentFromAvg < 0;

          return (
            <Link key={product.slug} href={`/products/${product.slug}/`}>
              <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-peach/15 text-2xl">
                      {product.image}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColor.bg} ${statusColor.text}`}
                        >
                          {statusLabel}
                        </span>
                        <span className="text-[11px] text-muted-foreground">
                          {product.brand}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-semibold leading-tight line-clamp-2">
                        {product.name}
                      </p>
                      <div className="mt-1.5 flex items-baseline gap-1.5">
                        <span className="text-base font-extrabold">
                          {formatKRW(product.currentPrice)}
                        </span>
                        {isCheap && (
                          <span className="text-xs font-semibold text-primary">
                            {analysis.percentFromAvg}%
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-1 rounded-lg bg-primary/5 py-2 text-xs font-medium text-primary">
                    가격 추이 보기
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Disclosure */}
      <p className="mt-8 text-center text-[11px] text-muted-foreground/60">
        이 페이지의 링크를 통해 구매 시 제휴 수수료를 받을 수 있습니다
      </p>

      {/* Calculator CTA */}
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-peach/15 to-mustard/15 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          어떤 식품을 골라야 할지 모르겠다면?
        </p>
        <h2 className="mt-1 text-lg font-bold">
          내 다이어트 칼로리부터 계산해보세요
        </h2>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/calc/calorie/"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            칼로리 계산하기
          </Link>
          <Link
            href="/calc/bmr/"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 dark:bg-card dark:hover:bg-muted"
          >
            기초대사량 계산하기
          </Link>
        </div>
      </div>
    </div>
  );
}
