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
  title: "비건 다이어트 완벽 가이드 — 식물성 식단표, 단백질 소스, 주의사항",
  description:
    "비건(채식) 다이어트로 건강하게 살 빼는 방법. 비건 단백질 소스, 영양소 결핍 예방법, 한국식 일주일 비건 식단표, 효과, 주의사항까지 총정리. 식물성 식단 완벽 가이드.",
  path: "/diet/vegan/",
  keywords: [
    "비건 다이어트",
    "채식 다이어트",
    "식물성 식단",
    "비건 식단표",
    "채식 식단",
    "비건 단백질",
    "식물성 단백질",
    "비건 다이어트 방법",
    "채식 다이어트 효과",
    "비건 영양소",
    "한국식 비건 식단",
    "채식 체중 감량",
  ],
});

const TOC = [
  { id: "what-is", title: "비건 다이어트란?" },
  { id: "types", title: "채식의 단계별 종류" },
  { id: "protein", title: "비건 단백질 완벽 가이드" },
  { id: "nutrients", title: "영양소 결핍 주의사항" },
  { id: "meal-plan", title: "일주일 비건 식단표 (한국식)" },
  { id: "benefits", title: "비건 다이어트의 효과" },
  { id: "tips", title: "성공을 위한 실전 팁" },
  { id: "cautions", title: "주의사항 및 피해야 하는 사람" },
];

const FAQ_ITEMS = [
  {
    question: "비건 식단으로 충분한 단백질을 섭취할 수 있나요?",
    answer:
      "네, 충분히 가능해요! 두부(100g당 8g), 템페(100g당 19g), 렌틸콩(100g당 9g), 병아리콩(100g당 9g), 퀴노아(100g당 4.4g), 땅콩버터, 에다마메 등을 조합하면 하루 권장 단백질을 충분히 채울 수 있어요. 핵심은 다양한 식물성 단백질을 골고루 먹는 거예요.",
  },
  {
    question: "비건 다이어트를 하면 정말 살이 빠지나요?",
    answer:
      "연구에 따르면 비건 식단을 실천하는 사람들이 잡식 식단보다 평균 BMI가 낮고, 비만율도 낮아요. 식물성 식단은 자연스럽게 식이섬유가 많고 칼로리 밀도가 낮아서, 같은 양을 먹어도 칼로리가 적어요. 다만 비건 정크푸드(감자튀김, 비건 아이스크림 등)를 많이 먹으면 살은 안 빠져요.",
  },
  {
    question: "비건 다이어트에서 B12는 어떻게 보충하나요?",
    answer:
      "비타민 B12는 식물성 식품에 거의 없어서 반드시 보충해야 해요. 방법은 세 가지예요: 1) B12 보충제(가장 확실), 2) B12 강화 식품(두유, 시리얼, 영양효모), 3) 김이나 해조류(소량 포함, 하지만 보충제 권장). 비건 생활 시 B12 보충은 선택이 아니라 필수예요.",
  },
  {
    question: "한국에서 비건 식단을 유지하기 어렵지 않나요?",
    answer:
      "의외로 한식은 비건 친화적이에요! 나물 반찬(시금치, 콩나물, 도라지), 두부 요리(순두부, 두부조림, 두부전), 김치(젓갈 빼면), 잡곡밥, 된장찌개(멸치 대신 다시마 육수), 비빔밥(달걀 빼면) 등 이미 비건인 한식이 많아요. 외식 시 '고기 빼주세요'만 말하면 되는 메뉴가 꽤 있어요.",
  },
  {
    question: "비건 다이어트를 갑자기 시작해도 되나요?",
    answer:
      "갑자기 바꾸면 소화 불량이나 가스가 많이 찰 수 있어요. 장내 미생물이 식이섬유를 많이 처리하는 데 적응 시간이 필요하거든요. 1~2주에 걸쳐 고기를 서서히 줄이고, 콩류·채소를 점점 늘리는 방식으로 전환하는 것을 추천해요.",
  },
  {
    question: "비건 다이어트를 하면서 운동해도 괜찮나요?",
    answer:
      "물론이에요! 비건 식단으로도 충분히 운동 퍼포먼스를 유지할 수 있어요. 핵심은 운동 전후로 충분한 탄수화물(에너지)과 단백질(근회복)을 섭취하는 거예요. 콩, 두부, 템페, 비건 프로틴 파우더(완두콩·현미 단백질) 등을 활용하면 돼요. 세계적인 운동선수 중에도 비건이 많아요.",
  },
];

const RELATED_CALC = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
];

const RELATED_DIET = [
  { title: "지중해식 다이어트 가이드", href: "/diet/mediterranean/", emoji: "🫒" },
  { title: "고단백 다이어트 가이드", href: "/diet/high-protein/", emoji: "💪" },
  { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋" },
];

const RELATED_PRODUCTS = [
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
  {
    title: "다이어트 도시락 비교",
    href: "/products/?category=meal-box",
    emoji: "🍱",
  },
];

export default function VeganPage() {
  const jsonLd = [
    createArticleSchema({
      title: "비건 다이어트 완벽 가이드",
      description:
        "비건(채식) 다이어트의 원리, 단백질 소스, 영양소 결핍 예방법, 한국식 일주일 식단표, 효과, 주의사항을 총정리한 완벽 가이드",
      url: "https://caloring.kr/diet/vegan/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단 가이드", href: "/diet/" },
      { label: "비건 다이어트" },
    ]),
  ];

  return (
    <WikiLayout
      title="비건 다이어트 완벽 가이드"
      description="식물성 식단으로 건강하게 살 빼는 방법. 단백질 걱정 없이 비건 다이어트하는 법을 알려줄게."
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "다이어트 식단 가이드", href: "/diet/" },
        { label: "비건 다이어트" },
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
              비건 다이어트는{" "}
              <strong className="text-foreground">
                동물성 식품을 제외하고 식물성 식품만으로 식단을 구성
              </strong>
              하는 방식이야
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              식물성 식단은 자연스럽게{" "}
              <strong className="text-foreground">
                칼로리 밀도가 낮고 식이섬유가 풍부
              </strong>
              해서 체중 감량에 효과적
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">
                비타민 B12, 철분, 오메가-3, 칼슘
              </strong>
              은 식물성 식단에서 부족하기 쉬우므로 반드시 보충 전략이 필요해
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              두부, 콩, 템페, 렌틸콩 등{" "}
              <strong className="text-foreground">
                다양한 식물성 단백질을 조합
              </strong>
              하면 완전한 아미노산을 섭취할 수 있어
            </span>
          </li>
        </ul>
      </div>

      {/* Section: What is */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        비건 다이어트란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        비건(Vegan) 다이어트는{" "}
        <strong className="text-foreground">
          고기, 생선, 달걀, 유제품 등 모든 동물성 식품을 제외
        </strong>
        하고 식물성 식품만으로 식단을 구성하는 방식이야. 윤리적·환경적 이유로
        시작하는 사람도 많지만, 최근에는{" "}
        <strong className="text-foreground">건강과 체중 관리 목적</strong>
        으로 비건 식단을 선택하는 사람이 크게 늘고 있어.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        비건이 다이어트에 효과적인 이유는 간단해. 식물성 식품은 대부분{" "}
        <strong className="text-foreground">
          칼로리 밀도가 낮고, 식이섬유가 풍부
        </strong>
        해서 같은 양을 먹어도 칼로리가 적고 포만감은 오래 가거든.
        2016년 <em>Journal of General Internal Medicine</em>에 발표된 메타
        분석에 따르면, 채식 식단을 실천한 그룹이 비채식 그룹보다{" "}
        <strong className="text-foreground">평균 2.02kg 더 많이 감량</strong>
        했어.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        다만 비건 다이어트를 올바르게 하려면{" "}
        <strong className="text-foreground">
          영양 균형에 대한 기본 지식
        </strong>
        이 필요해. 단순히 고기만 빼면 영양소가 부족해질 수 있거든. 이 가이드
        에서 비건 다이어트를 건강하게 하는 방법을 자세히 알려줄게.
      </p>

      {/* Section: Types */}
      <h2 id="types" className="mt-10 mb-4 text-xl font-bold">
        채식의 단계별 종류
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        채식에도 여러 단계가 있어. 처음부터 완전 비건이 부담스럽다면 단계적으로
        접근하는 것도 좋은 방법이야.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                유형
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                고기
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                생선
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                달걀
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                유제품
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                설명
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                플렉시테리언
              </td>
              <td className="border border-border px-4 py-2 text-center">가끔</td>
              <td className="border border-border px-4 py-2 text-center">가끔</td>
              <td className="border border-border px-4 py-2 text-center">O</td>
              <td className="border border-border px-4 py-2 text-center">O</td>
              <td className="border border-border px-4 py-2">
                유연한 채식. 평소 채식 위주, 가끔 고기
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                페스코
              </td>
              <td className="border border-border px-4 py-2 text-center">X</td>
              <td className="border border-border px-4 py-2 text-center">O</td>
              <td className="border border-border px-4 py-2 text-center">O</td>
              <td className="border border-border px-4 py-2 text-center">O</td>
              <td className="border border-border px-4 py-2">
                고기 X, 생선 O. 오메가-3 보충 용이
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                락토-오보
              </td>
              <td className="border border-border px-4 py-2 text-center">X</td>
              <td className="border border-border px-4 py-2 text-center">X</td>
              <td className="border border-border px-4 py-2 text-center">O</td>
              <td className="border border-border px-4 py-2 text-center">O</td>
              <td className="border border-border px-4 py-2">
                달걀·유제품 허용. 가장 보편적 채식
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                비건
              </td>
              <td className="border border-border px-4 py-2 text-center">X</td>
              <td className="border border-border px-4 py-2 text-center">X</td>
              <td className="border border-border px-4 py-2 text-center">X</td>
              <td className="border border-border px-4 py-2 text-center">X</td>
              <td className="border border-border px-4 py-2">
                완전 식물성만. 꿀도 제외
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">다이어트 목적이라면?</strong>{" "}
          처음부터 완전 비건이 아니어도 괜찮아. 플렉시테리언이나 페스코부터
          시작해서 몸의 반응을 보면서 서서히 식물성 비율을 높여가는 게
          현실적이고 효과적이야.
        </p>
      </div>

      {/* Section: Protein */}
      <h2 id="protein" className="mt-10 mb-4 text-xl font-bold">
        비건 단백질 완벽 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        &quot;고기 안 먹으면 단백질은 어디서 얻어?&quot; 비건 다이어트에서 가장
        많이 받는 질문이야. 결론부터 말하면,{" "}
        <strong className="text-foreground">
          다양한 식물성 단백질을 조합하면 충분히 가능해
        </strong>
        . 중요한 건 한 가지만 먹는 게 아니라 여러 소스를 섞는 거야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        주요 식물성 단백질 소스
      </h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                단백질 (100g당)
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                칼로리 (100g당)
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                특징
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                두부 (부침용)
              </td>
              <td className="border border-border px-4 py-2 text-center">8g</td>
              <td className="border border-border px-4 py-2 text-center">76kcal</td>
              <td className="border border-border px-4 py-2">
                한식 최고의 비건 단백질. 구이, 조림, 찌개 만능
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                템페
              </td>
              <td className="border border-border px-4 py-2 text-center">19g</td>
              <td className="border border-border px-4 py-2 text-center">192kcal</td>
              <td className="border border-border px-4 py-2">
                발효 콩 제품. 두부보다 단백질 2배 이상
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                렌틸콩 (삶은 것)
              </td>
              <td className="border border-border px-4 py-2 text-center">9g</td>
              <td className="border border-border px-4 py-2 text-center">116kcal</td>
              <td className="border border-border px-4 py-2">
                철분, 식이섬유도 풍부. 밥에 넣거나 카레에 활용
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                병아리콩 (삶은 것)
              </td>
              <td className="border border-border px-4 py-2 text-center">9g</td>
              <td className="border border-border px-4 py-2 text-center">164kcal</td>
              <td className="border border-border px-4 py-2">
                샐러드, 후무스, 카레에 활용
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                에다마메 (풋콩)
              </td>
              <td className="border border-border px-4 py-2 text-center">11g</td>
              <td className="border border-border px-4 py-2 text-center">122kcal</td>
              <td className="border border-border px-4 py-2">
                완전 단백질(필수 아미노산 모두 포함)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                퀴노아 (삶은 것)
              </td>
              <td className="border border-border px-4 py-2 text-center">4.4g</td>
              <td className="border border-border px-4 py-2 text-center">120kcal</td>
              <td className="border border-border px-4 py-2">
                유사 곡물. 완전 단백질. 밥 대용 가능
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                땅콩버터
              </td>
              <td className="border border-border px-4 py-2 text-center">25g</td>
              <td className="border border-border px-4 py-2 text-center">588kcal</td>
              <td className="border border-border px-4 py-2">
                고칼로리 주의. 1큰술(16g) 단위로 사용
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                검정콩 (삶은 것)
              </td>
              <td className="border border-border px-4 py-2 text-center">8.9g</td>
              <td className="border border-border px-4 py-2 text-center">132kcal</td>
              <td className="border border-border px-4 py-2">
                한국에서 구하기 쉬움. 밥에 넣거나 조림
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                영양효모
              </td>
              <td className="border border-border px-4 py-2 text-center">50g</td>
              <td className="border border-border px-4 py-2 text-center">325kcal</td>
              <td className="border border-border px-4 py-2">
                치즈 맛 대용. B12 강화 제품 많음. 1~2큰술 활용
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        &quot;완전 단백질&quot; 조합법
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        대부분의 식물성 단백질은 특정 필수 아미노산이 부족해(불완전 단백질).
        하지만{" "}
        <strong className="text-foreground">
          서로 보완하는 식품을 함께 먹으면 완전한 아미노산 프로필
        </strong>
        을 만들 수 있어. 같은 끼니에 먹지 않아도, 하루 안에 다양하게 섭취하면 돼.
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">곡물 + 콩류:</strong> 잡곡밥 +
            된장찌개(콩), 현미밥 + 렌틸콩 카레, 통밀빵 + 땅콩버터
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">콩류 + 견과/씨앗:</strong>{" "}
            후무스(병아리콩 + 참깨), 두부 샐러드 + 호두
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">완전 단백질 식품:</strong>{" "}
            대두(두부, 템페, 에다마메), 퀴노아, 메밀, 치아시드는 단독으로도
            완전 단백질이야
          </span>
        </li>
      </ul>

      {/* Section: Nutrients */}
      <h2 id="nutrients" className="mt-10 mb-4 text-xl font-bold">
        영양소 결핍 주의사항
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        비건 식단에서{" "}
        <strong className="text-foreground">
          반드시 신경 써야 하는 영양소 5가지
        </strong>
        가 있어. 이걸 무시하면 건강에 문제가 생길 수 있으니 꼭 체크해.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                영양소
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                결핍 시 증상
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식물성 소스
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                보충 방법
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                비타민 B12
              </td>
              <td className="border border-border px-4 py-2">
                피로, 빈혈, 신경 손상, 기억력 저하
              </td>
              <td className="border border-border px-4 py-2">
                영양효모, B12 강화 두유, 김(소량)
              </td>
              <td className="border border-border px-4 py-2 font-bold text-red-600 dark:text-red-400">
                보충제 필수
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                철분
              </td>
              <td className="border border-border px-4 py-2">
                빈혈, 피로, 어지러움, 면역력 저하
              </td>
              <td className="border border-border px-4 py-2">
                시금치, 렌틸콩, 두부, 검정콩, 깨
              </td>
              <td className="border border-border px-4 py-2">
                비타민C와 함께 섭취 시 흡수율 증가
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                오메가-3 (DHA/EPA)
              </td>
              <td className="border border-border px-4 py-2">
                뇌 기능 저하, 피부 건조, 염증 증가
              </td>
              <td className="border border-border px-4 py-2">
                들기름, 아마씨, 호두, 치아시드 (ALA)
              </td>
              <td className="border border-border px-4 py-2">
                해조류 유래 DHA 보충제 추천
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                칼슘
              </td>
              <td className="border border-border px-4 py-2">
                골다공증, 근육 경련, 치아 약화
              </td>
              <td className="border border-border px-4 py-2">
                두부(칼슘 응고), 브로콜리, 케일, 칼슘 강화 두유
              </td>
              <td className="border border-border px-4 py-2">
                칼슘 강화 식품 + 비타민D 함께
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                아연
              </td>
              <td className="border border-border px-4 py-2">
                면역력 저하, 상처 회복 지연, 탈모
              </td>
              <td className="border border-border px-4 py-2">
                호박씨, 렌틸콩, 병아리콩, 캐슈넛, 귀리
              </td>
              <td className="border border-border px-4 py-2">
                콩류 불리기/발아로 흡수율 향상
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">비건 필수 보충제:</strong>{" "}
          B12는 보충제 없이는 식물성 식품만으로 충분히 섭취하기 어려워.
          비건 멀티비타민(B12 + D3 + 오메가-3 포함)을 하나 챙기면 간편하게
          해결 가능해. 6개월마다 혈액 검사로 영양 상태를 체크하는 것도 추천해.
        </p>
      </div>

      {/* Section: Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 비건 식단표 (한국식)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한국 식재료를 활용한 비건 일주일 식단표야. 하루 총 칼로리는{" "}
        <strong className="text-foreground">약 1,400~1,600kcal</strong>,
        단백질은 <strong className="text-foreground">하루 50~65g</strong>을
        목표로 했어.{" "}
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
                단백질(g)
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                월
              </td>
              <td className="border border-border px-3 py-2">
                오트밀 + 두유 + 바나나 + 아몬드
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥(반 공기) + 순두부찌개(채수) + 시금치나물 + 콩나물무침
              </td>
              <td className="border border-border px-3 py-2">
                두부스테이크(들기름) + 브로콜리 + 현미밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                55
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                화
              </td>
              <td className="border border-border px-3 py-2">
                통밀 토스트 + 아보카도 + 땅콩버터
              </td>
              <td className="border border-border px-3 py-2">
                메밀국수 + 채소 토핑 + 두부 + 들기름 드레싱
              </td>
              <td className="border border-border px-3 py-2">
                렌틸콩 카레 + 잡곡밥(반 공기) + 샐러드
              </td>
              <td className="border border-border px-3 py-2 text-center">
                58
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                수
              </td>
              <td className="border border-border px-3 py-2">
                두유 스무디(바나나+시금치+땅콩버터+두유)
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥(반 공기) + 된장찌개(두부, 호박, 다시마) + 나물 2종
              </td>
              <td className="border border-border px-3 py-2">
                템페 볶음 + 버섯구이 + 현미밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                62
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                목
              </td>
              <td className="border border-border px-3 py-2">
                그래놀라(비건) + 두유 + 블루베리
              </td>
              <td className="border border-border px-3 py-2">
                비빔밥(두부, 나물 5종, 고추장) + 콩나물국
              </td>
              <td className="border border-border px-3 py-2">
                병아리콩 샐러드 + 후무스 + 통밀빵
              </td>
              <td className="border border-border px-3 py-2 text-center">
                56
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                금
              </td>
              <td className="border border-border px-3 py-2">
                치아 푸딩(치아시드+두유+과일)
              </td>
              <td className="border border-border px-3 py-2">
                보리밥(반 공기) + 두부조림 + 미역국(다시마) + 깻잎
              </td>
              <td className="border border-border px-3 py-2">
                채소 볶음면(곤약면, 두부, 버섯, 파프리카)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                52
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                토
              </td>
              <td className="border border-border px-3 py-2">
                두부 스크램블 + 시금치 + 토마토 + 통밀 토스트
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥(반 공기) + 김치찌개(두부, 채수) + 콩자반 + 나물
              </td>
              <td className="border border-border px-3 py-2">
                에다마메 볶음밥 + 된장국 + 김구이
              </td>
              <td className="border border-border px-3 py-2 text-center">
                60
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                일
              </td>
              <td className="border border-border px-3 py-2">
                오트밀 + 호두 + 바나나 + 메이플시럽 약간
              </td>
              <td className="border border-border px-3 py-2">
                잡채(당면, 시금치, 버섯, 파프리카) + 잡곡밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2">
                채소 카레(렌틸콩, 감자, 당근) + 현미밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                54
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
          에 맞게 양을 조절하세요. 간식으로는 에다마메, 견과류 한 줌,
          과일 + 땅콩버터, 두유 라떼 등이 좋아요. 핵심은{" "}
          <strong className="text-foreground">
            매 끼 콩류 또는 두부 포함
          </strong>
          시키는 거예요.
        </p>
      </div>

      {/* Section: Benefits */}
      <h2 id="benefits" className="mt-10 mb-4 text-xl font-bold">
        비건 다이어트의 효과
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">체중 감량</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        식물성 식품은 대체로{" "}
        <strong className="text-foreground">칼로리 밀도가 낮아</strong> 같은
        양을 먹어도 칼로리 섭취가 줄어들어. 2015년 <em>Nutrition Reviews</em>의
        메타 분석에 따르면, 비건 식단 그룹이 비채식 그룹 대비{" "}
        <strong className="text-foreground">평균 4.5~6kg 더 감량</strong>
        했어. 특히 식이섬유가 풍부해 포만감이 오래 유지되는 것이 핵심 이유야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">심혈관 건강</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        식물성 식단은 포화지방과 콜레스테롤 섭취를 자연스럽게 줄여줘. 연구에
        따르면 비건 식단을 실천하는 사람들의{" "}
        <strong className="text-foreground">
          심혈관 질환 위험이 25~32% 감소
        </strong>
        한다는 결과가 있어. LDL 콜레스테롤, 중성지방, 혈압 모두 개선 경향을
        보여.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">장 건강</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        식물성 식품의{" "}
        <strong className="text-foreground">
          풍부한 식이섬유가 장내 유익균을 키워줘
        </strong>
        . 건강한 장내 미생물은 면역력 강화, 염증 감소, 심지어 기분 개선
        (장-뇌 축)과도 연결돼. 비건 식단을 시작하면 초기에 가스가 많이 찰 수
        있는데, 이건 장내 미생물이 적응하는 과정이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타 효과</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">제2형 당뇨 예방:</strong>{" "}
            식물성 식단이 인슐린 감수성을 개선한다는 연구 결과 다수
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">피부 개선:</strong> 유제품과
            고지방 동물성 식품을 줄이면 피부 트러블이 개선되는 경우가 많음
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">환경 기여:</strong> 축산업의
            탄소 배출량 감소에 기여 (다이어트 + 지구 건강 동시에)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">에너지 안정:</strong> 식이섬유와
            복합 탄수화물 위주 식단으로 혈당이 안정되어 하루 종일 에너지가 일정.{" "}
            <Link
              href="/diet/blood-sugar/"
              className="text-primary hover:underline font-medium"
            >
              혈당 다이어트
            </Link>
            와 시너지 효과
          </span>
        </li>
      </ul>

      {/* Section: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        성공을 위한 실전 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        한국에서 비건하기 쉬운 메뉴
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">집밥:</strong> 잡곡밥 + 된장찌개
            (다시마 육수) + 두부 + 나물 반찬 3~4종 = 완벽한 비건 한 상
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">비빔밥:</strong> 달걀과 고기만
            빼면 비건. 나물 비빔밥 + 고추장(일부 고추장에 멸치 성분 있으니 확인)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">김밥:</strong> 야채김밥 + 두부
            넣으면 단백질도 보충. 참기름으로 맛 UP
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">떡볶이:</strong> 어묵 빼고
            채소(양배추, 당근, 대파) 넣으면 비건. 다만 고칼로리 주의
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">편의점:</strong> 두유, 견과류,
            바나나, 에다마메, 고구마 조합이면 간편한 비건 식사
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        비건 초보 실수 방지
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">비건 정크푸드 주의:</strong>{" "}
            감자튀김, 비건 아이스크림, 비건 과자도 고칼로리야. 비건이라고
            다 건강한 건 아니야.{" "}
            <Link
              href="/calc/calorie/"
              className="text-primary hover:underline font-medium"
            >
              칼로리 계산기
            </Link>
            로 적정 칼로리를 확인해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">탄수화물만 먹기:</strong> 밥 +
            김치 + 나물만 먹으면 단백질이 부족해. 매 끼 두부, 콩, 템페 등
            단백질 소스를 꼭 포함시켜
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">B12 보충 안 하기:</strong>{" "}
            가장 흔한 실수. B12 결핍은 수개월~수년 후에 증상이 나타나서
            뒤늦게 깨닫는 경우가 많아. 비건 시작일 = 보충제 시작일로 생각해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">한 가지만 먹기:</strong> 두부만,
            콩만 먹으면 특정 영양소가 부족해져. 다양한 채소, 곡류, 콩류, 견과류를
            골고루 먹는 게 핵심
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        단계적 전환 가이드
      </h3>
      <ol className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">1주.</span>
          <span>
            <strong className="text-foreground">주 1~2끼를 비건으로:</strong>{" "}
            &quot;월요일 점심은 비건&quot;처럼 정해진 끼니만 채식으로 시작
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">2주.</span>
          <span>
            <strong className="text-foreground">하루 1끼를 비건으로:</strong>{" "}
            매일 점심 또는 저녁 한 끼를 식물성으로 전환
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">3주.</span>
          <span>
            <strong className="text-foreground">하루 2끼를 비건으로:</strong>{" "}
            아침+점심을 비건으로. 저녁에만 동물성 식품 허용
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">4주~.</span>
          <span>
            <strong className="text-foreground">완전 비건 도전:</strong>{" "}
            자신감이 생기면 모든 끼니를 비건으로. B12 보충제 시작
          </span>
        </li>
      </ol>

      {/* Section: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항 및 피해야 하는 사람
      </h2>

      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              B12 보충은 필수:
            </strong>{" "}
            다시 한 번 강조하지만, B12는 식물성 식품에 거의 없어. 보충제를
            꼭 챙겨. 결핍 시 돌이킬 수 없는 신경 손상이 생길 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              급격한 전환 피하기:
            </strong>{" "}
            갑자기 비건으로 바꾸면 소화 불량, 가스, 복부 팽만감이 올 수 있어.
            2~4주에 걸쳐 서서히 전환하는 것을 추천해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              칼로리 부족 주의:
            </strong>{" "}
            식물성 식품은 칼로리 밀도가 낮아서, 평소보다 양을 많이 먹어야
            필요한 칼로리를 채울 수 있어.{" "}
            <Link
              href="/calc/bmr/"
              className="text-primary hover:underline font-medium"
            >
              기초대사량 계산기
            </Link>
            로 최소 필요 칼로리를 확인하고, 그 이하로 떨어지지 않도록 주의
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              정기적 혈액 검사:
            </strong>{" "}
            비건 생활을 시작하면 6개월~1년마다 B12, 철분(페리틴), 비타민D,
            아연 수치를 확인하는 것을 추천해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              사회적 상황 대처:
            </strong>{" "}
            한국 회식 문화에서 비건을 고수하기 어려울 수 있어. 완벽주의에
            빠지지 말고, 가능한 범위에서 식물성 비율을 높이는 것만으로도
            충분히 효과적이야
          </span>
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-red-200 bg-red-50/50 p-4 dark:border-red-900 dark:bg-red-950/30">
        <p className="mb-2 text-sm font-bold text-foreground">
          비건 다이어트를 특히 주의해야 하는 사람
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">임산부 및 수유부:</strong>{" "}
              태아·영아 발달에 B12, 철분, DHA 등이 중요. 비건 유지 시 반드시
              전문 영양 상담 필요
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">성장기 어린이·청소년:</strong>{" "}
              영양소 필요량이 높은 시기. 비건 식단 시 소아과/영양사 상담 권장
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">빈혈이 있는 분:</strong>{" "}
              식물성 철분(비헴철)은 흡수율이 낮아 빈혈이 악화될 수 있음.
              철분 보충제와 비타민C 함께 섭취 필수
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">섭식 장애 이력자:</strong>{" "}
              식품군 제한이 과도한 식이 제한으로 이어질 수 있음. 심리 상담과
              병행 권장
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">콩 알레르기:</strong>{" "}
              비건의 주요 단백질원인 두부, 템페, 두유를 먹을 수 없으므로
              대체 단백질 확보가 어려움
            </span>
          </li>
        </ul>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        비건 다이어트를 시작하기 전에 현재 건강 상태를 확인해봐.{" "}
        <Link
          href="/calc/bmi/"
          className="text-primary hover:underline font-medium"
        >
          BMI 계산기
        </Link>
        와{" "}
        <Link
          href="/calc/body-fat/"
          className="text-primary hover:underline font-medium"
        >
          체지방 계산기
        </Link>
        로 현재 상태를 파악하고, 가능하면 시작 전 혈액 검사(B12, 철분,
        비타민D)를 받아두면 비교 기준이 돼서 좋아.
      </p>

      {/* Closing CTA */}
      <div className="my-8 rounded-xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          비건 다이어트 시작 전, 내 몸 상태부터 체크하세요
        </p>
        <p className="mb-4 font-bold">
          나에게 맞는 칼로리와 영양 목표를 확인해보세요
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
