export interface BmiResult {
  bmi: number;
  category: string;
  healthRisk: string;
  normalWeightMin: number;
  normalWeightMax: number;
}

const BMI_CATEGORIES = [
  { max: 18.5, category: "저체중", risk: "영양실조, 면역력 저하 위험" },
  { max: 23, category: "정상", risk: "건강 위험 낮음" },
  { max: 25, category: "과체중", risk: "만성 질환 주의 필요" },
  { max: 30, category: "비만 (1단계)", risk: "당뇨, 고혈압 위험 증가" },
  { max: 35, category: "비만 (2단계)", risk: "심혈관 질환 위험 높음" },
  { max: Infinity, category: "고도비만", risk: "합병증 위험 매우 높음" },
];

export function calculateBmi(
  heightCm: number,
  weightKg: number
): BmiResult {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  const match = BMI_CATEGORIES.find((c) => bmi < c.max) ?? BMI_CATEGORIES[5];

  const normalWeightMin = 18.5 * heightM * heightM;
  const normalWeightMax = 23 * heightM * heightM;

  return {
    bmi: Math.round(bmi * 10) / 10,
    category: match.category,
    healthRisk: match.risk,
    normalWeightMin: Math.round(normalWeightMin * 10) / 10,
    normalWeightMax: Math.round(normalWeightMax * 10) / 10,
  };
}
