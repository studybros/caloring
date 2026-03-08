export type Gender = "male" | "female";

export interface BmrResult {
  bmr: number;
  tdeeByActivity: {
    label: string;
    multiplier: number;
    calories: number;
  }[];
}

const ACTIVITY_LEVELS = [
  { label: "비활동적 (거의 운동 안 함)", multiplier: 1.2 },
  { label: "가벼운 활동 (주 1~3회)", multiplier: 1.375 },
  { label: "보통 활동 (주 3~5회)", multiplier: 1.55 },
  { label: "활동적 (주 6~7회)", multiplier: 1.725 },
  { label: "매우 활동적 (운동선수급)", multiplier: 1.9 },
];

/**
 * Mifflin-St Jeor equation (most accurate for most people).
 * Male:   10 * weight + 6.25 * height - 5 * age + 5
 * Female: 10 * weight + 6.25 * height - 5 * age - 161
 */
export function calculateBmr(
  gender: Gender,
  heightCm: number,
  weightKg: number,
  age: number
): BmrResult {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = gender === "male" ? base + 5 : base - 161;
  const rounded = Math.round(bmr);

  const tdeeByActivity = ACTIVITY_LEVELS.map((level) => ({
    label: level.label,
    multiplier: level.multiplier,
    calories: Math.round(rounded * level.multiplier),
  }));

  return { bmr: rounded, tdeeByActivity };
}
