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
  title: "다이어트 간식 추천 — 죄책감 없는 저칼로리 간식 TOP 20",
  description:
    "다이어트 중 먹어도 되는 간식을 총정리했습니다. 100kcal 이하 간식 TOP 20, 카테고리별 추천, 야식 대체 간식까지. 칼로리·단백질·포만감 비교표로 한눈에 확인하세요.",
  path: "/diet/snacks/",
  keywords: [
    "다이어트 간식",
    "다이어트 간식 추천",
    "저칼로리 간식",
    "다이어트 간식 리스트",
    "100칼로리 이하 간식",
    "다이어트 중 간식",
    "야식 대체",
    "다이어트 야식",
    "저칼로리 야식",
    "건강한 간식",
  ],
});

const FAQ_ITEMS = [
  {
    question: "다이어트 중에 간식을 먹어도 되나요?",
    answer:
      "네, 오히려 적절한 간식은 다이어트에 도움이 됩니다. 끼니 사이에 100~150kcal 이내의 간식을 먹으면 과도한 공복감을 줄여 다음 식사에서 폭식을 예방할 수 있어요. 핵심은 '어떤 간식을 먹느냐'입니다.",
  },
  {
    question: "간식은 하루에 몇 번 먹어도 되나요?",
    answer:
      "하루 1~2회, 총 200kcal 이내가 적당합니다. 아침-점심 사이, 점심-저녁 사이에 한 번씩 먹으면 혈당을 안정적으로 유지하는 데 도움이 됩니다.",
  },
  {
    question: "과일은 다이어트 간식으로 좋은가요?",
    answer:
      "적당량은 좋습니다. 다만 과일에도 과당(fructose)이 있어서 무한정 먹으면 안 돼요. 1회에 주먹 1개 크기(약 100g)를 추천하며, 바나나·포도·망고보다는 사과·딸기·블루베리처럼 당도가 낮은 과일이 더 좋습니다.",
  },
  {
    question: "견과류는 칼로리가 높은데 괜찮나요?",
    answer:
      "견과류는 건강한 지방과 단백질이 풍부하지만, 칼로리가 높아(100g당 약 600kcal) 반드시 소포장 제품을 선택하세요. 하루 10~15알(약 20g, 120kcal) 이내가 적당합니다.",
  },
  {
    question: "야식이 너무 먹고 싶을 때는?",
    answer:
      "야식 욕구가 올 때는 곤약 젤리, 방울토마토, 오이, 무가당 차 등 10~50kcal 이내의 간식으로 대체하세요. 치킨·라면 대신 이런 간식으로 입을 달래는 것만으로도 큰 차이를 만들 수 있습니다.",
  },
  {
    question: "프로틴바가 정말 다이어트에 좋은가요?",
    answer:
      "프로틴바는 편리하게 단백질을 보충할 수 있지만, 제품마다 칼로리와 당류가 천차만별입니다. 칼로리 200kcal 이하, 단백질 15g 이상, 당류 10g 이하인 제품을 선택하세요. 초콜릿바 대신 먹는 거라면 좋은 선택입니다.",
  },
];

const TOC = [
  { id: "why-snacks", title: "다이어트에 간식이 필요한 이유" },
  { id: "top20", title: "100kcal 이하 간식 TOP 20" },
  { id: "fruits", title: "과일 간식" },
  { id: "dairy", title: "유제품 간식" },
  { id: "nuts", title: "견과류" },
  { id: "processed", title: "가공식품 간식" },
  { id: "drinks-snack", title: "음료 간식" },
  { id: "night-snacks", title: "야식 대체 간식" },
  { id: "avoid-snacks", title: "피해야 할 간식" },
  { id: "tips", title: "간식 습관 만들기 팁" },
];

export default function SnacksPage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 가이드", href: "/diet/" },
    { label: "다이어트 간식 추천" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "다이어트 간식 추천 — 죄책감 없는 저칼로리 간식 TOP 20",
      description:
        "다이어트 중 먹어도 되는 간식 총정리. 100kcal 이하 간식 TOP 20, 카테고리별 추천, 야식 대체 간식.",
      url: "https://caloring.kr/diet/snacks/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 가이드", href: "/diet/" },
      { label: "다이어트 간식 추천" },
    ]),
  ];

  return (
    <WikiLayout
      title="다이어트 간식 추천"
      description="죄책감 없이 먹을 수 있는 저칼로리 간식을 총정리했어. 100kcal 이하 간식부터 야식 대체까지, 맛있게 다이어트하자."
      breadcrumbs={breadcrumbs}
      toc={TOC}
      faqItems={FAQ_ITEMS}
      jsonLd={jsonLd}
      updatedAt="2026-03-10"
      relatedCalc={[
        { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
        { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
        { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📊" },
      ]}
      relatedDiet={[
        { title: "한국 음식 칼로리표", href: "/diet/calorie-table/", emoji: "📊" },
        { title: "편의점 다이어트 가이드", href: "/diet/convenience-store/", emoji: "🏪" },
        { title: "1200칼로리 식단표", href: "/diet/1200kcal/", emoji: "📋" },
        { title: "외식 다이어트 가이드", href: "/diet/eating-out/", emoji: "🍽️" },
      ]}
      relatedProducts={[
        { title: "곤약 젤리 비교", href: "/products/?category=konjac", emoji: "🍬" },
        { title: "프로틴바 비교", href: "/products/?category=protein-bar", emoji: "🍫" },
        { title: "그릭요거트 비교", href: "/products/?category=yogurt", emoji: "🥛" },
        { title: "닭가슴살 최저가 비교", href: "/products/?category=chicken-breast", emoji: "🍗" },
      ]}
    >
      {/* Summary box */}
      <div className="mb-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <p className="mb-2 text-sm text-muted-foreground">
          다이어트에서 간식을 완전히 끊을 필요 없어. 똑똑하게 고르면 돼:
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; 하루 간식은 <strong className="text-foreground">1~2회, 총 200kcal 이내</strong>
          </li>
          <li>
            &#x2022; <strong className="text-foreground">단백질</strong>이 포함된 간식이 포만감이 오래 감
          </li>
          <li>
            &#x2022; <strong className="text-foreground">100kcal 이하</strong> 간식은 죄책감 없이 즐길 수 있어
          </li>
          <li>
            &#x2022; 야식 욕구는 <strong className="text-foreground">곤약 젤리·방울토마토</strong>로 달래자
          </li>
        </ul>
      </div>

      {/* Why snacks matter */}
      <h2 id="why-snacks" className="mt-10 mb-4 text-xl font-bold">
        다이어트에 간식이 필요한 이유
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        &quot;다이어트하는데 간식을 왜 먹어?&quot; 이렇게 생각할 수 있는데,
        사실 적절한 간식은 다이어트 성공률을 높여준다는 연구 결과가 있어. 이유는 간단해:
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li>
          &#x2022; <strong className="text-foreground">폭식 방지:</strong> 너무 오래 굶으면 다음 식사에서
          과식하게 돼. 적당한 간식이 이걸 막아줘
        </li>
        <li>
          &#x2022; <strong className="text-foreground">혈당 안정:</strong> 식사 사이에 혈당이 급락하면
          집중력 저하·짜증·단것 갈망이 생겨. 간식이 혈당을 안정시켜줘
        </li>
        <li>
          &#x2022; <strong className="text-foreground">영양소 보충:</strong> 끼니만으로 부족한
          단백질·식이섬유·비타민을 간식으로 보충할 수 있어
        </li>
        <li>
          &#x2022; <strong className="text-foreground">심리적 안정:</strong> &quot;아무것도 못 먹는다&quot;는
          박탈감이 다이어트 포기의 주요 원인이야. 맛있는 저칼로리 간식이 이걸 해소해줘
        </li>
      </ul>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        핵심은 <strong className="text-foreground">&quot;무엇을, 얼마나&quot;</strong> 먹느냐야.
        하루 칼로리 목표 안에서 간식을 배분하면 돼. 목표 칼로리가 아직 없다면{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        로 먼저 확인해봐.
      </p>

      {/* TOP 20 under 100kcal */}
      <h2 id="top20" className="mt-10 mb-4 text-xl font-bold">
        100kcal 이하 간식 TOP 20
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        100kcal 이하면 하루에 1~2개 먹어도 다이어트에 거의 영향이 없어.
        아래 리스트에서 취향에 맞는 간식을 골라봐.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-center font-semibold w-12">#</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">간식</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1회 분량</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">포만감</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "곤약 젤리", "1개 (130g)", "10", "0g", "중"],
              ["2", "방울토마토", "10개 (150g)", "30", "1g", "상"],
              ["3", "오이 (1개)", "200g", "30", "1g", "상"],
              ["4", "삶은 계란", "1개 (50g)", "75", "6g", "상"],
              ["5", "블루베리", "1컵 (100g)", "57", "1g", "중"],
              ["6", "딸기", "8개 (150g)", "50", "1g", "중"],
              ["7", "당근 스틱", "1컵 (100g)", "41", "1g", "상"],
              ["8", "셀러리 스틱", "3줄기 (100g)", "16", "1g", "중"],
              ["9", "그릭요거트 (무가당, 반컵)", "75g", "60", "8g", "상"],
              ["10", "사과 반개", "100g", "52", "0g", "상"],
              ["11", "키위 1개", "75g", "45", "1g", "중"],
              ["12", "무가당 두유", "200ml", "80", "7g", "중"],
              ["13", "미니 바나나", "1개 (80g)", "72", "1g", "중"],
              ["14", "무지방 우유", "200ml", "70", "7g", "중"],
              ["15", "파프리카 1/2개", "75g", "23", "1g", "중"],
              ["16", "에어프라이어 팝콘 (무버터)", "1컵 (15g)", "55", "2g", "중"],
              ["17", "김 스낵", "1팩 (5g)", "20", "2g", "하"],
              ["18", "한천 젤리", "1개 (100g)", "15", "0g", "중"],
              ["19", "수박", "1조각 (200g)", "60", "1g", "중"],
              ["20", "감귤 1개", "100g", "43", "1g", "중"],
            ].map(([rank, name, portion, cal, protein, fullness], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 text-center font-bold text-primary">{rank}</td>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{fullness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">포만감 최강 조합:</strong> 삶은 계란(75kcal) + 방울토마토(30kcal) = 105kcal.
          단백질 7g에 식이섬유까지 풍부해서 2~3시간 버틸 수 있어.
          곤약 젤리 가격 비교가 궁금하다면{" "}
          <Link href="/products/?category=konjac" className="text-primary hover:underline font-medium">
            곤약 젤리 최저가 비교
          </Link>
          를 확인해봐.
        </p>
      </div>

      {/* Fruits */}
      <h2 id="fruits" className="mt-10 mb-4 text-xl font-bold">
        과일 간식
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        과일은 비타민·식이섬유가 풍부한 자연 간식이야. 다만 과당이 있어서{" "}
        <strong className="text-foreground">1회에 주먹 1개 크기(약 100g)</strong>를 권장해.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">과일</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">100g 칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">당류</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">다이어트 적합도</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["딸기", "32", "4.9g", "강력 추천 — 저당·고섬유"],
              ["블루베리", "57", "10g", "추천 — 항산화 효과"],
              ["사과", "52", "10g", "추천 — 포만감 높음"],
              ["키위", "61", "9g", "추천 — 비타민C 풍부"],
              ["수박", "30", "6g", "추천 — 수분 보충"],
              ["감귤", "43", "9g", "추천 — 간편함"],
              ["바나나", "89", "12g", "보통 — 칼로리 높은 편"],
              ["포도", "69", "16g", "주의 — 당류 높음"],
              ["망고", "60", "14g", "주의 — 당류 높음"],
              ["건포도/말린 과일", "299", "59g", "비추천 — 칼로리 폭탄"],
            ].map(([name, cal, sugar, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{sugar}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">말린 과일 주의!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          말린 과일(건포도, 건망고 등)은 수분이 빠져 100g당 칼로리가 생과일의 3~5배야.
          건강해 보이지만 실제로는 칼로리 폭탄이니 주의해.
        </p>
      </div>

      {/* Dairy */}
      <h2 id="dairy" className="mt-10 mb-4 text-xl font-bold">
        유제품 간식
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        유제품은 <strong className="text-foreground">단백질과 칼슘</strong>을 동시에 보충할 수 있는 좋은 간식이야.
        핵심은 &quot;무가당&quot;을 선택하는 거야.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">유제품</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">추천 포인트</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["그릭요거트 (무가당, 100g)", "80~100", "10~15g", "단백질 최고, 포만감 좋음"],
              ["그릭요거트 (가당, 100g)", "120~150", "8~10g", "맛은 좋지만 당류 주의"],
              ["저지방 우유 (200ml)", "80", "7g", "칼슘 보충"],
              ["무지방 우유 (200ml)", "70", "7g", "칼로리 최저"],
              ["치즈 스틱 (1개)", "60~80", "5g", "간편한 단백질 간식"],
              ["코티지 치즈 (50g)", "50", "6g", "저지방·고단백"],
              ["무가당 두유 (200ml)", "80", "7g", "유당불내증 대안"],
            ].map(([name, cal, protein, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{protein}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nuts */}
      <h2 id="nuts" className="mt-10 mb-4 text-xl font-bold">
        견과류
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        견과류는 건강한 지방·단백질·식이섬유가 풍부하지만, <strong className="text-foreground">칼로리가 높아</strong>.
        반드시 소포장 제품을 사서 양을 조절하는 게 중요해.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">견과류</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1회 분량</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">건강한 지방</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["아몬드", "15알 (20g)", "120", "4g", "10g"],
              ["호두", "5알 (15g)", "100", "2g", "10g"],
              ["캐슈넛", "10알 (15g)", "85", "3g", "7g"],
              ["피스타치오", "20알 (15g)", "85", "3g", "7g"],
              ["마카다미아", "5알 (15g)", "110", "1g", "11g"],
              ["땅콩", "15알 (15g)", "85", "4g", "7g"],
              ["믹스넛 소포장", "1봉 (25g)", "150", "4g", "13g"],
            ].map(([name, portion, cal, protein, fat], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{fat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">견과류 규칙:</strong> &quot;한 줌&quot;이 적정량이야.
          봉지째 먹으면 순식간에 500kcal을 넘길 수 있으니, 반드시 소포장을 사거나 그릇에 덜어 먹어.
        </p>
      </div>

      {/* Processed snacks */}
      <h2 id="processed" className="mt-10 mb-4 text-xl font-bold">
        가공식품 간식
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점이나 마트에서 살 수 있는 다이어트 가공식품 간식도 정리했어.
        영양성분표에서 <strong className="text-foreground">칼로리·당류·단백질</strong>을 꼭 확인하고 고르자.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">간식 유형</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">선택 팁</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["곤약 젤리", "5~15", "0g", "칼로리 거의 0, 달달한 맛 충족"],
              ["프로틴바", "150~220", "15~20g", "당류 10g 이하 제품 선택"],
              ["닭가슴살 소시지", "100~150", "12~18g", "단백질 간식 1위"],
              ["닭가슴살 육포", "80~120", "15~18g", "씹는 맛이 있어 포만감 좋음"],
              ["김 스낵", "15~30", "1~3g", "저칼로리 짭짤 간식"],
              ["팝콘 (무버터)", "90~120", "2~3g", "양이 많아 보여서 심리적 만족"],
              ["통밀 크래커 (5개)", "80~100", "2g", "식이섬유 풍부"],
              ["쌀과자 (미니)", "60~80", "1g", "바삭한 식감, 소량만"],
              ["다크초콜릿 (1조각, 10g)", "55", "1g", "카카오 70% 이상 선택"],
              ["한천 젤리", "10~20", "0g", "곤약 젤리와 유사, 식이섬유 풍부"],
            ].map(([name, cal, protein, tip], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{protein}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Drink snacks */}
      <h2 id="drinks-snack" className="mt-10 mb-4 text-xl font-bold">
        음료 간식
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        배고플 때 음료로 허기를 달래는 것도 좋은 전략이야. 따뜻한 음료는 특히 포만감이 잘 느껴져.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음료</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">효과</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["따뜻한 물", "0", "공복감 줄이기, 대사 촉진"],
              ["녹차", "2", "카페인+카테킨으로 지방 연소 도움"],
              ["루이보스차", "2", "카페인 없어 저녁에도 OK"],
              ["캐모마일차", "2", "수면 질 개선, 스트레스 완화"],
              ["아메리카노", "5", "카페인으로 식욕 억제 효과"],
              ["탄산수", "0", "탄산이 포만감을 줌"],
              ["단백질 음료", "100~150", "단백질 20~30g 보충"],
              ["무가당 두유", "80", "단백질+이소플라본 보충"],
            ].map(([name, cal, effect], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Night snack alternatives */}
      <h2 id="night-snacks" className="mt-10 mb-4 text-xl font-bold">
        야식 대체 간식
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        밤 10시, 야식의 유혹이 찾아왔을 때! 치킨·라면·피자 대신 먹을 수 있는 대안을 준비해뒀어.
        <strong className="text-foreground"> 야식 욕구를 완전히 참는 것보다, 현명하게 대체하는 게 현실적</strong>이야.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">원래 야식</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">대체 간식</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["치킨 (2조각)", "440", "닭가슴살 소시지 1개", "120"],
              ["라면", "500", "곤약면 + 저칼로리 소스", "50"],
              ["피자 (2조각)", "560", "통밀 크래커 + 치즈 1장", "140"],
              ["떡볶이", "380", "곤약 떡볶이", "80"],
              ["아이스크림", "250", "냉동 그릭요거트 바", "100"],
              ["과자 (1봉)", "400", "팝콘 무버터 (소)", "90"],
              ["초콜릿", "250", "다크초콜릿 2조각", "110"],
              ["맥주 (캔)", "150", "탄산수 + 레몬즙", "5"],
            ].map(([original, originalCal, alt, altCal], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{original}</td>
                <td className="border border-border px-4 py-2 text-center text-red-500">{originalCal}</td>
                <td className="border border-border px-4 py-2 font-medium text-primary">{alt}</td>
                <td className="border border-border px-4 py-2 text-center text-green-600">{altCal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">야식 꿀팁:</strong> 야식 욕구가 올 때 먼저 따뜻한 물이나 차를 한 잔 마셔봐.
          10분 후에도 여전히 먹고 싶다면 위의 대체 간식 중 하나를 선택해.
          대부분은 물 한 잔으로 해결되는 경우가 많아.
        </p>
      </div>

      {/* Snacks to avoid */}
      <h2 id="avoid-snacks" className="mt-10 mb-4 text-xl font-bold">
        피해야 할 간식
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 간식들은 칼로리가 높고, 포만감은 낮고, 한번 먹기 시작하면 멈추기 어려워.
        다이어트 중이라면 <strong className="text-foreground">아예 사지 않는 게 최선</strong>이야.
      </p>
      <div className="mb-6 space-y-3">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">감자칩·과자류 (1봉 300~500kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            &quot;한 줌만&quot;이 불가능한 간식 대표. 바삭한 식감과 짭짤한 맛이 중독성이 강해서 한 번 열면 멈추기 어려워.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">초콜릿바·캔디류 (1개 200~300kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            순수 설탕+지방 조합. 혈당을 급격히 올렸다가 떨어뜨려서 더 단것을 찾게 만드는 악순환을 일으켜.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">빵류 — 크림빵·소보루·도넛 (300~500kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            밀가루+설탕+버터의 칼로리 폭탄. 포만감은 짧고 칼로리는 밥 한 끼 수준이야.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">가당 요거트·요구르트 (1개 100~200kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            &quot;건강한 간식&quot;으로 포장되어 있지만, 설탕이 10~20g이나 들어있는 경우가 많아. 반드시 &quot;무가당&quot;을 선택해.
          </p>
        </div>
      </div>

      {/* Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        간식 습관 만들기 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 간식 시간을 정해두자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        오전 10시, 오후 3시처럼 <strong className="text-foreground">정해진 시간</strong>에만 간식을 먹으면
        무의식적 간식을 방지할 수 있어. 식사 후 2~3시간 뒤가 적당해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 미리 소분해두자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        견과류·과일 등은 1회분씩 미리 소분해 놓으면 과식을 방지할 수 있어.
        &quot;봉지째 먹기&quot;는 다이어트의 최대 적이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 단백질 간식을 우선하자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        같은 칼로리라면 <strong className="text-foreground">단백질이 높은 간식</strong>이 포만감이 2배 이상 오래 가.
        삶은 계란, 그릭요거트, 닭가슴살 소시지가 대표적이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 물을 먼저 마시자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        배고픔과 갈증은 같은 신호로 느껴질 수 있어. 간식이 먹고 싶을 때 물 한 잔을 먼저 마시고
        10분 기다려봐. 갈증이었다면 욕구가 사라질 거야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 간식도 칼로리에 포함하자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        많은 사람들이 식사 칼로리만 계산하고 간식은 빼먹어.
        하루 칼로리 목표에 간식 칼로리도 포함시켜야 정확한 관리가 돼.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        를 활용해 식사+간식 총 칼로리를 관리해봐.
      </p>

      <p className="mt-6 mb-4 text-muted-foreground leading-relaxed">
        간식을 잘 선택하면 다이어트가 훨씬 즐거워져. 억지로 참는 다이어트는 오래 못 가.
        <strong className="text-foreground"> 맛있는 저칼로리 간식</strong>으로 현명하게 즐기면서 건강하게 빼자!
      </p>
    </WikiLayout>
  );
}
