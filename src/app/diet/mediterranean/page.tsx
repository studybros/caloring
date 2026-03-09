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
  title: "지중해식 다이어트 완벽 가이드 — 한국식 식단표, 효과, 실천법",
  description:
    "US News 선정 최고의 다이어트, 지중해식 식단의 원리, 한국 식재료로 실천하는 방법, 일주일 식단표, 효과, 주의사항까지 총정리. 건강하게 살 빼는 지중해 다이어트 완벽 가이드.",
  path: "/diet/mediterranean/",
  keywords: [
    "지중해식 다이어트",
    "지중해 식단",
    "건강한 다이어트",
    "지중해식 식단표",
    "올리브오일 다이어트",
    "지중해 다이어트 방법",
    "건강한 식단",
    "지중해식 다이어트 효과",
    "지중해 다이어트 한국",
    "심장 건강 식단",
    "장수 식단",
    "US News 최고 다이어트",
  ],
});

const TOC = [
  { id: "what-is", title: "지중해식 다이어트란?" },
  { id: "principles", title: "핵심 원칙 5가지" },
  { id: "foods", title: "많이 먹을 것 vs 줄일 것" },
  { id: "korean-way", title: "한국에서 실천하는 방법" },
  { id: "meal-plan", title: "일주일 식단표 (한국식)" },
  { id: "benefits", title: "과학적으로 검증된 효과" },
  { id: "tips", title: "성공을 위한 실전 팁" },
  { id: "cautions", title: "주의사항" },
];

const FAQ_ITEMS = [
  {
    question: "지중해식 다이어트로 정말 살이 빠지나요?",
    answer:
      "네, 여러 연구에서 지중해식 다이어트가 장기적인 체중 감량에 효과적이라는 결과가 나와 있어요. 극단적인 칼로리 제한 없이 식품의 질을 높이는 방식이라 요요가 적고, 6~12개월간 평균 4~10kg 감량 효과가 보고되었어요. 다만 개인차가 크고, 칼로리 계산기로 적정 섭취량을 맞추는 것이 중요해요.",
  },
  {
    question: "한국에서 올리브오일을 매일 쓰기 부담스러운데 대체할 수 있나요?",
    answer:
      "들기름이나 참기름이 좋은 대안이에요! 들기름은 오메가-3가 풍부하고, 참기름은 한식에 자연스럽게 어울려요. 아보카도오일도 높은 발연점으로 볶음 요리에 적합해요. 올리브오일은 샐러드 드레싱이나 빵에 찍어 먹을 때 활용하고, 일반 조리에는 들기름/참기름을 쓰면 비용도 줄일 수 있어요.",
  },
  {
    question: "지중해식 다이어트에서 밥을 먹어도 되나요?",
    answer:
      "네, 통곡물은 지중해식의 핵심 식품이에요. 백미보다는 현미, 잡곡밥, 보리밥 등 통곡물 위주로 먹으면 됩니다. 양은 한 끼에 반 공기~2/3 공기 정도가 적당하고, 접시의 절반은 채소로 채우는 것이 포인트예요.",
  },
  {
    question: "지중해식 다이어트와 키토제닉의 차이점은 뭔가요?",
    answer:
      "가장 큰 차이는 탄수화물에요. 키토제닉은 탄수화물을 5~10%로 극단적으로 제한하지만, 지중해식은 통곡물, 콩류, 과일 등 건강한 탄수화물을 적극 권장해요. 지중해식은 특정 식품군을 금지하지 않고 '식품의 질'을 높이는 데 집중하기 때문에 장기 유지가 더 쉬운 편이에요.",
  },
  {
    question: "지중해식 다이어트에서 고기는 아예 먹으면 안 되나요?",
    answer:
      "아예 금지는 아니에요. 붉은 고기(소고기, 돼지고기)는 월 2~3회로 줄이고, 닭고기 같은 가금류는 주 2~3회 정도 먹어요. 대신 생선과 해산물을 주 2~3회 이상 섭취하는 것이 핵심이에요. 완전히 못 먹는 게 아니라 '빈도를 조절'하는 거예요.",
  },
  {
    question: "지중해식 다이어트는 비용이 많이 드나요?",
    answer:
      "올리브오일, 견과류, 연어 등이 비쌀 수 있지만, 한국 식재료로 대체하면 비용을 크게 줄일 수 있어요. 들기름(올리브오일 대체), 고등어·꽁치(연어 대체), 두부·콩(단백질 보충)을 활용하면 일반 식비와 크게 차이나지 않아요.",
  },
];

const RELATED_CALC = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
];

const RELATED_DIET = [
  { title: "혈당 다이어트 가이드", href: "/diet/blood-sugar/", emoji: "📊" },
  { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋" },
  { title: "간헐적 단식 가이드", href: "/diet/intermittent-fasting/", emoji: "⏰" },
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

export default function MediterraneanPage() {
  const jsonLd = [
    createArticleSchema({
      title: "지중해식 다이어트 완벽 가이드",
      description:
        "지중해식 다이어트의 원리, 한국 식재료 활용법, 일주일 식단표, 과학적 효과, 주의사항을 총정리한 완벽 가이드",
      url: "https://caloring.kr/diet/mediterranean/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단 가이드", href: "/diet/" },
      { label: "지중해식 다이어트" },
    ]),
  ];

  return (
    <WikiLayout
      title="지중해식 다이어트 완벽 가이드"
      description="세계 최고의 식단으로 꼽히는 지중해식 다이어트. 한국 식재료로 실천하는 방법과 일주일 식단표까지 알려줄게."
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "다이어트 식단 가이드", href: "/diet/" },
        { label: "지중해식 다이어트" },
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
              지중해식 다이어트는{" "}
              <strong className="text-foreground">
                US News &amp; World Report에서 7년 연속 &quot;최고의 다이어트&quot;
              </strong>
              로 선정된 식단이야
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">
                올리브오일, 생선, 통곡물, 채소, 과일, 견과류
              </strong>
              를 중심으로 가공식품과 붉은 고기를 줄이는 방식
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              특정 식품을 금지하지 않아{" "}
              <strong className="text-foreground">
                장기 유지가 쉽고 요요가 적은
              </strong>{" "}
              것이 최대 장점
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              체중 감량뿐 아니라{" "}
              <strong className="text-foreground">
                심혈관 질환, 당뇨, 치매 예방
              </strong>
              에도 효과가 있다는 대규모 연구 결과가 다수
            </span>
          </li>
        </ul>
      </div>

      {/* Section: What is Mediterranean */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        지중해식 다이어트란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        지중해식 다이어트(Mediterranean Diet)는 이탈리아, 그리스, 스페인 등{" "}
        <strong className="text-foreground">
          지중해 연안 국가들의 전통 식단
        </strong>
        을 기반으로 한 식이요법이야. 1960년대에 미국의 영양학자 앤셀 키스(Ancel
        Keys)가 지중해 지역 사람들의 심장 질환 발생률이 현저히 낮다는 것을
        발견하면서 연구가 시작되었어.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        이 식단의 핵심은{" "}
        <strong className="text-foreground">
          &quot;무엇을 빼느냐&quot;가 아니라 &quot;무엇을 더 먹느냐&quot;
        </strong>
        에 있어. 올리브오일, 신선한 채소와 과일, 통곡물, 생선, 견과류를 풍부하게
        먹고, 가공식품, 설탕, 붉은 고기를 자연스럽게 줄이는 방식이지.
        특정 음식을 완전히 금지하지 않기 때문에{" "}
        <strong className="text-foreground">지속 가능성이 높은</strong> 것이
        가장 큰 장점이야.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        지중해식은 단순한 다이어트를 넘어서{" "}
        <strong className="text-foreground">
          라이프스타일 전체를 포함하는 개념
        </strong>
        이야. 느긋하게 식사하기, 가족·친구와 함께 먹기, 적당한 신체 활동,
        적당량의 레드 와인(선택 사항)까지 포함돼. 물론 다이어트 목적이라면
        식단 부분만 적용해도 충분히 효과적이야.
      </p>

      {/* Section: Principles */}
      <h2 id="principles" className="mt-10 mb-4 text-xl font-bold">
        핵심 원칙 5가지
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        1. 좋은 지방을 풍부하게
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        지중해식의 상징은{" "}
        <strong className="text-foreground">올리브오일</strong>이야.
        엑스트라 버진 올리브오일을 요리, 샐러드 드레싱, 빵 찍기에 적극 활용해.
        견과류(아몬드, 호두), 아보카도, 생선의 오메가-3도 중요한 지방 소스야.
        반면 버터, 마가린, 트랜스지방은 최소화해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        2. 채소와 과일을 매 끼 풍부하게
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          하루 채소 5접시, 과일 2~3회
        </strong>
        를 목표로 해. 색깔이 다양할수록 좋아(빨간 토마토, 초록 시금치, 보라
        가지, 노란 파프리카 등). 다양한 항산화 물질과 식이섬유를 섭취할 수
        있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        3. 통곡물로 탄수화물 섭취
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        탄수화물을 끊는 게 아니라{" "}
        <strong className="text-foreground">질 좋은 탄수화물</strong>을 먹어.
        흰 빵, 백미 대신 통밀빵, 현미, 귀리, 보리 등 통곡물을 선택해.
        통곡물은 식이섬유가 풍부해서 혈당을 천천히 올리고 포만감이 오래 가.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        4. 생선과 해산물을 주 단백질원으로
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">주 2~3회 이상 생선</strong>을
        먹는 것이 원칙이야. 특히 연어, 고등어, 정어리 같은 오메가-3가 풍부한
        등푸른 생선이 좋아. 붉은 고기(소고기, 돼지고기)는 월 2~3회로 줄이고,
        닭고기 같은 가금류는 주 2~3회 정도 먹어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        5. 가공식품과 첨가당 최소화
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        과자, 탄산음료, 인스턴트 식품, 가공육(소시지, 햄)을 줄이는 거야.
        지중해식의 핵심은{" "}
        <strong className="text-foreground">
          가능한 한 자연 그대로의 식재료
        </strong>
        를 사용하는 것이야. 조리법도 간단하게 — 굽기, 삶기, 생으로 먹기가
        기본이야.
      </p>

      {/* Section: Foods */}
      <h2 id="foods" className="mt-10 mb-4 text-xl font-bold">
        많이 먹을 것 vs 줄일 것
      </h2>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                빈도
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품군
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                예시
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="bg-green-50/30 dark:bg-green-950/10">
              <td className="border border-border px-4 py-2 font-medium text-green-700 dark:text-green-400">
                매일
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                채소, 과일, 통곡물, 올리브오일, 견과류
              </td>
              <td className="border border-border px-4 py-2">
                토마토, 시금치, 브로콜리, 사과, 현미, 아몬드, 호두
              </td>
            </tr>
            <tr className="bg-green-50/30 dark:bg-green-950/10">
              <td className="border border-border px-4 py-2 font-medium text-green-700 dark:text-green-400">
                매일
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                콩류, 허브·향신료
              </td>
              <td className="border border-border px-4 py-2">
                두부, 렌틸콩, 병아리콩, 마늘, 바질, 오레가노
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-blue-600 dark:text-blue-400">
                주 2~3회
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                생선·해산물
              </td>
              <td className="border border-border px-4 py-2">
                연어, 고등어, 참치, 새우, 조개, 꽁치
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-blue-600 dark:text-blue-400">
                주 2~3회
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                가금류, 달걀, 유제품
              </td>
              <td className="border border-border px-4 py-2">
                닭고기, 달걀, 그릭요거트, 치즈(소량)
              </td>
            </tr>
            <tr className="bg-red-50/30 dark:bg-red-950/10">
              <td className="border border-border px-4 py-2 font-medium text-red-600 dark:text-red-400">
                월 2~3회
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                붉은 고기
              </td>
              <td className="border border-border px-4 py-2">
                소고기, 돼지고기, 양고기 (소량, 살코기 위주)
              </td>
            </tr>
            <tr className="bg-red-50/30 dark:bg-red-950/10">
              <td className="border border-border px-4 py-2 font-medium text-red-600 dark:text-red-400">
                최소화
              </td>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                가공식품, 첨가당, 정제 곡물
              </td>
              <td className="border border-border px-4 py-2">
                과자, 탄산음료, 흰 빵, 인스턴트 식품, 가공육
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Korean Way */}
      <h2 id="korean-way" className="mt-10 mb-4 text-xl font-bold">
        한국에서 실천하는 방법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        &quot;올리브오일이랑 통밀빵을 매일 먹으라고? 한국에서?&quot; 걱정하지
        마. 사실{" "}
        <strong className="text-foreground">
          한식은 지중해식과 공통점이 꽤 많아
        </strong>
        . 채소 반찬이 풍부하고, 된장·김치 같은 발효식품이 있고, 나물과 해산물을
        즐기니까. 약간의 조정만 하면 한국에서도 충분히 지중해식을 실천할 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        한국 식재료로 대체하기
      </h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                지중해 원재료
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                한국 대체 식재료
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                비고
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                올리브오일
              </td>
              <td className="border border-border px-4 py-2">
                들기름, 참기름, 아보카도오일
              </td>
              <td className="border border-border px-4 py-2">
                들기름은 오메가-3 풍부
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                연어
              </td>
              <td className="border border-border px-4 py-2">
                고등어, 꽁치, 삼치, 갈치
              </td>
              <td className="border border-border px-4 py-2">
                등푸른 생선이면 OK
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                통밀빵, 파스타
              </td>
              <td className="border border-border px-4 py-2">
                현미밥, 잡곡밥, 보리밥, 메밀국수
              </td>
              <td className="border border-border px-4 py-2">
                한국의 잡곡 = 최고의 통곡물
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                렌틸콩, 병아리콩
              </td>
              <td className="border border-border px-4 py-2">
                두부, 검정콩, 강낭콩, 녹두
              </td>
              <td className="border border-border px-4 py-2">
                두부는 한식 최고의 식물성 단백질
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                토마토 소스
              </td>
              <td className="border border-border px-4 py-2">
                된장, 간장, 고추장(적당히)
              </td>
              <td className="border border-border px-4 py-2">
                발효 식품이라는 공통점
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                바질, 오레가노
              </td>
              <td className="border border-border px-4 py-2">
                깻잎, 마늘, 생강, 부추
              </td>
              <td className="border border-border px-4 py-2">
                한국 허브도 항산화 성분 풍부
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                그릭요거트
              </td>
              <td className="border border-border px-4 py-2">
                그릭요거트(국내 판매), 두유
              </td>
              <td className="border border-border px-4 py-2">
                무가당 제품 선택
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">한식 자체가 지중해식?</strong>{" "}
          한식의 강점을 살리면 돼. 나물 반찬(시금치, 콩나물, 도라지), 해산물
          (미역국, 조개탕, 생선구이), 발효식품(김치, 된장, 청국장), 잡곡밥만
          잘 조합하면 이미 지중해식의 70%는 완성이야. 여기에 올리브오일이나
          들기름을 추가하고, 가공식품과 설탕만 줄이면 충분해.
        </p>
      </div>

      {/* Section: Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 식단표 (한국식)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한국 식재료를 활용한 지중해식 일주일 식단표야. 하루 총 칼로리는{" "}
        <strong className="text-foreground">약 1,400~1,600kcal</strong>
        로 설정했으며, 여성 기준 건강한 감량 속도를 목표로 해.{" "}
        <Link
          href="/calc/calorie/"
          className="text-primary hover:underline font-medium"
        >
          칼로리 계산기
        </Link>
        로 자기에게 맞는 칼로리를 먼저 확인해봐.
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
                오트밀 + 블루베리 + 호두 + 꿀 약간
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥(반 공기) + 고등어구이 + 시금치나물 + 된장국
              </td>
              <td className="border border-border px-3 py-2">
                두부 스테이크(올리브오일) + 토마토 샐러드 + 현미밥(반 공기)
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
                통밀 토스트 + 아보카도 + 달걀 후라이 + 방울토마토
              </td>
              <td className="border border-border px-3 py-2">
                메밀국수 + 채소 토핑 + 닭가슴살 + 들기름 드레싱
              </td>
              <td className="border border-border px-3 py-2">
                연어구이 + 브로콜리 + 잡곡밥(반 공기) + 미역국
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,520
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                수
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트(무가당) + 그래놀라 + 딸기
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥(반 공기) + 두부조림 + 콩나물국 + 나물 2종
              </td>
              <td className="border border-border px-3 py-2">
                삼치구이 + 깻잎 + 상추쌈 + 보리밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,400
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                목
              </td>
              <td className="border border-border px-3 py-2">
                삶은 달걀 2개 + 방울토마토 + 아몬드 한 줌
              </td>
              <td className="border border-border px-3 py-2">
                닭가슴살 샐러드(올리브오일 드레싱) + 통밀빵 1조각
              </td>
              <td className="border border-border px-3 py-2">
                된장찌개(두부, 호박) + 잡곡밥(반 공기) + 나물 + 김구이
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,480
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                금
              </td>
              <td className="border border-border px-3 py-2">
                오트밀 + 바나나 반 개 + 아몬드버터
              </td>
              <td className="border border-border px-3 py-2">
                현미밥(반 공기) + 꽁치조림 + 미역줄기 볶음 + 배추김치
              </td>
              <td className="border border-border px-3 py-2">
                새우 토마토 파스타(통밀) + 루콜라 샐러드
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,550
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                토
              </td>
              <td className="border border-border px-3 py-2">
                스크램블 에그 + 시금치 + 토마토 + 통밀 토스트
              </td>
              <td className="border border-border px-3 py-2">
                조개탕 + 잡곡밥(반 공기) + 나물 반찬 + 김치
              </td>
              <td className="border border-border px-3 py-2">
                닭가슴살 볶음(올리브오일) + 파프리카 + 현미밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,500
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                일
              </td>
              <td className="border border-border px-3 py-2">
                과일 스무디(바나나+시금치+두유) + 견과류
              </td>
              <td className="border border-border px-3 py-2">
                보리밥(반 공기) + 갈치구이 + 부추전(들기름) + 된장국
              </td>
              <td className="border border-border px-3 py-2">
                채소 카레(두부, 병아리콩) + 현미밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,480
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">식단표 활용 팁:</strong>{" "}
          자신의{" "}
          <Link
            href="/calc/bmr/"
            className="text-primary hover:underline font-medium"
          >
            기초대사량
          </Link>
          과{" "}
          <Link
            href="/calc/calorie/"
            className="text-primary hover:underline font-medium"
          >
            일일 권장 칼로리
          </Link>
          에 맞게 양을 조절하세요. 간식으로는 견과류 한 줌(20g), 과일 1개,
          그릭요거트 등이 좋아요. 핵심은{" "}
          <strong className="text-foreground">
            매 끼 채소 + 좋은 지방 + 통곡물
          </strong>
          을 포함하는 거예요.
        </p>
      </div>

      {/* Section: Benefits */}
      <h2 id="benefits" className="mt-10 mb-4 text-xl font-bold">
        과학적으로 검증된 효과
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        지중해식 다이어트는 다른 어떤 식단보다{" "}
        <strong className="text-foreground">과학적 근거가 탄탄해</strong>.
        수백 건의 대규모 연구와 메타 분석으로 뒷받침되고 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">체중 감량</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2020년 <em>BMJ</em>에 발표된 메타 분석에 따르면, 지중해식 다이어트는
        12개월간 평균{" "}
        <strong className="text-foreground">4.1~10.1kg의 체중 감량</strong>
        효과를 보였어. 특히 장기적인 체중 유지율이 다른 다이어트보다 높다는
        것이 핵심이야. 극단적 제한 없이 식품의 질을 높이는 방식이라 요요가
        적거든.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">심혈관 질환 예방</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        지중해식의 가장 유명한 연구인{" "}
        <strong className="text-foreground">PREDIMED 연구</strong>(7,447명,
        5년 추적)에서 지중해식 + 올리브오일 그룹은 대조군 대비{" "}
        <strong className="text-foreground">
          심혈관 질환 발생률이 30% 감소
        </strong>
        했어. 이는 지중해식이 LDL 콜레스테롤, 중성지방, 혈압을 개선하는
        복합적 효과 덕분이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">제2형 당뇨 예방 및 관리</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        지중해식은 인슐린 감수성을 개선하고 혈당을 안정시키는 데 효과적이야.
        2014년 <em>Annals of Internal Medicine</em> 연구에 따르면,
        지중해식을 4년간 실천한 그룹에서{" "}
        <strong className="text-foreground">
          제2형 당뇨 발생률이 52% 감소
        </strong>
        했어. 이미 당뇨가 있는 분들도{" "}
        <Link
          href="/diet/blood-sugar/"
          className="text-primary hover:underline font-medium"
        >
          혈당 다이어트
        </Link>
        와 함께 적용하면 효과적이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타 건강 효과</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">뇌 건강·치매 예방:</strong>{" "}
            지중해식을 꾸준히 실천하면 인지 기능 저하 속도가 느려진다는 연구
            결과 다수
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">항염증 효과:</strong>{" "}
            올리브오일, 오메가-3, 항산화 물질이 만성 염증을 줄이는 데 도움
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">장 건강:</strong> 풍부한
            식이섬유와 발효식품이 장내 미생물 다양성을 높여줌
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">우울증 감소:</strong> 2019년
            연구에서 지중해식 식단이 우울증 증상 개선에 도움이 된다는 결과 발표
          </span>
        </li>
      </ul>

      {/* Section: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        성공을 위한 실전 팁
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        지중해식은 가장 따라하기 쉬운 다이어트 중 하나야. 완벽하게 바꾸려 하지
        말고, 아래 팁부터 하나씩 시작해봐.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        첫 주에 시작할 3가지
      </h3>
      <ol className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">1.</span>
          <span>
            <strong className="text-foreground">요리할 때 올리브오일(또는 들기름) 사용하기:</strong>{" "}
            식용유를 올리브오일이나 들기름으로 바꾸는 것만으로도 큰 변화야
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">2.</span>
          <span>
            <strong className="text-foreground">밥을 잡곡밥으로 바꾸기:</strong>{" "}
            백미 대신 현미, 보리, 흑미 등을 섞어 밥 짓기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">3.</span>
          <span>
            <strong className="text-foreground">간식을 견과류로 바꾸기:</strong>{" "}
            과자, 빵 대신 아몬드, 호두 한 줌(20g)을 간식으로
          </span>
        </li>
      </ol>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        외식할 때 팁
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">생선구이 전문점:</strong>{" "}
            고등어구이 + 나물 반찬 + 된장찌개 = 완벽한 지중해식 한 끼
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">샐러드 전문점:</strong>{" "}
            올리브오일 드레싱 + 견과류 토핑 선택
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">한식 뷔페:</strong>{" "}
            나물, 생선, 두부 위주로 접시 구성. 튀김류와 고기는 소량만
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">이탈리안 레스토랑:</strong>{" "}
            해산물 파스타(통밀 면), 카프레제 샐러드, 그릴드 생선 선택
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        장보기 체크리스트
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#10003;</span>
          <span>
            엑스트라 버진 올리브오일 또는 들기름
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#10003;</span>
          <span>
            등푸른 생선 (고등어, 꽁치, 삼치 등)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#10003;</span>
          <span>
            잡곡 (현미, 보리, 흑미, 귀리)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#10003;</span>
          <span>
            제철 채소·과일 (다양한 색깔로)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#10003;</span>
          <span>
            두부, 달걀
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#10003;</span>
          <span>
            견과류 (아몬드, 호두, 소분 포장 추천)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#10003;</span>
          <span>
            그릭요거트 (무가당)
          </span>
        </li>
      </ul>

      {/* Section: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        지중해식은 가장 안전한 식단 중 하나지만, 몇 가지 주의할 점이 있어.
      </p>

      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              칼로리 과다 주의:
            </strong>{" "}
            올리브오일, 견과류, 아보카도 등 건강한 지방도 칼로리가 높아.
            올리브오일 1큰술 = 약 120kcal, 아몬드 한 줌(30g) = 약 170kcal이야.
            체중 감량이 목표라면{" "}
            <Link
              href="/calc/calorie/"
              className="text-primary hover:underline font-medium"
            >
              칼로리 계산기
            </Link>
            로 적정량을 확인하고 지방 섭취량을 조절해야 해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              와인은 선택 사항:
            </strong>{" "}
            전통적 지중해식에는 식사 중 레드 와인(하루 1잔)이 포함되지만,
            다이어트 목적이라면 굳이 마실 필요 없어. 알코올은 칼로리가 높고
            (1잔 약 120kcal), 지방 연소를 억제해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              빠른 체중 감량은 아님:
            </strong>{" "}
            키토제닉이나 간헐적 단식 같은 극단적 방법보다 체중 감소 속도가 느릴
            수 있어. 하지만 건강 개선 + 장기 유지 가능성에서는 지중해식이 앞서.
            조급해하지 말고 라이프스타일로 받아들이는 것이 성공의 열쇠야
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              철분 부족 가능성:
            </strong>{" "}
            붉은 고기를 줄이면 철분(특히 헴철) 섭취가 부족해질 수 있어.
            시금치, 콩류, 달걀로 보충하고, 비타민C와 함께 먹으면 철분 흡수율이
            높아져
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              식품 알레르기 확인:
            </strong>{" "}
            견과류, 생선, 유제품을 많이 먹는 식단이므로, 해당 식품에 알레르기가
            있다면 대체 식품을 찾아야 해
          </span>
        </li>
      </ul>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        기저질환이 있거나 약을 복용 중이라면 식단 변경 전에 의사와 상담하는 것이
        좋아.{" "}
        <Link
          href="/calc/bmi/"
          className="text-primary hover:underline font-medium"
        >
          BMI 계산기
        </Link>
        로 현재 체중 상태를 확인하고, 무리 없는 범위에서 시작해봐.
      </p>

      {/* Closing CTA */}
      <div className="my-8 rounded-xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          지중해식 다이어트 시작 전, 내 몸 상태부터 체크하세요
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
