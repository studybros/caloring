export type ProductCategory =
  | "protein"
  | "chicken"
  | "shake"
  | "protein-bar"
  | "zero-drink"
  | "konjac"
  | "lunchbox"
  | "yogurt"
  | "kombucha";

export interface NutritionInfo {
  servingSize: string; // "47g"
  servings: number; // 48
  calories: number; // 190kcal per serving
  protein: number; // grams
  carbs: number;
  sugar?: number;
  fat: number;
}

export interface PriceEntry {
  date: string; // "2025-01-15"
  price: number;
}

export interface Product {
  slug: string;
  name: string;
  brand: string;
  category: ProductCategory;
  categoryLabel: string;
  image: string; // emoji or image URL
  description: string;
  link: string; // affiliate link (coupang partners)
  weight?: string; // "2.27kg"
  group?: string; // groups variants together (e.g., "syntha6-protein")
  naverProductId?: string; // for price tracking
  naverSearchKeyword?: string; // search keyword for price updates
  naverRank?: number; // naver shopping search ranking
  nutrition?: NutritionInfo;
  currentPrice: number; // naver lowest price (tracking)
  priceHistory: PriceEntry[]; // naver price history
  updatedAt: string; // "2025-01-15"
}

export interface PriceAnalysis {
  currentPrice: number;
  averagePrice: number;
  minPrice: number;
  maxPrice: number;
  minDate: string;
  maxDate: string;
  percentFromAvg: number; // negative = below avg
  status: "low" | "mid" | "high";
  savings: number; // how much saved vs average
}

export const CATEGORY_MAP: Record<ProductCategory, string> = {
  protein: "프로틴",
  chicken: "닭가슴살",
  shake: "쉐이크/음료",
  "protein-bar": "프로틴바",
  "zero-drink": "제로음료",
  konjac: "곤약/두부면",
  lunchbox: "다이어트 도시락",
  yogurt: "그릭요거트",
  kombucha: "콤부차",
};

export const CATEGORY_EMOJI: Record<ProductCategory, string> = {
  protein: "🥛",
  chicken: "🍗",
  shake: "🥤",
  "protein-bar": "🍫",
  "zero-drink": "🥫",
  konjac: "🍜",
  lunchbox: "🍱",
  yogurt: "🥣",
  kombucha: "🍵",
};
