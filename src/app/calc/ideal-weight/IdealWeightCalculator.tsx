"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { ProductRecommendation } from "@/components/product/ProductRecommendation";
import {
  calculateIdealWeight,
  type Gender,
} from "@/lib/calculators/ideal-weight";
import { createWebAppSchema, createFAQSchema } from "@/lib/seo/schema";

const FAQ_ITEMS = [
  {
    question: "적정 체중이란 무엇인가요?",
    answer:
      "적정 체중은 키, 성별 등을 고려해 건강하게 유지할 수 있는 체중 범위입니다. 여러 공식이 있으며, BMI 18.5~24.9 범위도 함께 참고하면 좋습니다.",
  },
  {
    question: "여러 공식 결과가 다른데 어떤 걸 기준으로 하나요?",
    answer:
      "4가지 공식의 평균값을 참고하시는 것을 추천합니다. 각 공식은 연구 시기와 대상이 달라 결과에 차이가 있을 수 있으며, BMI 기반 건강 체중 범위도 함께 확인하세요.",
  },
  {
    question: "적정 체중보다 가벼운데 괜찮은가요?",
    answer:
      "BMI 18.5 미만은 저체중으로 분류됩니다. 지나치게 가벼우면 면역력 저하, 골밀도 감소 등의 위험이 있으니 균형 잡힌 식단을 유지하세요.",
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
    title: "체지방 계산기",
    description: "내 체지방률 계산",
    href: "/calc/body-fat",
    emoji: "📐",
  },
];

const HEALTH_PRODUCTS = [
  {
    name: "디지털 체중계",
    category: "체중 관리",
    price: "19,900원",
    originalPrice: "29,900원",
    discount: "-33%",
    link: "#",
    image: "⚖️",
  },
  {
    name: "프로틴 쉐이크",
    category: "영양 보충",
    price: "24,900원",
    originalPrice: "32,000원",
    discount: "-22%",
    link: "#",
    image: "🥛",
  },
  {
    name: "종합비타민 90일분",
    category: "건강 관리",
    price: "18,900원",
    link: "#",
    image: "💊",
  },
  {
    name: "그릭요거트 12개",
    category: "고단백 간식",
    price: "15,800원",
    link: "#",
    image: "🥣",
  },
];

export function IdealWeightCalculator() {
  const [gender, setGender] = useState<Gender>("female");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const h = parseFloat(height);
  const w = parseFloat(weight);
  const canCalc = h > 100 && h < 250; // reasonable height range
  const result = canCalc ? calculateIdealWeight(gender, h) : null;

  const diff = result && w > 0 ? Math.round((w - result.average) * 10) / 10 : null;

  const jsonLd = [
    createWebAppSchema({
      name: "적정 체중 계산기",
      description:
        "키에 맞는 적정 체중을 4가지 공식으로 계산하세요. BMI 기반 건강 체중 범위도 확인.",
      url: "https://caloring.kr/calc/ideal-weight",
      category: "HealthApplication",
    }),
    createFAQSchema(FAQ_ITEMS),
  ];

  return (
    <CalculatorLayout
      title="적정 체중 계산기"
      description="키를 입력하면 4가지 공식으로 적정 체중을 계산해드립니다. 현재 체중과 비교해보세요."
      trustLabel="Robinson, Miller, Devine, Hamwi 공식"
      faqItems={FAQ_ITEMS}
      relatedItems={RELATED_ITEMS}
      jsonLd={jsonLd}
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "계산기" },
        { label: "적정 체중 계산기" },
      ]}
      productSlot={
        result ? (
          <ProductRecommendation
            title="건강 체중 관리 추천 제품"
            description="적정 체중을 유지하는 데 도움이 되는 제품이에요"
            products={HEALTH_PRODUCTS}
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
                <Label htmlFor="weight">현재 체중 (kg, 선택)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="55"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
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
                  적정 체중 (평균)
                </p>
                <p className="text-5xl font-bold tabular-nums text-primary">
                  {result.average}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">kg</p>
                {diff !== null && (
                  <p className="mt-3 text-sm">
                    현재 체중 대비{" "}
                    <span
                      className={`font-bold ${
                        diff > 0 ? "text-red-500" : diff < 0 ? "text-blue-500" : "text-green-500"
                      }`}
                    >
                      {diff > 0 ? `+${diff}` : diff}kg
                    </span>
                  </p>
                )}
              </div>

              {/* BMI range */}
              <div className="rounded-lg bg-muted/50 p-3 text-center text-sm">
                <p className="text-muted-foreground">
                  BMI 기반 건강 체중 범위
                </p>
                <p className="mt-1 text-lg font-bold tabular-nums">
                  {result.bmiRange.min} ~ {result.bmiRange.max} kg
                </p>
              </div>

              {/* Formula breakdown */}
              <div>
                <p className="mb-3 text-sm font-medium">공식별 결과</p>
                <div className="space-y-2">
                  {[
                    { name: "Robinson 공식", value: result.robinson },
                    { name: "Miller 공식", value: result.miller },
                    { name: "Devine 공식", value: result.devine },
                    { name: "Hamwi 공식", value: result.hamwi },
                  ].map((formula) => (
                    <div
                      key={formula.name}
                      className="flex items-center justify-between rounded-lg bg-muted/50 p-3 text-sm"
                    >
                      <span>{formula.name}</span>
                      <span className="font-bold tabular-nums">
                        {formula.value} kg
                      </span>
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
