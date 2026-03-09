"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { ProductRecommendation } from "@/components/product/ProductRecommendation";
import { getRecommendProducts } from "@/data/products";
import { calculateBmr, type Gender } from "@/lib/calculators/bmr";
import { createWebAppSchema, createFAQSchema } from "@/lib/seo/schema";
import { formatNumber } from "@/lib/utils/format";

const PROTEIN_PRODUCTS = getRecommendProducts(["protein", "chicken", "yogurt", "protein-bar"]);

const FAQ_ITEMS = [
  {
    question: "기초대사량(BMR)이란 무엇인가요?",
    answer:
      "기초대사량은 생명 유지에 필요한 최소 에너지량으로, 숨쉬기, 혈액순환, 체온 유지 등에 소모되는 칼로리입니다. 하루 총 소비 칼로리의 약 60~70%를 차지합니다.",
  },
  {
    question: "TDEE와 BMR의 차이는?",
    answer:
      "BMR은 아무 활동 없이 소모되는 기초 칼로리이고, TDEE(Total Daily Energy Expenditure)는 BMR에 일상 활동과 운동량을 반영한 하루 총 소비 칼로리입니다.",
  },
  {
    question: "기초대사량을 높이는 방법은?",
    answer:
      "근력 운동으로 근육량을 늘리면 기초대사량이 올라갑니다. 단백질 섭취를 충분히 하고, 규칙적인 식사와 충분한 수면도 도움이 됩니다.",
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


export function BmrCalculator() {
  const [gender, setGender] = useState<Gender>("female");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const a = parseInt(age);
  const h = parseFloat(height);
  const w = parseFloat(weight);
  const canCalc = a > 0 && h > 0 && w > 0;
  const result = canCalc ? calculateBmr(gender, h, w, a) : null;

  const jsonLd = [
    createWebAppSchema({
      name: "기초대사량 계산기",
      description:
        "기초대사량(BMR)과 활동별 하루 권장 칼로리(TDEE)를 계산하세요",
      url: "https://caloring.kr/calc/bmr",
      category: "HealthApplication",
    }),
    createFAQSchema(FAQ_ITEMS),
  ];

  return (
    <CalculatorLayout
      title="기초대사량 계산기 (BMR)"
      description="성별, 나이, 키, 몸무게를 입력하면 기초대사량(BMR)과 활동별 권장 칼로리를 확인할 수 있습니다."
      trustLabel="Mifflin-St Jeor 공식 적용"
      faqItems={FAQ_ITEMS}
      relatedItems={RELATED_ITEMS}
      jsonLd={jsonLd}
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "계산기" },
        { label: "기초대사량 계산기" },
      ]}
      productSlot={
        result ? (
          <ProductRecommendation
            title="기초대사량 높이는 고단백 식품"
            description={`기초대사량 ${formatNumber(result.bmr)}kcal — 근육을 키워 더 높이려면 단백질이 필수예요`}
            products={PROTEIN_PRODUCTS}
          />
        ) : undefined
      }
    >
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">신체 정보 입력</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
          </CardContent>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">계산 결과</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-primary/5 p-6 text-center">
                <p className="mb-1 text-sm text-muted-foreground">
                  기초대사량 (BMR)
                </p>
                <p className="text-5xl font-bold tabular-nums">
                  {formatNumber(result.bmr)}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">kcal/일</p>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium">
                  활동 수준별 하루 권장 칼로리 (TDEE)
                </p>
                <div className="space-y-2">
                  {result.tdeeByActivity.map((level) => (
                    <div
                      key={level.label}
                      className="flex items-center justify-between rounded-lg bg-muted/50 p-3 text-sm"
                    >
                      <div>
                        <span className="font-medium">{level.label}</span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          (x{level.multiplier})
                        </span>
                      </div>
                      <span className="font-bold tabular-nums">
                        {formatNumber(level.calories)} kcal
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
