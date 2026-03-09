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
  title: "DASH 다이어트 완벽 가이드 — 고혈압 식단, 저염 식단표, 나트륨 줄이는 법",
  description:
    "DASH 다이어트(고혈압 식단)의 원리, 나트륨 제한 원칙, 한국식 저염 조리법, 일주일 DASH 식단표, 외식 시 나트륨 줄이는 법까지 총정리. 혈압 관리를 위한 식단 가이드.",
  path: "/diet/dash/",
  keywords: [
    "DASH 다이어트",
    "고혈압 식단",
    "저염 식단",
    "혈압 낮추는 식단",
    "나트륨 줄이는 법",
    "고혈압 식단표",
    "저염 요리",
    "DASH diet",
    "고혈압에 좋은 음식",
    "저염식",
    "나트륨 제한",
    "혈압 관리 식단",
  ],
});

const TOC = [
  { id: "disclaimer", title: "의료 면책 안내" },
  { id: "what-is-dash", title: "DASH 다이어트란?" },
  { id: "sodium", title: "나트륨 제한 원칙" },
  { id: "food-groups", title: "DASH 식단 구성" },
  { id: "korean-low-sodium", title: "한국식 저염 조리법" },
  { id: "meal-plan", title: "일주일 DASH 식단표" },
  { id: "eating-out", title: "외식 시 나트륨 줄이는 법" },
  { id: "tips", title: "실전 팁" },
  { id: "cautions", title: "주의사항" },
];

const FAQ_ITEMS = [
  {
    question: "DASH 다이어트를 하면 혈압이 얼마나 내려가나요?",
    answer:
      "미국 국립보건원(NIH) 연구에 따르면 DASH 다이어트를 2주간 실천하면 수축기 혈압이 평균 8~14mmHg 감소하는 것으로 보고되었습니다. 나트륨을 1,500mg 이하로 제한하면 추가로 혈압이 낮아질 수 있습니다. 다만 개인차가 크므로 반드시 정기적으로 혈압을 측정하고 담당 의사와 상의하세요.",
  },
  {
    question: "고혈압 약을 먹고 있는데 DASH 식단을 해도 되나요?",
    answer:
      "네, DASH 다이어트는 약물 치료와 병행할 수 있습니다. 다만 식단 변화로 혈압이 많이 내려갈 수 있으므로, 약 용량 조절이 필요할 수 있습니다. 식단을 크게 바꾸기 전에 담당 의사에게 알리고, 정기적으로 혈압을 모니터링하세요. 절대 임의로 약을 줄이거나 중단하지 마세요.",
  },
  {
    question: "한국 음식은 짠데, DASH 식단이 가능한가요?",
    answer:
      "가능합니다! 핵심은 조리법을 바꾸는 것입니다. 국·찌개 국물을 적게 먹고, 김치는 하루 2~3쪽으로 제한하며, 간장·된장은 저염 제품을 사용하세요. 구이, 찜, 샐러드 위주로 먹고, 가공식품(라면, 햄, 어묵)을 줄이면 한식으로도 충분히 DASH 식단을 실천할 수 있습니다.",
  },
  {
    question: "나트륨 1,500mg이면 소금으로 얼마인가요?",
    answer:
      "나트륨 1,500mg은 소금 약 3.75g에 해당합니다 (소금 = 나트륨 x 2.5). 이는 티스푼으로 약 3/4 정도입니다. 하지만 음식에 직접 넣는 소금보다 가공식품, 양념, 소스에 숨어 있는 나트륨이 훨씬 많으므로, 영양성분표를 확인하는 습관이 중요합니다.",
  },
  {
    question: "DASH 다이어트로 체중 감량도 가능한가요?",
    answer:
      "DASH 다이어트 자체는 혈압 관리가 주목적이지만, 과일, 채소, 통곡물 중심의 식단이기 때문에 칼로리 조절을 병행하면 체중 감량에도 효과적입니다. 칼로리 계산기로 적정 섭취량을 확인하고, DASH 식단 원칙을 유지하면서 칼로리를 조절하면 혈압 관리와 체중 감량을 동시에 할 수 있습니다.",
  },
  {
    question: "칼륨이 혈압을 낮추는 데 왜 중요한가요?",
    answer:
      "칼륨은 나트륨의 반대 역할을 합니다. 나트륨이 혈관에 수분을 끌어모아 혈압을 올리는 반면, 칼륨은 나트륨 배출을 도와 혈압을 낮추는 효과가 있습니다. DASH 다이어트에서 바나나, 감자, 시금치, 아보카도 등 칼륨이 풍부한 식품을 강조하는 이유입니다. 다만 신장 질환이 있는 분은 칼륨 섭취량을 의사와 반드시 상의하세요.",
  },
];

const RELATED_CALC = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
];

const RELATED_DIET = [
  { title: "당뇨 식단 가이드", href: "/diet/diabetes/", emoji: "🩸" },
  { title: "장건강 식단 가이드", href: "/diet/gut-health/", emoji: "🦠" },
  { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋" },
];

const RELATED_PRODUCTS = [
  {
    title: "다이어트 도시락 비교",
    href: "/products/?category=meal-box",
    emoji: "🍱",
  },
  {
    title: "다이어트 간식 비교",
    href: "/products/?category=snack",
    emoji: "🍪",
  },
  {
    title: "프로틴 쉐이크 비교",
    href: "/products/?category=protein",
    emoji: "🥤",
  },
];

export default function DashDietPage() {
  const jsonLd = [
    createArticleSchema({
      title: "DASH 다이어트 완벽 가이드 — 고혈압 식단",
      description:
        "DASH 다이어트(고혈압 식단)의 원리, 나트륨 제한 원칙, 한국식 저염 조리법, 일주일 식단표를 총정리한 가이드",
      url: "https://caloring.kr/diet/dash/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단 가이드", href: "/diet/" },
      { label: "고혈압 식단 (DASH 다이어트)" },
    ]),
  ];

  return (
    <WikiLayout
      title="고혈압 식단 (DASH 다이어트) 가이드"
      description="혈압을 낮추는 데 과학적으로 검증된 DASH 다이어트. 나트륨 줄이는 법부터 한국식 저염 식단표까지 정리했어."
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "다이어트 식단 가이드", href: "/diet/" },
        { label: "고혈압 식단 (DASH 다이어트)" },
      ]}
      toc={TOC}
      faqItems={FAQ_ITEMS}
      relatedCalc={RELATED_CALC}
      relatedDiet={RELATED_DIET}
      relatedProducts={RELATED_PRODUCTS}
      jsonLd={jsonLd}
      updatedAt="2026-03-10"
    >
      {/* Key Summary Box */}
      <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <p className="mb-3 text-sm font-bold text-primary">핵심 요약</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              DASH 다이어트는{" "}
              <strong className="text-foreground">
                미국 국립보건원(NIH)이 개발한 고혈압 관리 식단
              </strong>
              으로, &quot;Dietary Approaches to Stop Hypertension&quot;의 약자야
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              핵심은{" "}
              <strong className="text-foreground">
                나트륨을 줄이고(하루 2,300mg 이하 → 1,500mg 목표),
                칼륨·칼슘·마그네슘이 풍부한 식품
              </strong>
              을 많이 먹는 것
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              연구에 따르면 2주 만에{" "}
              <strong className="text-foreground">
                수축기 혈압 8~14mmHg 감소 효과
              </strong>
              가 보고됨 — 약물과 병행하면 더 큰 효과
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              이 가이드는 일반적인 정보 제공 목적이며,{" "}
              <strong className="text-foreground">
                고혈압 약을 복용 중이라면 반드시 담당 의사와 상담 후 식단을 조절
              </strong>
              해야 해
            </span>
          </li>
        </ul>
      </div>

      {/* Medical Disclaimer */}
      <div
        id="disclaimer"
        className="my-6 rounded-xl border-2 border-red-300 bg-red-50/70 p-5 dark:border-red-900 dark:bg-red-950/40"
      >
        <p className="mb-2 text-base font-bold text-red-700 dark:text-red-400">
          의료 면책 안내
        </p>
        <p className="text-sm text-red-800/80 leading-relaxed dark:text-red-300/80">
          이 글은 일반적인 건강 정보 제공을 목적으로 작성되었으며,{" "}
          <strong>의학적 진단이나 치료를 대체하지 않습니다.</strong> 고혈압은
          개인마다 원인과 상태가 다르므로, 식단 변경 전 반드시 담당 의사와
          상담하세요. 특히 혈압약, 이뇨제 등을 복용 중인 분은 식단 변화가
          약물 효과에 영향을 줄 수 있으므로 반드시 의료진의 지도 하에
          진행해야 합니다. 신장 질환이 있는 분은 칼륨 섭취량을 의사와
          상의하세요.
        </p>
      </div>

      {/* Section: What is DASH */}
      <h2 id="what-is-dash" className="mt-10 mb-4 text-xl font-bold">
        DASH 다이어트란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        DASH는{" "}
        <strong className="text-foreground">
          Dietary Approaches to Stop Hypertension
        </strong>
        의 약자로, 직역하면 &quot;고혈압을 멈추기 위한 식이 접근법&quot;이야.
        미국 국립보건원(NIH)이 후원한 대규모 임상 연구를 통해 개발된 식단으로,
        U.S. News &amp; World Report에서{" "}
        <strong className="text-foreground">
          여러 해 연속 &quot;최고의 건강 식단&quot; 1위
        </strong>
        로 선정될 만큼 과학적 근거가 탄탄해.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        DASH 다이어트의 기본 원리는 간단해:
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">1.</span>
          <span>
            <strong className="text-foreground">나트륨(소금) 섭취를 줄이고</strong>
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">2.</span>
          <span>
            <strong className="text-foreground">
              칼륨, 칼슘, 마그네슘이 풍부한 식품을 많이 먹는 것
            </strong>
          </span>
        </li>
      </ul>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        이 세 가지 미네랄은 혈관을 이완시키고 나트륨 배출을 도와 혈압을
        낮추는 역할을 해. 과일, 채소, 통곡물, 저지방 유제품에 풍부하게
        들어있지.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        연구 결과에 따르면 DASH 식단을 따르면{" "}
        <strong className="text-foreground">
          2주 만에 수축기 혈압이 평균 8~14mmHg 감소
        </strong>
        하는 것으로 보고되었어. 이는 혈압약 1종을 복용하는 것과 비슷한
        효과야. 물론 약물 대체가 아니라{" "}
        <strong className="text-foreground">
          약물 치료와 병행할 때 가장 효과적
        </strong>
        이야.
      </p>

      {/* Section: Sodium */}
      <h2 id="sodium" className="mt-10 mb-4 text-xl font-bold">
        나트륨 제한 원칙
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한국인의 평균 나트륨 섭취량은 하루 약{" "}
        <strong className="text-foreground">3,500~4,000mg</strong>으로,
        WHO 권장량(2,000mg)의 거의 2배야. 김치, 찌개, 젓갈, 라면 등
        짠 음식이 많은 한국 식문화 때문이지.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                단계
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                나트륨 목표
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                소금 환산
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                설명
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                1단계 (시작)
              </td>
              <td className="border border-border px-4 py-2">2,300mg/일 이하</td>
              <td className="border border-border px-4 py-2">약 6g (티스푼 1)</td>
              <td className="border border-border px-4 py-2">
                미국심장협회 일반 권장량. 먼저 이 수준에 적응
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                2단계 (목표)
              </td>
              <td className="border border-border px-4 py-2">1,500mg/일 이하</td>
              <td className="border border-border px-4 py-2">약 3.75g (티스푼 3/4)</td>
              <td className="border border-border px-4 py-2">
                혈압 감소 효과가 가장 큰 수준. 고혈압 환자 권장
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                한국인 평균
              </td>
              <td className="border border-border px-4 py-2">3,500~4,000mg/일</td>
              <td className="border border-border px-4 py-2">약 9~10g</td>
              <td className="border border-border px-4 py-2">
                권장량의 약 2배. 줄여야 할 양이 많음
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        나트륨이 많이 숨어있는 한국 음식
      </h3>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                음식
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                1인분 기준
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                나트륨(mg)
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                하루 목표 대비
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                라면
              </td>
              <td className="border border-border px-4 py-2">1봉지(국물 포함)</td>
              <td className="border border-border px-4 py-2 text-center text-red-600 font-medium">
                1,700~1,900
              </td>
              <td className="border border-border px-4 py-2">하루 목표의 113%</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                김치찌개
              </td>
              <td className="border border-border px-4 py-2">1그릇</td>
              <td className="border border-border px-4 py-2 text-center text-red-600 font-medium">
                1,200~1,500
              </td>
              <td className="border border-border px-4 py-2">하루 목표의 80~100%</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                된장찌개
              </td>
              <td className="border border-border px-4 py-2">1그릇</td>
              <td className="border border-border px-4 py-2 text-center text-amber-600 font-medium">
                900~1,200
              </td>
              <td className="border border-border px-4 py-2">하루 목표의 60~80%</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                김치
              </td>
              <td className="border border-border px-4 py-2">5쪽(약 50g)</td>
              <td className="border border-border px-4 py-2 text-center text-amber-600 font-medium">
                350~450
              </td>
              <td className="border border-border px-4 py-2">하루 목표의 23~30%</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                짜장면
              </td>
              <td className="border border-border px-4 py-2">1그릇</td>
              <td className="border border-border px-4 py-2 text-center text-red-600 font-medium">
                1,400~1,700
              </td>
              <td className="border border-border px-4 py-2">하루 목표의 93~113%</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                떡국
              </td>
              <td className="border border-border px-4 py-2">1그릇</td>
              <td className="border border-border px-4 py-2 text-center text-amber-600 font-medium">
                800~1,000
              </td>
              <td className="border border-border px-4 py-2">하루 목표의 53~67%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">충격적인 사실:</strong> 라면
          1봉지만 먹어도 하루 나트륨 목표(1,500mg)를 초과해. 국물을 남기면
          나트륨 섭취를 약 30~40% 줄일 수 있지만, 가능하면 라면 자체를
          피하는 것이 좋아.
        </p>
      </div>

      {/* Section: Food Groups */}
      <h2 id="food-groups" className="mt-10 mb-4 text-xl font-bold">
        DASH 식단 구성
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        DASH 다이어트는 특정 음식을 &quot;금지&quot;하기보다,{" "}
        <strong className="text-foreground">
          혈압을 낮추는 식품군의 비율을 높이는
        </strong>{" "}
        접근이야. 하루 약 2,000kcal 기준 권장 섭취량을 정리하면 이래:
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품군
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                일일 권장
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                1회 분량 예시
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                혈압 관련 영양소
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                통곡물
              </td>
              <td className="border border-border px-4 py-2 text-center">6~8회</td>
              <td className="border border-border px-4 py-2">
                잡곡밥 반 공기, 통밀빵 1장
              </td>
              <td className="border border-border px-4 py-2">식이섬유, 마그네슘</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                채소
              </td>
              <td className="border border-border px-4 py-2 text-center">4~5회</td>
              <td className="border border-border px-4 py-2">
                생채소 1컵, 익힌 채소 반 컵
              </td>
              <td className="border border-border px-4 py-2">칼륨, 마그네슘, 식이섬유</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과일
              </td>
              <td className="border border-border px-4 py-2 text-center">4~5회</td>
              <td className="border border-border px-4 py-2">
                중간 크기 과일 1개, 과일 반 컵
              </td>
              <td className="border border-border px-4 py-2">칼륨, 비타민 C</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                저지방 유제품
              </td>
              <td className="border border-border px-4 py-2 text-center">2~3회</td>
              <td className="border border-border px-4 py-2">
                저지방 우유 1컵, 요거트 1개
              </td>
              <td className="border border-border px-4 py-2">칼슘, 단백질</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                살코기·생선
              </td>
              <td className="border border-border px-4 py-2 text-center">6회 이하</td>
              <td className="border border-border px-4 py-2">
                살코기 30g, 생선 30g
              </td>
              <td className="border border-border px-4 py-2">단백질, 오메가-3</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                견과류·콩류
              </td>
              <td className="border border-border px-4 py-2 text-center">주 4~5회</td>
              <td className="border border-border px-4 py-2">
                견과류 30g, 두부 반 모
              </td>
              <td className="border border-border px-4 py-2">마그네슘, 칼륨, 식이섬유</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                유지류
              </td>
              <td className="border border-border px-4 py-2 text-center">2~3회</td>
              <td className="border border-border px-4 py-2">
                올리브유 1작은술, 들기름 1작은술
              </td>
              <td className="border border-border px-4 py-2">불포화지방산</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-red-600">
                당분 (제한)
              </td>
              <td className="border border-border px-4 py-2 text-center">주 5회 이하</td>
              <td className="border border-border px-4 py-2">
                설탕 1큰술, 잼 1큰술
              </td>
              <td className="border border-border px-4 py-2">최소화 필요</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">칼로리 참고:</strong> 위 기준은
          2,000kcal 기준이야. 체중 감량이 필요하다면{" "}
          <Link
            href="/calc/calorie/"
            className="text-primary hover:underline font-medium"
          >
            칼로리 계산기
          </Link>
          로 본인의 적정 칼로리를 확인하고, 그에 맞게 식품군 섭취 횟수를
          비례적으로 줄이면 돼.
        </p>
      </div>

      {/* Section: Korean Low Sodium Cooking */}
      <h2 id="korean-low-sodium" className="mt-10 mb-4 text-xl font-bold">
        한국식 저염 조리법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한식을 포기할 필요 없어. 조리법만 조금 바꾸면{" "}
        <strong className="text-foreground">
          익숙한 한국 음식을 즐기면서도 나트륨을 크게 줄일 수 있어
        </strong>
        . 전문가들이 권장하는 한국식 저염 조리 팁을 정리했어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">국·찌개 나트륨 줄이기</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">국물 양을 절반으로:</strong>{" "}
            국·찌개를 끓일 때 물을 절반만 넣고, 건더기 위주로 먹기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">다시마·멸치 육수 활용:</strong>{" "}
            천연 감칠맛으로 소금 없이도 깊은 맛을 낼 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">저염 된장·간장 사용:</strong>{" "}
            일반 제품 대비 나트륨 30~40% 감소. 마트에서 &quot;저염&quot;
            표시 확인
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">맑은 국 위주로:</strong>{" "}
            된장찌개 대신 미역국, 콩나물국 등 맑은 국이 나트륨이 적어
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">양념 대체 전략</h3>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                기존 양념
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                나트륨(mg)
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                대체 방법
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                간장 1큰술
              </td>
              <td className="border border-border px-4 py-2 text-center">900</td>
              <td className="border border-border px-4 py-2">
                저염 간장 반 큰술 + 레몬즙
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                된장 1큰술
              </td>
              <td className="border border-border px-4 py-2 text-center">700</td>
              <td className="border border-border px-4 py-2">
                저염 된장 반 큰술 + 마늘, 생강
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                고추장 1큰술
              </td>
              <td className="border border-border px-4 py-2 text-center">600</td>
              <td className="border border-border px-4 py-2">
                고춧가루 + 식초 + 매실액 소량
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                소금 간
              </td>
              <td className="border border-border px-4 py-2 text-center">다량</td>
              <td className="border border-border px-4 py-2">
                후추, 마늘, 생강, 참기름, 들기름, 식초
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">추천 저염 조리법</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">구이:</strong> 생선, 고기를
            소금 대신 후추·허브로 양념 후 에어프라이어나 그릴에 굽기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">찜:</strong> 채소와 생선을
            찜기에 쪄서 양념장을 곁들이기 (양념장 양 조절 가능)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">볶음:</strong> 들기름이나
            참기름으로 볶고, 소금 대신 마늘·생강·고춧가루로 맛내기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">샐러드·쌈:</strong> 쌈채소에
            고기·생선을 싸 먹으면 양념 없이도 맛있게 먹을 수 있어
          </span>
        </li>
      </ul>

      {/* Section: Weekly Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 DASH 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한국식으로 구성한 DASH 식단표야. 하루{" "}
        <strong className="text-foreground">
          나트륨 1,500~2,000mg 이내, 약 1,800~2,000kcal
        </strong>{" "}
        기준이야. 저염 조리법을 적용했고, 칼륨·칼슘이 풍부한 식품을
        포함했어.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-3 py-2 text-left font-semibold">
                요일
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                아침
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                점심
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                저녁
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                간식
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                월
              </td>
              <td className="border border-border px-3 py-2">
                오트밀 + 바나나 + 저지방 우유
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 닭가슴살 구이 + 시금치나물(저염) + 콩나물국(맑게)
              </td>
              <td className="border border-border px-3 py-2">
                연어구이(후추) + 브로콜리찜 + 현미밥 반 공기
              </td>
              <td className="border border-border px-3 py-2">
                사과 1개 + 아몬드 10알
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                화
              </td>
              <td className="border border-border px-3 py-2">
                통밀토스트 + 삶은 달걀 + 방울토마토
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 두부찜(저염) + 미역국(맑게) + 오이무침
              </td>
              <td className="border border-border px-3 py-2">
                삼치구이(허브) + 상추쌈 + 잡곡밥 반 공기
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트 + 블루베리
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                수
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트 + 견과류 + 딸기
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 소고기 미역국(저염) + 계란찜 + 깻잎
              </td>
              <td className="border border-border px-3 py-2">
                닭안심 볶음(마늘·생강) + 양배추샐러드 + 현미밥 반 공기
              </td>
              <td className="border border-border px-3 py-2">
                바나나 1개 + 저지방 우유
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                목
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 반 공기 + 북어국(맑게) + 계란말이
              </td>
              <td className="border border-border px-3 py-2">
                콩나물밥(잡곡) + 양념장 소량 + 오이소박이(저염)
              </td>
              <td className="border border-border px-3 py-2">
                대구찜(저염) + 부추무침 + 현미밥 반 공기
              </td>
              <td className="border border-border px-3 py-2">
                키위 1개 + 호두 3알
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                금
              </td>
              <td className="border border-border px-3 py-2">
                오트밀 + 사과 + 시나몬 + 저지방 우유
              </td>
              <td className="border border-border px-3 py-2">
                현미 비빔밥(채소 듬뿍, 양념 소량) + 맑은 콩나물국
              </td>
              <td className="border border-border px-3 py-2">
                고등어구이(후추) + 깻잎쌈 + 잡곡밥 반 공기
              </td>
              <td className="border border-border px-3 py-2">
                당근·셀러리 스틱 + 후무스
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                토
              </td>
              <td className="border border-border px-3 py-2">
                통밀 팬케이크(저염) + 바나나 + 메이플시럽 소량
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 돼지안심 수육 + 쌈채소 + 쌈장 소량
              </td>
              <td className="border border-border px-3 py-2">
                새우볶음(마늘·올리브유) + 파프리카 + 현미밥 반 공기
              </td>
              <td className="border border-border px-3 py-2">
                배 반 개 + 아몬드 10알
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                일
              </td>
              <td className="border border-border px-3 py-2">
                삶은 달걀 + 아보카도 토스트(통밀) + 토마토
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 닭볶음탕(저염·저당) + 샐러드
              </td>
              <td className="border border-border px-3 py-2">
                두부구이 + 버섯볶음 + 잡곡밥 반 공기 + 배추국(맑게)
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트 + 견과류 한 줌
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">식단표 활용 팁:</strong> 모든
          국·찌개는 &quot;맑게&quot; 또는 &quot;저염&quot;으로 표시했어. 핵심은{" "}
          <strong className="text-foreground">
            국물은 적게, 건더기는 충분히, 김치는 하루 2~3쪽으로 제한
          </strong>
          하는 것이야.{" "}
          <Link
            href="/calc/bmr/"
            className="text-primary hover:underline font-medium"
          >
            기초대사량 계산기
          </Link>
          로 본인의 대사량을 확인하고 양을 조절하세요.
        </p>
      </div>

      {/* Section: Eating Out */}
      <h2 id="eating-out" className="mt-10 mb-4 text-xl font-bold">
        외식 시 나트륨 줄이는 법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        외식은 나트륨의 최대 적이야. 대부분의 외식 메뉴는 집밥보다 나트륨이
        2~3배 많아. 그래도 이 팁들을 활용하면 나트륨을 상당히 줄일 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">음식점 종류별 전략</h3>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                음식점
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                추천 메뉴
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                피할 메뉴
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                나트륨 줄이기 팁
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                한식
              </td>
              <td className="border border-border px-4 py-2">
                생선구이 정식, 비빔밥(양념 적게), 쌈밥
              </td>
              <td className="border border-border px-4 py-2">
                찌개, 탕, 젓갈류, 장아찌
              </td>
              <td className="border border-border px-4 py-2">
                밥 양 줄이기, 국물 남기기, 반찬 3개만 선택
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                일식
              </td>
              <td className="border border-border px-4 py-2">
                사시미, 구이 정식
              </td>
              <td className="border border-border px-4 py-2">
                라멘, 우동, 돈카츠 소스
              </td>
              <td className="border border-border px-4 py-2">
                간장 최소한으로 찍기, 절임 반찬 남기기
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                중식
              </td>
              <td className="border border-border px-4 py-2">
                깐풍기(소량), 채소볶음
              </td>
              <td className="border border-border px-4 py-2">
                짜장면, 짬뽕, 탕수육 소스
              </td>
              <td className="border border-border px-4 py-2">
                소스를 별도로 받아 찍어 먹기
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                양식
              </td>
              <td className="border border-border px-4 py-2">
                그릴 스테이크, 샐러드(드레싱 별도)
              </td>
              <td className="border border-border px-4 py-2">
                크림파스타, 피자, 수프
              </td>
              <td className="border border-border px-4 py-2">
                소스·드레싱 별도 요청, 빵 대신 샐러드
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">외식 공통 수칙</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">국물은 남기기:</strong> 이것만
            해도 나트륨 섭취를 30~40% 줄일 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">&quot;싱겁게 해주세요&quot; 요청:</strong>{" "}
            많은 음식점에서 소금·간장 양을 조절해줘
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">소스·드레싱 별도 요청:</strong>{" "}
            직접 양을 조절할 수 있어 나트륨을 크게 줄일 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">물을 충분히 마시기:</strong>{" "}
            나트륨 배출을 돕고, 짠 맛에 대한 갈망을 줄여줘
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">영양정보 확인:</strong>{" "}
            프랜차이즈 음식점은 홈페이지에서 영양성분을 확인할 수 있어.
            나트륨 함량을 미리 비교해보자
          </span>
        </li>
      </ul>

      {/* Section: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        실전 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        DASH 다이어트를 지속하기 위한 팁
      </h3>
      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">점진적으로 줄이기:</strong>{" "}
            갑자기 싱겁게 먹으면 맛이 없어서 포기하기 쉬워. 1~2주에 걸쳐
            서서히 소금을 줄여가면 미각이 적응해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">칼륨 섭취 늘리기:</strong>{" "}
            바나나, 감자, 시금치, 아보카도, 고구마 등 칼륨이 풍부한 식품은
            나트륨 배출을 도와 혈압을 낮추는 데 시너지 효과가 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">가공식품 줄이기:</strong>{" "}
            나트륨의 약 70%는 가공식품에서 온다고 해. 라면, 햄, 소시지,
            어묵, 통조림을 줄이는 것만으로도 큰 효과가 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">영양성분표 읽기:</strong>{" "}
            마트에서 제품을 살 때 뒷면 영양성분표에서 나트륨 함량을 확인하는
            습관을 들여. %일일영양성분기준치 15% 이하를 선택하면 좋아
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">향신료 활용:</strong>{" "}
            후추, 마늘, 생강, 고춧가루, 카레 가루, 허브(로즈마리, 바질 등)로
            소금 없이도 풍미를 낼 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">운동 병행:</strong>{" "}
            주 150분 이상의 중강도 유산소 운동(빠르게 걷기, 자전거)이
            혈압 관리에 추가적인 효과를 줘
          </span>
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">혈압 모니터링:</strong> 식단
          변화 후 2주, 4주, 8주 시점에서 혈압을 측정하여 효과를 확인해보세요.
          가정용 혈압계를 구비하면 매일 같은 시간에 측정하여 추이를 파악할 수
          있어. 기록한 데이터를 담당 의사에게 공유하면 더 나은 관리가
          가능해.
        </p>
      </div>

      {/* Section: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>

      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              혈압약을 임의로 줄이거나 중단하지 마세요:
            </strong>{" "}
            DASH 식단으로 혈압이 개선되더라도, 약 조절은 반드시 담당 의사의
            판단 하에 이루어져야 합니다. 임의 감량은 갑작스러운 혈압 상승을
            유발할 수 있습니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              신장 질환이 있다면 칼륨 섭취 주의:
            </strong>{" "}
            DASH 다이어트는 칼륨이 풍부한 식품을 강조하지만, 신장 기능이
            저하된 분은 칼륨 과다 섭취가 위험할 수 있습니다. 반드시 의사와
            상의하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              나트륨을 너무 급격히 줄이면 부작용 가능:
            </strong>{" "}
            두통, 어지러움, 피로감이 올 수 있어. 2~4주에 걸쳐 서서히
            줄이는 것이 안전합니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              이뇨제 복용자 특별 주의:
            </strong>{" "}
            이뇨제는 나트륨과 칼륨 배출에 영향을 미치므로, DASH 식단과의
            상호작용을 의사와 반드시 상의하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              정기적인 혈압 측정은 필수:
            </strong>{" "}
            식단만으로 충분하다고 판단하지 마세요. 정기적으로 혈압을
            측정하고, 수치가 목표 범위를 벗어나면 즉시 의사를 방문하세요
          </span>
        </li>
      </ul>

      {/* Final Medical Disclaimer */}
      <div className="my-6 rounded-xl border-2 border-red-300 bg-red-50/70 p-5 dark:border-red-900 dark:bg-red-950/40">
        <p className="mb-2 text-base font-bold text-red-700 dark:text-red-400">
          다시 한번 강조합니다
        </p>
        <p className="text-sm text-red-800/80 leading-relaxed dark:text-red-300/80">
          이 글의 모든 내용은 일반적인 정보 제공 목적이며, 개인의 건강
          상태에 따라 적합하지 않을 수 있습니다. 고혈압 관리는{" "}
          <strong>
            반드시 담당 심장내과·내과 전문의의 지도 하에 약물 치료와
            식단 관리를 병행
          </strong>
          해야 합니다. 식단 변경 전 반드시 의료진과 상담하세요.
        </p>
      </div>

      {/* Closing CTA */}
      <div className="my-8 rounded-xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          건강한 식단의 시작, 내 몸 상태부터 체크하세요
        </p>
        <p className="mb-4 font-bold">
          나에게 맞는 칼로리와 체중 목표를 확인해보세요
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/calc/calorie/"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            칼로리 계산기
          </Link>
          <Link
            href="/calc/bmi/"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 dark:bg-card dark:hover:bg-muted"
          >
            BMI 계산기
          </Link>
        </div>
      </div>
    </WikiLayout>
  );
}
