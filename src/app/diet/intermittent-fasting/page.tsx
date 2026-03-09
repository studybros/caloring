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
  title: "간헐적 단식 완벽 가이드 — 16:8 방법, 식단표, 효과, 주의사항",
  description:
    "간헐적 단식(IF)의 종류(16:8, 5:2, Eat-Stop-Eat, 전사 다이어트), 과학적 효과, 일주일 식단표, 시작 방법, 주의사항까지 총정리. 초보자도 쉽게 따라할 수 있는 간헐적 단식 가이드.",
  path: "/diet/intermittent-fasting/",
  keywords: [
    "간헐적 단식",
    "16:8 단식",
    "간헐적 단식 방법",
    "간헐적 단식 식단",
    "간헐적 단식 효과",
    "간헐적 단식 식단표",
    "간헐적 단식 초보",
    "간헐적 단식 시간",
    "인터미턴트 패스팅",
    "16시간 공복",
    "간헐적 단식 다이어트",
    "간헐적 단식 주의사항",
  ],
});

const TOC = [
  { id: "what-is", title: "간헐적 단식이란?" },
  { id: "types", title: "간헐적 단식의 종류" },
  { id: "benefits", title: "효과와 과학적 근거" },
  { id: "meal-plan", title: "16:8 일주일 식단표" },
  { id: "how-to-start", title: "시작하는 방법 (초보 가이드)" },
  { id: "tips", title: "성공을 위한 실전 팁" },
  { id: "cautions", title: "주의사항" },
  { id: "who-should-avoid", title: "피해야 하는 사람" },
];

const FAQ_ITEMS = [
  {
    question: "간헐적 단식 중 물이나 커피를 마셔도 되나요?",
    answer:
      "네, 공복 시간에 물, 무가당 탄산수, 블랙커피(설탕/크림 없이), 녹차 등 칼로리가 없는 음료는 자유롭게 마실 수 있습니다. 오히려 충분한 수분 섭취가 공복감을 줄이는 데 도움이 됩니다. 다만 우유, 주스, 단맛 음료는 공복을 깨뜨리므로 피해야 합니다.",
  },
  {
    question: "간헐적 단식하면 근육이 빠지나요?",
    answer:
      "적절한 단백질 섭취(체중 kg당 1.2~1.6g)와 근력 운동을 병행하면 근손실을 최소화할 수 있습니다. 오히려 간헐적 단식은 성장 호르몬 분비를 촉진해 근육 보존에 도움이 될 수 있다는 연구도 있습니다. 핵심은 식사 시간대에 충분한 단백질을 섭취하는 것입니다.",
  },
  {
    question: "간헐적 단식 중 운동은 언제 하는 게 좋나요?",
    answer:
      "식사 시작 1~2시간 전이나, 첫 식사 직후가 가장 이상적입니다. 공복 운동은 지방 연소에 효과적이지만, 고강도 운동은 피하는 것이 좋습니다. 초보자는 식사 후 운동을 추천하며, 공복 운동에 적응되면 가벼운 유산소부터 시도해보세요.",
  },
  {
    question: "간헐적 단식은 얼마나 해야 효과가 나타나나요?",
    answer:
      "개인차가 있지만, 일반적으로 2~4주 정도면 체중 변화와 컨디션 개선을 느끼기 시작합니다. 첫 1주는 적응 기간으로 배고픔과 피로감이 있을 수 있으나, 대부분 2주째부터 적응됩니다. 최소 8~12주 이상 꾸준히 실천해야 의미 있는 체지방 감소를 기대할 수 있습니다.",
  },
  {
    question: "주말에도 간헐적 단식을 해야 하나요?",
    answer:
      "이상적으로는 매일 동일한 패턴을 유지하는 것이 좋지만, 주말에 느슨하게 적용해도 괜찮습니다. 예를 들어 주중에 16:8을 엄격히 지키고, 주말에는 14:10으로 완화하는 방식도 효과적입니다. 중요한 것은 장기적으로 지속할 수 있는 패턴을 찾는 것입니다.",
  },
  {
    question: "간헐적 단식과 저탄고지(키토)를 함께 해도 되나요?",
    answer:
      "네, 두 방법을 병행하면 케토시스(지방 연소 상태) 진입이 빨라져 체지방 감소 효과가 커질 수 있습니다. 다만 동시에 시작하면 적응이 어려울 수 있으므로, 먼저 간헐적 단식에 2~3주 적응한 후 탄수화물을 서서히 줄이는 것을 추천합니다.",
  },
];

const RELATED_CALC = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
];

const RELATED_DIET = [
  { title: "고단백 다이어트 가이드", href: "/diet/high-protein/", emoji: "💪" },
  { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋" },
];

const RELATED_PRODUCTS = [
  {
    title: "다이어트 닭가슴살 최저가",
    href: "/products/?category=chicken-breast",
    emoji: "🍗",
  },
  {
    title: "프로틴 쉐이크 비교",
    href: "/products/?category=protein",
    emoji: "🥤",
  },
  {
    title: "다이어트 도시락 비교",
    href: "/products/?category=meal-box",
    emoji: "🍱",
  },
];

export default function IntermittentFastingPage() {
  const jsonLd = [
    createArticleSchema({
      title: "간헐적 단식 완벽 가이드",
      description:
        "간헐적 단식(IF)의 종류, 효과, 식단표, 시작 방법, 주의사항을 총정리한 완벽 가이드",
      url: "https://caloring.kr/diet/intermittent-fasting/",
      datePublished: "2026-03-09",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단 가이드", href: "/diet/" },
      { label: "간헐적 단식" },
    ]),
  ];

  return (
    <WikiLayout
      title="간헐적 단식 완벽 가이드"
      description="간헐적 단식의 모든 것을 정리했어. 효과, 식단표, 시작법까지 쉽게 알려줄게."
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "다이어트 식단 가이드", href: "/diet/" },
        { label: "간헐적 단식" },
      ]}
      toc={TOC}
      faqItems={FAQ_ITEMS}
      relatedCalc={RELATED_CALC}
      relatedDiet={RELATED_DIET}
      relatedProducts={RELATED_PRODUCTS}
      jsonLd={jsonLd}
      updatedAt="2026-03-09"
    >
      {/* Key Summary Box */}
      <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <p className="mb-3 text-sm font-bold text-primary">핵심 요약</p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              간헐적 단식은{" "}
              <strong className="text-foreground">&quot;언제&quot; 먹을지</strong>를
              정하는 식사 패턴이야. 가장 대중적인 방법은{" "}
              <strong className="text-foreground">16시간 공복 + 8시간 식사(16:8)</strong>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              체지방 감소, 인슐린 감수성 개선, 세포 자가포식(오토파지) 촉진 등{" "}
              <strong className="text-foreground">과학적으로 검증된 효과</strong>가 다수 보고됨
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              초보자는{" "}
              <strong className="text-foreground">12:12에서 시작해 점진적으로 16:8로</strong>{" "}
              늘리는 것이 성공률이 높음
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              임산부, 섭식 장애 이력자, 저체중자, 성장기 청소년은{" "}
              <strong className="text-foreground">반드시 피해야</strong> 하며, 기저질환이 있다면
              의사와 상담 필수
            </span>
          </li>
        </ul>
      </div>

      {/* Section: What is IF */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        간헐적 단식이란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        &quot;밥을 안 먹는 게 다이어트라고?&quot; 처음 들으면 반신반의할 수 있어.
        근데 간헐적 단식(Intermittent Fasting, IF)은{" "}
        <strong className="text-foreground">
          일정 시간 동안 음식을 먹지 않고(공복), 나머지 시간에만 식사하는 패턴
        </strong>
        이야. 일반적인 다이어트가 &quot;무엇을&quot; 먹을지에 집중한다면, 간헐적
        단식은 <strong className="text-foreground">&quot;언제&quot; 먹을지</strong>에
        초점을 맞추는 거지.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        사실 우리 몸은 이미 매일 간헐적 단식을 하고 있습니다. 저녁 식사 후 잠을 자고 다음
        날 아침에 먹는 것 자체가 10~12시간의 공복입니다. 영어로 아침 식사를
        &quot;breakfast&quot;라고 부르는 이유도 &quot;fast(단식)를 break(끊다)&quot;하는
        식사이기 때문입니다. 간헐적 단식은 이 자연스러운 공복 시간을 의도적으로 늘리는
        것입니다.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        간헐적 단식이 인기를 끄는 이유는 간단합니다.{" "}
        <strong className="text-foreground">칼로리를 일일이 계산하지 않아도 되고</strong>,
        특정 음식을 금지하지 않으며,{" "}
        <strong className="text-foreground">
          식사 시간만 조절하면 자연스럽게 칼로리 섭취가 줄어드는
        </strong>{" "}
        효과가 있기 때문입니다. 2019년 <em>New England Journal of Medicine</em>에 발표된
        종합 리뷰 논문에서도 간헐적 단식의 건강 효과가 과학적으로 뒷받침되었습니다.
      </p>

      {/* Section: Types */}
      <h2 id="types" className="mt-10 mb-4 text-xl font-bold">
        간헐적 단식의 종류
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        간헐적 단식에는 여러 방식이 있으며, 자신의 생활 패턴과 목표에 맞는 방법을 선택하는
        것이 중요합니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        1. 16:8 방법 (시간 제한 식사법)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">가장 인기 있고 초보자에게 추천</strong>되는
        방법입니다. 하루 24시간 중 16시간은 공복, 8시간 동안만 식사합니다. 예를 들어 오후
        12시에 첫 식사를 하고, 오후 8시 이전에 마지막 식사를 마치는 방식입니다.
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">식사 시간 예시:</strong> 오후 12시 ~ 오후
            8시 (아침 건너뛰기)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">난이도:</strong> ★★☆☆☆ (쉬움)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">장점:</strong> 일상에 녹이기 쉽고,
            &quot;아침 안 먹기&quot;로 시작할 수 있음
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">적합한 사람:</strong> 간헐적 단식
            초보자, 직장인, 아침을 원래 안 먹는 사람
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        2. 5:2 방법 (격일 칼로리 제한)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        일주일 중 5일은 평소대로 먹고,{" "}
        <strong className="text-foreground">
          2일은 칼로리를 500~600kcal로 제한
        </strong>
        하는 방법입니다. 영국의 의사 마이클 모슬리(Michael Mosley)가 대중화했습니다.
        제한하는 2일은 연속하지 않도록 배치합니다 (예: 월요일, 목요일).
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">난이도:</strong> ★★★☆☆ (보통)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">장점:</strong> 매일 공복을 유지하지
            않아도 되어 사회 생활에 유리
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">적합한 사람:</strong> 매일 16시간
            단식이 어려운 사람, 회식이 잦은 직장인
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        3. Eat-Stop-Eat (24시간 단식)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        주 1~2회, <strong className="text-foreground">24시간 완전 단식</strong>을 하는
        방법입니다. 예를 들어 월요일 저녁 7시에 식사한 후, 화요일 저녁 7시까지 아무것도
        먹지 않습니다. 영양학자 브래드 필론(Brad Pilon)이 제안한 방법입니다.
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">난이도:</strong> ★★★★☆ (어려움)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">장점:</strong> 주 1~2일만 실천하면
            되므로 유연함
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">주의:</strong> 24시간 공복 후
            과식하지 않도록 주의 필요
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        4. 전사 다이어트 (Warrior Diet, 20:4)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">20시간 공복, 4시간 식사</strong>로 운영하는
        방법입니다. 하루에 한 끼 큰 식사를 하는 것에 가깝습니다. 공복 시간 중에는 소량의
        생과일이나 채소는 허용됩니다.
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">난이도:</strong> ★★★★★ (매우 어려움)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">장점:</strong> 짧은 시간에 집중 식사하여
            강력한 칼로리 제한 효과
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">적합한 사람:</strong> 간헐적 단식에
            충분히 적응된 경험자
          </span>
        </li>
      </ul>

      {/* Comparison Table */}
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                방법
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                공복:식사
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                난이도
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                추천 대상
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                16:8
              </td>
              <td className="border border-border px-4 py-2">16h : 8h</td>
              <td className="border border-border px-4 py-2">★★☆☆☆</td>
              <td className="border border-border px-4 py-2">초보자, 직장인</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                5:2
              </td>
              <td className="border border-border px-4 py-2">주 2일 500kcal</td>
              <td className="border border-border px-4 py-2">★★★☆☆</td>
              <td className="border border-border px-4 py-2">
                유연함을 원하는 사람
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                Eat-Stop-Eat
              </td>
              <td className="border border-border px-4 py-2">주 1~2일 24h</td>
              <td className="border border-border px-4 py-2">★★★★☆</td>
              <td className="border border-border px-4 py-2">중급자</td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                전사 다이어트
              </td>
              <td className="border border-border px-4 py-2">20h : 4h</td>
              <td className="border border-border px-4 py-2">★★★★★</td>
              <td className="border border-border px-4 py-2">숙련자</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Benefits */}
      <h2 id="benefits" className="mt-10 mb-4 text-xl font-bold">
        효과와 과학적 근거
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        간헐적 단식의 효과는 수많은 연구를 통해 입증되고 있습니다. 단순히 체중 감량뿐
        아니라, 대사 건강 전반에 걸쳐 긍정적인 영향을 미칩니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">체지방 감소</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        간헐적 단식의 가장 직접적인 효과입니다. 식사 시간을 제한하면 자연스럽게 총 칼로리
        섭취량이 줄어듭니다. 2020년 <em>Annual Review of Nutrition</em> 메타 분석에 따르면,
        간헐적 단식은 8~12주간 평균{" "}
        <strong className="text-foreground">체중의 3~8%를 감량</strong>하는 효과가
        있었습니다. 특히{" "}
        <strong className="text-foreground">
          내장지방(뱃살) 감소에 효과적
        </strong>
        이라는 연구 결과가 주목할 만합니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">인슐린 감수성 개선</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        공복 시간이 길어지면 인슐린 수치가 낮아지고,{" "}
        <strong className="text-foreground">
          세포의 인슐린 감수성이 향상
        </strong>
        됩니다. 쉽게 말해 같은 양의 음식을 먹어도 혈당이 덜 오르고, 지방으로 저장되는
        양이 줄어든다는 뜻입니다. 2022년 연구에 따르면 16:8 단식을 12주간 실천한 그룹에서
        공복 인슐린 수치가 평균 20~31% 감소했습니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        세포 자가포식 (오토파지)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2016년 노벨 생리의학상을 수상한 오스미 요시노리 교수의 연구로 유명해진 개념입니다.{" "}
        <strong className="text-foreground">
          오토파지(autophagy)란 세포가 스스로 손상된 부분을 분해하고 재활용하는 과정
        </strong>
        으로, 공복 12~16시간 이후 활성화됩니다. 이는 세포 건강 유지, 노화 방지, 면역력
        강화와 관련이 있습니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타 건강 효과</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">염증 감소:</strong> 만성 염증 지표(CRP
            등)가 감소한다는 연구 결과가 있습니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">심혈관 건강:</strong> LDL 콜레스테롤,
            중성지방, 혈압 수치 개선에 도움
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">뇌 건강:</strong> BDNF(뇌유래신경영양인자)
            분비 촉진으로 인지 기능 향상 가능성
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">성장 호르몬 증가:</strong> 공복 상태에서
            성장 호르몬 분비가 최대 5배까지 증가할 수 있음
          </span>
        </li>
      </ul>

      <div className="my-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">참고:</strong> 위 효과들은 대부분 동물
          실험이나 소규모 인간 연구에서 확인된 것이며, 대규모 장기 임상 시험 결과는 아직
          제한적입니다. 간헐적 단식이 &quot;만병통치약&quot;은 아니며, 균형 잡힌 식단과
          규칙적인 운동이 기본입니다.
        </p>
      </div>

      {/* Section: Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        16:8 일주일 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        16:8 방식 기준, 식사 시간을{" "}
        <strong className="text-foreground">오후 12시 ~ 오후 8시</strong>로 설정한
        일주일 식단표입니다. 하루 총 칼로리는{" "}
        <strong className="text-foreground">약 1,400~1,600kcal</strong>로 설정했으며,
        여성 기준 건강한 감량 속도(주 0.3~0.5kg)를 목표로 합니다.{" "}
        <Link
          href="/calc/calorie/"
          className="text-primary hover:underline font-medium"
        >
          칼로리 계산기
        </Link>
        로 나에게 맞는 칼로리를 먼저 확인해보세요.
      </p>

      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-3 py-2 text-left font-semibold">
                요일
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                점심 (12:00)
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                간식 (15:00)
              </th>
              <th className="border border-border px-3 py-2 text-left font-semibold">
                저녁 (19:00)
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
                현미밥 + 닭가슴살 샐러드 + 된장국
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트 + 블루베리
              </td>
              <td className="border border-border px-3 py-2">
                연어 스테이크 + 구운 채소 + 잡곡밥 반 공기
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
                잡곡밥 + 두부조림 + 미역국 + 나물 2종
              </td>
              <td className="border border-border px-3 py-2">
                삶은 달걀 2개 + 방울토마토
              </td>
              <td className="border border-border px-3 py-2">
                닭가슴살 볶음밥 + 계란후라이 + 샐러드
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
                소바(메밀국수) + 닭가슴살 + 채소 토핑
              </td>
              <td className="border border-border px-3 py-2">
                프로틴 쉐이크 + 바나나 반 개
              </td>
              <td className="border border-border px-3 py-2">
                소고기 미역국 + 현미밥 + 김치 + 계란찜
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
                통밀 샌드위치(닭가슴살+채소) + 스프
              </td>
              <td className="border border-border px-3 py-2">
                견과류 한 줌(20g) + 사과 반 개
              </td>
              <td className="border border-border px-3 py-2">
                제육볶음(저지방) + 잡곡밥 반 공기 + 된장찌개
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,520
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                금
              </td>
              <td className="border border-border px-3 py-2">
                현미밥 + 고등어구이 + 콩나물국 + 나물
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트 + 그래놀라 소량
              </td>
              <td className="border border-border px-3 py-2">
                새우 볶음면(곤약면) + 달걀 스크램블
              </td>
              <td className="border border-border px-3 py-2 text-center">
                1,420
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                토
              </td>
              <td className="border border-border px-3 py-2">
                오트밀 + 계란 2개 + 아보카도 반 개
              </td>
              <td className="border border-border px-3 py-2">
                다이어트 떡(현미떡) + 블랙커피
              </td>
              <td className="border border-border px-3 py-2">
                닭볶음탕(저염) + 잡곡밥 + 샐러드
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
                통밀 토스트 + 스크램블 에그 + 샐러드
              </td>
              <td className="border border-border px-3 py-2">
                프로틴바 1개 + 아메리카노
              </td>
              <td className="border border-border px-3 py-2">
                된장찌개 + 현미밥 + 불고기(저지방) + 나물
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
          <strong className="text-foreground">식단표 활용 팁:</strong> 위 식단표는
          참고용이며, 자신의{" "}
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
          에 맞게 양을 조절하세요. 밥 양을 늘리거나, 단백질 소스를 교체하는 방식으로
          커스텀할 수 있습니다. 핵심은{" "}
          <strong className="text-foreground">
            매 끼 단백질 + 채소 + 복합 탄수화물
          </strong>
          을 포함하는 것입니다.
        </p>
      </div>

      {/* Section: How to Start */}
      <h2 id="how-to-start" className="mt-10 mb-4 text-xl font-bold">
        시작하는 방법 (초보 가이드)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        처음에는 12:12도 힘들 수 있는데, 대부분 1주만 버티면 괜찮아져. 바로 16:8에 도전하면 실패 확률이 높으니까,{" "}
        <strong className="text-foreground">단계적으로 적응하는 것</strong>이 장기적인
        성공의 핵심이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        1단계: 12:12로 시작 (1~2주)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        저녁 식사를 오후 8시에 마치고, 다음 날 아침 8시에 먹는 것부터 시작하세요.
        12시간 공복은 수면 시간을 포함하면 거의 느끼지 못할 정도로 자연스럽습니다.
        이 단계에서 &quot;야식 끊기&quot;에 집중합니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        2단계: 14:10으로 확대 (2~3주)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        12:12에 적응되면, 아침을 1~2시간 늦추세요. 예: 오전 10시 ~ 오후 8시 식사.
        공복 시간에 배가 고프면 물이나 블랙커피로 버텨봅니다. 대부분의 배고픔은
        15~20분이면 사라집니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        3단계: 16:8 정착 (4주~)
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아침을 완전히 건너뛰고 오후 12시에 첫 식사를 시작합니다. 이 단계에 들어서면
        오전에 배가 고프지 않게 되고, 오히려{" "}
        <strong className="text-foreground">머리가 맑고 집중력이 올라가는</strong> 느낌을
        받는 분들이 많습니다.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">실천 체크리스트</h3>
      <ol className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">1.</span>
          <span>
            <strong className="text-foreground">목표 설정:</strong>{" "}
            <Link
              href="/calc/bmi/"
              className="text-primary hover:underline font-medium"
            >
              BMI 계산기
            </Link>
            와{" "}
            <Link
              href="/calc/calorie/"
              className="text-primary hover:underline font-medium"
            >
              칼로리 계산기
            </Link>
            로 현재 상태와 목표를 파악합니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">2.</span>
          <span>
            <strong className="text-foreground">식사 시간 결정:</strong> 자신의 생활
            패턴에 맞는 8시간 창을 정합니다 (12~20시 또는 10~18시 등)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">3.</span>
          <span>
            <strong className="text-foreground">식단 준비:</strong> 식사 시간에 먹을
            건강한 음식을 미리 준비합니다 (밀프렙 추천)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">4.</span>
          <span>
            <strong className="text-foreground">기록 습관:</strong> 식사 시간, 먹은
            음식, 컨디션을 간단히 기록합니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="font-bold text-primary min-w-[20px]">5.</span>
          <span>
            <strong className="text-foreground">유연하게:</strong> 모임이나 약속이 있는
            날은 패턴을 조정해도 괜찮습니다
          </span>
        </li>
      </ol>

      {/* Section: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        성공을 위한 실전 팁
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        실제로 간헐적 단식 성공한 사람들이 공통으로 강조하는 팁만 정리했어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">공복 시간 버티는 법</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">물을 자주 마시세요.</strong> 하루 2L
            이상 목표. 배고픔과 갈증을 혼동하는 경우가 많습니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">블랙커피나 녹차를 활용하세요.</strong>{" "}
            카페인이 식욕을 억제하고 지방 연소를 촉진합니다 (단, 빈속에 예민하면 녹차 추천)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">바쁘게 보내세요.</strong> 오전에 할 일에
            집중하면 배고픔을 잊게 됩니다. 가장 배고픈 시간은 보통 시작 후 20분 정도이며,
            그 후 사라집니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">충분히 자세요.</strong> 수면 부족은
            그렐린(식욕 호르몬) 분비를 늘려 배고픔을 악화시킵니다. 7~8시간 수면을
            목표로 하세요
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        식사 시간에 꼭 지킬 것
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">단백질을 충분히:</strong> 매 식사마다
            손바닥 크기의 단백질(닭가슴살, 생선, 두부, 계란 등)을 포함하세요.{" "}
            <Link
              href="/diet/high-protein/"
              className="text-primary hover:underline font-medium"
            >
              고단백 다이어트 가이드
            </Link>
            도 참고해보세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">채소를 절반 이상:</strong> 접시의 절반을
            채소로 채우면 포만감이 오래 지속됩니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">천천히 드세요:</strong> 공복 후 급하게
            먹으면 과식하기 쉽습니다. 첫 식사는 특히 20분 이상 천천히
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">가공식품 줄이기:</strong> 8시간 안에
            먹는다고 피자, 치킨, 과자를 마음껏 먹으면 효과가 없습니다. 간헐적 단식은{" "}
            <strong className="text-foreground">
              건강한 식단과 함께할 때 진가를 발휘
            </strong>
            합니다
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">정체기 돌파법</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        간헐적 단식을 4~6주 하다 보면 체중이 멈추는 &quot;정체기&quot;가 올 수 있습니다.
        이때 시도해볼 수 있는 방법들입니다:
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            식사 시간대를 바꿔보세요 (예: 12~20시 → 10~18시)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            주 1~2회 18:6으로 공복 시간을 늘려보세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            근력 운동을 추가하거나 강도를 높여보세요 (근육량 증가 → 기초대사량 증가)
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            일주일 정도 의도적으로 단식을 쉬는 &quot;다이어트 브레이크&quot;도 효과적입니다
          </span>
        </li>
      </ul>

      {/* Section: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        간헐적 단식은 대부분의 건강한 성인에게 안전하지만, 아래 사항은 반드시
        인지하고 시작해야 합니다.
      </p>

      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              공복 후 폭식 주의:
            </strong>{" "}
            16시간을 굶었다고 8시간 동안 마음껏 먹으면 오히려 살이 찔 수 있습니다.
            간헐적 단식은 &quot;먹는 양의 제한 없이&quot;가 아니라, &quot;시간 제한으로
            자연스러운 칼로리 감소&quot;를 유도하는 것입니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              초기 부작용 대비:
            </strong>{" "}
            처음 1~2주는 두통, 어지러움, 짜증, 집중력 저하가 나타날 수 있습니다. 이는
            몸이 적응하는 과정이며 대부분 2주 내에 사라집니다. 증상이 심하면 단식 시간을
            줄이세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              영양 불균형 방지:
            </strong>{" "}
            식사 횟수가 줄어드는 만큼 한 끼의 영양 밀도가 중요합니다. 단백질, 건강한
            지방, 비타민, 미네랄을 충분히 섭취하세요. 필요하면 종합 비타민제를 고려하세요
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              사회 생활과의 균형:
            </strong>{" "}
            식사 시간에 너무 엄격하면 스트레스가 됩니다. 회식이나 모임이 있으면 유연하게
            대처하고, 다음 날 정상 패턴으로 돌아오면 됩니다. 완벽보다 꾸준함이 중요합니다
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              약 복용 시 주의:
            </strong>{" "}
            식사와 함께 복용해야 하는 약(당뇨약, 혈압약 등)이 있다면 반드시 담당 의사와
            상담 후 식사 시간을 조정하세요
          </span>
        </li>
      </ul>

      {/* Section: Who Should Avoid */}
      <h2 id="who-should-avoid" className="mt-10 mb-4 text-xl font-bold">
        피해야 하는 사람
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래에 해당하는 분들은 간헐적 단식을{" "}
        <strong className="text-foreground">하지 않는 것이 좋습니다</strong>. 반드시
        의료 전문가와 상담 후 결정하세요.
      </p>

      <div className="my-4 rounded-lg border border-red-200 bg-red-50/50 p-4 dark:border-red-900 dark:bg-red-950/30">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">임산부 및 수유부:</strong> 태아와
              영아의 영양 공급이 최우선이며, 공복은 태아 발달에 악영향을 줄 수 있습니다
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">섭식 장애 이력자:</strong> 거식증,
              폭식증 등의 이력이 있는 경우, 간헐적 단식이 증상을 악화시킬 수 있습니다
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">18세 미만 청소년:</strong> 성장기에는
              충분한 영양 섭취가 필수적입니다
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">
                BMI 18.5 미만 저체중자:
              </strong>{" "}
              추가적인 체중 감소는 건강에 해로울 수 있습니다.{" "}
              <Link
                href="/calc/bmi/"
                className="text-primary hover:underline font-medium"
              >
                BMI 계산기
              </Link>
              로 확인해보세요
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">
                당뇨병 환자(특히 인슐린 치료 중):
              </strong>{" "}
              저혈당 위험이 있으므로 반드시 의사와 상담 필요
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">
                저혈압 또는 빈혈이 심한 분:
              </strong>{" "}
              공복 시 어지러움이나 실신의 위험이 높아질 수 있습니다
            </span>
          </li>
        </ul>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        위에 해당하지 않더라도, 간헐적 단식을 시작하기 전에 자신의 건강 상태를
        점검하는 것이 좋습니다.{" "}
        <Link
          href="/calc/bmi/"
          className="text-primary hover:underline font-medium"
        >
          BMI 계산기
        </Link>
        ,{" "}
        <Link
          href="/calc/bmr/"
          className="text-primary hover:underline font-medium"
        >
          기초대사량 계산기
        </Link>
        ,{" "}
        <Link
          href="/calc/calorie/"
          className="text-primary hover:underline font-medium"
        >
          칼로리 계산기
        </Link>
        로 현재 상태를 파악한 후, 무리 없는 범위에서 시작하세요.
      </p>

      {/* Closing CTA */}
      <div className="my-8 rounded-xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          간헐적 단식 시작 전, 내 몸 상태부터 체크하세요
        </p>
        <p className="mb-4 font-bold">
          나에게 맞는 칼로리와 식단을 계산해보세요
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
