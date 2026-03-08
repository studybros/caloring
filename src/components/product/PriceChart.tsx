"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";
import type { PriceEntry } from "@/lib/types/product";
import { formatKRW } from "@/lib/utils/format";

interface PriceChartProps {
  priceHistory: PriceEntry[];
  currentPrice: number;
  averagePrice: number;
}

export function PriceChart({
  priceHistory,
  currentPrice,
  averagePrice,
}: PriceChartProps) {
  const data = priceHistory.map((entry, i) => ({
    date: entry.date.slice(5), // "01-15"
    price: entry.price,
    isLatest: i === priceHistory.length - 1,
    isCheap: entry.price <= averagePrice,
  }));

  const minPrice = Math.min(...priceHistory.map((h) => h.price));
  const maxPrice = Math.max(...priceHistory.map((h) => h.price));
  const yMin = Math.floor((minPrice * 0.92) / 1000) * 1000;
  const yMax = Math.ceil((maxPrice * 1.05) / 1000) * 1000;

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
          barCategoryGap="20%"
        >
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: "#aaa" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={[yMin, yMax]}
            tick={{ fontSize: 10, fill: "#aaa" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(v) =>
              v >= 10000 ? `${Math.round(v / 10000)}만` : `${v}`
            }
            width={40}
          />
          <Tooltip
            formatter={(value) => [formatKRW(value as number), ""]}
            labelFormatter={(label) => `${label}`}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              fontSize: "13px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
            }}
            cursor={{ fill: "rgba(0,0,0,0.03)", radius: 6 }}
          />
          <ReferenceLine
            y={averagePrice}
            stroke="#d4c5b5"
            strokeDasharray="4 4"
            label={{
              value: "평균",
              position: "left",
              fontSize: 10,
              fill: "#b0a090",
            }}
          />
          <Bar dataKey="price" radius={[6, 6, 0, 0]} maxBarSize={32}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  entry.isLatest
                    ? "#e8967a"
                    : entry.isCheap
                      ? "rgba(232, 150, 122, 0.3)"
                      : "rgba(200, 190, 180, 0.25)"
                }
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
