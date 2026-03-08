"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { ProductRecommendation } from "@/components/product/ProductRecommendation";
import {
  calculateBodyFat,
  type Gender,
} from "@/lib/calculators/body-fat";
import { createWebAppSchema, createFAQSchema } from "@/lib/seo/schema";

const FAQ_ITEMS = [
  {
    question: "체지방률이란 무엇인가요?",
    answer:
      "체지방률은 전체 체중에서 지방이 차지하는 비율입니다. 여성은 21~32%, 남성은 14~25%가 건강한 범위입니다.",
  },
  {
    question: "이 계산기는 어떤 방법을 사용하나요?",
    answer:
      "미해군(US Navy) 체지방 추정 공식을 사용합니다. 허리, 목, 엉덩이(여성) 둘레를 측정해 체지방률을 계산합니다. 인바디만큼 정확하진 않지만 가정에서 쉽게 측정할 수 있습니다.",
  },
  {
    question: "체지방률을 줄이려면 어떻게 해야 하나요?",
    answer:
      "유산소 운동과 근력 운동을 병행하고, 단백질 위주의 식단을 유지하세요. 무리한 다이어트보다 주 0.5~1%씩 천천히 줄이는 것이 근손실 없이 건강하게 감량하는 방법입니다.",
  },
];

const RELATED_ITEMS = [
  {
    title: "BMI 계산기",
    description: "체질량지수, 비만도 확인",
    href: "/calc/bmi",
    emoji: "⚖️",
  },
  {
    title: "기초대사량 계산기",
    description: "BMR과 활동별 TDEE 계산",
    href: "/calc/bmr",
    emoji: "🔥",
  },
  {
    title: "칼로리 계산기",
    description: "하루 권장 칼로리 계산",
    href: "/calc/calorie",
    emoji: "🍽️",
  },
  {
    title: "적정 체중 계산기",
    description: "키에 맞는 건강 체중",
    href: "/calc/ideal-weight",
    emoji: "🎯",
  },
];

const DIET_PRODUCTS = [
  {
    name: "인바디 체중계",
    category: "체성분 측정",
    price: "49,900원",
    originalPrice: "69,900원",
    discount: "-29%",
    link: "#",
    image: "⚖️",
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
    name: "다이어트 도시락 5팩",
    category: "저칼로리 식단",
    price: "27,900원",
    originalPrice: "35,000원",
    discount: "-20%",
    link: "#",
    image: "🍱",
  },
  {
    name: "줄넘기 + 카운터",
    category: "유산소 운동",
    price: "12,900원",
    link: "#",
    image: "🏋️",
  },
];

export function BodyFatCalculator() {
  const [gender, setGender] = useState<Gender>("female");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");

  const h = parseFloat(height);
  const w = parseFloat(weight);
  const wa = parseFloat(waist);
  const n = parseFloat(neck);
  const hi = parseFloat(hip);

  const canCalc =
    h > 0 &&
    w > 0 &&
    wa > 0 &&
    n > 0 &&
    (gender === "male" || hi > 0) &&
    wa > n; // waist must be larger than neck

  const result = canCalc
    ? calculateBodyFat(gender, h, wa, n, hi, w)
    : null;

  const jsonLd = [
    createWebAppSchema({
      name: "체지방 계산기",
      description:
        "허리, 목, 엉덩이 둘레로 체지방률을 계산하세요. 미해군 공식 기반.",
      url: "https://caloring.kr/calc/body-fat",
      category: "HealthApplication",
    }),
    createFAQSchema(FAQ_ITEMS),
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "필수 지방":
        return "text-blue-600";
      case "운동선수":
        return "text-emerald-600";
      case "건강 (피트니스)":
        return "text-green-600";
      case "보통":
        return "text-amber-600";
      case "비만":
        return "text-red-600";
      default:
        return "text-foreground";
    }
  };

  return (
    <CalculatorLayout
      title="체지방 계산기"
      description="허리, 목, 엉덩이 둘레를 측정해서 체지방률을 계산해보세요. 집에서도 간편하게 측정할 수 있습니다."
      trustLabel="US Navy 공식 기반"
      faqItems={FAQ_ITEMS}
      relatedItems={RELATED_ITEMS}
      jsonLd={jsonLd}
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "계산기" },
        { label: "체지방 계산기" },
      ]}
      productSlot={
        result ? (
          <ProductRecommendation
            title={
              result.category === "비만" || result.category === "보통"
                ? "체지방 관리 추천 제품"
                : "건강 유지 추천 제품"
            }
            description={`체지방률 ${result.bodyFatPercent}% — ${result.category} 단계에 맞는 제품이에요`}
            products={DIET_PRODUCTS}
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

            <div className="grid grid-cols-2 gap-4">
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

            <div className={`grid gap-4 ${gender === "female" ? "grid-cols-3" : "grid-cols-2"}`}>
              <div className="space-y-2">
                <Label htmlFor="waist">허리둘레 (cm)</Label>
                <Input
                  id="waist"
                  type="number"
                  placeholder="68"
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="neck">목둘레 (cm)</Label>
                <Input
                  id="neck"
                  type="number"
                  placeholder="32"
                  value={neck}
                  onChange={(e) => setNeck(e.target.value)}
                />
              </div>
              {gender === "female" && (
                <div className="space-y-2">
                  <Label htmlFor="hip">엉덩이둘레 (cm)</Label>
                  <Input
                    id="hip"
                    type="number"
                    placeholder="92"
                    value={hip}
                    onChange={(e) => setHip(e.target.value)}
                  />
                </div>
              )}
            </div>

            <p className="text-xs text-muted-foreground">
              줄자로 피부에 밀착하여 측정하세요. 허리는 배꼽 높이, 엉덩이는 가장 넓은 부분을 측정합니다.
            </p>
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
                  체지방률
                </p>
                <p className="text-5xl font-bold tabular-nums text-primary">
                  {result.bodyFatPercent}%
                </p>
                <p className={`mt-2 text-sm font-medium ${getCategoryColor(result.category)}`}>
                  {result.category}
                </p>
              </div>

              {/* Body composition */}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-muted-foreground">체지방량</p>
                  <p className="mt-1 text-lg font-bold tabular-nums">
                    {result.fatMass} kg
                  </p>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <p className="text-muted-foreground">제지방량 (근육+뼈)</p>
                  <p className="mt-1 text-lg font-bold tabular-nums">
                    {result.leanMass} kg
                  </p>
                </div>
              </div>

              {/* Reference table */}
              <div>
                <p className="mb-3 text-sm font-medium">
                  {gender === "female" ? "여성" : "남성"} 체지방률 기준표
                </p>
                <div className="space-y-1.5 text-sm">
                  {(gender === "female"
                    ? [
                        { label: "필수 지방", range: "10~13%", color: "bg-blue-100 dark:bg-blue-950/30" },
                        { label: "운동선수", range: "14~20%", color: "bg-emerald-100 dark:bg-emerald-950/30" },
                        { label: "건강 (피트니스)", range: "21~24%", color: "bg-green-100 dark:bg-green-950/30" },
                        { label: "보통", range: "25~31%", color: "bg-amber-100 dark:bg-amber-950/30" },
                        { label: "비만", range: "32%+", color: "bg-red-100 dark:bg-red-950/30" },
                      ]
                    : [
                        { label: "필수 지방", range: "2~5%", color: "bg-blue-100 dark:bg-blue-950/30" },
                        { label: "운동선수", range: "6~13%", color: "bg-emerald-100 dark:bg-emerald-950/30" },
                        { label: "건강 (피트니스)", range: "14~17%", color: "bg-green-100 dark:bg-green-950/30" },
                        { label: "보통", range: "18~24%", color: "bg-amber-100 dark:bg-amber-950/30" },
                        { label: "비만", range: "25%+", color: "bg-red-100 dark:bg-red-950/30" },
                      ]
                  ).map((row) => (
                    <div
                      key={row.label}
                      className={`flex items-center justify-between rounded-lg p-2.5 ${row.color} ${
                        result.category === row.label ? "ring-1 ring-primary/40 font-medium" : ""
                      }`}
                    >
                      <span>{row.label}</span>
                      <span className="tabular-nums">{row.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </CalculatorLayout>
  );
}
