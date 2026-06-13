import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";

const rows = [
  ["Business Term Loan", "14% – 22% p.a.", "Up to 2% + GST", "Nil after 6 months"],
  ["Loan Against Property", "12% – 18% p.a.", "Up to 1.5% + GST", "Nil after 12 months"],
  ["Working Capital", "15% – 22% p.a.", "Up to 2% + GST", "Nil after 6 months"],
  ["Machinery Finance", "13% – 20% p.a.", "Up to 2% + GST", "Nil after 6 months"],
  ["Supply Chain Finance", "13.5% – 18% p.a.", "0.5% – 1.5% + GST", "Not applicable"],
];

const charges = [
  ["Late EMI charge", "2% per month on overdue"],
  ["Bounce charge", "₹500 per bounce + GST"],
  ["Loan rescheduling", "₹1,000 + GST"],
  ["Duplicate statement", "₹250 + GST"],
  ["Documentation charge", "₹1,500 + GST"],
  ["Stamp duty", "As per applicable state law"],
];

const InterestRatesAndCharges = () => (
  <Layout>
    <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <AIBadge label="Rate Card" />
          <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-4 mb-3">Interest Rates & Charges</h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl">Transparent, RBI-compliant pricing. Final rate depends on AI risk grade.</p>
        </motion.div>
          </div>
          <HeroIllustration variant="calculator" />
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 max-w-5xl space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="clay-surface overflow-hidden">
          <div className="h-[3px] bg-gradient-to-r from-primary to-accent" />
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead className="bg-muted/40 text-muted-foreground">
                <tr>{["Product", "Interest Rate", "Processing Fee", "Foreclosure"].map((h) => <th key={h} className="text-left p-4 font-semibold">{h}</th>)}</tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]} className="border-t border-border/40">
                    {r.map((c, i) => <td key={i} className={`p-4 ${i === 0 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="clay-surface overflow-hidden">
          <div className="h-[3px] bg-gradient-to-r from-accent to-[hsl(var(--color-coral))]" />
          <div className="p-6 md:p-8">
            <h2 className="font-display text-lg md:text-xl font-bold text-foreground mb-4">Other Charges</h2>
            <div className="divide-y divide-border/40">
              {charges.map((c) => (
                <div key={c[0]} className="flex justify-between py-3 text-xs md:text-sm">
                  <span className="text-muted-foreground">{c[0]}</span>
                  <span className="font-semibold text-foreground">{c[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);
export default InterestRatesAndCharges;
