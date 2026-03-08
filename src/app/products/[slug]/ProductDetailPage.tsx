"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Share2,
  Flame,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PriceChart } from "@/components/product/PriceChart";
import { MacroRings } from "@/components/product/MacroRings";
import type { Product } from "@/lib/types/product";
import {
  analyzePrices,
  getPriceStatusLabel,
  getPriceStatusColor,
} from "@/lib/price/analyze";
import { formatKRW } from "@/lib/utils/format";
import { products } from "@/data/products";

interface ProductDetailPageProps {
  product: Product;
}

function getDietTip(product: Product): string | null {
  if (!product.nutrition) return null;
  const cal = product.nutrition.calories;
  const protein = product.nutrition.protein;
  if (protein >= 20)
    return `1서빙으로 단백질 ${protein}g을 채울 수 있어요. 운동 후 섭취하면 더 좋아요!`;
  if (cal <= 20) return `${cal}kcal밖에 안 돼요. 죄책감 없이 즐기세요!`;
  if (cal <= 100)
    return `${cal}kcal로 가볍게 한 끼를 해결할 수 있어요.`;
  return `1서빙 ${cal}kcal, 하루 권장 2,000kcal의 ${Math.round((cal / 2000) * 100)}%예요.`;
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const analysis = analyzePrices(product.currentPrice, product.priceHistory);
  const statusColor = getPriceStatusColor(analysis.status);
  const statusLabel = getPriceStatusLabel(analysis.status);
  const dietTip = getDietTip(product);

  const sameCategoryProducts = products.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  const handleShare = async () => {
    const url = `https://caloring.kr/products/${product.slug}/`;
    const text = `${product.name} - ${formatKRW(product.currentPrice)} (${statusLabel})`;
    if (navigator.share) {
      try {
        await navigator.share({ title: product.name, text, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 pb-28">
      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          홈
        </Link>
        <span className="mx-1.5 text-border">/</span>
        <Link href="/products/" className="hover:text-foreground">
          다이어트 식품
        </Link>
        <span className="mx-1.5 text-border">/</span>
        <span className="text-foreground">{product.categoryLabel}</span>
      </nav>

      <Link
        href="/products/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        목록으로
      </Link>

      {/* ── Hero + Price 통합 ───────────────────────── */}
      <div className="mt-2 overflow-hidden rounded-2xl bg-gradient-to-b from-peach/20 via-peach/5 to-transparent">
        <div className="px-5 pt-6 pb-2 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-5xl shadow-sm">
            {product.image}
          </div>
          <p className="mt-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {product.brand}
          </p>
          <h1 className="mt-1 text-xl font-bold md:text-2xl">{product.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {product.description}
            {product.weight && <span className="ml-1">· {product.weight}</span>}
          </p>
        </div>

        {/* Price inline */}
        <div className="px-5 py-4 text-center">
          <span
            className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColor.bg} ${statusColor.text}`}
          >
            {statusLabel}
          </span>
          <p className="mt-2 text-3xl font-extrabold tracking-tight">
            {formatKRW(product.currentPrice)}
          </p>
          {analysis.savings > 0 && (
            <p className="mt-1 text-sm font-medium text-primary">
              평균보다 {formatKRW(analysis.savings)} 저렴해요
            </p>
          )}
        </div>
      </div>

      {/* ── Purchase Tip ────────────────────────────── */}
      {analysis.status === "low" && (
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Flame className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold">지금이 구매 타이밍이에요!</p>
            <p className="text-xs text-muted-foreground">
              평균보다 {Math.abs(analysis.percentFromAvg)}% 저렴한 착한 가격이에요
            </p>
          </div>
        </div>
      )}
      {analysis.status === "high" && (
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-amber-400/20 bg-amber-50 px-4 py-3.5 dark:bg-amber-900/10">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400/10">
            <Clock className="h-4 w-4 text-amber-600" />
          </div>
          <div>
            <p className="text-sm font-semibold">조금만 기다려볼까요?</p>
            <p className="text-xs text-muted-foreground">
              지금은 평균보다 {analysis.percentFromAvg}% 비싼 편이에요
            </p>
          </div>
        </div>
      )}

      {/* ── Nutrition + Diet Tip (영양 먼저!) ───────── */}
      {product.nutrition && (
        <div className="mt-6">
          <h2 className="mb-3 text-base font-bold">영양 정보</h2>
          <Card>
            <CardContent className="p-5">
              {/* Macro Rings */}
              <MacroRings nutrition={product.nutrition} />

              {/* Calorie + Serving Summary */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-peach/10 p-3 text-center">
                  <p className="text-lg font-extrabold text-primary">
                    {product.nutrition.calories}
                  </p>
                  <p className="text-[11px] text-muted-foreground">kcal/1회</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-3 text-center">
                  <p className="text-lg font-extrabold">
                    {product.nutrition.servings}
                  </p>
                  <p className="text-[11px] text-muted-foreground">총 회분</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-3 text-center">
                  <p className="text-lg font-extrabold">
                    {product.nutrition.servingSize}
                  </p>
                  <p className="text-[11px] text-muted-foreground">1회 제공량</p>
                </div>
              </div>

              {/* Diet Tip inside nutrition */}
              {dietTip && (
                <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-mustard/15 px-4 py-3">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    {dietTip}
                  </p>
                </div>
              )}

              {/* Sugar & Fat details */}
              {(product.nutrition.sugar !== undefined || product.nutrition.fat > 0) && (
                <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                  {product.nutrition.sugar !== undefined && (
                    <span>당류 {product.nutrition.sugar}g</span>
                  )}
                  {product.nutrition.protein > 0 && (
                    <span>
                      단백질 1g당{" "}
                      {formatKRW(
                        Math.round(
                          product.currentPrice /
                            (product.nutrition.protein * product.nutrition.servings)
                        )
                      )}
                    </span>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── Price Chart ─────────────────────────────── */}
      <div className="mt-6">
        <h2 className="mb-3 text-base font-bold">가격 변동 추이</h2>
        <Card>
          <CardContent className="p-4">
            {/* Price summary compact */}
            <div className="mb-4 flex items-center justify-between text-sm">
              <div className="flex items-baseline gap-1.5">
                <span className="text-muted-foreground">최저</span>
                <span className="font-bold text-primary">
                  {formatKRW(analysis.minPrice)}
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-muted-foreground">평균</span>
                <span className="font-bold">
                  {formatKRW(analysis.averagePrice)}
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-muted-foreground">최고</span>
                <span className="font-bold text-amber-600">
                  {formatKRW(analysis.maxPrice)}
                </span>
              </div>
            </div>

            <PriceChart
              priceHistory={product.priceHistory}
              currentPrice={product.currentPrice}
              averagePrice={analysis.averagePrice}
            />
            <p className="mt-2 text-right text-[11px] text-muted-foreground">
              {product.updatedAt} 업데이트
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ── Same Category ───────────────────────────── */}
      {sameCategoryProducts.length > 0 && (
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-base font-bold">
              다른 {product.categoryLabel}
            </h2>
            <Link
              href="/products/"
              className="flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground"
            >
              전체보기
              <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:overflow-visible">
            {sameCategoryProducts.map((p) => {
              const pAnalysis = analyzePrices(p.currentPrice, p.priceHistory);
              const pColor = getPriceStatusColor(pAnalysis.status);
              const pLabel = getPriceStatusLabel(pAnalysis.status);
              return (
                <Link key={p.slug} href={`/products/${p.slug}/`}>
                  <Card className="min-w-[160px] transition-all hover:shadow-md hover:-translate-y-0.5 sm:min-w-0">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{p.image}</span>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${pColor.bg} ${pColor.text}`}
                        >
                          {pLabel}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium leading-tight line-clamp-2">
                        {p.name}
                      </p>
                      <p className="mt-1.5 text-sm font-bold">
                        {formatKRW(p.currentPrice)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Calculator CTA ──────────────────────────── */}
      <div className="mt-8 rounded-2xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          이 제품이 내 다이어트에 맞을까?
        </p>
        <h2 className="mt-1 text-base font-bold">
          칼로리 계산기로 확인해보세요
        </h2>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <Link
            href="/calc/calorie/"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            칼로리 계산하기
          </Link>
          <Link
            href="/calc/bmr/"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-50 dark:bg-card dark:hover:bg-muted"
          >
            기초대사량 계산
          </Link>
        </div>
      </div>

      {/* ── Affiliate Disclosure ────────────────────── */}
      <p className="mt-6 text-center text-[11px] text-muted-foreground/60">
        이 페이지의 링크를 통해 구매 시 제휴 수수료를 받을 수 있습니다
      </p>

      {/* ── Bottom Sticky Bar ───────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center">
          <button
            onClick={handleShare}
            className="flex w-14 flex-col items-center justify-center gap-0.5 py-3 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
          >
            <Share2 className="h-4 w-4" />
            공유
          </button>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl mx-3 my-2 py-3 text-sm font-bold text-primary-foreground bg-primary transition-all hover:bg-primary/90 active:scale-[0.98]"
          >
            {analysis.status === "low" ? "지금 구매하기" : "최저가 보러가기"}
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
