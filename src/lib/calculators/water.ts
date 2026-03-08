export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very_active";

export interface WaterResult {
  baseWater: number; // ml
  activityWater: number; // ml
  totalWater: number; // ml
  cups: number; // 250ml cups
  bottles: number; // 500ml bottles
}

const ACTIVITY_ADDITIONS: Record<ActivityLevel, number> = {
  sedentary: 0,
  light: 200,
  moderate: 400,
  active: 600,
  very_active: 800,
};

/**
 * Calculate daily water intake recommendation.
 * Base: 30ml per kg body weight, adjusted by activity level.
 */
export function calculateWater(
  weightKg: number,
  activity: ActivityLevel
): WaterResult {
  const baseWater = Math.round(weightKg * 30);
  const activityWater = ACTIVITY_ADDITIONS[activity];
  const totalWater = baseWater + activityWater;
  const cups = Math.round(totalWater / 250);
  const bottles = Math.round((totalWater / 500) * 10) / 10;

  return { baseWater, activityWater, totalWater, cups, bottles };
}
