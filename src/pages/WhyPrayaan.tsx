import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { ShieldCheck, Info, Check, X, Scale, Landmark, Banknote } from "lucide-react";

const compCols = [
  { name: "Prayaan Capital", sub: "That's us", icon: ShieldCheck, highlight: true },
  { name: "Traditional Banks", sub: "Slow & selective", icon: Landmark, highlight: false },
  { name: "Informal Lenders", sub: "Costly & risky", icon: Banknote, highlight: false },
];

const comparison = {
  rows: [
    { feature: "Faster credit decisions", values: [true, false, true] },
    { feature: "Serves thin-file & underserved borrowers", values: [true, false, true] },
    { feature: "Transparent, regulated pricing", values: [true, true, false] },
    { feature: "Doorstep service in local language", values: [true, false, true] },
    { feature: "Dedicated relationship manager", values: [true, false, false] },
    { feature: "RBI-regulated & fair recovery", values: [true, true, false] },
  ],
};

const problems = [
  { title: "Thin or no formal records", desc: "Many small firms lack audited books, GST history or a credit score — so banks reject them on paper, no matter how sound the business." },
  { title: "Collateral the system overlooks", desc: "Property in smaller towns is undervalued and small-ticket loans aren't worth a big bank's time — pushing owners toward moneylenders at crushing rates." },
  { title: "Slow, distant and impersonal", desc: "Long queues, repeat branch visits and call-centre handoffs, with no one who understands the local market or the borrower." },
];

const solutions = [
  { title: "Property and cashflow, not just a score", desc: "We lend against the real value of the property you already own and how your business actually earns — not a single bureau number." },
  { title: "Local teams plus AI underwriting", desc: "On-ground people who know your market, paired with AI that assesses each case fairly and fast." },
  { title: "Fair, transparent, at your doorstep", desc: "Regulated and clearly-priced loans, delivered where you are — no hidden charges, no surprises." },
];

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
                We combine deep local understanding with AI-led underwriting to give small business owners the
                secured business loans they need to grow — fairly, transparently, and fast.
              </p>
            </motion.div>

            <HeroIllustration variant="why" />
          </div>
        </div>
      </section>

      {/* The credit gap — deep problem + how we approach it */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Scale size={12} /> The Credit Gap
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">
              The gap we <span className="text-gradient-coral">exist to close</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
              India's small businesses power the economy — yet the formal credit system still leaves most of them
              behind. This is the gap Prayaan Capital was built to close.
            </p>
          </motion.div>

          {/* Anchor stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-surface p-6 md:p-8 mb-8 md:mb-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-0 sm:divide-x divide-border/50"
          >
            <div className="text-center sm:px-6">
              <p className="font-display text-3xl md:text-4xl font-extrabold text-gradient-coral">8.76 Cr+</p>
              <p className="font-body text-sm text-muted-foreground mt-1">MSMEs registered on Udyam</p>
            </div>
            <div className="text-center sm:px-6">
              <p className="font-display text-3xl md:text-4xl font-extrabold text-gradient-coral">Under 1 in 5</p>
              <p className="font-body text-sm text-muted-foreground mt-1">can access formal credit</p>
            </div>
          </motion.div>

          {/* Problem vs approach */}
          <div className="grid lg:grid-cols-2 gap-5 md:gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="clay-surface p-6 md:p-8">
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-5">Why they're left behind</h3>
              <ul className="space-y-5">
                {problems.map((p) => (
                  <li key={p.title} className="flex gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-[hsl(8_75%_55%/0.12)] flex items-center justify-center shrink-0 mt-0.5">
                      <X size={15} className="text-[hsl(8_72%_48%)]" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-bold text-foreground mb-0.5">{p.title}</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="clay-surface p-6 md:p-8">
              <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-5">How Prayaan changes that</h3>
              <ul className="space-y-5">
                {solutions.map((s) => (
                  <li key={s.title} className="flex gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-accent/12 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={15} className="text-accent" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-bold text-foreground mb-0.5">{s.title}</h4>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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
