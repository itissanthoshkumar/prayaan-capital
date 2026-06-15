import Layout from "@/components/Layout";
import HeroSectionV2 from "@/components/HeroSectionV2";
import StatsSection from "@/components/StatsSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";
import EligibilitySection from "@/components/EligibilitySection";
import EMICalculator from "@/components/EMICalculator";
import AISection from "@/components/AISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";

/* Redesigned homepage (V2) — fuller hero with a rotating photo collage.
   Lives at /home-v2 so the live / homepage is untouched. */
const IndexV2 = () => {
  return (
    <Layout>
      <HeroSectionV2 />
      <StatsSection />
      <ProductsSection />
      <HowItWorks />
      <EligibilitySection />
      <EMICalculator />
      <AISection />
      <TestimonialsSection />
      <AudienceSection />
      <CTASection />
    </Layout>
  );
};

export default IndexV2;
