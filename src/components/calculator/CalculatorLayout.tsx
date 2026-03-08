import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  emoji: string;
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface CalculatorLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  trustLabel?: string;
  faqItems?: FAQItem[];
  relatedItems?: RelatedItem[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: BreadcrumbItem[];
  /** Slot for product recommendation after result */
  productSlot?: React.ReactNode;
}

export function CalculatorLayout({
  title,
  description,
  children,
  trustLabel,
  faqItems,
  relatedItems,
  jsonLd,
  breadcrumbs,
  productSlot,
}: CalculatorLayoutProps) {
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
      {breadcrumbs && (
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
      )}

      {/* Header */}
      <header className="mb-8">
        <h1 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
        {trustLabel && (
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-950/30 dark:text-green-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            {trustLabel}
          </div>
        )}
      </header>

      {/* Calculator */}
      <main className="my-8">{children}</main>

      {/* Product Recommendation Slot */}
      {productSlot && <div className="my-8">{productSlot}</div>}

      {/* FAQ */}
      {faqItems && faqItems.length > 0 && (
        <section className="my-12">
          <h2 className="mb-4 text-lg font-bold">자주 묻는 질문</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-lg border border-border p-4"
              >
                <summary className="cursor-pointer font-medium">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      {relatedItems && relatedItems.length > 0 && (
        <section className="my-12">
          <h2 className="mb-4 text-lg font-bold">관련 계산기</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {relatedItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
              >
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
