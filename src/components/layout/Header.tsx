"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Calculator,
  Menu,
  X,
  ShoppingBasket,
  Flame,
  Scale,
  Activity,
} from "lucide-react";

const navItems = [
  {
    label: "칼로리 계산기",
    href: "/calc/calorie",
    icon: Flame,
  },
  {
    label: "기초대사량",
    href: "/calc/bmr",
    icon: Activity,
  },
  {
    label: "BMI 계산기",
    href: "/calc/bmi",
    icon: Scale,
  },
  {
    label: "다이어트 식품",
    href: "/products",
    icon: ShoppingBasket,
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Calculator className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight">칼로링</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="rounded-md p-2 text-muted-foreground hover:bg-accent md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="border-t border-border/50 bg-background px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
