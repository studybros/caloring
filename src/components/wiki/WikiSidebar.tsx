"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  Flame,
  Utensils,
  Dumbbell,
  Apple,
  Heart,
  BookOpen,
  Menu,
  X,
} from "lucide-react";

const SIDEBAR_NAV = [
  {
    category: "다이어트 방법",
    icon: Flame,
    items: [
      { title: "간헐적 단식 (16:8)", href: "/diet/intermittent-fasting/" },
      { title: "저탄고지 (키토)", href: "/diet/keto/" },
      { title: "지중해식 다이어트", href: "/diet/mediterranean/" },
      { title: "고단백 다이어트", href: "/diet/high-protein/" },
      { title: "혈당 다이어트 (GI)", href: "/diet/blood-sugar/" },
      { title: "비건 다이어트", href: "/diet/vegan/" },
    ],
  },
  {
    category: "칼로리별 식단표",
    icon: Utensils,
    items: [
      { title: "1200kcal 식단표", href: "/diet/1200kcal/" },
      { title: "1500kcal 식단표", href: "/diet/1500kcal/" },
      { title: "1800kcal 식단표", href: "/diet/1800kcal/" },
      { title: "2000kcal 식단표", href: "/diet/2000kcal/" },
      { title: "2500kcal 식단표", href: "/diet/2500kcal/" },
    ],
  },
  {
    category: "목적별 가이드",
    icon: Dumbbell,
    items: [
      { title: "체지방 감량 식단", href: "/diet/fat-loss/" },
      { title: "벌크업 식단", href: "/diet/bulk-up/" },
      { title: "린매스업 식단", href: "/diet/lean-mass/" },
      { title: "직장인 다이어트", href: "/diet/office-worker/" },
    ],
  },
  {
    category: "음식·식재료 가이드",
    icon: Apple,
    items: [
      { title: "한국 음식 칼로리표", href: "/diet/calorie-table/" },
      { title: "편의점 다이어트", href: "/diet/convenience-store/" },
      { title: "다이어트 간식 추천", href: "/diet/snacks/" },
      { title: "외식 가이드", href: "/diet/eating-out/" },
    ],
  },
  {
    category: "건강 연계 식단",
    icon: Heart,
    items: [
      { title: "당뇨 식단", href: "/diet/diabetes/" },
      { title: "고혈압 식단 (DASH)", href: "/diet/dash/" },
      { title: "장건강 식단", href: "/diet/gut-health/" },
    ],
  },
];

export function WikiSidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Auto-expand category containing current page
  const activeCategory = SIDEBAR_NAV.findIndex((cat) =>
    cat.items.some((item) => pathname === item.href || pathname === item.href.replace(/\/$/, ""))
  );

  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(
    () => new Set(activeCategory >= 0 ? [activeCategory] : [0])
  );

  const toggleCategory = (index: number) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const isActive = (href: string) =>
    pathname === href || pathname === href.replace(/\/$/, "");

  const navContent = (
    <nav className="space-y-1">
      {/* Index link */}
      <Link
        href="/diet/"
        className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
          pathname === "/diet" || pathname === "/diet/"
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:bg-accent hover:text-foreground"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <BookOpen className="h-4 w-4" />
        전체 가이드
      </Link>

      {/* Categories */}
      {SIDEBAR_NAV.map((cat, catIndex) => {
        const expanded = expandedCategories.has(catIndex);
        const hasActive = cat.items.some((item) => isActive(item.href));

        return (
          <div key={cat.category}>
            <button
              onClick={() => toggleCategory(catIndex)}
              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent ${
                hasActive
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              <cat.icon className="h-4 w-4 shrink-0" />
              <span className="flex-1 text-left">{cat.category}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 text-muted-foreground transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
            </button>

            {expanded && (
              <ul className="ml-4 border-l border-border pl-2 space-y-0.5 py-1">
                {cat.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-1.5 text-[13px] transition-colors ${
                        isActive(item.href)
                          ? "bg-primary/10 font-medium text-primary border-l-2 border-primary -ml-[9px] pl-[17px]"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed bottom-20 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg lg:hidden"
        aria-label="식단 가이드 메뉴"
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed left-0 top-14 z-30 h-[calc(100vh-3.5rem)] w-72 border-r border-border bg-background p-4 overflow-y-auto transition-transform lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          다이어트 식단 가이드
        </p>
        {navContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-60 shrink-0">
        <div className="sticky top-[4.5rem] max-h-[calc(100vh-5rem)] overflow-y-auto pr-2">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            다이어트 식단 가이드
          </p>
          {navContent}
        </div>
      </aside>
    </>
  );
}
