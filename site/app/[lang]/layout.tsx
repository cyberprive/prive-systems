import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/lib/i18n";
import type { Locale } from "@/lib/copy";

const SITE_URL = "https://www.cyberprive.com";

const meta = {
  en: {
    title: "Prive Systems — Enterprise-level tools for small businesses",
    description:
      "Practical, custom operational systems for SMBs. Reduce repetitive work, organize information, and help your team operate at a higher level — without the enterprise budget.",
    locale: "en_US",
    alternate: "es_ES",
  },
  es: {
    title:
      "Prive Systems — Herramientas de nivel empresarial para pequeñas empresas",
    description:
      "Sistemas operativos prácticos y a medida para PYMES. Reduce el trabajo repetitivo, organiza la información y eleva a tu equipo — sin el presupuesto de una gran empresa.",
    locale: "es_ES",
    alternate: "en_US",
  },
} as const;

export function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

type Params = Promise<{ lang: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "en" && lang !== "es") return {};
  const m = meta[lang];
  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${SITE_URL}/${lang}`,
      languages: {
        en: `${SITE_URL}/en`,
        es: `${SITE_URL}/es`,
        "x-default": `${SITE_URL}/en`,
      },
    },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/${lang}`,
      siteName: "Prive Systems",
      title: m.title,
      description: m.description,
      locale: m.locale,
      alternateLocale: [m.alternate],
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
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
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "es") notFound();
  return <LocaleProvider locale={lang as Locale}>{children}</LocaleProvider>;
}
