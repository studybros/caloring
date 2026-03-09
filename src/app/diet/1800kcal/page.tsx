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
  title: "1800칼로리 식단표 — 활동적인 여성을 위한 일주일 식단 가이드",
  description:
    "1800칼로리 식단표를 일주일치로 정리했습니다. 운동하는 여성이나 남성 감량에 적합한 균형 잡힌 식단. 아침·점심·간식·저녁 메뉴와 영양 정보까지 완벽 가이드.",
  path: "/diet/1800kcal/",
  keywords: [
    "1800칼로리 식단",
    "1800칼로리 식단표",
    "1800kcal 식단",
    "운동 식단",
    "남자 다이어트 식단",
    "활동적인 여성 식단",
    "다이어트 식단표",
    "운동하는 여자 식단",
    "건강 식단",
    "균형 식단",
  ],
});

const FAQ_ITEMS = [
  {
    question: "1800칼로리로 살이 빠지나요?",
    answer:
      "활동적인 여성(하루 소비 칼로리 약 2,000~2,400kcal)에게는 하루 200~600kcal의 칼로리 적자를 만들어 한 달에 약 1~2.5kg 감량이 가능합니다. 남성의 경우 하루 소비 칼로리가 2,400~2,800kcal이므로 한 달에 약 2~4kg 감량이 가능해요.",
  },
  {
    question: "1800칼로리 식단은 남성에게도 적합한가요?",
    answer:
      "네, 1800kcal은 남성 감량 식단으로 매우 적합합니다. 대부분의 남성의 기초대사량(1,500~1,800kcal)을 충족하면서 적절한 칼로리 적자를 만들 수 있어요. 고강도 운동을 하는 남성이라면 2000kcal이 더 적합할 수 있습니다.",
  },
  {
    question: "운동하는 날과 쉬는 날의 칼로리를 다르게 해야 하나요?",
    answer:
      "가능하다면 구분하는 게 좋습니다. 운동하는 날에는 1800~1900kcal, 쉬는 날에는 1600~1700kcal로 조절하면 주간 평균이 1800kcal 정도로 맞춰져요. 하지만 처음이라면 매일 1800kcal로 통일하는 것도 괜찮습니다.",
  },
  {
    question: "1800칼로리 식단에서 탄단지 비율은 어떻게 해야 하나요?",
    answer:
      "운동을 병행한다면 탄수화물 45%, 단백질 30%, 지방 25%가 적합합니다. 근력 운동 위주라면 단백질 비율을 35%까지 올리고 탄수화물을 40%로 줄여도 좋아요. 중요한 것은 하루 단백질 100g 이상을 확보하는 거예요.",
  },
  {
    question: "1800칼로리에서 더 줄여야 하나요?",
    answer:
      "2~3주간 체중 변화가 없다면 1500kcal로 줄이는 것을 고려해볼 수 있습니다. 하지만 먼저 실제 섭취량이 정확히 1800kcal인지 점검해보세요. 소스, 음료, 간식의 숨은 칼로리가 원인인 경우가 많습니다.",
  },
  {
    question: "1800칼로리 식단을 하면서 술을 마셔도 되나요?",
    answer:
      "술은 1g당 7kcal로 칼로리가 높습니다. 맥주 500ml = 약 200kcal, 소주 1잔 = 약 60kcal입니다. 마신다면 해당 칼로리만큼 식사에서 줄여야 하는데, 영양가 없는 칼로리이므로 가능하면 피하는 게 좋습니다. 주 1회 이하로 제한하세요.",
  },
];

const TOC = [
  { id: "what-is", title: "1800칼로리 식단이란?" },
  { id: "who-is-it-for", title: "누구에게 적합한가요?" },
  { id: "nutrition-ratio", title: "영양소 배분 (탄단지 비율)" },
  { id: "weekly-meal-plan", title: "일주일 식단표" },
  { id: "grocery-list", title: "장보기 리스트" },
  { id: "success-tips", title: "1800칼로리 식단 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

export default function Diet1800kcalPage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 식단", href: "/diet/" },
    { label: "1800칼로리 식단표" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "1800칼로리 식단표 — 활동적인 여성을 위한 일주일 식단 가이드",
      description:
        "1800칼로리 식단표를 일주일치로 정리. 운동하는 여성과 남성 감량에 적합한 균형 식단.",
      url: "https://caloring.kr/diet/1800kcal/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단", href: "/diet/" },
      { label: "1800칼로리 식단표" },
    ]),
  ];

  return (
    <WikiLayout
      title="1800칼로리 식단표"
      description="1800kcal 식단표를 일주일치로 정리했어. 운동하면서 다이어트하는 여성이나 감량이 필요한 남성에게 딱 맞는 식단이야."
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
        { title: "1500칼로리 식단표", href: "/diet/1500kcal/", emoji: "📋" },
        { title: "2000칼로리 식단표", href: "/diet/2000kcal/", emoji: "📋" },
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
        <p className="mb-2 text-sm text-muted-foreground">운동하면서 다이어트하고 싶다면 1800kcal이 정답이야. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; <strong className="text-foreground">1800kcal</strong>은 활동적인 여성이나 감량 중인 남성에게 적합한 칼로리야
          </li>
          <li>
            &#x2022; <strong className="text-foreground">탄수화물 45% + 단백질 30% + 지방 25%</strong> 비율을 권장해
          </li>
          <li>
            &#x2022; 운동 병행 시 <strong className="text-foreground">근육은 유지하면서 체지방만</strong> 줄일 수 있어
          </li>
          <li>
            &#x2022; 밥을 제대로 먹으면서 감량할 수 있어서 <strong className="text-foreground">장기간 지속 가능</strong>해
          </li>
        </ul>
      </div>

      {/* What is 1800kcal diet? */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        1800칼로리 식단이란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1800칼로리 식단은 하루 총 섭취 칼로리를 <strong className="text-foreground">1,800kcal로 제한</strong>하는 다이어트 방법이야.
        일반 성인 여성의 하루 권장 섭취량이 약 2,000kcal이니까, 사실 &quot;약간만 줄인&quot; 수준이야.
        그런데 이 &quot;약간&quot;이 쌓이면 한 달에 1~2.5kg, 석 달이면 3~7kg이 빠져.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1800kcal의 가장 큰 장점은 <strong className="text-foreground">밥을 정상적으로 먹을 수 있다</strong>는 거야.
        매 끼니 밥 한 공기를 먹어도 간식까지 챙길 수 있을 정도로 여유가 있어.
        그래서 &quot;다이어트 중인데 안 먹는 것 같지 않다&quot;는 느낌이 드는 칼로리야.
        연구에 따르면 이 정도 적자가 <strong className="text-foreground">요요 현상 없이 장기간 유지 가능한 최적의 범위</strong>래.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        나의 정확한 하루 칼로리 필요량을 알고 싶다면{" "}
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
        1800kcal은 적용 범위가 가장 넓은 칼로리 중 하나야. 성별·활동량에 따라 감량에도, 유지에도 쓸 수 있거든.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합한 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 주 4회 이상 운동하는 여성</li>
        <li>&#x2022; 체중 감량이 필요한 남성 (BMI 25 이상)</li>
        <li>&#x2022; 1200~1500kcal 식단 후 유지 단계로 올리는 경우</li>
        <li>&#x2022; 근력 운동을 하면서 체지방만 줄이고 싶은 경우</li>
        <li>&#x2022; 장기간(3개월 이상) 꾸준히 감량하고 싶은 경우</li>
        <li>&#x2022; 극단적인 제한 없이 건강하게 빼고 싶은 경우</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합하지 않은 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 앉아서 생활하는 여성 (이 경우 1500kcal이 더 적합)</li>
        <li>&#x2022; 빠른 감량이 필요한 경우 (1200~1500kcal 권장)</li>
        <li>&#x2022; 매우 활동적인 남성/운동선수 (2000~2500kcal 필요)</li>
      </ul>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        자신의 기초대사량을 모른다면{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline font-medium">
          기초대사량 계산기
        </Link>
        에서 확인하고,{" "}
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
        1800kcal에서는 충분한 칼로리가 있으니 영양소 균형을 맞추기 쉬워.
        <strong className="text-foreground">탄수화물 45% + 단백질 30% + 지방 25%</strong>가 기본이야.
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
              <td className="border border-border px-4 py-3 text-center">810kcal</td>
              <td className="border border-border px-4 py-3 text-center">203g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">현미, 고구마, 통밀빵, 오트밀, 바나나</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-3 font-medium">단백질</td>
              <td className="border border-border px-4 py-3 text-center">30%</td>
              <td className="border border-border px-4 py-3 text-center">540kcal</td>
              <td className="border border-border px-4 py-3 text-center">135g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">닭가슴살, 계란, 연어, 소고기, 두부</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3 font-medium">지방</td>
              <td className="border border-border px-4 py-3 text-center">25%</td>
              <td className="border border-border px-4 py-3 text-center">450kcal</td>
              <td className="border border-border px-4 py-3 text-center">50g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">아보카도, 올리브오일, 견과류, 참기름</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">단백질 135g</strong>이 핵심이야. 운동하면서 다이어트할 때 근손실을 막으려면
        체중 1kg당 1.6~2.0g의 단백질이 필요한데, 70kg 남성 기준 약 112~140g이야.
        매 끼니 <strong className="text-foreground">단백질 35~45g</strong>을 포함하면 자연스럽게 달성할 수 있어.
      </p>

      {/* Weekly meal plan */}
      <h2 id="weekly-meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 식단표는 <strong className="text-foreground">하루 1,780~1,820kcal</strong> 범위로 구성했어.
        밥은 모두 <strong className="text-foreground">현미밥 1공기(약 210g, 250kcal)</strong> 기준이야.
        1200~1500kcal 식단보다 밥 양이 넉넉하고, 단백질 반찬도 푸짐하게 먹을 수 있어.
      </p>

      {/* Day 1 - Monday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">월요일 (1,800kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 60g + 저지방 우유 250ml + 바나나 1개 + 아몬드 10알 + 꿀 1작은술</td>
              <td className="border border-border px-4 py-2 text-center">430</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 닭가슴살 구이 150g + 브로콜리 볶음 + 된장국 + 김치</td>
              <td className="border border-border px-4 py-2 text-center">570</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 150g + 블루베리 50g + 프로틴바 1개</td>
              <td className="border border-border px-4 py-2 text-center">300</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 3/4공기 + 소고기 불고기 120g + 양배추 샐러드 + 시금치 나물</td>
              <td className="border border-border px-4 py-2 text-center">500</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,800</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 2 - Tuesday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">화요일 (1,790kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">통밀 토스트 2장 + 스크램블 에그(계란 3개) + 아보카도 1/2개 + 방울토마토 5개</td>
              <td className="border border-border px-4 py-2 text-center">480</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">잡곡밥 1공기 + 된장찌개(두부 포함) + 계란말이 3쪽 + 콩나물 무침 + 오이무침</td>
              <td className="border border-border px-4 py-2 text-center">530</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">사과 1개 + 아몬드 15알 + 무가당 두유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">280</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">연어 스테이크 150g + 현미밥 3/4공기 + 구운 채소(애호박, 양파, 파프리카) + 샐러드</td>
              <td className="border border-border px-4 py-2 text-center">500</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,790</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 3 - Wednesday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">수요일 (1,810kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(대) + 삶은 계란 3개 + 오이 1/2개 + 저지방 우유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">450</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미 비빔밥 (현미밥 1공기 + 소고기 80g + 계란 프라이 + 시금치·콩나물·당근·애호박 나물 + 고추장)</td>
              <td className="border border-border px-4 py-2 text-center">580</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴 쉐이크 1스쿱 + 바나나 1개</td>
              <td className="border border-border px-4 py-2 text-center">280</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">두부 스테이크 250g + 현미밥 3/4공기 + 미역국 + 양배추 샐러드</td>
              <td className="border border-border px-4 py-2 text-center">500</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,810</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 4 - Thursday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">목요일 (1,800kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 200g + 그래놀라 40g + 딸기 8개 + 꿀 1작은술</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 삼치 구이 1토막 + 김치찌개 + 깻잎 + 콩나물국</td>
              <td className="border border-border px-4 py-2 text-center">550</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">삶은 계란 2개 + 고구마 1/2개(중) + 방울토마토 10개</td>
              <td className="border border-border px-4 py-2 text-center">300</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭가슴살 볶음밥 (현미밥 3/4공기 + 닭가슴살 120g + 계란 1개 + 양파 + 대파 + 참기름)</td>
              <td className="border border-border px-4 py-2 text-center">550</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,800</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 5 - Friday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">금요일 (1,810kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">아보카도 토스트 (통밀빵 2장 + 아보카도 1/2개 + 계란 프라이 2개 + 후추)</td>
              <td className="border border-border px-4 py-2 text-center">470</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">잡곡밥 1공기 + 순두부찌개 + 멸치볶음 + 깻잎 + 시금치 나물</td>
              <td className="border border-border px-4 py-2 text-center">520</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">바나나 1개 + 프로틴바 1개 + 아몬드 5알</td>
              <td className="border border-border px-4 py-2 text-center">310</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">돼지 등심 구이 130g + 쌈채소 + 쌈장 + 현미밥 3/4공기 + 된장국</td>
              <td className="border border-border px-4 py-2 text-center">510</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,810</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 6 - Saturday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">토요일 (1,790kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">바나나 팬케이크 (바나나 1개 + 계란 2개 + 오트밀 30g) + 메이플시럽 + 그릭요거트 100g</td>
              <td className="border border-border px-4 py-2 text-center">420</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 소고기 미역국(소고기 100g) + 김치 + 계란찜 + 깻잎절임</td>
              <td className="border border-border px-4 py-2 text-center">560</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(중) + 저지방 우유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">280</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">새우 볶음 (새우 200g + 브로콜리 + 파프리카 + 올리브오일) + 현미밥 3/4공기</td>
              <td className="border border-border px-4 py-2 text-center">530</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,790</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 7 - Sunday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">일요일 (1,800kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 50g + 그릭요거트 150g + 견과류 15g + 블루베리 50g</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 제육볶음(돼지 앞다리살 120g) + 양배추 쌈 + 콩나물국</td>
              <td className="border border-border px-4 py-2 text-center">580</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">당근·오이 스틱 + 후무스 3큰술 + 삶은 계란 1개</td>
              <td className="border border-border px-4 py-2 text-center">250</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">참치 포케 볼 (현미밥 3/4공기 + 참치회 100g + 아보카도 1/4개 + 양상추 + 오이 + 간장 소스)</td>
              <td className="border border-border px-4 py-2 text-center">570</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,800</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Grocery list */}
      <h2 id="grocery-list" className="mt-10 mb-4 text-xl font-bold">
        장보기 리스트
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        위 일주일 식단을 위해 필요한 장보기 리스트야.
        1800kcal은 양이 넉넉해서 <strong className="text-foreground">다양한 식재료</strong>를 활용할 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">단백질 식품</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 닭가슴살/닭안심 500g</li>
        <li>&#x2022; 계란 3판 (30개)</li>
        <li>&#x2022; 두부 2모</li>
        <li>&#x2022; 연어 필렛 150g</li>
        <li>&#x2022; 새우 400g (냉동 가능)</li>
        <li>&#x2022; 소고기 (불고기용) 200g + (국거리용) 100g</li>
        <li>&#x2022; 돼지 등심/앞다리살 250g</li>
        <li>&#x2022; 삼치 1토막</li>
        <li>&#x2022; 참치회 (횟감) 100g</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">유제품/대체유</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 그릭요거트 700g (무가당)</li>
        <li>&#x2022; 저지방 우유 2팩 (2L)</li>
        <li>&#x2022; 무가당 두유 1팩</li>
        <li>&#x2022; 프로틴 파우더 (있으면)</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">탄수화물</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 현미/잡곡 3kg</li>
        <li>&#x2022; 오트밀 500g</li>
        <li>&#x2022; 고구마 4개 (중~대)</li>
        <li>&#x2022; 통밀 식빵 1봉</li>
        <li>&#x2022; 그래놀라 1봉</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">채소/과일</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 브로콜리 2송이, 시금치 1단, 양배추 1통</li>
        <li>&#x2022; 양상추 1포기, 콩나물 2봉, 파프리카 3개</li>
        <li>&#x2022; 방울토마토 1팩, 오이 2개, 당근 1개</li>
        <li>&#x2022; 애호박 1개, 양파 3개, 대파 2대, 버섯 1팩</li>
        <li>&#x2022; 깻잎 1팩, 쌈채소 1팩</li>
        <li>&#x2022; 바나나 4개, 사과 1개, 블루베리 1팩, 딸기 1팩</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 아보카도 2개</li>
        <li>&#x2022; 아몬드/견과류 소포장 2개</li>
        <li>&#x2022; 올리브오일, 참기름, 들기름</li>
        <li>&#x2022; 프로틴바 2개</li>
        <li>&#x2022; 후무스 1통</li>
        <li>&#x2022; 꿀, 메이플시럽</li>
      </ul>

      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">절약 팁:</strong> 소고기·연어는 마트 할인일에 맞춰 구매하고 냉동 보관하면 훨씬 저렴해.
          다이어트 식품 최저가가 궁금하다면{" "}
          <Link href="/products/" className="text-primary hover:underline font-medium">
            다이어트 식품 비교
          </Link>
          에서 확인해보세요.
        </p>
      </div>

      {/* Success tips */}
      <h2 id="success-tips" className="mt-10 mb-4 text-xl font-bold">
        1800칼로리 식단 성공 팁
      </h2>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        1800kcal은 여유가 있는 만큼, 오히려 &quot;별로 줄이지 않아서 효과가 없다&quot;고 느끼기 쉬워. 아래 팁들로 확실한 결과를 만들어보자.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 운동은 필수예요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1800kcal로 확실한 감량 효과를 보려면 <strong className="text-foreground">주 4회 이상 운동</strong>을 병행하는 게 좋아.
        웨이트트레이닝 40분 + 유산소 20분 조합이 체지방 감량에 가장 효과적이라는 연구 결과가 많아.
        운동으로 하루 300~500kcal을 추가 소모하면, 실질적으로 1300~1500kcal 식단을 하는 것과 같은 효과야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 소스·음료의 숨은 칼로리를 주의하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1800kcal이면 &quot;넉넉하다&quot;고 느껴서 소스나 음료를 무심코 추가하기 쉬워.
        커피 한 잔(설탕·시럽 포함)이 200kcal, 소스 한 줌이 100kcal이야.
        음료는 <strong className="text-foreground">블랙커피·물·무가당 차</strong> 위주로 마시고,
        소스는 계량해서 써.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 단백질 목표를 반드시 채우세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1800kcal에서 <strong className="text-foreground">단백질 130g 이상</strong>을 확보하는 게 핵심이야.
        단백질이 부족하면 지방 대신 근육이 빠지거든. 매 끼니 손바닥 크기의 단백질 식품을 포함하고,
        간식으로도 그릭요거트·삶은 계란·프로틴바 등 단백질이 풍부한 것을 선택하자.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 주간 단위로 관리하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 정확히 1800kcal을 맞추는 것보다 <strong className="text-foreground">주간 합계 12,600kcal</strong>을 맞추는 게 현실적이야.
        외식이 있는 날 2000kcal을 먹었다면, 다음 날 1600kcal로 맞추면 돼.
        이렇게 하면 외식이나 모임에서도 스트레스 없이 다이어트를 이어갈 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 체중 변화에 조급해하지 마세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1800kcal은 감량 속도가 느리지만, 그만큼 <strong className="text-foreground">요요 없이 건강하게</strong> 빠져.
        한 달에 1~2.5kg이 &quot;느리다&quot;고 느낄 수 있지만, 6개월이면 6~15kg이야.
        체중계보다{" "}
        <Link href="/calc/body-fat/" className="text-primary hover:underline font-medium">
          체지방 계산기
        </Link>
        로 체지방률 변화를 추적하는 게 더 정확해.
      </p>

      {/* Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1800kcal은 비교적 안전한 칼로리이지만, 아래 사항은 꼭 체크해.
      </p>

      <div className="mb-6 space-y-3">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">체중이 빠지지 않는다고 급하게 줄이지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            효과가 없다고 갑자기 1200kcal로 떨어뜨리면 대사가 무너질 수 있습니다. 먼저 실제 섭취량을 정확히 체크하고, 그래도 안 빠지면 1500kcal로 한 단계만 내려가세요.
          </p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">남성은 기초대사량을 확인하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            키 180cm 이상이거나 체중이 90kg 이상인 남성은 기초대사량이 1800kcal을 넘을 수 있습니다.
            이 경우 2000kcal 식단이 더 적합합니다.{" "}
            <Link href="/calc/bmr/" className="text-primary hover:underline">
              기초대사량 계산기
            </Link>
            로 확인하세요.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">운동 전후 영양 섭취에 신경 쓰세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            운동 1~2시간 전에 탄수화물 + 단백질 간식을 먹고, 운동 후 30분 내에 단백질 20~30g을 섭취하면 근육 회복과 성장에 도움이 됩니다.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">수분 섭취를 충분히 하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            하루 2L 이상의 물을 마시세요. 운동하는 날에는 땀으로 빠진 만큼 추가로 500ml~1L를 더 마셔야 합니다.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">체중 정체는 자연스러운 현상입니다</p>
          <p className="mt-1 text-sm text-muted-foreground">
            2~3주간 체중이 멈추는 &quot;정체기&quot;는 대부분 체내 수분 변화 때문입니다.
            체지방은 계속 빠지고 있을 수 있으니,{" "}
            <Link href="/calc/body-fat/" className="text-primary hover:underline">
              체지방 계산기
            </Link>
            로 확인해보세요.
          </p>
        </div>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        더 빠른 감량이 필요하다면{" "}
        <Link href="/diet/1500kcal/" className="text-primary hover:underline font-medium">
          1500칼로리 식단
        </Link>
        을 참고하고, 목표 체중에 도달한 후에는{" "}
        <Link href="/diet/2000kcal/" className="text-primary hover:underline font-medium">
          2000칼로리 식단
        </Link>
        으로 유지하세요. 운동 강도가 높다면{" "}
        <Link href="/diet/high-protein/" className="text-primary hover:underline font-medium">
          고단백 다이어트
        </Link>
        도 좋은 선택이야.
      </p>
    </WikiLayout>
  );
}
