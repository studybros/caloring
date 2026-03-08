import { createMetadata } from "@/lib/seo/metadata";
import { BmrCalculator } from "./BmrCalculator";

export const metadata = createMetadata({
  title: "기초대사량 계산기 (BMR) 2026",
  description:
    "기초대사량(BMR)과 활동별 하루 권장 칼로리(TDEE)를 계산하세요. Mifflin-St Jeor 공식 기반.",
  path: "/calc/bmr",
  keywords: [
    "기초대사량 계산기",
    "기초대사량",
    "BMR 계산기",
    "TDEE 계산기",
    "하루 칼로리",
    "다이어트 칼로리",
  ],
});

export default function BmrPage() {
  return <BmrCalculator />;
}
