import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";
import EligibilitySection from "@/components/EligibilitySection";
import EMICalculator from "@/components/EMICalculator";
import AISection from "@/components/AISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <HowItWorks />
      <EligibilitySection />
      <EMICalculator />
      <AISection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
