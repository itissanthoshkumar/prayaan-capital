import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";

const cases = [
  { name: "Rajesh Auto Components", city: "Pune", loan: "₹35L Machinery Finance", result: "Doubled monthly output in 9 months" },
  { name: "Meera Spice Exports", city: "Kochi", loan: "₹22L Working Capital", result: "Entered 3 new export markets" },
  { name: "Suresh Textiles", city: "Surat", loan: "₹40L LAP", result: "Hired 28 new weavers, 45% revenue growth" },
  { name: "Fatima Handicrafts", city: "Jaipur", loan: "₹12L Women Entrepreneur Loan", result: "Onboarded 60+ artisan partners" },
  { name: "Amit Agro Industries", city: "Indore", loan: "₹28L Supply Chain Finance", result: "Cleared invoice backlog in 30 days" },
];

const CaseStudies = () => (
  <Layout>
    <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <div>
        <AIBadge label="Case Studies" />
        <h1 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-4 mb-3">Customer Success Stories</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">Real MSMEs that grew with Prayaan Capital.</p>
          </div>
          <HeroIllustration variant="stories" />
        </div>
      </div>
    </section>
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-5 max-w-5xl space-y-5">
        {cases.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-3xl border border-border/60 p-6 md:p-8 shadow-card relative grid md:grid-cols-3 gap-4">
            <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${i % 2 === 0 ? "from-primary to-accent" : "from-accent to-[hsl(var(--color-lavender))]"} opacity-40 rounded-full`} />
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Business</p><p className="font-display font-bold text-foreground">{c.name}</p><p className="text-xs text-muted-foreground mt-1">{c.city}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Loan</p><p className="font-semibold text-primary">{c.loan}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Outcome</p><p className="text-sm text-foreground">{c.result}</p></div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);
export default CaseStudies;
