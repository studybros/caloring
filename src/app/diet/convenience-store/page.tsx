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
  title: "편의점 다이어트 가이드 — 편의점에서 고르는 다이어트 식품 총정리",
  description:
    "편의점에서 다이어트 식품 고르는 법을 총정리했습니다. 도시락, 샐러드, 유제품, 음료, 간식 카테고리별 추천과 500kcal 이하 한 끼 조합까지 알려드립니다.",
  path: "/diet/convenience-store/",
  keywords: [
    "편의점 다이어트",
    "편의점 다이어트 음식",
    "편의점 식단",
    "편의점 다이어트 식품",
    "편의점 저칼로리",
    "편의점 다이어트 도시락",
    "편의점 샐러드",
    "편의점 한 끼",
    "다이어트 편의점 추천",
  ],
});

const FAQ_ITEMS = [
  {
    question: "편의점 음식으로 다이어트가 가능한가요?",
    answer:
      "충분히 가능합니다. 최근 편의점에서 저칼로리 도시락, 샐러드, 닭가슴살 제품 등 다이어트에 적합한 상품이 많이 출시되고 있어요. 핵심은 칼로리와 영양성분표를 확인하고, 적절한 조합으로 선택하는 것입니다.",
  },
  {
    question: "편의점 도시락 칼로리는 보통 얼마인가요?",
    answer:
      "일반 도시락은 500~800kcal, 저칼로리 도시락은 300~500kcal 정도입니다. 영양성분표를 꼭 확인하고, 400kcal 이하 제품을 선택하는 것을 권장합니다.",
  },
  {
    question: "편의점 다이어트의 장점은 뭔가요?",
    answer:
      "칼로리가 정확히 표시되어 있어 칼로리 관리가 쉽고, 조리 없이 바로 먹을 수 있어 편리합니다. 또한 소포장이라 과식을 방지하는 효과도 있습니다.",
  },
  {
    question: "편의점에서 피해야 할 음식은 뭔가요?",
    answer:
      "튀김류(치킨, 핫바 등), 크림빵·도넛 등 고당류 빵, 가당 음료, 컵라면이 대표적입니다. 이런 음식들은 500kcal 이상이면서 영양가가 낮아 다이어트에 적합하지 않습니다.",
  },
  {
    question: "편의점 삼각김밥은 다이어트에 괜찮은가요?",
    answer:
      "삼각김밥 1개는 약 180~220kcal로 칼로리 자체는 높지 않지만, 탄수화물 비중이 높고 단백질이 부족합니다. 삼각김밥을 선택한다면 닭가슴살이나 삶은 계란을 함께 먹어 단백질을 보충하세요.",
  },
  {
    question: "편의점 단백질 음료는 효과가 있나요?",
    answer:
      "단백질 음료는 간편하게 단백질 20~30g을 섭취할 수 있어 편리합니다. 다만 단백질 외에 당류가 많이 들어있는 제품도 있으니, 당류 5g 이하인 제품을 선택하세요.",
  },
];

const TOC = [
  { id: "why-convenience", title: "편의점 다이어트, 왜 괜찮을까?" },
  { id: "lunchbox", title: "도시락·김밥 고르기" },
  { id: "salad", title: "샐러드·신선식품" },
  { id: "dairy-protein", title: "유제품·단백질 식품" },
  { id: "drinks", title: "음료 고르기" },
  { id: "snacks", title: "간식 고르기" },
  { id: "meal-combos", title: "500kcal 이하 한 끼 조합" },
  { id: "avoid", title: "피해야 할 편의점 음식" },
  { id: "tips", title: "편의점 다이어트 실전 팁" },
];

export default function ConvenienceStorePage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 가이드", href: "/diet/" },
    { label: "편의점 다이어트 가이드" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "편의점 다이어트 가이드 — 편의점에서 고르는 다이어트 식품 총정리",
      description:
        "편의점에서 다이어트 식품 고르는 법. 도시락, 샐러드, 유제품, 음료, 간식 카테고리별 추천과 500kcal 이하 한 끼 조합.",
      url: "https://caloring.kr/diet/convenience-store/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 가이드", href: "/diet/" },
      { label: "편의점 다이어트 가이드" },
    ]),
  ];

  return (
    <WikiLayout
      title="편의점 다이어트 가이드"
      description="편의점에서 다이어트 식품 고르는 법을 총정리했어. 도시락부터 간식까지, 칼로리 낮은 제품만 쏙쏙 골라줄게."
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
        { title: "다이어트 간식 추천", href: "/diet/snacks/", emoji: "🍎" },
        { title: "1200칼로리 식단표", href: "/diet/1200kcal/", emoji: "📋" },
        { title: "외식 다이어트 가이드", href: "/diet/eating-out/", emoji: "🍽️" },
      ]}
      relatedProducts={[
        { title: "닭가슴살 최저가 비교", href: "/products/?category=chicken-breast", emoji: "🍗" },
        { title: "프로틴바 비교", href: "/products/?category=protein-bar", emoji: "🍫" },
        { title: "곤약 젤리 비교", href: "/products/?category=konjac", emoji: "🍬" },
        { title: "그릭요거트 비교", href: "/products/?category=yogurt", emoji: "🥛" },
      ]}
    >
      {/* Summary box */}
      <div className="mb-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">핵심 요약</p>
        <p className="mb-2 text-sm text-muted-foreground">
          편의점도 잘 고르면 훌륭한 다이어트 식당이 돼. 핵심만 기억하면:
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; <strong className="text-foreground">영양성분표</strong>를 반드시 확인 (칼로리, 단백질, 당류)
          </li>
          <li>
            &#x2022; 한 끼 <strong className="text-foreground">400~500kcal 이하</strong>로 조합
          </li>
          <li>
            &#x2022; <strong className="text-foreground">단백질 20g 이상</strong> 포함되는 조합을 선택
          </li>
          <li>
            &#x2022; 튀김류·가당 음료·크림빵은 <strong className="text-foreground">무조건 패스</strong>
          </li>
        </ul>
      </div>

      {/* Why convenience store diet works */}
      <h2 id="why-convenience" className="mt-10 mb-4 text-xl font-bold">
        편의점 다이어트, 왜 괜찮을까?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        &quot;편의점 음식으로 다이어트가 돼?&quot; 이런 의문이 들 수 있는데, 실제로 많은 사람들이 편의점 식단으로 감량에 성공하고 있어.
        그 이유가 있어:
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li>
          &#x2022; <strong className="text-foreground">칼로리가 정확히 표시돼 있어</strong> — 식당 음식과 달리
          포장지에 칼로리·영양성분이 명확하게 적혀 있어서 칼로리 계산이 정확해
        </li>
        <li>
          &#x2022; <strong className="text-foreground">소포장이라 과식 방지</strong> — 정해진 양만 먹게 되니까
          자연스럽게 식사량이 조절돼
        </li>
        <li>
          &#x2022; <strong className="text-foreground">접근성이 좋아</strong> — 전국 어디든 편의점이 있으니
          일정한 식단을 유지하기 쉬워
        </li>
        <li>
          &#x2022; <strong className="text-foreground">조리 필요 없음</strong> — 요리할 시간이 없는 직장인,
          자취생에게 현실적인 대안이야
        </li>
      </ul>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        물론 편의점 음식만으로 완벽한 영양 균형을 맞추기는 어렵다. 하지만 바쁜 일상에서{" "}
        <strong className="text-foreground">현실적으로 실천 가능한 다이어트 방법</strong>으로는 꽤 효과적이야.
        정확한 하루 칼로리 목표는{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        로 먼저 확인해봐.
      </p>

      {/* Lunchbox section */}
      <h2 id="lunchbox" className="mt-10 mb-4 text-xl font-bold">
        도시락·김밥 고르기
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점 도시락은 종류에 따라 칼로리가 300~800kcal로 천차만별이야.
        <strong className="text-foreground"> 영양성분표를 꼭 확인</strong>하고 400kcal 이하를 고르는 게 핵심이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">추천 도시락 유형</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">도시락 유형</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">특징</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["저칼로리/다이어트 도시락", "300~400", "20~30g", "밥 양 적고 닭가슴살·채소 위주"],
              ["닭가슴살 도시락", "350~450", "25~35g", "단백질 높고 포만감 좋음"],
              ["샐러드 도시락", "200~350", "10~20g", "칼로리 최저, 단백질 부족할 수 있음"],
              ["한식 도시락 (일반)", "500~700", "15~25g", "밥 양 많고 반찬이 기름진 경우 많음"],
              ["불고기/제육 도시락", "600~800", "20~30g", "소스로 인해 칼로리 높음"],
            ].map(([type, cal, protein, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{type}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{protein}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">김밥·삼각김밥</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">제품 유형</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">다이어트 적합도</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["삼각김밥 (참치마요)", "220", "6g", "보통 — 마요 때문에 칼로리 높음"],
              ["삼각김밥 (불고기)", "200", "7g", "보통"],
              ["삼각김밥 (김치볶음밥)", "210", "5g", "보통"],
              ["미니김밥 (1줄)", "200~250", "5~8g", "보통 — 탄수화물 위주"],
              ["닭가슴살 김밥", "280~350", "15~20g", "추천 — 단백질 높음"],
              ["저칼로리 곤약 김밥", "150~200", "5~8g", "추천 — 칼로리 낮음"],
            ].map(([type, cal, protein, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{type}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{protein}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">도시락 선택 공식:</strong> 칼로리 400kcal 이하 + 단백질 20g 이상 + 나트륨 800mg 이하.
          이 세 가지만 확인하면 대부분 괜찮은 선택이야.
        </p>
      </div>

      {/* Salad section */}
      <h2 id="salad" className="mt-10 mb-4 text-xl font-bold">
        샐러드·신선식품
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점 샐러드는 다이어트의 단짝이야. 다만 <strong className="text-foreground">드레싱 칼로리</strong>를
        간과하면 안 돼. 드레싱만 100~200kcal인 경우도 있거든.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">샐러드 유형</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리 (드레싱 포함)</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">추천도</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["닭가슴살 샐러드", "150~250", "15~25g", "강력 추천 — 단백질 풍부"],
              ["계란 샐러드", "200~300", "12~18g", "추천 — 포만감 좋음"],
              ["참치 샐러드", "180~280", "15~20g", "추천 — 단백질 높음"],
              ["과일 샐러드", "120~200", "2~4g", "보통 — 단백질 부족"],
              ["시저 샐러드", "250~350", "10~15g", "주의 — 시저 드레싱이 고칼로리"],
              ["곡물 샐러드", "300~400", "10~15g", "보통 — 칼로리 높은 편"],
            ].map(([type, cal, protein, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{type}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{protein}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">드레싱 팁:</strong> 오리엔탈·발사믹 드레싱은 30~50kcal로 가볍고,
        시저·랜치 드레싱은 100~200kcal로 무거워. 드레싱은 반만 쓰거나, 별도 포장된 저칼로리 드레싱을 선택해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타 신선식품</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; <strong className="text-foreground">삶은 계란 (1개, 75kcal):</strong> 단백질 6g, 간편한 단백질 보충</li>
        <li>&#x2022; <strong className="text-foreground">바나나 (1개, 100kcal):</strong> 식이섬유 풍부, 간식 대용</li>
        <li>&#x2022; <strong className="text-foreground">컵과일 (100~150kcal):</strong> 비타민 보충, 당류 주의</li>
        <li>&#x2022; <strong className="text-foreground">두부 (반모, 90kcal):</strong> 단백질 8g, 포만감 높음</li>
        <li>&#x2022; <strong className="text-foreground">닭가슴살 (1팩, 100~130kcal):</strong> 단백질 20g 이상, 최고의 선택</li>
      </ul>

      {/* Dairy & protein */}
      <h2 id="dairy-protein" className="mt-10 mb-4 text-xl font-bold">
        유제품·단백질 식품
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점의 유제품·단백질 코너는 다이어트의 보물창고야.
        <strong className="text-foreground"> 단백질 보충</strong>에 가장 편리한 선택지들이 모여 있어.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">제품 유형</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">팁</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["그릭요거트 (무가당)", "80~120", "10~15g", "당류 5g 이하 제품 선택"],
              ["그릭요거트 (가당)", "130~180", "8~12g", "맛은 좋지만 당류 높음"],
              ["단백질 음료", "100~150", "20~30g", "간편한 단백질 보충, 당류 확인"],
              ["저지방 우유 (200ml)", "80", "7g", "칼슘 보충에도 좋음"],
              ["무가당 두유 (200ml)", "80", "7g", "유당불내증이면 추천"],
              ["닭가슴살 (훈제/스모크)", "100~130", "20~25g", "최고의 단백질 식품"],
              ["닭가슴살 소시지", "100~150", "12~18g", "간식으로 좋음"],
              ["프로틴바", "150~220", "15~20g", "당류 10g 이하 제품 선택"],
              ["치즈 (슬라이스 2장)", "110", "7g", "지방 높으니 적당히"],
              ["삶은 계란 (2개)", "150", "12g", "가성비 최고의 단백질"],
            ].map(([type, cal, protein, tip], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{type}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center">{protein}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{tip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">가성비 단백질 1위:</strong> 삶은 계란 2개(150kcal, 단백질 12g)는
          가격 대비 최고의 단백질 식품이야. 닭가슴살 제품들의 가격이 궁금하다면{" "}
          <Link href="/products/?category=chicken-breast" className="text-primary hover:underline font-medium">
            닭가슴살 최저가 비교
          </Link>
          를 확인해봐.
        </p>
      </div>

      {/* Drinks */}
      <h2 id="drinks" className="mt-10 mb-4 text-xl font-bold">
        음료 고르기
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점 음료는 다이어트의 숨은 적이야. 무심코 고른 음료 하나에 200~300kcal이 숨어 있거든.
        <strong className="text-foreground"> 제로 칼로리·무가당</strong> 위주로 고르는 게 기본이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">추천 음료</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; <strong className="text-foreground">생수/탄산수 (0kcal):</strong> 최고의 선택</li>
        <li>&#x2022; <strong className="text-foreground">제로 칼로리 음료 (0~5kcal):</strong> 달달한 걸 원할 때</li>
        <li>&#x2022; <strong className="text-foreground">아메리카노 (5kcal):</strong> 카페인 + 거의 무칼로리</li>
        <li>&#x2022; <strong className="text-foreground">무가당 차 (0~5kcal):</strong> 보리차, 옥수수차, 녹차</li>
        <li>&#x2022; <strong className="text-foreground">무가당 두유 (80kcal):</strong> 단백질까지 보충 가능</li>
        <li>&#x2022; <strong className="text-foreground">단백질 음료 (100~150kcal):</strong> 간식 대용으로 좋음</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">주의할 음료</h3>
      <ul className="mb-4 space-y-1 text-muted-foreground">
        <li>&#x2022; <strong className="text-foreground">카페라떼/바닐라라떼 (150~250kcal):</strong> 우유+시럽으로 칼로리 높음</li>
        <li>&#x2022; <strong className="text-foreground">과일주스 (100~180kcal):</strong> 과당이 많아 혈당 급상승</li>
        <li>&#x2022; <strong className="text-foreground">탄산음료 (140~200kcal):</strong> 순수 설탕 덩어리</li>
        <li>&#x2022; <strong className="text-foreground">에너지드링크 (100~250kcal):</strong> 카페인+당류 폭탄</li>
        <li>&#x2022; <strong className="text-foreground">스무디류 (200~350kcal):</strong> 건강해 보이지만 칼로리 높음</li>
      </ul>

      {/* Snacks */}
      <h2 id="snacks" className="mt-10 mb-4 text-xl font-bold">
        간식 고르기
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점 간식은 유혹이 많지만, 100kcal 이하 간식도 꽤 많아.
        더 자세한 간식 정보는{" "}
        <Link href="/diet/snacks/" className="text-primary hover:underline font-medium">
          다이어트 간식 추천
        </Link>
        페이지에서 확인해봐.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">간식 유형</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">추천도</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["곤약 젤리 (1개)", "5~15", "강력 추천 — 칼로리 거의 없음"],
              ["삶은 계란 (1개)", "75", "강력 추천 — 단백질 보충"],
              ["닭가슴살 바/소시지", "100~150", "추천 — 단백질 간식"],
              ["무가당 그릭요거트", "80~120", "추천 — 포만감 좋음"],
              ["견과류 소포장", "150~200", "보통 — 좋은 지방이지만 양 조절 필요"],
              ["프로틴바", "150~220", "보통 — 당류 확인 필수"],
              ["초콜릿 (1개)", "200~280", "비추천 — 당류 과다"],
              ["과자류", "250~500", "비추천 — 빈 칼로리"],
              ["아이스크림", "200~400", "비추천 — 당류+지방"],
              ["크림빵/도넛", "300~450", "비추천 — 고칼로리"],
            ].map(([type, cal, note], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{type}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-muted-foreground">{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Meal combos */}
      <h2 id="meal-combos" className="mt-10 mb-4 text-xl font-bold">
        500kcal 이하 한 끼 조합
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        이게 제일 실용적인 부분이야. 편의점에서 <strong className="text-foreground">500kcal 이하</strong>로
        한 끼를 해결하는 조합을 정리했어. 그대로 따라 사면 돼.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">조합 1: 샐러드 세트 (약 350kcal)</h3>
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">닭가슴살 샐러드</td>
              <td className="border border-border px-4 py-2 text-center">200kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 20g</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">삶은 계란 1개</td>
              <td className="border border-border px-4 py-2 text-center">75kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 6g</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">무가당 두유 1팩</td>
              <td className="border border-border px-4 py-2 text-center">80kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 7g</td>
            </tr>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold">합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">355kcal</td>
              <td className="border border-border px-4 py-2 text-center font-bold">단백질 33g</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">조합 2: 도시락 세트 (약 450kcal)</h3>
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">저칼로리 도시락</td>
              <td className="border border-border px-4 py-2 text-center">350kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 20g</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">무가당 차 (보리차)</td>
              <td className="border border-border px-4 py-2 text-center">0kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">—</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">곤약 젤리 1개</td>
              <td className="border border-border px-4 py-2 text-center">10kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">—</td>
            </tr>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold">합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">360kcal</td>
              <td className="border border-border px-4 py-2 text-center font-bold">단백질 20g</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">조합 3: 삼각김밥 세트 (약 430kcal)</h3>
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">삼각김밥 1개</td>
              <td className="border border-border px-4 py-2 text-center">200kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 5g</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">닭가슴살 1팩</td>
              <td className="border border-border px-4 py-2 text-center">110kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 22g</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">그릭요거트 (무가당)</td>
              <td className="border border-border px-4 py-2 text-center">100kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 12g</td>
            </tr>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold">합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">410kcal</td>
              <td className="border border-border px-4 py-2 text-center font-bold">단백질 39g</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">조합 4: 단백질 세트 (약 380kcal)</h3>
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">닭가슴살 샐러드</td>
              <td className="border border-border px-4 py-2 text-center">200kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 20g</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">단백질 음료 1개</td>
              <td className="border border-border px-4 py-2 text-center">120kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 25g</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">바나나 1개</td>
              <td className="border border-border px-4 py-2 text-center">100kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 1g</td>
            </tr>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold">합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">420kcal</td>
              <td className="border border-border px-4 py-2 text-center font-bold">단백질 46g</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">조합 5: 간편식 세트 (약 480kcal)</h3>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">닭가슴살 김밥 1줄</td>
              <td className="border border-border px-4 py-2 text-center">320kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 18g</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">삶은 계란 1개</td>
              <td className="border border-border px-4 py-2 text-center">75kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">단백질 6g</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">제로 음료</td>
              <td className="border border-border px-4 py-2 text-center">0kcal</td>
              <td className="border border-border px-4 py-2 text-center text-muted-foreground">—</td>
            </tr>
            <tr className="bg-primary/5">
              <td className="border border-border px-4 py-2 font-bold">합계</td>
              <td className="border border-border px-4 py-2 text-center font-bold">395kcal</td>
              <td className="border border-border px-4 py-2 text-center font-bold">단백질 24g</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Foods to avoid */}
      <h2 id="avoid" className="mt-10 mb-4 text-xl font-bold">
        피해야 할 편의점 음식
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아래 음식들은 칼로리가 높고 영양가가 낮아서 다이어트에 <strong className="text-foreground">최악의 선택</strong>이야.
        가급적 손대지 말자.
      </p>
      <div className="mb-6 space-y-3">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">컵라면 (400~550kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            높은 칼로리에 나트륨 1,500mg 이상. 먹고 나면 부종까지 와서 최악이야. 국물까지 마시면 더 심해.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">튀김류 — 핫바·치킨·해시브라운 (250~500kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            기름에 튀긴 음식은 같은 중량 대비 칼로리가 2배 이상. 포만감도 오래 가지 않아.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">크림빵·도넛·파이류 (300~500kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            설탕+버터+밀가루의 조합. 혈당을 급격히 올리고, 금방 다시 배고파져서 과식의 시작이 돼.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">대용량 과자 (500~800kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            &quot;한 봉지만&quot; 하다가 다 먹는 경우가 많아. 한 봉지 칼로리가 한 끼 식사를 넘길 수 있어.
          </p>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-semibold text-red-700 dark:text-red-400">가당 음료 (140~350kcal)</p>
          <p className="mt-1 text-sm text-muted-foreground">
            콜라, 사이다, 과일주스, 달달한 커피 — 마시면 순간적으로 기분은 좋지만, 포만감 없이 칼로리만 추가돼.
          </p>
        </div>
      </div>

      {/* Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        편의점 다이어트 실전 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 영양성분표 읽는 법을 익히자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점 제품 뒷면에는 반드시 영양성분표가 있어.
        확인할 순서: <strong className="text-foreground">칼로리 → 단백질 → 당류 → 나트륨</strong>.
        칼로리는 낮을수록, 단백질은 높을수록, 당류와 나트륨은 낮을수록 좋아.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 배고플 때 편의점 가지 마세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        공복 상태에서 편의점에 들어가면 유혹에 지기 쉬워.
        미리 뭘 살지 정해두고 가면 불필요한 구매를 막을 수 있어.
        위의 한 끼 조합을 스크린샷 찍어두는 것도 좋은 방법이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 음료는 항상 제로/무가당으로</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        이것만 바꿔도 하루 <strong className="text-foreground">100~300kcal</strong>을 줄일 수 있어.
        물 → 탄산수 → 제로 음료 → 무가당 차 → 아메리카노. 이 순서로 선택하면 실패가 없어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 계산대 앞 유혹을 이겨내자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점 계산대 앞에는 초콜릿·껌·캔디가 진열되어 있는데, 이건 충동구매를 유도하는 마케팅이야.
        &quot;계산대 앞 제품은 안 산다&quot;는 규칙을 정해두면 훨씬 편해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 식사와 간식을 구분하자</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점에서 식사를 대체할 때는 <strong className="text-foreground">400~500kcal</strong>,
        간식은 <strong className="text-foreground">100~150kcal</strong>로 제한해.
        하루 총 칼로리가 목표 범위 안에 들어오도록{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        로 관리하면 돼.
      </p>

      <p className="mt-6 mb-4 text-muted-foreground leading-relaxed">
        편의점 다이어트는 완벽한 식단은 아니지만, <strong className="text-foreground">현실적으로 지속 가능한 방법</strong>이야.
        요리할 시간이 없는 날, 급하게 한 끼를 해결해야 할 때 이 가이드를 참고해봐.
        기본적인 칼로리 관리가 궁금하다면{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline font-medium">
          기초대사량 계산기
        </Link>
        로 나의 최소 칼로리를 확인하는 것도 잊지 말고!
      </p>
    </WikiLayout>
  );
}
