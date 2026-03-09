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
  title: "고단백 식단 가이드 — 단백질 다이어트 식품·섭취량·식단표 총정리",
  description:
    "고단백 다이어트의 원리, 하루 단백질 섭취량 계산법, 고단백 식품 TOP 20, 일주일 식단표, 프로틴 보충제 활용법까지 총정리. 근육은 지키고 체지방만 빼는 단백질 식단을 알아보세요.",
  path: "/diet/high-protein/",
  keywords: [
    "고단백 식단",
    "고단백 다이어트",
    "단백질 다이어트",
    "고단백 식품",
    "단백질 식단표",
    "다이어트 단백질",
    "단백질 섭취량",
    "단백질 음식",
    "고단백 저칼로리 음식",
    "닭가슴살 다이어트",
    "프로틴 다이어트",
  ],
});

const tocItems = [
  { id: "what-is", title: "고단백 다이어트란?" },
  { id: "why-protein", title: "단백질이 다이어트에 중요한 이유" },
  { id: "how-much", title: "하루 단백질 섭취량 계산법" },
  { id: "top20", title: "고단백 식품 TOP 20" },
  { id: "korean-foods", title: "한국 음식 단백질 함량 비교표" },
  { id: "meal-plan", title: "일주일 고단백 식단표" },
  { id: "supplements", title: "단백질 보충제 활용법" },
  { id: "cautions", title: "주의사항 및 부작용" },
];

const faqItems = [
  {
    question: "단백질을 많이 먹으면 신장에 안 좋은가요?",
    answer:
      "건강한 신장을 가진 사람이라면 체중 1kg당 2g 수준의 고단백 식단은 신장에 유의미한 악영향을 주지 않는다는 것이 다수의 연구 결과입니다. 다만 기존에 신장 질환이 있는 경우에는 반드시 의사와 상담 후 단백질 섭취량을 결정하세요.",
  },
  {
    question: "고단백 식단만으로 살이 빠지나요?",
    answer:
      "단백질은 포만감을 높이고 식욕을 억제하는 데 도움이 되지만, 체중 감량의 핵심은 전체 칼로리 적자(소비 칼로리 > 섭취 칼로리)입니다. 고단백 식단은 칼로리 적자를 더 쉽게 유지하도록 도와주는 전략이지, 단독으로 살을 빼주는 것은 아닙니다.",
  },
  {
    question: "단백질은 한 끼에 몇 g까지 흡수되나요?",
    answer:
      "과거에는 '한 끼에 20~30g만 흡수된다'는 속설이 있었지만, 최신 연구에 따르면 한 끼에 40g 이상의 단백질도 충분히 흡수·활용됩니다. 다만 근합성 자극 효율을 고려하면 한 끼 30~50g씩 3~4회로 나누어 섭취하는 것이 가장 효과적입니다.",
  },
  {
    question: "여성도 고단백 식단을 해도 되나요?",
    answer:
      "물론입니다. 여성에게도 단백질은 근육 유지, 뼈 건강, 호르몬 균형에 필수적입니다. '단백질을 많이 먹으면 몸이 커진다'는 것은 오해이며, 여성 호르몬 특성상 보디빌더처럼 근육이 커지려면 매우 극단적인 훈련이 필요합니다.",
  },
  {
    question: "식물성 단백질만으로 충분한가요?",
    answer:
      "가능하지만, 식물성 단백질은 필수아미노산 구성이 불완전한 경우가 많아 다양한 식물성 단백질원을 조합해야 합니다. 두부+현미, 콩+곡물 등을 함께 먹으면 아미노산 프로필을 보완할 수 있습니다.",
  },
  {
    question: "운동 안 하는데 고단백 식단이 의미 있나요?",
    answer:
      "네. 운동을 하지 않더라도 단백질의 높은 포만감과 식이성 발열효과(TEF)는 다이어트에 도움이 됩니다. 다만 근육량 유지·증가를 극대화하려면 적절한 저항 운동(근력 운동)을 병행하는 것이 가장 효과적입니다.",
  },
];

const relatedCalc = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "체지방률 계산기", href: "/calc/body-fat/", emoji: "📊" },
];

const relatedProducts = [
  { title: "프로틴 최저가 비교", href: "/products/protein/", emoji: "🥤" },
  {
    title: "닭가슴살 최저가 비교",
    href: "/products/chicken-breast/",
    emoji: "🍗",
  },
  {
    title: "프로틴바 최저가 비교",
    href: "/products/protein-bar/",
    emoji: "🍫",
  },
  {
    title: "그릭요거트 최저가 비교",
    href: "/products/greek-yogurt/",
    emoji: "🥛",
  },
];

const relatedDiet = [
  {
    title: "간헐적 단식 가이드",
    href: "/diet/intermittent-fasting/",
    emoji: "⏰",
  },
  { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋" },
  { title: "벌크업 식단 가이드", href: "/diet/bulk-up/", emoji: "💪" },
];

const breadcrumbs = [
  { label: "홈", href: "/" },
  { label: "다이어트 식단 가이드", href: "/diet/" },
  { label: "고단백 다이어트" },
];

const jsonLd = [
  createArticleSchema({
    title: "고단백 식단 가이드 — 단백질 다이어트 식품·섭취량·식단표 총정리",
    description:
      "고단백 다이어트의 원리, 하루 단백질 섭취량 계산법, 고단백 식품 TOP 20, 일주일 식단표까지 총정리.",
    url: "https://caloring.kr/diet/high-protein/",
    datePublished: "2026-03-09",
  }),
  createFAQSchema(faqItems),
  createBreadcrumbSchema([
    { label: "다이어트 식단 가이드", href: "/diet/" },
    { label: "고단백 다이어트" },
  ]),
];

export default function HighProteinDietPage() {
  return (
    <WikiLayout
      title="고단백 다이어트 완벽 가이드"
      description="근육은 지키면서 살만 빼고 싶다면? 고단백 식단의 핵심을 알려줄게."
      breadcrumbs={breadcrumbs}
      toc={tocItems}
      faqItems={faqItems}
      relatedCalc={relatedCalc}
      relatedProducts={relatedProducts}
      relatedDiet={relatedDiet}
      jsonLd={jsonLd}
      updatedAt="2026-03-09"
    >
      {/* Key Summary Box */}
      <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <p className="mb-2 text-sm text-muted-foreground">체지방은 빼면서 근육은 지키는 비결, 바로 고단백 식단이야. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">목표 단백질</strong>: 체중
            1kg당 1.6~2.2g (60kg 기준 96~132g/일)
          </li>
          <li>
            <strong className="text-foreground">핵심 원리</strong>: 포만감
            증가 + 근육 보존 + 식이성 발열효과(TEF)
          </li>
          <li>
            <strong className="text-foreground">최고 효율 식품</strong>:
            닭가슴살, 계란 흰자, 그릭요거트, 새우, 두부
          </li>
          <li>
            <strong className="text-foreground">필수 병행</strong>: 주
            3~4회 이상 근력 운동 권장
          </li>
        </ul>
      </div>

      {/* Section 1: What is High Protein Diet */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        고단백 다이어트란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        다이어트하면서 제일 무서운 게 근손실이잖아. 살은 빠지는데 팔다리가 가늘어지고 처지는 느낌? 그래서 많은 사람들이 선택하는 게 <strong className="text-foreground">고단백 다이어트</strong>야. 전체
        칼로리 중{" "}
        <strong className="text-foreground">단백질 비율을 30% 이상</strong>
        으로 높이는 식사 전략인데, 일반적인 한국인의 단백질 섭취 비율이
        15~20%인 것에 비해 거의 두 배 가까운 단백질을 섭취하는 거지.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        단순히 &quot;고기를 많이 먹는 것&quot;이 아니라,{" "}
        <strong className="text-foreground">
          총 칼로리를 조절하면서 단백질 비율을 전략적으로 높이는 것
        </strong>
        이 핵심이야. 탄수화물이나 지방을 극단적으로 제한하지 않으면서도
        체지방 감량과 근육 유지를 동시에 달성할 수 있어서, 장기간 유지하기에도
        무리가 적은 방법이야.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        내 하루 적정 칼로리가 궁금하다면{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        로 먼저 확인해보세요.
      </p>

      {/* Section 2: Why Protein Matters */}
      <h2 id="why-protein" className="mt-10 mb-4 text-xl font-bold">
        단백질이 다이어트에 중요한 이유
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        단백질이 다이어트의 핵심 영양소인 이유는 크게 세 가지입니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        1. 포만감 증가 및 식욕 억제
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        단백질은 세 가지 주요 영양소(탄수화물, 단백질, 지방) 중{" "}
        <strong className="text-foreground">포만감이 가장 높은 영양소</strong>
        입니다. 단백질을 섭취하면 포만 호르몬인{" "}
        <strong className="text-foreground">펩타이드 YY(PYY)</strong>와{" "}
        <strong className="text-foreground">GLP-1</strong>의 분비가
        증가하고, 배고픔 호르몬인{" "}
        <strong className="text-foreground">그렐린</strong>은 감소합니다.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        실제로 단백질 섭취 비율을 15%에서 30%로 높인 그룹은 하루 평균{" "}
        <strong className="text-foreground">441kcal를 덜 먹었다</strong>는
        연구 결과가 있습니다. 의지력으로 참는 것이 아니라, 자연스럽게 덜
        먹게 되는 것입니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        2. 근육량 유지 (요요 방지)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        다이어트(칼로리 적자) 중에는 체지방뿐 아니라{" "}
        <strong className="text-foreground">근육도 함께 빠질 위험</strong>이
        있습니다. 근육이 빠지면 기초대사량이 떨어져 요요 현상의 원인이
        됩니다.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        충분한 단백질 섭취는 근육 분해를 최소화합니다. 연구에 따르면
        다이어트 중{" "}
        <strong className="text-foreground">체중 1kg당 1.6g 이상</strong>의
        단백질을 섭취한 그룹은 저단백 그룹 대비 근육 손실이 현저히
        적었습니다. 내{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline">
          기초대사량
        </Link>
        을 계산해보면 근육 보존이 얼마나 중요한지 실감할 수 있습니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        3. 식이성 발열효과 (TEF)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          식이성 발열효과(TEF, Thermic Effect of Food)
        </strong>
        란 음식을 소화·흡수하는 데 사용되는 에너지를 말합니다. 단백질의
        TEF는 <strong className="text-foreground">20~30%</strong>로,
        탄수화물(5~10%)이나 지방(0~3%)보다 훨씬 높습니다.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        즉, 단백질 100kcal를 먹으면 소화에만 20~30kcal를 소비합니다. 같은
        양을 먹어도{" "}
        <strong className="text-foreground">
          실질적으로 흡수되는 칼로리가 적은
        </strong>{" "}
        셈이죠.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">영양소</th>
              <th className="px-4 py-3 text-left font-semibold">
                TEF (발열효과)
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                100kcal 섭취 시 실제 흡수
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">단백질</td>
              <td className="px-4 py-3">20~30%</td>
              <td className="px-4 py-3">70~80kcal</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">탄수화물</td>
              <td className="px-4 py-3">5~10%</td>
              <td className="px-4 py-3">90~95kcal</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">지방</td>
              <td className="px-4 py-3">0~3%</td>
              <td className="px-4 py-3">97~100kcal</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 3: How Much Protein */}
      <h2 id="how-much" className="mt-10 mb-4 text-xl font-bold">
        하루 단백질 섭취량 계산법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        고단백 다이어트에서 권장하는 하루 단백질 섭취량은{" "}
        <strong className="text-foreground">체중 1kg당 1.6~2.2g</strong>
        입니다. 목적에 따라 세분화하면 다음과 같습니다:
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">목적</th>
              <th className="px-4 py-3 text-left font-semibold">
                체중 1kg당
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                60kg 기준
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                80kg 기준
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3">일반 건강 유지</td>
              <td className="px-4 py-3">0.8~1.0g</td>
              <td className="px-4 py-3">48~60g</td>
              <td className="px-4 py-3">64~80g</td>
            </tr>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">
                다이어트 (체지방 감량)
              </td>
              <td className="px-4 py-3 font-semibold">1.6~2.0g</td>
              <td className="px-4 py-3">96~120g</td>
              <td className="px-4 py-3">128~160g</td>
            </tr>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">
                다이어트 + 근력 운동
              </td>
              <td className="px-4 py-3 font-semibold">2.0~2.2g</td>
              <td className="px-4 py-3">120~132g</td>
              <td className="px-4 py-3">160~176g</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">근육 증가 (벌크업)</td>
              <td className="px-4 py-3">1.6~2.2g</td>
              <td className="px-4 py-3">96~132g</td>
              <td className="px-4 py-3">128~176g</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">비만인 경우</strong>에는
        실제 체중이 아닌{" "}
        <strong className="text-foreground">
          목표 체중 또는 제지방 체중(LBM)
        </strong>
        을 기준으로 계산하는 것이 더 정확합니다. 내 체지방률이 궁금하다면{" "}
        <Link
          href="/calc/body-fat/"
          className="text-primary hover:underline"
        >
          체지방률 계산기
        </Link>
        를 활용하세요.
      </p>

      <div className="my-6 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">계산 예시: 65kg 여성, 다이어트 목적</p>
        <p className="text-sm text-muted-foreground">
          65kg x 1.8g = <strong className="text-foreground">117g/일</strong>{" "}
          = 아침 30g + 점심 35g + 저녁 35g + 간식 17g
        </p>
      </div>

      {/* Section 4: Top 20 High Protein Foods */}
      <h2 id="top20" className="mt-10 mb-4 text-xl font-bold">
        고단백 식품 TOP 20 (칼로리 대비 단백질 효율)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        다이어트에서는 단순히 단백질이 많은 음식이 아니라,{" "}
        <strong className="text-foreground">
          칼로리 대비 단백질 효율이 높은 음식
        </strong>
        을 고르는 것이 중요합니다. 아래 표에서{" "}
        <strong className="text-foreground">단백질 효율</strong>은 100kcal당
        단백질 함량을 의미합니다.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-3 py-3 text-left font-semibold">순위</th>
              <th className="px-3 py-3 text-left font-semibold">식품</th>
              <th className="px-3 py-3 text-right font-semibold">
                단백질 (100g당)
              </th>
              <th className="px-3 py-3 text-right font-semibold">
                칼로리 (100g당)
              </th>
              <th className="px-3 py-3 text-right font-semibold">
                효율 (100kcal당)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { rank: 1, name: "닭가슴살 (삶은)", protein: 31, cal: 165, eff: "18.8g" },
              { rank: 2, name: "새우 (삶은)", protein: 24, cal: 99, eff: "24.2g" },
              { rank: 3, name: "계란 흰자", protein: 11, cal: 52, eff: "21.2g" },
              { rank: 4, name: "참치 (통조림, 물)", protein: 26, cal: 116, eff: "22.4g" },
              { rank: 5, name: "소고기 안심 (구운)", protein: 29, cal: 158, eff: "18.4g" },
              { rank: 6, name: "그릭요거트 (무지방)", protein: 10, cal: 59, eff: "16.9g" },
              { rank: 7, name: "오징어 (삶은)", protein: 18, cal: 92, eff: "19.6g" },
              { rank: 8, name: "돼지 안심 (구운)", protein: 27, cal: 143, eff: "18.9g" },
              { rank: 9, name: "연어 (구운)", protein: 25, cal: 208, eff: "12.0g" },
              { rank: 10, name: "두부 (부침용)", protein: 9, cal: 84, eff: "10.7g" },
              { rank: 11, name: "계란 (전체, 삶은)", protein: 13, cal: 155, eff: "8.4g" },
              { rank: 12, name: "고등어 (구운)", protein: 24, cal: 239, eff: "10.0g" },
              { rank: 13, name: "렌틸콩 (삶은)", protein: 9, cal: 116, eff: "7.8g" },
              { rank: 14, name: "닭안심", protein: 23, cal: 120, eff: "19.2g" },
              { rank: 15, name: "프로틴 파우더 (유청)", protein: 80, cal: 370, eff: "21.6g" },
              { rank: 16, name: "쥐포", protein: 44, cal: 270, eff: "16.3g" },
              { rank: 17, name: "소고기 사태 (삶은)", protein: 28, cal: 175, eff: "16.0g" },
              { rank: 18, name: "대구 (찐)", protein: 21, cal: 90, eff: "23.3g" },
              { rank: 19, name: "저지방 우유", protein: 3.4, cal: 42, eff: "8.1g" },
              { rank: 20, name: "병아리콩 (삶은)", protein: 9, cal: 164, eff: "5.5g" },
            ].map((item) => (
              <tr key={item.rank} className="border-t border-border">
                <td className="px-3 py-2 font-semibold text-primary">
                  {item.rank}
                </td>
                <td className="px-3 py-2">{item.name}</td>
                <td className="px-3 py-2 text-right">{item.protein}g</td>
                <td className="px-3 py-2 text-right">{item.cal}kcal</td>
                <td className="px-3 py-2 text-right font-semibold">
                  {item.eff}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        다이어트 식품을 최저가로 구매하고 싶다면{" "}
        <Link href="/products/" className="text-primary hover:underline">
          다이어트 식품 최저가 비교
        </Link>
        를 확인해보세요.{" "}
        <Link
          href="/products/chicken-breast/"
          className="text-primary hover:underline"
        >
          닭가슴살
        </Link>
        ,{" "}
        <Link
          href="/products/protein/"
          className="text-primary hover:underline"
        >
          프로틴
        </Link>{" "}
        등 고단백 식품을 한눈에 비교할 수 있습니다.
      </p>

      {/* Section 5: Korean Foods Protein Table */}
      <h2 id="korean-foods" className="mt-10 mb-4 text-xl font-bold">
        한국 음식 단백질 함량 비교표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        실제 식사에서 자주 먹는 한국 음식의 단백질 함량을 비교했습니다.{" "}
        <strong className="text-foreground">1인분 기준</strong>으로
        정리하여 실질적인 식단 구성에 참고하세요.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">음식명</th>
              <th className="px-4 py-3 text-right font-semibold">1인분</th>
              <th className="px-4 py-3 text-right font-semibold">칼로리</th>
              <th className="px-4 py-3 text-right font-semibold">
                단백질
              </th>
              <th className="px-4 py-3 text-center font-semibold">평가</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "닭가슴살 샐러드", portion: "1접시", cal: 250, protein: 35, grade: "A+" },
              { name: "순두부찌개", portion: "1인분", cal: 200, protein: 15, grade: "A" },
              { name: "제육볶음", portion: "1인분", cal: 450, protein: 28, grade: "B+" },
              { name: "고등어구이", portion: "1토막", cal: 200, protein: 20, grade: "A" },
              { name: "김치찌개 (돼지고기)", portion: "1인분", cal: 300, protein: 18, grade: "B+" },
              { name: "된장찌개", portion: "1인분", cal: 150, protein: 10, grade: "B" },
              { name: "삼겹살 (구운)", portion: "200g", cal: 580, protein: 24, grade: "C" },
              { name: "불고기", portion: "1인분", cal: 400, protein: 25, grade: "B+" },
              { name: "비빔밥", portion: "1인분", cal: 500, protein: 18, grade: "C+" },
              { name: "계란찜", portion: "1인분", cal: 120, protein: 12, grade: "A" },
              { name: "잡채", portion: "1인분", cal: 350, protein: 8, grade: "C" },
              { name: "떡볶이", portion: "1인분", cal: 450, protein: 8, grade: "D" },
              { name: "라면", portion: "1봉지", cal: 500, protein: 10, grade: "D" },
              { name: "치킨 (후라이드)", portion: "반마리", cal: 700, protein: 40, grade: "C" },
            ].map((item, i) => (
              <tr key={i} className="border-t border-border">
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2 text-right text-muted-foreground">
                  {item.portion}
                </td>
                <td className="px-4 py-2 text-right">{item.cal}kcal</td>
                <td className="px-4 py-2 text-right font-semibold">
                  {item.protein}g
                </td>
                <td className="px-4 py-2 text-center">
                  <span
                    className={`inline-block rounded px-1.5 py-0.5 text-xs font-bold ${
                      item.grade.startsWith("A")
                        ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"
                        : item.grade.startsWith("B")
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                          : item.grade.startsWith("C")
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400"
                            : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400"
                    }`}
                  >
                    {item.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-xs text-muted-foreground">
        * 평가 기준: 칼로리 대비 단백질 비율. A+ = 매우 우수, A = 우수, B =
        양호, C = 보통, D = 비효율
      </p>

      {/* Section 6: Weekly Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 고단백 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          60kg 여성, 하루 1500kcal, 단백질 120g 목표
        </strong>{" "}
        기준으로 구성한 일주일 식단표입니다.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        로 자신의 목표 칼로리를 먼저 확인하고, 비율에 맞게 조절하세요.
      </p>

      {[
        {
          day: "월요일",
          meals: [
            { time: "아침", menu: "그릭요거트 200g + 바나나 + 아몬드 10알", protein: 22, cal: 300 },
            { time: "점심", menu: "닭가슴살 샐러드 + 현미밥 반공기", protein: 38, cal: 450 },
            { time: "간식", menu: "삶은 계란 2개", protein: 14, cal: 150 },
            { time: "저녁", menu: "두부 된장찌개 + 고등어구이 반토막", protein: 28, cal: 350 },
          ],
        },
        {
          day: "화요일",
          meals: [
            { time: "아침", menu: "프로틴 쉐이크 + 통밀빵 1장", protein: 30, cal: 320 },
            { time: "점심", menu: "소고기 사태찜 + 현미밥 반공기 + 나물", protein: 35, cal: 480 },
            { time: "간식", menu: "프로틴바 1개", protein: 20, cal: 200 },
            { time: "저녁", menu: "새우볶음밥 (현미) + 계란찜", protein: 30, cal: 400 },
          ],
        },
        {
          day: "수요일",
          meals: [
            { time: "아침", menu: "계란 오믈렛 (계란 3개) + 토마토", protein: 20, cal: 280 },
            { time: "점심", menu: "참치 비빔밥 (현미) + 순두부찌개", protein: 35, cal: 500 },
            { time: "간식", menu: "그릭요거트 150g + 블루베리", protein: 15, cal: 120 },
            { time: "저녁", menu: "닭안심 스테이크 + 구운 채소", protein: 35, cal: 380 },
          ],
        },
        {
          day: "목요일",
          meals: [
            { time: "아침", menu: "두유 + 삶은 계란 2개 + 사과", protein: 20, cal: 300 },
            { time: "점심", menu: "연어포케 볼", protein: 32, cal: 480 },
            { time: "간식", menu: "닭가슴살 육포 50g", protein: 25, cal: 150 },
            { time: "저녁", menu: "순두부찌개 + 계란말이 + 나물", protein: 28, cal: 350 },
          ],
        },
        {
          day: "금요일",
          meals: [
            { time: "아침", menu: "프로틴 팬케이크 2장 + 시럽 소량", protein: 25, cal: 320 },
            { time: "점심", menu: "돼지 안심 볶음 + 현미밥 반공기", protein: 35, cal: 480 },
            { time: "간식", menu: "코티지 치즈 100g + 견과류", protein: 15, cal: 160 },
            { time: "저녁", menu: "대구매운탕 + 계란찜", protein: 30, cal: 320 },
          ],
        },
        {
          day: "토요일",
          meals: [
            { time: "아침", menu: "아보카도 토스트 + 삶은 계란 2개", protein: 18, cal: 380 },
            { time: "점심", menu: "제육볶음 + 현미밥 반공기 + 두부", protein: 38, cal: 500 },
            { time: "간식", menu: "프로틴 쉐이크", protein: 25, cal: 150 },
            { time: "저녁", menu: "닭가슴살 카레 (현미밥)", protein: 32, cal: 400 },
          ],
        },
        {
          day: "일요일",
          meals: [
            { time: "아침", menu: "그릭요거트 200g + 그래놀라 + 딸기", protein: 18, cal: 320 },
            { time: "점심", menu: "불고기 쌈밥 + 된장찌개", protein: 30, cal: 480 },
            { time: "간식", menu: "삶은 계란 2개 + 저지방 우유", protein: 18, cal: 220 },
            { time: "저녁", menu: "오징어볶음 + 두부구이 + 나물", protein: 28, cal: 350 },
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
                  <th className="px-4 py-2 text-right font-semibold">
                    단백질
                  </th>
                  <th className="px-4 py-2 text-right font-semibold">
                    칼로리
                  </th>
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

      <p className="mb-4 text-muted-foreground leading-relaxed">
        식단에 사용된{" "}
        <Link
          href="/products/chicken-breast/"
          className="text-primary hover:underline"
        >
          닭가슴살
        </Link>
        ,{" "}
        <Link
          href="/products/greek-yogurt/"
          className="text-primary hover:underline"
        >
          그릭요거트
        </Link>
        ,{" "}
        <Link
          href="/products/protein-bar/"
          className="text-primary hover:underline"
        >
          프로틴바
        </Link>{" "}
        등은 최저가 비교를 통해 합리적으로 구매할 수 있습니다.
      </p>

      {/* Section 7: Supplements */}
      <h2 id="supplements" className="mt-10 mb-4 text-xl font-bold">
        단백질 보충제 활용법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 100g 이상의 단백질을 음식만으로 채우기는 솔직히 힘들거든.{" "}
        <strong className="text-foreground">단백질 보충제</strong>를
        전략적으로 활용하면 칼로리는 낮추면서 단백질 목표를 달성할 수
        있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        프로틴 파우더 (유청 단백질)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">유청 단백질(Whey Protein)</strong>
        은 가장 대중적인 보충제입니다. 1스쿱(약 30g)에 단백질 24~27g을
        함유하며 칼로리는 약 120kcal 정도입니다. 물이나 저지방 우유에 타서
        마시면 간편하게 단백질을 보충할 수 있습니다.
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>
          <strong className="text-foreground">WPC (농축 유청)</strong>:
          가성비 좋음, 단백질 함량 70~80%
        </li>
        <li>
          <strong className="text-foreground">WPI (분리 유청)</strong>:
          유당 적음, 단백질 함량 85~95%, 유당불내증 있으면 추천
        </li>
        <li>
          <strong className="text-foreground">카제인</strong>: 느린 흡수,
          취침 전 섭취 적합
        </li>
      </ul>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <Link
          href="/products/protein/"
          className="text-primary hover:underline"
        >
          프로틴 최저가 비교
        </Link>
        에서 제품별 가격과 영양 성분을 한눈에 비교해보세요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">닭가슴살 제품</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">닭가슴살</strong>은 한국
        다이어터의 국민 식품입니다. 최근에는 스팀, 소시지, 큐브, 스테이크 등
        다양한 가공 형태가 나와 질리지 않게 먹을 수 있습니다.
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>
          <strong className="text-foreground">냉동 생닭가슴살</strong>:
          가성비 최고, 100g당 400~600원
        </li>
        <li>
          <strong className="text-foreground">스팀 닭가슴살</strong>:
          촉촉하고 편리, 100g당 800~1,200원
        </li>
        <li>
          <strong className="text-foreground">닭가슴살 소시지</strong>:
          간식 대용, 다만 나트륨 주의
        </li>
      </ul>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <Link
          href="/products/chicken-breast/"
          className="text-primary hover:underline"
        >
          닭가슴살 최저가 비교
        </Link>
        에서 브랜드별 가격을 비교하고 합리적으로 구매하세요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        보충제 섭취 타이밍
      </h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">타이밍</th>
              <th className="px-4 py-3 text-left font-semibold">추천 제품</th>
              <th className="px-4 py-3 text-left font-semibold">이유</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3">기상 직후</td>
              <td className="px-4 py-3">유청 프로틴</td>
              <td className="px-4 py-3 text-muted-foreground">
                밤새 공복 후 빠른 아미노산 공급
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">운동 후 30분 이내</td>
              <td className="px-4 py-3">유청 프로틴 (WPI)</td>
              <td className="px-4 py-3 text-muted-foreground">
                근합성 골든타임, 빠른 흡수 필요
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">간식 시간</td>
              <td className="px-4 py-3">프로틴바 / 닭가슴살</td>
              <td className="px-4 py-3 text-muted-foreground">
                허기 방지, 단백질 목표 달성
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">취침 전</td>
              <td className="px-4 py-3">카제인 프로틴</td>
              <td className="px-4 py-3 text-muted-foreground">
                수면 중 느린 흡수로 근분해 방지
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 8: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항 및 부작용
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        고단백 식단은 대부분의 건강한 성인에게 안전하지만, 몇 가지
        주의사항을 알아두세요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        1. 충분한 수분 섭취
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        단백질 대사 과정에서{" "}
        <strong className="text-foreground">요소(urea)</strong>가 생성되며,
        이를 배출하기 위해 수분이 더 필요합니다. 고단백 식단 시{" "}
        <strong className="text-foreground">하루 2~3리터</strong>의 물을
        마시는 것을 권장합니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        2. 식이섬유 섭취 병행
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        단백질 위주 식사에 치우치면 식이섬유 섭취가 부족해져{" "}
        <strong className="text-foreground">변비</strong>가 생길 수
        있습니다. 채소, 해조류, 통곡물을 반드시 함께 먹으세요. 하루 식이섬유
        목표는 <strong className="text-foreground">25g 이상</strong>입니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        3. 신장 질환자 주의
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        기존에{" "}
        <strong className="text-foreground">
          만성 신장 질환(CKD)이 있는 경우
        </strong>
        고단백 식단은 신장에 부담을 줄 수 있습니다. 반드시 담당 의사와
        상담하세요. 건강한 사람의 경우 고단백 식단이 신장 기능을 악화시킨다는
        근거는 현재까지 없습니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        4. 단백질 과잉 섭취
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체중 1kg당 3g 이상의 극단적인 과잉 섭취는 불필요합니다. 추가적인
        근합성 효과 없이 소화 부담만 늘어나며, 초과 칼로리는 결국 체지방으로
        저장됩니다.{" "}
        <strong className="text-foreground">1.6~2.2g 범위</strong>를
        지키세요.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        5. 다양한 단백질원 활용
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        닭가슴살만 반복 섭취하면 영양 불균형과 식단 피로감이 옵니다. 생선,
        해산물, 두부, 콩류, 유제품 등{" "}
        <strong className="text-foreground">다양한 단백질원</strong>을
        번갈아 활용하세요. 각 식품마다 함유된 미량 영양소가 다르므로 전체적인
        영양 균형에 도움이 됩니다.
      </p>

      {/* CTA Box */}
      <div className="my-10 rounded-2xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          내 목표 단백질 섭취량이 궁금하다면?
        </p>
        <p className="mb-4 font-bold">
          먼저 기초대사량과 목표 칼로리를 계산해보세요
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
