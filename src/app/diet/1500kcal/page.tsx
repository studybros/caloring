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
  title: "1500칼로리 식단표 — 건강한 감량을 위한 일주일 균형 식단",
  description:
    "1500칼로리 식단표를 일주일치로 정리했습니다. 1200kcal이 너무 힘들었다면, 1500kcal로 건강하게 감량하세요. 아침·점심·간식·저녁 메뉴와 장보기 리스트까지 완벽 가이드.",
  path: "/diet/1500kcal/",
  keywords: [
    "1500칼로리 식단",
    "1500칼로리 식단표",
    "1500kcal 식단",
    "다이어트 식단표",
    "일주일 다이어트 식단",
    "건강한 다이어트 식단",
    "여자 다이어트 식단",
    "균형 다이어트",
    "1500칼로리 다이어트",
    "감량 식단",
  ],
});

const FAQ_ITEMS = [
  {
    question: "1500칼로리 식단으로 살이 빠지나요?",
    answer:
      "네, 대부분의 성인 여성(하루 소비 칼로리 약 1,800~2,200kcal)에게 1500kcal은 하루 300~700kcal의 칼로리 적자를 만들어 한 달에 약 1.5~3kg 감량이 가능합니다. 급격한 감량보다 요요 없이 건강하게 빠지는 속도예요.",
  },
  {
    question: "1200칼로리 식단과 1500칼로리 식단, 뭐가 더 좋은가요?",
    answer:
      "1200kcal은 빠른 감량에 효과적이지만 장기간 유지하기 어렵고 대사 적응 리스크가 있습니다. 1500kcal은 감량 속도는 느리지만, 포만감이 높고 영양 균형을 맞추기 쉬워 더 오래 지속할 수 있어요. 운동을 병행한다면 1500kcal이 더 적합합니다.",
  },
  {
    question: "운동을 병행해도 되나요?",
    answer:
      "1500kcal은 운동 병행에 충분한 칼로리입니다. 주 3~4회 중강도 운동(웨이트트레이닝, 조깅 등)을 병행하면 근손실 없이 체지방만 줄일 수 있어요. 고강도 운동일에는 운동 전후로 단백질 간식을 추가하는 것도 좋습니다.",
  },
  {
    question: "1500칼로리 식단은 남성도 할 수 있나요?",
    answer:
      "남성의 경우 기초대사량이 보통 1,500~1,800kcal이기 때문에, 1500kcal 식단은 기초대사량 이하로 떨어질 수 있습니다. 활동적인 남성이라면 1800~2000kcal 식단이 더 적합합니다. 기초대사량 계산기로 먼저 확인해보세요.",
  },
  {
    question: "1500칼로리 식단을 얼마나 오래 유지할 수 있나요?",
    answer:
      "1200kcal보다 여유가 있기 때문에 8~12주까지 유지할 수 있습니다. 다만 목표 체중에 도달하면 1800kcal 정도로 점진적으로 늘려 체중을 유지하는 게 좋아요. 갑자기 원래 식사량으로 돌아가면 요요가 올 수 있습니다.",
  },
  {
    question: "외식할 때 1500칼로리를 맞추려면?",
    answer:
      "한식은 된장찌개+밥 한 공기(약 500kcal), 비빔밥(약 550kcal)이 좋은 선택입니다. 분식·중식은 칼로리가 높으니 피하고, 샐러드 전문점이나 도시락 전문점을 활용하세요. 소스는 별도로 요청하고, 튀김류는 피하는 게 포인트예요.",
  },
];

const TOC = [
  { id: "what-is", title: "1500칼로리 식단이란?" },
  { id: "who-is-it-for", title: "누구에게 적합한가요?" },
  { id: "nutrition-ratio", title: "영양소 배분 (탄단지 비율)" },
  { id: "weekly-meal-plan", title: "일주일 식단표" },
  { id: "grocery-list", title: "장보기 리스트" },
  { id: "success-tips", title: "1500칼로리 식단 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

export default function Diet1500kcalPage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 식단", href: "/diet/" },
    { label: "1500칼로리 식단표" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "1500칼로리 식단표 — 건강한 감량을 위한 일주일 균형 식단",
      description:
        "1500칼로리 식단표를 일주일치로 정리. 건강한 감량 속도의 균형 식단과 장보기 리스트까지.",
      url: "https://caloring.kr/diet/1500kcal/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단", href: "/diet/" },
      { label: "1500칼로리 식단표" },
    ]),
  ];

  return (
    <WikiLayout
      title="1500칼로리 식단표"
      description="1500kcal 식단표를 일주일치로 정리했어. 1200kcal보다 여유 있으면서도 확실하게 빠지는 균형 식단이야."
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
        { title: "1200칼로리 식단표", href: "/diet/1200kcal/", emoji: "📋" },
        { title: "1800칼로리 식단표", href: "/diet/1800kcal/", emoji: "📋" },
        { title: "고단백 다이어트", href: "/diet/high-protein/", emoji: "💪" },
        { title: "간헐적 단식 가이드", href: "/diet/intermittent-fasting/", emoji: "⏰" },
      ]}
      relatedProducts={[
        { title: "닭가슴살 최저가 비교", href: "/products/?category=chicken-breast", emoji: "🍗" },
        { title: "프로틴바 비교", href: "/products/?category=protein-bar", emoji: "🍫" },
        { title: "그릭요거트 비교", href: "/products/?category=yogurt", emoji: "🥛" },
        { title: "곤약 젤리 비교", href: "/products/?category=konjac", emoji: "🍬" },
      ]}
    >
      {/* Summary box */}
      <div className="mb-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <p className="mb-2 text-sm text-muted-foreground">1200kcal이 너무 빡빡했다면 1500kcal이 딱이야. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; <strong className="text-foreground">1500kcal</strong>은 활동적인 여성에게 최적의 감량 칼로리야
          </li>
          <li>
            &#x2022; <strong className="text-foreground">탄수화물 45% + 단백질 30% + 지방 25%</strong> 비율을 권장해
          </li>
          <li>
            &#x2022; 한 달에 <strong className="text-foreground">1.5~3kg</strong> 건강하게 감량할 수 있어
          </li>
          <li>
            &#x2022; 운동 병행이 가능해서 <strong className="text-foreground">체지방만 줄이고 근육은 유지</strong>할 수 있어
          </li>
        </ul>
      </div>

      {/* What is 1500kcal diet? */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        1500칼로리 식단이란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1500칼로리 식단은 하루 총 섭취 칼로리를 <strong className="text-foreground">1,500kcal로 제한</strong>하는 다이어트 방법이야.
        일반 성인 여성의 하루 소비 칼로리가 약 1,800~2,200kcal인 것을 감안하면,
        하루에 약 <strong className="text-foreground">300~700kcal의 칼로리 적자</strong>를 만들어
        일주일에 약 0.3~0.6kg, 한 달에 약 1.5~3kg 감량을 목표로 해.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1200kcal 식단에 비하면 하루 300kcal의 여유가 있어서, <strong className="text-foreground">밥 한 공기를 온전히 먹을 수 있고</strong>,
        간식도 좀 더 넉넉하게 챙길 수 있어. 그래서 &quot;배고파서 포기&quot;할 확률이 훨씬 낮지.
        많은 영양사들이 <strong className="text-foreground">장기간 지속 가능한 다이어트</strong>를 위해 1500kcal을 추천하는 이유기도 해.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        나의 정확한 하루 칼로리 필요량이 궁금하다면{" "}
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
        1500칼로리 식단은 1200kcal보다 적용 범위가 넓어.
        <strong className="text-foreground">운동을 병행하는 사람</strong>이나
        1200kcal 식단에서 <strong className="text-foreground">올려가는 과정</strong>의 사람에게 특히 좋아.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합한 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 활동적인 성인 여성 (주 3회 이상 운동)</li>
        <li>&#x2022; 1200kcal 식단이 너무 힘들었던 경우</li>
        <li>&#x2022; BMI 23~27 사이로 적당한 감량이 필요한 경우</li>
        <li>&#x2022; 장기간(8~12주) 꾸준히 감량하고 싶은 경우</li>
        <li>&#x2022; 1200kcal 식단 후 점진적으로 올리는 단계</li>
        <li>&#x2022; 요요 없이 건강한 속도로 빼고 싶은 경우</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합하지 않은 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 대부분의 남성 (기초대사량 이하로 떨어질 수 있음)</li>
        <li>&#x2022; 고강도 운동(크로스핏, 마라톤 등)을 매일 하는 경우</li>
        <li>&#x2022; 임산부, 수유부</li>
        <li>&#x2022; 성장기 청소년 (18세 미만)</li>
        <li>&#x2022; 저체중(BMI 18.5 미만)인 경우</li>
      </ul>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        자신의 기초대사량과 적정 칼로리를 모른다면{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline font-medium">
          기초대사량 계산기
        </Link>
        에서 30초 만에 확인할 수 있어.{" "}
        <Link href="/calc/bmi/" className="text-primary hover:underline font-medium">
          BMI 계산기
        </Link>
        도 함께 체크해보자.
      </p>

      {/* Nutrition ratio */}
      <h2 id="nutrition-ratio" className="mt-10 mb-4 text-xl font-bold">
        영양소 배분 (탄단지 비율)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1500kcal에서는 1200kcal보다 탄수화물 비율을 조금 높여도 괜찮아.
        <strong className="text-foreground">탄수화물 45% + 단백질 30% + 지방 25%</strong>가 운동 병행 시 가장 효율적인 비율이야.
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
              <td className="border border-border px-4 py-3 text-center">675kcal</td>
              <td className="border border-border px-4 py-3 text-center">169g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">현미, 고구마, 통밀빵, 오트밀, 퀴노아</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-3 font-medium">단백질</td>
              <td className="border border-border px-4 py-3 text-center">30%</td>
              <td className="border border-border px-4 py-3 text-center">450kcal</td>
              <td className="border border-border px-4 py-3 text-center">113g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">닭가슴살, 계란, 연어, 두부, 그릭요거트</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3 font-medium">지방</td>
              <td className="border border-border px-4 py-3 text-center">25%</td>
              <td className="border border-border px-4 py-3 text-center">375kcal</td>
              <td className="border border-border px-4 py-3 text-center">42g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">아보카도, 올리브오일, 견과류, 들기름</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">단백질 113g</strong>이 핵심이야. 체중 60kg 기준으로 체중 1kg당 약 1.8g에 해당하는데,
        운동을 병행할 때 근손실을 방지하면서 체지방만 줄이려면 이 정도가 필요해.
        매 끼니 <strong className="text-foreground">단백질 30~35g</strong>을 포함하면 자연스럽게 달성돼.
      </p>

      {/* Weekly meal plan */}
      <h2 id="weekly-meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 식단표는 <strong className="text-foreground">하루 1,480~1,520kcal</strong> 범위로 구성했어.
        한국에서 쉽게 구할 수 있는 식재료 위주로 짰고, 밥은 모두 <strong className="text-foreground">현미밥 3/4공기(약 170g, 200kcal)</strong> 기준이야.
        1200kcal 식단보다 밥 양이 넉넉하고 간식도 든든하게 먹을 수 있어.
      </p>

      {/* Day 1 - Monday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">월요일 (1,500kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 50g + 저지방 우유 200ml + 바나나 1개 + 아몬드 5알</td>
              <td className="border border-border px-4 py-2 text-center">350</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 3/4공기 + 닭가슴살 구이 130g + 시금치 나물 + 된장국</td>
              <td className="border border-border px-4 py-2 text-center">480</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 150g + 블루베리 50g + 그래놀라 15g</td>
              <td className="border border-border px-4 py-2 text-center">200</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1/2공기 + 두부 스테이크 200g + 양배추 샐러드 + 미역국</td>
              <td className="border border-border px-4 py-2 text-center">470</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,500</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 2 - Tuesday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">화요일 (1,490kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">통밀 토스트 2장 + 스크램블 에그(계란 2개) + 방울토마토 7개</td>
              <td className="border border-border px-4 py-2 text-center">370</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">잡곡밥 3/4공기 + 된장찌개 + 계란말이 3쪽 + 콩나물 무침</td>
              <td className="border border-border px-4 py-2 text-center">470</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">사과 1개 + 아몬드 10알</td>
              <td className="border border-border px-4 py-2 text-center">180</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">연어 구이 120g + 현미밥 1/2공기 + 샐러드(양상추, 파프리카, 올리브오일 드레싱) + 고구마 1/2개</td>
              <td className="border border-border px-4 py-2 text-center">470</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,490</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 3 - Wednesday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">수요일 (1,510kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(중) + 삶은 계란 2개 + 무가당 두유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">370</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미 비빔밥 (현미밥 3/4공기 + 계란 프라이 + 시금치·콩나물·당근·애호박 나물 + 고추장 1큰술)</td>
              <td className="border border-border px-4 py-2 text-center">500</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴바 1개 + 오이 1/2개</td>
              <td className="border border-border px-4 py-2 text-center">170</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭가슴살 샐러드 볼 (닭가슴살 120g + 양상추 + 파프리카 + 아보카도 1/4개 + 현미밥 1/2공기)</td>
              <td className="border border-border px-4 py-2 text-center">470</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,510</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 4 - Thursday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">목요일 (1,500kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 150g + 그래놀라 30g + 딸기 5개 + 꿀 1작은술</td>
              <td className="border border-border px-4 py-2 text-center">320</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 3/4공기 + 소고기 미역국(소고기 80g) + 김치 + 깻잎</td>
              <td className="border border-border px-4 py-2 text-center">480</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">삶은 계란 1개 + 방울토마토 10개 + 호두 5알</td>
              <td className="border border-border px-4 py-2 text-center">200</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">새우 볶음 (새우 150g + 브로콜리 + 파프리카 + 올리브오일) + 현미밥 3/4공기</td>
              <td className="border border-border px-4 py-2 text-center">500</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,500</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 5 - Friday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">금요일 (1,500kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">아보카도 1/2개 + 통밀 토스트 1장 + 계란 프라이 2개 + 방울토마토 5개</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">잡곡밥 3/4공기 + 순두부찌개 + 멸치볶음 + 오이무침</td>
              <td className="border border-border px-4 py-2 text-center">460</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">바나나 1개 + 무가당 두유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">180</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">돼지 안심 구이 120g + 양배추 쌈 + 쌈장 1작은술 + 현미밥 1/2공기 + 콩나물국</td>
              <td className="border border-border px-4 py-2 text-center">460</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,500</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 6 - Saturday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">토요일 (1,510kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 50g + 그릭요거트 100g + 견과류 10g + 블루베리 30g + 꿀 1작은술</td>
              <td className="border border-border px-4 py-2 text-center">350</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">곤약 쌀 볶음밥 (곤약쌀 + 현미밥 반반 + 닭가슴살 100g + 계란 1개 + 양파 + 대파)</td>
              <td className="border border-border px-4 py-2 text-center">430</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1/2개(중) + 저지방 우유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">210</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">참치 샐러드 (참치 캔 1개 + 양상추 + 옥수수 + 방울토마토 + 올리브오일 드레싱) + 현미밥 3/4공기</td>
              <td className="border border-border px-4 py-2 text-center">520</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,510</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 7 - Sunday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">일요일 (1,490kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">바나나 팬케이크 (바나나 1개 + 계란 2개 + 오트밀 20g) + 메이플시럽 1작은술</td>
              <td className="border border-border px-4 py-2 text-center">330</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 3/4공기 + 김치찌개(돼지고기 60g) + 계란찜 + 깻잎</td>
              <td className="border border-border px-4 py-2 text-center">490</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">당근 스틱 + 후무스 3큰술 + 곤약 젤리 1개</td>
              <td className="border border-border px-4 py-2 text-center">160</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭안심 스테이크 130g + 구운 채소(애호박, 양파, 버섯) + 현미밥 1/2공기 + 샐러드</td>
              <td className="border border-border px-4 py-2 text-center">510</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,490</td>
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
        <strong className="text-foreground">일주일치를 한번에 구매</strong>하면 평일에 편하게 준비할 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">단백질 식품</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 닭가슴살/닭안심 600g</li>
        <li>&#x2022; 계란 2판 (20개)</li>
        <li>&#x2022; 두부 2모</li>
        <li>&#x2022; 연어 필렛 120g</li>
        <li>&#x2022; 새우 300g (냉동 가능)</li>
        <li>&#x2022; 참치 캔 1개 (라이트)</li>
        <li>&#x2022; 소고기 (국거리용) 100g</li>
        <li>&#x2022; 돼지 안심 120g</li>
        <li>&#x2022; 돼지고기 (찌개용) 60g</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">유제품/대체유</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 그릭요거트 500g (무가당)</li>
        <li>&#x2022; 저지방 우유 1팩 (1L)</li>
        <li>&#x2022; 무가당 두유 1팩</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">탄수화물</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 현미/잡곡 2kg</li>
        <li>&#x2022; 오트밀 500g</li>
        <li>&#x2022; 고구마 3개 (중)</li>
        <li>&#x2022; 통밀 식빵 1봉</li>
        <li>&#x2022; 곤약쌀 1팩</li>
        <li>&#x2022; 그래놀라 소포장</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">채소/과일</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 브로콜리 2송이</li>
        <li>&#x2022; 시금치 1단</li>
        <li>&#x2022; 양배추 1/2통</li>
        <li>&#x2022; 양상추 1포기</li>
        <li>&#x2022; 콩나물 1봉</li>
        <li>&#x2022; 파프리카 2개</li>
        <li>&#x2022; 방울토마토 1팩</li>
        <li>&#x2022; 오이 1개, 당근 1개</li>
        <li>&#x2022; 애호박 1개, 양파 2개, 대파 1대, 버섯 1팩</li>
        <li>&#x2022; 바나나 3개, 사과 1개, 블루베리 1팩, 딸기 1팩, 키위 1개</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 아보카도 1개</li>
        <li>&#x2022; 아몬드/호두/견과류 소포장</li>
        <li>&#x2022; 올리브오일, 들기름</li>
        <li>&#x2022; 곤약 젤리 1팩</li>
        <li>&#x2022; 프로틴바 1개</li>
        <li>&#x2022; 후무스 1통</li>
        <li>&#x2022; 꿀, 메이플시럽 (소용량)</li>
      </ul>

      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">절약 팁:</strong> 닭가슴살·새우는 대용량 냉동 제품이 훨씬 저렴해.
          다이어트 식품 최저가가 궁금하다면{" "}
          <Link href="/products/" className="text-primary hover:underline font-medium">
            다이어트 식품 비교
          </Link>
          에서 확인해보세요.
        </p>
      </div>

      {/* Success tips */}
      <h2 id="success-tips" className="mt-10 mb-4 text-xl font-bold">
        1500칼로리 식단 성공 팁
      </h2>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        1500kcal은 1200kcal보다 여유가 있지만, 아무렇게나 먹으면 금방 초과해. 아래 팁들을 참고하자.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 밥 양을 정확히 재세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        &quot;대충 한 공기&quot;와 &quot;정확히 3/4공기&quot;는 100kcal 이상 차이가 나.
        처음 2주는 <strong className="text-foreground">주방 저울</strong>로 밥 양(170g)을 재는 습관을 들이면,
        이후에는 눈대중으로도 정확하게 맞출 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 운동과 함께하면 효과 2배</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1500kcal의 가장 큰 장점은 <strong className="text-foreground">운동을 병행할 수 있다</strong>는 거야.
        주 3~4회 웨이트트레이닝 + 유산소 20분을 병행하면, 같은 체중 감량이라도 체지방만 빠지고 근육은 유지돼.
        &quot;체중은 같은데 옷 사이즈가 줄었다&quot;는 후기가 많은 이유야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 간식을 계획하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1500kcal이면 하루 <strong className="text-foreground">150~200kcal의 간식</strong>을 충분히 먹을 수 있어.
        미리 정해둔 간식(그릭요거트, 견과류, 과일)을 먹으면 폭식 욕구를 예방할 수 있어.
        &quot;참다가 폭발&quot;하는 것보다 계획된 간식이 훨씬 나아.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 단백질 목표를 채우세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 <strong className="text-foreground">단백질 100g 이상</strong>을 목표로 해.
        매 끼니 닭가슴살·계란·두부·연어 중 하나는 반드시 포함하고,
        부족하면 프로틴바나 그릭요거트로 보충하자.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        로 단백질 섭취량을 함께 체크해보세요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 주말 외식에 대비하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        주말에 외식이 예상된다면, 평일에 하루 100kcal씩 덜 먹어 &quot;칼로리 뱅킹&quot;을 하는 방법도 있어.
        5일간 100kcal씩 아끼면 주말 한 끼에 500kcal을 더 쓸 수 있거든.
        완벽하지 않아도 <strong className="text-foreground">주간 평균</strong>이 맞으면 돼.
      </p>

      {/* Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1500칼로리 식단은 비교적 안전하지만, 아래 주의사항은 꼭 지켜야 해.
      </p>

      <div className="mb-6 space-y-3">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">기초대사량 아래로 떨어지지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            1500kcal이 기초대사량(BMR)보다 낮다면 이 식단은 적합하지 않습니다.{" "}
            <Link href="/calc/bmr/" className="text-primary hover:underline">
              기초대사량 계산기
            </Link>
            로 자신의 BMR을 먼저 확인하세요.
          </p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">감량이 멈추면 칼로리를 더 줄이지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            정체기가 오면 칼로리를 더 줄이는 것보다 운동량을 늘리거나, 일주일간 1800kcal로 올렸다가 다시 1500kcal로 돌아오는 &quot;리피드&quot; 전략이 더 효과적입니다.
          </p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">이상 증상이 나타나면 중단하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            극심한 피로, 어지러움, 탈모, 생리불순, 수면 장애 등이 나타나면 즉시 칼로리를 늘리고 전문가와 상담하세요.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">수분 섭취를 충분히 하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            하루 1.5~2L의 물을 마시세요. 배고픔과 갈증은 비슷한 신호를 보내기 때문에, 허기가 질 때 먼저 물을 마셔보세요.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">체중보다 체지방을 추적하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            운동을 병행하면 근육이 늘면서 체중은 그대로일 수 있어요. 체중계보다{" "}
            <Link href="/calc/body-fat/" className="text-primary hover:underline">
              체지방 계산기
            </Link>
            로 정기적으로 체크하는 게 더 정확합니다.
          </p>
        </div>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        목표 체중에 도달한 후에는{" "}
        <Link href="/diet/1800kcal/" className="text-primary hover:underline font-medium">
          1800칼로리 식단
        </Link>
        으로 점진적으로 올려 체중을 유지하세요. 감량 칼로리에서 바로 원래 식사량으로 돌아가면 요요가 올 수 있어.
        더 빠른 감량이 필요하다면{" "}
        <Link href="/diet/1200kcal/" className="text-primary hover:underline font-medium">
          1200칼로리 식단
        </Link>
        도 참고해보세요.
      </p>
    </WikiLayout>
  );
}
