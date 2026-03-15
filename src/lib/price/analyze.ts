import type { PriceEntry, PriceAnalysis } from "@/lib/types/product";

// Minimum price history entries required for meaningful analysis
const MIN_HISTORY_FOR_ANALYSIS = 3;

// Remove outlier prices from history (median ±50%)
function removeOutliers(prices: number[]): number[] {
  if (prices.length < 3) return prices;
  const sorted = [...prices].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  return prices.filter(
    (p) => p >= median * 0.5 && p <= median * 1.5
  );
}

export function analyzePrices(
  currentPrice: number,
  history: PriceEntry[]
): PriceAnalysis {
  if (history.length === 0) {
    return {
      currentPrice,
      averagePrice: currentPrice,
      minPrice: currentPrice,
      maxPrice: currentPrice,
      minDate: "",
      maxDate: "",
      percentFromAvg: 0,
      status: "mid",
      savings: 0,
      hasEnoughData: false,
    };
  }

  const rawPrices = history.map((h) => h.price);

  // Clean outliers before analysis
  const cleanPrices = removeOutliers(rawPrices);
  const prices = cleanPrices.length > 0 ? cleanPrices : rawPrices;

  const sum = prices.reduce((a, b) => a + b, 0);
  const averagePrice = Math.round(sum / prices.length);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  // Find dates from original history (matching cleaned prices)
  const minDate = history.find((h) => h.price === minPrice)?.date ?? "";
  const maxDate = history.find((h) => h.price === maxPrice)?.date ?? "";

  const percentFromAvg = ((currentPrice - averagePrice) / averagePrice) * 100;
  const savings = averagePrice - currentPrice;

  // Need enough clean data points to make meaningful price judgments
  const hasEnoughData = cleanPrices.length >= MIN_HISTORY_FOR_ANALYSIS;

  let status: "low" | "mid" | "high";
  if (!hasEnoughData) {
    // Not enough data — always "데이터 수집 중" (shown as "mid")
    status = "mid";
  } else {
    const range = maxPrice - minPrice;
    const lowThreshold = minPrice + range * 0.3;
    const highThreshold = maxPrice - range * 0.3;

    if (currentPrice <= lowThreshold) {
      status = "low";
    } else if (currentPrice >= highThreshold) {
      status = "high";
    } else {
      status = "mid";
    }
  }

  return {
    currentPrice,
    averagePrice,
    minPrice,
    maxPrice,
    minDate,
    maxDate,
    // Only show % when we have enough data
    percentFromAvg: hasEnoughData
      ? Math.round(percentFromAvg * 10) / 10
      : 0,
    status,
    savings: hasEnoughData ? savings : 0,
    hasEnoughData,
  };
}

export function getPriceStatusLabel(status: "low" | "mid" | "high", hasEnoughData: boolean = true): string {
  if (!hasEnoughData) return "가격 수집 중";
  switch (status) {
    case "low":
      return "착한 가격";
    case "mid":
      return "보통 가격";
    case "high":
      return "비싼 편";
  }
}

export function getPriceStatusColor(status: "low" | "mid" | "high") {
  switch (status) {
    case "low":
      return { bg: "bg-primary/15", text: "text-primary", border: "border-primary/30" };
    case "mid":
      return { bg: "bg-muted", text: "text-muted-foreground", border: "border-border" };
    case "high":
      return { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-400/30" };
  }
}
