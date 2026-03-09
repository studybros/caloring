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
  title: "체지방 감량 식단 가이드 — 체지방 빼기·뱃살 다이어트·식단표 총정리",
  description:
    "체지방 감량의 원리부터 체지방률별 맞춤 전략, 유산소+근력 운동 병행법, 일주일 체지방 감량 식단표까지 총정리. 근육은 지키면서 체지방만 효과적으로 빼는 방법을 알아보세요.",
  path: "/diet/fat-loss/",
  keywords: [
    "체지방 감량",
    "체지방 빼기",
    "체지방 다이어트",
    "뱃살 빼기",
    "체지방 감량 식단",
    "체지방률 낮추기",
    "뱃살 다이어트",
    "체지방 감량 운동",
    "다이어트 식단표",
    "체지방 식단",
  ],
});

const tocItems = [
  { id: "principle", title: "체지방 감량의 원리" },
  { id: "by-body-fat", title: "체지방률별 감량 전략" },
  { id: "exercise", title: "유산소 + 근력 운동 병행법" },
  { id: "nutrition", title: "체지방 감량 영양소 비율" },
  { id: "meal-plan", title: "일주일 체지방 감량 식단표" },
  { id: "tips", title: "체지방 감량 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

const faqItems = [
  {
    question: "체지방만 빼고 근육은 유지할 수 있나요?",
    answer:
      "네, 가능합니다. 핵심은 적절한 칼로리 적자(TDEE 대비 -300~500kcal)와 충분한 단백질 섭취(체중 1kg당 1.6~2.2g), 그리고 주 3~4회 이상의 근력 운동을 병행하는 것입니다. 칼로리 적자폭이 너무 크면 근손실 위험이 높아지므로 적정 범위를 지키는 것이 중요합니다.",
  },
  {
    question: "뱃살만 빼는 방법이 있나요?",
    answer:
      "안타깝게도 특정 부위의 지방만 선택적으로 빼는 '부분 감량'은 과학적으로 불가능합니다. 복근 운동을 해도 뱃살이 먼저 빠지지는 않아요. 전체 체지방을 줄이면 자연스럽게 복부 지방도 감소합니다. 다만 내장지방은 식이 조절과 유산소 운동에 비교적 잘 반응하는 편입니다.",
  },
  {
    question: "체지방 감량에 유산소와 근력 운동 중 뭐가 더 좋나요?",
    answer:
      "둘 다 중요합니다. 유산소 운동은 칼로리 소모를 직접적으로 늘려주고, 근력 운동은 근육을 유지·증가시켜 기초대사량을 높여줍니다. 연구에 따르면 유산소+근력 운동을 병행하는 그룹이 체지방 감량과 근육 유지 면에서 가장 좋은 결과를 보였습니다.",
  },
  {
    question: "체지방 감량 속도는 어느 정도가 적절한가요?",
    answer:
      "주당 체중의 0.5~1%를 감량하는 것이 안전합니다. 70kg 기준 주 0.35~0.7kg 정도예요. 이보다 빠르면 근손실, 호르몬 불균형, 요요 위험이 높아집니다. 체지방률이 높은 초기에는 감량 속도가 빨라도 괜찮지만, 체지방률이 낮아질수록 천천히 줄여야 합니다.",
  },
  {
    question: "탄수화물을 완전히 끊어야 체지방이 빠지나요?",
    answer:
      "아닙니다. 체지방 감량의 핵심은 칼로리 적자이지 특정 영양소 제거가 아닙니다. 탄수화물을 극단적으로 제한하면 운동 퍼포먼스가 떨어지고, 근력 운동 강도를 유지하기 어려워져 오히려 근손실로 이어질 수 있습니다. 적절한 탄수화물(전체 칼로리의 30~40%)을 섭취하는 것이 좋습니다.",
  },
  {
    question: "체지방 측정은 어떻게 하는 게 정확한가요?",
    answer:
      "가장 정확한 방법은 인바디(BIA) 측정기, DEXA 스캔 등이며, 집에서는 체지방 계산기를 활용할 수 있습니다. 같은 조건(아침 공복, 같은 기기)에서 주 1회 측정하여 추이를 보는 것이 중요합니다. 단일 측정값보다 변화 추세에 집중하세요.",
  },
];

const relatedCalc = [
  { title: "체지방률 계산기", href: "/calc/body-fat/", emoji: "📊" },
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📐" },
];

const relatedProducts = [
  { title: "닭가슴살 최저가 비교", href: "/products/chicken-breast/", emoji: "🍗" },
  { title: "프로틴 최저가 비교", href: "/products/protein/", emoji: "🥤" },
  { title: "곤약 최저가 비교", href: "/products/konjac/", emoji: "🍜" },
  { title: "다이어트 도시락 비교", href: "/products/diet-meal/", emoji: "🍱" },
];

const relatedDiet = [
  { title: "고단백 식단 가이드", href: "/diet/high-protein/", emoji: "🥩" },
  { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋" },
  { title: "간헐적 단식 가이드", href: "/diet/intermittent-fasting/", emoji: "⏰" },
  { title: "린매스업 식단 가이드", href: "/diet/lean-mass/", emoji: "🏋️" },
];

const breadcrumbs = [
  { label: "홈", href: "/" },
  { label: "다이어트 식단 가이드", href: "/diet/" },
  { label: "체지방 감량 식단" },
];

const jsonLd = [
  createArticleSchema({
    title: "체지방 감량 식단 가이드 — 체지방 빼기·뱃살 다이어트·식단표 총정리",
    description:
      "체지방 감량의 원리부터 체지방률별 맞춤 전략, 일주일 식단표까지 총정리.",
    url: "https://caloring.kr/diet/fat-loss/",
    datePublished: "2026-03-10",
  }),
  createFAQSchema(faqItems),
  createBreadcrumbSchema([
    { label: "다이어트 식단 가이드", href: "/diet/" },
    { label: "체지방 감량 식단" },
  ]),
];

export default function FatLossDietPage() {
  return (
    <WikiLayout
      title="체지방 감량 완벽 가이드"
      description="근육은 지키면서 체지방만 쏙 빼고 싶다면? 체지방률별 맞춤 전략을 알려줄게."
      breadcrumbs={breadcrumbs}
      toc={tocItems}
      faqItems={faqItems}
      relatedCalc={relatedCalc}
      relatedProducts={relatedProducts}
      relatedDiet={relatedDiet}
      jsonLd={jsonLd}
      updatedAt="2026-03-10"
    >
      {/* Key Summary Box */}
      <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <p className="mb-2 text-sm text-muted-foreground">체지방 감량은 단순히 체중을 줄이는 게 아니라, 근육은 유지하면서 지방만 빼는 거야. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">칼로리 적자</strong>: TDEE 대비
            -300~500kcal (너무 많이 줄이면 근손실)
          </li>
          <li>
            <strong className="text-foreground">단백질 섭취</strong>: 체중 1kg당
            1.6~2.2g (근육 보존 필수)
          </li>
          <li>
            <strong className="text-foreground">운동 병행</strong>: 근력 운동 주
            3~4회 + 유산소 주 2~3회
          </li>
          <li>
            <strong className="text-foreground">적정 속도</strong>: 주당 체중의
            0.5~1% 감량이 안전
          </li>
        </ul>
      </div>

      {/* Section 1: Principle */}
      <h2 id="principle" className="mt-10 mb-4 text-xl font-bold">
        체지방 감량의 원리
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방을 빼려면 딱 한 가지만 기억하면 돼:{" "}
        <strong className="text-foreground">칼로리 적자</strong>. 하루에 소비하는
        칼로리(TDEE)보다 섭취 칼로리가 적으면 우리 몸은 부족한 에너지를 체지방에서
        끌어다 쓰거든. 이게 체지방 감량의 유일한 물리적 원리야.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        그런데 문제는, 칼로리 적자만 만들면 체지방뿐 아니라{" "}
        <strong className="text-foreground">근육도 함께 빠진다</strong>는 거야.
        근육이 빠지면 기초대사량이 떨어지고, 같은 양을 먹어도 살이 더 찌는 체질이
        돼. 이게 바로 요요 현상의 원인이지.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        그래서 체지방 감량의 핵심 전략은{" "}
        <strong className="text-foreground">
          적절한 칼로리 적자 + 충분한 단백질 + 근력 운동
        </strong>
        , 이 세 가지를 동시에 실행하는 거야. 이 세 가지가 합쳐져야 근육은
        유지하면서 체지방만 빼는 &quot;깔끔한 감량&quot;이 가능해.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        내 TDEE(하루 총 에너지 소비량)가 궁금하다면{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        에서 바로 확인해봐.
      </p>

      {/* Calorie Deficit Explanation */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">
        칼로리 적자, 얼마나 만들어야 할까?
      </h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">적자 수준</th>
              <th className="px-4 py-3 text-left font-semibold">일일 적자</th>
              <th className="px-4 py-3 text-left font-semibold">주간 감량</th>
              <th className="px-4 py-3 text-left font-semibold">특징</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3">보수적</td>
              <td className="px-4 py-3">-200~300kcal</td>
              <td className="px-4 py-3">~0.2~0.3kg</td>
              <td className="px-4 py-3 text-muted-foreground">
                근손실 최소, 체지방률 낮은 사람 추천
              </td>
            </tr>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">적정 (추천)</td>
              <td className="px-4 py-3 font-semibold">-300~500kcal</td>
              <td className="px-4 py-3">~0.3~0.5kg</td>
              <td className="px-4 py-3 text-muted-foreground">
                근육 보존과 감량 속도의 최적 밸런스
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">공격적</td>
              <td className="px-4 py-3">-500~700kcal</td>
              <td className="px-4 py-3">~0.5~0.7kg</td>
              <td className="px-4 py-3 text-muted-foreground">
                근손실 위험 있음, 체지방률 높은 초기만 권장
              </td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">극단적</td>
              <td className="px-4 py-3">-1000kcal+</td>
              <td className="px-4 py-3">~1kg+</td>
              <td className="px-4 py-3 text-muted-foreground">
                근손실·호르몬 불균형·요요 위험 매우 높음
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        근육 보존의 3대 원칙
      </h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방만 빼려면 이 세 가지를 반드시 지켜야 해:
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">충분한 단백질</strong>: 체중 1kg당
          1.6~2.2g. 다이어트 중에는 평소보다 단백질을 더 많이 먹어야 근육을
          지킬 수 있어. 자세한 내용은{" "}
          <Link
            href="/diet/high-protein/"
            className="text-primary hover:underline"
          >
            고단백 식단 가이드
          </Link>
          를 참고해.
        </li>
        <li>
          <strong className="text-foreground">근력 운동 유지</strong>: 근육에
          &quot;너 아직 필요해!&quot;라는 신호를 보내야 해. 근력 운동을 멈추면
          몸은 근육을 에너지원으로 분해하기 시작해.
        </li>
        <li>
          <strong className="text-foreground">적절한 칼로리 적자폭</strong>:
          너무 급격한 칼로리 제한은 근손실을 가속화해. -500kcal 이내를 권장.
        </li>
      </ul>

      {/* Section 2: By Body Fat Percentage */}
      <h2 id="by-body-fat" className="mt-10 mb-4 text-xl font-bold">
        체지방률별 감량 전략
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방률에 따라 감량 전략이 달라져야 해. 현재 체지방률이 높은 사람과
        낮은 사람은 접근법이 완전히 다르거든. 내 체지방률을 모르겠다면{" "}
        <Link
          href="/calc/body-fat/"
          className="text-primary hover:underline"
        >
          체지방률 계산기
        </Link>
        로 먼저 확인해봐.
      </p>

      {/* Body fat 30%+ */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">
        체지방률 30% 이상 — &quot;기본기 다지기&quot;
      </h3>
      <div className="mb-4 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">목표: 체지방률 25% 이하로 진입</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>칼로리 적자: TDEE 대비 <strong className="text-foreground">-500~700kcal</strong> (공격적 감량 가능)</li>
          <li>단백질: 목표 체중 1kg당 1.6g</li>
          <li>운동: 근력 운동 주 3회 + 걷기 매일 30분</li>
          <li>기간: 체지방률 5% 감소에 약 2~3개월</li>
        </ul>
      </div>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방률이 30% 이상이면 비교적{" "}
        <strong className="text-foreground">빠른 감량이 가능</strong>한 구간이야.
        체지방이 충분히 많기 때문에 칼로리 적자를 크게 잡아도 근손실 위험이
        상대적으로 낮거든. 이 시기에는 복잡한 전략보다{" "}
        <strong className="text-foreground">기본에 충실</strong>하는 게 중요해.
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>가공식품, 밀가루, 설탕 음료부터 줄이기</li>
        <li>매 끼니 단백질 포함 (닭가슴살, 계란, 두부 등)</li>
        <li>밥 양을 반공기로 줄이되, 채소는 충분히</li>
        <li>매일 30분 이상 걷기 (달리기보다 걷기가 지속 가능)</li>
        <li>근력 운동 시작 (무게보다 동작 습득에 집중)</li>
      </ul>

      {/* Body fat 25-30% */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">
        체지방률 25~30% — &quot;체계적 감량기&quot;
      </h3>
      <div className="mb-4 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">목표: 체지방률 20~22%로 진입</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>칼로리 적자: TDEE 대비 <strong className="text-foreground">-300~500kcal</strong></li>
          <li>단백질: 체중 1kg당 1.8~2.0g</li>
          <li>운동: 근력 운동 주 4회 + 유산소 주 2~3회</li>
          <li>기간: 체지방률 5% 감소에 약 3~4개월</li>
        </ul>
      </div>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        이 구간부터는 감량 속도가 느려지기 시작해.{" "}
        <strong className="text-foreground">영양소 비율을 세밀하게 조절</strong>
        하고, 근력 운동 강도를 높여야 할 때야. 식단 기록 앱을 활용해서 하루
        섭취 칼로리와 단백질을 추적하는 걸 추천해.
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>식사 기록 시작 (칼로리·단백질 추적)</li>
        <li>탄수화물 타이밍 조절 (운동 전후에 집중 배치)</li>
        <li>근력 운동 강도 점진적 증가 (무게 높이기)</li>
        <li>유산소는 고강도 인터벌 훈련(HIIT) 도입</li>
        <li>주 1회 치팅데이 대신 리피드데이(탄수화물 보충) 활용</li>
      </ul>

      {/* Body fat 20-25% */}
      <h3 className="mt-6 mb-3 text-lg font-semibold">
        체지방률 20~25% — &quot;정밀 감량기&quot;
      </h3>
      <div className="mb-4 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">목표: 체지방률 18~20% (근육 선명도 향상)</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>칼로리 적자: TDEE 대비 <strong className="text-foreground">-200~300kcal</strong> (보수적)</li>
          <li>단백질: 체중 1kg당 2.0~2.2g</li>
          <li>운동: 근력 운동 주 4~5회 + 유산소 주 2회</li>
          <li>기간: 체지방률 3~5% 감소에 약 4~6개월</li>
        </ul>
      </div>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방률이 낮아질수록 몸은 지방을 지키려고 강하게 저항해. 이 구간에서는{" "}
        <strong className="text-foreground">인내심이 가장 중요한 무기</strong>야.
        급하게 칼로리를 더 줄이면 근손실과 대사 적응이 찾아오거든.
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>칼로리 적자를 작게 유지 (-200~300kcal)</li>
        <li>단백질 섭취량을 최대로 높이기 (체중 1kg당 2.0~2.2g)</li>
        <li>수면 7~8시간 확보 (코르티솔 관리)</li>
        <li>스트레스 관리 (스트레스는 지방 저장을 촉진)</li>
        <li>2~3주에 1번 유지 칼로리로 식사하는 &quot;다이어트 브레이크&quot; 고려</li>
      </ul>

      {/* Section 3: Exercise */}
      <h2 id="exercise" className="mt-10 mb-4 text-xl font-bold">
        유산소 + 근력 운동 병행법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방 감량에서 운동은{" "}
        <strong className="text-foreground">
          근력 운동이 메인, 유산소가 서브
        </strong>
        라고 생각하면 돼. 많은 사람들이 유산소만 열심히 하는데, 근력 운동 없이
        유산소만 하면 근육도 함께 빠져서 마른 비만(skinny fat)이 될 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        주간 운동 스케줄 예시
      </h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">요일</th>
              <th className="px-4 py-3 text-left font-semibold">운동 종류</th>
              <th className="px-4 py-3 text-left font-semibold">시간</th>
              <th className="px-4 py-3 text-left font-semibold">강도</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">월</td>
              <td className="px-4 py-3">근력 (상체 - 가슴/어깨/삼두)</td>
              <td className="px-4 py-3">50~60분</td>
              <td className="px-4 py-3 text-muted-foreground">중~고</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">화</td>
              <td className="px-4 py-3">유산소 (달리기 or HIIT)</td>
              <td className="px-4 py-3">30~40분</td>
              <td className="px-4 py-3 text-muted-foreground">중~고</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">수</td>
              <td className="px-4 py-3">근력 (하체 - 스쿼트/런지/레그프레스)</td>
              <td className="px-4 py-3">50~60분</td>
              <td className="px-4 py-3 text-muted-foreground">중~고</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">목</td>
              <td className="px-4 py-3">유산소 (걷기 or 자전거)</td>
              <td className="px-4 py-3">40~50분</td>
              <td className="px-4 py-3 text-muted-foreground">저~중</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">금</td>
              <td className="px-4 py-3">근력 (등/이두/코어)</td>
              <td className="px-4 py-3">50~60분</td>
              <td className="px-4 py-3 text-muted-foreground">중~고</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">토</td>
              <td className="px-4 py-3">유산소 (등산/수영/자유활동)</td>
              <td className="px-4 py-3">40~60분</td>
              <td className="px-4 py-3 text-muted-foreground">중</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">일</td>
              <td className="px-4 py-3">휴식 (가벼운 스트레칭)</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3 text-muted-foreground">-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">유산소 운동 팁</h3>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>
          <strong className="text-foreground">LISS (저강도 유산소)</strong>: 빠른
          걷기, 가벼운 자전거. 지방 연소 비율이 높고 회복 부담이 적어.
        </li>
        <li>
          <strong className="text-foreground">HIIT (고강도 인터벌)</strong>:
          30초 전력 질주 + 1분 걷기 반복. 시간 효율이 높고 운동 후에도 칼로리가
          소모돼 (EPOC 효과).
        </li>
        <li>
          유산소를 <strong className="text-foreground">근력 운동 후에</strong>{" "}
          하면 지방 연소 효율이 높아져. 근력 운동으로 글리코겐을 먼저 소모하고,
          유산소에서 지방을 태우는 원리야.
        </li>
      </ul>

      {/* Section 4: Nutrition */}
      <h2 id="nutrition" className="mt-10 mb-4 text-xl font-bold">
        체지방 감량 영양소 비율
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방 감량 시 권장하는 영양소 비율은{" "}
        <strong className="text-foreground">
          단백질 30~35% / 탄수화물 35~40% / 지방 25~30%
        </strong>
        이야. 내 목표 칼로리는{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        로, 기초대사량은{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline">
          기초대사량 계산기
        </Link>
        로 확인해봐.
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">영양소</th>
              <th className="px-4 py-3 text-left font-semibold">비율</th>
              <th className="px-4 py-3 text-left font-semibold">1500kcal 기준</th>
              <th className="px-4 py-3 text-left font-semibold">역할</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">단백질</td>
              <td className="px-4 py-3">30~35%</td>
              <td className="px-4 py-3">112~131g</td>
              <td className="px-4 py-3 text-muted-foreground">근육 보존, 포만감</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">탄수화물</td>
              <td className="px-4 py-3">35~40%</td>
              <td className="px-4 py-3">131~150g</td>
              <td className="px-4 py-3 text-muted-foreground">운동 에너지, 뇌 기능</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">지방</td>
              <td className="px-4 py-3">25~30%</td>
              <td className="px-4 py-3">42~50g</td>
              <td className="px-4 py-3 text-muted-foreground">호르몬 합성, 비타민 흡수</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-6 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">계산 예시: 65kg 여성, TDEE 1800kcal</p>
        <p className="text-sm text-muted-foreground">
          목표 칼로리: 1800 - 400 = <strong className="text-foreground">1400kcal</strong><br />
          단백질: 65 x 2.0 = <strong className="text-foreground">130g (520kcal)</strong><br />
          지방: 1400 x 0.25 = <strong className="text-foreground">39g (350kcal)</strong><br />
          탄수화물: (1400 - 520 - 350) / 4 = <strong className="text-foreground">133g (530kcal)</strong>
        </p>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        체지방 감량에 좋은 음식 vs 피할 음식
      </h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">추천 음식</th>
              <th className="px-4 py-3 text-left font-semibold">피할 음식</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3">닭가슴살, 계란, 생선, 두부</td>
              <td className="px-4 py-3">튀김류, 치킨, 피자</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">현미밥, 고구마, 오트밀</td>
              <td className="px-4 py-3">흰쌀밥 곱빼기, 빵, 면류</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">아보카도, 견과류, 올리브오일</td>
              <td className="px-4 py-3">마가린, 쇼트닝, 가공유지</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">채소, 해조류, 버섯</td>
              <td className="px-4 py-3">설탕 음료, 과일주스</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">그릭요거트, 저지방 우유</td>
              <td className="px-4 py-3">아이스크림, 생크림 음료</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 5: Weekly Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 체지방 감량 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          60kg 여성, 하루 1400kcal, 단백질 120g 목표
        </strong>{" "}
        기준으로 구성한 일주일 식단표야.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        로 자신의 목표 칼로리를 먼저 확인하고, 비율에 맞게 조절해.
      </p>

      {[
        {
          day: "월요일",
          meals: [
            { time: "아침", menu: "그릭요거트 200g + 블루베리 + 아몬드 5알", protein: 18, cal: 250 },
            { time: "점심", menu: "닭가슴살 샐러드 + 현미밥 1/3공기", protein: 35, cal: 380 },
            { time: "간식", menu: "삶은 계란 2개", protein: 14, cal: 150 },
            { time: "저녁", menu: "두부김치 + 미역국", protein: 20, cal: 280 },
          ],
        },
        {
          day: "화요일",
          meals: [
            { time: "아침", menu: "프로틴 쉐이크 + 바나나 반 개", protein: 28, cal: 230 },
            { time: "점심", menu: "연어포케볼 (현미)", protein: 30, cal: 420 },
            { time: "간식", menu: "프로틴바 1개", protein: 20, cal: 200 },
            { time: "저녁", menu: "순두부찌개 + 계란말이", protein: 22, cal: 280 },
          ],
        },
        {
          day: "수요일",
          meals: [
            { time: "아침", menu: "계란 스크램블 3개 + 토마토", protein: 20, cal: 250 },
            { time: "점심", menu: "소고기 사태찜 + 현미밥 1/3공기 + 나물", protein: 32, cal: 400 },
            { time: "간식", menu: "그릭요거트 150g + 딸기", protein: 15, cal: 120 },
            { time: "저녁", menu: "닭안심 스테이크 + 구운 채소", protein: 33, cal: 350 },
          ],
        },
        {
          day: "목요일",
          meals: [
            { time: "아침", menu: "두유 1잔 + 삶은 계란 2개", protein: 20, cal: 230 },
            { time: "점심", menu: "참치 비빔밥 (현미) + 된장국", protein: 28, cal: 400 },
            { time: "간식", menu: "닭가슴살 육포 50g", protein: 25, cal: 150 },
            { time: "저녁", menu: "대구살 구이 + 콩나물국", protein: 25, cal: 280 },
          ],
        },
        {
          day: "금요일",
          meals: [
            { time: "아침", menu: "오트밀 40g + 프로틴 파우더 + 견과류", protein: 28, cal: 300 },
            { time: "점심", menu: "돼지 안심 구이 + 현미밥 1/3공기 + 나물", protein: 30, cal: 380 },
            { time: "간식", menu: "삶은 계란 2개 + 오이", protein: 14, cal: 160 },
            { time: "저녁", menu: "해물 순두부찌개 + 계란찜", protein: 25, cal: 300 },
          ],
        },
        {
          day: "토요일",
          meals: [
            { time: "아침", menu: "아보카도 토스트 (통밀) + 삶은 계란 1개", protein: 12, cal: 280 },
            { time: "점심", menu: "닭가슴살 볶음밥 (현미) + 미역국", protein: 32, cal: 420 },
            { time: "간식", menu: "프로틴 쉐이크", protein: 25, cal: 150 },
            { time: "저녁", menu: "고등어구이 + 된장찌개 + 나물", protein: 25, cal: 320 },
          ],
        },
        {
          day: "일요일",
          meals: [
            { time: "아침", menu: "그릭요거트 200g + 그래놀라 30g", protein: 16, cal: 250 },
            { time: "점심", menu: "불고기 쌈밥 + 콩나물국", protein: 28, cal: 400 },
            { time: "간식", menu: "삶은 계란 2개 + 저지방 우유", protein: 18, cal: 220 },
            { time: "저녁", menu: "오징어볶음 + 두부구이", protein: 25, cal: 300 },
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
                  <th className="px-4 py-2 text-right font-semibold">단백질</th>
                  <th className="px-4 py-2 text-right font-semibold">칼로리</th>
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
          href="/products/protein/"
          className="text-primary hover:underline"
        >
          프로틴
        </Link>
        ,{" "}
        <Link
          href="/products/greek-yogurt/"
          className="text-primary hover:underline"
        >
          그릭요거트
        </Link>{" "}
        등은{" "}
        <Link href="/products/" className="text-primary hover:underline">
          다이어트 식품 최저가 비교
        </Link>
        에서 합리적으로 구매할 수 있어.
      </p>

      {/* Section 6: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        체지방 감량 성공 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 체중보다 체지방률을 추적해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체중은 수분, 음식물, 근육량 등에 따라 하루에도 1~2kg씩 변동해. 체중이
        안 빠진다고 체지방이 안 빠지는 게 아니야. 특히 근력 운동을 하면{" "}
        <strong className="text-foreground">근육이 늘면서 체중은 유지되지만 체지방은 줄어드는</strong>{" "}
        경우가 흔해.{" "}
        <Link
          href="/calc/body-fat/"
          className="text-primary hover:underline"
        >
          체지방률 계산기
        </Link>
        로 정기적으로 체크해봐.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 수분 섭취를 충분히</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        물을 충분히 마시면 대사 활성화, 포만감 증가, 노폐물 배출에 도움이 돼.
        하루 <strong className="text-foreground">체중 1kg당 30~40ml</strong>를
        목표로 해. 60kg이면 약 1.8~2.4리터야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 수면을 7~8시간 확보해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        수면 부족은 식욕 호르몬(그렐린)을 증가시키고, 스트레스 호르몬(코르티솔)을
        높여서 체지방 저장을 촉진해. 연구에 따르면 수면이 부족한 그룹은{" "}
        <strong className="text-foreground">동일 칼로리 적자에서 근손실이 55% 더 많았다</strong>
        는 결과가 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 다이어트 브레이크를 활용해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        4~8주간 칼로리 적자를 유지한 후,{" "}
        <strong className="text-foreground">1~2주간 유지 칼로리로 식사</strong>
        하는 &quot;다이어트 브레이크&quot;를 넣으면 대사 적응을 방지하고 장기적인
        감량 효과가 더 좋다는 연구 결과가 있어. 쉬는 게 아니라 전략적인
        &quot;충전&quot;이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 사진으로 기록해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        같은 조건(아침 공복, 같은 조명, 같은 옷)으로 2주마다 사진을 찍어둬.
        체중이 변하지 않더라도 체형 변화를 눈으로 확인할 수 있어서 동기부여에
        큰 도움이 돼.
      </p>

      {/* Section 7: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 극단적인 칼로리 제한 금지</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">기초대사량(BMR) 이하로 칼로리를 줄이면 안 돼.</strong>{" "}
        내{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline">
          기초대사량
        </Link>
        이 1200kcal인데 하루 800kcal만 먹으면 근손실, 탈모, 생리불순, 면역력
        저하 등 부작용이 올 수 있어. 최소한 BMR 이상은 섭취해야 해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 체중 정체기는 정상</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        2~4주간 체중이 변하지 않는 &quot;정체기&quot;는{" "}
        <strong className="text-foreground">정상적인 현상</strong>이야. 체지방은
        줄고 있지만 수분 저류 등으로 체중이 유지될 수 있거든. 정체기에 칼로리를
        더 줄이거나 운동을 과하게 늘리면 역효과가 나. 기존 계획을 유지하면
        자연스럽게 풀리는 경우가 대부분이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 무리한 유산소 금지</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        체지방을 빨리 빼겠다고 매일 1시간 이상 유산소를 하면{" "}
        <strong className="text-foreground">코르티솔이 과다 분비</strong>되어
        오히려 근손실과 체지방 저장이 촉진될 수 있어. 유산소는 주 3~4회, 30~40분
        이내가 적절해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 건강 상태 점검</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        갑상선 기능 저하, 인슐린 저항성, 호르몬 불균형 등이 있으면 체지방 감량이
        어려울 수 있어. 감량이 예상보다 현저히 느리거나, 피로·어지러움이
        심하다면 반드시 의사와 상담하세요.
      </p>

      {/* CTA Box */}
      <div className="my-10 rounded-2xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          체지방 감량의 첫 걸음은 현재 상태를 아는 것!
        </p>
        <p className="mb-4 font-bold">
          내 체지방률과 목표 칼로리를 계산해보세요
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/calc/body-fat/"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            체지방률 계산기
          </Link>
          <Link
            href="/calc/calorie/"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 dark:bg-card dark:hover:bg-muted"
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
