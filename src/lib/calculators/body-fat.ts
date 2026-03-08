export type Gender = "male" | "female";

export interface BodyFatResult {
  bodyFatPercent: number;
  category: string;
  leanMass: number; // kg
  fatMass: number; // kg
}

const CATEGORIES_FEMALE = [
  { max: 14, label: "필수 지방" },
  { max: 21, label: "운동선수" },
  { max: 25, label: "건강 (피트니스)" },
  { max: 32, label: "보통" },
  { max: Infinity, label: "비만" },
];

const CATEGORIES_MALE = [
  { max: 6, label: "필수 지방" },
  { max: 14, label: "운동선수" },
  { max: 18, label: "건강 (피트니스)" },
  { max: 25, label: "보통" },
  { max: Infinity, label: "비만" },
];

/**
 * US Navy body fat estimation method.
 * Uses neck, waist (and hip for female) circumference measurements.
 */
export function calculateBodyFat(
  gender: Gender,
  heightCm: number,
  waistCm: number,
  neckCm: number,
  hipCm: number, // only used for female
  weightKg: number
): BodyFatResult {
  let bodyFatPercent: number;

  if (gender === "male") {
    // Male formula: 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450
    bodyFatPercent =
      495 /
        (1.0324 -
          0.19077 * Math.log10(waistCm - neckCm) +
          0.15456 * Math.log10(heightCm)) -
      450;
  } else {
    // Female formula: 495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height)) - 450
    bodyFatPercent =
      495 /
        (1.29579 -
          0.35004 * Math.log10(waistCm + hipCm - neckCm) +
          0.221 * Math.log10(heightCm)) -
      450;
  }

  bodyFatPercent = Math.round(bodyFatPercent * 10) / 10;
  bodyFatPercent = Math.max(bodyFatPercent, 2); // minimum clamp

  const categories = gender === "female" ? CATEGORIES_FEMALE : CATEGORIES_MALE;
  const category =
    categories.find((c) => bodyFatPercent < c.max)?.label ?? "비만";

  const fatMass = Math.round((weightKg * bodyFatPercent) / 100 * 10) / 10;
  const leanMass = Math.round((weightKg - fatMass) * 10) / 10;

  return { bodyFatPercent, category, leanMass, fatMass };
}
