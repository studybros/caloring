"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorLayout } from "@/components/calculator/CalculatorLayout";
import { ProductRecommendation } from "@/components/product/ProductRecommendation";
import { getRecommendProducts } from "@/data/products";
import { calculateBmi } from "@/lib/calculators/bmi";
import { createWebAppSchema, createFAQSchema } from "@/lib/seo/schema";

const DIET_PRODUCTS = getRecommendProducts(["konjac", "lunchbox", "zero-drink", "shake"]);
const HEALTH_PRODUCTS = getRecommendProducts(["protein-bar", "yogurt", "chicken", "protein"]);

const FAQ_ITEMS = [
  {
    question: "BMI란 무엇인가요?",
    answer:
      "BMI(Body Mass Index, 체질량지수)는 키와 몸무게를 이용하여 비만도를 판정하는 국제적인 지표입니다. 체중(kg)을 키(m)의 제곱으로 나누어 계산합니다.",
  },
  {
    question: "한국인 BMI 기준은 다른가요?",
    answer:
      "네, 대한비만학회 기준으로 BMI 23 이상을 과체중, 25 이상을 비만으로 분류합니다. WHO 기준(25 과체중, 30 비만)보다 엄격합니다.",
  },
  {
    question: "BMI의 한계는 무엇인가요?",
    answer:
      "BMI는 근육량을 반영하지 못합니다. 근육이 많은 운동선수는 BMI가 높게 나올 수 있고, 노인은 근감소로 정상 BMI여도 비만일 수 있습니다. 체지방률과 함께 참고하세요.",
  },
];

const RELATED_ITEMS = [
  {
    title: "기초대사량 계산기",
    description: "하루 기초 칼로리 소모량 계산",
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
    title: "체지방 계산기",
    description: "내 체지방률 계산",
    href: "/calc/body-fat",
    emoji: "📐",
  },
  {
    title: "적정 체중 계산기",
    description: "키에 맞는 건강 체중",
    href: "/calc/ideal-weight",
    emoji: "⚖️",
  },
];


export function BmiCalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const h = parseFloat(height);
  const w = parseFloat(weight);
  const canCalc = h > 0 && w > 0;
  const result = canCalc ? calculateBmi(h, w) : null;

  const bmiColor = result
    ? result.bmi < 18.5
      ? "text-blue-500"
      : result.bmi < 23
        ? "text-green-600"
        : result.bmi < 25
          ? "text-yellow-600"
          : "text-red-500"
    : "";

  const jsonLd = [
    createWebAppSchema({
      name: "BMI 계산기",
      description: "키와 몸무게로 BMI(체질량지수)를 계산하고 비만도를 확인하세요",
      url: "https://caloring.kr/calc/bmi",
      category: "HealthApplication",
    }),
    createFAQSchema(FAQ_ITEMS),
  ];

  // Determine product recommendation message based on result
  const getProductMessage = () => {
    if (!result) return null;
    if (result.bmi >= 25) {
      return {
        title: "체중 관리 식품 추천",
        description: `BMI ${result.bmi} (${result.category}) — 저칼로리 식품으로 식단 관리를 시작해보세요`,
        products: DIET_PRODUCTS,
      };
    }
    if (result.bmi >= 23) {
      return {
        title: "건강 간식 추천",
        description: `BMI ${result.bmi} (${result.category}) — 고단백 간식으로 체중을 유지해보세요`,
        products: HEALTH_PRODUCTS,
      };
    }
    return {
      title: "건강 유지 식품",
      description: `BMI ${result.bmi} (${result.category}) — 균형 잡힌 영양 섭취를 위한 식품이에요`,
      products: HEALTH_PRODUCTS,
    };
  };

  const productMessage = getProductMessage();

  return (
    <CalculatorLayout
      title="BMI 계산기 (비만도 계산기)"
      description="키와 몸무게를 입력하면 BMI(체질량지수)와 비만도를 확인할 수 있습니다. 대한비만학회 기준."
      trustLabel="대한비만학회 기준 적용"
      faqItems={FAQ_ITEMS}
      relatedItems={RELATED_ITEMS}
      jsonLd={jsonLd}
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "계산기" },
        { label: "BMI 계산기" },
      ]}
      productSlot={
        result && productMessage ? (
          <ProductRecommendation
            title={productMessage.title}
            description={productMessage.description}
            products={productMessage.products}
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="height">키 (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="160"
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
                <p className="mb-1 text-sm text-muted-foreground">BMI</p>
                <p className={`text-5xl font-bold tabular-nums ${bmiColor}`}>
                  {result.bmi}
                </p>
                <p className={`mt-2 text-lg font-medium ${bmiColor}`}>
                  {result.category}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 text-sm">
                <div className="flex justify-between rounded-lg bg-muted/50 p-3">
                  <span className="text-muted-foreground">건강 위험도</span>
                  <span className="font-medium">{result.healthRisk}</span>
                </div>
                <div className="flex justify-between rounded-lg bg-muted/50 p-3">
                  <span className="text-muted-foreground">정상 체중 범위</span>
                  <span className="font-medium">
                    {result.normalWeightMin}kg ~ {result.normalWeightMax}kg
                  </span>
                </div>
              </div>

              {/* BMI Range Table */}
              <div className="text-sm">
                <p className="mb-2 font-medium">
                  대한비만학회 BMI 분류 기준
                </p>
                <div className="space-y-1">
                  {[
                    { range: "18.5 미만", label: "저체중", color: "bg-blue-100 dark:bg-blue-950" },
                    { range: "18.5 ~ 22.9", label: "정상", color: "bg-green-100 dark:bg-green-950" },
                    { range: "23 ~ 24.9", label: "과체중", color: "bg-yellow-100 dark:bg-yellow-950" },
                    { range: "25 ~ 29.9", label: "비만 (1단계)", color: "bg-orange-100 dark:bg-orange-950" },
                    { range: "30 ~ 34.9", label: "비만 (2단계)", color: "bg-red-100 dark:bg-red-950" },
                    { range: "35 이상", label: "고도비만", color: "bg-red-200 dark:bg-red-900" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`flex justify-between rounded p-2 ${row.color} ${
                        result.category === row.label
                          ? "ring-2 ring-primary font-bold"
                          : ""
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
