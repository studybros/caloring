import type { Metadata } from "next";

const SITE_NAME = "칼로링";
const SITE_URL = "https://caloring.kr";
const SITE_DESCRIPTION = "칼로리 계산, 이제 칼로링. 다이어트 계산기, 기초대사량, 칼로리 계산과 다이어트 식품 최저가 비교.";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}

export function createMetadata({ title, description, path, keywords, ogImage }: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;
  const imageUrl = `${SITE_URL}${ogImage ?? "/og-default.svg"}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(", "),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ko_KR",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

export { SITE_NAME, SITE_URL, SITE_DESCRIPTION };
