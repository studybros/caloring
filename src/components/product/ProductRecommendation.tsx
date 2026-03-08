"use client";

import { ShoppingBasket, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Product {
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  link: string;
  image?: string;
}

interface ProductRecommendationProps {
  title: string;
  description: string;
  products: Product[];
}

export function ProductRecommendation({
  title,
  description,
  products,
}: ProductRecommendationProps) {
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
          {products.map((product, i) => (
            <a
              key={i}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex min-w-[160px] flex-col rounded-lg border border-border bg-background p-3 transition-colors hover:border-primary/50"
            >
              {/* Product image placeholder */}
              <div className="mb-2 flex h-20 items-center justify-center rounded bg-muted text-2xl">
                {product.image ?? "📦"}
              </div>
              <div className="text-xs text-muted-foreground">
                {product.category}
              </div>
              <div className="mt-0.5 text-sm font-medium leading-tight">
                {product.name}
              </div>
              <div className="mt-auto flex items-baseline gap-1 pt-2">
                {product.discount && (
                  <span className="text-xs font-bold text-red-500">
                    {product.discount}
                  </span>
                )}
                <span className="text-sm font-bold">{product.price}</span>
              </div>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
              <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                <ExternalLink className="h-3 w-3" />
                최저가 보기
              </div>
            </a>
          ))}
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          (사이트 운영을 위한 제휴 링크입니다)
        </p>
      </CardContent>
    </Card>
  );
}
