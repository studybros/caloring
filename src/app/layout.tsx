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
    "단백질",
  ],
  metadataBase: new URL("https://caloring.kr"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "칼로링",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.svg" />

        {/* Search Console Verification */}
        <meta name="google-site-verification" content="9n5poI8B7Ak6eAEWEFCW9UEy_3yxpheCFjBDgQ0OAao" />
        <meta name="naver-site-verification" content="NAVER_VERIFICATION_CODE" />

        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');`,
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
