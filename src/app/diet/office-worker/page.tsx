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
  title: "직장인 다이어트 가이드 — 회사원 식단표·편의점·밀프렙·회식 대처법 총정리",
  description:
    "바쁜 직장인을 위한 현실적인 다이어트 전략. 편의점·구내식당·배달 활용법, 밀프렙 가이드, 야근·회식 대처법, 일주일 직장인 식단표까지 총정리. 시간 없어도 살 뺄 수 있는 방법을 알아보세요.",
  path: "/diet/office-worker/",
  keywords: [
    "직장인 다이어트",
    "직장인 식단",
    "회사원 다이어트",
    "바쁜 사람 다이어트",
    "직장인 다이어트 식단",
    "직장인 점심",
    "회식 다이어트",
    "편의점 다이어트",
    "밀프렙 다이어트",
    "직장인 살빼기",
  ],
});

const tocItems = [
  { id: "reality", title: "직장인 다이어트가 어려운 이유" },
  { id: "convenience-store", title: "편의점 다이어트 공략법" },
  { id: "cafeteria", title: "구내식당·배달 활용법" },
  { id: "meal-prep", title: "밀프렙(Meal Prep) 가이드" },
  { id: "meal-plan", title: "일주일 직장인 식단표" },
  { id: "overtime-dinner", title: "야근·회식 대처법" },
  { id: "tips", title: "직장인 다이어트 성공 팁" },
  { id: "cautions", title: "주의사항" },
];

const faqItems = [
  {
    question: "구내식당에서 다이어트할 수 있나요?",
    answer:
      "네, 충분히 가능합니다. 핵심은 밥 양을 반공기로 줄이고, 국물 요리보다 구이·찜 반찬을 선택하며, 나물과 채소 반찬을 최대한 많이 담는 것입니다. 튀김류와 떡볶이·라면 같은 고탄수 메뉴는 피하고, 단백질이 있는 메인 반찬은 반드시 챙기세요.",
  },
  {
    question: "회식 때 술을 안 마실 수 없는데 어떡하나요?",
    answer:
      "술을 완전히 거부하기 어렵다면 전략적으로 접근하세요. 소주·맥주보다 칼로리가 낮은 하이볼이나 와인을 선택하고, 술 한 잔마다 물 한 잔을 마시는 습관을 들이세요. 안주는 과일·채소 위주로 먹고, 다음 날은 가볍게 먹어서 주간 총 칼로리를 맞추면 됩니다.",
  },
  {
    question: "편의점 음식으로 다이어트가 가능한가요?",
    answer:
      "네. 편의점에도 다이어트에 좋은 음식이 많습니다. 닭가슴살 샐러드, 삶은 계란, 그릭요거트, 닭가슴살 제품, 두부면 등이 대표적입니다. 영양 성분표를 확인하는 습관만 들이면 편의점에서도 충분히 칼로리와 단백질을 관리할 수 있습니다.",
  },
  {
    question: "밀프렙은 얼마나 보관할 수 있나요?",
    answer:
      "냉장 보관 시 보통 3~4일이 적정입니다. 닭가슴살, 현미밥, 구운 채소 등을 일요일에 만들어두면 수요일까지 먹을 수 있습니다. 목~금용은 수요일 저녁에 한 번 더 만들거나, 냉동 보관 후 전날 냉장으로 옮겨 해동하는 방법이 있습니다.",
  },
  {
    question: "야근하면 야식을 참기 힘든데 어떡하나요?",
    answer:
      "야근 시 야식 충동은 자연스러운 현상입니다. 완전히 참기보다는 건강한 야식을 미리 준비해두세요. 삶은 계란, 프로틴바, 그릭요거트, 견과류 소포장 등을 회사 냉장고에 보관해두면 자판기나 배달 앱의 유혹을 이길 수 있습니다.",
  },
  {
    question: "점심에 외식밖에 못하는데 다이어트 가능한가요?",
    answer:
      "가능합니다. 외식 시 메뉴 선택만 잘하면 됩니다. 순두부찌개, 된장찌개, 제육볶음(밥 반공기), 닭가슴살 샐러드, 포케볼, 샤브샤브 등은 칼로리를 관리하기 좋은 외식 메뉴입니다. 면류, 돈까스, 중국집 볶음류, 뷔페는 가급적 피하세요.",
  },
];

const relatedCalc = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "BMI 계산기", href: "/calc/bmi/", emoji: "📐" },
  { title: "체지방률 계산기", href: "/calc/body-fat/", emoji: "📊" },
];

const relatedProducts = [
  { title: "닭가슴살 최저가 비교", href: "/products/chicken-breast/", emoji: "🍗" },
  { title: "프로틴바 최저가 비교", href: "/products/protein-bar/", emoji: "🍫" },
  { title: "다이어트 도시락 비교", href: "/products/diet-meal/", emoji: "🍱" },
  { title: "곤약 최저가 비교", href: "/products/konjac/", emoji: "🍜" },
];

const relatedDiet = [
  { title: "1200kcal 식단표", href: "/diet/1200kcal/", emoji: "📋" },
  { title: "간헐적 단식 가이드", href: "/diet/intermittent-fasting/", emoji: "⏰" },
  { title: "고단백 식단 가이드", href: "/diet/high-protein/", emoji: "🥩" },
  { title: "체지방 감량 가이드", href: "/diet/fat-loss/", emoji: "🔥" },
];

const breadcrumbs = [
  { label: "홈", href: "/" },
  { label: "다이어트 식단 가이드", href: "/diet/" },
  { label: "직장인 다이어트" },
];

const jsonLd = [
  createArticleSchema({
    title: "직장인 다이어트 가이드 — 회사원 식단표·편의점·밀프렙·회식 대처법 총정리",
    description:
      "바쁜 직장인을 위한 현실적인 다이어트 전략, 일주일 식단표까지 총정리.",
    url: "https://caloring.kr/diet/office-worker/",
    datePublished: "2026-03-10",
  }),
  createFAQSchema(faqItems),
  createBreadcrumbSchema([
    { label: "다이어트 식단 가이드", href: "/diet/" },
    { label: "직장인 다이어트" },
  ]),
];

export default function OfficeWorkerDietPage() {
  return (
    <WikiLayout
      title="직장인 다이어트 완벽 가이드"
      description="바쁘고 피곤한 직장인도 현실적으로 살 뺄 수 있는 방법, 다 알려줄게."
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
        <p className="mb-2 text-sm text-muted-foreground">시간 없는 직장인도 다이어트할 수 있어. 핵심만 정리하면:</p>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">편의점 전략</strong>: 닭가슴살
            샐러드 + 삶은 계란 + 그릭요거트 (500kcal 이내)
          </li>
          <li>
            <strong className="text-foreground">구내식당 전략</strong>: 밥
            반공기 + 단백질 반찬 + 나물 위주
          </li>
          <li>
            <strong className="text-foreground">밀프렙</strong>: 일요일 2시간
            투자로 주 5일 점심 해결
          </li>
          <li>
            <strong className="text-foreground">회식 대처</strong>: 하이볼 선택
            + 안주는 채소·해산물 위주
          </li>
        </ul>
      </div>

      {/* Section 1: Reality */}
      <h2 id="reality" className="mt-10 mb-4 text-xl font-bold">
        직장인 다이어트가 어려운 이유
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        직장인이 다이어트하기 어려운 건 의지력 문제가 아니야.{" "}
        <strong className="text-foreground">구조적으로 어려운 환경</strong>에
        놓여 있기 때문이야. 솔직하게 말해서, 이런 상황에서 다이어트에 성공하는
        사람들은 정말 대단한 거야:
      </p>

      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">장벽</th>
              <th className="px-4 py-3 text-left font-semibold">현실</th>
              <th className="px-4 py-3 text-left font-semibold">대처법</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">시간 부족</td>
              <td className="px-4 py-3 text-muted-foreground">요리할 시간이 없음</td>
              <td className="px-4 py-3">밀프렙, 편의점 전략</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">불규칙한 식사</td>
              <td className="px-4 py-3 text-muted-foreground">야근, 회식으로 식사 시간 들쭉날쭉</td>
              <td className="px-4 py-3">주간 칼로리 관리</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">회식·술자리</td>
              <td className="px-4 py-3 text-muted-foreground">거절하기 어려운 사내 문화</td>
              <td className="px-4 py-3">저칼로리 술·안주 선택</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">스트레스 폭식</td>
              <td className="px-4 py-3 text-muted-foreground">업무 스트레스로 배달 앱 질주</td>
              <td className="px-4 py-3">건강한 간식 준비</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">앉아있는 시간</td>
              <td className="px-4 py-3 text-muted-foreground">하루 8~10시간 의자 생활</td>
              <td className="px-4 py-3">NEAT 증가, 출퇴근 운동</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        그래서 직장인 다이어트는{" "}
        <strong className="text-foreground">
          &quot;완벽한 식단&quot;이 아니라 &quot;현실적인 전략&quot;
        </strong>
        이 필요해. 매끼 닭가슴살에 현미밥을 먹을 수 없잖아. 내 상황에 맞는
        현실적인 방법을 알아보자.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        먼저 내 목표 칼로리를{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        에서 확인해봐. 직장인의 경우 활동 수준을 &quot;가벼운 활동(주 1~3회
        운동)&quot;으로 설정하는 게 현실적이야.
      </p>

      {/* Section 2: Convenience Store */}
      <h2 id="convenience-store" className="mt-10 mb-4 text-xl font-bold">
        편의점 다이어트 공략법
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        편의점은 직장인의 가장 가까운 식량 기지야. 잘 활용하면{" "}
        <strong className="text-foreground">칼로리와 단백질을 정확하게 관리</strong>
        할 수 있는 최고의 다이어트 장소가 돼. 모든 제품에 영양 성분표가 있으니까!
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        편의점 다이어트 추천 조합 TOP 5
      </h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-3 py-3 text-left font-semibold">조합</th>
              <th className="px-3 py-3 text-left font-semibold">메뉴</th>
              <th className="px-3 py-3 text-right font-semibold">칼로리</th>
              <th className="px-3 py-3 text-right font-semibold">단백질</th>
              <th className="px-3 py-3 text-right font-semibold">가격대</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-3 py-3 font-semibold">1위</td>
              <td className="px-3 py-3">닭가슴살 샐러드 + 삶은 계란 2개</td>
              <td className="px-3 py-3 text-right">~400kcal</td>
              <td className="px-3 py-3 text-right font-semibold text-primary">35g</td>
              <td className="px-3 py-3 text-right">5,000~6,000원</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-3 py-3 font-semibold">2위</td>
              <td className="px-3 py-3">닭가슴살 도시락 (저칼로리)</td>
              <td className="px-3 py-3 text-right">~450kcal</td>
              <td className="px-3 py-3 text-right font-semibold text-primary">30g</td>
              <td className="px-3 py-3 text-right">4,500~5,500원</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-3 py-3 font-semibold">3위</td>
              <td className="px-3 py-3">그릭요거트 + 프로틴바</td>
              <td className="px-3 py-3 text-right">~350kcal</td>
              <td className="px-3 py-3 text-right font-semibold text-primary">30g</td>
              <td className="px-3 py-3 text-right">4,000~5,000원</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-3 py-3 font-semibold">4위</td>
              <td className="px-3 py-3">참치마요 삼각김밥 + 삶은 계란 + 저지방 우유</td>
              <td className="px-3 py-3 text-right">~450kcal</td>
              <td className="px-3 py-3 text-right font-semibold text-primary">22g</td>
              <td className="px-3 py-3 text-right">3,500~4,000원</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-3 py-3 font-semibold">5위</td>
              <td className="px-3 py-3">두부면 + 닭가슴살 소시지 2개</td>
              <td className="px-3 py-3 text-right">~300kcal</td>
              <td className="px-3 py-3 text-right font-semibold text-primary">28g</td>
              <td className="px-3 py-3 text-right">4,000~5,000원</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">편의점 피해야 할 음식</h3>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>
          <strong className="text-foreground">컵라면</strong>: 500~600kcal인데
          단백질은 8~10g뿐. 나트륨도 1500mg 이상
        </li>
        <li>
          <strong className="text-foreground">핫도그·치즈볼</strong>: 기름에
          튀긴 고칼로리 간식
        </li>
        <li>
          <strong className="text-foreground">달콤한 빵류</strong>: 크림빵,
          단팥빵 등은 300~500kcal에 단백질은 거의 없음
        </li>
        <li>
          <strong className="text-foreground">가당 음료</strong>: 콜라·사이다·과즙 음료
          1병에 설탕 30~50g
        </li>
      </ul>

      <div className="my-6 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">편의점 다이어트 핵심 원칙</p>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">1. 영양 성분표를 반드시 확인</strong> (칼로리 + 단백질)<br />
          <strong className="text-foreground">2. 단백질 20g 이상인 제품 선택</strong><br />
          <strong className="text-foreground">3. 한 끼 500kcal 이내로 구성</strong><br />
          <strong className="text-foreground">4. 음료는 물·차·제로 칼로리만</strong>
        </p>
      </div>

      {/* Section 3: Cafeteria & Delivery */}
      <h2 id="cafeteria" className="mt-10 mb-4 text-xl font-bold">
        구내식당·배달 활용법
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">구내식당 공략법</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        구내식당은 메뉴를 자유롭게 고를 수 없지만, 담는 양은 조절할 수 있어.
        이 원칙만 지키면 돼:
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">밥은 반공기</strong>: 가장 쉽고
          효과적인 방법. 밥 반 공기만으로 약 150kcal을 줄일 수 있어
        </li>
        <li>
          <strong className="text-foreground">국물은 건더기 위주</strong>: 국물에
          나트륨이 많아 붓기의 원인이 돼
        </li>
        <li>
          <strong className="text-foreground">단백질 반찬 필수</strong>: 고기,
          생선, 두부, 계란 중 하나는 반드시
        </li>
        <li>
          <strong className="text-foreground">나물·채소 많이</strong>: 포만감을
          주면서 칼로리가 낮아
        </li>
        <li>
          <strong className="text-foreground">튀김·볶음 피하기</strong>:
          구이·찜·조림 위주로 선택
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">배달 메뉴 선택 가이드</h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">추천 메뉴</th>
              <th className="px-4 py-3 text-left font-semibold">칼로리 예상</th>
              <th className="px-4 py-3 text-left font-semibold">피할 메뉴</th>
              <th className="px-4 py-3 text-left font-semibold">칼로리 예상</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3">포케볼 (밥 적게)</td>
              <td className="px-4 py-3 text-muted-foreground">400~500kcal</td>
              <td className="px-4 py-3">짜장면</td>
              <td className="px-4 py-3 text-muted-foreground">700~800kcal</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">순두부찌개 + 밥 반공기</td>
              <td className="px-4 py-3 text-muted-foreground">350~400kcal</td>
              <td className="px-4 py-3">돈까스 정식</td>
              <td className="px-4 py-3 text-muted-foreground">800~1000kcal</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">샤브샤브</td>
              <td className="px-4 py-3 text-muted-foreground">400~500kcal</td>
              <td className="px-4 py-3">떡볶이 + 튀김</td>
              <td className="px-4 py-3 text-muted-foreground">800~1200kcal</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">닭가슴살 샐러드</td>
              <td className="px-4 py-3 text-muted-foreground">300~400kcal</td>
              <td className="px-4 py-3">피자 (2~3조각)</td>
              <td className="px-4 py-3 text-muted-foreground">600~900kcal</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">제육볶음 + 밥 반공기</td>
              <td className="px-4 py-3 text-muted-foreground">450~550kcal</td>
              <td className="px-4 py-3">치킨 반마리</td>
              <td className="px-4 py-3 text-muted-foreground">700~900kcal</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 4: Meal Prep */}
      <h2 id="meal-prep" className="mt-10 mb-4 text-xl font-bold">
        밀프렙(Meal Prep) 가이드
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">밀프렙</strong>은 미리 음식을
        만들어두고 소분하여 보관하는 것을 말해. 직장인 다이어트의{" "}
        <strong className="text-foreground">최강 무기</strong>라고 할 수 있어.
        일요일 오후 2시간 정도 투자하면 평일 5일 점심을 해결할 수 있거든.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">밀프렙 기본 구성</h3>
      <div className="my-6 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">카테고리</th>
              <th className="px-4 py-3 text-left font-semibold">추천 식재료</th>
              <th className="px-4 py-3 text-left font-semibold">조리법</th>
              <th className="px-4 py-3 text-left font-semibold">보관</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">탄수화물</td>
              <td className="px-4 py-3">현미밥, 고구마, 퀴노아</td>
              <td className="px-4 py-3 text-muted-foreground">대량 취사 후 소분</td>
              <td className="px-4 py-3">냉동 가능</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">단백질</td>
              <td className="px-4 py-3">닭가슴살, 계란, 소고기, 연어</td>
              <td className="px-4 py-3 text-muted-foreground">에어프라이어/오븐 대량 조리</td>
              <td className="px-4 py-3">냉장 3~4일</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">채소</td>
              <td className="px-4 py-3">브로콜리, 파프리카, 양배추, 당근</td>
              <td className="px-4 py-3 text-muted-foreground">데치기/에어프라이어</td>
              <td className="px-4 py-3">냉장 3~4일</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3 font-medium">소스</td>
              <td className="px-4 py-3">간장드레싱, 발사믹, 스리라차</td>
              <td className="px-4 py-3 text-muted-foreground">별도 용기에 보관</td>
              <td className="px-4 py-3">냉장 1주</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold">밀프렙 레시피 예시: 일요일 2시간 코스</h3>
      <ul className="mb-4 list-decimal pl-5 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">현미밥 5끼분 취사</strong> (30분) —
          밥솥에 현미 + 잡곡 넣고 예약
        </li>
        <li>
          <strong className="text-foreground">닭가슴살 1kg 에어프라이어</strong>{" "}
          (25분) — 소금+후추+올리브오일로 밑간 후 180도 15분
        </li>
        <li>
          <strong className="text-foreground">계란 10개 삶기</strong> (15분) —
          냉장 보관 후 간식으로 활용
        </li>
        <li>
          <strong className="text-foreground">브로콜리+파프리카 데치기/굽기</strong>{" "}
          (15분) — 찬물에 식혀 물기 제거
        </li>
        <li>
          <strong className="text-foreground">용기에 소분</strong> (15분) — 밥
          반공기 + 닭가슴살 150g + 채소
        </li>
        <li>
          <strong className="text-foreground">고구마 5개 삶기/에어프라이어</strong>{" "}
          (20분) — 간식용으로 소분
        </li>
      </ul>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        밀프렙에 사용할{" "}
        <Link
          href="/products/chicken-breast/"
          className="text-primary hover:underline"
        >
          닭가슴살
        </Link>
        은{" "}
        <Link href="/products/" className="text-primary hover:underline">
          다이어트 식품 최저가 비교
        </Link>
        에서 대량으로 저렴하게 구매할 수 있어.
      </p>

      {/* Section 5: Weekly Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 직장인 식단표
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">
          65kg 직장인, 하루 1500kcal 목표
        </strong>{" "}
        기준으로 구성한 일주일 식단표야. 바쁜 직장인의 현실을 반영해서{" "}
        <strong className="text-foreground">
          편의점, 구내식당, 밀프렙을 조합
        </strong>
        했어.{" "}
        <Link href="/calc/calorie/" className="text-primary hover:underline">
          칼로리 계산기
        </Link>
        로 자신의 목표 칼로리를 먼저 확인해.
      </p>

      {[
        {
          day: "월요일 (밀프렙)",
          meals: [
            { time: "아침 (집)", menu: "그릭요거트 200g + 그래놀라 30g", protein: 16, cal: 250 },
            { time: "점심 (밀프렙)", menu: "현미밥 반공기 + 닭가슴살 150g + 브로콜리", protein: 38, cal: 420 },
            { time: "간식 (회사)", menu: "삶은 계란 2개", protein: 14, cal: 150 },
            { time: "저녁 (집)", menu: "순두부찌개 + 계란말이", protein: 20, cal: 280 },
          ],
        },
        {
          day: "화요일 (구내식당)",
          meals: [
            { time: "아침 (집)", menu: "프로틴 쉐이크 + 바나나 반 개", protein: 28, cal: 230 },
            { time: "점심 (구내식당)", menu: "밥 반공기 + 고등어구이 + 나물 + 된장국", protein: 25, cal: 450 },
            { time: "간식 (회사)", menu: "프로틴바 1개", protein: 20, cal: 200 },
            { time: "저녁 (집)", menu: "두부김치 + 미역국", protein: 18, cal: 280 },
          ],
        },
        {
          day: "수요일 (밀프렙)",
          meals: [
            { time: "아침 (집)", menu: "삶은 계란 2개 + 통밀빵 1장", protein: 18, cal: 270 },
            { time: "점심 (밀프렙)", menu: "현미밥 반공기 + 소고기 볶음 + 파프리카", protein: 30, cal: 430 },
            { time: "간식 (회사)", menu: "그릭요거트 150g + 아몬드 5알", protein: 14, cal: 180 },
            { time: "저녁 (집)", menu: "닭안심 샐러드 + 드레싱", protein: 30, cal: 300 },
          ],
        },
        {
          day: "목요일 (편의점)",
          meals: [
            { time: "아침 (집)", menu: "프로틴 쉐이크 + 사과 반 개", protein: 26, cal: 220 },
            { time: "점심 (편의점)", menu: "닭가슴살 샐러드 + 삶은 계란 2개", protein: 35, cal: 400 },
            { time: "간식 (회사)", menu: "닭가슴살 소시지 2개", protein: 18, cal: 160 },
            { time: "저녁 (집)", menu: "고등어구이 + 된장찌개 + 나물", protein: 22, cal: 350 },
          ],
        },
        {
          day: "금요일 (밀프렙 + 회식 대비)",
          meals: [
            { time: "아침 (집)", menu: "그릭요거트 200g + 블루베리", protein: 14, cal: 200 },
            { time: "점심 (밀프렙)", menu: "현미밥 반공기 + 닭가슴살 + 구운 채소", protein: 38, cal: 420 },
            { time: "간식", menu: "삶은 계란 1개", protein: 7, cal: 75 },
            { time: "저녁 (회식)", menu: "하이볼 2잔 + 해산물·채소 안주 위주", protein: 15, cal: 500 },
          ],
        },
        {
          day: "토요일 (자유식 + 운동)",
          meals: [
            { time: "아침", menu: "아보카도 토스트 (통밀) + 스크램블 에그 2개", protein: 16, cal: 350 },
            { time: "점심", menu: "포케볼 (현미, 연어)", protein: 30, cal: 480 },
            { time: "간식", menu: "프로틴 쉐이크", protein: 25, cal: 150 },
            { time: "저녁", menu: "닭가슴살 볶음밥 (현미) + 미역국", protein: 30, cal: 400 },
          ],
        },
        {
          day: "일요일 (밀프렙 + 회복)",
          meals: [
            { time: "아침", menu: "오트밀 40g + 프로틴 + 바나나", protein: 30, cal: 350 },
            { time: "점심", menu: "불고기 쌈밥 + 된장찌개", protein: 28, cal: 450 },
            { time: "간식", menu: "삶은 계란 2개 + 저지방 우유", protein: 18, cal: 220 },
            { time: "저녁 (가볍게)", menu: "순두부찌개 + 나물", protein: 14, cal: 200 },
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

      {/* Section 6: Overtime & Dinner */}
      <h2 id="overtime-dinner" className="mt-10 mb-4 text-xl font-bold">
        야근·회식 대처법
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">야근 대처법</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        야근할 때 가장 위험한 건{" "}
        <strong className="text-foreground">배달 앱의 유혹</strong>이야. 피곤하고
        스트레스 받으면 본능적으로 고칼로리 음식이 당기거든. 미리 대비해둬야 해:
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-2 text-muted-foreground">
        <li>
          <strong className="text-foreground">회사 냉장고에 비상식량</strong>:
          삶은 계란, 그릭요거트, 프로틴바, 견과류 소포장
        </li>
        <li>
          <strong className="text-foreground">서랍에 건강 간식</strong>:
          닭가슴살 육포, 프로틴 쉐이크 분말, 오트밀 소포장
        </li>
        <li>
          <strong className="text-foreground">야근 전 미리 식사</strong>: 6시경에
          가볍게 먹어두면 밤 10시 배달 충동을 막을 수 있어
        </li>
        <li>
          <strong className="text-foreground">제로 칼로리 음료</strong>: 허기가
          아니라 입이 심심한 거라면 제로콜라나 차로 해결
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">회식 대처법</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        회식은 직장인 다이어트의 최대 난관이야. 하지만 완전히 피할 수 없다면{" "}
        <strong className="text-foreground">전략적으로 접근</strong>하면 돼:
      </p>

      <h4 className="mt-4 mb-2 font-semibold">술 선택</h4>
      <div className="my-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-3 text-left font-semibold">술 종류</th>
              <th className="px-4 py-3 text-right font-semibold">1잔 칼로리</th>
              <th className="px-4 py-3 text-left font-semibold">다이어트 적합도</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border bg-primary/5">
              <td className="px-4 py-3 font-semibold">하이볼 (위스키+탄산수)</td>
              <td className="px-4 py-3 text-right">~100kcal</td>
              <td className="px-4 py-3">추천 (당분 최소)</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">와인 (1잔 150ml)</td>
              <td className="px-4 py-3 text-right">~120kcal</td>
              <td className="px-4 py-3">괜찮음</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">소주 (1잔 50ml)</td>
              <td className="px-4 py-3 text-right">~60kcal</td>
              <td className="px-4 py-3">잔 수 주의</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">맥주 (500ml)</td>
              <td className="px-4 py-3 text-right">~200kcal</td>
              <td className="px-4 py-3">비추 (칼로리 높음)</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-3">소맥 (1잔)</td>
              <td className="px-4 py-3 text-right">~150kcal</td>
              <td className="px-4 py-3">비추 (과음 유발)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="mt-4 mb-2 font-semibold">안주 선택</h4>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>
          <strong className="text-foreground">추천</strong>: 회(사시미), 해산물,
          에다마메(완두콩), 과일, 채소스틱, 오이, 두부김치(두부 위주)
        </li>
        <li>
          <strong className="text-foreground">보통</strong>: 보쌈(수육 위주),
          불고기, 닭꼬치
        </li>
        <li>
          <strong className="text-foreground">피하기</strong>: 치킨, 감자튀김,
          피자, 떡볶이, 치즈류
        </li>
      </ul>

      <div className="my-6 rounded-xl bg-muted/30 p-5">
        <p className="mb-2 text-sm font-bold">회식 날 칼로리 관리 팁</p>
        <p className="text-sm text-muted-foreground">
          회식이 있는 날은 <strong className="text-foreground">아침·점심을 가볍게</strong> 먹어서
          저녁 회식 칼로리를 상쇄해. 예를 들어 아침 200kcal + 점심 300kcal로 먹으면,
          회식에서 800~1000kcal를 먹어도 하루 총 칼로리는 1300~1500kcal로 관리 가능해.
          이걸 <strong className="text-foreground">&quot;주간 칼로리 관리&quot;</strong>라고 해.
        </p>
      </div>

      {/* Section 7: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        직장인 다이어트 성공 팁
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. &quot;주간 칼로리&quot;로 관리해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        직장인은 매일 같은 칼로리를 유지하기 어려워. 회식 있는 날, 야근하는 날
        등 변수가 많으니까.{" "}
        <strong className="text-foreground">
          일일 칼로리 대신 주간 칼로리
        </strong>
        로 관리하면 유연하게 대처할 수 있어. 목표가 하루 1500kcal이면 주간
        10,500kcal를 맞추면 되는 거야. 회식 날 2000kcal를 먹으면 다른 날
        1400kcal로 보정하면 돼.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. NEAT를 높여</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        <strong className="text-foreground">NEAT(Non-Exercise Activity Thermogenesis)</strong>
        는 운동이 아닌 일상 활동으로 소비하는 칼로리야. 앉아서 일하는 직장인은
        NEAT가 매우 낮거든. 의식적으로 높이면 큰 차이가 나:
      </p>
      <ul className="mb-4 list-disc pl-5 space-y-1 text-muted-foreground">
        <li>한 정거장 전에 내려서 걷기 (왕복 약 100kcal)</li>
        <li>엘리베이터 대신 계단 이용</li>
        <li>점심시간 10분 산책</li>
        <li>1시간마다 일어나서 스트레칭</li>
        <li>전화 통화 시 서서 하기</li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 물을 충분히 마셔</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        사무실에서는 커피만 마시고 물을 잊는 경우가 많아. 책상 위에 1리터 물병을
        두고 오전·오후 각 1병씩 비우는 것을 목표로 해.{" "}
        <strong className="text-foreground">물을 충분히 마시면 가짜 허기도 줄어들어.</strong>
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 커피를 전략적으로 활용해</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        아메리카노는 약 5kcal로 거의 제로 칼로리야. 식욕 억제 효과도 있어서
        다이어트에 도움이 돼. 다만{" "}
        <strong className="text-foreground">카페라떼는 150~200kcal</strong>,{" "}
        <strong className="text-foreground">달달한 음료는 300~500kcal</strong>
        까지 갈 수 있으니 블랙커피 위주로 마셔.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">5. 80% 원칙을 지켜</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        주 5일 중 4일만 제대로 지켜도 충분해. 완벽하려고 하면 오래 못 가.{" "}
        <strong className="text-foreground">80%만 지키면 결과는 온다</strong>는
        마인드로 접근해. 하루 잘못 먹었다고 포기하지 말고, 다음 끼니부터 다시
        시작하면 돼.
      </p>

      {/* Section 8: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항
      </h2>

      <h3 className="mt-6 mb-3 text-lg font-semibold">1. 극단적인 절식은 금물</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        바쁘다고 아침·점심을 건너뛰고 저녁에 폭식하는 패턴은 최악이야. 혈당이
        급격히 요동치면서 체지방 저장이 촉진되고, 근손실도 일어나. 내{" "}
        <Link href="/calc/bmr/" className="text-primary hover:underline">
          기초대사량
        </Link>
        이하로 섭취하는 건 절대 피해야 해.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">2. 스트레스 식사 인식하기</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        배고파서 먹는 게 아니라{" "}
        <strong className="text-foreground">스트레스나 지루함 때문에 먹는 건지</strong>{" "}
        구분하는 게 중요해. 배가 진짜 고픈 건지 5분만 생각해봐. 스트레스
        때문이라면 5분 산책이나 스트레칭으로 대체해봐.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">3. 나트륨 과다 섭취 주의</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        직장인 식사는 외식·편의점 위주라 나트륨 섭취가 높아지기 쉬워.
        나트륨은 수분 저류를 일으켜{" "}
        <strong className="text-foreground">체중이 늘어 보이게</strong> 만들고,
        혈압에도 안 좋아. 국물은 적게 먹고, 물을 충분히 마셔서 배출을 도와.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">4. 수면 관리</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        야근으로 수면 시간이 줄어들면 식욕 호르몬이 교란돼. 수면 부족은
        다이어트의 적이야. 어렵더라도 <strong className="text-foreground">최소 6시간</strong>{" "}
        이상 수면을 확보하려고 노력해.
      </p>

      {/* CTA Box */}
      <div className="my-10 rounded-2xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          직장인 다이어트의 시작은 내 목표 칼로리를 아는 것!
        </p>
        <p className="mb-4 font-bold">
          하루 목표 칼로리와 기초대사량을 계산해보세요
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
