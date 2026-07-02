import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import CTASection from "@/components/CTASection";
import AIFloatingElements from "@/components/AIFloatingElements";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Info, Check, X, ArrowRight, TrendingUp, Home, Sparkles,
  ShieldAlert, Search, MapPin, Lightbulb, Banknote, Clock,
  FileWarning, WifiOff, CalendarX, HelpCircle, Repeat, Percent,
  Handshake, Eye, Cpu, Receipt,
} from "lucide-react";

/* ── Colour rotation for icon cards — coral / blue / teal / gold, all already
   used elsewhere in the design system (error-red, accent, shadow-clay-accent,
   primary). Cycling them across each 4-up grid keeps every row varied. ── */
const TONES = [
  { bg: "bg-[hsl(8_75%_55%/0.14)]", icon: "text-[hsl(8_72%_48%)]" },
  { bg: "bg-accent/12", icon: "text-accent" },
  { bg: "bg-[hsl(165_55%_45%/0.16)]", icon: "text-[hsl(165_55%_28%)]" },
  { bg: "bg-primary/14", icon: "text-primary" },
];

/* ── Section 4: Why the gap persists ── */
const gapReasons = [
  { icon: ShieldAlert, title: "Perceived high risk, high cost to serve", desc: "High risk perception plus the cost of serving these customers physically limits who lenders can reach.", highlight: false },
  { icon: Search, title: "Hard to underwrite", desc: "Thin or no credit-bureau history and little formal income documentation make them hard to assess.", highlight: false },
  { icon: MapPin, title: "Reach is physical, people-heavy", desc: "Branches, field visits, manual underwriting and collection — slow and costly by design.", highlight: false },
  { icon: Lightbulb, title: "The way forward is technology", desc: "Analysts point to alternative data and technology to underwrite and streamline — so efficiency can reach the borrower.", highlight: true },
];

/* ── Section 5: What's broken ── */
const broken = [
  { icon: Percent, title: "A higher rate than it should be", desc: "Serving you the old, physical, people-heavy way is genuinely expensive — and that cost ends up inside the rate." },
  { icon: Clock, title: "Slow, uncertain decisions", desc: "You wait and wait — never sure whether the answer will even be yes." },
  { icon: FileWarning, title: "An opaque, tiring process", desc: "Unclear terms, repeated branch visits, long waits that wear you down." },
  { icon: WifiOff, title: "Technology that never reaches you", desc: "Even where lenders have it, the benefit stays with them — never with you." },
];

/* ── Section 6: What it costs you ── */
const costs = [
  { icon: CalendarX, title: "Working days you can't get back", desc: "Trips to the branch, hours in queues, time pulled away from running the business." },
  { icon: HelpCircle, title: "The weight of not knowing", desc: "The decision drags on with no clear yes or no, so the next move can't be planned." },
  { icon: Repeat, title: "Trip after trip, form after form", desc: "The same documents, the same questions, the same waiting — over and over." },
  { icon: Percent, title: "A rate built on the old way of serving you", desc: "Serving you the slow, physical way is genuinely expensive — and that cost lands in the rate you pay." },
];

/* ── Section 7: The Prayaan answer — every problem, fixed one for one ── */
const prayaanAnswer = [
  { usual: "A higher rate than it should be", prayaan: "A fair, sustainable rate", prayaanDesc: "We don't make you carry the cost of a slow, physical model." },
  { usual: "Slow, uncertain decisions", prayaan: "A fast, credible decision", prayaanDesc: "A clear answer in days, not weeks." },
  { usual: "An opaque, tiring process", prayaan: "Low friction, low pain", prayaanDesc: "Minimal visits, transparent terms, no surprises." },
  { usual: "Technology that never reaches you", prayaan: "Technology built for you", prayaanDesc: "AI-native efficiency flows back to the borrower." },
];

/* ── Section 8: What this means for you ── */
const commitments = [
  { icon: Banknote, title: "A rate that fits", desc: "Priced on the business you run and its cashflow — with our efficiency passed back to you." },
  { icon: Handshake, title: "A word we keep", desc: "A yes we deliver and you can plan around — and an honest no, fast." },
  { icon: Eye, title: "Transparent terms", desc: "Plain language, minimal visits, nothing buried — you always know where you stand." },
  { icon: Cpu, title: "Technology that respects you", desc: "Tech does the heavy lifting, so you borrow with confidence, ease and dignity." },
];

/* ── Animated count-up for hero numbers — plays once, when scrolled into view ── */
function CountUp({ target, prefix = "", suffix = "", decimals = 0, duration = 1.3 }: { target: number; prefix?: string; suffix?: string; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{val.toFixed(decimals)}{suffix}
    </span>
  );
}

/* ── Reusable animated stat card ── */
function StatCard({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`clay-surface p-6 md:p-7 transition-shadow hover:shadow-clay-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ── Reusable animated icon-card row (4-up grid) — tone cycles by position,
   titleGold reserved for the one item the source deck explicitly emphasises. ── */
function IconCard({ icon: Icon, title, desc, delay = 0, toneIndex = 0, titleGold = false }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; desc: string; delay?: number; toneIndex?: number; titleGold?: boolean }) {
  const tone = TONES[toneIndex % TONES.length];
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className="clay-surface p-6 transition-shadow hover:shadow-clay-lg"
    >
      <motion.span
        initial={{ scale: 0.5, opacity: 0, rotate: -8 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ delay: delay + 0.12, type: "spring", stiffness: 260, damping: 16 }}
        className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-clay-sm mb-4 ${tone.bg}`}
      >
        <Icon size={19} className={tone.icon} />
      </motion.span>
      <h3 className={`font-display text-sm md:text-base font-bold mb-1.5 leading-snug ${titleGold ? "text-primary" : "text-foreground"}`}>{title}</h3>
      <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ── "Hidden invoice" receipt card — a themed alternative to the 4-up grid for
   "What it costs you": these costs never appear on a real invoice, so we render
   them as one, dashed dividers and all, to make that point visually. ── */
function CostReceipt() {
  const vp = { once: true, amount: 0.25 } as const;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -1.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: -0.8 }}
      viewport={vp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0 }}
      className="max-w-xl mx-auto bg-card rounded-3xl shadow-clay-lg p-6 md:p-9"
    >
      <div className="flex items-center justify-between pb-4 mb-1 border-b-2 border-dashed border-border">
        <span className="inline-flex items-center gap-2 font-display text-xs md:text-sm font-bold uppercase tracking-wider text-foreground">
          <Receipt size={16} className="text-primary" /> The Hidden Invoice
        </span>
        <span className="text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">Never itemised</span>
      </div>

      {costs.map((c, i) => {
        const tone = TONES[i % TONES.length];
        return (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ delay: i * 0.12, duration: 0.45, ease: "easeOut" }}
            className={`flex items-start gap-3.5 md:gap-4 py-4 md:py-5 ${i < costs.length - 1 ? "border-b border-dashed border-border/70" : ""}`}
          >
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={vp}
              transition={{ delay: i * 0.12 + 0.1, type: "spring", stiffness: 280, damping: 16 }}
              className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 ${tone.bg}`}
            >
              <c.icon size={17} className={tone.icon} />
            </motion.span>
            <div className="min-w-0">
              <h3 className="font-display text-sm md:text-base font-bold text-foreground leading-snug">{c.title}</h3>
              <p className="font-body text-xs md:text-sm text-muted-foreground leading-relaxed mt-0.5">{c.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* ── Soft ambient colour blobs behind a section — adds a bit of colour to
   otherwise flat backgrounds without competing with the foreground content. ── */
function ColorBlobs({ variant = "blueGold" }: { variant?: "blueGold" | "coralTeal" }) {
  const [c1, c2] = variant === "blueGold"
    ? ["hsl(208,100%,31%)", "hsl(42,100%,47%)"]
    : ["hsl(8,75%,55%)", "hsl(165,55%,45%)"];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div className="absolute -top-24 -left-16 w-[380px] h-[380px] rounded-full opacity-[0.09] blur-[100px]" style={{ background: c1 }} />
      <div className="absolute -bottom-24 -right-16 w-[380px] h-[380px] rounded-full opacity-[0.09] blur-[100px]" style={{ background: c2 }} />
    </div>
  );
}

/* ── Section eyebrow badge ── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4"
    >
      <Sparkles size={12} /> {children}
    </motion.span>
  );
}

/* Hero visual: the broken experience (slow / opaque) transforming into the
   Prayaan experience (fast / clear). Vertical stack, no overlap — clay family. */
function WhyHeroArt() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="hidden lg:block relative h-[360px] w-full max-w-[330px] mx-auto"
      aria-hidden
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 330 360" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M165 150 L 165 214"
          stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 9"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

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

      <div className="absolute bottom-0 left-1/2 w-[290px]" style={{ transform: "translateX(-50%) rotate(1.5deg)" }}>
        <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="relative rounded-3xl bg-card shadow-clay-lg p-4" style={{ outline: "2px solid hsl(var(--accent) / 0.18)", outlineOffset: "-2px" }}>
          <span className="absolute -top-2.5 right-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-white shadow-clay-sm" style={{ background: "hsl(var(--accent))" }}>
            <Check size={10} /> Prayaan
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

      <div className="absolute left-1/2 top-1/2 z-20" style={{ transform: "translate(-50%, -50%)" }}>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }} className="drop-shadow-xl">
          <div className="w-14 h-14 rounded-[1.3rem] border-4 border-white flex items-center justify-center bg-gradient-coral">
            <Sparkles size={22} className="text-white" />
          </div>
        </motion.div>
      </div>

      <motion.span className="absolute right-1 top-3 w-3 h-3 rounded-full bg-gradient-coral" animate={{ y: [0, -9, 0], opacity: [0.7, 1, 0.7] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
      <motion.span className="absolute left-2 bottom-4 w-2.5 h-2.5 rounded-full" style={{ background: "hsl(var(--accent))" }} animate={{ y: [0, -7, 0], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
    </motion.div>
  );
}

/* Auto-animated (no interaction): as the section scrolls in, each row plays a
   "broken → fixed" transition — the usual-way problem is struck through and the
   Prayaan fix reveals with a check that pops in on a spring. */
function PrayaanAnswer() {
  const vp = { once: true, amount: 0.5 } as const;
  return (
    <div className="max-w-2xl mx-auto">
      {/* Column legend, mirrors the source deck's before/after framing */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        className="flex items-center justify-between mb-5 px-0.5"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-muted text-[11px] font-bold uppercase tracking-wider text-muted-foreground font-body">
          <X size={11} strokeWidth={3} /> The usual way
        </span>
        <motion.span
          animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary)/0.35)", "0 0 0 5px hsl(var(--primary)/0)", "0 0 0 0 hsl(var(--primary)/0.35)"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white font-body shadow-clay-sm"
          style={{ background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))" }}
        >
          <Sparkles size={11} /> The Prayaan way
        </motion.span>
      </motion.div>

      <div className="space-y-4">
        {prayaanAnswer.map((row, i) => {
          const d = i * 0.18;
          return (
            <motion.div
              key={row.prayaan}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ delay: d, duration: 0.4, ease: "easeOut" }}
              whileHover={{ y: -3 }}
              className="clay-surface p-5 md:p-6 transition-shadow hover:shadow-clay-lg"
            >
              <div className="flex items-center gap-2 mb-3 opacity-70">
                <span className="w-5 h-5 rounded-lg flex items-center justify-center shrink-0" style={{ background: "hsl(8 75% 55% / 0.12)" }}>
                  <X size={11} className="text-[hsl(8_72%_48%)]" strokeWidth={2.5} />
                </span>
                <span className="relative inline-block font-body text-xs font-medium text-muted-foreground">
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
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp}
                  transition={{ delay: d + 0.55, duration: 0.3 }}
                  className="text-primary/70"
                >
                  <ArrowRight size={12} />
                </motion.span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={vp}
                transition={{ delay: d + 0.6, duration: 0.45, ease: "easeOut" }}
                className="relative flex items-start gap-3 rounded-2xl p-4 md:p-4.5 overflow-hidden"
                style={{ background: "linear-gradient(135deg, hsl(var(--primary)/0.14), hsl(var(--accent)/0.08))" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary)/0.32)", "0 0 0 5px hsl(var(--primary)/0)", "0 0 0 0 hsl(var(--primary)/0.32)"] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: d + 1.1 }}
                />
                <motion.span
                  className="relative z-10 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 shadow-clay-sm"
                  style={{ background: "hsl(var(--accent))" }}
                  initial={{ scale: 0.3, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={vp}
                  transition={{ delay: d + 0.65, type: "spring", stiffness: 340, damping: 16 }}
                >
                  <Check size={16} className="text-white" strokeWidth={3} />
                </motion.span>
                <div className="relative z-10 min-w-0">
                  <h3 className="font-display text-base md:text-lg font-bold text-foreground leading-tight">{row.prayaan}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-0.5">{row.prayaanDesc}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const WhyPrayaan = () => {
  return (
    <Layout>
      <Seo title="Why Prayaan" description="The credit isn't the problem — everything around it is. See why Prayaan Capital is rebuilding secured business lending to be fast, fair and transparent." path="/why-prayaan" />
      {/* ═══ 1. HERO — "Why Prayaan" ═══ */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                <Info size={12} /> Why Prayaan
              </span>
              <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
                The credit isn't the problem. <span className="text-gradient-coral">Everything around it is.</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mb-7">
                Borrowers who already qualify for formal credit still pay more than they should, wait longer than
                they can afford, and rarely know where they stand. We're rebuilding that experience from the ground up.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0a800] px-7 py-3.5 text-sm font-bold text-[#0d2137] shadow-[0_0_28px_rgba(240,168,0,0.35)] hover:shadow-[0_0_44px_rgba(240,168,0,0.55)] hover:bg-[#fbb500] transition-all font-body">
                  Talk to our team <ArrowRight size={15} />
                </Link>
                <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-6 py-3.5 text-sm font-bold text-foreground shadow-clay-sm hover:bg-secondary transition font-body">
                  Explore our loans
                </Link>
              </div>
            </motion.div>

            <WhyHeroArt />
          </div>
        </div>
      </section>

      {/* ═══ 2. THE OPPORTUNITY ═══ */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10 md:mb-14">
            <Eyebrow>The Opportunity</Eyebrow>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">
              India's informal business households
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
              Bankable, ambitious — and still unbanked.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl">
            <StatCard>
              <div className="flex items-baseline gap-2 flex-wrap mb-3">
                <span className="font-display text-5xl md:text-6xl font-extrabold leading-none text-gradient-coral">
                  <CountUp target={22} prefix="~₹" />
                </span>
                <span className="font-display text-base md:text-lg font-bold text-foreground">lakh crore <span className="text-muted-foreground font-medium">(~₹22 trillion)</span></span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">Addressable market for secured small-business loans against a self-occupied home, at small ticket sizes.</p>
            </StatCard>
            <StatCard delay={0.1}>
              <div className="flex items-baseline gap-2 flex-wrap mb-3">
                <span className="font-display text-5xl md:text-6xl font-extrabold leading-none text-accent">
                  <CountUp target={44} prefix="~" />
                </span>
                <span className="font-display text-base md:text-lg font-bold text-foreground">million households</span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">Self-employed households that own such a home — the foundation of this market.</p>
            </StatCard>
          </div>
          <p className="text-[10px] text-muted-foreground/70 font-body mt-4">Industry data: CRISIL (MSME / small-business-loan industry reports, FY21–FY24).</p>
        </div>
      </section>

      {/* ═══ 3. UNDERSERVED ═══ */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10 md:mb-14">
            <Eyebrow>Underserved</Eyebrow>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">
              A large market still goes <span className="text-gradient-coral">unfunded</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
              Most of these businesses still can't get formal credit or are severely under-fulfilled.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            <StatCard>
              <p className="font-display text-4xl md:text-5xl font-extrabold leading-none mb-4 text-gradient-coral">
                &lt;<CountUp target={15} suffix="%" />
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">of India's ~70 million MSMEs access formal credit of any kind.</p>
            </StatCard>
            <StatCard delay={0.08}>
              <p className="font-display text-4xl md:text-5xl font-extrabold leading-none mb-4 text-accent">
                <CountUp target={7} prefix="~" suffix="%" />
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">of the smaller businesses' financing needs are met from formal sources.</p>
            </StatCard>
            <StatCard delay={0.16}>
              <p className="font-display text-4xl md:text-5xl font-extrabold leading-none mb-4 text-[hsl(165_55%_32%)]">
                <CountUp target={29} prefix="~" suffix="%" />
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">the share for larger businesses — the gap widens as firms get smaller.</p>
            </StatCard>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-6 flex items-start gap-2">
            <Info size={14} className="mt-0.5 shrink-0 text-primary" />
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Formalization is accelerating</span> — Udyam registrations have crossed ~7.8 crore (MSME Ministry, early 2026).
              <span className="block mt-0.5 text-muted-foreground/75">Industry data: CRISIL (MSME / small-business-loan industry reports, FY21–FY24).</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. WHY THE GAP PERSISTS ═══ */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <ColorBlobs variant="coralTeal" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10 md:mb-14">
            <Eyebrow>Why The Gap Persists</Eyebrow>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">
              Why incumbents overlook this market
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
              It isn't a lack of demand — the old, physical model simply can't reach them affordably.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {gapReasons.map((r, i) => (
              <IconCard key={r.title} icon={r.icon} title={r.title} desc={r.desc} delay={i * 0.1} toneIndex={i} titleGold={r.highlight} />
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground/70 font-body mt-6">Industry data: CRISIL (MSME / small-business-loan industry reports, FY21–FY24).</p>
        </div>
      </section>

      {/* ═══ 5. WHAT'S BROKEN ═══ */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10 md:mb-14">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">What's broken</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
              The credit comes wrapped in an experience that works against you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {broken.map((b, i) => (
              <IconCard key={b.title} icon={b.icon} title={b.title} desc={b.desc} delay={i * 0.1} toneIndex={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6. WHAT IT COSTS YOU ═══ */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <ColorBlobs variant="blueGold" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">What it costs you</h2>
            <p className="text-muted-foreground mt-3 text-sm md:text-base leading-relaxed">
              None of this appears on the loan agreement. But the borrower pays for all of it — in time, in stress, and in money he never gets back.
            </p>
          </motion.div>

          <CostReceipt />
        </div>
      </section>

      {/* ═══ 7. THE PRAYAAN ANSWER ═══ */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-8 md:mb-12">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">The Prayaan answer</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
              Every problem above, fixed one for one.
            </p>
          </motion.div>

          <PrayaanAnswer />
        </div>
      </section>

      {/* ═══ 8. WHAT THIS MEANS FOR YOU ═══ */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10 md:mb-14">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight">What this means for you</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
              Four plain commitments — what you can expect from us, every time.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {commitments.map((c, i) => (
              <IconCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} delay={i * 0.1} toneIndex={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. OUR PROMISE ═══ */}
      <section className="py-20 md:py-28 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <ColorBlobs variant="blueGold" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <Eyebrow>Our Promise</Eyebrow>
            <motion.h2
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-6xl font-bold text-foreground"
            >
              Fast. Fair. <span className="text-gradient-coral">Clear.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed"
            >
              A credible answer in days — not weeks of waiting and wondering.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="font-display text-lg md:text-2xl font-bold text-foreground mt-3 leading-snug"
            >
              And a rate that never punishes you for being <span className="text-gradient-coral">underserved</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="text-sm text-muted-foreground mt-6 font-body"
            >
              High-quality, AI-native lending — built for India's MSMEs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default WhyPrayaan;
