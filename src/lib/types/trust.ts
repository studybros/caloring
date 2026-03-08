import type { LucideIcon } from "lucide-react";

export interface TrustInfo {
  icon: LucideIcon;
  label: string;
  verifiedDate: string;
  expertReview?: {
    name: string;
    title: string;
  };
}

export interface FormulaVariable {
  name: string;
  description: string;
}

export interface MethodologyFormula {
  expression: string;
  variables?: FormulaVariable[];
}

export interface MethodologyExample {
  input: string;
  process: string;
  result: string;
}

export interface MethodologySource {
  label: string;
  description: string;
  url?: string;
}

export interface MethodologyInfo {
  formulas: MethodologyFormula[];
  example: MethodologyExample;
  sources: MethodologySource[];
  notes: string[];
}

export interface SourceInfo {
  label: string;
  description: string;
  url?: string;
}
