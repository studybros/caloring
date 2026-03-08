"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { ProductRecommendation } from "@/components/product/ProductRecommendation";
import {
  calculateCalorie,
  type Gender,
  type ActivityLevel,
  type Goal,
} from "@/lib/calculators/calorie";
import { createWebAppSchema, createFAQSchema } from "@/lib/seo/schema";
import { formatNumber } from "@/lib/utils/format";

const FAQ_ITEMS = [
  {
    question: "하루 권장 칼로리는 어떻게 계산하나요?",
    answer:
      "기초대사량(BMR)에 활동 수준 계수를 곱해 TDEE(하루 총 소비 칼로리)를 구합니다. 여기에 목표(감량/유지/증량)에 따라 조절합니다.",
  },
  {
    question: "다이어트할 때 최소 얼마나 먹어야 하나요?",
    answer:
      "일반적으로 여성은 최소 1,200kcal, 남성은 최소 1,500kcal 이상 섭취를 권장합니다. 이보다 적으면 영양 결핍과 근손실 위험이 있습니다.",
  },
  {
    question: "탄단지 비율은 어떻게 설정하나요?",
    answer:
      "다이어트 시 단백질 30%, 탄수화물 45%, 지방 25%의 비율을 추천합니다. 단백질을 충분히 섭취해야 근손실을 방지할 수 있습니다.",
  },
];

const RELATED_ITEMS = [
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
    title: "체지방 계산기",
    description: "내 체지방률 계산",
    href: "/calc/body-fat",
    emoji: "📐",
  },
  {
    title: "적정 체중 계산기",
    description: "키에 맞는 건강 체중",
    href: "/calc/ideal-weight",
    emoji: "🎯",
  },
];

const DIET_FOOD_PRODUCTS = [
  {
    name: "다이어트 도시락 5팩",
    category: "저칼로리 식단",
    price: "27,900원",
    originalPrice: "35,000원",
    discount: "-20%",
    link: "#",
    image: "🍱",
  },
  {
    name: "곤약밥 12개입",
    category: "저칼로리 주식",
    price: "14,900원",
    link: "#",
    image: "🍚",
  },
  {
    name: "프로틴 쉐이크",
    category: "식사 대용",
    price: "24,900원",
    originalPrice: "32,000원",
    discount: "-22%",
    link: "#",
    image: "🥛",
  },
  {
    name: "제로 음료 24캔",
    category: "제로 칼로리",
    price: "16,800원",
    link: "#",
    image: "🥤",
  },
];

const ACTIVITY_OPTIONS: { value: ActivityLevel; label: string }[] = [
  { value: "sedentary", label: "비활동적 (사무직)" },
  { value: "light", label: "가벼운 활동 (주 1~3일)" },
  { value: "moderate", label: "보통 활동 (주 3~5일)" },
  { value: "active", label: "활동적 (주 6~7일)" },
  { value: "very_active", label: "매우 활동적 (하루 2회)" },
];

const GOAL_OPTIONS: { value: Goal; label: string; emoji: string }[] = [
  { value: "lose", label: "체중 감량", emoji: "📉" },
  { value: "maintain", label: "체중 유지", emoji: "⚖️" },
  { value: "gain", label: "체중 증가", emoji: "📈" },
];

export function CalorieCalculator() {
  const [gender, setGender] = useState<Gender>("female");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState<ActivityLevel>("sedentary");
  const [goal, setGoal] = useState<Goal>("lose");

  const a = parseInt(age);
  const h = parseFloat(height);
  const w = parseFloat(weight);
  const canCalc = a > 0 && h > 0 && w > 0;
  const result = canCalc
    ? calculateCalorie(gender, h, w, a, activity, goal)
    : null;

  const jsonLd = [
    createWebAppSchema({
      name: "칼로리 계산기",
      description:
        "하루 권장 칼로리와 탄단지 비율을 계산하세요. 다이어트, 체중 유지, 벌크업 목표별 맞춤 계산.",
      url: "https://caloring.kr/calc/calorie",
      category: "HealthApplication",
    }),
    createFAQSchema(FAQ_ITEMS),
  ];

  return (
    <CalculatorLayout
      title="칼로리 계산기"
      description="하루에 몇 칼로리를 먹어야 할까? 목표에 맞는 권장 칼로리와 탄단지 비율을 계산해보세요."
      trustLabel="Mifflin-St Jeor 공식 기반"
      faqItems={FAQ_ITEMS}
      relatedItems={RELATED_ITEMS}
      jsonLd={jsonLd}
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "계산기" },
        { label: "칼로리 계산기" },
      ]}
      productSlot={
        result ? (
          <ProductRecommendation
            title={
              goal === "lose"
                ? "다이어트 식품 추천"
                : "건강 식품 추천"
            }
            description={
              goal === "lose"
                ? `하루 ${formatNumber(result.goalCalories)}kcal 목표에 맞는 저칼로리 식품이에요`
                : "균형 잡힌 영양 섭취에 도움이 되는 식품이에요"
            }
            products={DIET_FOOD_PRODUCTS}
          />
        ) : undefined
      }
    >
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">신체 정보</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Gender */}
            <div className="space-y-2">
              <Label>성별</Label>
              <div className="flex gap-1 rounded-lg bg-muted p-1">
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 rounded-md py-2 text-sm transition-colors ${
                    gender === "female"
                      ? "bg-background font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  여성
                </button>
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 rounded-md py-2 text-sm transition-colors ${
                    gender === "male"
                      ? "bg-background font-bold shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  남성
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">나이 (세)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="28"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">키 (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="163"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
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
            </div>

            {/* Activity */}
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

            {/* Goal */}
            <div className="space-y-2">
              <Label>목표</Label>
              <div className="grid grid-cols-3 gap-2">
                {GOAL_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setGoal(opt.value)}
                    className={`flex flex-col items-center gap-1 rounded-lg px-3 py-3 text-sm transition-colors ${
                      goal === opt.value
                        ? "bg-primary/10 font-medium text-primary ring-1 ring-primary/30"
                        : "bg-muted/50 text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    <span className="text-lg">{opt.emoji}</span>
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
                  하루 권장 칼로리 ({result.goalLabel})
                </p>
                <p className="text-5xl font-bold tabular-nums text-primary">
                  {formatNumber(result.goalCalories)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">kcal/일</p>
              </div>

              {/* TDEE & BMR */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-muted-foreground">하루 소비 칼로리 (TDEE)</p>
                  <p className="mt-1 text-lg font-bold tabular-nums">
                    {formatNumber(result.tdee)} kcal
                  </p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-muted-foreground">기초대사량 (BMR)</p>
                  <p className="mt-1 text-lg font-bold tabular-nums">
                    {formatNumber(result.bmr)} kcal
                  </p>
                </div>
              </div>

              {/* Macros */}
              <div>
                <p className="mb-3 text-sm font-medium">
                  권장 탄단지 비율 (하루 기준)
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-amber-50 p-3 text-sm dark:bg-amber-950/30">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <span className="font-medium">탄수화물 (45%)</span>
                    </div>
                    <span className="font-bold tabular-nums">
                      {result.carbs}g
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-rose-50 p-3 text-sm dark:bg-rose-950/30">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-rose-400" />
                      <span className="font-medium">단백질 (30%)</span>
                    </div>
                    <span className="font-bold tabular-nums">
                      {result.protein}g
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-emerald-50 p-3 text-sm dark:bg-emerald-950/30">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-emerald-400" />
                      <span className="font-medium">지방 (25%)</span>
                    </div>
                    <span className="font-bold tabular-nums">
                      {result.fat}g
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </CalculatorLayout>
  );
}
