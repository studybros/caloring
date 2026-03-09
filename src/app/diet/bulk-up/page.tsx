import type { Metadata } from "next";
import Link from "next/link";
import { WikiLayout } from "@/components/wiki/WikiLayout";
import { createMetadata } from "@/lib/seo/metadata";
import {
  createArticleSchema,
  createFAQSchema,
  createBreadcrumbSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "벌크업 식단 가이드 — 근육 증가 식단표·클린벌크·칼로리 계산 총정리",
  description:
    "벌크업의 원리부터 클린벌크 vs 더티벌크 비교, 하루 칼로리·단백질 목표 계산법, 일주일 벌크업 식단표까지 총정리. 마른 체질도 근육을 키울 수 있는 식단 전략을 알아보세요.",
  path: "/diet/bulk-up/",
  keywords: [
    "벌크업 식단",
    "근육 증가 식단",
    "벌크업 식단표",
    "마른 체질 식단",
    "벌크업 칼로리",
    "클린벌크",
    "더티벌크",
    "근육 키우기",
    "체중 증가 식단",
    "벌크업 방법",
  ],
});

const tocItems = [
  { id: "what-is", title: "벌크업이란?" },
  { id: "clean-vs-dirty", title: "클린벌크 vs 더티벌크" },
  { id: "calorie-calc", title: "벌크업 칼로리·단백질 목표 계산" },
  { id: "nutrition", title: "벌크업 영양소 비율과 식품" },
  { id: "meal-plan", title: "일주일 벌크업 식단표" },
  { id: "tips", title: "벌크업 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

const faqItems = [
  {
    question: "마른 체질인데 벌크업이 가능한가요?",
    answer:
      "네, 가능합니다. 마른 체질(하드게이너)은 대사량이 높은 경우가 많아 더 많은 칼로리를 섭취해야 합니다. TDEE 대비 +500~700kcal를 목표로 하고, 식사 횟수를 5~6끼로 나누면 총 칼로리를 채우기 수월합니다. 꾸준한 근력 운동과 함께하면 마른 체질도 충분히 근육을 키울 수 있습니다.",
  },
  {
    question: "벌크업 하면 뱃살도 같이 찌나요?",
    answer:
      "어느 정도의 체지방 증가는 불가피합니다. 하지만 클린벌크를 선택하면 체지방 증가를 최소화할 수 있습니다. TDEE 대비 +300~500kcal 수준으로 잉여 칼로리를 관리하고, 양질의 음식을 섭취하면 체지방 대비 근육 비율을 더 높게 유지할 수 있습니다.",
  },
  {
    question: "벌크업 기간은 얼마나 해야 하나요?",
    answer:
      "일반적으로 3~6개월을 한 사이클로 권장합니다. 너무 짧으면 유의미한 근육량 증가가 어렵고, 너무 길면 체지방이 과도하게 증가할 수 있습니다. 벌크업 후에는 커팅(감량) 기간을 가져 체지방을 정리하는 것이 일반적입니다.",
  },
  {
    question: "프로틴 보충제는 반드시 필요한가요?",
    answer:
      "필수는 아닙니다. 음식만으로 목표 단백질을 채울 수 있다면 보충제가 없어도 됩니다. 다만 하루 150g 이상의 단백질을 음식만으로 섭취하기 어려운 경우가 많아 프로틴 파우더를 활용하면 편리합니다. 보충제는 말 그대로 '보충'이지 필수가 아닙니다.",
  },
  {
    question: "여성도 벌크업을 해도 되나요?",
    answer:
      "물론입니다. 여성도 근력 운동과 적절한 칼로리 잉여를 통해 근육을 키울 수 있습니다. 여성 호르몬 특성상 남성처럼 큰 근육이 만들어지기 어렵기 때문에, '몸이 커질까봐' 걱정할 필요가 없습니다. 오히려 기초대사량이 높아져 장기적으로 살이 덜 찌는 체질이 됩니다.",
  },
  {
    question: "벌크업 중 유산소 운동은 해야 하나요?",
    answer:
      "가벼운 유산소(주 2~3회, 20~30분)는 심폐 건강과 인슐린 감수성 유지를 위해 추천합니다. 다만 과도한 유산소는 칼로리 소모를 늘려 벌크업 효과를 떨어뜨릴 수 있습니다. 유산소를 많이 한 날은 추가 칼로리를 보충해주는 것이 좋습니다.",
  },
];

const relatedCalc = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📐" },
  { title: "체지방률 계산기", href: "/calc/body-fat/", emoji: "📊" },
];

const relatedProducts = [
  { title: "프로틴 최저가 비교", href: "/products/protein/", emoji: "🥤" },
  { title: "닭가슴살 최저가 비교", href: "/products/chicken-breast/", emoji: "🍗" },
  { title: "프로틴바 최저가 비교", href: "/products/protein-bar/", emoji: "🍫" },
  { title: "그릭요거트 최저가 비교", href: "/products/greek-yogurt/", emoji: "🥛" },
];

const relatedDiet = [
  { title: "고단백 식단 가이드", href: "/diet/high-protein/", emoji: "🥩" },
  { title: "린매스업 식단 가이드", href: "/diet/lean-mass/", emoji: "🏋️" },
  { title: "체지방 감량 가이드", href: "/diet/fat-loss/", emoji: "🔥" },
  { title: "직장인 다이어트 가이드", href: "/diet/office-worker/", emoji: "💼" },
];

const breadcrumbs = [
  { label: "홈", href: "/" },
  { label: "다이어트 식단 가이드", href: "/diet/" },
  { label: "벌크업 식단" },
];

const jsonLd = [
  createArticleSchema({
    title: "벌크업 식단 가이드 — 근육 증가 식단표·클린벌크·칼로리 계산 총정리",
    description:
      "벌크업의 원리부터 클린벌크 vs 더티벌크, 일주일 식단표까지 총정리.",
    url: "https://caloring.kr/diet/bulk-up/",
    datePublished: "2026-03-10",
  }),
  createFAQSchema(faqItems),
  createBreadcrumbSchema([
    { label: "다이어트 식단 가이드", href: "/diet/" },
    { label: "벌크업 식단" },
  ]),
];

export default function BulkUpDietPage() {
  return (
    <WikiLayout
      title="벌크업 식단 완벽 가이드"
      description="근육을 키우고 싶은데 뭘 먹어야 할지 모르겠다면? 벌크업 식단의 모든 것을 알려줄게."
      breadcrumbs={breadcrumbs}
      toc={tocItems}
      faqItems={faqItems}
      relatedCalc={relatedCalc}
      relatedProducts={relatedProducts}
      relatedDiet={relatedDiet}
      jsonLd={jsonLd}
      updatedAt="2026-03-10"
    >
      {/* Key Summary Box */}
      <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <p className="mb-2 text-sm text-muted-foreground">벌크업은 칼로리 잉여 + 근력 운동으로 근육을 키우는 전략이야. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">칼로리 잉여</strong>: TDEE 대비
            +300~500kcal (클린벌크 기준)
          </li>
          <li>
            <strong className="text-foreground">단백질 목표</strong>: 체중 1kg당
            1.6~2.2g
          </li>
          <li>
            <strong className="text-foreground">근력 운동</strong>: 주 4~5회,
            점진적 과부하 원칙
          </li>
          <li>
            <strong className="text-foreground">기간</strong>: 3~6개월 사이클 후
            커팅(감량) 진행
          </li>
        </ul>
      </div>

      {/* Section 1: What is Bulk Up */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        벌크업이란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">벌크업(Bulk Up)</strong>은 의도적으로
        칼로리 잉여 상태를 만들어{" "}
        <strong className="text-foreground">근육량을 늘리는 식단+운동 전략</strong>
        이야. 쉽게 말하면, 소비하는 칼로리보다 더 많이 먹으면서 열심히 근력
        운동을 해서 그 잉여 에너지를 근육 합성에 쓰는 거지.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        우리 몸이 근육을 새로 만들려면{" "}
        <strong className="text-foreground">에너지 잉여(칼로리 서플러스)</strong>
        가 필요해. 칼로리 적자 상태에서는 근육 합성이 제한되기 때문에, 근육을
        키우고 싶다면 먹는 양을 늘려야 하는 거야. 물론 아무거나 많이 먹으면
        체지방만 늘어나니까, 전략적으로 먹어야 해.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업의 전제 조건은{" "}
        <strong className="text-foreground">꾸준한 근력 운동</strong>이야. 칼로리
        잉여만 만들고 운동을 안 하면 그냥 살만 찌거든. 운동이라는 자극이 있어야
        잉여 에너지가 근육 합성에 쓰이는 거야.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        내 하루 소비 칼로리(TDEE)를 먼저 알아야 벌크업 식단을 짤 수 있어.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        에서 확인해봐.
      </p>

      {/* Section 2: Clean vs Dirty */}
      <h2 id="clean-vs-dirty" className="mt-10 mb-4 text-xl font-bold">
        클린벌크 vs 더티벌크
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업은 크게 두 가지 방식으로 나뉘어:{" "}
        <strong className="text-foreground">클린벌크</strong>와{" "}
        <strong className="text-foreground">더티벌크</strong>. 어떤 방식을
        선택하느냐에 따라 결과가 크게 달라져.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">구분</th>
              <th className="px-4 py-3 text-left font-semibold">클린벌크</th>
              <th className="px-4 py-3 text-left font-semibold">더티벌크</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">칼로리 잉여</td>
              <td className="px-4 py-3">TDEE +300~500kcal</td>
              <td className="px-4 py-3">TDEE +700~1000kcal+</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">음식 선택</td>
              <td className="px-4 py-3">양질의 영양소 위주</td>
              <td className="px-4 py-3">가리지 않음 (정크푸드 포함)</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">체지방 증가</td>
              <td className="px-4 py-3">최소화</td>
              <td className="px-4 py-3">상당량 증가</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">근육 증가</td>
              <td className="px-4 py-3">느리지만 깔끔</td>
              <td className="px-4 py-3">빠르지만 지방도 함께</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">커팅 필요성</td>
              <td className="px-4 py-3">짧은 커팅 기간</td>
              <td className="px-4 py-3">긴 커팅 기간 필요</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">추천 대상</td>
              <td className="px-4 py-3">대부분의 사람</td>
              <td className="px-4 py-3">극도의 하드게이너</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">클린벌크 (추천)</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">클린벌크</strong>는 칼로리 잉여를{" "}
        <strong className="text-foreground">소폭(+300~500kcal)</strong>으로
        유지하면서 양질의 음식을 먹는 방식이야. 체지방 증가를 최소화하면서
        근육을 키울 수 있어서 대부분의 사람들에게 추천되는 방법이야.
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>체지방 증가가 적어 커팅 기간을 줄일 수 있음</li>
        <li>건강하고 지속 가능한 식단</li>
        <li>근육 대비 지방 비율이 좋음</li>
        <li>단점: 근육 증가 속도가 상대적으로 느림</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">더티벌크</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">더티벌크</strong>는 음식 종류를 가리지
        않고 대량으로 먹는 방식이야. 피자, 치킨, 햄버거, 라면 등 고칼로리
        음식을 제한 없이 먹어. 칼로리를 빠르게 채울 수 있지만, 체지방도 크게
        증가하는 게 단점이야.
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>칼로리를 쉽게 채울 수 있어 하드게이너에게 유리</li>
        <li>먹는 즐거움이 있음</li>
        <li>단점: 체지방이 많이 증가, 긴 커팅 기간 필요</li>
        <li>단점: 인슐린 저항성, 소화 문제 등 건강 이슈 가능</li>
      </ul>

      <div className="my-6 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">결론: 클린벌크를 추천해</p>
        <p className="text-sm text-muted-foreground">
          연구에 따르면 칼로리 잉여가 크다고 근육이 더 많이 생기지는 않아. 일정
          수준을 넘는 잉여 칼로리는 전부 체지방으로 저장되거든. 클린벌크로 +300~500kcal만
          잉여를 만들어도 근합성에 충분해.
        </p>
      </div>

      {/* Section 3: Calorie Calculation */}
      <h2 id="calorie-calc" className="mt-10 mb-4 text-xl font-bold">
        벌크업 칼로리·단백질 목표 계산
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 식단의 시작은{" "}
        <strong className="text-foreground">내 TDEE(하루 총 에너지 소비량)를 아는 것</strong>
        이야.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        에서 TDEE를 계산하고, 여기에 잉여 칼로리를 더하면 벌크업 목표 칼로리가
        나와.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">체중</th>
              <th className="px-4 py-3 text-left font-semibold">TDEE (예상)</th>
              <th className="px-4 py-3 text-left font-semibold">벌크업 목표</th>
              <th className="px-4 py-3 text-left font-semibold">단백질 목표</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3">55kg</td>
              <td className="px-4 py-3">1800kcal</td>
              <td className="px-4 py-3">2100~2300kcal</td>
              <td className="px-4 py-3">88~121g</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">65kg</td>
              <td className="px-4 py-3">2200kcal</td>
              <td className="px-4 py-3">2500~2700kcal</td>
              <td className="px-4 py-3">104~143g</td>
            </tr>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">75kg</td>
              <td className="px-4 py-3">2500kcal</td>
              <td className="px-4 py-3 font-semibold">2800~3000kcal</td>
              <td className="px-4 py-3 font-semibold">120~165g</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">85kg</td>
              <td className="px-4 py-3">2800kcal</td>
              <td className="px-4 py-3">3100~3300kcal</td>
              <td className="px-4 py-3">136~187g</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">
        * TDEE는 활동량에 따라 크게 달라집니다. 정확한 수치는{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">칼로리 계산기</Link>
        에서 확인하세요.
      </p>

      <div className="my-6 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">계산 예시: 70kg 남성, 주 4회 운동</p>
        <p className="text-sm text-muted-foreground">
          TDEE: 약 <strong className="text-foreground">2400kcal</strong><br />
          벌크업 목표: 2400 + 400 = <strong className="text-foreground">2800kcal</strong><br />
          단백질: 70 x 2.0 = <strong className="text-foreground">140g</strong><br />
          탄수화물: (2800 x 0.45) / 4 = <strong className="text-foreground">315g</strong><br />
          지방: (2800 x 0.25) / 9 = <strong className="text-foreground">78g</strong>
        </p>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        마른 체질(하드게이너)을 위한 추가 팁
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        마른 체질은 대사량이 높거나 식욕이 적어서 칼로리를 채우기 어려운 경우가
        많아. 이런 경우에는:
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>
          <strong className="text-foreground">식사 횟수를 늘려</strong>: 3끼 대신
          5~6끼로 나누면 한 번에 적게 먹어도 총 칼로리를 채울 수 있어
        </li>
        <li>
          <strong className="text-foreground">칼로리 밀도가 높은 음식</strong>:
          견과류, 아보카도, 올리브오일, 땅콩버터, 바나나 등
        </li>
        <li>
          <strong className="text-foreground">액체 칼로리 활용</strong>: 프로틴
          쉐이크에 바나나+오트밀+꿀을 넣으면 한 잔에 500kcal 이상
        </li>
        <li>
          <strong className="text-foreground">취침 전 간식</strong>: 그릭요거트+
          그래놀라, 땅콩버터 토스트 등
        </li>
      </ul>

      {/* Section 4: Nutrition */}
      <h2 id="nutrition" className="mt-10 mb-4 text-xl font-bold">
        벌크업 영양소 비율과 식품
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 시 권장하는 영양소 비율은{" "}
        <strong className="text-foreground">
          단백질 25~30% / 탄수화물 45~50% / 지방 20~25%
        </strong>
        야. 다이어트와 비교하면 탄수화물 비율이 높은데, 근력 운동의 에너지원이
        되고 인슐린 분비를 통해 근합성을 돕기 때문이야.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">영양소</th>
              <th className="px-4 py-3 text-left font-semibold">비율</th>
              <th className="px-4 py-3 text-left font-semibold">2800kcal 기준</th>
              <th className="px-4 py-3 text-left font-semibold">역할</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-semibold">단백질</td>
              <td className="px-4 py-3">25~30%</td>
              <td className="px-4 py-3">175~210g</td>
              <td className="px-4 py-3 text-muted-foreground">근합성 원료</td>
            </tr>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">탄수화물</td>
              <td className="px-4 py-3 font-semibold">45~50%</td>
              <td className="px-4 py-3 font-semibold">315~350g</td>
              <td className="px-4 py-3 text-muted-foreground">운동 에너지, 인슐린 분비</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">지방</td>
              <td className="px-4 py-3">20~25%</td>
              <td className="px-4 py-3">62~78g</td>
              <td className="px-4 py-3 text-muted-foreground">호르몬 합성 (테스토스테론)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">벌크업 추천 식품</h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">카테고리</th>
              <th className="px-4 py-3 text-left font-semibold">추천 식품</th>
              <th className="px-4 py-3 text-left font-semibold">포인트</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">단백질</td>
              <td className="px-4 py-3">닭가슴살, 소고기, 연어, 계란, 두부, 프로틴</td>
              <td className="px-4 py-3 text-muted-foreground">매 끼니 30~40g 이상</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">탄수화물</td>
              <td className="px-4 py-3">현미밥, 고구마, 오트밀, 통밀빵, 바나나, 파스타</td>
              <td className="px-4 py-3 text-muted-foreground">운동 전후에 집중 배치</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">지방</td>
              <td className="px-4 py-3">아보카도, 견과류, 올리브오일, 연어, 계란 노른자</td>
              <td className="px-4 py-3 text-muted-foreground">호르몬 균형 유지</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">채소</td>
              <td className="px-4 py-3">브로콜리, 시금치, 파프리카, 양배추</td>
              <td className="px-4 py-3 text-muted-foreground">비타민·식이섬유 보충</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 식단에 필요한{" "}
        <Link
          href="/products/protein/"
          className="text-primary hover:underline"
        >
          프로틴
        </Link>
        ,{" "}
        <Link
          href="/products/chicken-breast/"
          className="text-primary hover:underline"
        >
          닭가슴살
        </Link>{" "}
        등은{" "}
        <Link href="/products/" className="text-primary hover:underline">
          다이어트 식품 최저가 비교
        </Link>
        에서 합리적으로 구매할 수 있어.
      </p>

      {/* Section 5: Weekly Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 벌크업 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          70kg 남성, 하루 2800kcal, 단백질 150g 목표
        </strong>{" "}
        기준으로 구성한 일주일 클린벌크 식단표야.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        로 자신의 목표 칼로리를 먼저 확인하고, 비율에 맞게 조절해.
      </p>

      {[
        {
          day: "월요일",
          meals: [
            { time: "아침", menu: "오트밀 80g + 바나나 + 프로틴 1스쿱 + 꿀", protein: 35, cal: 550 },
            { time: "점심", menu: "닭가슴살 볶음밥 (현미) + 된장찌개 + 나물", protein: 40, cal: 650 },
            { time: "간식1", menu: "삶은 계란 3개 + 고구마 1개", protein: 22, cal: 350 },
            { time: "저녁", menu: "소고기 스테이크 200g + 현미밥 1공기 + 샐러드", protein: 45, cal: 700 },
            { time: "간식2", menu: "프로틴 쉐이크 + 바나나 + 땅콩버터 1T", protein: 32, cal: 450 },
          ],
        },
        {
          day: "화요일",
          meals: [
            { time: "아침", menu: "통밀 토스트 2장 + 스크램블 에그 3개 + 아보카도", protein: 28, cal: 550 },
            { time: "점심", menu: "제육볶음 + 현미밥 1공기 + 두부구이", protein: 38, cal: 700 },
            { time: "간식1", menu: "프로틴바 1개 + 견과류 30g", protein: 25, cal: 380 },
            { time: "저녁", menu: "연어 스테이크 + 고구마 + 구운 채소", protein: 35, cal: 650 },
            { time: "간식2", menu: "그릭요거트 300g + 그래놀라 + 꿀", protein: 22, cal: 400 },
          ],
        },
        {
          day: "수요일",
          meals: [
            { time: "아침", menu: "프로틴 팬케이크 3장 + 메이플시럽 + 바나나", protein: 30, cal: 520 },
            { time: "점심", menu: "불고기 덮밥 (현미) + 계란후라이 + 미역국", protein: 38, cal: 680 },
            { time: "간식1", menu: "삶은 계란 2개 + 식빵 + 땅콩버터", protein: 22, cal: 400 },
            { time: "저녁", menu: "닭다리살 구이 + 파스타 + 샐러드", protein: 40, cal: 700 },
            { time: "간식2", menu: "프로틴 쉐이크 + 오트밀", protein: 30, cal: 400 },
          ],
        },
        {
          day: "목요일",
          meals: [
            { time: "아침", menu: "두유 + 통밀빵 2장 + 치즈 + 삶은 계란 2개", protein: 28, cal: 500 },
            { time: "점심", menu: "돼지 등심 카츠 + 현미밥 1공기 + 된장국", protein: 35, cal: 700 },
            { time: "간식1", menu: "고구마 2개 + 닭가슴살 육포 50g", protein: 27, cal: 400 },
            { time: "저녁", menu: "소고기 불고기 + 잡곡밥 1공기 + 나물 3종", protein: 38, cal: 650 },
            { time: "간식2", menu: "바나나 쉐이크 (우유 + 바나나 + 프로틴)", protein: 28, cal: 420 },
          ],
        },
        {
          day: "금요일",
          meals: [
            { time: "아침", menu: "오트밀 80g + 프로틴 + 블루베리 + 아몬드", protein: 32, cal: 500 },
            { time: "점심", menu: "참치 김밥 2줄 + 계란찜", protein: 30, cal: 650 },
            { time: "간식1", menu: "프로틴바 1개 + 바나나", protein: 22, cal: 330 },
            { time: "저녁", menu: "삼겹살 구이 200g + 현미밥 + 쌈채소", protein: 30, cal: 750 },
            { time: "간식2", menu: "그릭요거트 200g + 견과류 + 꿀", protein: 18, cal: 350 },
          ],
        },
        {
          day: "토요일",
          meals: [
            { time: "아침", menu: "프렌치토스트 (통밀) 2장 + 계란 + 시럽", protein: 20, cal: 480 },
            { time: "점심", menu: "소고기 카레 (현미밥) + 샐러드 + 계란후라이", protein: 35, cal: 700 },
            { time: "간식1", menu: "삶은 계란 3개 + 고구마 1개", protein: 22, cal: 350 },
            { time: "저녁", menu: "닭가슴살 파스타 + 마늘빵 + 수프", protein: 38, cal: 750 },
            { time: "간식2", menu: "프로틴 쉐이크 + 바나나", protein: 30, cal: 380 },
          ],
        },
        {
          day: "일요일",
          meals: [
            { time: "아침", menu: "아보카도 토스트 2장 + 스크램블 에그 3개", protein: 25, cal: 550 },
            { time: "점심", menu: "김치찌개 + 현미밥 1공기 + 계란말이 + 두부", protein: 35, cal: 650 },
            { time: "간식1", menu: "프로틴바 + 우유 1잔", protein: 28, cal: 380 },
            { time: "저녁", menu: "연어 덮밥 + 미소된장국 + 샐러드", protein: 35, cal: 650 },
            { time: "간식2", menu: "땅콩버터 바나나 쉐이크 (프로틴 추가)", protein: 30, cal: 480 },
          ],
        },
      ].map((day) => (
        <div key={day.day} className="my-4">
          <h3 className="mt-6 mb-3 text-lg font-semibold">{day.day}</h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="px-4 py-2 text-left font-semibold">시간</th>
                  <th className="px-4 py-2 text-left font-semibold">메뉴</th>
                  <th className="px-4 py-2 text-right font-semibold">단백질</th>
                  <th className="px-4 py-2 text-right font-semibold">칼로리</th>
                </tr>
              </thead>
              <tbody>
                {day.meals.map((meal, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-4 py-2 font-medium">{meal.time}</td>
                    <td className="px-4 py-2">{meal.menu}</td>
                    <td className="px-4 py-2 text-right font-semibold text-primary">
                      {meal.protein}g
                    </td>
                    <td className="px-4 py-2 text-right text-muted-foreground">
                      {meal.cal}kcal
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-border bg-muted/30">
                  <td className="px-4 py-2 font-bold" colSpan={2}>
                    일일 합계
                  </td>
                  <td className="px-4 py-2 text-right font-bold text-primary">
                    {day.meals.reduce((sum, m) => sum + m.protein, 0)}g
                  </td>
                  <td className="px-4 py-2 text-right font-bold">
                    {day.meals.reduce((sum, m) => sum + m.cal, 0)}kcal
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Section 6: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        벌크업 성공 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 점진적 과부하 원칙을 지켜</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업의 핵심은 식단이 아니라{" "}
        <strong className="text-foreground">점진적 과부하(Progressive Overload)</strong>
        야. 매주 조금씩 무게를 올리거나 반복 횟수를 늘려야 근육이 계속
        성장해. 같은 무게로 같은 운동을 반복하면 근육 성장은 멈춰.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 체중 증가 속도를 모니터링해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        클린벌크 기준{" "}
        <strong className="text-foreground">한 달에 1~2kg</strong> 정도 체중이
        느는 게 적정이야. 이보다 빠르면 체지방이 과도하게 증가하고 있을 수
        있고, 이보다 느리면 칼로리가 부족한 거야. 매주 같은 조건에서 체중을
        측정해봐.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 운동 전후 영양 섭취에 신경 써</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">운동 1~2시간 전</strong>에
        탄수화물+단백질을 섭취하면 운동 퍼포먼스가 올라가고,{" "}
        <strong className="text-foreground">운동 후 30분~1시간 이내</strong>에
        프로틴+탄수화물을 섭취하면 근합성이 촉진돼.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 수면은 근육의 황금시간</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        근육은 운동할 때가 아니라{" "}
        <strong className="text-foreground">쉴 때(특히 수면 중)</strong>
        성장해. 성장호르몬은 깊은 수면 단계에서 가장 많이 분비되니까, 최소{" "}
        <strong className="text-foreground">7~8시간</strong>은 자야 해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 크레아틴 보충제 고려</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">크레아틴</strong>은 가장 많은 연구로
        효과가 입증된 보충제 중 하나야. 근력·근지구력·근육량 증가에 도움을
        줘. 하루 3~5g을 물에 타서 꾸준히 섭취하면 돼.
      </p>

      {/* Section 7: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 체지방률 관리</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 중이라도{" "}
        <strong className="text-foreground">체지방률이 20%(남성) / 30%(여성)를 넘으면</strong>{" "}
        커팅을 시작하는 것을 권장해. 체지방이 너무 높아지면 인슐린 저항성이
        생기고, 근합성 효율도 떨어져. 정기적으로{" "}
        <Link
          href="/calc/body-fat/"
          className="text-primary hover:underline"
        >
          체지방률 계산기
        </Link>
        로 체크해봐.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 소화 건강 관리</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        평소보다 많은 양을 먹기 때문에 소화 불량이 올 수 있어. 식사를 여러 끼로
        나누고, 식이섬유가 풍부한 채소를 함께 먹고, 천천히 씹어 먹는 습관이
        중요해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 운동 없는 벌크업은 의미 없어</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        다시 한번 강조하지만,{" "}
        <strong className="text-foreground">근력 운동 없이 많이 먹으면 그건 그냥 살찌는 거야.</strong>{" "}
        벌크업은 반드시 체계적인 근력 운동과 함께해야 해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 벌크업 기간을 정해둬</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        무한정 벌크업을 하면 체지방이 과도하게 증가해. 보통{" "}
        <strong className="text-foreground">3~6개월 벌크업 → 2~3개월 커팅</strong>
        을 한 사이클로 진행해. 커팅 시에는{" "}
        <Link
          href="/diet/fat-loss/"
          className="text-primary hover:underline"
        >
          체지방 감량 가이드
        </Link>
        를 참고해.
      </p>

      {/* CTA Box */}
      <div className="my-10 rounded-2xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          벌크업의 시작은 내 목표 칼로리를 아는 것!
        </p>
        <p className="mb-4 font-bold">
          TDEE를 계산하고 벌크업 칼로리 목표를 세워보세요
        </p>
        <div className="flex flex-wrap justify-center gap-2">
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
          <Link
            href="/calc/body-fat/"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 dark:bg-card dark:hover:bg-muted"
          >
            체지방률 계산기
          </Link>
        </div>
      </div>
    </WikiLayout>
  );
}
