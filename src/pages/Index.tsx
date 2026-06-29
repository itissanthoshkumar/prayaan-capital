import { lazy, Suspense } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";
import EligibilitySection from "@/components/EligibilitySection";
import AISection from "@/components/AISection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";

// Recharts (used inside EMICalculator) is ~130 KB raw — defer it so it doesn't
// block the initial paint. Suspense shows a same-height placeholder until ready.
const EMICalculator = lazy(() => import("@/components/EMICalculator"));

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      <ProductsSection />
      <HowItWorks />
      <EligibilitySection />
      <Suspense fallback={<div className="py-24 bg-section" style={{ minHeight: "520px" }} />}>
        <EMICalculator />
      </Suspense>
      <AISection />
      <TestimonialsSection />
      <AudienceSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
