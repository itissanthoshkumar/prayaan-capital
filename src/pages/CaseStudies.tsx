import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";

const cases = [
  { name: "Rajesh Kumar", city: "Pune", loan: "₹35L Loan Against Property", result: "Funded his daughter's education and home repair" },
  { name: "Meera Nair", city: "Kochi", loan: "₹22L Loan Against Property", result: "Consolidated high-cost debt, halved her EMIs" },
  { name: "Suresh Rao", city: "Surat", loan: "₹40L Loan Against Property", result: "Expanded the family home, kept the asset" },
  { name: "Fatima Sheikh", city: "Jaipur", loan: "₹12L Housing Loan", result: "Bought her first home as a single owner" },
  { name: "Amit Patel", city: "Indore", loan: "₹28L Balance Transfer & Top-up", result: "Switched lenders, saved 2.4% on interest" },
];

const CaseStudies = () => (
  <Layout>
    <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <div>
        <AIBadge label="Case Studies" />
        <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-4 mb-3">Customer Success Stories</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">Real owners who unlocked the value of their property with Prayaan Capital.</p>
          </div>
          <HeroIllustration variant="stories" />
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 max-w-5xl space-y-5">
        {cases.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="clay-surface p-6 md:p-8 relative grid md:grid-cols-3 gap-4">
            <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${i % 2 === 0 ? "from-primary to-accent" : "from-accent to-[hsl(var(--color-lavender))]"} opacity-40 rounded-full`} />
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Business</p><p className="font-display font-bold text-foreground">{c.name}</p><p className="text-xs text-muted-foreground mt-1">{c.city}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Loan</p><p className="font-mono font-semibold text-primary">{c.loan}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Outcome</p><p className="text-sm text-foreground">{c.result}</p></div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);
export default CaseStudies;
