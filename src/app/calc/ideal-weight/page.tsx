import { createMetadata } from "@/lib/seo/metadata";
import { IdealWeightCalculator } from "./IdealWeightCalculator";

export const metadata = createMetadata({
  title: "적정 체중 계산기 2026 — 키에 맞는 건강 체중",
  description:
    "키와 성별을 입력하면 적정 체중을 4가지 공식으로 계산합니다. BMI 기반 건강 체중 범위도 확인하세요.",
  path: "/calc/ideal-weight",
  keywords: [
    "적정 체중 계산기",
    "표준 체중 계산기",
    "이상적인 체중",
    "건강 체중",
    "키별 적정 체중",
  ],
});

export default function IdealWeightPage() {
  return <IdealWeightCalculator />;
}
