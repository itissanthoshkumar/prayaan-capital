import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import EMICalculator from "@/components/EMICalculator";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";

const EMICalc = () => (
  <Layout>
    <section className="pt-24 pb-6 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <AIBadge label="EMI Calculator" />
          <h1 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-4 mb-3">EMI Calculator</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">Estimate monthly EMIs for any Prayaan Capital loan in seconds.</p>
        </motion.div>
          </div>
          <HeroIllustration variant="calculator" />
        </div>
      </div>
    </section>
    <EMICalculator />
  </Layout>
);
export default EMICalc;
