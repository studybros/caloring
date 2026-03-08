"use client";

import type { NutritionInfo } from "@/lib/types/product";

interface MacroRingsProps {
  nutrition: NutritionInfo;
}

function Ring({
  value,
  max,
  label,
  unit,
  color,
  size = 80,
}: {
  value: number;
  max: number;
  label: string;
  unit: string;
  color: string;
  size?: number;
}) {
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = max > 0 ? Math.min(value / max, 1) : 0;
  const dashOffset = circumference * (1 - pct);

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted/50"
          />
          {/* Value ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-all duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-base font-extrabold leading-none">{value}</span>
          <span className="text-[10px] text-muted-foreground">{unit}</span>
        </div>
      </div>
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  );
}

export function MacroRings({ nutrition }: MacroRingsProps) {
  const { protein, carbs, fat } = nutrition;
  const total = protein + carbs + fat;
  if (total === 0) return null;

  return (
    <div className="flex items-center justify-center gap-6">
      <Ring
        value={protein}
        max={total}
        label="단백질"
        unit="g"
        color="#e8967a" // peach/primary tone
      />
      <Ring
        value={carbs}
        max={total}
        label="탄수화물"
        unit="g"
        color="#e8c56a" // mustard tone
      />
      <Ring
        value={fat}
        max={total}
        label="지방"
        unit="g"
        color="#c4b8aa" // muted warm gray
      />
    </div>
  );
}
