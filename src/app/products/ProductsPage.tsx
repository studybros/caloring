"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type Category = "all" | "protein" | "snack" | "zero-drink" | "low-cal" | "chicken" | "shake";

interface Product {
  name: string;
  category: Category;
  categoryLabel: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  link: string;
  image: string;
  description: string;
}

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "protein", label: "단백질 보충제" },
  { value: "chicken", label: "닭가슴살" },
  { value: "shake", label: "쉐이크/식대" },
  { value: "snack", label: "다이어트 간식" },
  { value: "zero-drink", label: "제로 음료" },
  { value: "low-cal", label: "곤약/저칼로리" },
];

const PRODUCTS: Product[] = [
  // Protein
  {
    name: "옵티멈 골드스탠다드 웨이 2.27kg",
    category: "protein",
    categoryLabel: "단백질 보충제",
    price: "59,900원",
    originalPrice: "79,900원",
    discount: "-25%",
    link: "#",
    image: "🥛",
    description: "1서빙 24g 단백질, 세계 판매 1위 웨이 프로틴",
  },
  {
    name: "마이프로틴 임팩트웨이 1kg",
    category: "protein",
    categoryLabel: "단백질 보충제",
    price: "24,900원",
    originalPrice: "34,900원",
    discount: "-29%",
    link: "#",
    image: "🥛",
    description: "1서빙 21g 단백질, 40가지 이상 맛",
  },
  {
    name: "BSN 신타-6 2.27kg",
    category: "protein",
    categoryLabel: "단백질 보충제",
    price: "54,900원",
    link: "#",
    image: "🥛",
    description: "1서빙 22g 단백질, 맛있는 복합 프로틴",
  },
  // Chicken
  {
    name: "허닭 닭가슴살 스테이크 30팩",
    category: "chicken",
    categoryLabel: "닭가슴살",
    price: "29,900원",
    originalPrice: "39,900원",
    discount: "-25%",
    link: "#",
    image: "🍗",
    description: "1팩 100g, 단백질 23g, 6가지 맛",
  },
  {
    name: "맛있닭 소스 닭가슴살 20팩",
    category: "chicken",
    categoryLabel: "닭가슴살",
    price: "22,900원",
    link: "#",
    image: "🍗",
    description: "1팩 130g, 촉촉한 소스 닭가슴살",
  },
  {
    name: "바르닭 큐브 닭가슴살 30팩",
    category: "chicken",
    categoryLabel: "닭가슴살",
    price: "32,900원",
    originalPrice: "42,000원",
    discount: "-22%",
    link: "#",
    image: "🍗",
    description: "한입 크기 큐브, 간편하게 단백질 섭취",
  },
  // Shake
  {
    name: "랩노쉬 다이어트 쉐이크 14포",
    category: "shake",
    categoryLabel: "쉐이크/식대",
    price: "24,900원",
    originalPrice: "32,000원",
    discount: "-22%",
    link: "#",
    image: "🥤",
    description: "1포 200kcal 이하, 식사 대용",
  },
  {
    name: "칼로바이 프로틴 쉐이크 12개",
    category: "shake",
    categoryLabel: "쉐이크/식대",
    price: "21,900원",
    link: "#",
    image: "🥤",
    description: "RTD 간편 쉐이크, 단백질 20g",
  },
  {
    name: "다이어트 도시락 5팩",
    category: "shake",
    categoryLabel: "쉐이크/식대",
    price: "27,900원",
    originalPrice: "35,000원",
    discount: "-20%",
    link: "#",
    image: "🍱",
    description: "1팩 300~400kcal, 균형 잡힌 저칼로리 식단",
  },
  // Snack
  {
    name: "프로틴 바 12개입",
    category: "snack",
    categoryLabel: "다이어트 간식",
    price: "18,500원",
    originalPrice: "22,000원",
    discount: "-16%",
    link: "#",
    image: "🍫",
    description: "1개당 단백질 15g, 달콤한 초코맛",
  },
  {
    name: "그릭요거트 12개",
    category: "snack",
    categoryLabel: "다이어트 간식",
    price: "15,800원",
    link: "#",
    image: "🥣",
    description: "1개당 단백질 11g, 무지방 고단백",
  },
  {
    name: "곤약 젤리 20개입",
    category: "snack",
    categoryLabel: "다이어트 간식",
    price: "9,900원",
    link: "#",
    image: "🍬",
    description: "1개 6kcal, 다이어트 간식 대장",
  },
  // Zero drinks
  {
    name: "제로 콜라 24캔",
    category: "zero-drink",
    categoryLabel: "제로 음료",
    price: "16,800원",
    link: "#",
    image: "🥫",
    description: "0kcal, 탄산 욕구 해소",
  },
  {
    name: "제로 사이다 24캔",
    category: "zero-drink",
    categoryLabel: "제로 음료",
    price: "15,900원",
    link: "#",
    image: "🥫",
    description: "0kcal, 깔끔한 맛",
  },
  {
    name: "스파클링 워터 24캔",
    category: "zero-drink",
    categoryLabel: "제로 음료",
    price: "14,900원",
    originalPrice: "19,800원",
    discount: "-25%",
    link: "#",
    image: "💧",
    description: "0kcal, 천연 탄산수",
  },
  // Low cal
  {
    name: "곤약밥 12개입",
    category: "low-cal",
    categoryLabel: "곤약/저칼로리",
    price: "14,900원",
    link: "#",
    image: "🍚",
    description: "1개 15kcal, 밥 대신 곤약밥",
  },
  {
    name: "곤약면 12개입",
    category: "low-cal",
    categoryLabel: "곤약/저칼로리",
    price: "13,900원",
    link: "#",
    image: "🍜",
    description: "1개 10kcal, 면 대신 곤약면",
  },
  {
    name: "저칼로리 떡볶이 5개입",
    category: "low-cal",
    categoryLabel: "곤약/저칼로리",
    price: "11,900원",
    originalPrice: "15,000원",
    discount: "-21%",
    link: "#",
    image: "🍢",
    description: "곤약떡 사용, 일반 대비 70% 칼로리 감소",
  },
];

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filtered =
    selectedCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          홈
        </Link>
        <span className="mx-2">/</span>
        <span>다이어트 식품</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">
          다이어트 식품 최저가 비교
        </h1>
        <p className="mt-2 text-muted-foreground">
          단백질 보충제부터 저칼로리 간식까지, 다이어트에 필요한 식품을 한눈에 비교하세요.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              selectedCategory === cat.value
                ? "bg-primary font-medium text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product, i) => (
          <a
            key={`${product.name}-${i}`}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-muted text-3xl">
                    {product.image}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground">
                      {product.categoryLabel}
                    </p>
                    <p className="mt-0.5 text-sm font-medium leading-tight">
                      {product.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                      {product.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      {product.discount && (
                        <span className="text-sm font-bold text-red-500">
                          {product.discount}
                        </span>
                      )}
                      <span className="text-sm font-bold">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center gap-1 rounded-md bg-primary/5 py-2 text-xs font-medium text-primary">
                  최저가 보기
                  <ArrowRight className="h-3 w-3" />
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>

      {/* Disclosure */}
      <p className="mt-8 text-center text-xs text-muted-foreground">
        (사이트 운영을 위한 제휴 링크입니다)
      </p>

      {/* Calculator CTA */}
      <div className="mt-12 rounded-xl bg-primary/5 p-8 text-center">
        <h2 className="text-lg font-bold">내 다이어트 칼로리부터 계산해보세요</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          하루 권장 칼로리를 알면 식품 선택이 더 쉬워져요
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/calc/calorie"
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            칼로리 계산하기
          </Link>
          <Link
            href="/calc/bmr"
            className="rounded-lg bg-muted px-6 py-2.5 text-sm font-medium transition-colors hover:bg-muted/80"
          >
            기초대사량 계산하기
          </Link>
        </div>
      </div>
    </div>
  );
}
