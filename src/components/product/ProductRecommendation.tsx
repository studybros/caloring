"use client";

import Link from "next/link";
import { ShoppingBasket, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { RecommendProduct } from "@/data/products";

interface ProductRecommendationProps {
  title: string;
  description: string;
  products: RecommendProduct[];
}

export function ProductRecommendation({
  title,
  description,
  products,
}: ProductRecommendationProps) {
  if (products.length === 0) return null;

  return (
    <Card className="border-primary/20 bg-primary/5">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <ShoppingBasket className="h-5 w-5 text-primary" />
          <CardTitle className="text-base">{title}</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}/`}
              className="flex min-w-[160px] flex-col rounded-lg border border-border bg-background p-3 transition-colors hover:border-primary/50"
            >
              <div className="mb-2 flex h-20 items-center justify-center rounded bg-muted text-3xl">
                {product.image ?? "📦"}
              </div>
              <div className="text-xs text-muted-foreground">
                {product.category}
              </div>
              <div className="mt-0.5 line-clamp-2 text-sm font-medium leading-tight">
                {product.name}
              </div>
              <div className="mt-auto pt-2">
                <span className="text-sm font-bold text-primary">{product.price}</span>
              </div>
              <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                <ArrowRight className="h-3 w-3" />
                가격 추이 보기
              </div>
            </Link>
          ))}
        </div>
        {/* Disclosure hidden until affiliate links are active */}
      </CardContent>
    </Card>
  );
}
