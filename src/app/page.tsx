import Link from "next/link";
import {
  Flame,
  Activity,
  Scale,
  Target,
  Droplets,
  ShoppingBasket,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

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

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Hero */}
      <section className="py-12 text-center md:py-20">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
          칼로리 계산,{" "}
          <span className="text-primary">이제 칼로링.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          다이어트 계산기로 내 몸에 맞는 칼로리를 계산하고,
          <br className="hidden sm:block" />
          다이어트 식품 최저가를 비교해보세요.
        </p>
      </section>

      {/* Calculators Grid */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">다이어트 계산기</h2>
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

      {/* Products Section */}
      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">다이어트 식품 최저가</h2>
          <Link
            href="/products"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
          >
            전체보기
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <ShoppingBasket className="mb-4 h-12 w-12 text-muted-foreground/50" />
            <p className="text-lg font-medium text-muted-foreground">
              곧 오픈 예정
            </p>
            <p className="mt-1 text-sm text-muted-foreground/70">
              단백질 보충제, 다이어트 간식, 제로 음료 최저가를 비교해드려요
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
