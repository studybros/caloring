export type Gender = "male" | "female";
export type Goal = "lose" | "maintain" | "gain";
export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active";

const ACTIVITY_MULTIPLIERS: Record<
  ActivityLevel,
  { multiplier: number; label: string }
> = {
  sedentary: { multiplier: 1.2, label: "비활동적 (사무직, 거의 운동 안 함)" },
  light: { multiplier: 1.375, label: "가벼운 활동 (주 1~3일 가벼운 운동)" },
  moderate: { multiplier: 1.55, label: "보통 활동 (주 3~5일 운동)" },
  active: { multiplier: 1.725, label: "활동적 (주 6~7일 운동)" },
  very_active: { multiplier: 1.9, label: "매우 활동적 (하루 2회 운동)" },
};

export interface CalorieResult {
  bmr: number;
  tdee: number;
  activityLabel: string;
  goalCalories: number;
  goalLabel: string;
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
}

export function calculateCalorie(
  gender: Gender,
  heightCm: number,
  weightKg: number,
  age: number,
  activity: ActivityLevel,
  goal: Goal
): CalorieResult {
  // Mifflin-St Jeor
  const bmr =
    gender === "male"
      ? Math.round(10 * weightKg + 6.25 * heightCm - 5 * age + 5)
      : Math.round(10 * weightKg + 6.25 * heightCm - 5 * age - 161);

  const { multiplier, label: activityLabel } = ACTIVITY_MULTIPLIERS[activity];
  const tdee = Math.round(bmr * multiplier);

  let goalCalories: number;
  let goalLabel: string;
  switch (goal) {
    case "lose":
      goalCalories = Math.round(tdee * 0.8); // 20% deficit
      goalLabel = "체중 감량 (-20%)";
      break;
    case "gain":
      goalCalories = Math.round(tdee * 1.15); // 15% surplus
      goalLabel = "체중 증가 (+15%)";
      break;
    default:
      goalCalories = tdee;
      goalLabel = "체중 유지";
  }

  // Macro split: 30% protein, 45% carbs, 25% fat
  const protein = Math.round((goalCalories * 0.3) / 4); // 4 kcal per gram
  const carbs = Math.round((goalCalories * 0.45) / 4);
  const fat = Math.round((goalCalories * 0.25) / 9); // 9 kcal per gram

  return {
    bmr,
    tdee,
    activityLabel,
    goalCalories,
    goalLabel,
    protein,
    carbs,
    fat,
  };
}
