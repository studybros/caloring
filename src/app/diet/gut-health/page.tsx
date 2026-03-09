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
  title: "장건강 식단 가이드 — 장내 미생물, 프로바이오틱스 음식, 식이섬유 식단표",
  description:
    "장건강을 위한 식단 가이드. 장내 미생물과 건강의 관계, 프로바이오틱스 vs 프리바이오틱스, 장건강에 좋은 음식 TOP 15, 한국 발효 음식 활용법, 일주일 장건강 식단표까지 총정리.",
  path: "/diet/gut-health/",
  keywords: [
    "장건강 식단",
    "장내 미생물 식단",
    "프로바이오틱스 음식",
    "장 건강에 좋은 음식",
    "프리바이오틱스",
    "장내 세균",
    "유산균 음식",
    "발효식품",
    "식이섬유 음식",
    "장건강 식단표",
    "김치 유산균",
    "장내 미생물 다이어트",
  ],
});

const TOC = [
  { id: "gut-microbiome", title: "장내 미생물과 건강의 관계" },
  { id: "probiotics-prebiotics", title: "프로바이오틱스 vs 프리바이오틱스" },
  { id: "top-foods", title: "장건강에 좋은 식품 TOP 15" },
  { id: "bad-foods", title: "장건강에 나쁜 식품" },
  { id: "meal-plan", title: "일주일 장건강 식단표" },
  { id: "korean-fermented", title: "한국 발효 음식 활용법" },
  { id: "tips", title: "실전 팁" },
  { id: "cautions", title: "주의사항" },
];

const FAQ_ITEMS = [
  {
    question: "프로바이오틱스 보충제를 꼭 먹어야 하나요?",
    answer:
      "반드시 필요하지는 않습니다. 김치, 된장, 요거트 등 발효식품을 꾸준히 섭취하면 자연스럽게 유익균을 보충할 수 있습니다. 다만 항생제 복용 후, 소화기 질환이 있는 경우, 발효식품을 잘 먹지 않는 경우에는 보충제가 도움이 될 수 있습니다. 보충제를 고를 때는 최소 100억 CFU 이상, 다양한 균주가 포함된 제품을 선택하고, 구체적인 추천은 의사나 약사와 상담하세요.",
  },
  {
    question: "김치를 매일 먹으면 장에 좋은가요?",
    answer:
      "네, 김치는 락토바실러스 등 유익한 유산균이 풍부한 발효식품입니다. 다만 나트륨 함량이 높으므로 하루 2~3쪽(약 30~50g) 정도가 적당합니다. 특히 잘 익은 김치일수록 유산균이 많으며, 과도하게 익은 김치는 산도가 너무 높아 위를 자극할 수 있습니다. 고혈압이 있는 분은 나트륨 섭취량을 고려하세요.",
  },
  {
    question: "장건강이 다이어트에도 영향을 주나요?",
    answer:
      "연구에 따르면 장내 미생물의 구성이 체중 관리에 영향을 미칠 수 있습니다. 장내 미생물 다양성이 높을수록 대사 효율이 좋아지고, 식욕 호르몬 조절에도 관여합니다. 식이섬유가 풍부한 식단은 장내 유익균을 늘리면서 동시에 포만감을 높여 자연스러운 칼로리 감소에 도움이 됩니다.",
  },
  {
    question: "항생제를 먹은 후 장건강을 회복하려면 어떻게 해야 하나요?",
    answer:
      "항생제는 유해균뿐 아니라 유익균도 함께 제거하므로, 복용 후 장내 미생물 균형이 깨질 수 있습니다. 항생제 복용 종료 후 2~4주간 발효식품(요거트, 김치, 된장)을 적극적으로 섭취하고, 프리바이오틱스(식이섬유)가 풍부한 채소와 과일을 많이 먹으세요. 필요하면 의사와 상의하여 프로바이오틱스 보충제를 단기간 복용하는 것도 방법입니다.",
  },
  {
    question: "장건강에 요거트와 김치 중 뭐가 더 좋나요?",
    answer:
      "둘 다 우수한 프로바이오틱스 식품이며, 각각 다른 종류의 유익균을 포함하고 있어 함께 먹으면 더 좋습니다. 요거트에는 주로 락토바실러스, 스트렙토코쿠스 계열이, 김치에는 류코노스톡, 와이셀라 등 더 다양한 유산균이 들어있습니다. 중요한 것은 한 가지에 의존하기보다 다양한 발효식품을 번갈아 먹는 것입니다.",
  },
  {
    question: "식이섬유를 갑자기 많이 먹으면 배가 아픈데 왜 그런가요?",
    answer:
      "장내 미생물이 식이섬유를 분해할 때 가스(이산화탄소, 수소, 메탄)를 생성합니다. 평소 식이섬유를 적게 먹다가 갑자기 많이 먹으면 장내 미생물이 적응하지 못해 가스, 복부 팽만감, 설사 등이 생길 수 있습니다. 1~2주에 걸쳐 서서히 늘려가면 장내 미생물이 적응하면서 증상이 사라집니다. 물도 충분히 마셔주세요.",
  },
];

const RELATED_CALC = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
];

const RELATED_DIET = [
  { title: "고단백 다이어트 가이드", href: "/diet/high-protein/", emoji: "💪" },
  { title: "당뇨 식단 가이드", href: "/diet/diabetes/", emoji: "🩸" },
  { title: "고혈압 식단 (DASH 다이어트)", href: "/diet/dash/", emoji: "💙" },
];

const RELATED_PRODUCTS = [
  {
    title: "다이어트 도시락 비교",
    href: "/products/?category=meal-box",
    emoji: "🍱",
  },
  {
    title: "프로틴 쉐이크 비교",
    href: "/products/?category=protein",
    emoji: "🥤",
  },
  {
    title: "다이어트 간식 비교",
    href: "/products/?category=snack",
    emoji: "🍪",
  },
];

export default function GutHealthDietPage() {
  const jsonLd = [
    createArticleSchema({
      title: "장건강 식단 가이드",
      description:
        "장내 미생물과 건강의 관계, 프로바이오틱스와 프리바이오틱스, 장건강에 좋은 음식, 한국 발효 음식 활용법을 총정리한 가이드",
      url: "https://caloring.kr/diet/gut-health/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단 가이드", href: "/diet/" },
      { label: "장건강 식단 가이드" },
    ]),
  ];

  return (
    <WikiLayout
      title="장건강 식단 가이드"
      description="장내 미생물을 건강하게 가꾸는 식단의 모든 것. 발효식품, 식이섬유, 프로바이오틱스까지 정리했어."
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "다이어트 식단 가이드", href: "/diet/" },
        { label: "장건강 식단 가이드" },
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
              장 속에는 약{" "}
              <strong className="text-foreground">100조 개의 미생물</strong>이
              살고 있으며, 이들이 소화, 면역, 정신 건강, 체중 관리에 큰
              영향을 미쳐
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              장건강의 핵심은{" "}
              <strong className="text-foreground">
                프로바이오틱스(유익균 자체) + 프리바이오틱스(유익균의 먹이인
                식이섬유)
              </strong>
              를 함께 섭취하는 것
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              한국 식문화는 김치, 된장, 청국장 등{" "}
              <strong className="text-foreground">
                세계적으로 손꼽히는 발효식품 강국
              </strong>
              이라 장건강에 유리해
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              가공식품, 인공감미료, 과도한 항생제 사용은{" "}
              <strong className="text-foreground">
                장내 미생물 다양성을 줄이는 주요 원인
              </strong>
              이니 주의가 필요해
            </span>
          </li>
        </ul>
      </div>

      {/* Section: Gut Microbiome */}
      <h2 id="gut-microbiome" className="mt-10 mb-4 text-xl font-bold">
        장내 미생물과 건강의 관계
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        우리 장 속에는 약{" "}
        <strong className="text-foreground">100조 개의 미생물</strong>이 살고
        있어. 무게로 따지면 약 1.5~2kg이나 되지. 이 미생물 생태계를{" "}
        <strong className="text-foreground">
          &quot;장내 마이크로바이옴(Gut Microbiome)&quot;
        </strong>
        이라고 부르는데, 최근 연구에서 건강의 거의 모든 영역에 영향을
        미친다는 사실이 밝혀지고 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        장내 미생물이 영향을 미치는 영역
      </h3>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                영역
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                장내 미생물의 역할
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                불균형 시 문제
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                소화·영양 흡수
              </td>
              <td className="border border-border px-4 py-2">
                식이섬유 분해, 비타민 B·K 합성, 단쇄지방산 생성
              </td>
              <td className="border border-border px-4 py-2">
                소화 불량, 영양소 흡수 저하, 복부 팽만감
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                면역 체계
              </td>
              <td className="border border-border px-4 py-2">
                면역 세포의 약 70%가 장에 위치. 유익균이 면역 조절
              </td>
              <td className="border border-border px-4 py-2">
                감기 자주 걸림, 알레르기, 자가면역 질환 위험 증가
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                정신 건강
              </td>
              <td className="border border-border px-4 py-2">
                세로토닌의 약 90%가 장에서 생성 (&quot;장-뇌 축&quot;)
              </td>
              <td className="border border-border px-4 py-2">
                우울, 불안, 수면 장애와 관련 가능성
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                체중 관리
              </td>
              <td className="border border-border px-4 py-2">
                에너지 추출 효율, 식욕 호르몬 조절, 지방 저장 신호
              </td>
              <td className="border border-border px-4 py-2">
                비만 경향, 대사증후군 위험 증가
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                피부 건강
              </td>
              <td className="border border-border px-4 py-2">
                전신 염증 조절, 피부 장벽 기능 지원
              </td>
              <td className="border border-border px-4 py-2">
                여드름, 아토피, 건선 악화 가능
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        연구에 따르면 장내 미생물의{" "}
        <strong className="text-foreground">&quot;다양성&quot;</strong>이
        핵심이야. 다양한 종류의 유익균이 서로 균형을 이루고 있을 때 장이
        가장 건강한 상태라고 해. 한 가지 균만 많다고 좋은 게 아니라, 여러
        종류가 적절히 공존하는 &quot;생태계&quot;가 중요한 거지.
      </p>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">재미있는 사실:</strong>{" "}
          세로토닌(&quot;행복 호르몬&quot;)의 약 90%가 뇌가 아닌 장에서
          만들어져. 그래서 장을 &quot;제2의 뇌(Second Brain)&quot;라고
          부르기도 해. 장이 불편하면 기분이 안 좋아지는 것도 이 때문이야.
        </p>
      </div>

      {/* Section: Probiotics vs Prebiotics */}
      <h2 id="probiotics-prebiotics" className="mt-10 mb-4 text-xl font-bold">
        프로바이오틱스 vs 프리바이오틱스
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        장건강에 관심이 있다면 이 두 용어는 반드시 알아둬야 해. 이름은
        비슷하지만 역할이 완전히 달라.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                구분
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                프로바이오틱스 (Probiotics)
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                프리바이오틱스 (Prebiotics)
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                정체
              </td>
              <td className="border border-border px-4 py-2">
                살아있는 유익한 미생물 자체
              </td>
              <td className="border border-border px-4 py-2">
                유익균의 먹이가 되는 식이섬유·올리고당
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                비유
              </td>
              <td className="border border-border px-4 py-2">
                &quot;좋은 병사를 보충하는 것&quot;
              </td>
              <td className="border border-border px-4 py-2">
                &quot;좋은 병사에게 밥을 주는 것&quot;
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                대표 식품
              </td>
              <td className="border border-border px-4 py-2">
                김치, 된장, 청국장, 요거트, 낫토
              </td>
              <td className="border border-border px-4 py-2">
                양파, 마늘, 바나나, 귀리, 아스파라거스
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                효과
              </td>
              <td className="border border-border px-4 py-2">
                장내 유익균 수 증가, 유해균 억제
              </td>
              <td className="border border-border px-4 py-2">
                기존 유익균의 성장·활동 촉진
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                함께 먹으면?
              </td>
              <td className="border border-border px-4 py-2" colSpan={2}>
                <strong className="text-foreground">
                  &quot;신바이오틱스(Synbiotics)&quot;
                </strong>{" "}
                — 시너지 효과로 장건강 효과 극대화 (예: 요거트 + 바나나)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        핵심 포인트:{" "}
        <strong className="text-foreground">
          프로바이오틱스(유익균)와 프리바이오틱스(유익균의 먹이)를 함께
          섭취하는 것
        </strong>
        이 가장 효과적이야. 아무리 좋은 유산균을 먹어도 장에서 살아남으려면
        먹이인 식이섬유가 필요하거든. 발효식품 + 채소·과일을 함께 먹는
        한식은 이런 면에서 이상적인 조합이야.
      </p>

      {/* Section: Top Foods */}
      <h2 id="top-foods" className="mt-10 mb-4 text-xl font-bold">
        장건강에 좋은 식품 TOP 15
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        연구 결과와 영양학적 근거를 바탕으로 선별한 장건강 최고의 식품
        15가지야. 한국에서 쉽게 구할 수 있는 것 위주로 정리했어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        프로바이오틱스 식품 (유익균 보충)
      </h3>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-center font-semibold">
                순위
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                핵심 유익균
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                추천 섭취법
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                1
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                김치
              </td>
              <td className="border border-border px-4 py-2">
                락토바실러스, 류코노스톡
              </td>
              <td className="border border-border px-4 py-2">
                하루 30~50g, 잘 익은 것으로
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                2
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                된장
              </td>
              <td className="border border-border px-4 py-2">
                바실러스, 엔테로코쿠스
              </td>
              <td className="border border-border px-4 py-2">
                된장국·쌈장으로 매일 소량
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                3
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                청국장
              </td>
              <td className="border border-border px-4 py-2">
                바실러스 서브틸리스
              </td>
              <td className="border border-border px-4 py-2">
                청국장찌개, 주 2~3회 추천
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                4
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                그릭요거트 (무가당)
              </td>
              <td className="border border-border px-4 py-2">
                락토바실러스, 비피더스
              </td>
              <td className="border border-border px-4 py-2">
                하루 1컵, 과일 토핑
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                5
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                낫토
              </td>
              <td className="border border-border px-4 py-2">
                바실러스 서브틸리스
              </td>
              <td className="border border-border px-4 py-2">
                밥에 곁들여 주 2~3회
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                6
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                식혜 (전통 방식)
              </td>
              <td className="border border-border px-4 py-2">
                자연 발효 유산균
              </td>
              <td className="border border-border px-4 py-2">
                무가당 전통 식혜 소량
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                7
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                콤부차
              </td>
              <td className="border border-border px-4 py-2">
                아세토박터, 효모균
              </td>
              <td className="border border-border px-4 py-2">
                하루 1잔, 설탕 함량 확인
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        프리바이오틱스 식품 (유익균의 먹이)
      </h3>
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-center font-semibold">
                순위
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                핵심 성분
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                추천 섭취법
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                8
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                양파·마늘
              </td>
              <td className="border border-border px-4 py-2">
                이눌린, 프럭토올리고당
              </td>
              <td className="border border-border px-4 py-2">
                매일 요리에 활용 (익혀도 OK)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                9
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                바나나
              </td>
              <td className="border border-border px-4 py-2">
                저항성 전분, 프럭토올리고당
              </td>
              <td className="border border-border px-4 py-2">
                약간 덜 익은 것이 저항성 전분 더 많음
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                10
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                귀리 (오트밀)
              </td>
              <td className="border border-border px-4 py-2">
                베타글루칸 (수용성 식이섬유)
              </td>
              <td className="border border-border px-4 py-2">
                아침 오트밀, 하루 30~50g
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                11
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                고구마
              </td>
              <td className="border border-border px-4 py-2">
                저항성 전분, 식이섬유
              </td>
              <td className="border border-border px-4 py-2">
                삶거나 쪄서 (식혀 먹으면 저항성 전분 증가)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                12
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                브로콜리
              </td>
              <td className="border border-border px-4 py-2">
                설포라판, 불용성 식이섬유
              </td>
              <td className="border border-border px-4 py-2">
                살짝 데쳐서 매일, 과하게 익히지 않기
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                13
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                사과
              </td>
              <td className="border border-border px-4 py-2">
                펙틴 (수용성 식이섬유)
              </td>
              <td className="border border-border px-4 py-2">
                껍질째 먹기 (펙틴은 껍질에 많음)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                14
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                콩류 (검정콩, 렌틸콩)
              </td>
              <td className="border border-border px-4 py-2">
                저항성 전분, 식이섬유, 올리고당
              </td>
              <td className="border border-border px-4 py-2">
                밥에 섞거나, 콩조림·두부로
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                15
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                해조류 (미역, 다시마)
              </td>
              <td className="border border-border px-4 py-2">
                알긴산, 수용성 식이섬유
              </td>
              <td className="border border-border px-4 py-2">
                미역국, 미역줄기 무침, 다시마 육수
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Bad Foods */}
      <h2 id="bad-foods" className="mt-10 mb-4 text-xl font-bold">
        장건강에 나쁜 식품
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        장내 유익균을 줄이고 유해균을 늘리는 식품들이야. 완전히 끊기 어렵더라도{" "}
        <strong className="text-foreground">빈도와 양을 줄이는 것</strong>이
        중요해.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품·습관
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                장에 미치는 영향
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                대안
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                초가공식품 (라면, 과자, 냉동식품)
              </td>
              <td className="border border-border px-4 py-2">
                유화제·방부제가 장벽 손상, 미생물 다양성 감소
              </td>
              <td className="border border-border px-4 py-2">
                집밥, 자연식품 위주 식단
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                인공감미료 (아스파탐, 수크랄로스)
              </td>
              <td className="border border-border px-4 py-2">
                장내 미생물 구성 변화, 포도당 내성 저하
              </td>
              <td className="border border-border px-4 py-2">
                스테비아(천연 감미료), 소량의 꿀
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과도한 설탕
              </td>
              <td className="border border-border px-4 py-2">
                유해균과 칸디다균 증식 촉진
              </td>
              <td className="border border-border px-4 py-2">
                과일의 천연 당, 소량의 꿀
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과도한 음주
              </td>
              <td className="border border-border px-4 py-2">
                장벽 투과성 증가(&quot;장누수&quot;), 유익균 감소
              </td>
              <td className="border border-border px-4 py-2">
                주 2잔 이하로 제한
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과도한 붉은 고기
              </td>
              <td className="border border-border px-4 py-2">
                TMAO 생성 촉진, 장내 염증 유발 가능
              </td>
              <td className="border border-border px-4 py-2">
                생선, 닭가슴살, 두부로 대체
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                불필요한 항생제 사용
              </td>
              <td className="border border-border px-4 py-2">
                유익균·유해균 구분 없이 제거, 회복에 수개월 소요
              </td>
              <td className="border border-border px-4 py-2">
                의사 처방 시에만 복용, 불필요한 항생제 자제
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Weekly Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 장건강 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          발효식품 + 식이섬유
        </strong>{" "}
        조합을 중심으로 구성한 일주일 식단표야. 매끼 프로바이오틱스 또는
        프리바이오틱스 식품이 최소 1가지 이상 포함되도록 했어.{" "}
        <Link
          href="/calc/calorie/"
          className="text-primary hover:underline font-medium"
        >
          칼로리 계산기
        </Link>
        로 본인에게 맞는 양을 확인하세요.
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
                오트밀 + 바나나 + 그릭요거트
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 된장찌개 + 시금치나물 + 김치
              </td>
              <td className="border border-border px-3 py-2">
                고등어구이 + 미역국 + 현미밥 + 브로콜리
              </td>
              <td className="border border-border px-3 py-2">
                사과 반 개 (껍질째)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                화
              </td>
              <td className="border border-border px-3 py-2">
                통밀토스트 + 아보카도 + 삶은 달걀
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 청국장찌개 + 콩나물무침 + 깻잎
              </td>
              <td className="border border-border px-3 py-2">
                닭가슴살 샐러드(양파 듬뿍) + 고구마(삶은 것)
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
                그릭요거트 + 귀리 그래놀라 + 딸기
              </td>
              <td className="border border-border px-3 py-2">
                현미 비빔밥(나물 듬뿍) + 된장국 + 김치
              </td>
              <td className="border border-border px-3 py-2">
                연어구이 + 구운 브로콜리·파프리카 + 잡곡밥
              </td>
              <td className="border border-border px-3 py-2">
                바나나 1개 + 아몬드
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                목
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 미역국 + 계란말이 + 김치
              </td>
              <td className="border border-border px-3 py-2">
                두부 된장찌개 + 잡곡밥 + 부추무침 + 미나리무침
              </td>
              <td className="border border-border px-3 py-2">
                삼치구이 + 콩나물국 + 현미밥 + 깍두기
              </td>
              <td className="border border-border px-3 py-2">
                키위 1개 + 콤부차
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                금
              </td>
              <td className="border border-border px-3 py-2">
                오트밀 + 사과(껍질째) + 시나몬 + 우유
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 + 낫토 + 소고기미역국 + 양배추쌈
              </td>
              <td className="border border-border px-3 py-2">
                닭안심 볶음(마늘·양파) + 잡곡밥 + 된장국
              </td>
              <td className="border border-border px-3 py-2">
                고구마(식힌 것) 작은 1개
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                토
              </td>
              <td className="border border-border px-3 py-2">
                통밀 팬케이크 + 그릭요거트 + 블루베리
              </td>
              <td className="border border-border px-3 py-2">
                콩나물밥(잡곡) + 양념장(소량) + 청국장찌개
              </td>
              <td className="border border-border px-3 py-2">
                대구탕 + 현미밥 + 무나물 + 김치
              </td>
              <td className="border border-border px-3 py-2">
                견과류 한 줌 + 배 반 개
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
                잡곡밥 + 된장국 + 두부조림 + 나물 2종 + 김치
              </td>
              <td className="border border-border px-3 py-2">
                돼지안심 수육 + 쌈채소 + 쌈장 소량 + 미역줄기무침
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트 + 바나나
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">식단표 핵심 포인트:</strong> 매끼{" "}
          <strong className="text-foreground">
            발효식품(김치, 된장, 요거트) 1가지 + 식이섬유 식품(채소, 잡곡,
            과일) 2가지 이상
          </strong>
          이 포함되도록 했어.{" "}
          <Link
            href="/calc/bmr/"
            className="text-primary hover:underline font-medium"
          >
            기초대사량 계산기
          </Link>
          로 본인의 대사량을 확인하고 양을 조절하세요.
        </p>
      </div>

      {/* Section: Korean Fermented Foods */}
      <h2 id="korean-fermented" className="mt-10 mb-4 text-xl font-bold">
        한국 발효 음식 활용법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한국은 세계적으로도 손꼽히는 발효식품 강국이야. 김치, 된장, 고추장,
        청국장, 간장, 젓갈, 막걸리까지 — 전통 한식에는 장건강에 좋은
        발효식품이 가득해. 이걸 제대로 활용하는 방법을 알아보자.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">김치</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">최적 섭취 시기:</strong>{" "}
            담근 후 2~4주, 적당히 익었을 때 유산균이 가장 많아 (1g당 약
            1억 마리)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">조리 시 주의:</strong>{" "}
            김치찌개나 볶음으로 가열하면 유산균이 대부분 죽어. 장건강
            목적이라면 생으로 먹는 것이 좋아
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">적정량:</strong> 하루
            30~50g (약 2~3쪽). 나트륨 때문에 과다 섭취는 피하기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">다양한 김치 활용:</strong>{" "}
            배추김치 외에도 깍두기, 총각김치, 갓김치, 동치미 등 다양한
            종류를 번갈아 먹으면 더 다양한 유익균을 섭취할 수 있어
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">된장·청국장</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">된장:</strong> 매일 된장국이나
            쌈장으로 섭취 가능. 저염 된장을 활용하면 나트륨 부담을 줄일 수
            있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">청국장:</strong> 된장보다 발효
            기간이 짧아 유익균이 더 살아있는 상태야. 특유의 냄새가 강하지만
            장건강 효과는 발효식품 중 최고 수준
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">활용 팁:</strong> 청국장찌개는
            너무 오래 끓이지 않기 (유산균 보존). 끓기 시작하면 불 끄고
            바로 먹기
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타 한국 발효식품</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">막걸리:</strong> 유산균과 식이섬유가
            풍부하지만, 알코올이므로 장건강 목적으로 과음은 역효과.
            주 1~2잔 정도가 적당
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">식초 (전통 발효식초):</strong>{" "}
            아세트산이 장내 환경을 산성으로 만들어 유익균 성장에 도움.
            물에 타서 식전에 마시기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">젓갈:</strong> 발효식품이지만
            나트륨이 매우 높아 소량만 양념으로 사용. 장건강 주목적으로는
            비추천
          </span>
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">전통 한식의 장점:</strong>{" "}
          한식은 밥 + 국 + 발효 반찬(김치, 된장) + 나물(식이섬유) 구조라서,
          자연스럽게 프로바이오틱스와 프리바이오틱스를 함께 섭취하게 돼. 한식을
          제대로 먹는 것만으로도 장건강의 기본은 갖춰지는 셈이야.{" "}
          <Link
            href="/products/"
            className="text-primary hover:underline font-medium"
          >
            다이어트 식품 비교
          </Link>
          에서 건강한 식품도 찾아보세요.
        </p>
      </div>

      {/* Section: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        실전 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        장건강을 위한 생활 습관
      </h3>
      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">식이섬유는 서서히 늘리기:</strong>{" "}
            갑자기 많이 먹으면 가스, 복부 팽만감이 생겨. 1~2주에 걸쳐
            하루 5g씩 늘려서 최종 하루 25~35g을 목표로 해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">물을 충분히 마시기:</strong>{" "}
            식이섬유가 제대로 작용하려면 물이 필수야. 하루 1.5~2L 이상
            마시는 것이 좋아
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">다양한 식품 먹기:</strong>{" "}
            연구에 따르면 주 30가지 이상의 다양한 식물성 식품을 먹는 것이
            장내 미생물 다양성을 높이는 가장 효과적인 방법이래
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">규칙적인 식사 시간:</strong>{" "}
            장내 미생물에도 &quot;생체 시계&quot;가 있어서, 규칙적인 식사
            시간이 미생물 활동에 도움이 돼
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">스트레스 관리:</strong>{" "}
            &quot;장-뇌 축&quot;은 양방향이라, 스트레스가 장내 미생물에
            직접적인 영향을 미쳐. 명상, 운동, 충분한 수면이 장건강에도
            중요해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">규칙적인 운동:</strong>{" "}
            연구에 따르면 주 150분 이상의 중강도 운동이 장내 미생물
            다양성을 높이는 데 도움이 된다고 해
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        장 상태 자가 체크리스트
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 항목 중 3개 이상 해당되면 장내 미생물 균형이 깨져 있을 수
        있어. 식단 개선을 시작하되, 증상이 심하면 소화기내과 전문의를
        방문하세요.
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-amber-500 font-bold">&#9744;</span>
          <span>잦은 복부 팽만감이나 가스</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500 font-bold">&#9744;</span>
          <span>변비 또는 설사가 자주 반복</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500 font-bold">&#9744;</span>
          <span>피부 트러블(여드름, 습진)이 잦음</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500 font-bold">&#9744;</span>
          <span>감기나 잔병치레를 자주 함</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500 font-bold">&#9744;</span>
          <span>단 음식이나 탄수화물에 대한 갈망이 강함</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500 font-bold">&#9744;</span>
          <span>이유 없는 피로감이 지속</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500 font-bold">&#9744;</span>
          <span>최근 항생제를 복용한 적 있음</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-amber-500 font-bold">&#9744;</span>
          <span>가공식품·패스트푸드 섭취가 잦음</span>
        </li>
      </ul>

      {/* Section: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>

      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              과민성 대장 증후군(IBS) 환자 주의:
            </strong>{" "}
            발효식품이나 식이섬유가 오히려 증상을 악화시킬 수 있습니다.
            IBS 진단을 받았다면 저포드맵(Low FODMAP) 식단에 대해 의사와
            상의하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              식이섬유 급격한 증가 금물:
            </strong>{" "}
            하루 식이섬유를 갑자기 20g 이상 늘리면 심한 복통, 가스,
            설사가 올 수 있습니다. 반드시 1~2주에 걸쳐 서서히 늘리세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              프로바이오틱스 보충제 선택 시 주의:
            </strong>{" "}
            모든 프로바이오틱스가 같은 효과를 내는 것은 아닙니다. 증상에
            맞는 균주를 선택해야 하며, 면역력이 심하게 저하된 분은 생균
            보충제가 오히려 위험할 수 있으니 의사와 상의하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              소화기 질환 보유자:
            </strong>{" "}
            크론병, 궤양성 대장염, 위궤양 등 소화기 질환이 있는 분은
            식단 변경 전 반드시 담당 소화기내과 전문의와 상담하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              증상이 지속되면 전문의 방문:
            </strong>{" "}
            2주 이상 지속되는 복통, 혈변, 급격한 체중 변화, 심한 설사
            등은 단순 식단 문제가 아닐 수 있습니다. 반드시 병원을
            방문하세요
          </span>
        </li>
      </ul>

      <div className="my-6 rounded-xl border-2 border-red-300 bg-red-50/70 p-5 dark:border-red-900 dark:bg-red-950/40">
        <p className="mb-2 text-base font-bold text-red-700 dark:text-red-400">
          의료 면책 안내
        </p>
        <p className="text-sm text-red-800/80 leading-relaxed dark:text-red-300/80">
          이 글은 일반적인 건강 정보 제공을 목적으로 작성되었으며,{" "}
          <strong>의학적 진단이나 치료를 대체하지 않습니다.</strong> 소화기
          관련 증상이 있거나, 소화기 질환을 앓고 있는 분은 식단 변경 전
          반드시 소화기내과 전문의와 상담하세요. 프로바이오틱스 보충제
          복용도 의사나 약사와 상의 후 결정하는 것이 안전합니다.
        </p>
      </div>

      {/* Closing CTA */}
      <div className="my-8 rounded-xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          건강한 장은 건강한 몸의 시작
        </p>
        <p className="mb-4 font-bold">
          내 몸에 맞는 칼로리와 영양 밸런스를 확인해보세요
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
        </div>
      </div>
    </WikiLayout>
  );
}
