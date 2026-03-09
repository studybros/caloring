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
  title: "당뇨 식단 가이드 — 혈당 관리 식단표, GI 지수, 허용 식품 총정리",
  description:
    "당뇨병 환자를 위한 식단 원칙, 혈당 관리 기본 원리, GI/GL 지수 설명, 당뇨 식단 피라미드, 허용·제한 식품 목록, 일주일 당뇨 식단표, 간식 가이드까지 총정리. 반드시 의사 상담과 병행하세요.",
  path: "/diet/diabetes/",
  keywords: [
    "당뇨 식단",
    "당뇨병 식단",
    "혈당 관리 식단",
    "당뇨 식단표",
    "당뇨 음식",
    "당뇨에 좋은 음식",
    "혈당 낮추는 음식",
    "GI 지수 음식",
    "당뇨 간식",
    "당뇨 식이요법",
    "당뇨 밥",
    "당뇨 과일",
  ],
});

const TOC = [
  { id: "disclaimer", title: "의료 면책 안내" },
  { id: "blood-sugar-basics", title: "혈당 관리 기본 원리" },
  { id: "gi-gl", title: "GI 지수와 GL 지수" },
  { id: "food-pyramid", title: "당뇨 식단 피라미드" },
  { id: "allowed-foods", title: "허용 식품 목록" },
  { id: "restricted-foods", title: "제한 식품 목록" },
  { id: "meal-plan", title: "일주일 당뇨 식단표" },
  { id: "snack-guide", title: "간식 가이드" },
  { id: "tips", title: "실전 식사 팁" },
  { id: "cautions", title: "주의사항" },
];

const FAQ_ITEMS = [
  {
    question: "당뇨 환자는 밥을 먹으면 안 되나요?",
    answer:
      "흰쌀밥 대신 현미, 잡곡, 귀리를 섞은 잡곡밥을 권장합니다. 밥 자체를 끊을 필요는 없지만, 한 끼 밥 양을 반 공기(약 100g)로 줄이고 채소와 단백질을 먼저 먹은 후 밥을 먹으면 혈당 급등을 줄일 수 있습니다. 담당 의사와 상의하여 개인에게 맞는 탄수화물 양을 정하는 것이 가장 중요합니다.",
  },
  {
    question: "과일은 얼마나 먹어도 되나요?",
    answer:
      "과일에는 천연 당분(과당)이 포함되어 있어 혈당에 영향을 줍니다. 하루 1~2회, 주먹 반 정도의 양으로 제한하고, GI 지수가 낮은 사과, 배, 딸기, 블루베리 등을 선택하세요. 과일 주스는 식이섬유가 제거되어 혈당을 빠르게 올리므로 피하는 것이 좋습니다. 구체적인 섭취량은 담당 의사나 영양사와 상담하세요.",
  },
  {
    question: "당뇨 식단을 하면 약을 줄일 수 있나요?",
    answer:
      "식단 관리가 혈당 조절에 큰 도움이 되는 것은 사실이지만, 약의 용량 조절은 반드시 담당 의사의 판단 하에 이루어져야 합니다. 식단 변화 후 혈당이 개선되더라도 임의로 약을 줄이거나 중단하면 위험할 수 있습니다. 정기적으로 혈당을 측정하고 의사와 상의하세요.",
  },
  {
    question: "당뇨에 현미밥이 좋은 이유는 뭔가요?",
    answer:
      "현미는 흰쌀에 비해 식이섬유가 약 4배 많아 소화 흡수가 느리게 진행됩니다. 이로 인해 식후 혈당 상승 속도가 완만해지는 효과가 있습니다. 또한 마그네슘, 크롬 등 인슐린 감수성을 돕는 미네랄이 풍부합니다. 다만 현미도 탄수화물이므로 양 조절은 필요합니다.",
  },
  {
    question: "외식할 때 당뇨 식단을 지키려면 어떻게 해야 하나요?",
    answer:
      "외식 시에는 밥 양을 반으로 줄여달라고 요청하고, 찌개보다 구이·조림류를 선택하세요. 국물 음식은 나트륨과 당분이 높을 수 있으니 국물은 적게 먹는 것이 좋습니다. 한식 뷔페에서는 채소 반찬 위주로 먹고, 양념이 많은 요리(떡볶이, 양념치킨 등)는 피하세요.",
  },
  {
    question: "당뇨 환자도 간헐적 단식을 해도 되나요?",
    answer:
      "당뇨 환자의 간헐적 단식은 저혈당 위험이 있어 반드시 담당 의사와 상의해야 합니다. 특히 인슐린이나 설포닐우레아 계열 약을 복용 중이라면 공복 시 저혈당이 올 수 있어 위험합니다. 의사의 허가 없이 장시간 공복을 유지하지 마세요.",
  },
];

const RELATED_CALC = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
];

const RELATED_DIET = [
  { title: "고혈압 식단 (DASH 다이어트)", href: "/diet/dash/", emoji: "💙" },
  { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋" },
  { title: "고단백 다이어트 가이드", href: "/diet/high-protein/", emoji: "💪" },
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
    title: "곤약 젤리·면 비교",
    href: "/products/?category=konjac",
    emoji: "🍜",
  },
];

export default function DiabetesDietPage() {
  const jsonLd = [
    createArticleSchema({
      title: "당뇨 식단 가이드",
      description:
        "당뇨병 환자를 위한 식단 원칙, GI/GL 지수 설명, 허용·제한 식품 목록, 일주일 당뇨 식단표를 총정리한 가이드",
      url: "https://caloring.kr/diet/diabetes/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단 가이드", href: "/diet/" },
      { label: "당뇨 식단 가이드" },
    ]),
  ];

  return (
    <WikiLayout
      title="당뇨 식단 가이드"
      description="혈당을 안정적으로 관리하기 위한 당뇨 식단의 모든 것. GI 지수, 식단표, 허용 식품까지 정리했어."
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "다이어트 식단 가이드", href: "/diet/" },
        { label: "당뇨 식단 가이드" },
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
              당뇨 식단의 핵심은{" "}
              <strong className="text-foreground">
                혈당을 급격히 올리지 않는 음식 선택 + 규칙적인 식사 패턴
              </strong>
              이야
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">GI 지수 55 이하</strong>의
              저혈당 지수 식품 위주로 구성하고,{" "}
              <strong className="text-foreground">
                채소 &rarr; 단백질 &rarr; 탄수화물 순서
              </strong>
              로 먹으면 혈당 급등을 막을 수 있어
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              흰쌀밥 대신 잡곡밥, 설탕 대신 스테비아, 밀가루 대신 통밀 등{" "}
              <strong className="text-foreground">
                작은 대체만으로도 혈당 관리에 큰 차이
              </strong>
              가 생김
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              이 가이드는 일반적인 정보 제공 목적이며,{" "}
              <strong className="text-foreground">
                반드시 담당 의사·영양사와 상담 후 개인 맞춤 식단을 구성
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
          <strong>의학적 진단이나 치료를 대체하지 않습니다.</strong> 당뇨병은
          개인마다 상태가 다르므로, 식단 변경 전 반드시 담당 의사 또는
          공인 영양사와 상담하세요. 특히 인슐린이나 경구 혈당강하제를
          복용 중인 분은 식단 변화가 약물 효과에 영향을 줄 수 있으므로
          반드시 의료진의 지도 하에 진행해야 합니다.
        </p>
      </div>

      {/* Section: Blood Sugar Basics */}
      <h2 id="blood-sugar-basics" className="mt-10 mb-4 text-xl font-bold">
        혈당 관리 기본 원리
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        당뇨 식단을 이해하려면 먼저{" "}
        <strong className="text-foreground">혈당이 어떻게 오르고 내리는지</strong>를
        알아야 해. 음식을 먹으면 탄수화물이 포도당으로 분해되어 혈액으로
        들어가고, 이때 췌장에서 인슐린이 분비되어 포도당을 세포로 운반해.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        당뇨병은 이 인슐린이 부족하거나(1형), 인슐린이 있어도 제대로
        작동하지 않는(2형) 상태야. 그래서{" "}
        <strong className="text-foreground">
          혈당을 급격히 올리는 음식을 피하고, 천천히 올리는 음식을 선택하는 것
        </strong>
        이 핵심 전략이지.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        전문가들이 권장하는 당뇨 식단의 3대 원칙은 다음과 같아:
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">1.</span>
          <span>
            <strong className="text-foreground">탄수화물 총량 관리:</strong>{" "}
            하루 탄수화물 섭취량을 130~200g 범위로 조절 (담당 의사와 상의)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">2.</span>
          <span>
            <strong className="text-foreground">식사 규칙성:</strong> 하루 3끼를
            일정한 시간에 먹고, 끼니를 거르지 않기 (저혈당 예방)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">3.</span>
          <span>
            <strong className="text-foreground">균형 잡힌 영양소 배분:</strong>{" "}
            탄수화물 45~50%, 단백질 20~25%, 지방 25~30% 비율 유지
          </span>
        </li>
      </ul>

      <div className="my-6 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">식사 순서도 중요해:</strong>{" "}
          연구에 따르면{" "}
          <strong className="text-foreground">
            채소(식이섬유) &rarr; 단백질·지방 &rarr; 탄수화물(밥)
          </strong>{" "}
          순서로 먹으면 같은 음식이라도 식후 혈당 상승이 최대 30~40%
          줄어든다는 결과가 있어. 반찬 먼저, 밥은 마지막에 먹는 습관을
          들여보자.
        </p>
      </div>

      {/* Section: GI and GL */}
      <h2 id="gi-gl" className="mt-10 mb-4 text-xl font-bold">
        GI 지수와 GL 지수
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        당뇨 식단에서 가장 많이 듣는 용어가 바로{" "}
        <strong className="text-foreground">GI 지수(Glycemic Index, 혈당 지수)</strong>
        야. GI 지수란 음식을 먹었을 때 혈당이 얼마나 빠르게 올라가는지를
        나타내는 수치로, 포도당(GI 100)을 기준으로 상대적으로 매겨져 있어.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                분류
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                GI 지수
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                혈당 영향
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                대표 식품
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-green-700 dark:text-green-400">
                저GI
              </td>
              <td className="border border-border px-4 py-2">55 이하</td>
              <td className="border border-border px-4 py-2">천천히 상승</td>
              <td className="border border-border px-4 py-2">
                현미, 귀리, 고구마, 사과, 렌틸콩
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-amber-700 dark:text-amber-400">
                중GI
              </td>
              <td className="border border-border px-4 py-2">56~69</td>
              <td className="border border-border px-4 py-2">보통 상승</td>
              <td className="border border-border px-4 py-2">
                보리, 바나나, 파인애플, 통밀빵
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-red-700 dark:text-red-400">
                고GI
              </td>
              <td className="border border-border px-4 py-2">70 이상</td>
              <td className="border border-border px-4 py-2">급격히 상승</td>
              <td className="border border-border px-4 py-2">
                흰쌀밥, 흰빵, 감자, 수박, 떡
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        하지만 GI 지수만으로는 부족해.{" "}
        <strong className="text-foreground">
          GL 지수(Glycemic Load, 혈당 부하)
        </strong>
        는 실제 먹는 양까지 고려한 지표야. 수박은 GI가 72로 높지만,
        한 조각(120g)의 탄수화물은 약 9g뿐이라 GL은 6으로 낮은 편이지.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                GL 분류
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                GL 수치
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                의미
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-green-700 dark:text-green-400">
                저GL
              </td>
              <td className="border border-border px-4 py-2">10 이하</td>
              <td className="border border-border px-4 py-2">
                혈당에 미미한 영향 — 자유롭게 섭취 가능
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-amber-700 dark:text-amber-400">
                중GL
              </td>
              <td className="border border-border px-4 py-2">11~19</td>
              <td className="border border-border px-4 py-2">
                적당한 영향 — 양 조절하면서 섭취
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-red-700 dark:text-red-400">
                고GL
              </td>
              <td className="border border-border px-4 py-2">20 이상</td>
              <td className="border border-border px-4 py-2">
                큰 영향 — 최소한으로 섭취 또는 피하기
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">실전 팁:</strong> GI 지수가 높은
          식품도 식이섬유가 풍부한 채소와 함께 먹으면 혈당 상승 속도가
          느려져. 흰쌀밥을 먹을 때 나물 반찬을 함께 먹으면 GI가 효과적으로
          낮아지는 원리야.{" "}
          <Link
            href="/calc/calorie/"
            className="text-primary hover:underline font-medium"
          >
            칼로리 계산기
          </Link>
          로 총 섭취량도 함께 관리하면 더 좋아.
        </p>
      </div>

      {/* Section: Food Pyramid */}
      <h2 id="food-pyramid" className="mt-10 mb-4 text-xl font-bold">
        당뇨 식단 피라미드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        당뇨 환자를 위한 식단 피라미드는 일반인과 다르게{" "}
        <strong className="text-foreground">채소와 단백질 비중을 높이고, 정제 탄수화물을 최소화</strong>
        하는 구조야. 아래에서 위로 갈수록 많이 먹어야 하는 식품군이야.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                층
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품군
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                비중
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                한국 음식 예시
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                1층 (기본)
              </td>
              <td className="border border-border px-4 py-2">
                비전분 채소
              </td>
              <td className="border border-border px-4 py-2">매끼 1/2 접시</td>
              <td className="border border-border px-4 py-2">
                시금치, 브로콜리, 오이, 상추, 버섯, 콩나물
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                2층
              </td>
              <td className="border border-border px-4 py-2">
                단백질
              </td>
              <td className="border border-border px-4 py-2">매끼 1/4 접시</td>
              <td className="border border-border px-4 py-2">
                닭가슴살, 생선, 두부, 계란, 콩류
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                3층
              </td>
              <td className="border border-border px-4 py-2">
                복합 탄수화물
              </td>
              <td className="border border-border px-4 py-2">매끼 1/4 접시</td>
              <td className="border border-border px-4 py-2">
                현미, 잡곡, 통밀, 귀리, 고구마
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                4층
              </td>
              <td className="border border-border px-4 py-2">
                건강한 지방
              </td>
              <td className="border border-border px-4 py-2">소량</td>
              <td className="border border-border px-4 py-2">
                올리브유, 아보카도, 견과류, 들기름
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                꼭대기 (제한)
              </td>
              <td className="border border-border px-4 py-2">
                정제 탄수화물·당분
              </td>
              <td className="border border-border px-4 py-2">최소화</td>
              <td className="border border-border px-4 py-2">
                흰쌀밥, 흰빵, 떡, 과자, 탄산음료
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Allowed Foods */}
      <h2 id="allowed-foods" className="mt-10 mb-4 text-xl font-bold">
        허용 식품 목록
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 식품들은 혈당에 미치는 영향이 적거나, 혈당 관리에 도움이 되는
        것들이야. 한국 음식 기준으로 정리했으니 참고해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">곡류·전분</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>현미, 흑미, 보리, 귀리, 퀴노아</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>고구마 (삶거나 쪄서, 소량)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>통밀빵, 호밀빵 (설탕 무첨가)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>메밀국수 (소량, 채소와 함께)</span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">단백질</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>닭가슴살, 닭안심 (껍질 제거)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>생선류 (고등어, 삼치, 연어, 대구)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>두부, 순두부, 콩류 (검정콩, 렌틸콩)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>계란 (삶은 계란, 계란찜)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>소고기·돼지고기 살코기 부위 (적당량)</span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">채소</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>시금치, 배추, 상추, 깻잎, 부추</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>브로콜리, 콜리플라워, 양배추</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>오이, 토마토, 파프리카, 버섯</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>콩나물, 숙주나물, 미나리, 무</span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">과일 (소량)</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>사과, 배 (반 개 이하)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>딸기, 블루베리, 라즈베리 (한 줌)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>자몽, 귤 (1개 이하)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>키위 (1개)</span>
        </li>
      </ul>

      {/* Section: Restricted Foods */}
      <h2 id="restricted-foods" className="mt-10 mb-4 text-xl font-bold">
        제한 식품 목록
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 식품들은 혈당을 빠르게 올리거나 인슐린 저항성을 악화시킬 수
        있어. 완전히 금지라기보다{" "}
        <strong className="text-foreground">양과 빈도를 최소화</strong>
        하는 게 중요해.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                분류
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                제한 식품
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                대안
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                밥·면류
              </td>
              <td className="border border-border px-4 py-2">
                흰쌀밥, 라면, 우동, 칼국수
              </td>
              <td className="border border-border px-4 py-2">
                잡곡밥(반 공기), 곤약면, 메밀국수
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                빵·떡류
              </td>
              <td className="border border-border px-4 py-2">
                흰빵, 떡, 카스테라, 크루아상
              </td>
              <td className="border border-border px-4 py-2">
                통밀빵, 호밀빵 (소량)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                음료
              </td>
              <td className="border border-border px-4 py-2">
                탄산음료, 과일주스, 달달한 커피
              </td>
              <td className="border border-border px-4 py-2">
                물, 무가당 차, 블랙커피
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과자·간식
              </td>
              <td className="border border-border px-4 py-2">
                과자, 초콜릿, 아이스크림, 사탕
              </td>
              <td className="border border-border px-4 py-2">
                견과류, 무가당 다크초콜릿(소량)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                한식 양념
              </td>
              <td className="border border-border px-4 py-2">
                설탕·물엿이 많은 양념(불고기, 떡볶이)
              </td>
              <td className="border border-border px-4 py-2">
                저당 양념, 스테비아, 된장·청국장
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과일
              </td>
              <td className="border border-border px-4 py-2">
                건포도, 말린 과일, 통조림 과일
              </td>
              <td className="border border-border px-4 py-2">
                생과일 소량 (딸기, 사과 반 개)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                기타
              </td>
              <td className="border border-border px-4 py-2">
                꿀, 조청, 시럽, 젤리
              </td>
              <td className="border border-border px-4 py-2">
                스테비아, 에리스리톨 (대체 감미료)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Weekly Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 당뇨 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 약{" "}
        <strong className="text-foreground">1,400~1,600kcal</strong> 기준,
        탄수화물을 적정 수준으로 관리한 일주일 식단표야. 밥은 잡곡밥 반 공기
        (약 100g)를 기본으로 했고, 끼니마다 단백질과 채소를 충분히 포함했어.{" "}
        <Link
          href="/calc/calorie/"
          className="text-primary hover:underline font-medium"
        >
          칼로리 계산기
        </Link>
        로 본인에게 맞는 칼로리를 먼저 확인하고, 담당 의사와 상의하여
        조절하세요.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-3 py-2 text-left font-semibold">
                요일
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                아침 (7:30)
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                점심 (12:00)
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                저녁 (18:30)
              </th>
              <th className="border border-border px-3 py-2 text-center font-semibold">
                약 kcal
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                월
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 반 공기 + 된장국 + 삶은 달걀 + 시금치나물
              </td>
              <td className="border border-border px-3 py-2">
                현미밥 반 공기 + 닭가슴살 샐러드 + 미역국
              </td>
              <td className="border border-border px-3 py-2">
                두부스테이크 + 구운 채소 + 잡곡밥 1/3 공기
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,450
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                화
              </td>
              <td className="border border-border px-3 py-2">
                오트밀(무가당) + 삶은 달걀 + 방울토마토
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 반 공기 + 고등어구이 + 콩나물국 + 나물 2종
              </td>
              <td className="border border-border px-3 py-2">
                닭안심 볶음 + 현미밥 1/3 공기 + 배추김치
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,420
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                수
              </td>
              <td className="border border-border px-3 py-2">
                통밀토스트 1장 + 스크램블에그 + 양배추샐러드
              </td>
              <td className="border border-border px-3 py-2">
                메밀국수(소) + 닭가슴살 + 무채 + 김
              </td>
              <td className="border border-border px-3 py-2">
                연어구이 + 브로콜리 + 잡곡밥 반 공기
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,480
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                목
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 반 공기 + 순두부찌개(저염) + 깻잎
              </td>
              <td className="border border-border px-3 py-2">
                현미밥 반 공기 + 소고기국 + 두부조림 + 나물
              </td>
              <td className="border border-border px-3 py-2">
                삼치구이 + 상추쌈 + 잡곡밥 1/3 공기
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,500
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                금
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트(무가당) + 견과류 한 줌 + 사과 1/4개
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 반 공기 + 제육볶음(저당) + 된장찌개 + 오이
              </td>
              <td className="border border-border px-3 py-2">
                대구탕 + 현미밥 1/3 공기 + 부추무침
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,430
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                토
              </td>
              <td className="border border-border px-3 py-2">
                삶은 고구마(소) + 삶은 달걀 + 우유(저지방)
              </td>
              <td className="border border-border px-3 py-2">
                현미 비빔밥(채소 듬뿍, 고추장 소량) + 계란후라이
              </td>
              <td className="border border-border px-3 py-2">
                닭가슴살 스프 + 통밀빵 1조각 + 샐러드
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,520
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                일
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥 반 공기 + 북어국 + 계란말이 + 깍두기
              </td>
              <td className="border border-border px-3 py-2">
                콩나물밥(잡곡) + 양념장 소량 + 배추국
              </td>
              <td className="border border-border px-3 py-2">
                돼지안심 수육 + 쌈채소 + 쌈장 소량
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,460
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">식단표 활용 팁:</strong> 이
          식단표는 참고용이며, 개인의 혈당 반응, 약물 복용 상황, 활동량에
          따라 조절이 필요해.{" "}
          <Link
            href="/calc/bmr/"
            className="text-primary hover:underline font-medium"
          >
            기초대사량 계산기
          </Link>
          로 본인의 대사량을 확인하고, 담당 의사·영양사와 상의하여 개인
          맞춤으로 수정하세요. 핵심은{" "}
          <strong className="text-foreground">
            매끼 반 공기 이하의 잡곡밥 + 단백질 + 채소 듬뿍
          </strong>
          이야.
        </p>
      </div>

      {/* Section: Snack Guide */}
      <h2 id="snack-guide" className="mt-10 mb-4 text-xl font-bold">
        간식 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        당뇨 환자에게 간식은{" "}
        <strong className="text-foreground">
          식사 사이 저혈당 예방과 과식 방지
        </strong>
        를 위해 오히려 중요해. 다만 혈당을 급격히 올리지 않는 간식을
        선택해야 해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">추천 간식 (하루 1~2회, 각 100~150kcal 이내)</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>
            <strong className="text-foreground">견과류:</strong> 아몬드 15알,
            호두 3~4알, 피스타치오 20알 (무염)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>
            <strong className="text-foreground">삶은 달걀:</strong> 1~2개.
            단백질 보충 + 포만감 우수
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>
            <strong className="text-foreground">그릭요거트:</strong> 무가당
            제품, 딸기 2~3알 토핑 (단백질이 높아 혈당 영향 적음)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>
            <strong className="text-foreground">채소 스틱:</strong> 오이,
            당근, 셀러리 + 후무스 소량
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>
            <strong className="text-foreground">치즈:</strong> 스트링치즈
            1~2개 (탄수화물 거의 없음)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-green-500 font-bold">&#10003;</span>
          <span>
            <strong className="text-foreground">다크초콜릿:</strong> 카카오
            70% 이상, 2~3조각 (항산화 효과)
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">피해야 할 간식</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold">&#10005;</span>
          <span>과자, 크래커, 쿠키 (정제 탄수화물 + 설탕)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold">&#10005;</span>
          <span>떡, 찹쌀 음식 (GI 지수 매우 높음)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold">&#10005;</span>
          <span>과일 주스, 탄산음료, 가당 음료</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold">&#10005;</span>
          <span>건과일 (당분 농축), 시리얼바 (설탕 함량 높음)</span>
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">간식 시간 팁:</strong> 식사
          사이(오전 10시, 오후 3시)에 소량의 간식을 먹으면 다음 식사 때
          과식을 예방하고 혈당을 안정적으로 유지할 수 있어.{" "}
          <Link
            href="/products/?category=snack"
            className="text-primary hover:underline font-medium"
          >
            다이어트 간식 비교
          </Link>
          에서 당류가 낮은 간식을 찾아보는 것도 좋아.
        </p>
      </div>

      {/* Section: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        실전 식사 팁
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        전문가들이 권장하는, 일상에서 바로 적용할 수 있는 혈당 관리
        팁들이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        한국식 식사에서 혈당 관리하기
      </h3>
      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">밥 양 줄이기:</strong>{" "}
            한 공기 대신 반 공기. 그 자리를 나물이나 두부로 채우기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">국물 줄이기:</strong>{" "}
            찌개·국의 국물은 나트륨과 당분이 높을 수 있어. 건더기 위주로 먹기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">양념 확인:</strong>{" "}
            불고기, 갈비, 떡볶이 등의 양념에는 설탕·물엿이 많이 들어가.
            조림보다 구이, 찜을 선택하기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">식초 활용:</strong>{" "}
            연구에 따르면 식사 전후 식초(사과식초 등)를 물에 타 마시면
            식후 혈당 상승이 줄어들 수 있다고 해. 다만 위장이 약한 분은
            주의가 필요해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">식후 걷기:</strong>{" "}
            식사 후 10~15분 가벼운 산책만으로도 식후 혈당이 유의미하게
            낮아진다는 연구 결과가 있어
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        혈당 모니터링 습관
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">식전·식후 2시간 혈당 측정:</strong>{" "}
            어떤 음식이 혈당을 얼마나 올리는지 파악할 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">음식 일지 작성:</strong>{" "}
            먹은 음식과 혈당 수치를 기록하면 자신만의 &quot;혈당을 올리는
            음식 목록&quot;을 만들 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">목표 혈당 범위:</strong>{" "}
            공복 80~130mg/dL, 식후 2시간 180mg/dL 미만이 일반적인 목표
            (개인차 있으므로 의사와 상의)
          </span>
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
              임의로 약을 줄이거나 중단하지 마세요:
            </strong>{" "}
            식단 개선으로 혈당이 좋아져도, 약의 조절은 반드시 담당 의사만
            할 수 있습니다. 임의 감량은 심각한 고혈당을 유발할 수 있습니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              극단적 탄수화물 제한은 위험합니다:
            </strong>{" "}
            탄수화물을 너무 적게 먹으면(하루 50g 미만) 케톤산증 위험이
            있습니다. 특히 1형 당뇨 환자에게 매우 위험합니다. 탄수화물
            제한 정도는 의사와 상의하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              저혈당 증상을 알아두세요:
            </strong>{" "}
            식은땀, 어지러움, 떨림, 심한 공복감, 두근거림 등은 저혈당
            증상일 수 있습니다. 이때는 즉시 포도당 사탕이나 주스 등을
            섭취하고 의사에게 알리세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              건강기능식품에 과도한 기대를 하지 마세요:
            </strong>{" "}
            &quot;혈당에 좋다&quot;는 건강기능식품이 많지만, 약 대체는
            불가능합니다. 보조적 수단으로만 활용하고, 복용 전 의사와
            상의하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              정기 검진을 빠뜨리지 마세요:
            </strong>{" "}
            식단 관리와 함께 3개월마다 당화혈색소(HbA1c) 검사, 정기 혈액
            검사, 안과·신장 기능 검사를 받는 것이 중요합니다
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
          상태에 따라 적합하지 않을 수 있습니다. 당뇨병 식단은{" "}
          <strong>
            반드시 담당 내분비내과 전문의 또는 공인 영양사의 지도 하에
            개인 맞춤으로 구성
          </strong>
          되어야 합니다. 특히 인슐린 치료 중인 분, 합병증이 있는 분,
          임산부는 식단 변경 전 반드시 의료진과 상담하세요.
        </p>
      </div>

      {/* Closing CTA */}
      <div className="my-8 rounded-xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          혈당 관리의 첫걸음, 내 몸 상태부터 체크하세요
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
