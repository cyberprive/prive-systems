import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.cyberprive.com";
const TITLE = "Prive Systems — Enterprise-level tools for small businesses";
const DESCRIPTION =
  "Practical, custom operational systems for SMBs. Reduce repetitive work, organize information, and help your team operate at a higher level — without the enterprise budget.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Prive Systems",
  authors: [{ name: "Prive Systems" }],
  generator: "Next.js",
  keywords: [
    "operational systems",
    "SMB software",
    "custom internal tools",
    "small business automation",
    "AI-assisted workflows",
    "Apple ecosystem consulting",
    "cybersecurity SMB",
    "Prive Systems",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Prive Systems",
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-neutral-900">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
