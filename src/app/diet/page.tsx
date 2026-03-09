import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ChevronRight, Flame, Utensils, Dumbbell, Heart, Apple } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { createMetadata } from "@/lib/seo/metadata";
import { createArticleSchema, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "다이어트 식단 가이드 — 방법별·칼로리별·목적별 총정리",
  description:
    "간헐적 단식, 저탄고지, 고단백, 1200칼로리 식단 등 다이어트 식단을 방법별·칼로리별·목적별로 총정리했습니다. 나에게 맞는 다이어트 식단을 찾아보세요.",
  path: "/diet/",
  keywords: [
    "다이어트 식단",
    "다이어트 식단 추천",
    "다이어트 방법",
    "간헐적 단식",
    "저탄고지 식단",
    "고단백 식단",
    "1200칼로리 식단",
    "다이어트 식단표",
    "칼로리별 식단",
  ],
});

const CATEGORIES = [
  {
    title: "다이어트 방법",
    icon: Flame,
    description: "검증된 다이어트 방법의 원리, 효과, 식단표",
    items: [
      { title: "간헐적 단식 (16:8)", href: "/diet/intermittent-fasting/", emoji: "⏰", desc: "시간 제한 식사법의 모든 것", hot: true },
      { title: "저탄고지 (키토)", href: "/diet/keto/", emoji: "🥑", desc: "탄수화물을 줄이고 지방을 늘리는 식단" },
      { title: "지중해식 다이어트", href: "/diet/mediterranean/", emoji: "🫒", desc: "2025 최고의 식단으로 선정" },
      { title: "고단백 다이어트", href: "/diet/high-protein/", emoji: "💪", desc: "근육은 지키고 체지방만 빼는 식단", hot: true },
      { title: "혈당 다이어트 (GI)", href: "/diet/blood-sugar/", emoji: "📊", desc: "혈당 지수로 관리하는 식단" },
      { title: "비건 다이어트", href: "/diet/vegan/", emoji: "🥬", desc: "식물성 식단으로 건강하게" },
    ],
  },
  {
    title: "칼로리별 식단표",
    icon: Utensils,
    description: "목표 칼로리에 맞춘 일주일 식단표",
    items: [
      { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋", desc: "빠른 감량을 위한 저칼로리 식단", hot: true },
      { title: "1500kcal 식단표", href: "/diet/1500kcal/", emoji: "📋", desc: "건강한 감량 속도의 균형 식단" },
      { title: "1800kcal 식단표", href: "/diet/1800kcal/", emoji: "📋", desc: "활동적인 여성을 위한 식단" },
      { title: "2000kcal 식단표", href: "/diet/2000kcal/", emoji: "📋", desc: "남성 감량 / 여성 유지 식단" },
      { title: "2500kcal 식단표", href: "/diet/2500kcal/", emoji: "📋", desc: "벌크업·근육 증가용 식단" },
    ],
  },
  {
    title: "목적별 가이드",
    icon: Dumbbell,
    description: "운동 목표에 맞춘 식단 전략",
    items: [
      { title: "체지방 감량 식단", href: "/diet/fat-loss/", emoji: "🔥", desc: "체지방률을 효과적으로 낮추는 법" },
      { title: "벌크업 식단", href: "/diet/bulk-up/", emoji: "💪", desc: "근육량 증가를 위한 고칼로리 식단" },
      { title: "린매스업 식단", href: "/diet/lean-mass/", emoji: "🏋️", desc: "체지방은 유지하고 근육만 늘리기" },
      { title: "직장인 다이어트", href: "/diet/office-worker/", emoji: "💼", desc: "바쁜 직장인을 위한 현실 식단" },
    ],
  },
  {
    title: "음식·식재료 가이드",
    icon: Apple,
    description: "다이어트에 도움되는 음식과 활용법",
    items: [
      { title: "한국 음식 칼로리표", href: "/diet/calorie-table/", emoji: "🍚", desc: "자주 먹는 한국 음식 칼로리 총정리" },
      { title: "편의점 다이어트", href: "/diet/convenience-store/", emoji: "🏪", desc: "편의점에서 고르는 다이어트 식품" },
      { title: "다이어트 간식 추천", href: "/diet/snacks/", emoji: "🍫", desc: "죄책감 없는 간식 리스트" },
      { title: "외식 가이드", href: "/diet/eating-out/", emoji: "🍽️", desc: "외식할 때 현명하게 고르는 법" },
    ],
  },
  {
    title: "건강 연계 식단",
    icon: Heart,
    description: "건강 상태에 맞춘 맞춤 식단",
    items: [
      { title: "당뇨 식단", href: "/diet/diabetes/", emoji: "💊", desc: "혈당 관리를 위한 식단 원칙" },
      { title: "고혈압 식단 (DASH)", href: "/diet/dash/", emoji: "❤️", desc: "혈압을 낮추는 DASH 식단" },
      { title: "장건강 식단", href: "/diet/gut-health/", emoji: "🦠", desc: "장내 미생물을 살리는 식단" },
    ],
  },
];

export default function DietIndexPage() {
  const jsonLd = [
    createArticleSchema({
      title: "다이어트 식단 가이드",
      description: "다이어트 식단을 방법별·칼로리별·목적별로 총정리한 가이드",
      url: "https://caloring.kr/diet/",
      datePublished: "2026-03-09",
    }),
    createBreadcrumbSchema([{ label: "다이어트 식단 가이드" }]),
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">홈</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">다이어트 식단 가이드</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <BookOpen className="h-3 w-3" />
          다이어트 백과
        </div>
        <h1 className="mb-3 text-2xl font-bold md:text-3xl">
          다이어트 식단 가이드
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          간헐적 단식부터 지중해식까지, 검증된 다이어트 방법과 칼로리별 식단표를
          한곳에 모았습니다.
          <br className="hidden sm:block" />
          나에게 맞는 다이어트를 찾고, 계산기로 목표를 세워보세요.
        </p>
      </header>

      {/* Quick CTA */}
      <div className="mb-10 rounded-2xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          어떤 식단이 나에게 맞을지 모르겠다면?
        </p>
        <p className="mt-1 font-bold">내 기초대사량부터 계산해보세요</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          <Link
            href="/calc/calorie/"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            칼로리 계산기
          </Link>
          <Link
            href="/calc/bmr/"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 dark:bg-card dark:hover:bg-muted"
          >
            기초대사량 계산기
          </Link>
        </div>
      </div>

      {/* Category Sections */}
      <div className="space-y-10">
        {CATEGORIES.map((cat) => (
          <section key={cat.title}>
            <div className="flex items-center gap-2 mb-4">
              <cat.icon className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold">{cat.title}</h2>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {cat.description}
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {cat.items.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
                    <CardContent className="flex items-start gap-3 p-4">
                      <span className="mt-0.5 text-2xl">{item.emoji}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-sm">
                            {item.title}
                          </span>
                          {"hot" in item && item.hot && (
                            <span className="rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600 dark:bg-red-950 dark:text-red-400">
                              HOT
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="mt-12 text-center text-[11px] text-muted-foreground/60">
        본 콘텐츠는 일반적인 정보 제공 목적이며 의료 전문가의 조언을 대체하지
        않습니다.
      </p>
    </div>
  );
}
