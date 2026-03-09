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
  title: "혈당 다이어트(GI 식단) 완벽 가이드 — 저GI 식단표, 혈당 관리법",
  description:
    "혈당 다이어트(GI 식단)의 원리, 저GI vs 고GI 식품 분류표, 혈당 스파이크 방지법, 일주일 저GI 식단표, 주의사항까지 총정리. 혈당 관리로 건강하게 살 빼는 완벽 가이드.",
  path: "/diet/blood-sugar/",
  keywords: [
    "혈당 다이어트",
    "GI 식단",
    "저혈당지수 식단",
    "혈당 관리",
    "저GI 식품",
    "혈당 스파이크",
    "혈당지수",
    "GI지수 낮은 음식",
    "혈당 다이어트 식단표",
    "인슐린 다이어트",
    "혈당 관리 식단",
    "GL 다이어트",
  ],
});

const TOC = [
  { id: "what-is", title: "혈당 다이어트란?" },
  { id: "gi-explained", title: "GI(혈당지수) 완벽 이해" },
  { id: "gi-foods", title: "저GI vs 고GI 식품 분류표" },
  { id: "spike-prevention", title: "혈당 스파이크 방지법" },
  { id: "meal-plan", title: "일주일 저GI 식단표" },
  { id: "benefits", title: "혈당 다이어트의 효과" },
  { id: "tips", title: "성공을 위한 실전 팁" },
  { id: "cautions", title: "주의사항" },
];

const FAQ_ITEMS = [
  {
    question: "혈당 다이어트는 당뇨 환자만 하는 건가요?",
    answer:
      "아니에요! 혈당 관리는 누구에게나 유익해요. 혈당이 안정되면 식욕 조절이 쉬워지고, 체지방이 잘 빠지고, 식후 졸림도 줄어들어요. 당뇨 환자에게 특히 중요하지만, 건강한 사람도 혈당 다이어트로 더 효과적인 체중 관리가 가능해요.",
  },
  {
    question: "GI가 낮은 음식만 먹으면 되나요?",
    answer:
      "GI만 보면 안 돼요. 수박은 GI가 72로 높지만 실제로 먹는 양(GL)을 고려하면 혈당에 큰 영향을 주지 않아요. 반대로 GI가 낮아도 많이 먹으면 혈당이 올라가요. GI + 양(GL) + 전체 식사 구성을 함께 고려하는 것이 중요해요.",
  },
  {
    question: "백미밥 대신 뭘 먹어야 하나요?",
    answer:
      "현미밥(GI 56), 잡곡밥(GI 50~55), 보리밥(GI 50), 콩밥이 좋은 대안이에요. 완전히 바꾸기 어려우면 백미에 잡곡을 섞어서 시작해보세요. 곤약밥(GI 매우 낮음)을 반반 섞는 것도 좋은 방법이에요.",
  },
  {
    question: "과일은 당이 많은데 먹어도 되나요?",
    answer:
      "과일은 종류에 따라 달라요. 사과(GI 36), 배(GI 33), 자몽(GI 25), 체리(GI 22)는 저GI라 적당량 먹어도 돼요. 수박(GI 72), 파인애플(GI 66), 망고(GI 51)는 소량만 먹는 것이 좋아요. 과일은 식후보다 단독으로, 또는 견과류와 함께 먹으면 혈당 반응이 완만해져요.",
  },
  {
    question: "혈당 다이어트는 탄수화물을 아예 안 먹는 건가요?",
    answer:
      "아니에요! 키토제닉과 달리 혈당 다이어트는 탄수화물 자체를 제한하지 않아요. '나쁜 탄수화물(고GI)'을 '좋은 탄수화물(저GI)'로 바꾸는 거예요. 현미, 통밀, 귀리, 콩류 등 저GI 탄수화물은 오히려 적극적으로 먹어요.",
  },
  {
    question: "식사 순서가 정말 혈당에 영향을 주나요?",
    answer:
      "네, 여러 연구에서 확인되었어요. 채소(식이섬유) → 단백질·지방 → 탄수화물 순서로 먹으면 같은 음식이라도 혈당 상승이 30~40% 완만해진다는 연구 결과가 있어요. 식전에 식초를 탄 물을 마시는 것도 혈당 조절에 도움이 된다는 연구가 있고요.",
  },
];

const RELATED_CALC = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
];

const RELATED_DIET = [
  { title: "지중해식 다이어트 가이드", href: "/diet/mediterranean/", emoji: "🫒" },
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
    title: "곤약 제품 비교",
    href: "/products/?category=konjac",
    emoji: "🍜",
  },
  {
    title: "다이어트 간식 비교",
    href: "/products/?category=snack",
    emoji: "🍪",
  },
];

export default function BloodSugarPage() {
  const jsonLd = [
    createArticleSchema({
      title: "혈당 다이어트(GI 식단) 완벽 가이드",
      description:
        "혈당 다이어트의 원리, 저GI·고GI 식품 분류표, 혈당 스파이크 방지법, 일주일 식단표, 주의사항을 총정리한 완벽 가이드",
      url: "https://caloring.kr/diet/blood-sugar/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단 가이드", href: "/diet/" },
      { label: "혈당 다이어트(GI 식단)" },
    ]),
  ];

  return (
    <WikiLayout
      title="혈당 다이어트(GI 식단) 완벽 가이드"
      description="혈당을 안정시키면 살이 잘 빠지고, 배도 덜 고프고, 식후 졸림도 사라져. 저GI 식단의 모든 것을 알려줄게."
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "다이어트 식단 가이드", href: "/diet/" },
        { label: "혈당 다이어트(GI 식단)" },
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
              혈당 다이어트는{" "}
              <strong className="text-foreground">
                GI(혈당지수)가 낮은 식품 위주로 먹어 혈당을 안정시키는
              </strong>{" "}
              식이요법이야
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              혈당이 안정되면{" "}
              <strong className="text-foreground">
                인슐린 분비가 줄어들어 체지방 축적이 감소
              </strong>
              하고, 식욕 조절이 쉬워져
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              탄수화물을 끊는 게 아니라{" "}
              <strong className="text-foreground">
                &quot;나쁜 탄수화물&quot;을 &quot;좋은 탄수화물&quot;로 바꾸는
              </strong>{" "}
              방식이라 실천이 쉬움
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              <strong className="text-foreground">
                식사 순서(채소→단백질→탄수화물)
              </strong>
              만 바꿔도 같은 음식의 혈당 반응이 30~40% 줄어듦
            </span>
          </li>
        </ul>
      </div>

      {/* Section: What is */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        혈당 다이어트란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        혈당 다이어트는{" "}
        <strong className="text-foreground">
          식후 혈당이 급격히 올라가는 것(혈당 스파이크)을 방지
        </strong>
        하여 체지방 축적을 줄이는 식이요법이야. 핵심은 GI(Glycemic Index,
        혈당지수)가 낮은 식품을 선택하는 거야.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        왜 혈당이 다이어트와 관련이 있을까? 음식을 먹으면 혈당이 올라가고,
        우리 몸은{" "}
        <strong className="text-foreground">인슐린</strong>을 분비해서
        혈당을 낮춰. 이때 인슐린은 혈중 포도당을 세포에 저장하는데, 남는 양은{" "}
        <strong className="text-foreground">체지방으로 전환</strong>시켜.
        혈당이 급격히 올라갈수록 인슐린도 과다 분비되고, 지방 축적량도 늘어나는
        거지.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        게다가 인슐린이 과다 분비되면 혈당이 너무 빨리 떨어져서{" "}
        <strong className="text-foreground">
          금방 또 배가 고파지고, 단 것이 당기는
        </strong>{" "}
        악순환에 빠지게 돼. 반대로 혈당을 천천히 올리면 인슐린도 적게 나오고,
        포만감이 오래 가며, 체지방 축적이 줄어드는 선순환이 만들어져.
      </p>

      {/* Section: GI Explained */}
      <h2 id="gi-explained" className="mt-10 mb-4 text-xl font-bold">
        GI(혈당지수) 완벽 이해
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        GI(Glycemic Index, 혈당지수)는{" "}
        <strong className="text-foreground">
          음식을 먹은 후 혈당이 얼마나 빨리, 얼마나 높이 올라가는지
        </strong>
        를 수치화한 거야. 기준은 순수 포도당(glucose) = 100으로, 이에 비해
        각 식품의 혈당 상승 정도를 0~100 사이 수치로 표현해.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                GI 분류
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                GI 수치
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                혈당 반응
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                다이어트 적합도
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr className="bg-green-50/30 dark:bg-green-950/10">
              <td className="border border-border px-4 py-2 font-bold text-green-700 dark:text-green-400">
                저GI
              </td>
              <td className="border border-border px-4 py-2 text-center font-bold">
                55 이하
              </td>
              <td className="border border-border px-4 py-2">
                혈당이 천천히, 완만하게 상승
              </td>
              <td className="border border-border px-4 py-2">
                적극 추천 (매일 먹기)
              </td>
            </tr>
            <tr className="bg-amber-50/30 dark:bg-amber-950/10">
              <td className="border border-border px-4 py-2 font-bold text-amber-700 dark:text-amber-400">
                중GI
              </td>
              <td className="border border-border px-4 py-2 text-center font-bold">
                56~69
              </td>
              <td className="border border-border px-4 py-2">
                보통 속도로 상승
              </td>
              <td className="border border-border px-4 py-2">
                적당량 OK (양 조절)
              </td>
            </tr>
            <tr className="bg-red-50/30 dark:bg-red-950/10">
              <td className="border border-border px-4 py-2 font-bold text-red-600 dark:text-red-400">
                고GI
              </td>
              <td className="border border-border px-4 py-2 text-center font-bold">
                70 이상
              </td>
              <td className="border border-border px-4 py-2">
                혈당이 빠르고 급격하게 상승
              </td>
              <td className="border border-border px-4 py-2">
                최소화 (가끔, 소량만)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        GL(혈당부하)도 함께 봐야 해
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        GI만으로는 부족해.{" "}
        <strong className="text-foreground">
          GL(Glycemic Load, 혈당부하) = GI x 실제 탄수화물량(g) / 100
        </strong>
        이야. 예를 들어 수박은 GI 72(고GI)이지만, 수분이 대부분이라 1회
        섭취량의 탄수화물이 적어서 GL은 4(저GL)야. 반면 백미밥은 GI 73, 1회
        탄수화물 약 50g이라 GL은 36(고GL)이지. 실제 다이어트에서는{" "}
        <strong className="text-foreground">GI + GL을 함께 고려</strong>하는 게
        더 정확해.
      </p>

      <div className="my-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">GL 기준:</strong> 저GL = 10 이하,
          중GL = 11~19, 고GL = 20 이상. 한 끼 식사의 총 GL을 20 이하로 맞추면
          혈당 관리에 효과적이야.
        </p>
      </div>

      {/* Section: GI Foods Table */}
      <h2 id="gi-foods" className="mt-10 mb-4 text-xl font-bold">
        저GI vs 고GI 식품 분류표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한국인이 자주 먹는 식품을 GI 기준으로 분류했어. 장볼 때 참고하면 좋아.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold text-green-600 dark:text-green-400">
        저GI 식품 (55 이하) — 적극 추천
      </h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-green-50/50 dark:bg-green-950/20">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                카테고리
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품 (GI 수치)
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                곡류
              </td>
              <td className="border border-border px-4 py-2">
                현미(56), 보리(25), 귀리/오트밀(55), 메밀(54), 퀴노아(53)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                면류
              </td>
              <td className="border border-border px-4 py-2">
                메밀국수(46), 곤약면(거의 0), 통밀 파스타(42)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                채소
              </td>
              <td className="border border-border px-4 py-2">
                브로콜리(15), 시금치(15), 양배추(10), 오이(15), 토마토(15), 버섯(15), 콩나물(22)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과일
              </td>
              <td className="border border-border px-4 py-2">
                자몽(25), 사과(36), 배(33), 체리(22), 딸기(41), 키위(52)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                단백질
              </td>
              <td className="border border-border px-4 py-2">
                두부(15), 달걀(0), 닭가슴살(0), 생선(0), 견과류(15~25)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                유제품
              </td>
              <td className="border border-border px-4 py-2">
                우유(27), 그릭요거트(11), 치즈(0~30)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                콩류
              </td>
              <td className="border border-border px-4 py-2">
                렌틸콩(29), 검정콩(30), 병아리콩(33), 강낭콩(24)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold text-red-500">
        고GI 식품 (70 이상) — 최소화
      </h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-red-50/50 dark:bg-red-950/20">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                카테고리
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품 (GI 수치)
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                곡류·밥
              </td>
              <td className="border border-border px-4 py-2">
                백미밥(73), 찹쌀밥(87), 식빵(75), 바게트(95), 떡(82~90)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                면류
              </td>
              <td className="border border-border px-4 py-2">
                흰 쌀국수(70), 라면(73), 우동(70)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                채소·서류
              </td>
              <td className="border border-border px-4 py-2">
                감자(구운 것 85, 삶은 것 78), 옥수수(70), 단호박(75)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과일
              </td>
              <td className="border border-border px-4 py-2">
                수박(72), 파인애플(66, 중GI), 건포도(64, 중GI)
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                간식·음료
              </td>
              <td className="border border-border px-4 py-2">
                설탕(70), 꿀(87), 시리얼(80~90), 과일주스(70+), 탄산음료(70+)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Spike Prevention */}
      <h2 id="spike-prevention" className="mt-10 mb-4 text-xl font-bold">
        혈당 스파이크 방지법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        같은 음식이라도{" "}
        <strong className="text-foreground">먹는 방법에 따라 혈당 반응이 크게 달라져</strong>.
        아래 7가지 방법을 실천하면 혈당 스파이크를 효과적으로 줄일 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        1. 식사 순서를 바꿔라 (가장 중요!)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          채소(식이섬유) → 단백질·지방 → 탄수화물
        </strong>{" "}
        순서로 먹으면, 식이섬유가 위장에 &quot;그물망&quot;을 형성하여 이후 먹는
        탄수화물의 흡수 속도를 늦춰줘. 2019년 <em>Diabetes Care</em> 연구에서
        이 순서대로 먹었을 때{" "}
        <strong className="text-foreground">
          혈당 상승이 최대 73% 감소
        </strong>
        했다는 결과가 나왔어.
      </p>
      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">실전 예시:</strong> 한식이라면
          → 나물 반찬 먼저 → 고기/생선/두부 → 밥을 마지막에. 양식이라면
          → 샐러드 먼저 → 메인 요리 → 빵/파스타를 마지막에 먹어.
        </p>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        2. 식전에 식초물 마시기
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        식사 15~20분 전에{" "}
        <strong className="text-foreground">
          사과식초 1큰술 + 물 200ml
        </strong>
        을 마시면 혈당 상승이 25~30% 줄어든다는 연구 결과가 있어. 식초의 아세트산이
        탄수화물 분해 효소를 억제하여 포도당 흡수를 늦추는 원리야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        3. 탄수화물은 단독으로 먹지 않기
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        빵만, 밥만, 과일만 먹으면 혈당이 급상승해. 반드시{" "}
        <strong className="text-foreground">
          단백질이나 지방과 함께
        </strong>{" "}
        먹어야 해. 예: 빵 + 치즈, 밥 + 고기 + 채소, 과일 + 견과류.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        4. 식후 10~15분 가볍게 움직이기
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        식후 10~15분 안에{" "}
        <strong className="text-foreground">가벼운 산책(10~15분)</strong>을
        하면 근육이 혈중 포도당을 소모하여 혈당 스파이크가 현저히 줄어들어.
        격한 운동이 아니라 가볍게 걷는 것만으로도 효과가 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        5. 천천히 꼭꼭 씹어 먹기
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        빠르게 먹으면 혈당이 급상승해.{" "}
        <strong className="text-foreground">한 입에 20~30번 씹고</strong>,
        식사 시간을 최소 15~20분 이상으로 유지해. 천천히 먹으면 포만
        호르몬(렙틴) 분비도 늘어나서 과식도 방지돼.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        6. 조리법을 바꿔라
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        같은 재료도 조리법에 따라 GI가 달라져:
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">감자:</strong> 구운 감자(GI
            85) &gt; 삶은 감자(GI 78) &gt; 식힌 감자(GI 56). 삶아서 식히면
            저항성 전분이 생겨 GI가 크게 떨어져!
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">밥:</strong> 갓 지은 백미(GI
            73) &gt; 식힌 밥(GI ~50). 냉장 보관 후 먹으면 저항성 전분이 증가
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">파스타:</strong> 오래 삶을수록
            GI 상승. 알덴테(약간 꼬들꼬들)로 삶으면 GI가 낮아
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        7. 식이섬유를 충분히
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        식이섬유는 탄수화물 흡수를 늦추는{" "}
        <strong className="text-foreground">최고의 혈당 조절 도구</strong>야.
        하루 25~30g 이상 섭취를 목표로 해. 채소, 해조류(미역, 다시마),
        곤약, 콩류, 통곡물에 풍부해.
      </p>

      {/* Section: Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 저GI 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        저GI 식품 위주로 구성한 일주일 식단표야. 하루 총 칼로리는{" "}
        <strong className="text-foreground">약 1,400~1,600kcal</strong>,
        매 끼 GL 20 이하를 목표로 했어.{" "}
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
                오트밀 + 블루베리 + 호두 + 삶은 달걀 1개
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥(반 공기) + 고등어구이 + 시금치나물 + 된장국
              </td>
              <td className="border border-border px-3 py-2">
                두부 스테이크 + 브로콜리 + 현미밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,420
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                화
              </td>
              <td className="border border-border px-3 py-2">
                통밀 토스트 + 아보카도 + 달걀 스크램블
              </td>
              <td className="border border-border px-3 py-2">
                메밀국수 + 닭가슴살 + 채소 토핑 + 들기름
              </td>
              <td className="border border-border px-3 py-2">
                연어구이 + 콩나물국 + 잡곡밥(반 공기) + 나물
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,500
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                수
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트(무가당) + 사과 반 개 + 아몬드
              </td>
              <td className="border border-border px-3 py-2">
                보리밥(반 공기) + 된장찌개(두부) + 나물 2종 + 김구이
              </td>
              <td className="border border-border px-3 py-2">
                닭가슴살 샐러드(올리브오일) + 귀리빵 1조각
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,380
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                목
              </td>
              <td className="border border-border px-3 py-2">
                삶은 달걀 2개 + 방울토마토 + 견과류 한 줌
              </td>
              <td className="border border-border px-3 py-2">
                잡곡밥(반 공기) + 삼치구이 + 미역국 + 깻잎
              </td>
              <td className="border border-border px-3 py-2">
                곤약볶음밥(닭가슴살, 채소) + 된장국
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,450
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                금
              </td>
              <td className="border border-border px-3 py-2">
                오트밀 + 배 반 개 + 치아시드 + 두유
              </td>
              <td className="border border-border px-3 py-2">
                현미밥(반 공기) + 소고기 미역국 + 두부조림 + 나물
              </td>
              <td className="border border-border px-3 py-2">
                새우 볶음면(곤약면) + 달걀 후라이 + 샐러드
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,480
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
                잡곡밥(반 공기) + 꽁치조림 + 콩나물국 + 김치(소량)
              </td>
              <td className="border border-border px-3 py-2">
                닭볶음탕(감자 빼고) + 현미밥(반 공기) + 상추쌈
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,550
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                일
              </td>
              <td className="border border-border px-3 py-2">
                통밀 팬케이크(바나나+달걀) + 그릭요거트
              </td>
              <td className="border border-border px-3 py-2">
                보리밥(반 공기) + 갈치구이 + 된장찌개 + 나물
              </td>
              <td className="border border-border px-3 py-2">
                채소 카레(렌틸콩, 두부) + 현미밥(반 공기)
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,500
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
          에 맞게 양을 조절하세요. 간식으로는 견과류 한 줌(20g), 사과 반 개 +
          치즈, 그릭요거트 등 저GI 조합이 좋아요. 꼭 기억하세요:{" "}
          <strong className="text-foreground">
            채소 먼저 → 단백질 → 밥 순서
          </strong>
          로 먹기!
        </p>
      </div>

      {/* Section: Benefits */}
      <h2 id="benefits" className="mt-10 mb-4 text-xl font-bold">
        혈당 다이어트의 효과
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">체중 감량</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        저GI 식단은 인슐린 분비를 줄여{" "}
        <strong className="text-foreground">
          체지방 축적을 억제하고, 기존 체지방의 분해를 촉진
        </strong>
        해. 2007년 Cochrane 리뷰에 따르면 저GI 식단을 실천한 그룹이 고GI 식단
        그룹보다{" "}
        <strong className="text-foreground">체지방이 유의미하게 더 감소</strong>
        했어. 특히 내장지방(뱃살) 감소에 효과적이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">식욕 조절</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        고GI 음식을 먹으면 혈당이 급상승 후 급락하면서{" "}
        <strong className="text-foreground">
          2~3시간 만에 다시 배고파지는 악순환
        </strong>
        에 빠져. 반면 저GI 음식은 혈당이 완만하게 올라가고 천천히 내려가기
        때문에 포만감이 4~6시간 유지돼. 간식 충동이 줄어들고, 자연스럽게
        총 칼로리 섭취가 줄어드는 효과가 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">에너지 안정화</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        점심 먹고 오후에 졸린 경험, 누구나 있지? 이건{" "}
        <strong className="text-foreground">
          혈당 스파이크 후 급락(반응성 저혈당)
        </strong>
        때문이야. 저GI 식단으로 혈당을 안정시키면 하루 종일 에너지가
        일정하게 유지되어 오후 졸림이 크게 줄어들어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타 건강 효과</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">제2형 당뇨 예방:</strong>{" "}
            인슐린 감수성 개선으로 당뇨 위험 감소
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">심혈관 건강:</strong> 중성지방
            감소, HDL 콜레스테롤 증가에 기여
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">피부 개선:</strong> 혈당
            급상승이 줄어들면 피지 분비와 염증이 감소하여 여드름 개선에 도움
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">집중력 향상:</strong> 혈당
            안정 = 뇌 에너지 안정 = 집중력과 인지 기능 향상
          </span>
        </li>
      </ul>

      {/* Section: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        성공을 위한 실전 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        당장 오늘부터 할 수 있는 3가지
      </h3>
      <ol className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">1.</span>
          <span>
            <strong className="text-foreground">밥을 잡곡밥으로 바꾸기:</strong>{" "}
            백미(GI 73) → 잡곡밥(GI 50~55). 이것만으로도 큰 변화
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">2.</span>
          <span>
            <strong className="text-foreground">식사 순서 바꾸기:</strong>{" "}
            채소 먼저 → 단백질 → 밥. 한식에서 가장 쉬운 방법
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">3.</span>
          <span>
            <strong className="text-foreground">식후 10분 산책:</strong>{" "}
            점심 먹고 바로 앉지 말고 10분만 걸어보기
          </span>
        </li>
      </ol>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        한국식 혈당 관리 꿀팁
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">김치는 OK:</strong> 김치의
            식이섬유와 유산균이 혈당 조절에 도움. 다만 설탕이 많이 들어간
            김치는 피하기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">된장찌개 추천:</strong> 된장의
            단백질과 채소(두부, 호박, 버섯)가 어우러져 혈당을 안정시켜줘
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">나물 반찬 많이:</strong> 시금치,
            콩나물, 도라지, 미나리 등 나물은 거의 다 저GI. 양을 넉넉히 먹으면
            밥 양을 자연스럽게 줄일 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">떡, 빵 줄이기:</strong> 떡(GI
            82~90), 식빵(GI 75)은 고GI 대표 식품. 간식으로 떡이나 빵 대신
            견과류나 과일(저GI)을 선택
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">곤약 활용:</strong> 곤약밥,
            곤약면은 GI가 거의 0에 가까워. 밥이나 면에 곤약을 반반 섞으면
            칼로리도 줄이고 혈당도 잡을 수 있어
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        외식할 때 주의점
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">한식 뷔페:</strong> 나물,
            생선, 두부 먼저 배를 채우고 밥은 마지막에 소량만
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">분식집:</strong> 떡볶이,
            라면은 고GI. 메밀국수, 비빔냉면(메밀)이 그나마 나은 선택
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">카페:</strong> 달달한 음료
            대신 블랙커피, 녹차. 간식은 견과류나 그릭요거트
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">편의점:</strong> 삶은 달걀 +
            견과류 + 두유 조합이면 훌륭한 저GI 간식
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
              GI만 보고 식품 선택하면 안 돼:
            </strong>{" "}
            초콜릿(GI 49)이 현미밥(GI 56)보다 GI가 낮지만, 그렇다고 초콜릿이 더
            건강한 건 아니야. GI 외에 영양소 구성, 칼로리, 가공도를 함께
            고려해야 해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              칼로리 총량도 중요해:
            </strong>{" "}
            저GI 음식이라도 많이 먹으면 살이 찌어. GI는 &quot;어떤 음식을
            먹을까&quot;의 기준이지, &quot;얼마나 먹을까&quot;의 기준은 아니야.{" "}
            <Link
              href="/calc/calorie/"
              className="text-primary hover:underline font-medium"
            >
              칼로리 계산기
            </Link>
            로 적정 칼로리를 확인하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              개인차가 큰 편이야:
            </strong>{" "}
            같은 음식이라도 사람마다 혈당 반응이 다를 수 있어. 장내 미생물 구성,
            유전적 요인, 스트레스, 수면 등이 영향을 줘. 궁금하면 연속혈당측정기
            (CGM)를 2주 정도 착용해보면 자신만의 패턴을 알 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              당뇨약 복용 중이라면 주의:
            </strong>{" "}
            혈당을 낮추는 약(인슐린, 설포닐우레아 등)과 저GI 식단을 함께 하면
            저혈당 위험이 있을 수 있어. 반드시 담당 의사와 상담 후 식단을
            조절하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              지나친 GI 집착은 스트레스:
            </strong>{" "}
            매 끼니 GI를 계산하면 스트레스가 돼. 큰 원칙(잡곡밥, 채소 먼저,
            가공식품 줄이기)만 지키고, 디테일에 너무 얽매이지 않는 것이
            장기적으로 더 효과적이야
          </span>
        </li>
      </ul>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        혈당 다이어트를 시작하기 전에 현재 건강 상태를 점검해봐.{" "}
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
        로 현재 상태를 확인하고, 무리 없는 범위에서 시작하세요.
      </p>

      {/* Closing CTA */}
      <div className="my-8 rounded-xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          혈당 다이어트 시작 전, 내 몸 상태부터 체크하세요
        </p>
        <p className="mb-4 font-bold">
          나에게 맞는 칼로리를 알면 효과가 더 커져요
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
