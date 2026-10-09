import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { GTM_ID, consentDefaultScript } from "@/lib/analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.cyberprive.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Prive Systems",
  authors: [{ name: "Prive Systems" }],
  generator: "Next.js",
  category: "business",
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const path = h.get("x-pathname") ?? "/";
  const lang = path.startsWith("/es") ? "es" : "en";

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {GTM_ID && (
        <head>
          <script
            id="consent-default"
            dangerouslySetInnerHTML={{ __html: consentDefaultScript }}
          />
        </head>
      )}
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body className="min-h-full bg-white text-neutral-900">{children}</body>
    </html>
  );
}
