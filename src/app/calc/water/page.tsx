import { createMetadata } from "@/lib/seo/metadata";
import { WaterCalculator } from "./WaterCalculator";

export const metadata = createMetadata({
  title: "물 섭취량 계산기 2026 — 하루 권장 수분 섭취량",
  description:
    "체중과 활동량을 입력하면 하루에 물을 얼마나 마셔야 하는지 계산합니다. 종이컵, 생수병 단위로 쉽게 확인.",
  path: "/calc/water",
  keywords: [
    "물 섭취량 계산기",
    "하루 물 섭취량",
    "수분 섭취 권장량",
    "다이어트 물",
    "물 마시기",
  ],
});

export default function WaterPage() {
  return <WaterCalculator />;
}
