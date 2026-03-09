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
  title: "1200칼로리 식단표 — 일주일 다이어트 식단 완벽 가이드",
  description:
    "1200칼로리 식단표를 일주일치로 정리했습니다. 매일 아침·점심·저녁·간식 메뉴와 칼로리를 확인하고, 장보기 리스트까지 한번에 준비하세요. 현실적인 한국식 저칼로리 다이어트 식단.",
  path: "/diet/1200kcal/",
  keywords: [
    "1200칼로리 식단",
    "1200칼로리 식단표",
    "저칼로리 식단",
    "다이어트 식단표",
    "일주일 다이어트 식단",
    "1200kcal 식단",
    "다이어트 식단",
    "저칼로리 다이어트",
    "다이어트 일주일 식단표",
    "여자 다이어트 식단",
  ],
});

const FAQ_ITEMS = [
  {
    question: "1200칼로리 식단은 누구나 해도 되나요?",
    answer:
      "아닙니다. 기초대사량(BMR)이 1200kcal 이상인 성인 여성에게 적합하며, 성장기 청소년, 임산부, 수유부, 남성, 고강도 운동을 하는 분은 적합하지 않습니다. 시작 전 기초대사량 계산기로 자신의 BMR을 확인하세요.",
  },
  {
    question: "1200칼로리 식단을 얼마나 오래 유지할 수 있나요?",
    answer:
      "일반적으로 4~8주를 권장합니다. 그 이상 지속하면 대사 적응(metabolic adaptation)이 일어나 오히려 살이 빠지지 않을 수 있습니다. 목표 체중에 가까워지면 1500~1800kcal로 점진적으로 늘려가세요.",
  },
  {
    question: "운동을 병행해도 괜찮나요?",
    answer:
      "가벼운 유산소(걷기, 요가)는 괜찮지만, 고강도 운동(웨이트트레이닝, HIIT)을 병행한다면 1200kcal은 부족할 수 있습니다. 운동일에는 200~300kcal 정도 추가 섭취를 고려하세요.",
  },
  {
    question: "1200칼로리 식단에서 탄수화물을 완전히 빼도 되나요?",
    answer:
      "권장하지 않습니다. 탄수화물은 뇌의 주요 에너지원이며, 완전히 제거하면 피로감·집중력 저하·변비 등이 올 수 있습니다. 전체 칼로리의 40~45% 정도는 탄수화물로 섭취하되, 정제 탄수화물 대신 현미·고구마·통곡물을 선택하세요.",
  },
  {
    question: "식단을 지키는데 체중이 안 빠져요",
    answer:
      "1~2주 정도는 체내 수분 변화로 체중이 정체될 수 있습니다. 또한 나트륨 섭취가 많으면 부종으로 체중이 늘어 보일 수 있어요. 2주 이상 정체가 지속되면 실제 섭취 칼로리를 다시 점검해보세요. 소스·음료·간식의 숨은 칼로리가 원인인 경우가 많습니다.",
  },
  {
    question: "외식할 때는 어떻게 하나요?",
    answer:
      "한식 뷔페보다는 메뉴를 선택할 수 있는 식당이 좋습니다. 된장찌개+밥 반공기, 샐러드+닭가슴살, 쌀국수(면 줄이기) 등이 외식 시 좋은 선택입니다. 소스는 따로 요청하고, 튀김·크림 소스는 피하세요.",
  },
];

const TOC = [
  { id: "what-is", title: "1200칼로리 식단이란?" },
  { id: "who-is-it-for", title: "누구에게 적합한가요?" },
  { id: "nutrition-ratio", title: "영양소 배분 (탄단지 비율)" },
  { id: "weekly-meal-plan", title: "일주일 식단표" },
  { id: "grocery-list", title: "장보기 리스트" },
  { id: "success-tips", title: "1200칼로리 식단 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

export default function Diet1200kcalPage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 식단", href: "/diet/" },
    { label: "1200칼로리 식단표" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "1200칼로리 식단표 — 일주일 다이어트 식단 완벽 가이드",
      description:
        "1200칼로리 식단표를 일주일치로 정리. 매일 아침·점심·저녁·간식 메뉴와 칼로리, 장보기 리스트까지.",
      url: "https://caloring.kr/diet/1200kcal/",
      datePublished: "2026-03-09",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단", href: "/diet/" },
      { label: "1200칼로리 식단표" },
    ]),
  ];

  return (
    <WikiLayout
      title="1200칼로리 식단표"
      description="현실적인 한국식 1200kcal 일주일 식단표. 아침·점심·저녁·간식 메뉴별 칼로리와 장보기 리스트까지 한번에 확인하세요."
      breadcrumbs={breadcrumbs}
      toc={TOC}
      faqItems={FAQ_ITEMS}
      jsonLd={jsonLd}
      updatedAt="2026-03-09"
      relatedCalc={[
        { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
        { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
        { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
        { title: "체지방 계산기", href: "/calc/body-fat/", emoji: "📐" },
      ]}
      relatedDiet={[
        {
          title: "간헐적 단식 가이드",
          href: "/diet/intermittent-fasting/",
          emoji: "⏰",
        },
        { title: "고단백 다이어트", href: "/diet/high-protein/", emoji: "💪" },
        { title: "1500칼로리 식단표", href: "/diet/1500kcal/", emoji: "📋" },
        { title: "직장인 다이어트", href: "/diet/office-worker/", emoji: "💼" },
      ]}
      relatedProducts={[
        { title: "닭가슴살 최저가 비교", href: "/products/", emoji: "🍗" },
        { title: "프로틴바 비교", href: "/products/", emoji: "🍫" },
        { title: "곤약 젤리 비교", href: "/products/", emoji: "🍬" },
        { title: "그릭요거트 비교", href: "/products/", emoji: "🥛" },
      ]}
    >
      {/* 핵심 요약 박스 */}
      <div className="mb-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; <strong className="text-foreground">1200kcal</strong>은 성인 여성 기준 안전한 최소 섭취 칼로리입니다
          </li>
          <li>
            &#x2022; <strong className="text-foreground">탄수화물 40% + 단백질 30% + 지방 30%</strong> 비율을 권장합니다
          </li>
          <li>
            &#x2022; <strong className="text-foreground">4~8주</strong> 단기간 실천 후 점진적으로 칼로리를 늘려가세요
          </li>
          <li>
            &#x2022; 아래 <strong className="text-foreground">일주일 식단표</strong>를 그대로 따라하면 됩니다
          </li>
        </ul>
      </div>

      {/* 1200칼로리 식단이란? */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        1200칼로리 식단이란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1200칼로리 식단은 하루 총 섭취 칼로리를 <strong className="text-foreground">1,200kcal로 제한</strong>하는 다이어트 방법입니다.
        일반 성인 여성의 하루 권장 칼로리가 약 1,800~2,000kcal인 것을 감안하면, 하루에 약 600~800kcal의 칼로리 적자를 만들어
        <strong className="text-foreground">일주일에 약 0.5~0.7kg 감량</strong>을 목표로 합니다.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        핵심은 단순히 적게 먹는 것이 아니라, <strong className="text-foreground">제한된 칼로리 안에서 영양소를 골고루 섭취</strong>하는 것입니다.
        단백질·식이섬유·건강한 지방을 충분히 포함해야 근손실을 막고, 포만감을 유지하며, 건강하게 체중을 줄일 수 있습니다.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        나의 정확한 하루 칼로리 필요량이 궁금하다면{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        로 먼저 확인해보세요.
      </p>

      {/* 누구에게 적합한가요? */}
      <h2 id="who-is-it-for" className="mt-10 mb-4 text-xl font-bold">
        누구에게 적합한가요?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1200칼로리 식단은 모든 사람에게 적합한 것이 아닙니다.
        <strong className="text-foreground">기초대사량(BMR)</strong>이란 숨만 쉬고 있어도 소모되는 최소한의 에너지인데,
        이 값보다 적게 먹으면 몸이 &quot;위기 모드&quot;에 돌입해 오히려 대사가 느려집니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합한 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 기초대사량(BMR)이 1,200kcal 이상인 성인 여성</li>
        <li>&#x2022; BMI 25 이상으로 체중 감량이 필요한 경우</li>
        <li>&#x2022; 주로 앉아서 생활하고 가벼운 활동만 하는 경우</li>
        <li>&#x2022; 단기간(4~8주) 빠른 감량이 필요한 경우</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합하지 않은 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 성장기 청소년 (18세 미만)</li>
        <li>&#x2022; 임산부, 수유부</li>
        <li>&#x2022; 기초대사량이 1,200kcal 미만인 저체중 여성</li>
        <li>&#x2022; 고강도 운동(웨이트, HIIT)을 주 4회 이상 하는 경우</li>
        <li>&#x2022; 섭식 장애 이력이 있는 경우</li>
        <li>&#x2022; 대부분의 남성 (BMR이 1,500~1,800kcal)</li>
      </ul>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        자신의 기초대사량을 모른다면{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline font-medium">
          기초대사량 계산기
        </Link>
        에서 30초 만에 확인할 수 있습니다.
      </p>

      {/* 영양소 배분 */}
      <h2 id="nutrition-ratio" className="mt-10 mb-4 text-xl font-bold">
        영양소 배분 (탄단지 비율)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1200kcal을 그냥 아무렇게나 채우면 안 됩니다.
        <strong className="text-foreground">탄수화물·단백질·지방의 비율</strong>이 다이어트 성패를 좌우합니다.
        아래는 1200칼로리 식단에서 권장하는 영양소 배분입니다.
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
              <td className="border border-border px-4 py-3 text-center">40%</td>
              <td className="border border-border px-4 py-3 text-center">480kcal</td>
              <td className="border border-border px-4 py-3 text-center">120g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">현미, 고구마, 통밀빵, 오트밀</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-3 font-medium">단백질</td>
              <td className="border border-border px-4 py-3 text-center">30%</td>
              <td className="border border-border px-4 py-3 text-center">360kcal</td>
              <td className="border border-border px-4 py-3 text-center">90g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">닭가슴살, 계란, 두부, 그릭요거트</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3 font-medium">지방</td>
              <td className="border border-border px-4 py-3 text-center">30%</td>
              <td className="border border-border px-4 py-3 text-center">360kcal</td>
              <td className="border border-border px-4 py-3 text-center">40g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">아보카도, 올리브오일, 견과류, 들기름</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">단백질 90g</strong>이 핵심입니다. 다이어트 중 근손실을 막으려면
        체중 1kg당 1.2~1.5g의 단백질이 필요한데, 60kg 여성 기준 약 72~90g입니다.
        매 끼니마다 <strong className="text-foreground">단백질 식품을 반드시 포함</strong>하세요.
      </p>

      {/* 일주일 식단표 */}
      <h2 id="weekly-meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 식단표는 <strong className="text-foreground">하루 1,180~1,220kcal</strong> 범위로 구성했습니다.
        현실적으로 구하기 쉬운 한국 식재료로만 만들었으며, 매일 다른 메뉴로 질리지 않게 구성했습니다.
        밥은 모두 <strong className="text-foreground">현미밥 2/3공기(약 150g, 170kcal)</strong> 기준입니다.
      </p>

      {/* Day 1 */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">월요일 (1,200kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 150g + 블루베리 50g + 그래놀라 20g</td>
              <td className="border border-border px-4 py-2 text-center">250</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 2/3공기 + 닭가슴살 구이 120g + 브로콜리 무침 + 미역국</td>
              <td className="border border-border px-4 py-2 text-center">420</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">삶은 계란 1개 + 방울토마토 10개</td>
              <td className="border border-border px-4 py-2 text-center">110</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">두부 스테이크 200g + 양배추 샐러드 + 현미밥 1/2공기</td>
              <td className="border border-border px-4 py-2 text-center">420</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,200</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 2 */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">화요일 (1,190kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 40g + 저지방 우유 200ml + 바나나 1/2개</td>
              <td className="border border-border px-4 py-2 text-center">260</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">잡곡밥 2/3공기 + 된장찌개 + 계란말이 2쪽 + 시금치 나물</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">아몬드 10알 + 사과 1/2개</td>
              <td className="border border-border px-4 py-2 text-center">130</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">연어 구이 100g + 샐러드(양상추, 파프리카, 올리브오일 드레싱) + 고구마 1/2개</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,190</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 3 */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">수요일 (1,210kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">통밀 토스트 1장 + 스크램블 에그(계란 2개) + 방울토마토 5개</td>
              <td className="border border-border px-4 py-2 text-center">280</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 2/3공기 + 소고기 미역국 + 김치 + 콩나물 무침</td>
              <td className="border border-border px-4 py-2 text-center">390</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 100g + 키위 1개</td>
              <td className="border border-border px-4 py-2 text-center">130</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭가슴살 샐러드 볼 (닭가슴살 100g + 양상추 + 파프리카 + 아보카도 1/4개 + 발사믹 드레싱)</td>
              <td className="border border-border px-4 py-2 text-center">410</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,210</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 4 */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">목요일 (1,200kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(중) + 삶은 계란 2개 + 오이 1/2개</td>
              <td className="border border-border px-4 py-2 text-center">290</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미 비빔밥 (현미밥 2/3공기 + 계란 프라이 1개 + 시금치·콩나물·당근·애호박 나물 + 고추장 1/2큰술)</td>
              <td className="border border-border px-4 py-2 text-center">410</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴바 1개 (약 150kcal 이하 제품)</td>
              <td className="border border-border px-4 py-2 text-center">150</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">새우 볶음 (새우 150g + 브로콜리 + 파프리카 + 올리브오일 1작은술) + 현미밥 1/2공기</td>
              <td className="border border-border px-4 py-2 text-center">350</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,200</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 5 */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">금요일 (1,200kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">바나나 1개 + 무가당 두유 200ml + 삶은 계란 1개</td>
              <td className="border border-border px-4 py-2 text-center">250</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">잡곡밥 2/3공기 + 순두부찌개 + 멸치볶음 + 오이무침</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">곤약 젤리 2개 + 호두 5알</td>
              <td className="border border-border px-4 py-2 text-center">120</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭안심 스테이크 120g + 구운 채소(애호박, 양파, 버섯) + 현미밥 1/2공기</td>
              <td className="border border-border px-4 py-2 text-center">430</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,200</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 6 */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">토요일 (1,190kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">아보카도 1/2개 + 통밀 토스트 1장 + 계란 후라이 1개</td>
              <td className="border border-border px-4 py-2 text-center">300</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">곤약 쌀 볶음밥 (곤약쌀 + 현미밥 반반 + 닭가슴살 80g + 계란 1개 + 양파 + 대파)</td>
              <td className="border border-border px-4 py-2 text-center">370</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 100g + 딸기 5개</td>
              <td className="border border-border px-4 py-2 text-center">120</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">참치 샐러드 (참치 캔 1개 + 양상추 + 옥수수 + 방울토마토 + 올리브오일 드레싱) + 현미밥 1/2공기</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,190</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 7 */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">일요일 (1,210kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 40g + 그릭요거트 100g + 견과류 10g + 꿀 1작은술</td>
              <td className="border border-border px-4 py-2 text-center">280</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 2/3공기 + 김치찌개(돼지고기 50g) + 계란찜 + 깻잎</td>
              <td className="border border-border px-4 py-2 text-center">420</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">당근 스틱 + 후무스 2큰술</td>
              <td className="border border-border px-4 py-2 text-center">100</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">돼지 안심 구이 100g + 양배추 쌈 + 쌈장 1작은술 + 현미밥 1/2공기</td>
              <td className="border border-border px-4 py-2 text-center">410</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">1,210</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* 장보기 리스트 */}
      <h2 id="grocery-list" className="mt-10 mb-4 text-xl font-bold">
        장보기 리스트
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        위 일주일 식단을 위해 필요한 장보기 리스트입니다.
        <strong className="text-foreground">일주일치를 한번에 구매</strong>하면 평일에 편하게 준비할 수 있어요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">단백질 식품</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 닭가슴살/닭안심 500g</li>
        <li>&#x2022; 계란 2판 (20개)</li>
        <li>&#x2022; 두부 2모</li>
        <li>&#x2022; 연어 필렛 100g</li>
        <li>&#x2022; 새우 300g (냉동 가능)</li>
        <li>&#x2022; 참치 캔 1개 (라이트)</li>
        <li>&#x2022; 소고기 (국거리용) 100g</li>
        <li>&#x2022; 돼지 안심 100g</li>
        <li>&#x2022; 돼지고기 (찌개용) 50g</li>
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
        <li>&#x2022; 고구마 2개 (중)</li>
        <li>&#x2022; 통밀 식빵 1봉</li>
        <li>&#x2022; 곤약쌀 1팩</li>
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
        <li>&#x2022; 오이 1개</li>
        <li>&#x2022; 당근 1개</li>
        <li>&#x2022; 애호박 1개</li>
        <li>&#x2022; 양파 2개, 대파 1대</li>
        <li>&#x2022; 버섯 1팩</li>
        <li>&#x2022; 바나나 2개, 사과 1개, 키위 1개, 블루베리 1팩, 딸기 1팩</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 아보카도 1개</li>
        <li>&#x2022; 아몬드/호두/견과류 소포장</li>
        <li>&#x2022; 올리브오일, 들기름</li>
        <li>&#x2022; 그래놀라 소포장</li>
        <li>&#x2022; 곤약 젤리 1팩</li>
        <li>&#x2022; 프로틴바 1개</li>
        <li>&#x2022; 후무스 1통</li>
        <li>&#x2022; 꿀 (소용량)</li>
      </ul>

      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">절약 팁:</strong> 닭가슴살·새우는 대용량 냉동 제품이 훨씬 저렴합니다.
          다이어트 식품 최저가가 궁금하다면{" "}
          <Link href="/products/" className="text-primary hover:underline font-medium">
            다이어트 식품 비교
          </Link>
          에서 확인해보세요.
        </p>
      </div>

      {/* 성공 팁 */}
      <h2 id="success-tips" className="mt-10 mb-4 text-xl font-bold">
        1200칼로리 식단 성공 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 식사 준비(밀프렙)를 활용하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        일요일에 닭가슴살·현미밥·삶은 계란을 미리 만들어두면 평일에 10분 안에 식사를 준비할 수 있습니다.
        배고플 때 냉장고를 열면 준비된 식재료가 있어야 배달 앱의 유혹을 이길 수 있어요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 물을 충분히 마시세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 <strong className="text-foreground">1.5~2L</strong>의 물을 마시세요.
        식사 30분 전에 물 한 잔을 마시면 포만감이 높아져 과식을 방지할 수 있습니다.
        배고픔과 갈증은 비슷한 신호를 보내기 때문에, 허기가 질 때 먼저 물을 마셔보세요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 단백질을 매 끼니 포함하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        단백질은 포만감을 가장 오래 유지시켜주는 영양소입니다.
        매 끼니 <strong className="text-foreground">단백질 20~30g</strong>을 포함하면
        간식 욕구가 크게 줄어들고 근손실도 방지할 수 있습니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 채소로 부피를 늘리세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        양배추·브로콜리·양상추 같은 저칼로리 채소는 양이 많아도 칼로리가 낮습니다.
        접시의 <strong className="text-foreground">절반을 채소</strong>로 채우면
        적은 칼로리로도 배부름을 느낄 수 있어요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 소스와 조리법에 주의하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        같은 닭가슴살이라도 튀기면 350kcal, 구우면 165kcal입니다.
        <strong className="text-foreground">굽기·삶기·에어프라이어</strong>를 주로 사용하고,
        소스는 간장·식초·레몬즙 위주로 가볍게 사용하세요.
        마요네즈(1큰술 = 100kcal), 케첩(1큰술 = 20kcal)은 의외의 칼로리 폭탄입니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">6. 기록하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        먹은 것을 기록하는 것만으로도 다이어트 성공률이 크게 올라갑니다.
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        를 활용해 매일 섭취 칼로리를 확인하는 습관을 들여보세요.
      </p>

      {/* 주의사항 */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        1200칼로리 식단은 효과적이지만, 아래 주의사항을 반드시 지켜야 건강하게 다이어트할 수 있습니다.
      </p>

      <div className="mb-6 space-y-3">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">1200kcal 미만으로 줄이지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            1200kcal는 성인 여성의 안전 마지노선입니다. 이보다 적게 먹으면 영양 결핍, 탈모, 생리불순, 면역력 저하 등 심각한 건강 문제가 생길 수 있습니다.
          </p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">8주 이상 지속하지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            장기간 저칼로리 식단을 유지하면 기초대사량이 떨어지는 &quot;대사 적응&quot;이 일어납니다. 4~8주 후에는 1500kcal, 1800kcal로 점진적으로 올리세요.
          </p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">이상 증상이 나타나면 중단하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            극심한 피로, 어지러움, 탈모, 생리불순, 수면 장애 등이 나타나면 즉시 칼로리를 늘리고 전문가와 상담하세요.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">비타민·미네랄 보충을 고려하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            1200kcal로는 모든 미량 영양소를 충족하기 어렵습니다. 종합비타민, 철분, 칼슘 보충제를 함께 섭취하면 좋습니다.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">체중이 아닌 체지방을 확인하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            체중계 숫자에 집착하지 마세요. 근육은 지방보다 무겁기 때문에 체중이 같아도 체지방률이 다를 수 있습니다.{" "}
            <Link href="/calc/body-fat/" className="text-primary hover:underline">
              체지방 계산기
            </Link>
            로 정기적으로 체크하세요.
          </p>
        </div>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        다이어트는 단기전이 아니라 장기전입니다. 1200칼로리 식단으로 초기 감량에 성공한 후,
        <Link href="/diet/1500kcal/" className="text-primary hover:underline font-medium">
          1500칼로리 식단
        </Link>
        이나{" "}
        <Link href="/diet/high-protein/" className="text-primary hover:underline font-medium">
          고단백 다이어트
        </Link>
        로 전환해 건강한 체중을 유지하세요.
      </p>
    </WikiLayout>
  );
}
