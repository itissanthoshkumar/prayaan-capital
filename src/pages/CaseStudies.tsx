import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* Counts up from 0 to `to` the first time it scrolls into view */
const CountUp = ({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{prefix}{val.toLocaleString("en-IN")}{suffix}</span>;
};

const impact = [
  { to: 1000, prefix: "", suffix: "+", label: "Businesses funded" },
  { to: 100, prefix: "₹", suffix: " Cr+", label: "Disbursed" },
  { to: 3, prefix: "", suffix: "", label: "States served", sub: "TN · AP · Telangana" },
];

const cases = [
  { name: "Lakshmi Stores", city: "Salem, TN", loan: "₹18L Loan Against Property", result: "Expanded to a second provisions store" },
  { name: "Senthil Textiles", city: "Tiruppur, TN", loan: "₹35L Working Capital", result: "Funded a peak-season export order" },
  { name: "Ravi Auto Works", city: "Coimbatore, TN", loan: "₹22L Machinery Finance", result: "Added a new lathe and two jobs" },
  { name: "Anitha Foods", city: "Vijayawada, AP", loan: "₹12L MSME Loan", result: "Scaled her packaged-snacks unit" },
  { name: "GK Traders", city: "Warangal, TG", loan: "₹28L Balance Transfer & Top-up", result: "Cut interest cost, freed up cash flow" },
];

const CaseStudies = () => (
  <Layout>
    <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <div>
        <AIBadge label="Case Studies" />
        <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-4 mb-3">Businesses we helped grow</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">Real entrepreneurs across South India who unlocked capital with Prayaan Capital.</p>
          </div>
          <HeroIllustration variant="stories" />
        </div>
      </div>
    </section>

    {/* Aggregate impact counter band */}
    <section className="py-10 md:py-14 bg-section">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="clay-surface max-w-4xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x divide-border/50"
        >
          {impact.map((s) => (
            <div key={s.label} className="text-center px-4">
              <p className="font-display text-4xl md:text-5xl font-extrabold text-gradient-coral leading-none">
                <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </p>
              <p className="font-body text-sm md:text-base font-semibold text-foreground mt-3">{s.label}</p>
              {s.sub && <p className="font-body text-xs text-muted-foreground mt-1">{s.sub}</p>}
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-5 max-w-5xl space-y-5">
        {cases.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="clay-surface p-6 md:p-8 relative grid md:grid-cols-3 gap-4">
            <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${i % 2 === 0 ? "from-primary to-accent" : "from-accent to-[hsl(var(--color-lavender))]"} opacity-40 rounded-full`} />
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Business</p><p className="font-display font-bold text-foreground">{c.name}</p><p className="text-xs text-muted-foreground mt-1">{c.city}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Loan</p><p className="font-mono font-semibold text-primary">{c.loan}</p></div>
            <div><p className="text-xs uppercase tracking-wider text-muted-foreground">Outcome</p><p className="text-sm text-foreground">{c.result}</p></div>
          </motion.div>
        ))}
        <p className="text-center text-xs text-muted-foreground pt-4">Illustrative examples representative of typical Prayaan Capital customers.</p>
      </div>
    </section>
  </Layout>
);
export default CaseStudies;
