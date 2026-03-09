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
  title: "2000칼로리 식단표 — 남성 감량·여성 유지를 위한 일주일 식단",
  description:
    "2000칼로리 식단표를 일주일치로 정리했습니다. 남성 다이어트 또는 여성 체중 유지에 적합한 균형 잡힌 식단. 매일 아침·점심·간식·저녁 메뉴와 영양 정보까지.",
  path: "/diet/2000kcal/",
  keywords: [
    "2000칼로리 식단",
    "2000칼로리 식단표",
    "2000kcal 식단",
    "남자 다이어트 식단",
    "남성 감량 식단",
    "여성 유지 식단",
    "체중 유지 식단",
    "건강 식단표",
    "하루 2000칼로리",
    "균형 식단",
  ],
});

const FAQ_ITEMS = [
  {
    question: "2000칼로리 식단으로 살이 빠지나요?",
    answer:
      "남성의 경우(하루 소비 칼로리 약 2,400~2,800kcal) 하루 400~800kcal의 칼로리 적자를 만들어 한 달에 약 2~3.5kg 감량이 가능합니다. 활동적인 여성이라면 체중 유지에 적합한 칼로리이며, 앉아서 생활하는 여성에게는 약간의 칼로리 잉여가 될 수 있습니다.",
  },
  {
    question: "2000칼로리는 많은 양 아닌가요?",
    answer:
      "세계보건기구(WHO)가 권장하는 일반 성인의 하루 칼로리가 약 2,000kcal입니다. 즉 '표준'에 해당하는 양이에요. 감량이 목적인 남성에게는 적절한 칼로리 적자를 만들고, 활동적인 여성에게는 체중을 유지시켜주는 양입니다.",
  },
  {
    question: "2000칼로리 식단에서 운동은 어떻게 해야 하나요?",
    answer:
      "남성 감량 목적이라면 주 4~5회 운동을 권장합니다. 웨이트트레이닝 + 유산소 조합이 가장 효과적이에요. 여성 유지 목적이라면 주 2~3회 가벼운 운동으로 충분합니다. 운동 강도에 따라 2000~2200kcal 사이에서 조절하세요.",
  },
  {
    question: "2000칼로리 식단은 누구에게 적합하지 않나요?",
    answer:
      "앉아서 생활하는 여성에게는 칼로리가 다소 높을 수 있습니다. 이 경우 1500~1800kcal이 더 적합해요. 반대로 매우 활동적인 남성(육체노동, 일일 고강도 운동)에게는 부족할 수 있어 2500kcal을 권장합니다.",
  },
  {
    question: "2000칼로리 식단에서 간식을 많이 먹어도 되나요?",
    answer:
      "2000kcal이면 하루 간식으로 300~400kcal까지 배정할 수 있습니다. 다만 '자유롭게 많이' 먹는 것이 아니라, 계획된 간식을 먹는 게 중요해요. 단백질이 포함된 간식(그릭요거트, 견과류, 프로틴바)을 추천합니다.",
  },
  {
    question: "2000칼로리를 먹으면서 근육도 키울 수 있나요?",
    answer:
      "체지방이 높은 초보 운동자(남성 체지방 20% 이상)라면 2000kcal에서도 '체지방 감소 + 근육 증가'가 동시에 가능합니다. 이를 '바디 리컴포지션'이라고 해요. 단, 단백질을 체중 1kg당 1.6~2.0g 확보하고 충분한 근력 운동을 병행해야 합니다.",
  },
];

const TOC = [
  { id: "what-is", title: "2000칼로리 식단이란?" },
  { id: "who-is-it-for", title: "누구에게 적합한가요?" },
  { id: "nutrition-ratio", title: "영양소 배분 (탄단지 비율)" },
  { id: "weekly-meal-plan", title: "일주일 식단표" },
  { id: "grocery-list", title: "장보기 리스트" },
  { id: "success-tips", title: "2000칼로리 식단 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

export default function Diet2000kcalPage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 식단", href: "/diet/" },
    { label: "2000칼로리 식단표" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "2000칼로리 식단표 — 남성 감량·여성 유지를 위한 일주일 식단",
      description:
        "2000칼로리 식단표를 일주일치로 정리. 남성 다이어트와 여성 체중 유지에 적합한 균형 식단.",
      url: "https://caloring.kr/diet/2000kcal/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단", href: "/diet/" },
      { label: "2000칼로리 식단표" },
    ]),
  ];

  return (
    <WikiLayout
      title="2000칼로리 식단표"
      description="2000kcal 식단표를 일주일치로 정리했어. 남성 감량이나 여성 체중 유지에 딱 맞는 균형 식단이야."
      breadcrumbs={breadcrumbs}
      toc={TOC}
      faqItems={FAQ_ITEMS}
      jsonLd={jsonLd}
      updatedAt="2026-03-10"
      relatedCalc={[
        { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
        { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
        { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
        { title: "체지방 계산기", href: "/calc/body-fat/", emoji: "📐" },
      ]}
      relatedDiet={[
        { title: "1800칼로리 식단표", href: "/diet/1800kcal/", emoji: "📋" },
        { title: "2500칼로리 식단표", href: "/diet/2500kcal/", emoji: "📋" },
        { title: "고단백 다이어트", href: "/diet/high-protein/", emoji: "💪" },
        { title: "간헐적 단식 가이드", href: "/diet/intermittent-fasting/", emoji: "⏰" },
      ]}
      relatedProducts={[
        { title: "닭가슴살 최저가 비교", href: "/products/?category=chicken-breast", emoji: "🍗" },
        { title: "프로틴 보충제 비교", href: "/products/?category=protein", emoji: "💪" },
        { title: "프로틴바 비교", href: "/products/?category=protein-bar", emoji: "🍫" },
        { title: "그릭요거트 비교", href: "/products/?category=yogurt", emoji: "🥛" },
      ]}
    >
      {/* Summary box */}
      <div className="mb-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <p className="mb-2 text-sm text-muted-foreground">밥을 제대로 먹으면서 다이어트하고 싶은 남성이나, 체중 유지가 목표인 여성에게 맞는 식단이야. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; <strong className="text-foreground">2000kcal</strong>은 WHO 권장 표준 칼로리로, 남성 감량·여성 유지에 적합해
          </li>
          <li>
            &#x2022; <strong className="text-foreground">탄수화물 45% + 단백질 30% + 지방 25%</strong> 비율을 권장해
          </li>
          <li>
            &#x2022; 남성 기준 한 달에 <strong className="text-foreground">2~3.5kg</strong> 건강하게 감량할 수 있어
          </li>
          <li>
            &#x2022; 밥을 정상적으로 먹을 수 있어서 <strong className="text-foreground">다이어트 티가 안 나</strong>
          </li>
        </ul>
      </div>

      {/* What is 2000kcal diet? */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        2000칼로리 식단이란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2000칼로리 식단은 하루 총 섭취 칼로리를 <strong className="text-foreground">2,000kcal로 관리</strong>하는 식단이야.
        세계보건기구(WHO)가 일반 성인에게 권장하는 표준 칼로리가 바로 2,000kcal이라서,
        &quot;다이어트 식단&quot;이라기보다는 &quot;건강한 표준 식단&quot;에 가까워.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        그런데 왜 이게 다이어트 식단이 되냐면, 대부분의 남성이 실제로는 하루에 2,400~3,000kcal을 섭취하고 있기 때문이야.
        배달음식 한 끼가 800~1200kcal인 걸 생각하면, 세 끼를 대충 먹으면 쉽게 2,500kcal을 넘어.
        2000kcal로 관리하는 것만으로 <strong className="text-foreground">별다른 노력 없이 월 2~3.5kg 감량</strong>이 가능한 거야.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        나의 정확한 하루 소비 칼로리가 궁금하다면{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        로 먼저 확인해보세요.
      </p>

      {/* Who is it for? */}
      <h2 id="who-is-it-for" className="mt-10 mb-4 text-xl font-bold">
        누구에게 적합한가요?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2000kcal은 남녀 모두에게 활용 가능한 칼로리야. 다만 목적이 다르지.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">감량 목적 (주로 남성)</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; BMI 25~30 사이의 과체중 남성</li>
        <li>&#x2022; 주 3~5회 운동을 병행하는 남성</li>
        <li>&#x2022; 극단적인 제한 없이 서서히 빼고 싶은 경우</li>
        <li>&#x2022; 밥을 정상적으로 먹으면서 다이어트하고 싶은 경우</li>
        <li>&#x2022; 근육을 유지하면서 체지방만 줄이고 싶은 경우</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">유지 목적 (주로 여성)</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 활동적인 여성 (주 4회 이상 운동)</li>
        <li>&#x2022; 감량 후 체중 유지 단계</li>
        <li>&#x2022; 1200~1500kcal 식단 후 정상 식단으로 복귀하는 경우</li>
        <li>&#x2022; 운동을 하면서 건강한 체중을 유지하고 싶은 경우</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합하지 않은 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 앉아서 생활하는 여성 (1500~1800kcal이 더 적합)</li>
        <li>&#x2022; 빠른 감량이 필요한 경우</li>
        <li>&#x2022; 매우 활동적인 남성이나 운동선수 (2500kcal 이상 필요)</li>
        <li>&#x2022; 벌크업이 목적인 경우 (2500~3000kcal 필요)</li>
      </ul>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        자신의 기초대사량을 모른다면{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline font-medium">
          기초대사량 계산기
        </Link>
        에서 확인하세요.{" "}
        <Link href="/calc/bmi/" className="text-primary hover:underline font-medium">
          BMI 계산기
        </Link>
        로 현재 체중 상태도 체크해보자.
      </p>

      {/* Nutrition ratio */}
      <h2 id="nutrition-ratio" className="mt-10 mb-4 text-xl font-bold">
        영양소 배분 (탄단지 비율)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2000kcal에서는 영양소를 균형 있게 배분하는 것이 핵심이야.
        <strong className="text-foreground">탄수화물 45% + 단백질 30% + 지방 25%</strong>를 기본으로 하되,
        근력 운동을 주로 하는 경우 단백질을 35%까지 올려도 괜찮아.
      </p>

      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">영양소</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">비율</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">그램(g)</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">주요 식품</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-3 font-medium">탄수화물</td>
              <td className="border border-border px-4 py-3 text-center">45%</td>
              <td className="border border-border px-4 py-3 text-center">900kcal</td>
              <td className="border border-border px-4 py-3 text-center">225g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">현미, 고구마, 통밀빵, 오트밀, 바나나, 감자</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-3 font-medium">단백질</td>
              <td className="border border-border px-4 py-3 text-center">30%</td>
              <td className="border border-border px-4 py-3 text-center">600kcal</td>
              <td className="border border-border px-4 py-3 text-center">150g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">닭가슴살, 소고기, 연어, 계란, 두부, 돼지안심</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3 font-medium">지방</td>
              <td className="border border-border px-4 py-3 text-center">25%</td>
              <td className="border border-border px-4 py-3 text-center">500kcal</td>
              <td className="border border-border px-4 py-3 text-center">56g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">아보카도, 올리브오일, 견과류, 참기름, 들기름</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">단백질 150g</strong>이 핵심이야. 80kg 남성 기준으로 체중 1kg당 약 1.9g에 해당하는데,
        이 정도면 운동을 병행할 때 근육을 유지하면서 체지방만 태우기에 충분한 양이야.
        매 끼니 <strong className="text-foreground">단백질 40~50g</strong>을 포함하면 자연스럽게 달성돼.
      </p>

      {/* Weekly meal plan */}
      <h2 id="weekly-meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 식단표는 <strong className="text-foreground">하루 1,980~2,020kcal</strong> 범위로 구성했어.
        밥은 <strong className="text-foreground">현미밥 1공기(약 210g, 250kcal)</strong> 기준이야.
        남성 기준으로 충분히 배부르게 먹을 수 있는 양이고, 단백질 반찬도 푸짐해.
      </p>

      {/* Day 1 - Monday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">월요일 (2,000kcal)</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold w-20">끼니</th>
              <th className="border border-border px-4 py-2 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-2 text-center font-semibold w-20">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">아침</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 60g + 저지방 우유 250ml + 바나나 1개 + 아몬드 10알 + 삶은 계란 2개</td>
              <td className="border border-border px-4 py-2 text-center">500</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 닭가슴살 구이 150g + 된장찌개 + 시금치 나물 + 김치</td>
              <td className="border border-border px-4 py-2 text-center">600</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 200g + 그래놀라 30g + 블루베리 50g</td>
              <td className="border border-border px-4 py-2 text-center">300</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 소고기 불고기 150g + 양배추 샐러드 + 미역국</td>
              <td className="border border-border px-4 py-2 text-center">600</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,000</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 2 - Tuesday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">화요일 (1,990kcal)</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold w-20">끼니</th>
              <th className="border border-border px-4 py-2 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-2 text-center font-semibold w-20">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">아침</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">통밀 토스트 2장 + 스크램블 에그(계란 3개) + 아보카도 1/2개 + 방울토마토 7개 + 우유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">530</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">잡곡밥 1공기 + 제육볶음(돼지 앞다리살 150g) + 콩나물국 + 오이무침</td>
              <td className="border border-border px-4 py-2 text-center">620</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴바 1개 + 사과 1개 + 아몬드 10알</td>
              <td className="border border-border px-4 py-2 text-center">320</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">연어 스테이크 150g + 현미밥 3/4공기 + 구운 채소(브로콜리, 파프리카, 양파) + 샐러드</td>
              <td className="border border-border px-4 py-2 text-center">520</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,990</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 3 - Wednesday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">수요일 (2,010kcal)</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold w-20">끼니</th>
              <th className="border border-border px-4 py-2 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-2 text-center font-semibold w-20">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">아침</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(대) + 삶은 계란 3개 + 무가당 두유 200ml + 방울토마토 5개</td>
              <td className="border border-border px-4 py-2 text-center">480</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미 비빔밥 (현미밥 1공기 + 소고기 100g + 계란 프라이 + 시금치·콩나물·당근 나물 + 고추장)</td>
              <td className="border border-border px-4 py-2 text-center">630</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">바나나 1개 + 프로틴 쉐이크 1스쿱 + 견과류 15g</td>
              <td className="border border-border px-4 py-2 text-center">350</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">두부 스테이크 300g + 현미밥 3/4공기 + 양배추 샐러드 + 된장국</td>
              <td className="border border-border px-4 py-2 text-center">550</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,010</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 4 - Thursday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">목요일 (2,000kcal)</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold w-20">끼니</th>
              <th className="border border-border px-4 py-2 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-2 text-center font-semibold w-20">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">아침</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 200g + 그래놀라 40g + 딸기 8개 + 호두 5알</td>
              <td className="border border-border px-4 py-2 text-center">430</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 삼치 구이 1.5토막 + 순두부찌개 + 깻잎 + 시금치 나물</td>
              <td className="border border-border px-4 py-2 text-center">600</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">삶은 계란 2개 + 고구마 1개(중) + 저지방 우유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">370</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭가슴살 볶음밥 (현미밥 1공기 + 닭가슴살 130g + 계란 1개 + 양파 + 대파 + 참기름)</td>
              <td className="border border-border px-4 py-2 text-center">600</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,000</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 5 - Friday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">금요일 (2,010kcal)</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold w-20">끼니</th>
              <th className="border border-border px-4 py-2 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-2 text-center font-semibold w-20">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">아침</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">아보카도 토스트 (통밀빵 2장 + 아보카도 1/2개 + 계란 프라이 2개) + 오렌지주스 200ml</td>
              <td className="border border-border px-4 py-2 text-center">520</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">잡곡밥 1공기 + 김치찌개(돼지고기 100g) + 계란찜 + 멸치볶음 + 깻잎</td>
              <td className="border border-border px-4 py-2 text-center">600</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴바 1개 + 바나나 1개 + 아몬드 10알</td>
              <td className="border border-border px-4 py-2 text-center">340</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">돼지 안심 구이 150g + 쌈채소 + 쌈장 + 현미밥 3/4공기 + 된장국</td>
              <td className="border border-border px-4 py-2 text-center">550</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,010</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 6 - Saturday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">토요일 (1,990kcal)</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold w-20">끼니</th>
              <th className="border border-border px-4 py-2 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-2 text-center font-semibold w-20">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">아침</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">바나나 팬케이크 (바나나 1개 + 계란 3개 + 오트밀 40g) + 메이플시럽 + 그릭요거트 100g</td>
              <td className="border border-border px-4 py-2 text-center">500</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 소고기 미역국(소고기 120g) + 김치 + 계란말이 3쪽 + 콩나물 무침</td>
              <td className="border border-border px-4 py-2 text-center">600</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(대) + 삶은 계란 1개 + 저지방 우유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">340</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">새우 볶음 (새우 200g + 브로콜리 + 파프리카 + 올리브오일) + 현미밥 1공기</td>
              <td className="border border-border px-4 py-2 text-center">550</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,990</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 7 - Sunday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">일요일 (2,000kcal)</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold w-20">끼니</th>
              <th className="border border-border px-4 py-2 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-2 text-center font-semibold w-20">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">아침</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 60g + 그릭요거트 150g + 견과류 15g + 바나나 1개 + 꿀 1작은술</td>
              <td className="border border-border px-4 py-2 text-center">480</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 닭볶음탕(닭 150g + 감자 + 당근 + 양파) + 깻잎</td>
              <td className="border border-border px-4 py-2 text-center">620</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">당근·오이 스틱 + 후무스 3큰술 + 삶은 계란 2개 + 사과 1/2개</td>
              <td className="border border-border px-4 py-2 text-center">320</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">참치 포케 볼 (현미밥 1공기 + 참치회 120g + 아보카도 1/4개 + 양상추 + 오이 + 간장 소스)</td>
              <td className="border border-border px-4 py-2 text-center">580</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,000</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Grocery list */}
      <h2 id="grocery-list" className="mt-10 mb-4 text-xl font-bold">
        장보기 리스트
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        위 일주일 식단을 위한 장보기 리스트야.
        2000kcal은 다양한 식재료를 쓸 수 있어서 <strong className="text-foreground">질리지 않게</strong> 먹을 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">단백질 식품</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 닭가슴살/닭안심/닭 (통닭 포함) 700g</li>
        <li>&#x2022; 계란 3판 (30개)</li>
        <li>&#x2022; 두부 2모</li>
        <li>&#x2022; 연어 필렛 150g</li>
        <li>&#x2022; 새우 400g (냉동 가능)</li>
        <li>&#x2022; 소고기 (불고기용 150g + 국거리용 120g)</li>
        <li>&#x2022; 돼지 앞다리살/안심 300g</li>
        <li>&#x2022; 삼치 2토막</li>
        <li>&#x2022; 참치회 (횟감) 120g</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">유제품/대체유</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 그릭요거트 800g (무가당)</li>
        <li>&#x2022; 저지방 우유 2팩 (2L)</li>
        <li>&#x2022; 무가당 두유 1팩</li>
        <li>&#x2022; 프로틴 파우더 (있으면)</li>
        <li>&#x2022; 오렌지주스 200ml</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">탄수화물</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 현미/잡곡 4kg</li>
        <li>&#x2022; 오트밀 500g</li>
        <li>&#x2022; 고구마 5개 (중~대)</li>
        <li>&#x2022; 통밀 식빵 1봉</li>
        <li>&#x2022; 그래놀라 1봉</li>
        <li>&#x2022; 감자 2개</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">채소/과일</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 브로콜리 2송이, 시금치 1단, 양배추 1통</li>
        <li>&#x2022; 양상추 1포기, 콩나물 2봉, 파프리카 3개</li>
        <li>&#x2022; 방울토마토 1팩, 오이 2개, 당근 2개</li>
        <li>&#x2022; 양파 3개, 대파 2대, 버섯 1팩</li>
        <li>&#x2022; 깻잎 2팩, 쌈채소 1팩</li>
        <li>&#x2022; 바나나 5개, 사과 1개, 블루베리 1팩, 딸기 1팩</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 아보카도 2개</li>
        <li>&#x2022; 아몬드/호두/견과류 소포장 2~3개</li>
        <li>&#x2022; 올리브오일, 참기름, 들기름</li>
        <li>&#x2022; 프로틴바 2개</li>
        <li>&#x2022; 후무스 1통</li>
        <li>&#x2022; 꿀, 메이플시럽</li>
      </ul>

      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">절약 팁:</strong> 2000kcal은 식재료 양이 많아서 장보기 비용이 올라갈 수 있어.
          닭가슴살·계란은 대용량이 훨씬 저렴하고, 다이어트 식품 최저가가 궁금하다면{" "}
          <Link href="/products/" className="text-primary hover:underline font-medium">
            다이어트 식품 비교
          </Link>
          에서 확인해보세요.
        </p>
      </div>

      {/* Success tips */}
      <h2 id="success-tips" className="mt-10 mb-4 text-xl font-bold">
        2000칼로리 식단 성공 팁
      </h2>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        2000kcal은 충분히 먹는 느낌이라 다이어트를 하는지 안 하는지 모를 수 있어.
        이게 장점이기도 하지만, 몇 가지 주의할 점이 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 배달 음식을 줄이세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2000kcal이 넉넉해 보이지만, 배달 음식 한 끼는 <strong className="text-foreground">800~1,200kcal</strong>이야.
        점심에 짜장면(700kcal) + 탕수육 3조각(300kcal)을 시키면 한 끼에 1,000kcal이 넘어.
        가능하면 직접 조리하고, 배달은 주 1~2회로 제한하는 게 좋아.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 음료 칼로리를 체크하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        카페라떼(200kcal), 스무디(300~500kcal), 탄산음료(150kcal)...
        음료만으로 하루 300~500kcal을 소비하는 사람이 많아.
        음료는 <strong className="text-foreground">물·블랙커피·무가당 차</strong>로 통일하면
        식단에서 칼로리를 더 넉넉하게 쓸 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 운동을 반드시 병행하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2000kcal로 확실한 감량 효과를 보려면 운동이 필수야.
        특히 남성은 <strong className="text-foreground">웨이트트레이닝</strong>을 병행하면
        &quot;바디 리컴포지션&quot;(체지방은 줄고 근육은 느는) 효과를 볼 수 있어.
        주 4~5회 운동을 하면 하루 400~600kcal을 추가로 소모할 수 있거든.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 단백질은 넉넉하게</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 <strong className="text-foreground">단백질 150g</strong>을 목표로 해.
        2000kcal에서 단백질 비율 30%면 150g인데, 이 정도면 매 끼니 손바닥 크기의 단백질 식품을 포함하고
        간식에서도 그릭요거트·프로틴바·삶은 계란 등을 챙기면 달성할 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 체성분 변화를 추적하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2000kcal + 운동 조합에서는 체중이 거의 안 변하면서 몸이 바뀌는 경우가 많아.
        체중계에만 의존하면 &quot;효과가 없다&quot;고 착각할 수 있으니,{" "}
        <Link href="/calc/body-fat/" className="text-primary hover:underline font-medium">
          체지방 계산기
        </Link>
        로 체지방률을 추적하고, 같은 옷의 핏 변화로 체크하는 게 더 정확해.
      </p>

      {/* Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2000kcal은 가장 안전한 칼로리 범위 중 하나지만, 아래 사항은 체크해두자.
      </p>

      <div className="mb-6 space-y-3">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">&quot;적당히&quot; 먹는다고 생각하지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            2000kcal이 넉넉하다고 계량을 대충 하면 쉽게 2300~2500kcal을 넘깁니다. 처음 2주는 반드시 밥 양, 고기 양을 저울로 재세요. 눈대중은 평균 20~30% 과소평가합니다.
          </p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">소스·양념의 칼로리를 간과하지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            불고기 양념, 볶음 요리의 기름, 샐러드 드레싱 등은 한 끼에 100~200kcal을 추가합니다.
            조리 시 올리브오일은 1작은술(약 45kcal)씩 계량하고, 소스는 저칼로리 제품을 선택하세요.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">체중 감량 속도가 느려도 괜찮아요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            2000kcal 식단에서는 한 달에 1~3.5kg 감량이 정상입니다. 느리다고 칼로리를 급격히 줄이면 대사가 떨어질 수 있어요. 꾸준함이 핵심입니다.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">여성은 활동량에 맞게 조절하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            2000kcal은 활동적인 여성의 유지 칼로리에 가깝습니다. 앉아서 생활하는 여성이라면 1500~1800kcal이 더 적합하니{" "}
            <Link href="/calc/calorie/" className="text-primary hover:underline">
              칼로리 계산기
            </Link>
            로 자신의 TDEE를 확인하세요.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">술은 가능하면 피하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            맥주 500ml = 약 200kcal, 소주 1병 = 약 400kcal입니다.
            술과 함께 먹는 안주까지 합하면 한 번 음주에 1,000kcal이 넘어갈 수 있어요.
            주 1회 이하로 제한하세요.
          </p>
        </div>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        더 빠른 감량이 필요하다면{" "}
        <Link href="/diet/1800kcal/" className="text-primary hover:underline font-medium">
          1800칼로리 식단
        </Link>
        이나{" "}
        <Link href="/diet/1500kcal/" className="text-primary hover:underline font-medium">
          1500칼로리 식단
        </Link>
        을 참고하세요. 근육 증가가 목표라면{" "}
        <Link href="/diet/2500kcal/" className="text-primary hover:underline font-medium">
          2500칼로리 식단
        </Link>
        으로 올려보는 것도 방법이야.{" "}
        <Link href="/diet/high-protein/" className="text-primary hover:underline font-medium">
          고단백 다이어트
        </Link>
        도 함께 참고해보세요.
      </p>
    </WikiLayout>
  );
}
