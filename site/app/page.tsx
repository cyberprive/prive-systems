import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { ExamplesSection } from "@/components/sections/ExamplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

const SITE_URL = "https://www.cyberprive.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Prive Systems",
      url: SITE_URL,
      description:
        "Practical operational systems consultancy for SMBs. Custom internal tools, AI-assisted workflows, and infrastructure that reduces repetitive work.",
      areaServed: "Worldwide",
      knowsAbout: [
        "Operational systems",
        "Custom internal tools",
        "AI-assisted workflows",
        "Apple ecosystem management",
        "Cybersecurity for small business",
        "Business process automation",
      ],
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
      url: SITE_URL,
      provider: { "@id": `${SITE_URL}#organization` },
      serviceType: "Operational systems consultancy",
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Service businesses, clinics, hospitality, professional practices, and other operations-heavy SMBs (5-50 employees)",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does an implementation take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most first systems are live within 2 to 6 weeks, depending on scope. We start with the highest-leverage bottleneck rather than trying to rebuild everything at once.",
          },
        },
        {
          "@type": "Question",
          name: "Is this safe for our data?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Security is built in from the start — controlled access, audit visibility, credential management, and sensible defaults. Background includes 15+ years of cybersecurity-aware SMB work.",
          },
        },
        {
          "@type": "Question",
          name: "How is this different from hiring an AI agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI agencies sell agents and chatbots. This is operational infrastructure — structured systems with predictable behavior, human review, and no vendor lock-in. AI is used where it helps, not as the product.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <ExamplesSection />
        <ProcessSection />
        <BenefitsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
