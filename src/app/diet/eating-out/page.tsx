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
  title: "다이어트 중 외식 가이드 — 외식할 때 현명하게 고르는 법",
  description:
    "다이어트 중 외식할 때 메뉴 고르는 법을 총정리했습니다. 한식, 일식, 중식, 양식, 분식, 카페에서 추천 메뉴와 피할 메뉴, 외식 칼로리 비교표, 회식 대처법까지 알려드립니다.",
  path: "/diet/eating-out/",
  keywords: [
    "다이어트 외식",
    "외식 칼로리",
    "다이어트 중 외식",
    "외식 메뉴 추천",
    "다이어트 회식",
    "외식 다이어트",
    "다이어트 외식 메뉴",
    "저칼로리 외식",
    "다이어트 식당",
    "외식 칼로리표",
  ],
});

const FAQ_ITEMS = [
  {
    question: "다이어트 중 외식을 해도 되나요?",
    answer:
      "물론 됩니다. 외식을 완전히 피하면 사회생활이 어려워지고, 스트레스로 오히려 폭식할 수 있어요. 핵심은 메뉴를 현명하게 선택하는 것입니다. 이 가이드에서 상황별 추천 메뉴를 확인해보세요.",
  },
  {
    question: "외식 후 체중이 갑자기 늘었어요",
    answer:
      "외식 후 체중 증가는 대부분 나트륨으로 인한 수분 저류(부종)입니다. 실제 지방이 늘어난 게 아니에요. 물을 충분히 마시고 2~3일 평소 식단으로 돌아오면 자연스럽게 빠집니다.",
  },
  {
    question: "뷔페는 어떻게 대처하나요?",
    answer:
      "뷔페에서는 첫 접시에 샐러드와 단백질 위주로 채우세요. 한 바퀴 돌면서 뭐가 있는지 먼저 확인한 후 정말 먹고 싶은 것만 소량 담는 것이 좋습니다. 탄산수를 자주 마시면 과식을 줄일 수 있습니다.",
  },
  {
    question: "회식 자리에서 술은 어떻게 하나요?",
    answer:
      "술 자체의 칼로리보다 안주가 더 문제입니다. 소주 1잔(65kcal)은 크게 부담되지 않지만, 함께 먹는 삼겹살·치킨·탕류가 칼로리를 급격히 올립니다. 술은 2~3잔 이내로 제한하고, 안주는 과일·채소 위주로 선택하세요.",
  },
  {
    question: "배달 음식도 외식에 포함되나요?",
    answer:
      "네, 배달 음식도 같은 원칙이 적용됩니다. 오히려 배달 앱에서는 영양 정보를 확인할 수 있는 경우가 많아 선택하기 더 쉬울 수 있어요. 샐러드 전문점, 닭가슴살 도시락 등 다이어트 배달 음식도 많이 있습니다.",
  },
  {
    question: "외식 칼로리를 정확히 알 수 있나요?",
    answer:
      "정확히 알기는 어렵지만, 대략적인 범위는 파악할 수 있습니다. 이 가이드의 칼로리표를 참고하고, 칼로리 계산기를 활용해 하루 총 섭취량을 관리하세요. ±20% 정도의 오차는 감안하되, 대략적으로라도 파악하는 게 안 하는 것보다 훨씬 낫습니다.",
  },
];

const TOC = [
  { id: "mindset", title: "외식 다이어트 마인드셋" },
  { id: "korean", title: "한식 외식 가이드" },
  { id: "japanese", title: "일식 외식 가이드" },
  { id: "chinese", title: "중식 외식 가이드" },
  { id: "western", title: "양식 외식 가이드" },
  { id: "snack-bar", title: "분식 외식 가이드" },
  { id: "cafe", title: "카페 가이드" },
  { id: "calorie-compare", title: "외식 칼로리 비교표" },
  { id: "company-dinner", title: "회식 대처법" },
  { id: "tips", title: "외식 다이어트 실전 팁" },
];

export default function EatingOutPage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 가이드", href: "/diet/" },
    { label: "외식 다이어트 가이드" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "다이어트 중 외식 가이드 — 외식할 때 현명하게 고르는 법",
      description:
        "다이어트 중 외식할 때 메뉴 고르는 법. 한식, 일식, 중식, 양식, 분식, 카페 추천 메뉴와 외식 칼로리 비교표.",
      url: "https://caloring.kr/diet/eating-out/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 가이드", href: "/diet/" },
      { label: "외식 다이어트 가이드" },
    ]),
  ];

  return (
    <WikiLayout
      title="외식 다이어트 가이드"
      description="외식할 때 현명하게 메뉴를 고르는 법을 총정리했어. 한식부터 카페까지, 상황별 추천 메뉴를 알려줄게."
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
        { title: "다이어트 간식 추천", href: "/diet/snacks/", emoji: "🍎" },
        { title: "1200칼로리 식단표", href: "/diet/1200kcal/", emoji: "📋" },
      ]}
      relatedProducts={[
        { title: "닭가슴살 최저가 비교", href: "/products/?category=chicken-breast", emoji: "🍗" },
        { title: "프로틴바 비교", href: "/products/?category=protein-bar", emoji: "🍫" },
        { title: "그릭요거트 비교", href: "/products/?category=yogurt", emoji: "🥛" },
        { title: "곤약 젤리 비교", href: "/products/?category=konjac", emoji: "🍬" },
      ]}
    >
      {/* Summary box */}
      <div className="mb-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <p className="mb-2 text-sm text-muted-foreground">
          외식 = 다이어트 실패가 아니야. 메뉴만 잘 고르면 충분히 관리할 수 있어:
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; <strong className="text-foreground">구이·찜·탕 &gt; 튀김·볶음</strong> (조리법이 핵심)
          </li>
          <li>
            &#x2022; <strong className="text-foreground">밥은 반공기</strong>, 소스는 따로 요청
          </li>
          <li>
            &#x2022; 한 끼 외식은 <strong className="text-foreground">600kcal 이내</strong>를 목표로
          </li>
          <li>
            &#x2022; 외식한 날은 나머지 끼니를 <strong className="text-foreground">가볍게 조절</strong>
          </li>
        </ul>
      </div>

      {/* Mindset */}
      <h2 id="mindset" className="mt-10 mb-4 text-xl font-bold">
        외식 다이어트 마인드셋
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        다이어트 중 외식에 대한 스트레스는 오히려 다이어트를 방해해.
        중요한 건 <strong className="text-foreground">&quot;외식 자체&quot;가 아니라 &quot;무엇을 선택하느냐&quot;</strong>야.
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li>
          &#x2022; <strong className="text-foreground">80/20 법칙:</strong> 일주일 21끼 중 17끼(80%)만 계획대로 먹으면
          4끼(20%)는 외식해도 충분히 감량할 수 있어
        </li>
        <li>
          &#x2022; <strong className="text-foreground">하루 단위가 아닌 주 단위로:</strong> 오늘 외식으로 많이 먹었다면
          내일 조금 가볍게 먹으면 돼. 하루에 집착하지 말자
        </li>
        <li>
          &#x2022; <strong className="text-foreground">완벽을 버리자:</strong> &quot;외식했으니 다이어트 망했다&quot;는
          최악의 생각이야. 한 끼의 외식이 한 달의 노력을 무너뜨리지 않아
        </li>
      </ul>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        하루 칼로리 목표를 설정해두면 외식 때 메뉴를 고르기 훨씬 쉬워져.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        로 나의 목표를 먼저 확인해봐. 더 상세한 음식별 칼로리는{" "}
        <Link href="/diet/calorie-table/" className="text-primary hover:underline font-medium">
          한국 음식 칼로리표
        </Link>
        에서 확인할 수 있어.
      </p>

      {/* Korean food */}
      <h2 id="korean" className="mt-10 mb-4 text-xl font-bold">
        한식 외식 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한식은 다이어트에 가장 유리한 외식 유형이야.
        <strong className="text-foreground"> 찌개·탕·나물·구이 위주</strong>로 선택하면 칼로리를 낮게 유지할 수 있어.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">추천도</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">비고</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["된장찌개 + 밥 반공기", "290", "강력 추천", "저칼로리 + 단백질 적당"],
              ["순두부찌개 + 밥 반공기", "340", "강력 추천", "두부로 단백질 보충"],
              ["비빔밥 (밥 줄여서)", "400", "추천", "채소 풍부, 고추장 소량"],
              ["쌈밥 + 된장찌개", "450", "추천", "쌈채소로 포만감 높음"],
              ["생선구이 정식", "450", "추천", "양질의 단백질+오메가3"],
              ["불고기 + 밥 반공기", "480", "보통", "소스에 당분 포함"],
              ["김치찌개 + 밥", "510", "보통", "돼지고기 양에 따라 다름"],
              ["제육볶음 + 밥", "620", "주의", "소스 칼로리 높음"],
              ["삼겹살 (200g) + 밥", "700+", "주의", "지방이 많아 고칼로리"],
              ["갈비찜 + 밥", "750+", "비추천", "소스+지방 폭탄"],
            ].map(([menu, cal, rec, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{menu}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{rec}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">한식 팁:</strong> 밥을 반공기로 달라고 하거나, 처음부터 밥을 덜어내.
          반찬은 나물 위주로 먹고, 볶음 반찬은 살짝만. 국/찌개 국물은 남기면 나트륨을 줄일 수 있어.
        </p>
      </div>

      {/* Japanese food */}
      <h2 id="japanese" className="mt-10 mb-4 text-xl font-bold">
        일식 외식 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        일식은 생선을 많이 사용해서 다이어트에 좋을 것 같지만,
        <strong className="text-foreground"> 밥(초밥)과 튀김(돈까스·덴뿌라)</strong>의 칼로리가 높아서 메뉴 선택이 중요해.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">추천도</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">비고</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["사시미 (회, 10점)", "250", "강력 추천", "순수 단백질, 저칼로리"],
              ["연어 사시미 (10점)", "300", "추천", "오메가3 풍부"],
              ["우동 (맑은 국물)", "400", "추천", "면 양 줄이면 더 좋음"],
              ["초밥 (8개)", "450", "보통", "밥 양이 많은 편"],
              ["소바 (메밀국수)", "380", "추천", "저칼로리 면류"],
              ["규동 (소고기덮밥)", "550", "보통", "밥 양이 많음"],
              ["돈까스", "580", "주의", "튀김이라 칼로리 높음"],
              ["카츠동 (돈까스덮밥)", "700", "비추천", "튀김+밥+소스"],
              ["라멘", "600", "주의", "국물에 지방 많음"],
              ["덴뿌라 정식", "650", "비추천", "튀김 모음 = 칼로리 폭탄"],
            ].map(([menu, cal, rec, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{menu}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{rec}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chinese food */}
      <h2 id="chinese" className="mt-10 mb-4 text-xl font-bold">
        중식 외식 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        중식은 기름을 많이 사용하는 조리법이 많아서 다이어트에는 어려운 편이야.
        하지만 메뉴만 잘 고르면 <strong className="text-foreground">나름 관리할 수 있어</strong>.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">추천도</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">비고</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["짬뽕 (국물 남기기)", "430", "그나마 추천", "해산물 단백질+채소 많음"],
              ["유산슬", "450", "보통", "해산물+채소, 전분 소스 주의"],
              ["울면", "480", "보통", "해산물 풍부"],
              ["짜장면", "670", "주의", "춘장 기름 많음"],
              ["볶음밥", "600", "주의", "기름+밥 조합"],
              ["탕수육 (소)", "650", "주의", "튀김+소스 = 칼로리 폭탄"],
              ["깐풍기", "700+", "비추천", "튀긴 닭+매운 소스"],
              ["마파두부 + 밥", "550", "보통", "두부 단백질 있지만 기름 많음"],
              ["짜장면 + 탕수육 세트", "1,200+", "비추천", "한 끼 칼로리 초과"],
            ].map(([menu, cal, rec, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{menu}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{rec}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">중식은 다이어트 난이도 최상!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          중식은 대부분의 메뉴가 600kcal 이상이야. 중식을 먹어야 한다면 짬뽕(국물 남기기)이 가장 나은 선택이고,
          여러 명이 나눠 먹는 게 칼로리를 줄이는 핵심이야. 곁들이 밥은 안 먹는 게 좋아.
        </p>
      </div>

      {/* Western food */}
      <h2 id="western" className="mt-10 mb-4 text-xl font-bold">
        양식 외식 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        양식은 버터·크림·치즈를 많이 사용해서 칼로리가 높은 편이지만,
        <strong className="text-foreground"> 스테이크·샐러드·그릴</strong> 메뉴는 다이어트에 나쁘지 않아.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">추천도</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">비고</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["닭가슴살 샐러드", "300", "강력 추천", "고단백·저칼로리"],
              ["연어 스테이크", "380", "강력 추천", "오메가3+단백질"],
              ["치킨 그릴 + 채소", "400", "추천", "소스 따로 요청"],
              ["스테이크 (안심 200g)", "450", "추천", "양질의 단백질"],
              ["토마토 파스타", "480", "보통", "크림보다 나은 선택"],
              ["리조또", "550", "보통", "치즈·버터 칼로리 높음"],
              ["함버거 (기본)", "550", "보통", "감자튀김 빼면 OK"],
              ["크림 파스타", "620", "주의", "크림+버터+치즈"],
              ["피자 (3조각)", "840", "비추천", "치즈+탄수화물 폭탄"],
              ["카르보나라", "680", "비추천", "크림+베이컨+치즈"],
            ].map(([menu, cal, rec, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{menu}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{rec}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">양식 팁:</strong> 파스타는 토마토 소스 &gt; 오일 소스 &gt; 크림 소스 순으로 선택해.
          스테이크는 안심(등심보다 지방 적음)이 좋고, 사이드는 샐러드로 교체 요청하면 칼로리를 크게 줄일 수 있어.
        </p>
      </div>

      {/* Snack bar food */}
      <h2 id="snack-bar" className="mt-10 mb-4 text-xl font-bold">
        분식 외식 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        분식은 탄수화물+기름의 조합이 많아서 다이어트에 불리하지만,
        <strong className="text-foreground"> 선택과 양 조절</strong>로 어느 정도 관리가 가능해.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">메뉴</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">추천도</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">비고</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["어묵꼬치 (2개)", "120", "추천", "저칼로리+단백질"],
              ["잔치국수 (소)", "380", "보통", "면 양 줄이면 OK"],
              ["떡볶이 (1인분)", "380", "보통", "양 조절이 핵심"],
              ["순대 (1인분)", "320", "보통", "단백질 있지만 지방도 있음"],
              ["김밥 (1줄)", "400", "보통", "탄수화물 위주"],
              ["라볶이", "550", "주의", "라면+떡볶이 조합"],
              ["튀김 모듬", "500+", "비추천", "기름 폭탄"],
              ["떡볶이+순대+튀김 세트", "900+", "비추천", "세트 메뉴의 유혹을 이겨내자"],
            ].map(([menu, cal, rec, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{menu}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{rec}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cafe */}
      <h2 id="cafe" className="mt-10 mb-4 text-xl font-bold">
        카페 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        카페 음료는 다이어트의 <strong className="text-foreground">숨은 칼로리 폭탄</strong>이야.
        프라푸치노 한 잔이 밥 한 그릇보다 칼로리가 높을 수 있거든.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음료</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">추천도</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">팁</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["아메리카노 (톨)", "5", "강력 추천", "무칼로리에 가까움"],
              ["아이스티 (무가당)", "5", "강력 추천", "달달함 없이 상쾌"],
              ["녹차 라떼 (무가당)", "120", "추천", "시럽 빼달라고 요청"],
              ["카페라떼 (저지방 우유)", "100", "추천", "저지방 우유로 변경"],
              ["카페라떼 (일반)", "150", "보통", "우유 칼로리 포함"],
              ["바닐라 라떼", "230", "주의", "바닐라 시럽 칼로리"],
              ["카라멜 마끼아또", "250", "주의", "캬라멜 소스+시럽"],
              ["카페모카", "290", "주의", "초콜릿+우유 조합"],
              ["프라푸치노류", "350~450", "비추천", "아이스크림급 칼로리"],
              ["스무디/에이드", "250~400", "비추천", "시럽+과일 = 높은 당류"],
            ].map(([drink, cal, rec, tip], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{drink}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{rec}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">주문 시 요청 사항:</strong> &quot;시럽 빼주세요&quot;, &quot;저지방 우유로 바꿔주세요&quot;,
        &quot;휘핑크림 빼주세요&quot; — 이 세 마디만으로 100~200kcal을 줄일 수 있어.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        카페 디저트도 주의해야 해. 마카롱(1개 100kcal), 브라우니(1개 300kcal), 치즈케이크(1조각 400kcal).
        프라푸치노+치즈케이크 세트는 <strong className="text-foreground">850kcal</strong>로 한 끼 식사를 넘겨.
      </p>

      {/* Calorie comparison table */}
      <h2 id="calorie-compare" className="mt-10 mb-4 text-xl font-bold">
        외식 칼로리 비교표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        같은 상황에서 어떤 메뉴를 고르느냐에 따라 칼로리가 얼마나 달라지는지 비교해봤어.
        <strong className="text-foreground"> 왼쪽(나쁜 선택) vs 오른쪽(좋은 선택)</strong>을 비교해봐.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">상황</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">나쁜 선택</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">좋은 선택</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">절약</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["한식", "제육볶음+밥", "620", "된장찌개+밥 반공기", "290", "330"],
              ["일식", "카츠동", "700", "사시미+밥 반공기", "400", "300"],
              ["중식", "짜장면+탕수육", "1,200", "짬뽕 (국물 남기기)", "430", "770"],
              ["양식", "크림파스타+콜라", "760", "연어스테이크+샐러드", "420", "340"],
              ["분식", "떡볶이+순대+튀김", "900", "떡볶이+어묵꼬치", "500", "400"],
              ["카페", "프라푸치노+케이크", "850", "아메리카노", "5", "845"],
            ].map(([situation, bad, badCal, good, goodCal, saved], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{situation}</td>
                <td className="border border-border px-4 py-2 text-red-500">{bad}</td>
                <td className="border border-border px-4 py-2 text-center text-red-500">{badCal}</td>
                <td className="border border-border px-4 py-2 text-green-600 font-medium">{good}</td>
                <td className="border border-border px-4 py-2 text-center text-green-600">{goodCal}</td>
                <td className="border border-border px-4 py-2 text-center font-bold text-primary">-{saved}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">선택의 차이:</strong> 같은 외식이라도 메뉴 선택만으로
          300~800kcal을 줄일 수 있어. 이 차이가 일주일에 3번이면 약 1,000~2,400kcal,
          즉 <strong className="text-foreground">지방 약 130~300g 차이</strong>야.
        </p>
      </div>

      {/* Company dinner tips */}
      <h2 id="company-dinner" className="mt-10 mb-4 text-xl font-bold">
        회식 대처법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        회식은 다이어트의 최대 난관 중 하나야. 하지만 적절한 전략이 있으면 크게 무너지지 않아.
        <strong className="text-foreground"> 완벽한 식단을 지키려 하지 말고, 피해를 최소화</strong>하는 게 핵심이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">회식 전 준비</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 회식이 예정되어 있으면 <strong className="text-foreground">아침·점심을 가볍게</strong> 먹어 (샐러드, 닭가슴살 등)</li>
        <li>&#x2022; 회식 직전에 <strong className="text-foreground">삶은 계란 1~2개</strong>를 먹어두면 과식을 방지할 수 있어</li>
        <li>&#x2022; 물을 충분히 마셔두면 포만감이 올라가</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">회식 중 전략</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; <strong className="text-foreground">채소·쌈을 먼저</strong> 먹어 — 식이섬유가 혈당 급상승을 막아줘</li>
        <li>&#x2022; <strong className="text-foreground">구운 고기 위주</strong>로 먹고, 소스·볶음류는 소량만</li>
        <li>&#x2022; 술은 <strong className="text-foreground">소주 2~3잔 또는 와인 2잔</strong> 이내로 제한</li>
        <li>&#x2022; 안주는 과일·채소·두부류 위주로 선택</li>
        <li>&#x2022; 탄산수를 자주 마시면 포만감이 올라가고 술 양이 줄어</li>
        <li>&#x2022; <strong className="text-foreground">&quot;아 다이어트 중이에요&quot;보다 &quot;오늘 속이 안 좋아서요&quot;</strong>가 더 먹통 없이 통해</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">회식 후 회복</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; 다음 날 아침 <strong className="text-foreground">물을 많이</strong> 마셔 (나트륨 배출)</li>
        <li>&#x2022; 다음 끼니는 <strong className="text-foreground">가볍게</strong> — 샐러드, 과일, 요거트 정도</li>
        <li>&#x2022; 가벼운 산책이나 스트레칭으로 대사를 활성화해</li>
        <li>&#x2022; <strong className="text-foreground">자책하지 마</strong> — 한 번의 회식이 한 달의 노력을 무너뜨리지 않아</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">술 종류별 칼로리</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">술</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1잔 기준</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">비고</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["소주", "50ml (1잔)", "65", "안주가 진짜 문제"],
              ["맥주", "355ml (캔)", "150", "양이 많아지기 쉬움"],
              ["와인 (레드)", "150ml (1잔)", "125", "항산화 효과 있음"],
              ["와인 (화이트)", "150ml (1잔)", "120", "레드보다 약간 낮음"],
              ["하이볼", "250ml", "100", "칼로리 비교적 낮음"],
              ["막걸리", "300ml (사발)", "200", "당류 높음"],
              ["위스키", "45ml (1잔)", "105", "스트레이트면 낮음"],
              ["폭탄주 (소맥)", "350ml", "200", "빨리 취해서 안주 더 먹게 됨"],
            ].map(([drink, portion, cal, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{drink}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        외식 다이어트 실전 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 메뉴판을 미리 확인하자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        식당에 가기 전 메뉴판을 온라인으로 확인하고 뭘 먹을지 정해두면,
        현장에서 유혹에 지는 걸 방지할 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 조리법에 주목하자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        같은 재료도 조리법에 따라 칼로리가 2~3배 차이 나.
        <strong className="text-foreground"> 구이·찜·삶기 &gt; 볶음 &gt; 튀김</strong> 순서로 선택하면 실패가 없어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. &quot;따로 주세요&quot;를 습관화하자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        소스·드레싱을 따로 달라고 하면 <strong className="text-foreground">30~50%의 소스를 절약</strong>할 수 있어.
        찍어 먹으면 맛은 유지하면서 칼로리를 크게 줄일 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 천천히 먹자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        포만감은 식사 시작 후 약 20분 뒤에 느껴져. 빨리 먹으면 포만감을 느끼기 전에 과식하게 돼.
        <strong className="text-foreground"> 최소 20분 이상</strong> 식사 시간을 가지려고 노력해봐.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 물·차를 먼저 마시자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        식사 전 물 1~2잔을 마시면 위가 어느 정도 채워져서 자연스럽게 덜 먹게 돼.
        연구에 따르면 식전 물 500ml로 식사량을 약 <strong className="text-foreground">13% 줄일 수 있다</strong>고 해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">6. 남기는 용기를 가지자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        &quot;남기면 아깝다&quot;는 생각이 과식의 원인이 되는 경우가 많아.
        음식을 다 먹는 것보다 <strong className="text-foreground">몸에 필요한 양만 먹는 게 더 가치 있는 선택</strong>이야.
        포장해가는 것도 좋은 방법이고.
      </p>

      <p className="mt-6 mb-4 text-muted-foreground leading-relaxed">
        외식은 즐거운 사회생활의 일부야. 다이어트 때문에 모든 외식을 포기하면 오래 못 가.
        이 가이드의 팁들을 활용해서 <strong className="text-foreground">즐기면서도 관리하는 외식 습관</strong>을 만들어봐.
        나의 하루 칼로리 목표는{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        에서, 현재 체중 상태는{" "}
        <Link href="/calc/bmi/" className="text-primary hover:underline font-medium">
          BMI 계산기
        </Link>
        에서 확인해봐!
      </p>
    </WikiLayout>
  );
}
