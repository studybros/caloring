import type { PriceEntry, PriceAnalysis } from "@/lib/types/product";

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
    };
  }

  const prices = history.map((h) => h.price);
  const sum = prices.reduce((a, b) => a + b, 0);
  const averagePrice = Math.round(sum / prices.length);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const minDate = history.find((h) => h.price === minPrice)?.date ?? "";
  const maxDate = history.find((h) => h.price === maxPrice)?.date ?? "";

  const percentFromAvg = ((currentPrice - averagePrice) / averagePrice) * 100;
  const savings = averagePrice - currentPrice;

  // Low threshold: bottom 30%, High threshold: top 30%
  const range = maxPrice - minPrice;
  const lowThreshold = minPrice + range * 0.3;
  const highThreshold = maxPrice - range * 0.3;

  let status: "low" | "mid" | "high";
  if (currentPrice <= lowThreshold) {
    status = "low";
  } else if (currentPrice >= highThreshold) {
    status = "high";
  } else {
    status = "mid";
  }

  return {
    currentPrice,
    averagePrice,
    minPrice,
    maxPrice,
    minDate,
    maxDate,
    percentFromAvg: Math.round(percentFromAvg * 10) / 10,
    status,
    savings,
  };
}

export function getPriceStatusLabel(status: "low" | "mid" | "high"): string {
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
