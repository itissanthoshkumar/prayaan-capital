import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IndianRupee, Calendar, ChevronDown, ChevronUp, TrendingDown, ArrowRight, ArrowLeftRight,
  ShieldCheck, Building2, Coins, CalendarClock, CheckCircle, RefreshCcw, Wallet, Info,
  BarChart3, Calculator, Zap,
} from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import AIFloatingElements from "@/components/AIFloatingElements";
import {
  calcBT, calcEMI, monthsElapsed, sanitizeDecimal, sanitizeInteger, parseNum,
  fmtEMI, fmtINR, fmtINRSpoken, type BTCalcResult,
} from "@/utils/btCalcEngine";

// Prayaan's offer — editable by the user (defaults shown), with a floor on the rate.
const PRAYAAN_MIN_RATE = 14;
const DEFAULT_PRAYAAN_RATE = 18;
const DEFAULT_PRAYAAN_TENURE = 84 as const; // 7 years, fresh loan
const PRAYAAN_RATE_CHIPS = [14, 16, 18, 20];
const PRAYAAN_TENURES = [60, 84, 120] as const;

// Brand-token palette: blue = Prayaan/positive, gold = value/cash, neutral = current.
const C = {
  blue: "hsl(var(--accent))",
  blueBg: "hsl(var(--accent) / 0.10)",
  blueBorder: "hsl(var(--accent) / 0.26)",
  blueGrad: "linear-gradient(135deg, hsl(var(--accent)), hsl(208 90% 45%))",
  gold: "hsl(38 100% 34%)",
  goldBg: "hsl(42 100% 50% / 0.14)",
  goldBorder: "hsl(40 100% 46% / 0.32)",
  goldGrad: "linear-gradient(135deg, hsl(42 100% 48%), hsl(38 96% 44%))",
  neutral: "hsl(var(--muted-foreground))",
  neutralBg: "hsl(var(--muted) / 0.7)",
};

const SLIDER_GOLD =
  "w-full h-2.5 rounded-full appearance-none cursor-pointer outline-none " +
  "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#cf8a00] [&::-webkit-slider-thumb]:shadow-md " +
  "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[#cf8a00] [&::-moz-range-thumb]:shadow-md";

function fmtDate(d: Date) {
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

// ─── shared input atoms ───────────────────────────────────────────────────────

function Field({
  label, value, onChange, placeholder, prefix, suffix, helper, integer = false, big = false,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder: string;
  prefix?: React.ReactNode; suffix?: string; helper?: React.ReactNode; integer?: boolean; big?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground font-body">{label}</label>
      <div className="relative">
        {prefix && <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">{prefix}</span>}
        <input
          type="text"
          inputMode={integer ? "numeric" : "decimal"}
          value={value}
          onChange={(e) => onChange(integer ? sanitizeInteger(e.target.value) : sanitizeDecimal(e.target.value))}
          placeholder={placeholder}
          autoComplete="off"
          className={`h-13 w-full rounded-2xl border border-border bg-card ${prefix ? "pl-11" : "pl-4"} ${suffix ? "pr-12" : "pr-4"} py-3.5 ${big ? "text-lg font-bold" : "text-base font-semibold"} text-foreground placeholder:text-muted-foreground/50 shadow-clay-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition font-body`}
        />
        {suffix && <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">{suffix}</span>}
      </div>
      {helper && <p className="text-[11px] font-body">{helper}</p>}
    </div>
  );
}

function MonthYearPicker({
  value, onChange, error,
}: { value: Date | null; onChange: (d: Date) => void; error?: boolean }) {
  const now = new Date();
  const minYear = now.getFullYear() - 15;
  const maxYear = now.getFullYear();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const selectedMonth = value ? value.getMonth() : -1;
  const selectedYear = value ? value.getFullYear() : maxYear;
  const selectClass = `h-13 w-full rounded-2xl border bg-card px-4 py-3.5 text-sm font-medium text-foreground shadow-clay-sm focus:outline-none focus:ring-2 focus:ring-primary/40 appearance-none font-body ${error ? "border-destructive" : "border-border"}`;

  return (
    <div className="space-y-1.5">
      <label className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground font-body flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5" /> Loan Start Date
        <span className="text-destructive">*</span>
      </label>
      <div className="grid grid-cols-2 gap-2">
        <div className="relative">
          <select
            value={selectedMonth >= 0 ? selectedMonth : ""}
            onChange={(e) => onChange(new Date(selectedYear, parseInt(e.target.value, 10), 1))}
            className={selectClass}
          >
            <option value="" disabled>Month</option>
            {months.map((m, i) => {
              const disabled = selectedYear === maxYear && i > now.getMonth();
              return <option key={i} value={i} disabled={disabled}>{m}</option>;
            })}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
        <div className="relative">
          <select
            value={value ? selectedYear : ""}
            onChange={(e) => onChange(new Date(parseInt(e.target.value, 10), selectedMonth >= 0 ? selectedMonth : 0, 1))}
            className={selectClass}
          >
            <option value="" disabled>Year</option>
            {Array.from({ length: maxYear - minYear + 1 }, (_, i) => maxYear - i).map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>
      {error
        ? <p className="text-[11px] font-semibold text-destructive font-body">Please select when your loan started.</p>
        : <p className="text-[10px] text-muted-foreground font-body">On your sanction letter or first EMI receipt — lets us work out your balance today.</p>}
    </div>
  );
}

function Slider({
  label, value, min, max, step, onChange, display,
}: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; display: string;
}) {
  const pct = max > min ? Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100)) : 0;
  const fill = "hsl(42 100% 48%)";
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground font-body">{label}</label>
        <span className="font-display text-lg font-bold text-foreground tabular-nums">{display}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className={SLIDER_GOLD}
        style={{ background: `linear-gradient(to right, ${fill} 0%, ${fill} ${pct}%, hsl(var(--muted)) ${pct}%, hsl(var(--muted)) 100%)` }}
      />
    </div>
  );
}

// ─── balance-transfer hero illustration ──────────────────────────────────────
function BTHeroArt() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="hidden lg:block relative h-[340px] w-full max-w-[340px] mx-auto"
      aria-hidden
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 340 340" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M170 132 L 170 208"
          stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 9"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
        />
      </svg>

      {/* Current loan card — top */}
      <div className="absolute top-0 left-1/2 w-[300px]" style={{ transform: "translateX(-50%) rotate(-1.5deg)" }}>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }} className="rounded-3xl bg-card shadow-clay p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.neutralBg }}>
                <Building2 size={16} style={{ color: C.neutral }} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground font-body">Current loan</p>
                <p className="text-xs font-bold text-foreground font-body">High interest</p>
              </div>
            </div>
            <p className="font-display text-3xl font-extrabold leading-none" style={{ color: C.neutral }}>22%</p>
          </div>
          <div className="flex items-end gap-1.5 mt-3 h-6">
            {[64, 82, 72, 92, 78].map((h, i) => <span key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: "linear-gradient(135deg, hsl(30 18% 62%), hsl(30 14% 72%))" }} />)}
          </div>
        </motion.div>
      </div>

      {/* Prayaan card — bottom */}
      <div className="absolute bottom-0 left-1/2 w-[300px]" style={{ transform: "translateX(-50%) rotate(1.5deg)" }}>
        <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="relative rounded-3xl bg-card shadow-clay-lg p-4" style={{ outline: "2px solid hsl(var(--accent) / 0.18)", outlineOffset: "-2px" }}>
          <span className="absolute -top-2.5 right-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider text-white shadow-clay-sm" style={{ background: C.blue }}>
            <ShieldCheck size={10} /> Prayaan
          </span>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: C.blueBg }}>
                <ShieldCheck size={16} style={{ color: C.blue }} />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground font-body">New loan</p>
                <p className="text-xs font-bold text-foreground font-body">Lower rate</p>
              </div>
            </div>
            <p className="font-display text-3xl font-extrabold leading-none" style={{ color: C.blue }}>18%</p>
          </div>
          <div className="flex items-end gap-1.5 mt-3 h-6">
            {[40, 32, 28, 22, 18].map((h, i) => <span key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: C.blueGrad }} />)}
          </div>
        </motion.div>
      </div>

      {/* swap badge */}
      <div className="absolute left-1/2 top-1/2 z-20" style={{ transform: "translate(-50%, -50%)" }}>
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }} className="drop-shadow-xl">
          <div className="w-[58px] h-[58px] rounded-[1.3rem] border-4 border-white flex items-center justify-center" style={{ background: C.goldGrad }}>
            <ArrowLeftRight size={24} className="text-white rotate-90" strokeWidth={2.6} />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── results ──────────────────────────────────────────────────────────────────

function Metric({ icon: Icon, label, value, color, bg }: {
  icon: React.ElementType; label: string; value: string; color: string; bg: string;
}) {
  return (
    <div className="rounded-2xl bg-card/70 shadow-clay-sm p-4 text-center">
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <span className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: bg }}><Icon size={12} style={{ color }} /></span>
        <span className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground font-body">{label}</span>
      </div>
      <p className="font-display text-xl font-extrabold" style={{ color }}>{value}</p>
    </div>
  );
}

function VsRow({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground font-body">{label}</p>
      <p className="text-[15px] font-bold font-body leading-tight mt-0.5" style={color ? { color } : undefined}>{value}</p>
    </div>
  );
}

function ExplainStep({ n, label, value, sub, color }: {
  n: number; label: string; value: string; sub?: string; color: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5" style={{ background: `${color}22`, color }}>{n}</span>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-sm font-medium text-foreground font-body">{label}</p>
          <p className="text-sm font-bold font-body shrink-0" style={{ color }}>{value}</p>
        </div>
        {sub && <p className="text-[11px] text-muted-foreground font-body font-mono">{sub}</p>}
      </div>
    </div>
  );
}

function Results({ result, currentEMI, currentROI, prayaanRate, lenderName, loanStart, tenureMonths }: {
  result: BTCalcResult; currentEMI: number; currentROI: number; prayaanRate: number;
  lenderName: string; loanStart: Date; tenureMonths: number;
}) {
  const [showExplain, setShowExplain] = useState(false);
  const hasTopUp = result.hasTopUp;

  // Apples-to-apples (matches SwitchIQ): with a top-up, compare the SAME new loan
  // base at the borrower's rate vs Prayaan's; otherwise the honest "stay" outflow.
  const cmpEMI = hasTopUp ? result.currentLikeEMI : currentEMI;
  const cmpTotal = hasTopUp ? result.currentLikeTotal : result.actualRemainingOutflow;
  const cmpLoanAmount = hasTopUp ? result.newLoanBase : result.outstanding;
  const cmpInterest = hasTopUp ? result.currentLikeInterest : result.currentInterestRemaining;
  const cmpMonths = hasTopUp ? result.prayaanN : result.remainingMonths;
  const prayaanInterestShown = hasTopUp ? result.prayaanLikeInterest : result.prayaanInterest;
  const switchTotal = result.actualPrayaanOutflow;

  const monthlyDelta = Math.round(cmpEMI - result.newEMI);
  const monthlyPositive = monthlyDelta > 0;
  const monthlyAbs = Math.abs(monthlyDelta);
  const monthsSooner = Math.max(0, result.remainingMonths - result.prayaanN);
  const totalKept = Math.max(0, Math.round(cmpTotal - switchTotal));
  const interestSaved = Math.max(0, Math.round(result.currentLikeTotal - switchTotal));
  const barMax = Math.max(cmpTotal, switchTotal) || 1;

  const currentEnd = new Date(loanStart); currentEnd.setMonth(currentEnd.getMonth() + tenureMonths);
  const prayaanStart = new Date();
  const prayaanEnd = new Date(); prayaanEnd.setMonth(prayaanEnd.getMonth() + result.prayaanN);

  // Honest gate: a balance transfer only truly helps the borrower if OUR rate is
  // lower than theirs. A "total saved" that comes only from compressing the tenure
  // (at an equal/higher rate) isn't a real win — they could just prepay instead. So
  // we only claim savings when the rate is genuinely better; a top-up (cash in hand)
  // is its own standalone benefit.
  const rateBetter = prayaanRate < currentROI;
  const hasMoneyBenefit = rateBetter || (hasTopUp && result.topUp > 0);

  const wrap = "clay-surface p-6 md:p-8";

  // ── Branch: current loan is the better deal → honest "stay put" advice ──
  if (!hasMoneyBenefit) {
    return (
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className={`${wrap} space-y-5`}>
        <div className="flex items-center gap-2.5">
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-clay-sm shrink-0" style={{ background: C.neutralBg }}>
            <ShieldCheck size={20} style={{ color: C.neutral }} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground font-body">Our honest take</p>
            <h3 className="font-display text-xl font-bold text-foreground">Keep your current loan</h3>
          </div>
        </div>
        <p className="text-sm md:text-base text-foreground font-body leading-relaxed">
          At your current <span className="font-bold">{currentROI}%</span>, staying put works out better for you than
          anything we can offer at our indicative <span className="font-bold">{prayaanRate}%</span> right now. We won't
          pretend otherwise — <span className="font-semibold">you'd save more by keeping your existing loan.</span>
        </p>
        <div className="rounded-2xl p-4 space-y-1.5" style={{ background: C.blueBg, border: `1px solid ${C.blueBorder}` }}>
          <p className="text-sm font-bold text-foreground font-body">If you ever do want to switch, here's our promise:</p>
          <ul className="text-sm text-muted-foreground font-body space-y-1">
            <li className="flex gap-2"><CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: C.blue }} /> A top-up loan when you need extra working capital</li>
            <li className="flex gap-2"><CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: C.blue }} /> Fair, transparent lending — no hidden charges</li>
            <li className="flex gap-2"><CheckCircle size={15} className="mt-0.5 shrink-0" style={{ color: C.blue }} /> Respectful, transparent collection — guaranteed</li>
          </ul>
        </div>
        <Link to="/contact" className="flex items-center justify-center gap-2 rounded-full bg-card border-2 border-accent/30 px-8 py-3.5 text-sm font-bold text-accent shadow-clay-sm hover:bg-accent/5 hover:border-accent/50 transition font-body">
          Talk to us anyway <ArrowRight size={15} />
        </Link>
        <p className="text-center text-[10px] text-muted-foreground font-body">* Indicative estimate based on a {prayaanRate}% p.a. comparison. Your exact rate is confirmed after assessment.</p>
      </motion.div>
    );
  }

  // ── Branch: switching helps ──
  const heroLabel = hasTopUp ? "Cash in hand today"
    : totalKept > 0 ? "Total you save"
    : monthlyPositive ? "Lower monthly EMI"
    : "Your new rate";
  const heroValue = hasTopUp ? fmtEMI(result.topUp)
    : totalKept > 0 ? fmtEMI(totalKept)
    : monthlyPositive ? `${fmtEMI(monthlyAbs)}/mo`
    : `${prayaanRate}%`;

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-5">
      {/* Hero */}
      <div className="rounded-[1.5rem] p-6 md:p-8 text-center shadow-clay" style={{ background: hasTopUp ? `linear-gradient(160deg, ${C.goldBg}, ${C.blueBg})` : `linear-gradient(160deg, ${C.blueBg}, rgba(0,84,156,0.03))`, border: `1px solid ${hasTopUp ? C.goldBorder : C.blueBorder}` }}>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground font-body">By switching from</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 shadow-clay-sm">
            <Building2 size={14} className="text-muted-foreground" />
            <span className="font-bold text-sm" style={{ color: C.neutral }}>{lenderName}</span>
          </span>
          <span className="text-sm text-muted-foreground font-body">to</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 shadow-clay-sm">
            <ShieldCheck size={14} style={{ color: C.blue }} />
            <span className="font-bold text-sm" style={{ color: C.blue }}>Prayaan Capital</span>
          </span>
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground font-body mb-1">{heroLabel}</p>
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.05 }}
          className="font-display font-extrabold leading-none text-gradient-coral"
          style={{ fontSize: "clamp(2.5rem, 9vw, 4rem)" }}
        >
          {heroValue}
        </motion.p>
        {hasTopUp && interestSaved > 0 && (
          <p className="text-sm text-muted-foreground font-body mt-2">
            …plus about <span className="font-bold" style={{ color: C.blue }}>{fmtINR(interestSaved)}</span> saved in interest vs your current {currentROI}%.
          </p>
        )}
        {hasTopUp && !rateBetter && (
          <p className="text-sm text-muted-foreground font-body mt-2 max-w-md mx-auto">
            Being upfront: our indicative <span className="font-semibold">{prayaanRate}%</span> is a little higher than your current
            {" "}<span className="font-semibold">{currentROI}%</span> — so this is about the working capital in hand, not interest savings.
          </p>
        )}

        {/* Metric tiles — only the ones that are genuinely true */}
        <div className={`grid gap-2 mt-6 ${[totalKept > 0, monthsSooner > 0, monthlyPositive, hasTopUp].filter(Boolean).length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
          {totalKept > 0 && <Metric icon={Coins} label="You save in total" value={fmtINR(totalKept)} color={C.gold} bg={C.goldBg} />}
          {monthsSooner > 0 && <Metric icon={CalendarClock} label="Finish sooner" value={`${monthsSooner} mo`} color={C.blue} bg={C.blueBg} />}
          {monthlyPositive && <Metric icon={Wallet} label="Lower EMI / month" value={fmtEMI(monthlyAbs)} color={C.blue} bg={C.blueBg} />}
          {hasTopUp && <Metric icon={Coins} label="Cash in hand" value={fmtEMI(result.topUp)} color={C.gold} bg={C.goldBg} />}
        </div>
      </div>

      {/* Honest note when the EMI actually goes up */}
      {!monthlyPositive && monthlyAbs > 0 && (
        <div className="flex items-start gap-2.5 rounded-2xl p-4" style={{ background: C.goldBg, border: `1px solid ${C.goldBorder}` }}>
          <Info size={16} className="mt-0.5 shrink-0" style={{ color: C.gold }} />
          <p className="text-sm text-foreground font-body leading-relaxed">
            Heads-up, honestly: your monthly EMI will be <span className="font-bold">{fmtEMI(monthlyAbs)} higher</span>
            {hasTopUp ? <> — but you take <span className="font-bold">{fmtEMI(result.topUp)}</span> in hand today</> : null}
            {monthsSooner > 0 && <>, and you close the loan <span className="font-bold">{monthsSooner} months sooner</span></>}
            {totalKept > 0 && <>, saving <span className="font-bold">{fmtINR(totalKept)}</span> overall</>}.
          </p>
        </div>
      )}

      {/* ── The Data Speaks: bars + lender-by-lender comparison ── */}
      <div className="clay-surface p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-bold uppercase tracking-wider font-body" style={{ color: C.blue }}>
            <BarChart3 size={13} /> The data speaks.
          </span>
          {totalKept > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-body" style={{ background: C.goldBg, color: C.gold }}>
              <Coins size={13} /> {fmtINR(totalKept)} saved
            </span>
          )}
        </div>

        {/* Stay vs switch bars */}
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between text-sm font-body mb-1">
              <span className="text-muted-foreground">{hasTopUp ? "Same loan at your bank" : "If you stay"}</span>
              <span className="font-bold" style={{ color: C.neutral }}>{fmtINR(cmpTotal)}</span>
            </div>
            <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${(cmpTotal / barMax) * 100}%` }} transition={{ duration: 0.7, ease: "easeOut" }} className="h-full rounded-full" style={{ background: "linear-gradient(90deg, hsl(30 18% 62%), hsl(30 14% 72%))" }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm font-body mb-1">
              <span className="text-muted-foreground">{hasTopUp ? "Same loan at Prayaan" : "If you switch"}</span>
              <span className="font-bold" style={{ color: C.blue }}>{fmtINR(switchTotal)}</span>
            </div>
            <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${(switchTotal / barMax) * 100}%` }} transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }} className="h-full rounded-full" style={{ background: C.blueGrad }} />
            </div>
          </div>
        </div>

        {/* VS comparison */}
        <div className="relative grid sm:grid-cols-2 gap-3 pt-1">
          {/* Current */}
          <div className="rounded-2xl p-5 space-y-3.5" style={{ background: C.neutralBg, border: `1px solid hsl(var(--border))` }}>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-card flex items-center justify-center shadow-clay-sm shrink-0"><Building2 size={16} style={{ color: C.neutral }} /></div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground font-body">{hasTopUp ? "Current Lender — same loan" : "Current Lender"}</p>
                <p className="font-bold text-sm truncate text-foreground">{lenderName}</p>
              </div>
            </div>
            <VsRow label={hasTopUp ? "Loan amount (incl. top-up)" : "Outstanding balance"} value={fmtINR(cmpLoanAmount)} />
            {hasTopUp ? (
              <VsRow label="If borrowed at your rate" value={`${currentROI}% for ${result.prayaanN} mo`} />
            ) : (
              <>
                <VsRow label="When did you take this loan?" value={fmtDate(loanStart)} />
                <VsRow label="Loan end date" value={fmtDate(currentEnd)} />
              </>
            )}
            <VsRow label="EMI" value={fmtEMI(cmpEMI)} />
            <VsRow label="ROI" value={`${currentROI}%`} />
            <VsRow label="Tenure" value={`${cmpMonths} mo`} />
            <div className="border-t border-border pt-3 space-y-3.5">
              <VsRow label="Total payable" value={fmtINR(cmpTotal)} color={C.neutral} />
              <VsRow label="Interest cost" value={fmtINR(cmpInterest)} color={C.neutral} />
            </div>
            <p className="text-[11px] text-muted-foreground font-body pt-1">
              {hasTopUp ? `Borrowing the same ${fmtINR(cmpLoanAmount)} at your current ${currentROI}%.` : `If you keep paying your current EMI for ${result.remainingMonths} more months.`}
            </p>
          </div>

          {/* Prayaan */}
          <div className="relative rounded-2xl p-5 space-y-3.5" style={{ background: C.blueBg, border: `1px solid ${C.blueBorder}` }}>
            <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-clay-sm" style={{ background: C.blue }}>
              <CheckCircle size={11} /> BEST
            </span>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-card flex items-center justify-center shadow-clay-sm shrink-0"><ShieldCheck size={16} style={{ color: C.blue }} /></div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground font-body">Best Offer</p>
                <p className="font-bold text-sm truncate" style={{ color: C.blue }}>Prayaan Capital</p>
              </div>
            </div>
            <VsRow label="Loan amount" value={fmtINR(result.newLoanBase)} />
            {hasTopUp && (
              <p className="-mt-2.5 text-[11px] font-semibold font-body" style={{ color: C.gold }}>= {fmtINR(result.outstanding)} outstanding + {fmtINR(result.topUp)} top-up</p>
            )}
            <VsRow label="When does it start?" value={fmtDate(prayaanStart)} />
            <VsRow label="Loan end date" value={fmtDate(prayaanEnd)} />
            <VsRow label="EMI" value={fmtEMI(result.newEMI)} color={C.blue} />
            <VsRow label="ROI" value={`${prayaanRate}%`} color={C.blue} />
            <VsRow label="Tenure" value={`${result.prayaanN} mo · Fresh loan`} color={C.blue} />
            <div className="border-t pt-3 space-y-3.5" style={{ borderColor: C.blueBorder }}>
              <VsRow label="Total payable" value={fmtINR(switchTotal)} color={C.blue} />
              <VsRow label="Interest cost" value={fmtINR(prayaanInterestShown)} color={C.blue} />
            </div>
            <p className="text-[11px] font-semibold font-body pt-1" style={{ color: hasTopUp ? C.gold : "hsl(var(--muted-foreground))" }}>
              {hasTopUp ? `💵 Includes ${fmtINR(result.topUp)} top-up cash in hand.` : `A fresh ${result.prayaanN}-month loan at ${prayaanRate}% — starting immediately.`}
            </p>
          </div>

          {/* VS badge */}
          <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full items-center justify-center text-[11px] font-bold text-white shadow-clay z-10" style={{ background: `linear-gradient(135deg, hsl(var(--accent)), hsl(42 100% 48%))` }}>VS</div>
        </div>
      </div>

      {/* ── Two summary cards ── */}
      {(totalKept > 0 || monthsSooner > 0) && (
        <div className="grid sm:grid-cols-2 gap-3">
          {totalKept > 0 && (
            <div className="rounded-[1.5rem] p-6 text-center shadow-clay-sm" style={{ background: C.goldBg, border: `1px solid ${C.goldBorder}` }}>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-body mb-2" style={{ color: C.gold }}><Coins size={13} /> Total saved</p>
              <p className="font-display text-3xl font-extrabold" style={{ color: C.gold }}>{fmtINR(totalKept)}</p>
              <p className="inline-block rounded-full bg-card/70 px-3 py-1 text-[11px] font-semibold font-mono mt-2" style={{ color: C.gold }}>{fmtINR(cmpTotal)} − {fmtINR(switchTotal)}</p>
              <p className="text-[11px] text-muted-foreground font-body mt-1.5">{hasTopUp ? "Same loan: your rate − Prayaan" : "If you stay − If you switch"}</p>
            </div>
          )}
          {monthsSooner > 0 ? (
            <div className="rounded-[1.5rem] p-6 text-center shadow-clay-sm" style={{ background: C.blueBg, border: `1px solid ${C.blueBorder}` }}>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-body mb-2" style={{ color: C.blue }}><Zap size={13} /> Closed sooner</p>
              <p className="font-display text-3xl font-extrabold" style={{ color: C.blue }}>{monthsSooner} <span className="text-xl">mo</span></p>
              <p className="inline-block rounded-full bg-card/70 px-3 py-1 text-[11px] font-semibold font-mono mt-2" style={{ color: C.blue }}>{result.remainingMonths} mo − {result.prayaanN} mo</p>
              <p className="text-[11px] text-muted-foreground font-body mt-1.5">Current tenure − Prayaan tenure</p>
            </div>
          ) : hasTopUp ? (
            <div className="rounded-[1.5rem] p-6 text-center shadow-clay-sm" style={{ background: C.goldBg, border: `1px solid ${C.goldBorder}` }}>
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-body mb-2" style={{ color: C.gold }}><Coins size={13} /> Cash in hand</p>
              <p className="font-display text-3xl font-extrabold" style={{ color: C.gold }}>{fmtINR(result.topUp)}</p>
              <p className="text-[11px] text-muted-foreground font-body mt-1.5">Extra working capital, day one</p>
            </div>
          ) : null}
        </div>
      )}

      {/* ── Simple Explain ── */}
      <div className="clay-surface overflow-hidden">
        <button onClick={() => setShowExplain((v) => !v)} className="flex w-full items-center justify-center gap-2 px-6 py-4 text-sm font-bold font-body transition hover:bg-muted/30" style={{ color: C.blue }}>
          <Calculator size={15} /> {showExplain ? "Hide simple explanation" : "Simple Explain — How is this calculated?"}
          {showExplain ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </button>
        <AnimatePresence initial={false}>
          {showExplain && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
              <div className="grid md:grid-cols-2 gap-4 px-6 pb-6 pt-2">
                <div className="rounded-2xl p-5 space-y-3" style={{ background: C.goldBg }}>
                  <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-body" style={{ color: C.gold }}><Coins size={13} /> How total saved is calculated</p>
                  <ExplainStep n={1} label={hasTopUp ? "New loan (outstanding + top-up)" : "Current loan outstanding"} value={fmtINR(cmpLoanAmount)} color={C.gold} />
                  <ExplainStep n={2} label={hasTopUp ? `Same loan at your rate (${currentROI}%)` : "Remaining months on current loan"} value={hasTopUp ? fmtINR(cmpTotal) : `${result.remainingMonths} mo`} sub={hasTopUp ? `${fmtEMI(cmpEMI)} × ${result.prayaanN} mo` : undefined} color={hasTopUp ? C.neutral : C.gold} />
                  <ExplainStep n={3} label={hasTopUp ? `Same loan at Prayaan (${prayaanRate}%)` : "If you STAY: EMI × remaining months"} value={hasTopUp ? fmtINR(switchTotal) : fmtINR(cmpTotal)} sub={hasTopUp ? `${fmtEMI(result.newEMI)} × ${result.prayaanN} mo` : `${fmtEMI(cmpEMI)} × ${result.remainingMonths} mo`} color={hasTopUp ? C.blue : C.neutral} />
                  {!hasTopUp && <ExplainStep n={4} label="If you SWITCH: Prayaan EMI × tenure" value={fmtINR(switchTotal)} sub={`${fmtEMI(result.newEMI)} × ${result.prayaanN} mo`} color={C.blue} />}
                  <div className="rounded-xl border border-dashed p-3 text-center" style={{ borderColor: C.goldBorder }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground font-body">= You save</p>
                    <p className="font-display text-xl font-extrabold mt-1" style={{ color: C.gold }}>{fmtINR(cmpTotal)} − {fmtINR(switchTotal)} = {fmtINR(totalKept)}</p>
                  </div>
                </div>
                <div className="rounded-2xl p-5 space-y-3" style={{ background: C.blueBg }}>
                  <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider font-body" style={{ color: C.blue }}><Zap size={13} /> How closed sooner is calculated</p>
                  <ExplainStep n={1} label="Months left on current loan" value={`${result.remainingMonths} mo`} color={C.blue} />
                  <ExplainStep n={2} label="Prayaan loan tenure (fresh)" value={`${result.prayaanN} mo`} color={C.blue} />
                  <div className="rounded-xl border border-dashed p-3 text-center" style={{ borderColor: C.blueBorder }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground font-body">= You finish earlier by</p>
                    <p className="font-display text-xl font-extrabold mt-1" style={{ color: C.blue }}>{result.remainingMonths} − {result.prayaanN} = {monthsSooner} mo</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── CTA + WhatsApp share ── */}
      <div className="clay-surface p-6 md:p-8 text-center space-y-4">
        <h3 className="font-display text-xl font-bold text-foreground">Ready to make the switch?</h3>
        <p className="text-sm text-muted-foreground font-body max-w-md mx-auto">
          Get a personalised quote in minutes. We confirm your exact rate after a quick credit and property check — no obligation.
        </p>
        <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0a800] px-8 py-4 text-base font-bold text-[#0d2137] shadow-[0_0_28px_rgba(240,168,0,0.35)] hover:shadow-[0_0_44px_rgba(240,168,0,0.55)] hover:bg-[#fbb500] transition-all font-body">
          Get My Rate from Prayaan <ArrowRight size={16} />
        </Link>
        <p className="text-[10px] text-muted-foreground font-body">* Indicative estimate, compared with Prayaan's {prayaanRate}% p.a. over 7 years. Final rate subject to credit assessment and property valuation.</p>
      </div>
    </motion.div>
  );
}

// ─── page ───────────────────────────────────────────────────────────────────

export default function BTCalc() {
  const [totalLoan, setTotalLoan] = useState("2000000");
  const [roi, setROI] = useState("22");
  const [totalTenure, setTotalTenure] = useState("180"); // months
  const [loanStart, setLoanStart] = useState<Date | null>(null);
  const [prayaanROI, setPrayaanROI] = useState(String(DEFAULT_PRAYAAN_RATE));
  const [prayaanTenure, setPrayaanTenure] = useState<number>(DEFAULT_PRAYAAN_TENURE);
  const [topUp, setTopUp] = useState("");
  const [result, setResult] = useState<BTCalcResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [tried, setTried] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);
  const tenureYears = totalTenure ? Math.round(parseInt(totalTenure, 10) / 12) : 0;

  // Auto-calculated monthly EMI (read-only) from the loan details.
  const autoEMI = useMemo(() => {
    const P = parseNum(totalLoan), r = parseNum(roi), N = parseInt(totalTenure, 10) || 0;
    if (P > 0 && r > 0 && N > 0) return Math.round(calcEMI(P, r, N));
    return 0;
  }, [totalLoan, roi, totalTenure]);

  const handleReset = () => {
    setTotalLoan("2000000"); setROI("22"); setTotalTenure("180");
    setLoanStart(null); setTopUp("");
    setPrayaanROI(String(DEFAULT_PRAYAAN_RATE)); setPrayaanTenure(DEFAULT_PRAYAAN_TENURE);
    setResult(null); setErrors([]); setTried(false);
  };

  const handleCalculate = () => {
    setTried(true);
    const errs: string[] = [];
    const P = parseNum(totalLoan), r = parseNum(roi), N = parseInt(totalTenure, 10) || 0;
    if (P < 50_000 || P > 100_000_000) errs.push("Loan amount should be between ₹50,000 and ₹10 Crores.");
    if (r < 5 || r > 60) errs.push("Interest rate should be between 5% and 60%.");
    if (N <= 0) errs.push("Enter your loan tenure.");
    if (!loanStart) errs.push("Select your loan start date.");
    else if (monthsElapsed(loanStart) >= N) errs.push("This loan looks fully paid off — please recheck the start date or tenure.");

    setErrors(errs);
    if (errs.length) { setResult(null); return; }

    const pROI = Math.max(PRAYAAN_MIN_RATE, Math.min(30, parseNum(prayaanROI) || DEFAULT_PRAYAAN_RATE));
    const res = calcBT({
      totalLoan: P, emi: autoEMI, roi: r, totalTenure: N,
      loanStartDate: loanStart!, prayaanROI: pROI, prayaanTenure: prayaanTenure as 60 | 84 | 120,
      topUp: parseNum(topUp),
    });
    setResult(res);
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  return (
    <Layout>
      {/* ── Hero ── */}
      <section className="pt-24 pb-10 md:pt-32 md:pb-14 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
                <TrendingDown size={13} /> Balance Transfer Calculator
              </span>
              <h1 className="font-display text-3xl md:text-5xl lg:text-[3.3rem] font-bold text-foreground mb-4 leading-[1.1]">
                Paying too much on your business loan?{" "}
                <span className="text-gradient-coral">See what you save with Prayaan.</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-xl font-body">
                Enter your loan, add a top-up if you need working capital, and we'll show you — honestly — whether
                switching to Prayaan saves you money.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 mt-7">
                {[
                  { icon: TrendingDown, label: "Lower interest rate", color: C.blue, bg: C.blueBg },
                  { icon: Coins, label: "Extra top-up capital", color: C.gold, bg: C.goldBg },
                  { icon: CalendarClock, label: "Finish your loan sooner", color: C.blue, bg: C.blueBg },
                ].map((b) => (
                  <span key={b.label} className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-clay-sm text-sm font-semibold text-foreground font-body">
                    <span className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: b.bg }}><b.icon size={13} style={{ color: b.color }} /></span>
                    {b.label}
                  </span>
                ))}
              </div>
            </motion.div>
            <BTHeroArt />
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto space-y-6">

            {/* Inputs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="clay-surface p-5 md:p-7 space-y-5">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">Your current loan</h2>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">Three quick details — no sign-up needed</p>
                </div>
                <button onClick={handleReset} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground border border-border bg-card shadow-clay-sm transition font-body">
                  <RefreshCcw size={12} /> Reset
                </button>
              </div>

              <Field
                label="Total Loan Amount" value={totalLoan}
                onChange={(v) => { setTotalLoan(v); setResult(null); }}
                placeholder="20,00,000" integer big
                prefix={<IndianRupee className="h-4 w-4" />}
                helper={parseNum(totalLoan) >= 50_000 ? <span className="font-semibold text-primary">= {fmtINRSpoken(parseNum(totalLoan))}</span> : undefined}
              />

              <div className="grid grid-cols-2 gap-4">
                <Field
                  label="Interest Rate" value={roi}
                  onChange={(v) => { setROI(v); setResult(null); }}
                  placeholder="22" suffix="%"
                />
                <Field
                  label="Loan Tenure" value={tenureYears ? String(tenureYears) : ""}
                  onChange={(v) => {
                    const y = parseInt(sanitizeInteger(v), 10);
                    setTotalTenure(!y ? "" : String(Math.max(1, Math.min(30, y)) * 12)); setResult(null);
                  }}
                  placeholder="15" suffix="yrs" integer
                />
              </div>

              {/* Auto EMI (read-only) */}
              <div className="rounded-2xl border border-border bg-muted/40 px-4 py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground font-body">Monthly EMI</p>
                    <p className="text-[10px] text-muted-foreground font-body">Auto-calculated from your details</p>
                  </div>
                </div>
                <p className="font-display text-xl font-extrabold text-foreground tabular-nums">{autoEMI > 0 ? fmtEMI(autoEMI) : "—"}</p>
              </div>

              <MonthYearPicker value={loanStart} onChange={(d) => { setLoanStart(d); setResult(null); }} error={tried && !loanStart} />
            </motion.div>

            {/* Prayaan's Offer */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.06 }} className="clay-surface p-5 md:p-7 space-y-5" style={{ borderTop: `3px solid ${C.blue}` }}>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-card flex items-center justify-center shadow-clay-sm shrink-0"><ShieldCheck size={16} style={{ color: C.blue }} /></div>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground">Prayaan's Offer</h2>
                  <p className="text-xs text-muted-foreground font-body mt-0.5">Adjust to the rate quoted to you</p>
                </div>
              </div>

              {/* Prayaan ROI */}
              <div className="space-y-2">
                <Field
                  label="Prayaan ROI" value={prayaanROI}
                  onChange={(v) => { setPrayaanROI(v); setResult(null); }}
                  placeholder="18" suffix="%"
                />
                <div className="flex flex-wrap gap-1.5">
                  {PRAYAAN_RATE_CHIPS.map((v) => (
                    <button key={v} type="button" onClick={() => { setPrayaanROI(String(v)); setResult(null); }}
                      className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition min-h-[30px] ${parseNum(prayaanROI) === v ? "text-white shadow-clay-sm" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}
                      style={parseNum(prayaanROI) === v ? { background: C.blueGrad } : {}}>{v}%</button>
                  ))}
                </div>
              </div>

              {/* New Loan Tenure */}
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground font-body">New Loan Tenure</p>
                <div className="flex gap-2">
                  {PRAYAAN_TENURES.map((m) => {
                    const label = m === 60 ? "5 yrs" : m === 84 ? "7 yrs" : "10 yrs";
                    const active = prayaanTenure === m;
                    return (
                      <button key={m} type="button" onClick={() => { setPrayaanTenure(m); setResult(null); }}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition min-h-[36px] ${active ? "text-white shadow-clay-sm" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}
                        style={active ? { background: C.blueGrad } : {}}>{label}{m === 84 ? " ★" : ""}</button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-muted-foreground font-body">Prayaan offers a fresh loan — not just your remaining tenure.</p>
              </div>

              {/* Top-up slider */}
              <div className="rounded-2xl border-2 p-4 space-y-3" style={{ borderColor: C.goldBorder, background: `linear-gradient(135deg, ${C.goldBg}, ${C.blueBg})` }}>
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-card flex items-center justify-center shadow-clay-sm shrink-0"><Coins size={16} style={{ color: C.gold }} /></div>
                  <div>
                    <p className="text-sm font-bold text-foreground font-display">Top-up Loan</p>
                    <p className="text-[10px] text-muted-foreground font-body">Extra working capital on top of your transfer</p>
                  </div>
                  <span className="ml-auto rounded-full bg-card px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground shrink-0">optional</span>
                </div>
                <Slider
                  label="Top-up Amount"
                  value={Math.min(2_000_000, Math.max(0, parseNum(topUp)))}
                  min={0} max={2_000_000} step={50_000}
                  onChange={(v) => { setTopUp(v === 0 ? "" : String(v)); setResult(null); }}
                  display={parseNum(topUp) > 0 ? fmtINR(parseNum(topUp)) : "None"}
                />
              </div>

              {errors.length > 0 && (
                <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 space-y-1">
                  {errors.map((e, i) => <p key={i} className="text-xs font-medium text-destructive font-body">• {e}</p>)}
                </div>
              )}

              <button
                onClick={handleCalculate} type="button"
                className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold text-[#0d2137] transition hover:-translate-y-0.5 active:translate-y-0 font-body"
                style={{ background: "linear-gradient(135deg, #f0a800, #fbb500)", boxShadow: "0 0 28px rgba(240,168,0,0.4)" }}
              >
                <TrendingDown size={18} /> Calculate My Savings <ArrowRight size={16} />
              </button>
            </motion.div>

            {/* Results */}
            <div ref={resultsRef}>
              <AnimatePresence mode="wait">
                {result && (
                  <Results
                    key="result"
                    result={result}
                    currentEMI={autoEMI}
                    currentROI={parseNum(roi)}
                    prayaanRate={Math.max(PRAYAAN_MIN_RATE, Math.min(30, parseNum(prayaanROI) || DEFAULT_PRAYAAN_RATE))}
                    lenderName="your current lender"
                    loanStart={loanStart ?? new Date()}
                    tenureMonths={parseInt(totalTenure, 10) || 0}
                  />
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
