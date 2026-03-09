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
  title: "저탄고지(키토제닉) 다이어트 완벽 가이드 — 식단표, 효과, 주의사항",
  description:
    "키토제닉(저탄고지) 다이어트의 원리(케토시스), 허용·금지 식품, 한국식 일주일 키토 식단표, 키토 플루 부작용, 주의사항까지 총정리. 탄수화물 제한 다이어트 완벽 가이드.",
  path: "/diet/keto/",
  keywords: [
    "저탄고지",
    "키토제닉",
    "키토 식단",
    "탄수화물 제한 다이어트",
    "키토제닉 다이어트",
    "저탄고지 식단표",
    "키토 플루",
    "케토시스",
    "저탄수화물 다이어트",
    "키토제닉 식단",
    "LCHF",
    "키토 다이어트 방법",
  ],
});

const TOC = [
  { id: "what-is", title: "키토제닉 다이어트란?" },
  { id: "how-it-works", title: "케토시스의 원리" },
  { id: "foods", title: "허용 식품 vs 금지 식품" },
  { id: "meal-plan", title: "일주일 키토 식단표 (한국식)" },
  { id: "benefits", title: "키토제닉의 효과" },
  { id: "keto-flu", title: "키토 플루와 부작용" },
  { id: "tips", title: "성공을 위한 실전 팁" },
  { id: "cautions", title: "주의사항 및 피해야 하는 사람" },
];

const FAQ_ITEMS = [
  {
    question: "키토제닉 다이어트 중 밥을 아예 안 먹어야 하나요?",
    answer:
      "일반 백미밥은 권장하지 않지만, 곤약밥이나 콜리플라워 라이스로 대체할 수 있어요. 핵심은 하루 탄수화물 총량을 순탄수화물 기준 20~50g 이내로 유지하는 거예요. 밥 한 공기가 약 65g의 탄수화물이니까, 일반 밥을 먹으면 하루 허용량을 한 번에 넘기게 돼요.",
  },
  {
    question: "키토제닉 다이어트는 얼마나 해야 효과가 나타나나요?",
    answer:
      "보통 2~4일이면 케토시스에 진입하고, 1~2주 안에 체중 변화가 나타나기 시작해요. 초반 1~2kg은 수분 감소인 경우가 많고, 실제 체지방 감소는 3~4주째부터 본격화돼요. 의미 있는 체지방 감량을 위해서는 최소 8~12주 유지를 추천해요.",
  },
  {
    question: "키토제닉을 하면 콜레스테롤 수치가 올라가나요?",
    answer:
      "사람마다 달라요. 일부 연구에서는 LDL(나쁜 콜레스테롤)이 일시적으로 올라갈 수 있지만, HDL(좋은 콜레스테롤)도 함께 올라가고 중성지방은 감소하는 경향이 있어요. 포화지방보다 불포화지방(올리브오일, 아보카도, 견과류) 위주로 섭취하면 콜레스테롤 부담을 줄일 수 있어요. 기저질환이 있다면 반드시 정기 혈액 검사를 받으세요.",
  },
  {
    question: "키토제닉 다이어트 중 과일을 먹어도 되나요?",
    answer:
      "대부분의 과일은 당분이 높아서 제한해야 해요. 다만 아보카도(탄수 2g/100g), 베리류(블루베리, 라즈베리, 딸기 소량), 레몬/라임은 소량 허용돼요. 바나나, 포도, 망고, 수박 같은 고당도 과일은 피하는 게 좋아요.",
  },
  {
    question: "키토 플루가 너무 힘든데 어떻게 해야 하나요?",
    answer:
      "키토 플루는 보통 3~7일 내에 자연스럽게 사라져요. 증상을 줄이려면 충분한 수분(하루 2.5L 이상)과 전해질(나트륨, 칼륨, 마그네슘) 보충이 중요해요. 국물 요리(소금 약간 넣은 육수)를 자주 마시고, 잠을 충분히 자세요. 너무 힘들면 탄수화물을 50g까지 약간 늘려서 서서히 적응하는 것도 방법이에요.",
  },
  {
    question: "키토제닉과 간헐적 단식을 함께 해도 되나요?",
    answer:
      "네, 두 가지를 병행하면 케토시스 진입이 빨라지고 체지방 감소 효과가 커질 수 있어요. 다만 동시에 시작하면 적응이 너무 어려울 수 있으니, 키토제닉에 2~3주 먼저 적응한 후 간헐적 단식(16:8)을 추가하는 걸 추천해요.",
  },
];

const RELATED_CALC = [
  { title: "칼로리 계산기", href: "/calc/calorie/", emoji: "🔥" },
  { title: "기초대사량 계산기", href: "/calc/bmr/", emoji: "⚡" },
  { title: "체지방 계산기", href: "/calc/body-fat/", emoji: "📐" },
];

const RELATED_DIET = [
  { title: "간헐적 단식 가이드", href: "/diet/intermittent-fasting/", emoji: "⏰" },
  { title: "고단백 다이어트 가이드", href: "/diet/high-protein/", emoji: "💪" },
  { title: "혈당 다이어트 가이드", href: "/diet/blood-sugar/", emoji: "📊" },
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
    title: "다이어트 간식 비교",
    href: "/products/?category=snack",
    emoji: "🍪",
  },
];

export default function KetoPage() {
  const jsonLd = [
    createArticleSchema({
      title: "저탄고지(키토제닉) 다이어트 완벽 가이드",
      description:
        "키토제닉 다이어트의 원리, 허용·금지 식품, 한국식 식단표, 키토 플루 부작용, 주의사항을 총정리한 완벽 가이드",
      url: "https://caloring.kr/diet/keto/",
      datePublished: "2026-03-10",
    }),
    createFAQSchema(FAQ_ITEMS),
    createBreadcrumbSchema([
      { label: "다이어트 식단 가이드", href: "/diet/" },
      { label: "저탄고지(키토제닉) 다이어트" },
    ]),
  ];

  return (
    <WikiLayout
      title="저탄고지(키토제닉) 다이어트 완벽 가이드"
      description="탄수화물을 확 줄이고 지방을 에너지원으로 바꾸는 키토제닉 다이어트. 원리부터 한국식 식단표까지 쉽게 알려줄게."
      breadcrumbs={[
        { label: "홈", href: "/" },
        { label: "다이어트 식단 가이드", href: "/diet/" },
        { label: "저탄고지(키토제닉)" },
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
              키토제닉 다이어트는{" "}
              <strong className="text-foreground">
                탄수화물을 하루 20~50g으로 제한
              </strong>
              하고, 지방을 주 에너지원으로 사용하는 식이요법이야
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              몸이{" "}
              <strong className="text-foreground">
                케토시스(ketosis) 상태
              </strong>
              에 들어가면 체지방을 직접 태워서 에너지를 만들어
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              초반 1~2주에{" "}
              <strong className="text-foreground">
                &quot;키토 플루&quot;(두통, 피로, 무기력)
              </strong>
              가 올 수 있지만 대부분 자연스럽게 사라져
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 text-primary">&#10003;</span>
            <span>
              신장 질환, 담낭 질환, 췌장염 이력자는{" "}
              <strong className="text-foreground">반드시 의사와 상담</strong> 후
              시작해야 해
            </span>
          </li>
        </ul>
      </div>

      {/* Section: What is Keto */}
      <h2 id="what-is" className="mt-10 mb-4 text-xl font-bold">
        키토제닉 다이어트란?
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        키토제닉(Ketogenic) 다이어트, 줄여서 &quot;키토&quot; 또는
        한국에서는 &quot;저탄고지(저탄수화물 고지방)&quot;로 불리는 식이요법이야.
        이름 그대로{" "}
        <strong className="text-foreground">
          탄수화물 섭취를 극도로 줄이고, 지방 섭취를 크게 늘리는
        </strong>{" "}
        방식이지.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        일반적인 식단에서는 탄수화물이 전체 칼로리의 50~60%를 차지하는데,
        키토제닉에서는{" "}
        <strong className="text-foreground">
          탄수화물 5~10%, 지방 70~75%, 단백질 20~25%
        </strong>
        로 비율을 완전히 뒤집어. 이렇게 하면 우리 몸의 에너지원이
        포도당(탄수화물)에서 지방(케톤체)으로 전환되는데, 이 상태를
        &quot;케토시스&quot;라고 불러.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        키토제닉은 원래 1920년대에{" "}
        <strong className="text-foreground">간질(뇌전증) 치료</strong>를
        위해 개발된 식이요법이야. 이후 체중 감량 효과가 알려지면서 다이어트
        방법으로 대중화되었고, 최근에는 많은 연구를 통해 체지방 감소, 혈당 조절,
        인슐린 저항성 개선 등의 효과가 보고되고 있어.
      </p>

      {/* Macro Ratio Visual */}
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                영양소
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                일반 식단
              </th>
              <th className="border border-border px-4 py-2 text-center font-semibold">
                키토제닉 식단
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                하루 섭취량 (2,000kcal 기준)
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                탄수화물
              </td>
              <td className="border border-border px-4 py-2 text-center">
                50~60%
              </td>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                5~10%
              </td>
              <td className="border border-border px-4 py-2">
                20~50g (순탄수화물)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                지방
              </td>
              <td className="border border-border px-4 py-2 text-center">
                20~30%
              </td>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                70~75%
              </td>
              <td className="border border-border px-4 py-2">
                155~170g
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                단백질
              </td>
              <td className="border border-border px-4 py-2 text-center">
                15~20%
              </td>
              <td className="border border-border px-4 py-2 text-center font-bold text-primary">
                20~25%
              </td>
              <td className="border border-border px-4 py-2">
                100~125g
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: How Ketosis Works */}
      <h2 id="how-it-works" className="mt-10 mb-4 text-xl font-bold">
        케토시스의 원리
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        우리 몸은 평소에{" "}
        <strong className="text-foreground">
          포도당(glucose)을 1순위 에너지원
        </strong>
        으로 사용해. 밥, 빵, 과일 등 탄수화물을 먹으면 혈당이 오르고,
        인슐린이 분비되어 포도당을 세포에 전달하지. 남는 포도당은 글리코겐이나
        체지방으로 저장돼.
      </p>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        그런데 탄수화물 섭취를 극도로 줄이면?{" "}
        <strong className="text-foreground">
          몸에 저장된 글리코겐이 24~48시간 내에 고갈
        </strong>
        되고, 간에서{" "}
        <strong className="text-foreground">
          체지방을 분해하여 &quot;케톤체(ketone bodies)&quot;
        </strong>
        를 만들어내기 시작해. 이 케톤체가 포도당 대신 뇌와 근육의 에너지원이
        되는 거야. 이 상태가 바로 &quot;케토시스(ketosis)&quot;야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">
        케토시스 진입 과정 (타임라인)
      </h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">0~24시간:</strong> 몸이
            저장된 글리코겐을 소모하기 시작. 아직 케토시스는 아님
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">24~48시간:</strong> 글리코겐
            거의 고갈. 간에서 케톤체 생성 시작. 가벼운 피로감 가능
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">2~4일:</strong> 본격적
            케토시스 진입. 혈중 케톤 수치 0.5~3.0 mmol/L. &quot;키토 플루&quot; 증상 가능
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">1~2주:</strong> 몸이
            케톤체를 효율적으로 사용하기 시작(지방 적응). 에너지 안정화
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">3~4주:</strong> 완전한
            지방 적응(fat-adapted). 공복감 감소, 집중력 향상 느끼는 사람이 많음
          </span>
        </li>
      </ul>

      <div className="my-6 rounded-lg border border-amber-200 bg-amber-50/50 p-4 dark:border-amber-900 dark:bg-amber-950/30">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">순탄수화물이란?</strong>{" "}
          총 탄수화물에서 식이섬유를 뺀 값이야. 예를 들어 아보카도 100g에 총
          탄수화물 9g, 식이섬유 7g이면 순탄수화물은 2g이야. 키토에서 말하는
          &quot;탄수화물 20~50g&quot;은 이 순탄수화물 기준이야.
        </p>
      </div>

      {/* Section: Foods */}
      <h2 id="foods" className="mt-10 mb-4 text-xl font-bold">
        허용 식품 vs 금지 식품
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        키토제닉에서 가장 중요한 건{" "}
        <strong className="text-foreground">무엇을 먹고, 무엇을 피할지</strong>
        를 정확히 아는 거야. 아래 표를 참고해서 장볼 때 활용해봐.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold text-green-600 dark:text-green-400">
        적극적으로 먹어도 되는 식품
      </h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-green-50/50 dark:bg-green-950/20">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                카테고리
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                포인트
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                고기·생선
              </td>
              <td className="border border-border px-4 py-2">
                소고기, 돼지고기(삼겹살), 닭고기(껍질 포함), 연어, 고등어, 참치, 새우, 오징어
              </td>
              <td className="border border-border px-4 py-2">
                양념 없이 구이·볶음 추천
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                달걀·유제품
              </td>
              <td className="border border-border px-4 py-2">
                달걀, 버터, 치즈(체다, 모차렐라, 크림치즈), 생크림, 사워크림
              </td>
              <td className="border border-border px-4 py-2">
                우유 대신 생크림 또는 아몬드밀크
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                오일·지방
              </td>
              <td className="border border-border px-4 py-2">
                올리브오일, 코코넛오일, 아보카도오일, MCT오일, 버터, 돈지(라드)
              </td>
              <td className="border border-border px-4 py-2">
                불포화지방 위주 추천
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                채소 (저탄수)
              </td>
              <td className="border border-border px-4 py-2">
                시금치, 브로콜리, 양배추, 콜리플라워, 아스파라거스, 버섯, 피망, 깻잎, 상추
              </td>
              <td className="border border-border px-4 py-2">
                잎채소 위주, 뿌리채소 제한
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                견과·씨앗
              </td>
              <td className="border border-border px-4 py-2">
                아몬드, 호두, 마카다미아, 피칸, 치아시드, 아마씨
              </td>
              <td className="border border-border px-4 py-2">
                하루 한 줌(30g) 이내
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                과일 (소량)
              </td>
              <td className="border border-border px-4 py-2">
                아보카도, 블루베리(소량), 딸기(소량), 레몬, 라임
              </td>
              <td className="border border-border px-4 py-2">
                아보카도 제외 모두 소량만
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-3 text-lg font-semibold text-red-500">
        반드시 피해야 하는 식품
      </h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse rounded-lg border border-border text-sm">
          <thead>
            <tr className="bg-red-50/50 dark:bg-red-950/20">
              <th className="border border-border px-4 py-2 text-left font-semibold">
                카테고리
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                식품
              </th>
              <th className="border border-border px-4 py-2 text-left font-semibold">
                이유
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                곡류·밥·면
              </td>
              <td className="border border-border px-4 py-2">
                백미, 현미, 빵, 파스타, 라면, 떡, 시리얼
              </td>
              <td className="border border-border px-4 py-2">
                탄수화물 덩어리 (밥 1공기 = 탄수 65g)
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                설탕·단맛
              </td>
              <td className="border border-border px-4 py-2">
                설탕, 꿀, 시럽, 과자, 케이크, 아이스크림, 초콜릿
              </td>
              <td className="border border-border px-4 py-2">
                순수 탄수화물 + 혈당 급상승
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                고당도 과일
              </td>
              <td className="border border-border px-4 py-2">
                바나나, 포도, 망고, 수박, 사과(큰 것), 오렌지
              </td>
              <td className="border border-border px-4 py-2">
                과당이 높아 케토시스 이탈
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                뿌리채소
              </td>
              <td className="border border-border px-4 py-2">
                감자, 고구마, 당근(대량), 옥수수, 단호박
              </td>
              <td className="border border-border px-4 py-2">
                전분(녹말)이 많아 탄수 과다
              </td>
            </tr>
            <tr>
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                가공식품
              </td>
              <td className="border border-border px-4 py-2">
                과일주스, 탄산음료, 소스류(케첩, 바비큐), 가공육(설탕 첨가)
              </td>
              <td className="border border-border px-4 py-2">
                숨은 당분이 많음
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-4 py-2 font-medium text-foreground">
                콩류
              </td>
              <td className="border border-border px-4 py-2">
                강낭콩, 렌틸콩, 병아리콩, 팥
              </td>
              <td className="border border-border px-4 py-2">
                탄수화물 함량이 높음
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="my-4 rounded-lg border border-border bg-muted/30 p-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">한국식 키토 팁:</strong>{" "}
          한식의 핵심인 &quot;밥&quot;을 콜리플라워 라이스나 곤약밥으로 대체하면
          찌개, 반찬류는 대부분 그대로 먹을 수 있어. 다만 떡볶이, 잡채, 김밥
          같은 탄수화물 기반 메뉴는 피해야 해. 삼겹살 구이, 된장찌개(감자 빼고),
          제육볶음(설탕 줄이고) 등은 훌륭한 키토 메뉴야.
        </p>
      </div>

      {/* Section: Meal Plan */}
      <h2 id="meal-plan" className="mt-10 mb-4 text-xl font-bold">
        일주일 키토 식단표 (한국식)
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        한국 식재료를 활용한 실전 키토 식단표야. 하루 총 칼로리는{" "}
        <strong className="text-foreground">약 1,500~1,800kcal</strong>,
        순탄수화물은{" "}
        <strong className="text-foreground">20~30g 이내</strong>로 설정했어.{" "}
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
                순탄수(g)
              </th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                월
              </td>
              <td className="border border-border px-3 py-2">
                스크램블 에그 3개 + 아보카도 반 개 + 버터커피
              </td>
              <td className="border border-border px-3 py-2">
                삼겹살 구이 + 상추쌈 + 된장찌개(감자 제외)
              </td>
              <td className="border border-border px-3 py-2">
                연어 스테이크 + 브로콜리 볶음 + 치즈
              </td>
              <td className="border border-border px-3 py-2 text-center">
                22
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                화
              </td>
              <td className="border border-border px-3 py-2">
                치즈 오믈렛 + 베이컨 3장 + 블랙커피
              </td>
              <td className="border border-border px-3 py-2">
                소고기 미역국 + 곤약밥 + 계란찜
              </td>
              <td className="border border-border px-3 py-2">
                닭다리 구이(허브) + 시금치 버터볶음 + 아몬드
              </td>
              <td className="border border-border px-3 py-2 text-center">
                25
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                수
              </td>
              <td className="border border-border px-3 py-2">
                그릭요거트(무가당) + 호두 + 치아시드
              </td>
              <td className="border border-border px-3 py-2">
                고등어구이 + 콜리플라워 라이스 + 김치(소량)
              </td>
              <td className="border border-border px-3 py-2">
                소불고기(설탕 빼고) + 깻잎 + 버섯볶음
              </td>
              <td className="border border-border px-3 py-2 text-center">
                28
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                목
              </td>
              <td className="border border-border px-3 py-2">
                아보카도 에그 보트 + 블랙커피
              </td>
              <td className="border border-border px-3 py-2">
                돼지목살 구이 + 쌈채소 + 된장
              </td>
              <td className="border border-border px-3 py-2">
                새우 마늘버터 볶음 + 아스파라거스 + 크림치즈
              </td>
              <td className="border border-border px-3 py-2 text-center">
                20
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                금
              </td>
              <td className="border border-border px-3 py-2">
                달걀 프라이 2개 + 치즈 + 견과류 한 줌
              </td>
              <td className="border border-border px-3 py-2">
                참치 샐러드(올리브오일 드레싱) + 아보카도
              </td>
              <td className="border border-border px-3 py-2">
                삼겹살 김치찌개(밥 없이) + 계란말이 + 두부
              </td>
              <td className="border border-border px-3 py-2 text-center">
                24
              </td>
            </tr>
            <tr className="bg-muted/30">
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                토
              </td>
              <td className="border border-border px-3 py-2">
                버터커피 + 코코넛오일 팬케이크(아몬드가루)
              </td>
              <td className="border border-border px-3 py-2">
                소갈비찜(당근·무 최소) + 콜리플라워 라이스
              </td>
              <td className="border border-border px-3 py-2">
                오징어볶음(고추장 줄이고) + 상추 + 된장국
              </td>
              <td className="border border-border px-3 py-2 text-center">
                30
              </td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-medium text-foreground">
                일
              </td>
              <td className="border border-border px-3 py-2">
                훈제연어 + 크림치즈 + 오이 슬라이스
              </td>
              <td className="border border-border px-3 py-2">
                닭가슴살 샐러드(MCT오일 드레싱) + 삶은 달걀
              </td>
              <td className="border border-border px-3 py-2">
                소고기 스테이크 + 버섯 소테 + 시금치
              </td>
              <td className="border border-border px-3 py-2 text-center">
                18
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
          에 맞게 양을 조절하세요. 키토에서는 배고프면 지방(버터, 올리브오일,
          견과류)을 추가하는 게 포인트야. 단, 단백질을 과하게 먹으면
          당신생(gluconeogenesis)으로 케토시스에서 빠질 수 있으니 적정량을
          지키는 게 중요해.
        </p>
      </div>

      {/* Section: Benefits */}
      <h2 id="benefits" className="mt-10 mb-4 text-xl font-bold">
        키토제닉의 효과
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        키토제닉 다이어트의 효과는 다양한 연구를 통해 보고되고 있어. 단순 체중
        감량 외에도 대사 건강 전반에 긍정적인 영향을 줄 수 있어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">빠른 초기 체중 감량</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        키토를 시작하면 첫 1~2주에 1~3kg이 빠지는 경우가 흔해. 이 중 상당 부분은
        글리코겐 고갈로 인한{" "}
        <strong className="text-foreground">수분 감소</strong>이지만, 이후부터는
        실제 체지방이 연소되기 시작해. 2013년 <em>British Journal of Nutrition</em>{" "}
        메타 분석에 따르면, 키토제닉 다이어트는 저지방 다이어트보다{" "}
        <strong className="text-foreground">
          장기적으로 유의미하게 더 많은 체중 감량
        </strong>
        을 보였어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">식욕 억제</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        케토시스 상태가 되면{" "}
        <strong className="text-foreground">
          식욕 호르몬(그렐린)이 감소
        </strong>
        하고, 지방과 단백질의 포만감이 높아 자연스럽게 먹는 양이 줄어들어.
        많은 사람들이 키토를 하면서 &quot;배가 덜 고프다&quot;고 느끼는 이유가
        바로 이것 때문이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">혈당·인슐린 개선</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        탄수화물 섭취를 줄이면 혈당 변동이 극적으로 안정되고, 인슐린 분비가
        줄어들어. 2019년 연구에 따르면 키토제닉 식단을 12주간 유지한 제2형 당뇨
        환자 그룹에서{" "}
        <strong className="text-foreground">
          HbA1c(당화혈색소)가 유의미하게 감소
        </strong>
        한 결과가 보고되었어. (단, 당뇨약 복용 중이라면 반드시 의사와 상담 후
        시작해야 해.)
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">그 외 효과</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">집중력 향상:</strong> 혈당
            롤러코스터가 사라지면서 오후 졸림이 줄어든다는 보고가 많음
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">중성지방 감소:</strong> 대부분의
            연구에서 키토 다이어트 시 중성지방이 유의미하게 감소
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">염증 감소:</strong> 설탕과
            정제 탄수화물 차단으로 만성 염증 지표 개선 가능
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">피부 개선:</strong> 인슐린
            감소와 염증 완화로 여드름이 줄었다는 경험담이 많음
          </span>
        </li>
      </ul>

      {/* Section: Keto Flu */}
      <h2 id="keto-flu" className="mt-10 mb-4 text-xl font-bold">
        키토 플루와 부작용
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        키토제닉을 시작하면 처음 며칠간{" "}
        <strong className="text-foreground">
          &quot;키토 플루(Keto Flu)&quot;
        </strong>
        라 불리는 적응 증상이 나타날 수 있어. 이건 몸이 포도당 연소에서 지방
        연소로 전환되는 과정에서 생기는 일시적인 증상이야.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">키토 플루 주요 증상</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>두통, 어지러움</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>극심한 피로감, 무기력</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>메스꺼움, 속 불편감</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>짜증, 집중력 저하 (&quot;브레인 포그&quot;)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>근육 경련, 다리 쥐</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>수면 장애</span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">키토 플루 대처법</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">1.</span>
          <span>
            <strong className="text-foreground">수분 보충:</strong> 하루
            2.5~3L 이상 물 마시기. 케토시스에서 수분 손실이 증가하기 때문
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">2.</span>
          <span>
            <strong className="text-foreground">전해질 보충:</strong> 소금
            (나트륨), 칼륨(아보카도, 시금치), 마그네슘(견과류)을 충분히 섭취.
            국물 요리(소금 넣은 육수)를 자주 마시기
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">3.</span>
          <span>
            <strong className="text-foreground">충분한 수면:</strong> 7~8시간
            수면 확보. 수면 부족은 증상을 악화시켜
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">4.</span>
          <span>
            <strong className="text-foreground">서서히 줄이기:</strong> 갑자기
            탄수화물을 끊기보다, 1주일에 걸쳐 서서히 줄이면 증상이 가벼워질 수 있어
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">5.</span>
          <span>
            <strong className="text-foreground">격한 운동 자제:</strong> 적응
            기간(1~2주)에는 가벼운 산책 정도만. 적응 후 점진적으로 강도 높이기
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">기타 부작용</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">변비:</strong> 식이섬유
            섭취가 줄어들 수 있으므로, 잎채소와 아보카도를 충분히 먹고
            수분을 많이 섭취해야 해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">&quot;키토 입냄새&quot;:</strong>{" "}
            케톤체의 하나인 아세톤이 호흡으로 배출되면서 과일 같은 독특한
            냄새가 날 수 있어. 수분 섭취와 구강 관리로 완화 가능
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">일시적 운동 능력 저하:</strong>{" "}
            지방 적응이 완료되기 전(2~4주)에는 고강도 운동 시 힘이 빠질 수 있어.
            적응 후에는 대부분 회복돼
          </span>
        </li>
      </ul>

      {/* Section: Tips */}
      <h2 id="tips" className="mt-10 mb-4 text-xl font-bold">
        성공을 위한 실전 팁
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        키토제닉은 처음에 적응이 어렵지만, 몇 가지 팁만 알면 훨씬 수월해져.
        많은 사람들이 효과를 본 실전 노하우를 정리했어.
      </p>

      <h3 className="mt-6 mb-3 text-lg font-semibold">한국에서 키토하는 법</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">삼겹살집 활용:</strong> 삼겹살 +
            쌈채소 + 된장은 완벽한 키토 메뉴. 밥만 빼면 됨
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">편의점 활용:</strong> 삶은 달걀,
            치즈, 견과류, 닭가슴살, 제로 음료 조합이면 간편한 키토 식사 가능
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">양념 주의:</strong> 고추장,
            간장(조림용), 물엿, 설탕이 들어가는 한식 양념에 주의. 소금, 후추,
            참기름, 들기름은 자유롭게 사용 가능
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">김치 소량 OK:</strong> 배추김치
            한 쪽(약 40g) 정도는 순탄수 1~2g이므로 괜찮아. 다만 무김치나 깍두기는
            탄수가 좀 더 높으니 주의
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">실수하기 쉬운 함정</h3>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">&quot;저탄고지&quot;인데 과식:</strong>{" "}
            지방을 많이 먹어도 된다고 해서 칼로리를 무한으로 섭취하면 살은 안 빠져.
            적정 칼로리 범위 내에서 비율을 조절하는 게 핵심이야.{" "}
            <Link
              href="/calc/calorie/"
              className="text-primary hover:underline font-medium"
            >
              칼로리 계산기
            </Link>
            로 확인해봐
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">단백질 과다:</strong> 단백질을
            너무 많이 먹으면 당신생이 일어나 케토시스에서 이탈할 수 있어.
            체중 kg당 1.2~1.7g 정도가 적정
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">숨은 탄수화물:</strong> 소스,
            드레싱, 양념에 설탕이 숨어있는 경우가 많아. 영양 성분표를 꼭 확인해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">채소 부족:</strong> 고기와
            치즈만 먹고 채소를 안 먹으면 식이섬유, 비타민, 미네랄이 부족해져.
            잎채소는 충분히 섭취해야 해
          </span>
        </li>
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold">케토시스 확인 방법</h3>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        자신이 케토시스 상태인지 확인하는 방법은 몇 가지가 있어:
      </p>
      <ul className="mb-4 space-y-2 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">소변 케톤 스틱:</strong> 가장
            저렴하고 간편한 방법. 약국에서 구매 가능. 초보자에게 추천
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">혈중 케톤 측정기:</strong> 가장
            정확한 방법. 0.5~3.0 mmol/L이면 케토시스 상태
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary font-bold">&#8226;</span>
          <span>
            <strong className="text-foreground">증상으로 판단:</strong> 입에서
            과일/아세톤 냄새, 소변 색 진해짐, 식욕 감소, 에너지 안정화 등
          </span>
        </li>
      </ul>

      {/* Section: Cautions */}
      <h2 id="cautions" className="mt-10 mb-4 text-xl font-bold">
        주의사항 및 피해야 하는 사람
      </h2>
      <p className="mb-4 text-muted-foreground leading-relaxed">
        키토제닉은 효과가 강력한 만큼 주의사항도 분명히 알아둬야 해. 아래
        사항을 꼭 숙지하고 시작해.
      </p>

      <ul className="mb-4 space-y-3 text-muted-foreground">
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              장기 유지 시 영양 불균형:
            </strong>{" "}
            키토를 6개월 이상 장기간 하면 특정 비타민(B1, C)과 미네랄이 부족해질
            수 있어. 종합 비타민제 보충과 정기적인 혈액 검사를 추천해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              요요 주의:
            </strong>{" "}
            키토를 중단하고 갑자기 탄수화물을 많이 먹으면 빠르게 체중이 돌아올 수
            있어. 탄수화물을 서서히 늘리면서 전환하는 것이 중요해
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              사교 활동 제약:
            </strong>{" "}
            한국 식문화에서 밥, 면, 빵을 완전히 피하기 어려울 수 있어. 모임에서
            유연하게 대처하되, 자책하지 말고 다음 끼니부터 돌아오면 돼
          </span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500 font-bold text-lg">!</span>
          <span>
            <strong className="text-foreground">
              포화지방 과다 주의:
            </strong>{" "}
            삼겹살, 버터만 먹으면 포화지방 비중이 너무 높아질 수 있어. 올리브오일,
            아보카도, 견과류 등 불포화지방과 균형을 맞춰
          </span>
        </li>
      </ul>

      <div className="my-4 rounded-lg border border-red-200 bg-red-50/50 p-4 dark:border-red-900 dark:bg-red-950/30">
        <p className="mb-2 text-sm font-bold text-foreground">
          키토제닉을 피해야 하는 사람
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">신장(콩팥) 질환자:</strong>{" "}
              고단백·고지방 식단이 신장에 부담을 줄 수 있음
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">담낭 제거 수술 이력자:</strong>{" "}
              지방 소화에 어려움이 있을 수 있음
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">췌장염 이력자:</strong>{" "}
              고지방 식단이 재발 위험을 높일 수 있음
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">임산부 및 수유부:</strong>{" "}
              태아·영아 발달에 필요한 영양소 부족 위험
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">섭식 장애 이력자:</strong>{" "}
              극단적 식이 제한이 증상을 악화시킬 수 있음
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">
                제1형 당뇨 환자:
              </strong>{" "}
              케톤산증(DKA) 위험이 있으므로 반드시 의사 관리 하에만 시도
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">&#10005;</span>
            <span>
              <strong className="text-foreground">18세 미만 청소년:</strong>{" "}
              성장기에 탄수화물 제한은 발달에 영향을 줄 수 있음
            </span>
          </li>
        </ul>
      </div>

      <p className="mb-4 text-muted-foreground leading-relaxed">
        위에 해당하지 않더라도, 키토제닉을 시작하기 전에 자신의 건강 상태를
        점검하는 게 좋아.{" "}
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
        로 현재 상태를 파악한 후, 무리 없는 범위에서 시작하세요.
      </p>

      {/* Closing CTA */}
      <div className="my-8 rounded-xl bg-gradient-to-br from-peach/15 to-mustard/15 p-6 text-center">
        <p className="mb-1 text-sm text-muted-foreground">
          키토제닉 시작 전, 내 몸 상태부터 체크하세요
        </p>
        <p className="mb-4 font-bold">
          적정 칼로리와 체지방률을 알면 키토 효과가 더 커져요
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/calc/calorie/"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            칼로리 계산기
          </Link>
          <Link
            href="/calc/body-fat/"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 dark:bg-card dark:hover:bg-muted"
          >
            체지방 계산기
          </Link>
        </div>
      </div>
    </WikiLayout>
  );
}
