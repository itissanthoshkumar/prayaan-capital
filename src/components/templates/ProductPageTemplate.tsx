import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { LucideIcon, CheckCircle2, FileText, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import EMICalculator from "@/components/EMICalculator";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export interface ProductPageData {
  eyebrow: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  range: string;
  tenure: string;
  rate: string;
  highlights: { label: string; value: string }[];
  features: string[];
  eligibility: string[];
  documents: string[];
  rates: { label: string; value: string }[];
  faqs: { q: string; a: string }[];
}

const ProductPageTemplate = ({ data }: { data: ProductPageData }) => {
  const Icon = data.icon;
  return (
    <Layout>
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <AIBadge label={data.eyebrow} />
            </div>
            <div className="flex items-start gap-4 md:gap-5 mb-5">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0">
                <Icon className="text-primary" size={24} />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1]">{data.title}</h1>
                <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-xl font-body">{data.tagline}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <Link to="/eligibility"><Button className="rounded-full px-6">Apply Now <ArrowRight size={14} className="ml-1" /></Button></Link>
              <Link to="/calculators/emi"><Button variant="outline" className="rounded-full px-6">Calculate EMI</Button></Link>
            </div>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12">
            {data.highlights.map((h, i) => (
              <motion.div key={h.label} variants={itemAnim} className="bg-card/80 backdrop-blur rounded-2xl border border-border/60 p-4 md:p-5 relative overflow-hidden">
                <div className={`absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r ${i % 2 === 0 ? "from-primary to-accent" : "from-accent to-[hsl(var(--color-lavender))]"} opacity-40 rounded-full`} />
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-body mb-1">{h.label}</p>
                <p className="font-display font-bold text-base md:text-lg text-foreground">{h.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
          <motion.div variants={itemAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="clay-surface p-6 md:p-8 relative">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-primary to-accent opacity-40 rounded-full" />
            <div className="flex items-center gap-2 mb-5"><Sparkles className="text-primary" size={16} /><h2 className="font-display text-lg md:text-xl font-bold text-foreground">Key Features</h2></div>
            <ul className="space-y-3">
              {data.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground"><CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" /><span>{f}</span></li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="clay-surface p-6 md:p-8 relative">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-accent to-[hsl(var(--color-lavender))] opacity-40 rounded-full" />
            <div className="flex items-center gap-2 mb-5"><CheckCircle2 className="text-accent" size={16} /><h2 className="font-display text-lg md:text-xl font-bold text-foreground">Eligibility</h2></div>
            <ul className="space-y-3">
              {data.eligibility.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /><span>{f}</span></li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-section">
        <div className="container mx-auto px-5 grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
          <motion.div variants={itemAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="clay-surface p-6 md:p-8 relative">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[hsl(var(--color-lavender))] to-[hsl(var(--color-indigo))] opacity-40 rounded-full" />
            <div className="flex items-center gap-2 mb-5"><FileText className="text-[hsl(var(--color-lavender))]" size={16} /><h2 className="font-display text-lg md:text-xl font-bold text-foreground">Documents Needed</h2></div>
            <ul className="space-y-2.5">
              {data.documents.map((d) => (
                <li key={d} className="text-xs md:text-sm text-muted-foreground flex gap-2"><span className="text-primary">•</span>{d}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemAnim} initial="hidden" whileInView="visible" viewport={{ once: true }} className="clay-surface p-6 md:p-8 relative">
            <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-[hsl(var(--color-coral))] to-primary opacity-40 rounded-full" />
            <div className="flex items-center gap-2 mb-5"><Sparkles className="text-[hsl(var(--color-coral))]" size={16} /><h2 className="font-display text-lg md:text-xl font-bold text-foreground">Rates & Charges</h2></div>
            <div className="divide-y divide-border/50">
              {data.rates.map((r) => (
                <div key={r.label} className="flex justify-between py-2.5 text-xs md:text-sm">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-semibold text-foreground">{r.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <EMICalculator />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 max-w-3xl">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-2xl md:text-4xl font-extrabold text-foreground text-center mb-10 tracking-tight">
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-3">
            {data.faqs.map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`} className="bg-card rounded-2xl border border-border/60 px-5 shadow-card">
                <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPageTemplate;
