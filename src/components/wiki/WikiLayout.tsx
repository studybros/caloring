import Link from "next/link";
import { ChevronRight, BookOpen, Calculator, ShoppingBasket } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
}

interface RelatedLink {
  title: string;
  href: string;
  emoji: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface WikiLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  breadcrumbs: { label: string; href?: string }[];
  toc?: TOCItem[];
  faqItems?: FAQItem[];
  relatedDiet?: RelatedLink[];
  relatedCalc?: RelatedLink[];
  relatedProducts?: RelatedLink[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  updatedAt?: string;
}

export function WikiLayout({
  title,
  description,
  children,
  breadcrumbs,
  toc,
  faqItems,
  relatedDiet,
  relatedCalc,
  relatedProducts,
  jsonLd,
  updatedAt,
}: WikiLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* JSON-LD */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]),
          }}
        />
      )}

      {/* Breadcrumbs */}
      <nav className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
        {breadcrumbs.map((item, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </span>
        ))}
      </nav>

      {/* Header */}
      <header className="mb-8">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <BookOpen className="h-3 w-3" />
          다이어트 가이드
        </div>
        <h1 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {updatedAt && (
          <p className="mt-2 text-xs text-muted-foreground/60">
            최종 업데이트: {updatedAt}
          </p>
        )}
      </header>

      {/* TOC */}
      {toc && toc.length > 0 && (
        <nav className="mb-8 rounded-xl border border-border bg-muted/30 p-4">
          <p className="mb-2 text-sm font-bold">목차</p>
          <ol className="space-y-1">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {i + 1}. {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Main Content */}
      <article className="wiki-content">{children}</article>

      {/* Related Calculators */}
      {relatedCalc && relatedCalc.length > 0 && (
        <section className="my-10">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="h-4 w-4 text-primary" />
            <h2 className="text-lg font-bold">관련 계산기</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {relatedCalc.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts && relatedProducts.length > 0 && (
        <section className="my-10">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBasket className="h-4 w-4 text-primary" />
            <h2 className="text-lg font-bold">추천 식품</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {relatedProducts.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Diet Guides */}
      {relatedDiet && relatedDiet.length > 0 && (
        <section className="my-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="text-lg font-bold">관련 다이어트 가이드</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {relatedDiet.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="font-medium">{item.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="my-10">
          <h2 className="mb-4 text-lg font-bold">자주 묻는 질문</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border p-4"
              >
                <summary className="cursor-pointer font-medium">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <p className="mt-8 text-center text-[11px] text-muted-foreground/60">
        본 콘텐츠는 일반적인 정보 제공 목적이며 의료 전문가의 조언을 대체하지
        않습니다.
      </p>
    </div>
  );
}
