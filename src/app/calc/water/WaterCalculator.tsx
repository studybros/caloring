"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { ProductRecommendation } from "@/components/product/ProductRecommendation";
import {
  calculateWater,
  type ActivityLevel,
} from "@/lib/calculators/water";
import { createWebAppSchema, createFAQSchema } from "@/lib/seo/schema";
import { formatNumber } from "@/lib/utils/format";

const FAQ_ITEMS = [
  {
    question: "하루에 물을 얼마나 마셔야 하나요?",
    answer:
      "일반적으로 체중 1kg당 30ml를 기본으로, 운동량에 따라 200~800ml를 추가합니다. 체중 60kg 기준 약 1.8~2.4L가 권장됩니다.",
  },
  {
    question: "커피나 차도 수분 섭취에 포함되나요?",
    answer:
      "카페인 음료도 수분 공급에 기여하지만, 이뇨 작용이 있어 순수한 물에 비해 효과가 떨어집니다. 물을 주된 수분 섭취원으로 하되, 커피·차는 보조적으로 계산하세요.",
  },
  {
    question: "다이어트 중 물을 많이 마시면 좋은가요?",
    answer:
      "충분한 수분 섭취는 신진대사를 활성화하고 포만감을 높여 다이어트에 도움이 됩니다. 식사 30분 전 물 한 잔을 마시면 과식을 줄이는 데 효과적입니다.",
  },
];

const RELATED_ITEMS = [
  {
    title: "칼로리 계산기",
    description: "하루 권장 칼로리 계산",
    href: "/calc/calorie",
    emoji: "🍽️",
  },
  {
    title: "기초대사량 계산기",
    description: "BMR과 활동별 TDEE 계산",
    href: "/calc/bmr",
    emoji: "🔥",
  },
  {
    title: "BMI 계산기",
    description: "체질량지수, 비만도 확인",
    href: "/calc/bmi",
    emoji: "⚖️",
  },
  {
    title: "적정 체중 계산기",
    description: "키에 맞는 건강 체중",
    href: "/calc/ideal-weight",
    emoji: "🎯",
  },
];

const WATER_PRODUCTS = [
  {
    name: "텀블러 500ml",
    category: "수분 섭취 도구",
    price: "15,900원",
    originalPrice: "22,000원",
    discount: "-28%",
    link: "#",
    image: "🥤",
  },
  {
    name: "타이머 물병 1L",
    category: "시간별 섭취 관리",
    price: "12,900원",
    link: "#",
    image: "⏰",
  },
  {
    name: "제로 음료 24캔",
    category: "제로 칼로리",
    price: "16,800원",
    link: "#",
    image: "🥫",
  },
  {
    name: "레몬 농축액",
    category: "맛있는 수분 섭취",
    price: "8,900원",
    link: "#",
    image: "🍋",
  },
];

const ACTIVITY_OPTIONS: { value: ActivityLevel; label: string }[] = [
  { value: "sedentary", label: "비활동적 (사무직)" },
  { value: "light", label: "가벼운 활동 (주 1~3일)" },
  { value: "moderate", label: "보통 활동 (주 3~5일)" },
  { value: "active", label: "활동적 (주 6~7일)" },
  { value: "very_active", label: "매우 활동적 (하루 2회)" },
];

export function WaterCalculator() {
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");

  const w = parseFloat(weight);
  const canCalc = w > 0;
  const result = canCalc ? calculateWater(w, activity) : null;

  const jsonLd = [
    createWebAppSchema({
      name: "물 섭취량 계산기",
      description:
        "체중과 활동량에 맞는 하루 권장 물 섭취량을 계산하세요.",
      url: "https://caloring.kr/calc/water",
      category: "HealthApplication",
    }),
    createFAQSchema(FAQ_ITEMS),
  ];

  return (
    <CalculatorLayout
      title="물 섭취량 계산기"
      description="체중과 활동량을 입력하면 하루에 물을 얼마나 마셔야 하는지 알려드려요."
      trustLabel="체중 기반 수분 섭취 권장량"
      faqItems={FAQ_ITEMS}
      relatedItems={RELATED_ITEMS}
      jsonLd={jsonLd}
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "계산기" },
        { label: "물 섭취량 계산기" },
      ]}
      productSlot={
        result ? (
          <ProductRecommendation
            title="수분 섭취 도우미"
            description={`하루 ${formatNumber(result.totalWater)}ml 목표를 쉽게 달성하세요`}
            products={WATER_PRODUCTS}
          />
        ) : undefined
      }
    >
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">내 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="weight">몸무게 (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="55"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>활동 수준</Label>
              <div className="space-y-1">
                {ACTIVITY_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setActivity(opt.value)}
                    className={`w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      activity === opt.value
                        ? "bg-primary/10 font-medium text-primary ring-1 ring-primary/30"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">계산 결과</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Main result */}
              <div className="rounded-lg bg-primary/5 p-6 text-center">
                <p className="mb-1 text-sm text-muted-foreground">
                  하루 권장 물 섭취량
                </p>
                <p className="text-5xl font-bold tabular-nums text-primary">
                  {formatNumber(result.totalWater)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">ml/일</p>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-muted-foreground">기본 수분량</p>
                  <p className="mt-1 text-lg font-bold tabular-nums">
                    {formatNumber(result.baseWater)} ml
                  </p>
                  <p className="text-xs text-muted-foreground">
                    (체중 x 30ml)
                  </p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-muted-foreground">활동 추가량</p>
                  <p className="mt-1 text-lg font-bold tabular-nums">
                    +{formatNumber(result.activityWater)} ml
                  </p>
                </div>
              </div>

              {/* Practical guide */}
              <div>
                <p className="mb-3 text-sm font-medium">
                  실천 가이드
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-950/30">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🥛</span>
                      <span className="font-medium">종이컵 (250ml)</span>
                    </div>
                    <span className="font-bold tabular-nums">
                      {result.cups}잔
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3 text-sm dark:bg-blue-950/30">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🍶</span>
                      <span className="font-medium">생수병 (500ml)</span>
                    </div>
                    <span className="font-bold tabular-nums">
                      {result.bottles}병
                    </span>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="rounded-lg border border-border/50 p-3 text-xs text-muted-foreground">
                <p className="font-medium text-foreground">Tip</p>
                <ul className="mt-1.5 space-y-1 list-disc pl-4">
                  <li>기상 직후 물 한 잔으로 하루를 시작하세요</li>
                  <li>식사 30분 전 물 한 잔이 과식 방지에 도움됩니다</li>
                  <li>한 번에 많이 마시기보다 조금씩 자주 마시세요</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </CalculatorLayout>
  );
}
