import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "칼로링 - 다이어트 계산기 & 식품 비교",
    template: "%s | 칼로링",
  },
  description:
    "칼로리 계산, 이제 칼로링. 칼로리 계산기, 기초대사량 계산기, 다이어트 식품 최저가 비교까지.",
  keywords: [
    "칼로리 계산기",
    "기초대사량 계산기",
    "BMI 계산기",
    "다이어트",
    "다이어트 식품",
    "체지방 계산기",
    "다이어트 식단",
    "단백질",
  ],
  metadataBase: new URL("https://caloring.kr"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "칼로링",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFCCBC" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Search Console Verification */}
        <meta name="google-site-verification" content="9n5poI8B7Ak6eAEWEFCW9UEy_3yxpheCFjBDgQ0OAao" />
        <meta name="naver-site-verification" content="ad018d1339abf8d78518b76442b91d18975a6f27" />

        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y0MDGQDYD3" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-Y0MDGQDYD3');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
