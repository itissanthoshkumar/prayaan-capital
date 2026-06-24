import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion } from "framer-motion";
import { Fragment } from "react";
import {
  Users, MapPin, HeartHandshake, FileCheck, RefreshCw,
  ShieldCheck, BadgeDollarSign, Brain, Info, CheckCircle2, Check, X, Scale,
  Landmark, Banknote, Sparkles,
} from "lucide-react";

const compCols = [
  { name: "Prayaan Capital", sub: "That's us", icon: ShieldCheck, highlight: true },
  { name: "Traditional Banks", sub: "Slow & selective", icon: Landmark, highlight: false },
  { name: "Informal Lenders", sub: "Costly & risky", icon: Banknote, highlight: false },
];

const comparison = {
  rows: [
    { feature: "Credit decision in 48 hours", values: [true, false, true] },
    { feature: "Serves thin-file & underserved borrowers", values: [true, false, true] },
    { feature: "Transparent, regulated pricing", values: [true, true, false] },
    { feature: "Doorstep service in local language", values: [true, false, true] },
    { feature: "Dedicated relationship manager", values: [true, false, false] },
    { feature: "RBI-regulated & fair recovery", values: [true, true, false] },
  ],
};

const approach = [
  {
    icon: Users,
    title: "Property-Owner First",
    desc: "Deep expertise with homeowners, shopkeepers and small business owners who are underserved by mainstream banks.",
    tint: "bg-gradient-coral",
  },
  {
    icon: MapPin,
    title: "Ground-Level Presence",
    desc: "On-ground expertise across Tamil Nadu, Andhra Pradesh and Telangana with branch-led origination and servicing.",
    tint: "bg-gradient-mint",
  },
  {
    icon: HeartHandshake,
    title: "Relationship-First",
    desc: "Dedicated relationship managers from sourcing through repayment — not call-centre handoffs or distant processing.",
    tint: "bg-gradient-lavender",
  },
];

const capabilities = [
  {
    icon: Brain,
    title: "AI-Powered Decisions",
    desc: "Tech-enabled underwriting combining property value, bureau and banking data for fast, fair credit decisions in 48 hours.",
    tint: "bg-gradient-sunset",
  },
  {
    icon: FileCheck,
    title: "Minimal Paperwork",
    desc: "Digital-first KYC and document collection with branch assistance where needed — minimal friction, maximum transparency.",
    tint: "bg-gradient-coral",
  },
  {
    icon: BadgeDollarSign,
    title: "Reasonable Cost",
    desc: "Risk-based pricing that reflects collateral and cashflow — not blanket high-cost rates that prey on desperation.",
    tint: "bg-gradient-mint",
  },
];

const commitment = [
  {
    icon: RefreshCw,
    title: "Long-Term Partnerships",
    desc: "We invest in long-term customer relationships and repeat business, not transactional one-off lending.",
    tint: "bg-gradient-lavender",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Regulated",
    desc: "RBI-registered, well-capitalised NBFC with transparent disclosures, published Fair Practice Code, and rigorous compliance.",
    tint: "bg-gradient-sunset",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const SectionCard = ({ item, index }: { item: typeof approach[0]; index: number }) => (
  <motion.div
    variants={cardAnim}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="group relative clay-surface p-8 md:p-10 clay-press"
  >
    <div className="flex items-start gap-4">
      <div className={`w-14 h-14 rounded-2xl ${item.tint} shadow-clay-sm flex items-center justify-center shrink-0`}>
        <item.icon size={24} className="text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2.5">{item.title}</h3>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
      </div>
    </div>
  </motion.div>
);

const WhyPrayaan = () => {
  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                <Info size={12} /> About Prayaan
              </span>
              <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
                Built for the <span className="text-gradient-coral">borrowers banks overlook</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
                We combine deep local understanding with AI-led underwriting to help small business owners unlock
                the value of the property they already own — fairly, transparently, and fast.
              </p>

              {/* Problem-Solution callout */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="space-y-3 max-w-xl"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground"><span className="font-semibold">The problem:</span> Over 8.76 Cr MSMEs on Udyam, yet fewer than 1 in 5 access formal credit.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground"><span className="font-semibold">Our answer:</span> property-backed loans that respect collateral and cashflow.</span>
                </div>
              </motion.div>
            </motion.div>

            <HeroIllustration variant="why" />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Brain size={12} /> How We Work
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Our Approach</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">We understand what mainstream banks miss — the value of local relationships and on-ground expertise.</p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {approach.map((item, i) => (
              <SectionCard key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-accent-foreground uppercase tracking-[0.12em] font-body mb-4">
              <Sparkles size={12} /> What We Offer
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Our Capabilities</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">Technology that moves fast. Processes that respect your time. Pricing that's fair to you.</p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {capabilities.map((item, i) => (
              <SectionCard key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <ShieldCheck size={12} /> Our Promise
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Our Commitment</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">We're not here for a transaction. We're here for a partnership.</p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 max-w-3xl"
          >
            {commitment.map((item, i) => (
              <SectionCard key={item.title} item={item} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* How we compare */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-accent-foreground uppercase tracking-[0.12em] font-body mb-4">
              <Scale size={12} /> How We Compare
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">The fair middle ground</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">Banks are too slow for the underserved. Informal lenders are too costly and unregulated. We bring the best of both — fast and fair.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto -mx-4 px-4 pb-2"
          >
            <div className="relative min-w-[660px] max-w-4xl mx-auto">
              <div
                className="grid grid-cols-[1.7fr_1fr_1fr_1fr] clay-surface px-3 md:px-6 py-3 md:py-4"
                style={{ gridTemplateRows: `auto repeat(${comparison.rows.length}, auto)` }}
              >
                {/* Elevated highlight behind the Prayaan column */}
                <div style={{ gridColumn: 2, gridRow: "1 / -1" }} className="-my-3 md:-my-4 rounded-3xl bg-gradient-to-b from-[hsl(var(--primary)/0.12)] to-[hsl(var(--primary)/0.02)] ring-1 ring-primary/25 shadow-clay z-0" />

                {/* Header row */}
                <div style={{ gridColumn: 1, gridRow: 1 }} className="relative z-10" />
                {compCols.map((c, i) => (
                  <div key={c.name} style={{ gridColumn: 2 + i, gridRow: 1 }} className="relative z-10 flex flex-col items-center text-center gap-2 px-1 pt-4 md:pt-5 pb-5">
                    <span className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center shadow-clay-sm ${c.highlight ? "bg-gradient-coral" : "bg-card"}`}>
                      <c.icon size={18} className={c.highlight ? "text-white" : "text-muted-foreground"} />
                    </span>
                    <span className={`font-display text-xs md:text-sm font-bold ${c.highlight ? "text-primary" : "text-foreground"}`}>{c.name}</span>
                    <span className="font-body text-[9px] md:text-[10px] uppercase tracking-wider text-muted-foreground/70">{c.sub}</span>
                  </div>
                ))}

                {/* Feature rows */}
                {comparison.rows.map((row, ri) => (
                  <Fragment key={row.feature}>
                    <div style={{ gridColumn: 1, gridRow: ri + 2 }} className="relative z-10 flex items-center font-body text-xs md:text-sm font-medium text-foreground py-3.5 md:py-4 pr-3 border-t border-border/50">
                      {row.feature}
                    </div>
                    {row.values.map((v, ci) => (
                      <div key={ci} style={{ gridColumn: 2 + ci, gridRow: ri + 2 }} className="relative z-10 flex items-center justify-center py-3.5 md:py-4 border-t border-border/50">
                        {v ? (
                          <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-mint shadow-sm">
                            <Check size={14} className="text-white" strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 rounded-full bg-muted">
                            <X size={13} className="text-muted-foreground/45" strokeWidth={3} />
                          </span>
                        )}
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Takeaway */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center text-sm md:text-base text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            <span className="font-semibold text-foreground">The result:</span> bank-grade trust and regulation, with the speed, reach and empathy of a local lender.
          </motion.p>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-12 md:py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {[
              { stat: "RBI Registered", desc: "NBFC-ICC since June 2019", icon: "✓" },
              { stat: "1,000+", desc: "families funded", icon: "👥" },
              { stat: "₹50 Cr+", desc: "in disbursals", icon: "💰" },
            ].map((s, i) => (
              <motion.div
                key={s.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clay-surface p-6 md:p-7 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient-coral mb-2">{s.stat}</p>
                <p className="text-sm md:text-base text-foreground font-semibold">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default WhyPrayaan;
