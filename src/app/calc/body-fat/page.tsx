import { createMetadata } from "@/lib/seo/metadata";
import { BodyFatCalculator } from "./BodyFatCalculator";

export const metadata = createMetadata({
  title: "체지방 계산기 2026 — 체지방률 측정",
  description:
    "허리, 목, 엉덩이 둘레를 입력하면 체지방률을 계산할 수 있습니다. 미해군(US Navy) 공식 기반 체지방 측정.",
  path: "/calc/body-fat",
  keywords: [
    "체지방 계산기",
    "체지방률 계산",
    "체지방 측정",
    "체지방률",
    "다이어트",
    "바디프로필",
  ],
});

export default function BodyFatPage() {
  return <BodyFatCalculator />;
}
