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
  title: "린매스업 식단 가이드 — 체지방 유지하면서 근육 증가·식단표 총정리",
  description:
    "린매스업의 원리부터 벌크업과의 차이, TDEE +200~300kcal 전략, 일주일 린매스업 식단표까지 총정리. 체지방을 최소화하면서 근육을 키우는 가장 효율적인 방법을 알아보세요.",
  path: "/diet/lean-mass/",
  keywords: [
    "린매스업",
    "린매스업 식단",
    "체지방 유지 근육 증가",
    "린매스업 방법",
    "린매스업 식단표",
    "린벌크",
    "린매스업 칼로리",
    "체지방 낮추면서 근육",
    "린매스업 뜻",
  ],
});

const tocItems = [
  { id: "what-is", title: "린매스업이란?" },
  { id: "vs-bulk", title: "벌크업과 린매스업의 차이" },
  { id: "calorie-strategy", title: "린매스업 칼로리 전략" },
  { id: "nutrition", title: "린매스업 영양소 비율" },
  { id: "meal-plan", title: "일주일 린매스업 식단표" },
  { id: "training", title: "린매스업에 맞는 운동법" },
  { id: "tips", title: "린매스업 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

const faqItems = [
  {
    question: "린매스업은 초보자도 할 수 있나요?",
    answer:
      "초보자에게 린매스업은 오히려 최적의 전략입니다. 운동 초보자는 '신규 효과(Newbie Gains)'로 체지방을 줄이면서 동시에 근육을 키울 수 있는 황금기이기 때문입니다. 소폭의 칼로리 잉여(+200~300kcal)와 꾸준한 근력 운동만으로도 눈에 띄는 변화를 얻을 수 있습니다.",
  },
  {
    question: "린매스업은 얼마나 오래 해야 효과가 나나요?",
    answer:
      "최소 3~6개월 이상 꾸준히 해야 의미 있는 근육량 증가를 느낄 수 있습니다. 린매스업은 벌크업보다 근육 증가 속도가 느리지만, 체지방 증가가 적어서 별도의 커팅 기간 없이 지속할 수 있다는 장점이 있습니다.",
  },
  {
    question: "린매스업 중 체중이 안 늘어도 되나요?",
    answer:
      "네. 린매스업에서 체중은 천천히 증가하는 것이 정상입니다. 한 달에 0.5~1kg 정도의 체중 증가가 적절하며, 체중이 거의 그대로인데 체형이 변했다면(허리가 줄고 어깨가 넓어지는 등) 체지방이 줄고 근육이 늘어난 것이므로 매우 이상적인 상태입니다.",
  },
  {
    question: "린매스업과 다이어트를 동시에 할 수 있나요?",
    answer:
      "엄밀히 말하면 린매스업은 소폭의 칼로리 잉여 상태이므로 다이어트(칼로리 적자)와는 반대 개념입니다. 다만 운동 초보자나 체지방률이 높은 사람은 유지 칼로리에서도 체지방 감소+근육 증가가 동시에 일어날 수 있습니다. 이를 'Body Recomposition(체성분 재구성)'이라고 합니다.",
  },
  {
    question: "린매스업에 유산소 운동은 필요한가요?",
    answer:
      "심폐 건강을 위해 주 2~3회, 20~30분 정도의 가벼운 유산소는 추천합니다. 다만 과도한 유산소는 칼로리 소비를 늘려 잉여 칼로리를 상쇄해버릴 수 있습니다. 유산소를 한 만큼 추가 식사를 보충해주는 것이 좋습니다.",
  },
  {
    question: "린매스업 vs 체성분 재구성(리컴포지션), 뭐가 다른가요?",
    answer:
      "린매스업은 소폭 칼로리 잉여(+200~300kcal)에서 근육을 키우는 전략이고, 리컴포지션은 유지 칼로리 또는 소폭 적자에서 체지방 감소+근육 증가를 동시에 노리는 전략입니다. 린매스업이 근육 증가에 더 유리하고, 리컴포지션은 체지방 감소에 더 초점이 맞춰져 있습니다.",
  },
];

const relatedCalc = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "체지방률 계산기", href: "/calc/body-fat/", emoji: "📊" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📐" },
];

const relatedProducts = [
  { title: "프로틴 최저가 비교", href: "/products/protein/", emoji: "🥤" },
  { title: "닭가슴살 최저가 비교", href: "/products/chicken-breast/", emoji: "🍗" },
  { title: "그릭요거트 최저가 비교", href: "/products/greek-yogurt/", emoji: "🥛" },
  { title: "프로틴바 최저가 비교", href: "/products/protein-bar/", emoji: "🍫" },
];

const relatedDiet = [
  { title: "벌크업 식단 가이드", href: "/diet/bulk-up/", emoji: "💪" },
  { title: "고단백 식단 가이드", href: "/diet/high-protein/", emoji: "🥩" },
  { title: "체지방 감량 가이드", href: "/diet/fat-loss/", emoji: "🔥" },
  { title: "직장인 다이어트 가이드", href: "/diet/office-worker/", emoji: "💼" },
];

const breadcrumbs = [
  { label: "홈", href: "/" },
  { label: "다이어트 식단 가이드", href: "/diet/" },
  { label: "린매스업 식단" },
];

const jsonLd = [
  createArticleSchema({
    title: "린매스업 식단 가이드 — 체지방 유지하면서 근육 증가·식단표 총정리",
    description:
      "린매스업의 원리부터 벌크업과의 차이, 일주일 식단표까지 총정리.",
    url: "https://caloring.kr/diet/lean-mass/",
    datePublished: "2026-03-10",
  }),
  createFAQSchema(faqItems),
  createBreadcrumbSchema([
    { label: "다이어트 식단 가이드", href: "/diet/" },
    { label: "린매스업 식단" },
  ]),
];

export default function LeanMassDietPage() {
  return (
    <WikiLayout
      title="린매스업 식단 완벽 가이드"
      description="체지방은 최소로, 근육은 최대로. 린매스업의 모든 것을 알려줄게."
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
        <p className="mb-2 text-sm text-muted-foreground">린매스업은 체지방 증가를 최소화하면서 근육을 키우는 전략이야. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">칼로리 잉여</strong>: TDEE 대비
            +200~300kcal (벌크업보다 소폭)
          </li>
          <li>
            <strong className="text-foreground">단백질 목표</strong>: 체중 1kg당
            1.8~2.2g
          </li>
          <li>
            <strong className="text-foreground">체지방 변화</strong>: 거의 없거나
            미미한 증가 (1~2% 이내)
          </li>
          <li>
            <strong className="text-foreground">장점</strong>: 커팅 기간이
            필요 없거나 최소화
          </li>
        </ul>
      </div>

      {/* Section 1: What is Lean Mass */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        린매스업이란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">린매스업(Lean Mass Up)</strong>은 체지방
        증가를 최소화하면서 근육량을 늘리는 전략이야. 벌크업처럼 칼로리 잉여를
        만들되, 그 폭을{" "}
        <strong className="text-foreground">+200~300kcal로 아주 소폭</strong>으로
        유지하는 게 핵심이야.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        쉽게 말하면, 벌크업이 &quot;일단 크게 키우고 나중에 깎자&quot;라면,
        린매스업은{" "}
        <strong className="text-foreground">
          &quot;천천히 키우되 깔끔하게 키우자&quot;
        </strong>
        인 거야. 체형이 극적으로 변하지는 않지만, 시간이 지나면서 체지방 없이
        근육만 붙는 이상적인 변화를 만들 수 있어.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        많은 사람들이 벌크업과 커팅을 반복하는 것보다 린매스업이 더 효율적이라고
        느끼는데, 그 이유는{" "}
        <strong className="text-foreground">
          별도의 커팅 기간이 필요 없어서 일 년 내내 좋은 컨디션을 유지
        </strong>
        할 수 있기 때문이야. 특히 비키니 시즌이나 특별한 날짜에 맞춰 감량할
        필요 없이 항상 괜찮은 몸 상태를 유지할 수 있지.
      </p>

      {/* Section 2: Lean Mass vs Bulk Up */}
      <h2 id="vs-bulk" className="mt-10 mb-4 text-xl font-bold">
        벌크업과 린매스업의 차이
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업과 린매스업 중 어떤 걸 선택해야 할지 고민된다면, 아래 비교표를 봐.
        자세한 벌크업 전략은{" "}
        <Link href="/diet/bulk-up/" className="text-primary hover:underline">
          벌크업 식단 가이드
        </Link>
        를 참고해.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">구분</th>
              <th className="px-4 py-3 text-left font-semibold">벌크업</th>
              <th className="px-4 py-3 text-left font-semibold">린매스업</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">칼로리 잉여</td>
              <td className="px-4 py-3">+300~500kcal</td>
              <td className="px-4 py-3 bg-primary/5 font-semibold">+200~300kcal</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">월 체중 증가</td>
              <td className="px-4 py-3">1~2kg</td>
              <td className="px-4 py-3 bg-primary/5">0.5~1kg</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">체지방 변화</td>
              <td className="px-4 py-3">증가 (근육:지방 ≈ 1:1)</td>
              <td className="px-4 py-3 bg-primary/5">최소 (근육:지방 ≈ 2:1 이상)</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">근육 증가 속도</td>
              <td className="px-4 py-3">빠름</td>
              <td className="px-4 py-3 bg-primary/5">중간</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">커팅 필요성</td>
              <td className="px-4 py-3">필수 (2~3개월)</td>
              <td className="px-4 py-3 bg-primary/5 font-semibold">거의 불필요</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">외형 유지</td>
              <td className="px-4 py-3">벌크 중 뭉뚝해질 수 있음</td>
              <td className="px-4 py-3 bg-primary/5">연중 좋은 컨디션</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">추천 대상</td>
              <td className="px-4 py-3">마른 체질, 빠른 근육 증가 원하는 사람</td>
              <td className="px-4 py-3 bg-primary/5">체지방 관리가 중요한 사람</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-6 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">린매스업이 더 적합한 사람</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>현재 체지방률이 적절한 범위(남 12~18%, 여 20~25%)인 사람</li>
          <li>체지방 증가 없이 근육을 키우고 싶은 사람</li>
          <li>벌크업-커팅 반복이 싫은 사람</li>
          <li>연중 좋은 컨디션을 유지하고 싶은 사람</li>
          <li>운동 초보자 (신규 효과로 높은 효율 가능)</li>
        </ul>
      </div>

      {/* Section 3: Calorie Strategy */}
      <h2 id="calorie-strategy" className="mt-10 mb-4 text-xl font-bold">
        린매스업 칼로리 전략
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        린매스업의 핵심은{" "}
        <strong className="text-foreground">칼로리 잉여를 최소한으로 유지</strong>
        하는 거야. TDEE(하루 총 에너지 소비량)를{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        로 먼저 계산하고, 여기에 +200~300kcal만 더해.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">체중</th>
              <th className="px-4 py-3 text-left font-semibold">TDEE (예상)</th>
              <th className="px-4 py-3 text-left font-semibold">린매스업 목표</th>
              <th className="px-4 py-3 text-left font-semibold">단백질 목표</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3">55kg</td>
              <td className="px-4 py-3">1800kcal</td>
              <td className="px-4 py-3">2000~2100kcal</td>
              <td className="px-4 py-3">99~121g</td>
            </tr>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">65kg</td>
              <td className="px-4 py-3">2200kcal</td>
              <td className="px-4 py-3 font-semibold">2400~2500kcal</td>
              <td className="px-4 py-3 font-semibold">117~143g</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">75kg</td>
              <td className="px-4 py-3">2500kcal</td>
              <td className="px-4 py-3">2700~2800kcal</td>
              <td className="px-4 py-3">135~165g</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">85kg</td>
              <td className="px-4 py-3">2800kcal</td>
              <td className="px-4 py-3">3000~3100kcal</td>
              <td className="px-4 py-3">153~187g</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        칼로리 사이클링 전략
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        린매스업에서 많이 활용되는 고급 전략이{" "}
        <strong className="text-foreground">칼로리 사이클링</strong>이야.
        운동하는 날과 쉬는 날의 칼로리를 다르게 배분하는 거지:
      </p>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">구분</th>
              <th className="px-4 py-3 text-left font-semibold">칼로리</th>
              <th className="px-4 py-3 text-left font-semibold">탄수화물</th>
              <th className="px-4 py-3 text-left font-semibold">지방</th>
              <th className="px-4 py-3 text-left font-semibold">단백질</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">운동일 (4일)</td>
              <td className="px-4 py-3">TDEE +300~400kcal</td>
              <td className="px-4 py-3">높게 (50%)</td>
              <td className="px-4 py-3">적당히 (20%)</td>
              <td className="px-4 py-3">동일 (30%)</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">휴식일 (3일)</td>
              <td className="px-4 py-3">TDEE +100~200kcal</td>
              <td className="px-4 py-3">낮게 (35%)</td>
              <td className="px-4 py-3">높게 (30%)</td>
              <td className="px-4 py-3">동일 (35%)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        운동하는 날에는 탄수화물을 많이 먹어 근합성 에너지를 공급하고, 쉬는
        날에는 탄수화물을 줄여 불필요한 지방 축적을 막는 거야. 주간 평균
        칼로리는 TDEE +200~300kcal이 되도록 조절해.
      </p>

      {/* Section 4: Nutrition */}
      <h2 id="nutrition" className="mt-10 mb-4 text-xl font-bold">
        린매스업 영양소 비율
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        린매스업의 영양소 비율은 벌크업과 비슷하지만,{" "}
        <strong className="text-foreground">단백질 비율을 조금 더 높게</strong>{" "}
        가져가는 게 포인트야.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">영양소</th>
              <th className="px-4 py-3 text-left font-semibold">비율</th>
              <th className="px-4 py-3 text-left font-semibold">2400kcal 기준</th>
              <th className="px-4 py-3 text-left font-semibold">역할</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">단백질</td>
              <td className="px-4 py-3 font-semibold">30~35%</td>
              <td className="px-4 py-3">180~210g</td>
              <td className="px-4 py-3 text-muted-foreground">근합성 극대화</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">탄수화물</td>
              <td className="px-4 py-3">40~45%</td>
              <td className="px-4 py-3">240~270g</td>
              <td className="px-4 py-3 text-muted-foreground">운동 에너지</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">지방</td>
              <td className="px-4 py-3">20~25%</td>
              <td className="px-4 py-3">53~67g</td>
              <td className="px-4 py-3 text-muted-foreground">호르몬 합성</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        린매스업 음식 선택 가이드
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        린매스업에서는 음식의 질이 특히 중요해. 같은 칼로리라도{" "}
        <strong className="text-foreground">영양소 밀도가 높은 음식</strong>을
        선택해야 체지방 증가를 최소화할 수 있어.
      </p>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">카테고리</th>
              <th className="px-4 py-3 text-left font-semibold">린매스업 추천</th>
              <th className="px-4 py-3 text-left font-semibold">피할 것</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">단백질</td>
              <td className="px-4 py-3">닭가슴살, 흰살 생선, 계란, 그릭요거트</td>
              <td className="px-4 py-3 text-muted-foreground">가공육, 소시지</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">탄수화물</td>
              <td className="px-4 py-3">현미, 고구마, 오트밀, 통밀빵, 퀴노아</td>
              <td className="px-4 py-3 text-muted-foreground">흰밥, 흰빵, 설탕</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">지방</td>
              <td className="px-4 py-3">아보카도, 견과류, 올리브오일, 연어</td>
              <td className="px-4 py-3 text-muted-foreground">튀김, 가공유지</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        식단에 필요한 식품들은{" "}
        <Link href="/products/" className="text-primary hover:underline">
          다이어트 식품 최저가 비교
        </Link>
        에서 합리적으로 구매할 수 있어.{" "}
        <Link
          href="/products/protein/"
          className="text-primary hover:underline"
        >
          프로틴
        </Link>
        이나{" "}
        <Link
          href="/products/chicken-breast/"
          className="text-primary hover:underline"
        >
          닭가슴살
        </Link>
        은 린매스업 식단의 핵심 식품이야.
      </p>

      {/* Section 5: Weekly Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 린매스업 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          65kg, 하루 2400kcal (운동일 2500 / 휴식일 2300), 단백질 140g 목표
        </strong>{" "}
        기준으로 구성한 일주일 식단표야.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        로 자신의 목표 칼로리를 먼저 확인해봐.
      </p>

      {[
        {
          day: "월요일 (운동일 - 상체)",
          meals: [
            { time: "아침", menu: "오트밀 60g + 프로틴 1스쿱 + 바나나 + 아몬드", protein: 35, cal: 500 },
            { time: "점심", menu: "닭가슴살 덮밥 (현미) + 된장찌개 + 나물", protein: 38, cal: 580 },
            { time: "간식", menu: "삶은 계란 2개 + 고구마 1개", protein: 18, cal: 300 },
            { time: "저녁", menu: "연어구이 + 현미밥 + 구운 채소", protein: 35, cal: 550 },
            { time: "야식", menu: "그릭요거트 200g + 그래놀라", protein: 18, cal: 280 },
          ],
        },
        {
          day: "화요일 (운동일 - 하체)",
          meals: [
            { time: "아침", menu: "통밀 토스트 2장 + 스크램블 에그 3개 + 치즈", protein: 28, cal: 480 },
            { time: "점심", menu: "소고기 미역국 + 현미밥 1공기 + 두부구이", protein: 35, cal: 600 },
            { time: "간식", menu: "프로틴바 1개 + 바나나", protein: 22, cal: 330 },
            { time: "저녁", menu: "돼지 안심 구이 + 고구마 + 샐러드", protein: 32, cal: 550 },
            { time: "야식", menu: "프로틴 쉐이크 + 견과류", protein: 30, cal: 350 },
          ],
        },
        {
          day: "수요일 (휴식일)",
          meals: [
            { time: "아침", menu: "그릭요거트 300g + 블루베리 + 아몬드", protein: 22, cal: 380 },
            { time: "점심", menu: "참치 비빔밥 (현미) + 순두부찌개", protein: 30, cal: 520 },
            { time: "간식", menu: "삶은 계란 2개 + 사과", protein: 14, cal: 220 },
            { time: "저녁", menu: "닭안심 스테이크 + 아보카도 샐러드", protein: 35, cal: 500 },
            { time: "야식", menu: "저지방 우유 1잔 + 프로틴", protein: 28, cal: 250 },
          ],
        },
        {
          day: "목요일 (운동일 - 등/이두)",
          meals: [
            { time: "아침", menu: "프로틴 팬케이크 2장 + 메이플시럽 + 딸기", protein: 28, cal: 450 },
            { time: "점심", menu: "불고기 쌈밥 + 된장국 + 계란말이", protein: 35, cal: 600 },
            { time: "간식", menu: "닭가슴살 육포 50g + 고구마", protein: 27, cal: 320 },
            { time: "저녁", menu: "대구 스테이크 + 현미밥 + 나물", protein: 32, cal: 530 },
            { time: "야식", menu: "그릭요거트 200g + 꿀 + 견과류", protein: 16, cal: 320 },
          ],
        },
        {
          day: "금요일 (운동일 - 가슴/삼두)",
          meals: [
            { time: "아침", menu: "오트밀 60g + 프로틴 + 바나나 + 꿀", protein: 32, cal: 480 },
            { time: "점심", menu: "제육덮밥 (현미) + 미역국 + 두부", protein: 38, cal: 620 },
            { time: "간식", menu: "프로틴바 + 삶은 계란 1개", protein: 27, cal: 320 },
            { time: "저녁", menu: "닭다리살 구이 + 고구마 + 구운 채소", protein: 33, cal: 560 },
            { time: "야식", menu: "프로틴 쉐이크 + 통밀빵 1장", protein: 28, cal: 330 },
          ],
        },
        {
          day: "토요일 (휴식일)",
          meals: [
            { time: "아침", menu: "아보카도 토스트 (통밀) + 삶은 계란 2개", protein: 18, cal: 400 },
            { time: "점심", menu: "김치찌개 + 잡곡밥 + 고등어구이", protein: 32, cal: 550 },
            { time: "간식", menu: "그릭요거트 200g + 그래놀라", protein: 16, cal: 280 },
            { time: "저녁", menu: "소고기 사태찜 + 현미밥 + 나물 3종", protein: 35, cal: 530 },
            { time: "야식", menu: "저지방 우유 + 견과류", protein: 12, cal: 230 },
          ],
        },
        {
          day: "일요일 (휴식일)",
          meals: [
            { time: "아침", menu: "두유 + 통밀빵 + 치즈 + 삶은 계란 2개", protein: 22, cal: 420 },
            { time: "점심", menu: "연어포케볼 (현미) + 미소된장국", protein: 30, cal: 520 },
            { time: "간식", menu: "삶은 계란 2개 + 바나나", protein: 16, cal: 240 },
            { time: "저녁", menu: "순두부찌개 + 닭가슴살 볶음 + 나물", protein: 32, cal: 480 },
            { time: "야식", menu: "프로틴 쉐이크", protein: 25, cal: 150 },
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

      {/* Section 6: Training */}
      <h2 id="training" className="mt-10 mb-4 text-xl font-bold">
        린매스업에 맞는 운동법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        린매스업에서는{" "}
        <strong className="text-foreground">근력 운동이 절대적으로 중요</strong>
        해. 칼로리 잉여가 적기 때문에 운동 자극을 극대화해야 그 잉여 에너지가
        근육에 쓰여.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">추천 운동 분할</h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">요일</th>
              <th className="px-4 py-3 text-left font-semibold">부위</th>
              <th className="px-4 py-3 text-left font-semibold">주요 운동</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">월</td>
              <td className="px-4 py-3">가슴/어깨</td>
              <td className="px-4 py-3 text-muted-foreground">벤치프레스, 숄더프레스, 플라이</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">화</td>
              <td className="px-4 py-3">하체</td>
              <td className="px-4 py-3 text-muted-foreground">스쿼트, 레그프레스, 런지, 레그컬</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">수</td>
              <td className="px-4 py-3">휴식</td>
              <td className="px-4 py-3 text-muted-foreground">가벼운 유산소 or 스트레칭</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">목</td>
              <td className="px-4 py-3">등/이두</td>
              <td className="px-4 py-3 text-muted-foreground">데드리프트, 풀업, 로우, 바이셉컬</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">금</td>
              <td className="px-4 py-3">가슴/삼두</td>
              <td className="px-4 py-3 text-muted-foreground">인클라인 벤치, 딥스, 트라이셉 익스텐션</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">토</td>
              <td className="px-4 py-3">휴식</td>
              <td className="px-4 py-3 text-muted-foreground">가벼운 유산소 or 취미 운동</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">일</td>
              <td className="px-4 py-3">휴식</td>
              <td className="px-4 py-3 text-muted-foreground">완전 휴식</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">운동 원칙</h3>
      <ul className="mb-4 list-disc pl-5 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">점진적 과부하</strong>: 매주
          조금씩 무게를 늘리거나 반복 횟수를 증가
        </li>
        <li>
          <strong className="text-foreground">복합 운동 중심</strong>: 스쿼트,
          데드리프트, 벤치프레스, 풀업 등 여러 근육을 동시에 자극하는 운동
        </li>
        <li>
          <strong className="text-foreground">세트당 8~12회</strong>: 근비대에
          최적화된 반복 범위
        </li>
        <li>
          <strong className="text-foreground">세트 간 휴식 60~90초</strong>:
          근비대 자극 극대화
        </li>
        <li>
          <strong className="text-foreground">운동 기록</strong>: 매번 무게와
          횟수를 기록해야 과부하 여부를 확인할 수 있음
        </li>
      </ul>

      {/* Section 7: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        린매스업 성공 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 체중보다 거울과 측정값을 믿어</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        린매스업에서는 체중 변화가 매우 느려. 근육이 늘면서 체지방이 줄어
        체중은 그대로인데 체형은 달라지는 경우가 흔해. 2주마다 같은 조건으로
        사진을 찍고, 허리·가슴·허벅지 둘레를 측정하면 변화를 객관적으로
        확인할 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 인내심을 가져</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        린매스업은 빠른 변화를 기대하기 어려워. 자연적으로 근육은 한 달에{" "}
        <strong className="text-foreground">최대 0.5~1kg 정도</strong>만 증가할 수
        있어 (초보자 기준). 3개월, 6개월, 1년 단위로 변화를 비교하면 분명한
        차이를 느낄 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 단백질 타이밍을 분배해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 단백질을{" "}
        <strong className="text-foreground">4~5끼에 균등하게 나눠 먹는</strong>{" "}
        것이 한 끼에 몰아 먹는 것보다 근합성에 유리해. 끼니당 30~40g씩 배분하는
        것을 목표로 해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 수면과 스트레스 관리</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        성장호르몬과 테스토스테론은 수면 중에 분비돼. 수면 부족과 스트레스는
        이 호르몬들을 감소시켜 근합성을 방해해. 최소{" "}
        <strong className="text-foreground">7~8시간 수면</strong>을 확보하고,
        스트레스를 관리하는 것이 린매스업 성공의 숨은 열쇠야.
      </p>

      {/* Section 8: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 칼로리 잉여를 정확히 관리해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        +200~300kcal은 생각보다 작은 차이야. 밥 반 공기 정도 되거든. 이 정도의
        작은 잉여를 정확히 유지하려면{" "}
        <strong className="text-foreground">식단 기록이 필수</strong>야. 대충
        먹으면 잉여가 너무 커져 체지방이 늘거나, 잉여가 없어서 근육이 안 늘
        수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 체지방률이 높으면 린매스업 전에 감량부터</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방률이 남성 18% / 여성 28% 이상이면, 린매스업보다{" "}
        <Link
          href="/diet/fat-loss/"
          className="text-primary hover:underline"
        >
          체지방 감량
        </Link>
        을 먼저 하는 것을 추천해. 체지방이 높은 상태에서는 인슐린 감수성이
        낮아져 잉여 칼로리가 근육보다 지방으로 저장될 확률이 높거든.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 조급해하지 마</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        변화가 느리다고 칼로리 잉여를 크게 늘리면 그건 벌크업이 돼버려. 린매스업의
        핵심은{" "}
        <strong className="text-foreground">참을성 있게 소폭 잉여를 유지</strong>
        하는 거야. 느리지만 확실한 결과를 만드는 전략이라고 생각해.
      </p>

      {/* CTA Box */}
      <div className="my-10 rounded-2xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          린매스업의 시작은 정확한 TDEE를 아는 것!
        </p>
        <p className="mb-4 font-bold">
          내 기초대사량과 목표 칼로리를 계산해보세요
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
