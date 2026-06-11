import { notFound } from "next/navigation";
import { PageSections } from "@/components/PageSections";
import { copy, type Locale } from "@/lib/copy";

const SITE_URL = "https://www.cyberprive.com";

type Params = Promise<{ lang: string }>;

function buildStructuredData(lang: Locale) {
  const t = copy[lang];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "Prive Systems",
        url: SITE_URL,
        description: t.hero.subtitle,
        areaServed: "Worldwide",
        knowsAbout: t.solutions.items.map((i) => i.title),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "Prive Systems",
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: ["en", "es"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}#service`,
        name: "Prive Systems",
        url: `${SITE_URL}/${lang}`,
        provider: { "@id": `${SITE_URL}#organization` },
        serviceType:
          lang === "es"
            ? "Consultoría de sistemas operativos"
            : "Operational systems consultancy",
        areaServed: "Worldwide",
        audience: {
          "@type": "BusinessAudience",
          audienceType: t.hero.audience,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export default async function Page({ params }: { params: Params }) {
  const { lang } = await params;
  if (lang !== "en" && lang !== "es") notFound();
  const structuredData = buildStructuredData(lang as Locale);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageSections />
    </>
  );
}
