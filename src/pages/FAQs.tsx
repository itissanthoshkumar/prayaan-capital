import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageSquare, Link as LinkIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const groups = [
  {
    id: "about",
    title: "About Prayaan Capital",
    emoji: "🏦",
    items: [
      { q: "Who is Prayaan Capital?", a: "Prayaan Capital is an RBI-registered NBFC focused on AI-powered mortgage and housing loans for property owners across India, with a focus on Tier 3–6 cities." },
      { q: "Are you regulated by the RBI?", a: "Yes. Prayaan Capital is registered as an NBFC under the Reserve Bank of India. Our certificate of registration is publicly disclosed under RBI Disclosures." },
    ],
  },
  {
    id: "loans",
    title: "Loans & Eligibility",
    emoji: "🏠",
    items: [
      { q: "What loan amounts can I get?", a: "We offer Loan Against Property and housing loans from ₹10L to ₹1Cr, depending on the property value and your repayment capacity." },
      { q: "Do I need to mortgage my property?", a: "Yes — our loans are secured against your property. This is what allows us to offer you lower interest rates starting from 12% p.a." },
      { q: "What is the minimum CIBIL score?", a: "We look beyond CIBIL. Our AI model evaluates property value, bank flow, and repayment history — a score of 680+ improves your pricing." },
      { q: "What types of property are accepted?", a: "Residential, commercial and industrial properties with clear, marketable title. The property should be self-occupied or rented and registered in your name." },
    ],
  },
  {
    id: "application",
    title: "Application & Disbursal",
    emoji: "⚡",
    items: [
      { q: "How long does approval take?", a: "Most decisions are issued within 24–48 hours of complete documentation. Property verification adds 1–2 days." },
      { q: "Do I need to visit a branch?", a: "No. Everything — application, document upload, and signing — is done digitally. Our field team visits you for property verification." },
      { q: "Where are funds disbursed?", a: "Directly to your registered bank account within 2 working days of signing the loan agreement." },
    ],
  },
  {
    id: "repayment",
    title: "Repayment & Charges",
    emoji: "📋",
    items: [
      { q: "Are there foreclosure charges?", a: "Foreclosure is free after 6 months. Earlier closures attract up to 4% on outstanding principal." },
      { q: "Can I prepay partially?", a: "Yes — one part-payment per quarter is free of charge." },
      { q: "Are there any hidden fees?", a: "No. We follow full rate-card transparency under the RBI Fair Practice Code. All charges are listed in your sanction letter before you sign." },
    ],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const FAQs = () => {
  const [active, setActive] = useState("about");
  const current = groups.find((g) => g.id === active) ?? groups[0];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                  <HelpCircle size={12} /> FAQs
                </span>
                <h1 className="font-display text-3xl md:text-6xl font-extrabold text-foreground mt-3 mb-4 leading-tight">
                  Frequently Asked <span className="text-gradient-coral">Questions</span>
                </h1>
                <p className="text-sm md:text-lg text-muted-foreground max-w-lg">
                  Everything you need to know about our mortgage and housing loans — answered honestly.
                </p>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-3 mt-8"
              >
                {[
                  { num: `${groups.reduce((a, g) => a + g.items.length, 0)} answers`, label: "across", tint: "bg-gradient-coral" },
                  { num: `${groups.length} topics`, label: "organised by", tint: "bg-gradient-mint" },
                  { num: "< 2 min", label: "average read", tint: "bg-gradient-lavender" },
                ].map(({ num, label, tint }) => (
                  <div key={num} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-card shadow-clay-sm">
                    <span className={`w-2 h-2 rounded-full ${tint}`} />
                    <span className="font-body text-xs text-muted-foreground">{label}</span>
                    <span className="font-display text-sm font-bold text-foreground">{num}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <HeroIllustration variant="faq" />
          </div>
        </div>
      </section>

      {/* FAQ body — category tabs + accordion */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-5 max-w-5xl">

          {/* Category tab chips */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2.5 mb-10"
          >
            {groups.map((g) => (
              <motion.button
                key={g.id}
                variants={fadeUp}
                onClick={() => setActive(g.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-body text-sm font-semibold transition-all shadow-clay-sm ${
                  active === g.id
                    ? "bg-gradient-coral text-white shadow-clay"
                    : "bg-card text-foreground hover:shadow-clay"
                }`}
              >
                <span>{g.emoji}</span>
                {g.title}
                <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded-full ${
                  active === g.id ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {g.items.length}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active category accordion */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{current.emoji}</span>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">{current.title}</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {current.items.map((it, i) => (
                <AccordionItem
                  key={i}
                  value={`${active}-${i}`}
                  className="clay-surface px-5 border-0 overflow-hidden"
                >
                  <AccordionTrigger className="text-sm md:text-base font-semibold text-foreground text-left py-5 hover:no-underline">
                    {it.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-5">
                    {it.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Didn't find your answer? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mt-12 clay-surface p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-coral shadow-clay flex items-center justify-center shrink-0">
              <MessageSquare size={24} className="text-white" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="font-display text-lg font-bold text-foreground mb-1">Didn't find your answer?</p>
              <p className="font-body text-sm text-muted-foreground">Our team responds within one business day. Or call us for a faster answer.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="default" asChild>
                <Link to="/contact"><LinkIcon size={14} /> Write to us</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+916380589898"><Phone size={14} /> Call us</a>
              </Button>
            </div>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
