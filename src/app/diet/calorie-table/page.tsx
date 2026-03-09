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
  title: "한국 음식 칼로리표 — 자주 먹는 음식별 칼로리 총정리",
  description:
    "한국 음식 칼로리표를 카테고리별로 총정리했습니다. 밥류, 면류, 국/찌개, 반찬, 간식, 음료, 패스트푸드까지 1인분 기준 칼로리와 단백질을 한눈에 확인하세요.",
  path: "/diet/calorie-table/",
  keywords: [
    "음식 칼로리",
    "한국 음식 칼로리",
    "칼로리표",
    "음식별 칼로리",
    "칼로리 표",
    "음식 칼로리표",
    "한식 칼로리",
    "음식 칼로리 정리",
    "1인분 칼로리",
    "다이어트 칼로리",
  ],
});

const FAQ_ITEMS = [
  {
    question: "칼로리표의 수치는 정확한가요?",
    answer:
      "본 칼로리표는 식품의약품안전처 식품영양성분 데이터베이스와 농촌진흥청 식품성분표를 기반으로 작성했습니다. 다만 조리법, 재료량, 식당에 따라 실제 칼로리는 ±10~20% 차이가 날 수 있습니다.",
  },
  {
    question: "같은 음식인데 칼로리가 식당마다 다른 이유는?",
    answer:
      "식용유 사용량, 양념 비율, 1인분 양에 따라 같은 메뉴도 칼로리가 크게 달라집니다. 예를 들어 김치찌개의 경우 돼지고기 양에 따라 300~500kcal까지 차이가 납니다. 표의 수치는 일반적인 가정식 기준입니다.",
  },
  {
    question: "다이어트 중 하루에 얼마나 먹어야 하나요?",
    answer:
      "일반적으로 성인 여성은 1,500~1,800kcal, 남성은 1,800~2,200kcal가 권장됩니다. 감량 목적이라면 여기서 300~500kcal를 줄이는 게 안전합니다. 정확한 수치는 칼로리 계산기로 확인해보세요.",
  },
  {
    question: "밥 양을 줄이면 칼로리가 얼마나 줄어드나요?",
    answer:
      "흰쌀밥 1공기(210g)가 약 310kcal인데, 2/3공기로 줄이면 약 210kcal, 반공기면 약 155kcal입니다. 밥만 반공기로 줄여도 하루 300kcal 이상을 절약할 수 있어요.",
  },
  {
    question: "칼로리가 낮으면 무조건 좋은 건가요?",
    answer:
      "아닙니다. 칼로리가 낮아도 영양소가 부족하면 건강에 해롭습니다. 단백질·식이섬유·비타민이 포함된 음식을 선택하는 게 중요합니다. 칼로리뿐 아니라 영양 균형을 함께 고려하세요.",
  },
  {
    question: "외식할 때 칼로리를 어떻게 계산하나요?",
    answer:
      "이 칼로리표를 참고해 대략적인 수치를 파악하고, 소스·튀김·추가 토핑 등 숨은 칼로리를 더해 계산하세요. 정확한 계산은 어렵지만, 대략적인 범위만 알아도 식단 관리에 큰 도움이 됩니다.",
  },
];

const TOC = [
  { id: "rice", title: "밥류·덮밥" },
  { id: "noodles", title: "면류" },
  { id: "soup", title: "국·찌개·탕" },
  { id: "side-dishes", title: "반찬·밑반찬" },
  { id: "snacks-desserts", title: "간식·디저트" },
  { id: "drinks", title: "음료" },
  { id: "fast-food", title: "패스트푸드·분식" },
  { id: "low-calorie-tips", title: "저칼로리 식사 팁" },
];

export default function CalorieTablePage() {
  const breadcrumbs = [
    { label: "홈", href: "/" },
    { label: "다이어트 가이드", href: "/diet/" },
    { label: "한국 음식 칼로리표" },
  ];

  const jsonLd = [
    createArticleSchema({
      title: "한국 음식 칼로리표 — 자주 먹는 음식별 칼로리 총정리",
      description:
        "한국 음식 칼로리표를 카테고리별로 총정리. 밥류, 면류, 국/찌개, 반찬, 간식, 음료, 패스트푸드까지 1인분 기준 칼로리와 단백질.",
      url: "https://caloring.kr/diet/calorie-table/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 가이드", href: "/diet/" },
      { label: "한국 음식 칼로리표" },
    ]),
  ];

  return (
    <WikiLayout
      title="한국 음식 칼로리표"
      description="자주 먹는 한국 음식의 칼로리를 카테고리별로 총정리했어. 1인분 기준 칼로리와 단백질을 한눈에 확인해봐."
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
        { title: "1200칼로리 식단표", href: "/diet/1200kcal/", emoji: "📋" },
        { title: "편의점 다이어트 가이드", href: "/diet/convenience-store/", emoji: "🏪" },
        { title: "다이어트 간식 추천", href: "/diet/snacks/", emoji: "🍎" },
        { title: "외식 다이어트 가이드", href: "/diet/eating-out/", emoji: "🍽️" },
      ]}
      relatedProducts={[
        { title: "닭가슴살 최저가 비교", href: "/products/?category=chicken-breast", emoji: "🍗" },
        { title: "곤약 젤리 비교", href: "/products/?category=konjac", emoji: "🍬" },
        { title: "프로틴바 비교", href: "/products/?category=protein-bar", emoji: "🍫" },
        { title: "그릭요거트 비교", href: "/products/?category=yogurt", emoji: "🥛" },
      ]}
    >
      {/* Summary box */}
      <div className="mb-8 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
        <p className="mb-2 text-sm font-bold text-primary">이 페이지 활용법</p>
        <p className="mb-2 text-sm text-muted-foreground">
          다이어트 중이라면 이 칼로리표를 즐겨찾기 해두고 수시로 확인해봐. 핵심만 요약하면:
        </p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            &#x2022; 모든 수치는 <strong className="text-foreground">1인분 기준</strong>이야 (식약처·농진청 데이터 기반)
          </li>
          <li>
            &#x2022; <strong className="text-foreground">단백질(g)</strong>도 함께 표기해서 영양 균형 체크 가능
          </li>
          <li>
            &#x2022; <strong className="text-foreground">7개 카테고리</strong>로 분류해서 원하는 음식을 빠르게 찾을 수 있어
          </li>
          <li>
            &#x2022; 정확한 하루 칼로리 목표는{" "}
            <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
              칼로리 계산기
            </Link>
            에서 확인해봐
          </li>
        </ul>
      </div>

      {/* Rice dishes */}
      <h2 id="rice" className="mt-10 mb-4 text-xl font-bold">
        밥류·덮밥
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한국인의 주식인 밥류는 칼로리 차이가 꽤 크다. 같은 밥이라도 덮밥이냐 비빔밥이냐에 따라 200~300kcal 차이가 나.
        <strong className="text-foreground"> 밥 양을 조절</strong>하는 게 칼로리 관리의 기본이야.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음식명</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1인분</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리(kcal)</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질(g)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["흰쌀밥", "210g (1공기)", "310", "5"],
              ["현미밥", "210g (1공기)", "330", "7"],
              ["잡곡밥", "210g (1공기)", "320", "8"],
              ["김치볶음밥", "300g", "450", "12"],
              ["제육덮밥", "400g", "620", "28"],
              ["오므라이스", "350g", "530", "18"],
              ["비빔밥", "400g", "500", "15"],
              ["돌솥비빔밥", "450g", "550", "18"],
              ["김밥 (1줄)", "250g", "400", "12"],
              ["참치김밥 (1줄)", "270g", "430", "15"],
              ["볶음밥 (새우)", "300g", "480", "16"],
              ["카레라이스", "400g", "520", "14"],
              ["소고기덮밥", "400g", "580", "25"],
              ["주먹밥 (1개)", "120g", "180", "4"],
            ].map(([name, portion, cal, protein], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">칼로리 줄이기 팁:</strong> 밥을 반공기(155kcal)로 줄이고,
          곤약쌀을 1:1로 섞으면 같은 양을 먹어도 칼로리를 40% 가까이 줄일 수 있어.
        </p>
      </div>

      {/* Noodles */}
      <h2 id="noodles" className="mt-10 mb-4 text-xl font-bold">
        면류
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        면류는 탄수화물 비중이 높고, 국물까지 마시면 나트륨 섭취도 급증해.
        다이어트 중이라면 <strong className="text-foreground">면 양을 줄이거나 곤약면으로 대체</strong>하는 게 좋아.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음식명</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1인분</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리(kcal)</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질(g)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["라면 (봉지)", "1봉 + 물", "500", "10"],
              ["짜장면", "500g", "670", "18"],
              ["짬뽕", "600g", "530", "22"],
              ["칼국수", "500g", "450", "15"],
              ["잔치국수", "400g", "380", "12"],
              ["비빔국수", "350g", "420", "10"],
              ["냉면 (물냉면)", "500g", "460", "14"],
              ["비빔냉면", "450g", "520", "14"],
              ["쌀국수 (포)", "400g", "380", "12"],
              ["우동", "450g", "410", "14"],
              ["파스타 (토마토)", "350g", "480", "16"],
              ["파스타 (크림)", "350g", "620", "18"],
              ["막국수", "400g", "430", "12"],
              ["수제비", "500g", "400", "12"],
            ].map(([name, portion, cal, protein], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">주의:</strong> 짜장면·크림파스타는 600kcal 이상이야.
          면류를 먹고 싶다면 잔치국수·쌀국수·칼국수가 비교적 나은 선택이야. 국물은 되도록 남기는 게 좋아(나트륨 절감).
        </p>
      </div>

      {/* Soups */}
      <h2 id="soup" className="mt-10 mb-4 text-xl font-bold">
        국·찌개·탕
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        국·찌개는 한식의 핵심인데, 의외로 칼로리 차이가 크다.
        <strong className="text-foreground"> 맑은 국물</strong>이 걸쭉한 국물보다 칼로리가 훨씬 낮아.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음식명</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1인분</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리(kcal)</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질(g)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["미역국 (소고기)", "300ml", "90", "6"],
              ["된장찌개", "300ml", "130", "8"],
              ["김치찌개 (돼지고기)", "350ml", "200", "14"],
              ["순두부찌개", "350ml", "180", "12"],
              ["부대찌개", "400ml", "380", "18"],
              ["감자탕", "500ml", "350", "22"],
              ["삼계탕", "1인분", "650", "45"],
              ["설렁탕", "500ml", "350", "25"],
              ["갈비탕", "500ml", "420", "28"],
              ["떡만둣국", "400ml", "380", "14"],
              ["콩나물국", "300ml", "50", "4"],
              ["어묵탕", "300ml", "150", "10"],
              ["닭볶음탕", "1인분", "380", "30"],
              ["매운탕 (생선)", "400ml", "200", "22"],
            ].map(([name, portion, cal, protein], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">다이어트 추천:</strong> 콩나물국(50kcal), 미역국(90kcal), 된장찌개(130kcal)는
          칼로리가 낮으면서 포만감이 좋은 훌륭한 선택이야. 부대찌개·삼계탕은 고칼로리니까 참고해.
        </p>
      </div>

      {/* Side dishes */}
      <h2 id="side-dishes" className="mt-10 mb-4 text-xl font-bold">
        반찬·밑반찬
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        반찬은 한 가지당 칼로리가 낮아 보이지만, 여러 개를 먹으면 쉽게 200~300kcal이 추가돼.
        특히 <strong className="text-foreground">기름에 볶거나 튀긴 반찬</strong>은 칼로리가 급격히 올라가.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음식명</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1인분</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리(kcal)</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질(g)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["배추김치", "40g", "15", "1"],
              ["계란말이 (2쪽)", "60g", "90", "7"],
              ["계란 프라이 (1개)", "50g", "90", "6"],
              ["삶은 계란 (1개)", "50g", "75", "6"],
              ["시금치 나물", "60g", "30", "2"],
              ["콩나물 무침", "70g", "35", "3"],
              ["멸치볶음", "30g", "80", "8"],
              ["잡채", "100g", "180", "5"],
              ["두부 구이", "100g (반모)", "90", "8"],
              ["어묵볶음", "80g", "100", "6"],
              ["감자조림", "80g", "110", "2"],
              ["깻잎 장아찌", "30g", "25", "1"],
              ["오이무침", "60g", "20", "1"],
              ["동그랑땡 (3개)", "90g", "160", "10"],
            ].map(([name, portion, cal, protein], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">저칼로리 반찬 TOP 3:</strong> 나물류(시금치·콩나물·오이)는
          한 접시 20~35kcal로 마음껏 먹어도 부담 없어. 반면 잡채(180kcal)·동그랑땡(160kcal)은 생각보다 높으니 양 조절 필요해.
        </p>
      </div>

      {/* Snacks & desserts */}
      <h2 id="snacks-desserts" className="mt-10 mb-4 text-xl font-bold">
        간식·디저트
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        간식은 다이어트의 최대 적이라고도 하는데, 종류에 따라 천차만별이야.
        <strong className="text-foreground"> 어떤 간식을 고르느냐</strong>에 따라 하루 칼로리가 크게 달라져.
        더 자세한 간식 추천은{" "}
        <Link href="/diet/snacks/" className="text-primary hover:underline font-medium">
          다이어트 간식 추천
        </Link>
        에서 확인해봐.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음식명</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1인분</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리(kcal)</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질(g)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["고구마 (중)", "130g", "140", "2"],
              ["바나나 (1개)", "120g", "100", "1"],
              ["사과 (중)", "200g", "100", "0.5"],
              ["떡 (가래떡 1인분)", "100g", "230", "4"],
              ["호떡 (1개)", "100g", "280", "5"],
              ["붕어빵 (1개)", "80g", "200", "4"],
              ["초코파이 (1개)", "35g", "160", "2"],
              ["아이스크림 (콘)", "120g", "250", "4"],
              ["약과 (1개)", "40g", "180", "2"],
              ["곤약 젤리 (1개)", "130g", "10", "0"],
              ["프로틴바", "50g", "180", "15"],
              ["아몬드 (15알)", "20g", "120", "4"],
              ["팝콘 (무버터, 소)", "30g", "110", "3"],
              ["과일 젤리 (1봉)", "50g", "170", "0"],
            ].map(([name, portion, cal, protein], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Drinks */}
      <h2 id="drinks" className="mt-10 mb-4 text-xl font-bold">
        음료
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        음료의 숨은 칼로리를 모르면 다이어트가 실패하기 쉬워.
        <strong className="text-foreground"> 카페 음료 한 잔</strong>이 밥 한 공기와 맞먹는 경우도 있거든.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음료명</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">용량</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리(kcal)</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질(g)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["아메리카노", "355ml (톨)", "5", "0"],
              ["카페라떼", "355ml (톨)", "150", "7"],
              ["바닐라 라떼", "355ml (톨)", "230", "7"],
              ["카라멜 마끼아또", "355ml (톨)", "250", "7"],
              ["카페모카", "355ml (톨)", "290", "8"],
              ["프라푸치노 (카라멜)", "473ml (그란데)", "420", "5"],
              ["콜라", "355ml (캔)", "140", "0"],
              ["제로콜라", "355ml (캔)", "0", "0"],
              ["오렌지주스", "200ml", "90", "1"],
              ["두유 (무가당)", "200ml", "80", "7"],
              ["우유 (저지방)", "200ml", "80", "7"],
              ["맥주 (355ml)", "355ml (캔)", "150", "1"],
              ["소주 (1잔)", "50ml", "65", "0"],
              ["막걸리 (1사발)", "300ml", "200", "2"],
            ].map(([name, portion, cal, protein], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/30">
        <p className="text-sm font-semibold text-red-700 dark:text-red-400">음료 칼로리 주의!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          프라푸치노 한 잔(420kcal)은 비빔밥 한 그릇(500kcal)에 육박해.
          다이어트 중에는 <strong className="text-foreground">아메리카노·제로 음료·무가당 두유</strong>를 선택하자.
          시럽 추가, 휘핑크림은 +100~150kcal이야.
        </p>
      </div>

      {/* Fast food */}
      <h2 id="fast-food" className="mt-10 mb-4 text-xl font-bold">
        패스트푸드·분식
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        패스트푸드와 분식은 높은 칼로리의 대명사지만, 메뉴 선택에 따라 차이가 꽤 있어.
        완전히 안 먹기보다는 <strong className="text-foreground">현명하게 고르는 게 현실적</strong>이야.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">음식명</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">1인분</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리(kcal)</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">단백질(g)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["떡볶이", "300g", "380", "8"],
              ["순대 (1인분)", "200g", "320", "14"],
              ["튀김 (모듬 1인분)", "200g", "500", "10"],
              ["어묵꼬치 (2개)", "100g", "120", "8"],
              ["핫도그 (1개)", "120g", "300", "8"],
              ["치킨 (후라이드 2조각)", "160g", "440", "30"],
              ["치킨 (양념 2조각)", "180g", "520", "28"],
              ["피자 (1조각)", "120g", "280", "12"],
              ["햄버거 (기본)", "150g", "350", "18"],
              ["감자튀김 (미디엄)", "120g", "380", "4"],
              ["돈까스", "250g", "580", "28"],
              ["치즈돈까스", "300g", "720", "30"],
              ["토스트 (길거리)", "200g", "350", "12"],
              ["타코야끼 (8개)", "150g", "340", "10"],
            ].map(([name, portion, cal, protein], i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-muted/20" : ""}>
                <td className="border border-border px-4 py-2 font-medium">{name}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{portion}</td>
                <td className="border border-border px-4 py-2 text-center">{cal}</td>
                <td className="border border-border px-4 py-2 text-center text-muted-foreground">{protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6 rounded-lg border border-primary/20 bg-primary/5 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">분식집에서 그나마 나은 선택:</strong> 떡볶이(380kcal) + 어묵꼬치(120kcal)는
          총 500kcal로 한 끼로 괜찮은 편이야. 튀김 모듬은 500kcal이 넘으니 피하는 게 좋아.
        </p>
      </div>

      {/* Low calorie tips */}
      <h2 id="low-calorie-tips" className="mt-10 mb-4 text-xl font-bold">
        저칼로리 식사 팁
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        칼로리표를 외우는 것보다 중요한 건, <strong className="text-foreground">칼로리를 줄이는 습관</strong>을 만드는 거야.
        아래 팁들만 기억해도 하루 200~500kcal을 자연스럽게 줄일 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 밥 양을 2/3 또는 반공기로</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        밥 1공기(310kcal)를 반공기(155kcal)로 줄이면 매 끼 155kcal 절약.
        하루 세 끼면 <strong className="text-foreground">465kcal 차이</strong>야.
        잡곡밥이나 곤약쌀을 섞으면 포만감은 유지하면서 칼로리를 더 줄일 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 국물은 남기세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        찌개·라면 국물에는 나트륨과 지방이 녹아 있어.
        국물을 남기면 칼로리도 줄이고 부종도 예방할 수 있어. 특히 라면은 국물을 남기면 약 100kcal을 줄일 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 소스는 따로, 최소한으로</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        마요네즈 1큰술 = 100kcal, 참기름 1큰술 = 120kcal, 고추장 1큰술 = 30kcal.
        소스를 뿌리지 말고 <strong className="text-foreground">찍어 먹는 습관</strong>만 들여도 칼로리를 크게 줄일 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 조리법 바꾸기</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        같은 재료도 조리법에 따라 칼로리가 2배 이상 차이 나.
      </p>
      <div className="mb-6 overflow-x-auto">
        <table className="w-full border-collapse overflow-hidden rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-3 text-left font-semibold">조리법</th>
              <th className="border border-border px-4 py-3 text-left font-semibold">예시</th>
              <th className="border border-border px-4 py-3 text-center font-semibold">칼로리</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">삶기</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭가슴살 삶은 것 100g</td>
              <td className="border border-border px-4 py-2 text-center">165kcal</td>
            </tr>
            <tr className="bg-muted/20">
              <td className="border border-border px-4 py-2 font-medium">굽기</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭가슴살 구이 100g</td>
              <td className="border border-border px-4 py-2 text-center">185kcal</td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium">튀기기</td>
              <td className="border border-border px-4 py-2 text-muted-foreground">닭가슴살 튀김 100g</td>
              <td className="border border-border px-4 py-2 text-center">350kcal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 음료 칼로리를 줄이세요</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        카페라떼를 아메리카노로 바꾸면 하루 <strong className="text-foreground">145kcal 절약</strong>.
        제로 음료를 선택하면 140kcal 추가 절약. 이것만으로도 한 달에 0.5kg 감량 효과가 있어.
      </p>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        나의 정확한 하루 칼로리 필요량이 궁금하다면{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline font-medium">
          칼로리 계산기
        </Link>
        로 확인하고, 이 칼로리표를 참고해서 식단을 구성해봐.{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline font-medium">
          기초대사량 계산기
        </Link>
        로 최소 섭취 칼로리도 꼭 확인하고!
      </p>
    </WikiLayout>
  );
}
