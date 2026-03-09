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
  title: "2500칼로리 식단표 — 벌크업·근육 증가를 위한 일주일 고단백 식단",
  description:
    "2500칼로리 식단표를 일주일치로 정리했습니다. 벌크업과 근육 증가를 위한 고단백 식단. 매일 아침·점심·간식·저녁 메뉴와 영양 정보, 장보기 리스트까지 완벽 가이드.",
  path: "/diet/2500kcal/",
  keywords: [
    "2500칼로리 식단",
    "2500칼로리 식단표",
    "2500kcal 식단",
    "벌크업 식단",
    "근육 증가 식단",
    "벌크업 식단표",
    "고단백 식단",
    "마른 체형 식단",
    "체중 증가 식단",
    "남자 벌크업",
  ],
});

const FAQ_ITEMS = [
  {
    question: "2500칼로리로 벌크업이 되나요?",
    answer:
      "체중 70kg 남성의 유지 칼로리가 약 2,200~2,400kcal이므로, 2500kcal은 하루 약 100~300kcal의 칼로리 잉여를 만들어 '린 벌크(lean bulk)'에 적합합니다. 한 달에 약 0.5~1kg의 근육 증가를 기대할 수 있어요. 더 빠른 벌크업을 원한다면 2800~3000kcal이 필요합니다.",
  },
  {
    question: "2500칼로리 식단에서 단백질은 얼마나 먹어야 하나요?",
    answer:
      "근육 증가가 목적이라면 체중 1kg당 1.6~2.2g의 단백질이 필요합니다. 70kg 기준 약 112~154g, 80kg 기준 약 128~176g이에요. 이 식단표에서는 하루 약 170~190g의 단백질을 배분했습니다.",
  },
  {
    question: "마른 체형인데 2500칼로리가 너무 많아요",
    answer:
      "처음에는 2500kcal이 부담스러울 수 있습니다. 1~2주간은 2000kcal에서 시작해 매주 100~200kcal씩 올려가세요. 한 번에 많이 먹기 힘들다면 식사 횟수를 5~6회로 나누는 것도 방법이에요. 프로틴 쉐이크를 활용하면 부담 없이 칼로리를 채울 수 있습니다.",
  },
  {
    question: "벌크업 중에 유산소 운동을 해도 되나요?",
    answer:
      "가벼운 유산소(주 2~3회, 20~30분)는 심폐 건강과 인슐린 감수성 개선에 도움이 됩니다. 다만 고강도 유산소를 많이 하면 칼로리 잉여가 줄어 벌크업 속도가 느려질 수 있어요. 유산소를 한 만큼 추가 칼로리를 섭취하세요.",
  },
  {
    question: "2500칼로리 식단에서 살(지방)이 찌지 않나요?",
    answer:
      "칼로리 잉여 상태에서는 지방이 약간 증가하는 것이 자연스럽습니다. 핵심은 '어떤 칼로리'를 먹느냐예요. 단백질 비율을 높이고 충분한 근력 운동을 병행하면 근육 대비 지방 증가를 최소화할 수 있습니다. 체지방률이 20% 이상이라면 벌크업보다 감량을 먼저 권장합니다.",
  },
  {
    question: "보충제(프로틴, 크레아틴 등)가 필수인가요?",
    answer:
      "보충제는 '보충'일 뿐 필수가 아닙니다. 식단으로 단백질 목표를 채울 수 있다면 프로틴 파우더 없이도 충분해요. 다만 식사로 170g 이상의 단백질을 매일 먹기 어렵다면, 프로틴 쉐이크 1~2스쿱이 현실적인 도움이 됩니다. 크레아틴은 근력 운동 효과를 높여주는 검증된 보충제예요.",
  },
];

const TOC = [
  { id: "what-is", title: "2500칼로리 식단이란?" },
  { id: "who-is-it-for", title: "누구에게 적합한가요?" },
  { id: "nutrition-ratio", title: "영양소 배분 (탄단지 비율)" },
  { id: "weekly-meal-plan", title: "일주일 식단표" },
  { id: "grocery-list", title: "장보기 리스트" },
  { id: "success-tips", title: "2500칼로리 식단 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

export default function Diet2500kcalPage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 식단", href: "/diet/" },
    { label: "2500칼로리 식단표" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "2500칼로리 식단표 — 벌크업·근육 증가를 위한 일주일 고단백 식단",
      description:
        "2500칼로리 식단표를 일주일치로 정리. 벌크업과 근육 증가를 위한 고단백 식단 가이드.",
      url: "https://caloring.kr/diet/2500kcal/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단", href: "/diet/" },
      { label: "2500칼로리 식단표" },
    ]),
  ];

  return (
    <WikiLayout
      title="2500칼로리 식단표"
      description="2500kcal 고단백 식단표를 일주일치로 정리했어. 벌크업이나 근육 증가가 목표라면 이 식단을 따라해보자."
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
        { title: "2000칼로리 식단표", href: "/diet/2000kcal/", emoji: "📋" },
        { title: "1800칼로리 식단표", href: "/diet/1800kcal/", emoji: "📋" },
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
        <p className="mb-2 text-sm text-muted-foreground">근육 키우고 싶은데 뭘 먹어야 할지 모르겠다면, 이 식단을 따라해봐. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; <strong className="text-foreground">2500kcal</strong>은 린 벌크(지방 최소화 근육 증가)에 적합한 칼로리야
          </li>
          <li>
            &#x2022; <strong className="text-foreground">탄수화물 45% + 단백질 30% + 지방 25%</strong> 비율로 구성했어
          </li>
          <li>
            &#x2022; 하루 <strong className="text-foreground">단백질 188g</strong>을 확보해 근육 합성을 극대화해
          </li>
          <li>
            &#x2022; <strong className="text-foreground">주 4~5회 근력 운동</strong>을 반드시 병행해야 효과가 있어
          </li>
        </ul>
      </div>

      {/* What is 2500kcal diet? */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        2500칼로리 식단이란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2500칼로리 식단은 하루 총 섭취 칼로리를 <strong className="text-foreground">2,500kcal로 설정</strong>하는 식단이야.
        대부분의 남성 유지 칼로리(약 2,200~2,400kcal)보다 약간 높은 수준이라,
        <strong className="text-foreground">칼로리 잉여(surplus)</strong> 상태를 만들어 근육 성장을 촉진하는 게 목적이야.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        이걸 <strong className="text-foreground">&quot;린 벌크(Lean Bulk)&quot;</strong>라고 해.
        유지 칼로리 대비 10~15%만 초과하기 때문에 체지방 증가를 최소화하면서 근육을 키울 수 있어.
        반면에 유지 칼로리 대비 20% 이상 초과하는 &quot;더티 벌크&quot;는 근육도 빨리 늘지만 지방도 같이 늘어.
        연구에 따르면 린 벌크가 장기적으로 더 효율적이래.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        단, 이 식단은 <strong className="text-foreground">충분한 근력 운동을 병행할 때만</strong> 의미가 있어.
        운동 없이 2500kcal을 먹으면 그냥 살만 쪄. 나의 정확한 유지 칼로리가 궁금하다면{" "}
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
        2500kcal 식단은 주로 <strong className="text-foreground">근육 성장</strong>이 목표인 사람들을 위한 거야.
        감량이 아니라 &quot;몸 만들기&quot;가 목적인 경우에 적합해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합한 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 근육 증가(벌크업)를 원하는 남성 (체중 65~85kg)</li>
        <li>&#x2022; 마른 체형(하드게이너)으로 체중 증가가 필요한 경우</li>
        <li>&#x2022; 주 4~5회 이상 근력 운동을 하는 경우</li>
        <li>&#x2022; 체지방률 15% 이하로, 벌크업 시작에 적합한 상태</li>
        <li>&#x2022; 운동 경력 1년 이상으로 근육 성장이 둔화된 경우</li>
        <li>&#x2022; 활동적인 직업(배달, 건설, 물류 등)을 가진 남성</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">적합하지 않은 경우</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 체지방률이 20% 이상인 경우 (감량을 먼저 권장)</li>
        <li>&#x2022; 운동을 하지 않거나 주 2회 미만인 경우</li>
        <li>&#x2022; 체중 감량이 목표인 경우</li>
        <li>&#x2022; 대부분의 여성 (유지 칼로리 초과가 너무 큼)</li>
        <li>&#x2022; 앉아서 생활하는 경우</li>
      </ul>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        자신의 기초대사량과 유지 칼로리를 먼저 확인해보자.{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline font-medium">
          기초대사량 계산기
        </Link>
        에서 BMR을 확인하고,{" "}
        <Link href="/calc/body-fat/" className="text-primary hover:underline font-medium">
          체지방 계산기
        </Link>
        로 현재 체지방률도 체크해봐.
      </p>

      {/* Nutrition ratio */}
      <h2 id="nutrition-ratio" className="mt-10 mb-4 text-xl font-bold">
        영양소 배분 (탄단지 비율)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 식단에서는 <strong className="text-foreground">단백질을 충분히 확보</strong>하는 게 최우선이야.
        <strong className="text-foreground">탄수화물 45% + 단백질 30% + 지방 25%</strong>로 구성했어.
        특히 운동 전후의 탄수화물과 단백질 타이밍이 중요해.
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
              <td className="border border-border px-4 py-3 text-center">1,125kcal</td>
              <td className="border border-border px-4 py-3 text-center">281g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">현미, 고구마, 바나나, 오트밀, 감자, 통밀빵</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-3 font-medium">단백질</td>
              <td className="border border-border px-4 py-3 text-center">30%</td>
              <td className="border border-border px-4 py-3 text-center">750kcal</td>
              <td className="border border-border px-4 py-3 text-center">188g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">닭가슴살, 소고기, 연어, 계란, 프로틴 파우더</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-3 font-medium">지방</td>
              <td className="border border-border px-4 py-3 text-center">25%</td>
              <td className="border border-border px-4 py-3 text-center">625kcal</td>
              <td className="border border-border px-4 py-3 text-center">69g</td>
              <td className="border border-border px-4 py-3 text-muted-foreground">아보카도, 올리브오일, 견과류, 참기름, 치즈</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">단백질 188g</strong>이 이 식단의 핵심이야.
        체중 75kg 기준으로 체중 1kg당 약 2.5g에 해당하는데,
        근육 합성을 극대화하려면 이 정도가 필요하다는 연구 결과가 많아.
        식사만으로 188g을 채우기 어렵다면 프로틴 쉐이크 1~2스쿱으로 보충하면 돼.
      </p>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">탄수화물 281g</strong>도 중요해.
        탄수화물은 운동 시 에너지원이고, 근육에 글리코겐을 저장해 다음 운동의 퍼포먼스를 높여줘.
        운동 1~2시간 전에 탄수화물 + 단백질을 먹고, 운동 후 30분 내에 단백질 + 탄수화물을 섭취하는 게 최적이야.
      </p>

      {/* Weekly meal plan */}
      <h2 id="weekly-meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 식단표는 <strong className="text-foreground">하루 2,480~2,520kcal</strong> 범위로 구성했어.
        밥은 <strong className="text-foreground">현미밥 1공기 반(약 300g, 360kcal)</strong> 기준으로, 점심·저녁에 넉넉하게 배분했어.
        간식을 2번 나눠 먹는 것이 포인트야.
      </p>

      {/* Day 1 - Monday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">월요일 (2,500kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 80g + 저지방 우유 300ml + 바나나 1개 + 삶은 계란 3개 + 꿀 1큰술</td>
              <td className="border border-border px-4 py-2 text-center">620</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1.5공기 + 닭가슴살 구이 200g + 브로콜리 볶음 + 된장찌개 + 김치</td>
              <td className="border border-border px-4 py-2 text-center">750</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식1</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴 쉐이크 1스쿱 + 바나나 1개 + 아몬드 15알</td>
              <td className="border border-border px-4 py-2 text-center">380</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1공기 + 소고기 불고기 180g + 양배추 샐러드 + 계란찜 + 시금치 나물</td>
              <td className="border border-border px-4 py-2 text-center">700</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">야식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 200g + 그래놀라 30g + 견과류 10g</td>
              <td className="border border-border px-4 py-2 text-center">300</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,500 kcal (단백질 약 185g)</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 2 - Tuesday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">화요일 (2,490kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">통밀 토스트 3장 + 스크램블 에그(계란 4개) + 아보카도 1/2개 + 우유 250ml</td>
              <td className="border border-border px-4 py-2 text-center">680</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1.5공기 + 제육볶음(돼지 앞다리살 180g) + 콩나물국 + 깻잎 + 김치</td>
              <td className="border border-border px-4 py-2 text-center">730</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식1</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(대) + 삶은 계란 2개 + 무가당 두유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">연어 스테이크 180g + 현미밥 1공기 + 구운 채소(브로콜리, 파프리카, 양파) + 샐러드</td>
              <td className="border border-border px-4 py-2 text-center">680</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,490 kcal (단백질 약 190g)</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 3 - Wednesday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">수요일 (2,510kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(대) + 삶은 계란 4개 + 저지방 우유 250ml + 사과 1개</td>
              <td className="border border-border px-4 py-2 text-center">600</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미 비빔밥 (현미밥 1.5공기 + 소고기 120g + 계란 프라이 + 시금치·콩나물·당근 나물 + 고추장)</td>
              <td className="border border-border px-4 py-2 text-center">720</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식1</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴 쉐이크 2스쿱 + 바나나 1개</td>
              <td className="border border-border px-4 py-2 text-center">380</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭볶음탕 (닭 200g + 감자 + 당근 + 양파) + 현미밥 1공기 + 깻잎</td>
              <td className="border border-border px-4 py-2 text-center">700</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">야식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 150g + 견과류 15g + 꿀 1작은술</td>
              <td className="border border-border px-4 py-2 text-center">260 </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,510 kcal (단백질 약 185g)</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 4 - Thursday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">목요일 (2,500kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">바나나 팬케이크 (바나나 1개 + 계란 3개 + 오트밀 50g) + 메이플시럽 + 우유 250ml</td>
              <td className="border border-border px-4 py-2 text-center">580</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1.5공기 + 삼치 구이 2토막 + 순두부찌개 + 시금치 나물 + 김치</td>
              <td className="border border-border px-4 py-2 text-center">700</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식1</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">삶은 계란 3개 + 고구마 1개(중) + 아몬드 10알</td>
              <td className="border border-border px-4 py-2 text-center">430</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">소고기 스테이크 200g + 현미밥 1공기 + 양배추 샐러드 + 된장국</td>
              <td className="border border-border px-4 py-2 text-center">720</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">야식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴 쉐이크 1스쿱 + 저지방 우유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">220</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,500 kcal (단백질 약 195g)</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 5 - Friday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">금요일 (2,490kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">아보카도 토스트 (통밀빵 2장 + 아보카도 1/2개 + 계란 프라이 3개) + 우유 250ml</td>
              <td className="border border-border px-4 py-2 text-center">650</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1.5공기 + 김치찌개(돼지고기 120g) + 계란말이 4쪽 + 멸치볶음 + 깻잎</td>
              <td className="border border-border px-4 py-2 text-center">720</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식1</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴바 1개 + 바나나 1개 + 아몬드 15알</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭가슴살 볶음밥 (현미밥 1.5공기 + 닭가슴살 150g + 계란 1개 + 양파 + 대파 + 참기름)</td>
              <td className="border border-border px-4 py-2 text-center">720</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,490 kcal (단백질 약 180g)</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 6 - Saturday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">토요일 (2,510kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">오트밀 70g + 그릭요거트 200g + 견과류 20g + 블루베리 50g + 꿀 1큰술</td>
              <td className="border border-border px-4 py-2 text-center">550</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1.5공기 + 소고기 미역국(소고기 150g) + 계란찜 + 콩나물 무침 + 김치</td>
              <td className="border border-border px-4 py-2 text-center">730</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식1</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">고구마 1개(대) + 삶은 계란 2개 + 저지방 우유 250ml</td>
              <td className="border border-border px-4 py-2 text-center">420</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">새우 볶음 (새우 250g + 브로콜리 + 파프리카 + 올리브오일) + 현미밥 1공기 + 된장국</td>
              <td className="border border-border px-4 py-2 text-center">650</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">야식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴 쉐이크 1스쿱 + 바나나 1/2개</td>
              <td className="border border-border px-4 py-2 text-center">160</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,510 kcal (단백질 약 190g)</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Day 7 - Sunday */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">일요일 (2,500kcal)</h3>
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
              <td className="border border-border px-4 py-2 text-muted-foreground">통밀 토스트 2장 + 스크램블 에그(계란 3개) + 소시지 2개 + 방울토마토 7개 + 우유 200ml</td>
              <td className="border border-border px-4 py-2 text-center">620</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">점심</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">현미밥 1.5공기 + 돼지 등심 구이 180g + 쌈채소 + 쌈장 + 된장국</td>
              <td className="border border-border px-4 py-2 text-center">730</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">간식1</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">프로틴 쉐이크 1스쿱 + 고구마 1개(중) + 아몬드 10알</td>
              <td className="border border-border px-4 py-2 text-center">400</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">저녁</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">참치 포케 볼 (현미밥 1공기 + 참치회 150g + 아보카도 1/2개 + 양상추 + 오이 + 간장 소스)</td>
              <td className="border border-border px-4 py-2 text-center">650</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">야식</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">그릭요거트 150g + 그래놀라 20g + 딸기 5개</td>
              <td className="border border-border px-4 py-2 text-center">250 </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold" colSpan={2}>합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">2,500 kcal (단백질 약 192g)</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Grocery list */}
      <h2 id="grocery-list" className="mt-10 mb-4 text-xl font-bold">
        장보기 리스트
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2500kcal 식단은 식재료 양이 상당해.
        <strong className="text-foreground">대용량 구매</strong>가 경제적이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">단백질 식품</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 닭가슴살/닭 (통닭 포함) 1kg</li>
        <li>&#x2022; 계란 4판 (40개)</li>
        <li>&#x2022; 소고기 (불고기용 180g + 국거리용 150g + 스테이크용 200g)</li>
        <li>&#x2022; 돼지 앞다리살/등심 300g</li>
        <li>&#x2022; 연어 필렛 180g</li>
        <li>&#x2022; 새우 500g (냉동)</li>
        <li>&#x2022; 삼치 2토막</li>
        <li>&#x2022; 참치회 (횟감) 150g</li>
        <li>&#x2022; 소시지 1팩 (무방부제)</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">유제품/보충제</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 그릭요거트 1kg (무가당)</li>
        <li>&#x2022; 저지방 우유 3팩 (3L)</li>
        <li>&#x2022; 무가당 두유 1팩</li>
        <li>&#x2022; 프로틴 파우더 (1주일 약 7~10스쿱 분량)</li>
        <li>&#x2022; 프로틴바 1~2개</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">탄수화물</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 현미/잡곡 5kg</li>
        <li>&#x2022; 오트밀 1kg</li>
        <li>&#x2022; 고구마 7개 (중~대)</li>
        <li>&#x2022; 통밀 식빵 2봉</li>
        <li>&#x2022; 그래놀라 1봉</li>
        <li>&#x2022; 감자 2개</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">채소/과일</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 브로콜리 3송이, 시금치 2단, 양배추 1통</li>
        <li>&#x2022; 양상추 1포기, 콩나물 2봉, 파프리카 3개</li>
        <li>&#x2022; 방울토마토 2팩, 오이 2개, 당근 2개</li>
        <li>&#x2022; 양파 4개, 대파 2대, 버섯 1팩</li>
        <li>&#x2022; 깻잎 2팩, 쌈채소 1팩</li>
        <li>&#x2022; 바나나 7개, 사과 1개, 블루베리 1팩, 딸기 1팩</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 아보카도 2개</li>
        <li>&#x2022; 아몬드/견과류 대포장 1개</li>
        <li>&#x2022; 올리브오일, 참기름</li>
        <li>&#x2022; 꿀, 메이플시럽</li>
      </ul>

      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">절약 팁:</strong> 2500kcal 식단은 식비가 많이 들 수 있어.
          닭가슴살 대용량 냉동(5kg)을 사면 100g당 가격이 절반 이하로 떨어져.
          다이어트 식품 최저가가 궁금하다면{" "}
          <Link href="/products/" className="text-primary hover:underline font-medium">
            다이어트 식품 비교
          </Link>
          에서 확인해보세요.
        </p>
      </div>

      {/* Success tips */}
      <h2 id="success-tips" className="mt-10 mb-4 text-xl font-bold">
        2500칼로리 식단 성공 팁
      </h2>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 식단의 핵심은 &quot;꾸준히&quot; 먹는 거야. 많은 사람들이 먹는 것보다 운동이 더 쉽다고 느끼더라.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 식사를 5~6회로 나누세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한 번에 800kcal 이상 먹기 힘들다면, 식사를 <strong className="text-foreground">5~6회로 나누는 게 효과적</strong>이야.
        아침·오전간식·점심·오후간식·저녁·야식으로 나누면 한 끼당 400~500kcal만 먹으면 돼.
        특히 마른 체형은 한 번에 많이 먹기 어려우니까 &quot;자주 먹는&quot; 전략이 중요해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 운동 전후 영양 타이밍을 지키세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        운동 <strong className="text-foreground">1~2시간 전</strong>에 탄수화물 + 단백질(고구마 + 계란 등)을 먹고,
        운동 <strong className="text-foreground">후 30분 이내</strong>에 프로틴 쉐이크 + 바나나를 먹으면 근육 합성이 극대화돼.
        이 &quot;골든 타임&quot;을 지키는 것만으로도 결과가 확연히 달라진다는 연구 결과가 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 프로틴 쉐이크를 활용하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 <strong className="text-foreground">단백질 188g</strong>을 음식만으로 채우기는 현실적으로 힘들어.
        닭가슴살 200g이 약 46g의 단백질이니까, 하루에 닭가슴살만 800g을 먹어야 하거든.
        프로틴 쉐이크 1~2스쿱(단백질 25~50g)으로 보충하면 훨씬 편해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 체중과 체지방률을 함께 추적하세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 중에는 체중이 느는 게 당연하지만, <strong className="text-foreground">체지방률이 3% 이상 올라가면</strong>
        칼로리 잉여가 너무 큰 거야. 한 달에 체중 0.5~1kg 증가, 체지방률 변화 1% 이내가 린 벌크의 이상적인 범위야.{" "}
        <Link href="/calc/body-fat/" className="text-primary hover:underline font-medium">
          체지방 계산기
        </Link>
        로 2주마다 체크하자.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 수분 섭취를 늘리세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        고단백 식단에서는 신장에 부담이 갈 수 있으니 <strong className="text-foreground">하루 2.5~3L의 물</strong>을 마셔야 해.
        운동 중에도 500ml~1L를 추가로 마시고, 크레아틴을 복용 중이라면 수분 섭취가 더 중요해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">6. 밀프렙은 필수예요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2500kcal을 매일 조리하는 건 현실적으로 힘들어.
        주말에 <strong className="text-foreground">닭가슴살·현미밥·삶은 계란·고구마</strong>를 대량으로 만들어
        밀프렙 용기에 나눠담아 두면 평일에 데우기만 하면 돼.
        많은 헬스 커뮤니티에서 밀프렙이 벌크업 성공의 핵심이라고 강조해.
      </p>

      {/* Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 식단은 제대로 관리하지 않으면 &quot;살만 찌는&quot; 결과를 낳을 수 있어. 아래 주의사항을 꼭 지키자.
      </p>

      <div className="mb-6 space-y-3">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">운동 없이 2500kcal을 먹지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            2500kcal은 대부분의 남성에게 칼로리 잉여 상태입니다. 충분한 근력 운동(주 4~5회) 없이 이만큼 먹으면 체지방만 증가합니다. 운동을 쉬는 기간에는 2000kcal로 줄이세요.
          </p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">체지방률 20% 이상이면 벌크업보다 감량이 먼저예요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            체지방이 높은 상태에서 벌크업하면 인슐린 감수성이 떨어져 근육보다 지방이 더 늘어납니다.{" "}
            <Link href="/calc/body-fat/" className="text-primary hover:underline">
              체지방 계산기
            </Link>
            로 체지방률을 확인하고, 15% 이하로 줄인 후 벌크업을 시작하는 게 효율적이에요.
          </p>
        </div>

        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">&quot;더티 벌크&quot;를 하지 마세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            피자·치킨·햄버거로 2500kcal을 채우는 &quot;더티 벌크&quot;는 칼로리는 채울 수 있지만, 영양소 균형이 무너지고 체지방이 크게 늘어납니다. 깨끗한 식재료로 &quot;클린 벌크&quot;를 유지하세요.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">수분 섭취가 특히 중요해요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            고단백 식단은 신장에 부담을 줄 수 있습니다. 하루 2.5~3L의 물을 마시세요. 신장 질환이 있다면 반드시 의사와 상담 후 고단백 식단을 시작하세요.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">충분한 수면을 취하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            근육은 운동할 때가 아니라 &quot;잠잘 때&quot; 성장합니다. 하루 7~8시간의 수면은 성장호르몬 분비와 근육 회복에 필수적이에요. 수면 부족은 근육 합성을 최대 30% 감소시킨다는 연구 결과도 있습니다.
          </p>
        </div>

        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
          <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">벌크업 기간은 3~6개월로 설정하세요</p>
          <p className="mt-1 text-sm text-muted-foreground">
            무한정 벌크업을 하면 체지방이 과도하게 늘어납니다. 3~6개월 벌크업 후 4~8주간 컷팅(감량)을 하는 사이클이 가장 효율적입니다.
            컷팅 시에는{" "}
            <Link href="/diet/2000kcal/" className="text-primary hover:underline">
              2000칼로리 식단
            </Link>
            이나{" "}
            <Link href="/diet/1800kcal/" className="text-primary hover:underline">
              1800칼로리 식단
            </Link>
            을 참고하세요.
          </p>
        </div>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        벌크업 후 컷팅이 필요하다면{" "}
        <Link href="/diet/2000kcal/" className="text-primary hover:underline font-medium">
          2000칼로리 식단
        </Link>
        으로 시작해 점진적으로 줄여가세요.{" "}
        <Link href="/diet/high-protein/" className="text-primary hover:underline font-medium">
          고단백 다이어트
        </Link>
        가이드도 함께 참고하면 컷팅 시 근손실을 최소화할 수 있어.
      </p>
    </WikiLayout>
  );
}
