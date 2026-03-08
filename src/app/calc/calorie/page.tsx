import { createMetadata } from "@/lib/seo/metadata";
import { CalorieCalculator } from "./CalorieCalculator";

export const metadata = createMetadata({
  title: "칼로리 계산기 2026 — 하루 권장 칼로리 계산",
  description:
    "하루 권장 칼로리와 탄단지 비율을 계산하세요. 다이어트, 체중 유지, 벌크업 목표별 맞춤 칼로리 계산. Mifflin-St Jeor 공식 기반.",
  path: "/calc/calorie",
  keywords: [
    "칼로리 계산기",
    "하루 권장 칼로리",
    "다이어트 칼로리",
    "TDEE 계산기",
    "탄단지 비율",
    "매크로 계산기",
  ],
});

export default function CaloriePage() {
  return <CalorieCalculator />;
}
