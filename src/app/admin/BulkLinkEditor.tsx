"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CATEGORY_MAP, CATEGORY_EMOJI } from "@/lib/types/product";
import type { Product, ProductCategory } from "@/lib/types/product";

type ProductFormData = Omit<Product, "priceHistory"> & {
  priceHistory: { date: string; price: number }[];
};

interface BulkLinkEditorProps {
  products: ProductFormData[];
  onUpdateLink: (idx: number, link: string) => void;
  onSave: () => void;
  serverOnline: boolean;
  saveStatus: "idle" | "saving" | "saved" | "error";
}

/**
 * Generate a simplified search query from product name
 * Removes pack counts, weights, unit numbers for better Coupang search results
 */
function generateSearchQuery(name: string, brand: string): string {
  let q = name;
  // Remove "N종 혼합", "N가지 맛" (before pack removal to avoid partial matches)
  q = q.replace(/\d+종\s*(혼합|믹스)?/g, "");
  q = q.replace(/\d+가지\s*맛?/g, "");
  // Remove weight/unit patterns: 2kg, 500ml, 100g, 1.5L etc.
  q = q.replace(/\d+(\.\d+)?\s*(kg|g|ml|L|l)(?![a-zA-Z가-힣])/gi, "");
  // Remove pack/count patterns: 50팩, 24캔, 12개입, 12개, 10입, 30봉, 6병, 90정, 14ea
  q = q.replace(/\d+\s*(팩|개입|개|입|캔|병|봉|정|매|포|세트|ea)/gi, "");
  // Remove "대용량", "소용량"
  q = q.replace(/(대용량|소용량)/g, "");
  // Remove "x 50팩", "x50", "x 2세트" patterns (standalone x multiplier)
  q = q.replace(/\s+x\s*(\d+\s*)?(팩|개입|개|입|캔|병|봉|정|매|포|세트)?/gi, "");
  // Remove trailing "외 N종"
  q = q.replace(/외\s*\d+종/g, "");
  // Remove "30+5팩", "1+1" patterns
  q = q.replace(/\d+\+\d*(팩|개입|개|입|캔|병|봉|정|매|포|세트)?/g, "");
  // Remove "27P", "(44개)" patterns
  q = q.replace(/\d+P/g, "");
  q = q.replace(/\(\s*\)/g, "");
  // Clean up multiple spaces
  q = q.replace(/\s+/g, " ").trim();
  return q;
}

export function BulkLinkEditor({
  products,
  onUpdateLink,
  onSave,
  serverOnline,
  saveStatus,
}: BulkLinkEditorProps) {
  const [showOnlyEmpty, setShowOnlyEmpty] = useState(true);
  const [filterCat, setFilterCat] = useState<string>("all");
  const [queries, setQueries] = useState<Record<number, string>>({});
  const [skipped, setSkipped] = useState<Set<number>>(new Set());
  const inputRefs = useRef<Record<number, HTMLInputElement | null>>({});

  // Group products by category
  const categories = Object.entries(CATEGORY_MAP) as [ProductCategory, string][];

  const getQuery = useCallback(
    (idx: number) => {
      if (queries[idx] !== undefined) return queries[idx];
      const p = products[idx];
      return generateSearchQuery(p.name, p.brand);
    },
    [products, queries]
  );

  const setQuery = (idx: number, val: string) => {
    setQueries((prev) => ({ ...prev, [idx]: val }));
  };

  // Stats
  const totalNoLink = products.filter((p) => p.link === "#" || !p.link).length;
  const withLink = products.filter((p) => p.link !== "#" && p.link).length;

  // Filter products
  const filteredProducts = products
    .map((p, i) => ({ ...p, _idx: i }))
    .filter((p) => {
      if (showOnlyEmpty && p.link !== "#" && p.link) return false;
      if (filterCat !== "all" && p.category !== filterCat) return false;
      return true;
    });

  // Group by category
  const grouped = categories
    .map(([cat, label]) => {
      const items = filteredProducts.filter((p) => p.category === cat);
      const catTotal = products.filter((p) => p.category === cat).length;
      const catDone = products.filter(
        (p) => p.category === cat && p.link !== "#" && p.link
      ).length;
      return { cat, label, items, catTotal, catDone };
    })
    .filter((g) => filterCat === "all" ? g.items.length > 0 : g.cat === filterCat);

  function handleLinkPaste(idx: number, value: string) {
    const trimmed = value.trim();
    if (trimmed && trimmed !== "#") {
      onUpdateLink(idx, trimmed);
    }
  }

  function handleSkip(idx: number) {
    setSkipped((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  }

  function handleCoupangSearch(idx: number) {
    const q = getQuery(idx);
    window.open(
      `https://www.coupang.com/np/search?q=${encodeURIComponent(q)}`,
      "_blank"
    );
  }

  // Auto-focus next empty input after link is set
  useEffect(() => {
    // Find first empty input in the visible list and focus it
    // This runs after render, so refs should be populated
  }, [products]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold">제휴 링크 일괄 입력</h2>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">{withLink}</span>개 완료
            {" / "}
            <span className="font-medium text-amber-600">{totalNoLink}</span>개
            미설정
            {skipped.size > 0 && (
              <>
                {" / "}
                <span className="text-muted-foreground">
                  {skipped.size}개 건너뜀
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={showOnlyEmpty}
              onChange={(e) => setShowOnlyEmpty(e.target.checked)}
              className="rounded"
            />
            미설정만 보기
          </label>
          {serverOnline && (
            <Button size="sm" onClick={onSave} disabled={saveStatus === "saving"}>
              {saveStatus === "saving"
                ? "저장중..."
                : saveStatus === "saved"
                  ? "저장 완료!"
                  : "파일에 저장"}
            </Button>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{
            width: `${products.length ? (withLink / products.length) * 100 : 0}%`,
          }}
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-1">
        <button
          className={`px-2 py-1 text-xs rounded ${
            filterCat === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted hover:bg-muted/80"
          }`}
          onClick={() => setFilterCat("all")}
        >
          전체
        </button>
        {categories.map(([key, label]) => {
          const catCount = products.filter(
            (p) => p.category === key && (p.link === "#" || !p.link)
          ).length;
          return (
            <button
              key={key}
              className={`px-2 py-1 text-xs rounded ${
                filterCat === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
              onClick={() => setFilterCat(key)}
            >
              {CATEGORY_EMOJI[key]} {label}
              {catCount > 0 && (
                <span className="ml-1 text-[10px] opacity-70">({catCount})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tip */}
      <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-xs text-blue-800 dark:text-blue-200 space-y-1">
        <p className="font-medium">사용법</p>
        <p>
          1. "쿠팡 검색" 클릭 → 쿠팡에서 상품 페이지 열기 → 파트너스 확장 클릭 →
          링크 복사
        </p>
        <p>2. 이 탭으로 돌아와서 링크 칸에 붙여넣기 (Ctrl+V)</p>
        <p>3. 쿠팡에 없는 상품은 "건너뛰기" 클릭 (검색 페이지로 연결됨)</p>
      </div>

      {/* Product groups */}
      <div className="space-y-6">
        {grouped.map(({ cat, label, items, catTotal, catDone }) => (
          <div key={cat}>
            <div className="flex items-center gap-2 mb-2 sticky top-0 bg-background py-2 z-10">
              <span className="text-lg">{CATEGORY_EMOJI[cat as ProductCategory]}</span>
              <h3 className="font-bold text-sm">{label}</h3>
              <span className="text-xs text-muted-foreground">
                ({catDone}/{catTotal} 완료)
              </span>
              <div className="flex-1 h-1 bg-muted rounded-full ml-2">
                <div
                  className="h-full bg-primary/60 rounded-full transition-all"
                  style={{
                    width: `${catTotal ? (catDone / catTotal) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              {items.map((p) => {
                const isDone = p.link !== "#" && p.link;
                const isSkipped = skipped.has(p._idx);

                return (
                  <div
                    key={p._idx}
                    className={`rounded-lg border p-3 transition-colors ${
                      isDone
                        ? "border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/20"
                        : isSkipped
                          ? "border-dashed border-muted-foreground/30 opacity-60"
                          : "border-border"
                    }`}
                  >
                    {/* Product info row */}
                    <div className="flex items-start gap-3 mb-2">
                      <span className="text-xl mt-0.5">{p.image}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium leading-tight">
                          {p.name}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {p.brand} · {p.currentPrice.toLocaleString()}원
                          {p.weight && ` · ${p.weight}`}
                        </p>
                      </div>
                      {isDone && (
                        <span className="text-xs text-green-600 font-medium shrink-0">
                          완료
                        </span>
                      )}
                    </div>

                    {/* Search + Link row */}
                    {!isSkipped && (
                      <div className="space-y-1.5">
                        {/* Search query */}
                        <div className="flex gap-2">
                          <Input
                            value={getQuery(p._idx)}
                            onChange={(e) => setQuery(p._idx, e.target.value)}
                            className="flex-1 text-xs h-8"
                            placeholder="쿠팡 검색어"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 text-xs shrink-0"
                            onClick={() => handleCoupangSearch(p._idx)}
                          >
                            쿠팡 검색
                          </Button>
                        </div>

                        {/* Link input */}
                        <div className="flex gap-2">
                          <Input
                            ref={(el) => {
                              inputRefs.current[p._idx] = el;
                            }}
                            value={isDone ? (p.link as string) : ""}
                            onChange={(e) =>
                              handleLinkPaste(p._idx, e.target.value)
                            }
                            onPaste={(e) => {
                              // Get paste data and set immediately
                              const text = e.clipboardData.getData("text");
                              if (text.trim()) {
                                e.preventDefault();
                                handleLinkPaste(p._idx, text);
                              }
                            }}
                            className="flex-1 text-xs h-8 font-mono"
                            placeholder="파트너스 링크 붙여넣기"
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 text-xs shrink-0 text-muted-foreground"
                            onClick={() => handleSkip(p._idx)}
                          >
                            건너뛰기
                          </Button>
                        </div>

                        {/* Show truncated link if set */}
                        {isDone && (
                          <p className="text-[10px] text-green-600 truncate font-mono">
                            {p.link}
                          </p>
                        )}
                      </div>
                    )}

                    {isSkipped && (
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground">
                          건너뜀 — 쿠팡 검색으로 연결됩니다
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 text-xs"
                          onClick={() => handleSkip(p._idx)}
                        >
                          다시 입력
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}

              {items.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-4">
                  모든 링크가 설정되었습니다
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
