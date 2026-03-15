"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  Share2,
  Flame,
  Clock,
  Sparkles,
  ChevronRight,
  Target,
  Lightbulb,
  TrendingDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { PriceChart } from "@/components/product/PriceChart";
import { MacroRings } from "@/components/product/MacroRings";
import type { Product, ProductCategory } from "@/lib/types/product";
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

/**
 * Extract product-specific tags from actual data (nutrition, name, price)
 */
function getProductTags(product: Product): string[] {
  const tags: string[] = [];
  const name = product.name;
  const n = product.nutrition;

  // From nutrition data
  if (n) {
    if (n.protein >= 20) tags.push(`고단백 ${n.protein}g`);
    else if (n.protein >= 10) tags.push(`단백질 ${n.protein}g`);
    if (n.calories === 0) tags.push("제로칼로리");
    else if (n.calories <= 30) tags.push(`초저칼 ${n.calories}kcal`);
    else if (n.calories <= 100) tags.push(`${n.calories}kcal`);
    if (n.fat <= 2 && n.protein > 0) tags.push("저지방");
    if (n.sugar !== undefined && n.sugar === 0 && n.calories > 0) tags.push("무당류");
    else if (n.sugar !== undefined && n.sugar <= 3 && n.calories > 0) tags.push("저당");
  }

  // From product name — specific attributes
  if (/WPI|분리유청/i.test(name)) tags.push("WPI 분리유청");
  else if (/WPC/i.test(name)) tags.push("WPC 농축유청");
  if (/식물성|비건|vegan/i.test(name)) tags.push("식물성");
  if (/오가닉|유기농|organic/i.test(name)) tags.push("유기농");
  if (/무가당/i.test(name)) tags.push("무가당");
  if (/그릴드|그릴/i.test(name)) tags.push("그릴드");
  if (/오븐/i.test(name)) tags.push("오븐구이");
  if (/스팀/i.test(name)) tags.push("스팀");
  if (/제로|zero/i.test(name) && !tags.includes("제로칼로리")) tags.push("제로");
  if (/저당|low sugar/i.test(name) && !tags.includes("저당")) tags.push("저당");
  if (/무라벨/i.test(name)) tags.push("무라벨");
  if (/락토프리/i.test(name)) tags.push("락토프리");
  if (/곤약/i.test(name)) tags.push("곤약");
  if (/두부면/i.test(name)) tags.push("두부면");
  if (/냉동/i.test(name)) tags.push("냉동");

  // From pack size — value proposition
  const unitCount = parseUnitCount(name);
  if (unitCount && unitCount >= 20) tags.push("대용량");
  else if (unitCount && unitCount <= 6) tags.push("소량 구성");

  return tags;
}

/**
 * Generate product-specific recommendations based on actual features
 */
function getProductRecommendations(product: Product): string[] {
  const recs: string[] = [];
  const n = product.nutrition;
  const name = product.name;

  // Nutrition-driven recommendations
  if (n) {
    if (n.protein >= 20) recs.push(`1서빙 ${n.protein}g 단백질로, 운동 후 빠른 보충이 필요한 분`);
    else if (n.protein >= 10) recs.push(`단백질 ${n.protein}g이 들어있어 간편한 단백질 보충이 필요한 분`);

    if (n.calories === 0) recs.push("칼로리 걱정 없이 음료를 즐기고 싶은 분");
    else if (n.calories <= 50) recs.push(`${n.calories}kcal로 간식 칼로리가 걱정인 분`);
    else if (n.calories >= 300) recs.push(`${n.calories}kcal로 든든한 식사대용이 필요한 분`);

    if (n.fat <= 2 && n.protein >= 10) recs.push("지방은 줄이고 단백질은 채우고 싶은 분");
    if (n.sugar === 0 && n.carbs <= 5) recs.push("당류·탄수화물을 엄격하게 제한하는 분");
  }

  // Product attribute-driven
  if (/WPI|분리유청/i.test(name)) recs.push("유당 불내증이 있거나 순수 단백질을 원하는 분");
  if (/식물성|비건/i.test(name)) recs.push("동물성 원료를 피하고 싶은 분");
  if (/락토프리/i.test(name)) recs.push("유제품 섭취 시 속이 불편한 분");
  if (/곤약|두부면/i.test(name)) recs.push("면 요리를 좋아하지만 탄수화물이 걱정인 분");
  if (/냉동.*도시락|도시락.*냉동/i.test(name)) recs.push("직장에서 간편한 점심이 필요한 분");
  if (/무가당/i.test(name)) recs.push("설탕 없이 깔끔한 맛을 원하는 분");

  // Pack-size driven
  const unitCount = parseUnitCount(name);
  if (unitCount && unitCount >= 30) recs.push(`${unitCount}개 대용량으로, 매번 사기 귀찮은 분`);
  else if (unitCount && unitCount <= 6) recs.push("일단 맛보고 싶은 분, 소량 구성이라 부담 없어요");

  // Price-driven
  if (unitCount) {
    const perUnit = Math.round(product.currentPrice / unitCount);
    if (perUnit <= 500) recs.push(`개당 ${formatKRW(perUnit)}으로 가성비를 중시하는 분`);
  }

  // Ensure at least 2, max 4
  if (recs.length === 0) {
    // Fallback for products with no nutrition and no special attributes
    if (product.category === "protein" || product.category === "chicken" || product.category === "shake")
      recs.push("단백질 섭취량을 늘리고 싶은 분");
    if (product.category === "zero-drink" || product.category === "kombucha")
      recs.push("다이어트 중에도 음료를 포기 못하는 분");
    if (product.category === "lunchbox")
      recs.push("식단 관리를 편하게 하고 싶은 분");
    if (product.category === "konjac")
      recs.push("탄수화물을 줄이면서 면 요리를 먹고 싶은 분");
    if (product.category === "yogurt")
      recs.push("건강한 간식을 찾는 분");
    if (product.category === "protein-bar")
      recs.push("이동 중 간편하게 단백질을 보충하고 싶은 분");
  }

  return recs.slice(0, 4);
}

const CATEGORY_TIPS: Record<ProductCategory, string[]> = {
  protein: ["운동 후 30분 이내 섭취하면 흡수율이 높아져요", "물보다 우유에 타면 더 고소하고 칼로리가 올라가요", "하루 체중 1kg당 1.2~1.6g의 단백질 섭취를 권장해요"],
  chicken: ["전자레인지로 1~2분 데우면 더 맛있어요", "샐러드 위에 올려 먹으면 든든한 한 끼가 돼요", "냉동 보관 시 한 달 이상 보관 가능해요"],
  shake: ["차가운 물에 타면 더 맛있어요", "아침 식사 대용으로 먹으면 공복감을 줄일 수 있어요", "바나나나 견과류를 함께 갈면 영양 밸런스가 좋아져요"],
  "protein-bar": ["운동 전 30분~1시간 전에 먹으면 에너지로 활용돼요", "상온 보관이 가능해 가방에 넣고 다니기 좋아요", "달콤한 간식이 당길 때 과자 대신 먹어보세요"],
  "zero-drink": ["식사와 함께 마시면 포만감을 높일 수 있어요", "인공감미료가 포함되어 있으니 하루 1~2캔 정도가 적당해요", "차갑게 마시면 더 상쾌해요"],
  konjac: ["찬물에 헹구면 곤약 특유의 냄새가 줄어들어요", "소스와 함께 먹으면 더 맛있게 즐길 수 있어요", "일반 면 대비 칼로리가 90% 이상 낮아요"],
  lunchbox: ["전자레인지 3~4분이면 바로 먹을 수 있어요", "냉동 보관 후 필요할 때 꺼내 먹으면 편해요", "반찬을 추가하면 더 풍성한 식사가 돼요"],
  yogurt: ["아침 공복보다는 식후에 먹는 게 장 건강에 좋아요", "꿀이나 과일을 토핑하면 맛있게 즐길 수 있어요", "그릭요거트는 일반 요거트보다 단백질이 2배 이상 많아요"],
  kombucha: ["찬물 200ml에 1포를 타서 마시면 돼요", "탄산수에 타면 시원한 스파클링 콤부차가 돼요", "카페인이 소량 포함되어 있어 오전에 마시면 좋아요"],
};

function parseUnitCount(name: string): number | null {
  // "30팩", "24개", "50팩", "12개입", "44개", "20개입"
  // Use all matches and pick the largest reasonable count
  const matches = [...name.matchAll(/(\d+)\s*(팩|개입|개|입|ea|p)(?!\w)/gi)];
  if (matches.length === 0) return null;
  // Pick the largest number (most likely the pack count, not "5종")
  const counts = matches.map((m) => parseInt(m[1]));
  return Math.max(...counts);
}

export function ProductDetailPage({ product }: ProductDetailPageProps) {
  const analysis = analyzePrices(product.currentPrice, product.priceHistory);
  const statusColor = getPriceStatusColor(analysis.status);
  const statusLabel = getPriceStatusLabel(analysis.status);
  const dietTip = getDietTip(product);

  // Same group variants (different sizes/flavors of same product)
  const groupVariants = product.group
    ? products
        .filter((p) => p.group === product.group && p.slug !== product.slug)
        .sort((a, b) => a.currentPrice - b.currentPrice)
    : [];

  const sameCategoryProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .sort((a, b) => a.currentPrice - b.currentPrice)
    .slice(0, 12);

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
          <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm overflow-hidden">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain p-1"
                sizes="80px"
                unoptimized
              />
            ) : (
              <span className="text-5xl">{product.image}</span>
            )}
          </div>
          {product.naverRank && product.naverRank <= 30 && (
            <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              네이버 쇼핑 {product.categoryLabel} {product.naverRank}위
              <span className="ml-1 text-[10px] font-normal opacity-70">
                ({product.updatedAt} 기준)
              </span>
            </span>
          )}
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

      {/* ── Product Tags (dynamic from product data) ── */}
      {(() => {
        const tags = getProductTags(product);
        if (tags.length === 0 && !product.weight) return null;
        return (
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
            {product.weight && (
              <span className="rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                {product.weight}
              </span>
            )}
          </div>
        );
      })()}

      {/* ── Value Analysis (가성비) ───────────────────── */}
      {(() => {
        const unitCount = parseUnitCount(product.name);
        const pricePerUnit = unitCount ? Math.round(product.currentPrice / unitCount) : null;
        if (!pricePerUnit) return null;
        return (
          <div className="mt-6">
            <h2 className="mb-3 text-base font-bold flex items-center gap-1.5">
              <TrendingDown className="h-4 w-4 text-primary" />
              가성비 분석
            </h2>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-primary/5 p-4 text-center">
                    <p className="text-xl font-extrabold text-primary">{formatKRW(pricePerUnit)}</p>
                    <p className="mt-1 text-xs text-muted-foreground">1개당 가격</p>
                  </div>
                  <div className="rounded-xl bg-muted/50 p-4 text-center">
                    <p className="text-xl font-extrabold">{unitCount}개</p>
                    <p className="mt-1 text-xs text-muted-foreground">총 수량</p>
                  </div>
                </div>
                {product.nutrition && product.nutrition.calories > 0 && (
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    1개당 {product.nutrition.calories}kcal · 100kcal당 {formatKRW(Math.round(pricePerUnit / product.nutrition.calories * 100))}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        );
      })()}

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

      {/* ── Recommendation (product-specific) ────────── */}
      {(() => {
        const recs = getProductRecommendations(product);
        if (recs.length === 0) return null;
        return (
          <div className="mt-6">
            <h2 className="mb-3 text-base font-bold flex items-center gap-1.5">
              <Target className="h-4 w-4 text-primary" />
              이런 분에게 추천해요
            </h2>
            <Card>
              <CardContent className="p-4">
                <ul className="space-y-2.5">
                  {recs.map((text) => (
                    <li key={text} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs text-primary">
                        &#10003;
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        );
      })()}

      {/* ── Tips ──────────────────────────────────────── */}
      <div className="mt-6">
        <h2 className="mb-3 text-base font-bold flex items-center gap-1.5">
          <Lightbulb className="h-4 w-4 text-amber-500" />
          섭취 팁
        </h2>
        <Card>
          <CardContent className="p-4">
            <ul className="space-y-2.5">
              {CATEGORY_TIPS[product.category].map((tip) => (
                <li key={tip} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* ── Same Group Variants ─────────────────────── */}
      {groupVariants.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-base font-bold">
            다른 규격/옵션
          </h2>
          <div className="space-y-2">
            {groupVariants.map((v) => {
              const vAnalysis = analyzePrices(v.currentPrice, v.priceHistory);
              const vColor = getPriceStatusColor(vAnalysis.status);
              const vLabel = getPriceStatusLabel(vAnalysis.status);
              return (
                <Link key={v.slug} href={`/products/${v.slug}/`}>
                  <Card className="transition-all hover:shadow-md hover:-translate-y-0.5">
                    <CardContent className="flex items-center gap-3 p-3">
                      <span className="text-xl shrink-0">{v.image}</span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium leading-tight line-clamp-1">
                          {v.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {v.weight && `${v.weight} · `}{v.brand}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-bold">
                          {formatKRW(v.currentPrice)}
                        </p>
                        <span
                          className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${vColor.bg} ${vColor.text}`}
                        >
                          {vLabel}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      )}

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

      {/* ── Affiliate Disclosure (hidden until links are active) ── */}
      {/* <p className="mt-6 text-center text-[11px] text-muted-foreground/60">
        이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
      </p> */}

      {/* ── Bottom Sticky Bar ───────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-1 px-2">
          <button
            onClick={handleShare}
            className="flex w-14 flex-col items-center justify-center gap-0.5 py-3 text-[11px] text-muted-foreground transition-colors hover:text-foreground shrink-0"
          >
            <Share2 className="h-4 w-4" />
            공유
          </button>
          <a
            href={product.naverProductId
              ? `https://search.shopping.naver.com/catalog/${product.naverProductId}`
              : `https://search.shopping.naver.com/search/all?query=${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={`flex items-center justify-center gap-1.5 rounded-xl my-2 py-3 text-sm font-bold transition-all active:scale-[0.98] ${
              product.coupangPrice
                ? "flex-1 bg-[#03C75A] text-white hover:bg-[#02b350]"
                : "flex-1 bg-primary text-primary-foreground hover:bg-primary/90 mx-1"
            }`}
          >
            네이버에서 보기
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          {product.coupangPrice && (
            <a
              href={`https://www.coupang.com/np/search?q=${encodeURIComponent(product.name)}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl my-2 py-3 text-sm font-bold bg-[#E53238] text-white transition-all hover:bg-[#d12b31] active:scale-[0.98]"
            >
              쿠팡에서 보기
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
