export type Gender = "male" | "female";

export interface IdealWeightResult {
  robinson: number;
  miller: number;
  devine: number;
  hamwi: number;
  average: number;
  bmiRange: { min: number; max: number }; // healthy weight range based on BMI 18.5-24.9
}

/**
 * Calculate ideal body weight using multiple formulas.
 * All formulas use height in cm.
 */
export function calculateIdealWeight(
  gender: Gender,
  heightCm: number
): IdealWeightResult {
  const heightInches = heightCm / 2.54;
  const inchesOver5ft = heightInches - 60; // inches over 5 feet

  let robinson: number;
  let miller: number;
  let devine: number;
  let hamwi: number;

  if (gender === "male") {
    robinson = 52 + 1.9 * inchesOver5ft;
    miller = 56.2 + 1.41 * inchesOver5ft;
    devine = 50 + 2.3 * inchesOver5ft;
    hamwi = 48 + 2.7 * inchesOver5ft;
  } else {
    robinson = 49 + 1.7 * inchesOver5ft;
    miller = 53.1 + 1.36 * inchesOver5ft;
    devine = 45.5 + 2.3 * inchesOver5ft;
    hamwi = 45.5 + 2.2 * inchesOver5ft;
  }

  robinson = Math.round(robinson * 10) / 10;
  miller = Math.round(miller * 10) / 10;
  devine = Math.round(devine * 10) / 10;
  hamwi = Math.round(hamwi * 10) / 10;

  const average =
    Math.round(((robinson + miller + devine + hamwi) / 4) * 10) / 10;

  // BMI-based healthy weight range (BMI 18.5 ~ 24.9)
  const heightM = heightCm / 100;
  const bmiRange = {
    min: Math.round(18.5 * heightM * heightM * 10) / 10,
    max: Math.round(24.9 * heightM * heightM * 10) / 10,
  };

  return { robinson, miller, devine, hamwi, average, bmiRange };
}
