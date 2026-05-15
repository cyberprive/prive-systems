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

export default function Home() {
  return (
    <>
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
