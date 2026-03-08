import { createMetadata } from "@/lib/seo/metadata";
import { BmiCalculator } from "./BmiCalculator";

export const metadata = createMetadata({
  title: "BMI 계산기 (비만도 계산기) 2026",
  description:
    "키와 몸무게를 입력하면 BMI(체질량지수)를 계산하고 비만도를 확인할 수 있습니다. 대한비만학회 기준 적용.",
  path: "/calc/bmi",
  keywords: [
    "BMI 계산기",
    "비만도 계산기",
    "체질량지수 계산기",
    "BMI",
    "비만도",
    "체질량지수",
    "다이어트",
  ],
});

export default function BmiPage() {
  return <BmiCalculator />;
}
