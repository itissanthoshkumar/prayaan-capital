import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";

import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";
import EligibilitySection from "@/components/EligibilitySection";
import EMICalculator from "@/components/EMICalculator";
import AISection from "@/components/AISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />

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

export default Index;
