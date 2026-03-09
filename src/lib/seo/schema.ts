interface WebAppSchemaOptions {
  name: string;
  description: string;
  url: string;
  category: string;
}

export function createWebAppSchema({ name, description, url, category }: WebAppSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: category,
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    inLanguage: "ko",
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function createFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

const SITE_URL = "https://caloring.kr";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  const allItems: BreadcrumbItem[] = [{ label: "홈", href: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

export function createArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  image,
}: ArticleSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Organization",
      name: "칼로링",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "칼로링",
      url: SITE_URL,
    },
    inLanguage: "ko",
    ...(image ? { image } : {}),
  };
}

// Organization + WebSite schema for homepage
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "칼로링",
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    description: "다이어트 계산기와 식품 최저가 비교 서비스",
    sameAs: [],
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "칼로링",
    url: SITE_URL,
    description: "40kg 뺀 언니의 다이어트 비서. 칼로리 계산기, 식단 가이드, 다이어트 식품 최저가 비교.",
    inLanguage: "ko",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/products/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// Product schema for product detail pages
interface ProductSchemaOptions {
  name: string;
  description: string;
  url: string;
  image?: string;
  brand: string;
  category: string;
  price: number;
  priceCurrency?: string;
}

export function createProductSchema({
  name,
  description,
  url,
  image,
  brand,
  category,
  price,
  priceCurrency = "KRW",
}: ProductSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    ...(image ? { image } : {}),
    brand: {
      "@type": "Brand",
      name: brand,
    },
    category,
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency,
      availability: "https://schema.org/InStock",
      url,
    },
  };
}

// ItemList schema for product listing pages
interface ItemListItem {
  name: string;
  url: string;
  image?: string;
}

export function createItemListSchema(name: string, items: ItemListItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.slice(0, 30).map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      ...(item.image ? { image: item.image } : {}),
    })),
  };
}
