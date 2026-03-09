"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BulkLinkEditor } from "./BulkLinkEditor";
import productsJson from "@/data/products/products.json";
import { CATEGORY_MAP, CATEGORY_EMOJI } from "@/lib/types/product";
import type { Product, ProductCategory } from "@/lib/types/product";

type ProductFormData = Omit<Product, "priceHistory"> & {
  priceHistory: { date: string; price: number }[];
};

const EMPTY_PRODUCT: ProductFormData = {
  slug: "",
  name: "",
  brand: "",
  category: "protein",
  categoryLabel: "프로틴",
  image: "🥛",
  description: "",
  link: "#",
  weight: "",
  naverProductId: "",
  naverSearchKeyword: "",
  currentPrice: 0,
  priceHistory: [],
  updatedAt: new Date().toISOString().split("T")[0],
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[가-힣]+/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

const ADMIN_API = "http://localhost:3099";

export function AdminPage() {
  const [products, setProducts] = useState<ProductFormData[]>(
    productsJson as ProductFormData[]
  );
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filterCat, setFilterCat] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [editData, setEditData] = useState<ProductFormData | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [serverOnline, setServerOnline] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [hasUnsaved, setHasUnsaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"products" | "links">("products");

  // Check if admin server is running
  useEffect(() => {
    fetch(`${ADMIN_API}/health`)
      .then((r) => r.ok && setServerOnline(true))
      .catch(() => setServerOnline(false));
  }, []);

  const handleSaveToServer = useCallback(async (data: ProductFormData[]) => {
    if (!serverOnline) return;
    setSaveStatus("saving");
    try {
      const res = await fetch(`${ADMIN_API}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
      }
      setSaveStatus("saved");
      setHasUnsaved(false);
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch (err) {
      setSaveStatus("error");
      window.alert("저장 실패: " + (err instanceof Error ? err.message : err));
      setTimeout(() => setSaveStatus("idle"), 3000);
    }
  }, [serverOnline]);

  const handleUpdateLink = useCallback((idx: number, link: string) => {
    setProducts((prev) => {
      const updated = [...prev];
      updated[idx] = { ...updated[idx], link };
      return updated;
    });
    setHasUnsaved(true);
  }, []);

  const handleBulkSave = useCallback(() => {
    handleSaveToServer(products);
  }, [products, handleSaveToServer]);

  const filtered = useMemo(() => {
    return products
      .map((p, i) => ({ ...p, _idx: i }))
      .filter((p) => filterCat === "all" || p.category === filterCat)
      .filter(
        (p) =>
          !searchQuery ||
          p.name.includes(searchQuery) ||
          p.brand.includes(searchQuery) ||
          p.slug.includes(searchQuery)
      );
  }, [products, filterCat, searchQuery]);

  const categories = Object.entries(CATEGORY_MAP) as [
    ProductCategory,
    string,
  ][];

  function handleSelect(idx: number) {
    setSelectedIdx(idx);
    setEditData({ ...products[idx] });
    setIsNew(false);
  }

  function handleNew() {
    setSelectedIdx(null);
    setEditData({ ...EMPTY_PRODUCT });
    setIsNew(true);
  }

  function handleCategoryChange(cat: ProductCategory) {
    if (!editData) return;
    setEditData({
      ...editData,
      category: cat,
      categoryLabel: CATEGORY_MAP[cat],
      image: CATEGORY_EMOJI[cat],
    });
  }

  function handleAutoSlug() {
    if (!editData) return;
    const slug = slugify(`${editData.brand} ${editData.name}`);
    setEditData({ ...editData, slug });
  }

  function handleSave() {
    if (!editData) return;
    if (!editData.slug || !editData.name) {
      window.alert("슬러그와 상품명은 필수입니다");
      return;
    }

    const updated = [...products];
    if (isNew) {
      // Check duplicate slug
      if (updated.some((p) => p.slug === editData.slug)) {
        window.alert("이미 존재하는 슬러그입니다: " + editData.slug);
        return;
      }
      updated.push(editData);
      setSelectedIdx(updated.length - 1);
    } else if (selectedIdx !== null) {
      updated[selectedIdx] = editData;
    }
    setProducts(updated);
    setHasUnsaved(true);
    setIsNew(false);
  }

  function handleDelete() {
    if (selectedIdx === null) return;
    if (!window.confirm(`"${products[selectedIdx].name}" 삭제?`)) return;
    const updated = products.filter((_, i) => i !== selectedIdx);
    setProducts(updated);
    setHasUnsaved(true);
    setSelectedIdx(null);
    setEditData(null);
  }

  function handleExport() {
    const json = JSON.stringify(products, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "products.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleCopyJson() {
    const json = JSON.stringify(products, null, 2);
    navigator.clipboard.writeText(json).then(() => {
      window.alert("JSON이 클립보드에 복사되었습니다");
    });
  }

  const noLinkCount = products.filter((p) => p.link === "#" || !p.link).length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <header className="mb-6 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">상품 관리</h1>
            <p className="text-sm text-muted-foreground">
              {products.length}개 상품
              {activeTab === "products" && (
                <>
                  {" ("}
                  {filterCat === "all"
                    ? "전체"
                    : CATEGORY_MAP[filterCat as ProductCategory]}
                  {searchQuery && ` · "${searchQuery}" 검색`}: {filtered.length}개)
                </>
              )}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            {serverOnline ? (
              <span className="text-xs text-green-600 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
                로컬 서버 연결됨
              </span>
            ) : (
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full inline-block" />
                로컬 서버 꺼짐
              </span>
            )}
            <Button variant="outline" size="sm" onClick={handleCopyJson}>
              JSON 복사
            </Button>
            <Button variant="outline" size="sm" onClick={handleExport}>
              JSON 다운로드
            </Button>
            {activeTab === "products" && (
              <Button size="sm" onClick={handleNew}>
                + 새 상품
              </Button>
            )}
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 p-1 bg-muted rounded-lg w-fit">
          <button
            className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
              activeTab === "products"
                ? "bg-background font-medium shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("products")}
          >
            상품 편집
          </button>
          <button
            className={`px-4 py-1.5 text-sm rounded-md transition-colors ${
              activeTab === "links"
                ? "bg-background font-medium shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveTab("links")}
          >
            제휴 링크 입력
            {noLinkCount > 0 && (
              <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold bg-amber-500 text-white rounded-full">
                {noLinkCount}
              </span>
            )}
          </button>
        </div>

        {serverOnline && hasUnsaved && activeTab === "products" && (
          <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
            <span className="text-sm text-amber-800 dark:text-amber-200">
              저장하지 않은 변경사항이 있습니다
            </span>
            <Button
              size="sm"
              disabled={saveStatus === "saving"}
              onClick={() => handleSaveToServer(products)}
            >
              {saveStatus === "saving"
                ? "저장중..."
                : saveStatus === "saved"
                  ? "저장 완료!"
                  : "파일에 저장"}
            </Button>
          </div>
        )}
      </header>

      {activeTab === "links" && (
        <BulkLinkEditor
          products={products}
          onUpdateLink={handleUpdateLink}
          onSave={handleBulkSave}
          serverOnline={serverOnline}
          saveStatus={saveStatus}
        />
      )}

      {activeTab === "products" && <div className="grid grid-cols-[320px_1fr] gap-6">
        {/* Left: Product List */}
        <div className="space-y-3">
          <Input
            placeholder="상품 검색..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="flex flex-wrap gap-1">
            <button
              className={`px-2 py-1 text-xs rounded ${
                filterCat === "all"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
              onClick={() => setFilterCat("all")}
            >
              전체
            </button>
            {categories.map(([key, label]) => (
              <button
                key={key}
                className={`px-2 py-1 text-xs rounded ${
                  filterCat === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
                onClick={() => setFilterCat(key)}
              >
                {CATEGORY_EMOJI[key]} {label}
              </button>
            ))}
          </div>
          <div className="h-[calc(100vh-280px)] overflow-y-auto space-y-1 border rounded-lg p-2">
            {filtered.map((p) => (
              <button
                key={p._idx}
                className={`w-full text-left p-2 rounded text-sm hover:bg-muted/80 ${
                  selectedIdx === p._idx ? "bg-primary/10 ring-1 ring-primary" : ""
                }`}
                onClick={() => handleSelect(p._idx)}
              >
                <div className="flex items-center gap-2">
                  <span>{p.image}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{p.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {p.brand} · {p.currentPrice.toLocaleString()}원
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Edit Form */}
        <div>
          {editData ? (
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{isNew ? "새 상품 등록" : "상품 수정"}</span>
                  <div className="flex gap-2">
                    {!isNew && (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={handleDelete}
                      >
                        삭제
                      </Button>
                    )}
                    <Button size="sm" onClick={handleSave}>
                      {isNew ? "추가" : "저장"}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>상품명 *</Label>
                    <Input
                      value={editData.name}
                      onChange={(e) =>
                        setEditData({ ...editData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>브랜드 *</Label>
                    <Input
                      value={editData.brand}
                      onChange={(e) =>
                        setEditData({ ...editData, brand: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>슬러그 (URL) *</Label>
                    <div className="flex gap-2">
                      <Input
                        value={editData.slug}
                        onChange={(e) =>
                          setEditData({ ...editData, slug: e.target.value })
                        }
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleAutoSlug}
                      >
                        자동
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>카테고리</Label>
                    <select
                      className="w-full h-9 rounded-md border px-3 text-sm"
                      value={editData.category}
                      onChange={(e) =>
                        handleCategoryChange(e.target.value as ProductCategory)
                      }
                    >
                      {categories.map(([key, label]) => (
                        <option key={key} value={key}>
                          {CATEGORY_EMOJI[key]} {label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>설명</Label>
                  <Input
                    value={editData.description}
                    onChange={(e) =>
                      setEditData({ ...editData, description: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>용량/중량</Label>
                    <Input
                      value={editData.weight || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, weight: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>현재 가격 (원)</Label>
                    <Input
                      type="number"
                      value={editData.currentPrice}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          currentPrice: parseInt(e.target.value) || 0,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>제휴 링크</Label>
                    <div className="flex gap-2">
                      <Input
                        value={editData.link}
                        onChange={(e) =>
                          setEditData({ ...editData, link: e.target.value })
                        }
                        placeholder="쿠팡파트너스 링크"
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const q = encodeURIComponent(editData.name);
                          window.open(`https://www.coupang.com/np/search?q=${q}`, "_blank");
                        }}
                        title="쿠팡에서 검색 → 파트너스 확장으로 링크 생성"
                      >
                        쿠팡 검색
                      </Button>
                    </div>
                    {editData.link === "#" && (
                      <p className="text-xs text-amber-600">
                        제휴 링크 미설정 — 쿠팡 검색 → 파트너스 확장 클릭 → 링크 복사 후 여기에 붙여넣기
                      </p>
                    )}
                  </div>
                </div>

                {/* Naver Tracking */}
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-3">네이버 가격추적</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>네이버 상품 ID</Label>
                      <Input
                        value={editData.naverProductId || ""}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            naverProductId: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>네이버 검색 키워드</Label>
                      <Input
                        value={editData.naverSearchKeyword || ""}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            naverSearchKeyword: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Nutrition */}
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-3">영양정보 (선택)</p>
                  {editData.nutrition ? (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <Label className="text-xs">1회 제공량</Label>
                          <Input
                            value={editData.nutrition.servingSize}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                nutrition: {
                                  ...editData.nutrition!,
                                  servingSize: e.target.value,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">총 횟수</Label>
                          <Input
                            type="number"
                            value={editData.nutrition.servings}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                nutrition: {
                                  ...editData.nutrition!,
                                  servings: parseInt(e.target.value) || 0,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">칼로리 (kcal)</Label>
                          <Input
                            type="number"
                            value={editData.nutrition.calories}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                nutrition: {
                                  ...editData.nutrition!,
                                  calories: parseInt(e.target.value) || 0,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-3">
                        <div className="space-y-1">
                          <Label className="text-xs">단백질 (g)</Label>
                          <Input
                            type="number"
                            step="0.1"
                            value={editData.nutrition.protein}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                nutrition: {
                                  ...editData.nutrition!,
                                  protein: parseFloat(e.target.value) || 0,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">탄수화물 (g)</Label>
                          <Input
                            type="number"
                            step="0.1"
                            value={editData.nutrition.carbs}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                nutrition: {
                                  ...editData.nutrition!,
                                  carbs: parseFloat(e.target.value) || 0,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">당류 (g)</Label>
                          <Input
                            type="number"
                            step="0.1"
                            value={editData.nutrition.sugar ?? 0}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                nutrition: {
                                  ...editData.nutrition!,
                                  sugar: parseFloat(e.target.value) || 0,
                                },
                              })
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">지방 (g)</Label>
                          <Input
                            type="number"
                            step="0.1"
                            value={editData.nutrition.fat}
                            onChange={(e) =>
                              setEditData({
                                ...editData,
                                nutrition: {
                                  ...editData.nutrition!,
                                  fat: parseFloat(e.target.value) || 0,
                                },
                              })
                            }
                          />
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setEditData({ ...editData, nutrition: undefined })
                        }
                      >
                        영양정보 삭제
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setEditData({
                          ...editData,
                          nutrition: {
                            servingSize: "",
                            servings: 0,
                            calories: 0,
                            protein: 0,
                            carbs: 0,
                            fat: 0,
                          },
                        })
                      }
                    >
                      + 영양정보 추가
                    </Button>
                  )}
                </div>

                {/* Price History */}
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-3">
                    가격 이력 ({editData.priceHistory.length}건)
                  </p>
                  <div className="max-h-40 overflow-y-auto space-y-1 text-sm">
                    {editData.priceHistory
                      .slice()
                      .reverse()
                      .map((entry, i) => (
                        <div
                          key={i}
                          className="flex justify-between p-1 px-2 bg-muted/50 rounded"
                        >
                          <span>{entry.date}</span>
                          <span className="tabular-nums">
                            {entry.price.toLocaleString()}원
                          </span>
                        </div>
                      ))}
                    {editData.priceHistory.length === 0 && (
                      <p className="text-muted-foreground text-xs">
                        가격 이력 없음
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex items-center justify-center h-64 text-muted-foreground">
              왼쪽에서 상품을 선택하거나 새 상품을 추가하세요
            </div>
          )}
        </div>
      </div>}
    </div>
  );
}
