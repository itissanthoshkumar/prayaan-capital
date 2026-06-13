import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import {
  Calculator, TrendingUp, IndianRupee, Calendar,
  ChevronDown, ChevronUp, ArrowRight, Lightbulb,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* ─── Chart colours (hardcoded — SVG doesn't support CSS vars) ─── */
const C_PRINCIPAL = "hsl(24, 85%, 52%)";
const C_INTEREST  = "hsl(160, 65%, 50%)";

/* ─── Formatters ─── */
const fmtFull = (v: number): string => {
  const n = Math.round(v);
  if (n >= 1_00_00_000) {
    const cr = n / 1_00_00_000;
    return `₹${cr === Math.floor(cr) ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  if (n >= 1_00_000) {
    const l = n / 1_00_000;
    return `₹${l === Math.floor(l) ? l.toFixed(0) : l.toFixed(2)}L`;
  }
  return `₹${n.toLocaleString("en-IN")}`;
};

const fmtHero = (v: number): string => {
  const n = Math.round(v);
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(1)}Cr`;
  if (n >= 10_00_000)   return `₹${(n / 1_00_000).toFixed(0)}L`;
  if (n >= 1_00_000)    return `₹${(n / 1_00_000).toFixed(1)}L`;
  if (n >= 10_000)      return `₹${Math.round(n / 1_000)}K`;
  if (n >= 1_000)       return `₹${(n / 1_000).toFixed(1)}K`;
  return `₹${n}`;
};

const tenureStr = (months: number): string => {
  const yrs = months / 12;
  if (Number.isInteger(yrs)) return `${yrs} Yr${yrs > 1 ? "s" : ""}`;
  return `${yrs.toFixed(1)} Yrs`;
};

/* ─── Amortisation row ─── */
type AmorRow = {
  year: number;
  openingBalance: number;
  principal: number;
  interest: number;
  closingBalance: number;
};

/* ─── Custom recharts tooltip ─── */
const ChartTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-2xl bg-white shadow-clay px-4 py-2.5 text-xs font-body">
      <p className="font-semibold text-foreground mb-0.5">{payload[0].name}</p>
      <p className="text-muted-foreground">{fmtFull(payload[0].value)}</p>
    </div>
  );
};

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════ */
const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(25);  // Lakhs (5–100)
  const [rate,       setRate]       = useState(14);  // % p.a. (12–30)
  const [tenure,     setTenure]     = useState(36);  // months (12–240, step 6)
  const [showTable,  setShowTable]  = useState(false);

  /* ── Core maths ── */
  const { emi, totalInterest, totalPayment, principalPct, amortization } = useMemo(() => {
    const P = loanAmount * 1_00_000;
    const r = rate / 12 / 100;
    const n = tenure;
    const emiVal = r > 0
      ? (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : P / n;
    const totalPay = emiVal * n;
    const totalInt = totalPay - P;

    /* Yearly amortisation */
    let balance = P;
    const rows: AmorRow[] = [];
    for (let yr = 1; yr <= Math.ceil(n / 12); yr++) {
      const months = Math.min(12, n - (yr - 1) * 12);
      const openBal = balance;
      let yPrin = 0, yInt = 0;
      for (let m = 0; m < months; m++) {
        if (balance < 0.01) break;
        const iAmt = balance * r;
        const pAmt = Math.min(emiVal - iAmt, balance);
        yInt  += iAmt;
        yPrin += pAmt;
        balance = Math.max(0, balance - pAmt);
      }
      rows.push({
        year: yr,
        openingBalance: Math.round(openBal),
        principal:      Math.round(yPrin),
        interest:       Math.round(yInt),
        closingBalance: Math.round(balance),
      });
    }

    return {
      emi:           Math.round(emiVal),
      totalInterest: Math.round(totalInt),
      totalPayment:  Math.round(totalPay),
      principalPct:  Math.round((P / totalPay) * 100),
      amortization:  rows,
    };
  }, [loanAmount, rate, tenure]);

  /* ── Donut data ── */
  const chartData = [
    { name: "Principal", value: loanAmount * 1_00_000 },
    { name: "Interest",  value: totalInterest },
  ];

  /* ── Interest multiplier insight ── */
  const multiplier = (totalPayment / (loanAmount * 1_00_000)).toFixed(2);

  /* ─── Slider input style ─── */
  const numInputCls =
    "w-12 bg-transparent font-display text-sm font-bold outline-none text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

  return (
    <section id="emi-calculator" className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/3 w-[600px] h-[500px] bg-gradient-coral opacity-[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-gradient-mint   opacity-[0.06] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
            <Calculator size={12} /> EMI Calculator
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.1] mb-4">
            Plan Your <span className="text-gradient-coral">Repayment</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto">
            Move the sliders or type a value to see your monthly EMI and full cost breakdown instantly.
          </p>
        </motion.div>

        {/* ── Main card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65 }}
          className="max-w-5xl mx-auto"
        >
          <div className="clay-surface shadow-clay-lg overflow-hidden">
            <div className="grid md:grid-cols-[5fr_6fr]">

              {/* ════════ LEFT — Sliders ════════ */}
              <div className="p-7 md:p-10 space-y-7 border-b md:border-b-0 md:border-r border-border/40">

                <h3 className="font-display text-base font-bold text-foreground">
                  Loan Details
                </h3>

                {/* ── Loan Amount ── */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="font-body text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                      <IndianRupee size={13} className="text-primary" />
                      Loan Amount
                    </label>
                    <div className="flex items-center gap-0.5 px-3 py-1.5 rounded-2xl bg-primary/8 shadow-clay-sm min-w-[88px] justify-end">
                      <span className="font-body text-[11px] text-primary font-semibold">₹</span>
                      <input
                        type="number" min={5} max={100} step={1}
                        value={loanAmount}
                        onChange={(e) => {
                          const v = Math.round(Number(e.target.value));
                          if (v >= 5 && v <= 100) setLoanAmount(v);
                        }}
                        className={`${numInputCls} text-primary`}
                      />
                      <span className="font-body text-[11px] text-primary font-semibold ml-0.5">L</span>
                    </div>
                  </div>
                  <Slider
                    value={[loanAmount]} onValueChange={(v) => setLoanAmount(v[0])}
                    min={5} max={100} step={1} className="w-full"
                  />
                  <div className="flex justify-between">
                    <span className="font-body text-[10px] text-muted-foreground">₹5L</span>
                    <span className="font-body text-[10px] text-muted-foreground">₹1Cr</span>
                  </div>
                </div>

                {/* ── Interest Rate ── */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="font-body text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                      <TrendingUp size={13} style={{ color: C_INTEREST }} />
                      Interest Rate
                    </label>
                    <div className="flex items-center gap-0.5 px-3 py-1.5 rounded-2xl shadow-clay-sm min-w-[88px] justify-end"
                      style={{ background: `${C_INTEREST}18` }}>
                      <input
                        type="number" min={12} max={30} step={0.5}
                        value={rate}
                        onChange={(e) => {
                          const v = Number(e.target.value);
                          if (v >= 12 && v <= 30) setRate(v);
                        }}
                        className={numInputCls}
                        style={{ color: C_INTEREST }}
                      />
                      <span className="font-body text-[11px] font-semibold ml-0.5"
                        style={{ color: C_INTEREST }}>
                        %
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[rate]} onValueChange={(v) => setRate(v[0])}
                    min={12} max={30} step={0.5} className="w-full"
                  />
                  <div className="flex justify-between">
                    <span className="font-body text-[10px] text-muted-foreground">12%</span>
                    <span className="font-body text-[10px] text-muted-foreground">30%</span>
                  </div>
                </div>

                {/* ── Loan Tenure ── */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="font-body text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                      <Calendar size={13} className="text-[hsl(260,65%,58%)]" />
                      Loan Tenure
                    </label>
                    <div className="flex items-center gap-0.5 px-3 py-1.5 rounded-2xl bg-[hsl(260,65%,58%)]/10 shadow-clay-sm min-w-[88px] justify-end">
                      <input
                        type="number" min={1} max={20} step={0.5}
                        value={tenure / 12}
                        onChange={(e) => {
                          const yrs = Number(e.target.value);
                          if (yrs >= 1 && yrs <= 20) {
                            setTenure(Math.round(yrs * 12 / 6) * 6);
                          }
                        }}
                        className={`${numInputCls} text-[hsl(260,65%,55%)] w-10`}
                      />
                      <span className="font-body text-[11px] text-[hsl(260,65%,55%)] font-semibold ml-0.5">
                        {tenure === 12 ? "Yr" : "Yrs"}
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[tenure]} onValueChange={(v) => setTenure(v[0])}
                    min={12} max={240} step={6} className="w-full"
                  />
                  <div className="flex justify-between">
                    <span className="font-body text-[10px] text-muted-foreground">1 Yr</span>
                    <span className="font-body text-[10px] text-muted-foreground">20 Yrs</span>
                  </div>
                </div>

                {/* ── Dynamic insight ── */}
                <motion.div
                  key={`${loanAmount}-${rate}-${tenure}`}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-muted/60 border border-border/30"
                >
                  <Lightbulb size={14} className="text-primary shrink-0 mt-0.5" />
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    At {rate}% p.a. over {tenureStr(tenure)}, you'll pay{" "}
                    <span className="text-foreground font-semibold">{multiplier}× your borrowed amount</span>{" "}
                    in total — {fmtFull(totalInterest)} in interest on a {fmtFull(loanAmount * 1_00_000)} loan.
                  </p>
                </motion.div>

              </div>

              {/* ════════ RIGHT — Results ════════ */}
              <div className="p-7 md:p-10 flex flex-col bg-gradient-to-br from-card to-muted/40">

                {/* Hero EMI */}
                <div className="mb-7 pb-6 border-b border-border/30">
                  <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2">
                    Monthly EMI
                  </p>
                  <div className="flex items-end gap-2 flex-wrap">
                    <motion.span
                      key={emi}
                      initial={{ opacity: 0.4, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="font-mono text-5xl md:text-6xl font-bold text-gradient-coral leading-none tracking-tight"
                    >
                      {fmtHero(emi)}
                    </motion.span>
                    <span className="font-body text-sm text-muted-foreground pb-1">/month</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    {tenureStr(tenure)} · {rate}% p.a. · {tenure} EMIs
                  </p>
                </div>

                {/* Donut chart */}
                <div className="relative mb-2">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        key={`${loanAmount}-${rate}-${tenure}`}
                        data={chartData}
                        cx="50%" cy="50%"
                        startAngle={90} endAngle={-270}
                        innerRadius="58%" outerRadius="78%"
                        dataKey="value"
                        strokeWidth={3}
                        stroke="hsl(var(--card))"
                        isAnimationActive
                        animationBegin={0}
                        animationDuration={600}
                        animationEasing="ease-out"
                      >
                        <Cell fill={C_PRINCIPAL} />
                        <Cell fill={C_INTEREST} />
                      </Pie>
                      <Tooltip content={<ChartTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Donut centre — breakdown */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-0.5">
                    <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wide">Principal</p>
                    <p className="font-display text-xl font-extrabold text-foreground leading-none">{principalPct}%</p>
                    <p className="font-body text-[10px] text-muted-foreground">of total</p>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-5 mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: C_PRINCIPAL }} />
                    <span className="font-body text-xs text-muted-foreground">Principal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: C_INTEREST }} />
                    <span className="font-body text-xs text-muted-foreground">Interest</span>
                  </div>
                </div>

                {/* Three stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: "Principal",
                      value: fmtFull(loanAmount * 1_00_000),
                      pct: `${principalPct}%`,
                      bg: `${C_PRINCIPAL}15`,
                      border: C_PRINCIPAL,
                      color: C_PRINCIPAL,
                    },
                    {
                      label: "Interest",
                      value: fmtFull(totalInterest),
                      pct: `${100 - principalPct}%`,
                      bg: `${C_INTEREST}15`,
                      border: C_INTEREST,
                      color: C_INTEREST,
                    },
                    {
                      label: "Total Payable",
                      value: fmtFull(totalPayment),
                      pct: "",
                      bg: "hsl(var(--muted)/0.5)",
                      border: "hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    },
                  ].map((s) => (
                    <motion.div
                      key={s.label}
                      layout
                      className="rounded-2xl p-3 border"
                      style={{ background: s.bg, borderColor: `${s.border}35` }}
                    >
                      <p className="font-body text-[10px] text-muted-foreground mb-1">{s.label}</p>
                      <motion.p
                        key={s.value}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                        className="font-display text-sm font-bold leading-tight"
                        style={{ color: s.color }}
                      >
                        {s.value}
                      </motion.p>
                      {s.pct && (
                        <p className="font-body text-[10px] mt-0.5" style={{ color: `${s.color}bb` }}>
                          {s.pct} of total
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Stacked bar */}
                <div className="mt-5">
                  <div className="h-2 rounded-full overflow-hidden flex">
                    <motion.div
                      className="h-full rounded-l-full"
                      style={{ background: C_PRINCIPAL }}
                      initial={{ width: 0 }}
                      animate={{ width: `${principalPct}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <motion.div
                      className="h-full rounded-r-full flex-1"
                      style={{ background: C_INTEREST }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Amortisation toggle ── */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={() => setShowTable((v) => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-card shadow-clay-sm hover:shadow-clay text-sm font-semibold text-foreground font-body transition-all"
            >
              {showTable ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              {showTable ? "Hide" : "View"} Yearly Amortisation Schedule
            </button>
          </div>

          {/* ── Amortisation table ── */}
          <AnimatePresence>
            {showTable && (
              <motion.div
                key="amortisation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden mt-4"
              >
                <div className="clay-surface overflow-x-auto">
                  {/* Header */}
                  <div className="grid grid-cols-5 min-w-[560px] px-6 py-3.5 bg-muted/50 border-b border-border/30">
                    {["Year", "Opening Bal.", "Principal Paid", "Interest Paid", "Closing Bal."].map((h, i) => (
                      <span key={h} className={`font-body text-[11px] font-semibold text-muted-foreground ${i > 0 ? "text-right" : ""}`}>
                        {h}
                      </span>
                    ))}
                  </div>
                  {/* Rows */}
                  {amortization.map((row, i) => (
                    <motion.div
                      key={row.year}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.02, duration: 0.25 }}
                      className="grid grid-cols-5 min-w-[560px] px-6 py-3.5 border-b border-border/15 last:border-0 hover:bg-muted/20 transition-colors"
                    >
                      <span className="font-body text-xs font-semibold text-foreground">Year {row.year}</span>
                      <span className="font-body text-xs text-muted-foreground text-right">{fmtFull(row.openingBalance)}</span>
                      <span className="font-body text-xs font-medium text-right" style={{ color: C_PRINCIPAL }}>
                        {fmtFull(row.principal)}
                      </span>
                      <span className="font-body text-xs font-medium text-right" style={{ color: C_INTEREST }}>
                        {fmtFull(row.interest)}
                      </span>
                      <span className="font-body text-xs text-foreground text-right">{fmtFull(row.closingBalance)}</span>
                    </motion.div>
                  ))}
                  {/* Totals footer */}
                  <div className="grid grid-cols-5 min-w-[560px] px-6 py-3.5 bg-muted/40 border-t border-border/40">
                    <span className="font-body text-xs font-bold text-foreground">Total</span>
                    <span className="font-body text-xs text-muted-foreground text-right">—</span>
                    <span className="font-body text-xs font-bold text-right" style={{ color: C_PRINCIPAL }}>
                      {fmtFull(loanAmount * 1_00_000)}
                    </span>
                    <span className="font-body text-xs font-bold text-right" style={{ color: C_INTEREST }}>
                      {fmtFull(totalInterest)}
                    </span>
                    <span className="font-body text-xs font-bold text-foreground text-right">—</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Button variant="default" size="lg" className="font-body" asChild>
              <Link to="/eligibility">
                Apply for a Loan <ArrowRight size={15} />
              </Link>
            </Button>
            <p className="font-body text-xs text-muted-foreground mt-3 max-w-lg mx-auto">
              Indicative figures only · Subject to credit assessment · Rates starting from 12% p.a. · RBI-registered NBFC
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
