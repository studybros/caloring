import Link from "next/link";
import Image from "next/image";
import {
  Flame,
  Activity,
  Scale,
  Target,
  Droplets,
  ArrowRight,
  TrendingDown,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { getHomepageProducts } from "@/data/products";

const calculators = [
  {
    title: "칼로리 계산기",
    description: "하루에 몇 칼로리를 먹어야 할까?",
    href: "/calc/calorie",
    icon: Flame,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    title: "기초대사량 계산기",
    description: "가만히 있어도 소모되는 칼로리",
    href: "/calc/bmr",
    icon: Activity,
    color: "text-rose-500",
    bgColor: "bg-rose-50 dark:bg-rose-950/30",
  },
  {
    title: "BMI 계산기",
    description: "내 체질량지수는 정상일까?",
    href: "/calc/bmi",
    icon: Scale,
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    title: "체지방 계산기",
    description: "내 체지방률은 몇 %일까?",
    href: "/calc/body-fat",
    icon: TrendingDown,
    color: "text-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-950/30",
  },
  {
    title: "적정 체중 계산기",
    description: "내 키에 맞는 건강한 체중은?",
    href: "/calc/ideal-weight",
    icon: Target,
    color: "text-amber-500",
    bgColor: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    title: "물 섭취량 계산기",
    description: "하루에 물을 얼마나 마셔야 할까?",
    href: "/calc/water",
    icon: Droplets,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
  },
];

const homepageProducts = getHomepageProducts(6);

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Hero */}
      <section className="py-12 text-center md:py-20">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          40kg 뺀 언니의{" "}
          <span className="text-primary">다이어트 비서</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          직접 해보고 알려주는 칼로리 계산기,
          <br className="hidden sm:block" />
          진짜 먹어본 다이어트 식품 비교까지.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/calc/calorie/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
          >
            <Flame className="h-4 w-4" />
            내 칼로리 계산하기
          </Link>
          <Link
            href="/diet/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-accent"
          >
            <BookOpen className="h-4 w-4" />
            식단 가이드 보기
          </Link>
        </div>
      </section>

      {/* Calculators Grid */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">언니가 매일 쓰는 계산기</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((calc) => (
            <Link key={calc.href} href={calc.href}>
              <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardHeader className="flex flex-row items-center gap-3 pb-2">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${calc.bgColor}`}
                  >
                    <calc.icon className={`h-5 w-5 ${calc.color}`} />
                  </div>
                  <CardTitle className="text-base">{calc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {calc.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Diet Guide Section */}
      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">언니의 식단 노하우</h2>
          <Link
            href="/diet"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            전체보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "간헐적 단식 가이드", href: "/diet/intermittent-fasting/", emoji: "⏰", desc: "16:8 단식법의 원리, 효과, 식단표" },
            { title: "1200칼로리 식단표", href: "/diet/1200kcal/", emoji: "📋", desc: "일주일 저칼로리 식단 완벽 가이드" },
            { title: "고단백 다이어트", href: "/diet/high-protein/", emoji: "💪", desc: "근육은 지키고 체지방만 빼는 식단" },
          ].map((guide) => (
            <Link key={guide.href} href={guide.href}>
              <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="flex items-start gap-3 p-4">
                  <span className="mt-0.5 text-2xl">{guide.emoji}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">{guide.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{guide.desc}</p>
                  </div>
                  <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">언니가 찾은 착한가격</h2>
          <Link
            href="/products"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            전체보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
          {homepageProducts.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}/`}>
              <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="p-3">
                  <div className="relative flex h-20 items-center justify-center rounded bg-muted overflow-hidden">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-contain p-1"
                        sizes="(max-width: 640px) 50vw, 33vw"
                        unoptimized
                      />
                    ) : (
                      <span className="text-2xl">{product.image ?? "📦"}</span>
                    )}
                    {product.naverRank && product.naverRank <= 10 && (
                      <span className="absolute left-1 top-1 rounded bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                        {product.naverRank}위
                      </span>
                    )}
                  </div>
                  <div className="mt-2">
                    <p className="text-xs text-muted-foreground">{product.category}</p>
                    <p className="mt-0.5 line-clamp-2 text-sm font-medium leading-tight">
                      {product.name}
                    </p>
                    <p className="mt-1 text-sm font-bold text-primary">{product.price}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
