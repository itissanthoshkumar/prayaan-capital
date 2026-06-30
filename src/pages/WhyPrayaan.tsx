import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import AIFloatingElements from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Info, Check, X, Scale, Landmark, Banknote, TrendingUp, Home, Clock, Eye, Cpu, Sparkles, ArrowRight } from "lucide-react";

const compCols = [
  { name: "Prayaan Capital", sub: "Fast & fair", icon: ShieldCheck, highlight: true },
  { name: "Traditional Banks", sub: "Too slow & rigid", icon: Landmark, highlight: false },
  { name: "Informal Lenders", sub: "Unfair & expensive", icon: Banknote, highlight: false },
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

// The experience reframe: the credit itself was rarely the problem — the way it
// was delivered was. Each broken-experience item, fixed one for one.
const prayaanAnswer = [
  { icon: Banknote, usual: "A higher rate than it should be", usualDesc: "You carry the cost of a slow, physical model.", prayaan: "A fair, sustainable rate", prayaanDesc: "Priced to be sustainable — never punishing." },
  { icon: Clock, usual: "Slow, uncertain decisions", usualDesc: "Weeks of waiting, unsure the answer will be yes.", prayaan: "A fast, credible decision", prayaanDesc: "A clear answer in days, not weeks." },
  { icon: Sparkles, usual: "An opaque, tiring process", usualDesc: "Repeat visits, unclear terms, long waits.", prayaan: "Low friction, low pain", prayaanDesc: "Minimal visits, transparent terms, no surprises." },
  { icon: Cpu, usual: "Technology that never reaches you", usualDesc: "Even where lenders have it, the benefit stays with them.", prayaan: "Technology built for you", prayaanDesc: "AI-native efficiency that flows back to you." },
];

const promises = [
  { icon: Banknote, title: "A fair rate", desc: "Priced to be sustainable, never punishing — you're underserved, not a risk to be penalised for." },
  { icon: Clock, title: "A fast, certain answer", desc: "A clear yes or no in days. If it's a no, you hear it quickly and can move on." },
  { icon: Eye, title: "Transparent terms", desc: "Plain language, minimal visits, no surprises buried in the fine print." },
  { icon: Cpu, title: "AI-native, for you", desc: "Built efficient from the ground up — and that efficiency reaches you." },
];

// Hero visual: the broken experience (slow / opaque) transforming into the
// Prayaan experience (fast / clear). Vertical stack, no overlap — clay family.
function WhyHeroArt() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="hidden lg:block relative h-[360px] w-full max-w-[330px] mx-auto"
      aria-hidden
    >
      {/* dashed transform path in the gap */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 330 360" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M165 150 L 165 214"
          stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 9"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      {/* The usual way — slow, opaque (muted, on top) */}
      <div className="absolute top-0 left-1/2 w-[290px]" style={{ transform: "translateX(-50%) rotate(-1.5deg)" }}>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }} className="rounded-3xl bg-card shadow-clay p-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center shrink-0"><Clock size={16} className="text-muted-foreground" /></div>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground/70 font-body">The usual way</p>
                <p className="text-xs font-bold text-muted-foreground font-body">Still waiting…</p>
              </div>
            </div>
            <span className="rounded-full bg-muted px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground shrink-0">Pending</span>
          </div>
          <div className="border-t border-border/60 pt-2.5 space-y-2">
            {[
              { label: "Decision", value: "Pending" },
              { label: "Your rate", value: "Not shared" },
              { label: "Time taken", value: "Week 4 +" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 font-body">{r.label}</span>
                <span className="text-[11px] font-bold text-muted-foreground font-body">{r.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* The Prayaan way — fast, clear (prominent, bottom) */}
      <div className="absolute bottom-0 left-1/2 w-[290px]" style={{ transform: "translateX(-50%) rotate(1.5deg)" }}>
        <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="relative rounded-3xl bg-card shadow-clay-lg p-4" style={{ outline: "2px solid hsl(var(--accent) / 0.18)", outlineOffset: "-2px" }}>
          <span className="absolute -top-2.5 right-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-white shadow-clay-sm" style={{ background: "hsl(var(--accent))" }}>
            <ShieldCheck size={10} /> Prayaan
          </span>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "hsl(var(--accent) / 0.12)" }}><Check size={18} className="text-accent" strokeWidth={3} /></div>
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground font-body">The Prayaan way</p>
              <p className="text-sm font-bold text-foreground font-body">Approved in days</p>
            </div>
          </div>
          <div className="border-t pt-2.5 space-y-2" style={{ borderColor: "hsl(var(--accent) / 0.15)" }}>
            {[
              { label: "Decision", value: "Approved" },
              { label: "Your rate", value: "Fair & clear" },
              { label: "Time taken", value: "Faster" },
            ].map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground font-body">{r.label}</span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-foreground font-body">
                  <Check size={11} className="text-accent" strokeWidth={3} /> {r.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* transform badge */}
      <div className="absolute left-1/2 top-1/2 z-20" style={{ transform: "translate(-50%, -50%)" }}>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }} className="drop-shadow-xl">
          <div className="w-14 h-14 rounded-[1.3rem] border-4 border-white flex items-center justify-center bg-gradient-coral">
            <Sparkles size={22} className="text-white" />
          </div>
        </motion.div>
      </div>

      {/* mini accents */}
      <motion.span className="absolute right-1 top-3 w-3 h-3 rounded-full bg-gradient-coral" animate={{ y: [0, -9, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="absolute left-2 bottom-4 w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--accent))" }} animate={{ y: [0, -7, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
    </motion.div>
  );
}

// Auto-animated (no interaction): as the section scrolls in, each item plays a
// "broken → fixed" transition — the usual-way problem is struck through and the
// Prayaan fix reveals with a check that pops. Cascades down, then rests on the fix.
function PrayaanAnswer() {
  const vp = { once: true, amount: 0.5 } as const;
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {prayaanAnswer.map((row, i) => {
        const d = i * 0.18;
        return (
          <motion.div
            key={row.prayaan}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ delay: d, duration: 0.4, ease: "easeOut" }}
            className="clay-surface p-5 md:p-6"
          >
            {/* The usual way — struck through as it gets fixed */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: "hsl(8 75% 55% / 0.12)" }}>
                <X size={13} className="text-[hsl(8_72%_48%)]" strokeWidth={2.5} />
              </span>
              <span className="relative inline-block font-body text-sm font-medium text-muted-foreground">
                {row.usual}
                <motion.span
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full"
                  style={{ background: "hsl(var(--muted-foreground) / 0.55)" }}
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={vp}
                  transition={{ delay: d + 0.4, duration: 0.45, ease: "easeInOut" }}
                />
              </span>
            </div>

            {/* The Prayaan way — the fix reveals */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: d + 0.6, duration: 0.4, ease: "easeOut" }}
              className="flex items-start gap-2.5"
            >
              <motion.span
                className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "hsl(var(--accent) / 0.12)" }}
                initial={{ scale: 0.3, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={vp}
                transition={{ delay: d + 0.65, type: "spring", stiffness: 340, damping: 16 }}
              >
                <Check size={14} className="text-accent" strokeWidth={3} />
              </motion.span>
              <div className="min-w-0">
                <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-tight">{row.prayaan}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-0.5">{row.prayaanDesc}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

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
                The credit isn't the problem. <span className="text-gradient-coral">Everything around it is.</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
                Many small businesses already qualify for a secured loan against the property they own — yet they
                still pay more than they should, wait longer than they can afford, and rarely know where they stand.
                We're rebuilding that experience from the ground up.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0a800] px-7 py-3.5 text-sm font-bold text-[#0d2137] shadow-[0_0_28px_rgba(240,168,0,0.35)] hover:shadow-[0_0_44px_rgba(240,168,0,0.55)] hover:bg-[#fbb500] transition-all font-body">
                  Talk to our team <ArrowRight size={15} />
                </Link>
                <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-sm font-bold text-foreground shadow-clay-sm hover:bg-secondary transition font-body">
                  Explore our loans
                </Link>
              </div>

              {/* The opportunity, in two numbers */}
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: TrendingUp, value: "~₹22 lakh crore", label: "addressable secured small-business lending" },
                  { icon: Home, value: "~44 million", label: "home-owning self-employed households" },
                ].map((s) => (
                  <div key={s.value} className="flex items-center gap-3 rounded-2xl bg-card shadow-clay-sm px-4 py-3">
                    <span className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"><s.icon size={16} className="text-primary" /></span>
                    <div>
                      <p className="font-display text-base font-extrabold text-foreground leading-none">{s.value}</p>
                      <p className="font-body text-[11px] text-muted-foreground mt-1 max-w-[180px] leading-snug">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground/70 font-body mt-2">Industry data: CRISIL (MSME / small-business-loan reports, FY21–FY24).</p>
            </motion.div>

            <WhyHeroArt />
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

          {/* The gap, in numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-10"
          >
            <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
              {[
                { value: "<15%", desc: "of India's ~70 million MSMEs access formal credit of any kind.", gold: true },
                { value: "~7%", desc: "of the smaller businesses' financing needs are met from formal sources.", gold: false },
                { value: "~29%", desc: "the share for larger businesses — the gap widens as firms get smaller.", gold: false },
              ].map((s, i) => (
                <motion.div
                  key={s.value}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="clay-surface p-6 md:p-7"
                >
                  <p className={`font-display text-4xl md:text-5xl font-extrabold leading-none mb-4 ${s.gold ? "text-gradient-coral" : "text-foreground"}`}>{s.value}</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Demoted note + source */}
            <div className="mt-5 flex items-start gap-2">
              <Info size={14} className="mt-0.5 shrink-0 text-primary" />
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Formalization is accelerating</span> — Udyam registrations have crossed ~7.8 crore (MSME Ministry, early 2026).
                <span className="block mt-0.5 text-muted-foreground/75">Industry data: CRISIL (MSME / small-business-loan industry reports, FY21–FY24).</span>
              </p>
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
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">The Prayaan difference</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">We bring the best of both — the trust and regulation of a bank, with the speed and fairness of a local lender.</p>
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

      {/* The Prayaan answer — the experience, fixed one for one */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-8 md:mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Sparkles size={12} /> The Prayaan Answer
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">
              Every problem, <span className="text-gradient-coral">fixed one for one</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
              The credit itself was rarely the issue — the experience around it was. Here's what changes when you switch to Prayaan.
            </p>
          </motion.div>

          <PrayaanAnswer />
        </div>
      </section>

      {/* Our promise — Fast. Fair. Clear. */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <ShieldCheck size={12} /> Our Promise
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Fast. Fair. <span className="text-gradient-coral">Clear.</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
              Four plain commitments — what you can expect from us, every time. A credible answer in days, not weeks of
              wondering, and a rate that never punishes you for being underserved.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="clay-surface p-6 text-center sm:text-left"
              >
                <span className="w-11 h-11 rounded-2xl bg-gradient-coral flex items-center justify-center shadow-clay-sm mb-4 mx-auto sm:mx-0">
                  <p.icon size={20} className="text-white" />
                </span>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs md:text-sm text-muted-foreground font-body mt-8">
            <span className="font-semibold text-foreground">RBI-registered NBFC</span> (NBFC-ICC since June 2019) · 1,000+ families funded
          </p>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default WhyPrayaan;
