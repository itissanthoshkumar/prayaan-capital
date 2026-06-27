import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import {
  Calculator, TrendingUp, IndianRupee, Calendar,
  ArrowRight,
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* ─── Chart colours (hardcoded — SVG doesn't support CSS vars) ─── */
const C_PRINCIPAL = "hsl(208, 100%, 31%)";
const C_INTEREST  = "hsl(42, 100%, 47%)";
/* Brand gold #f0a800 is too light as TEXT on light surfaces (~1.8:1).
   Use this deeper amber for gold-coloured value text → ~5:1 (passes AA). */
const C_GOLD_TEXT = "hsl(42, 100%, 27%)";

/* ─── Full Indian number words ─── */
const W1 = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
            'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
            'Seventeen', 'Eighteen', 'Nineteen'];
const W10 = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

const twoDigits = (n: number): string => {
  if (n === 0) return '';
  if (n < 20) return W1[n];
  return W10[Math.floor(n / 10)] + (n % 10 ? '-' + W1[n % 10] : '');
};

const threeDigits = (n: number): string => {
  if (n === 0) return '';
  if (n < 100) return twoDigits(n);
  const h = Math.floor(n / 100);
  const rem = n % 100;
  return W1[h] + ' Hundred' + (rem ? ' and ' + twoDigits(rem) : '');
};

const amountWords = (rupees: number): string => {
  if (rupees <= 0) return '';
  const lakhs     = Math.floor(rupees / 1_00_000);
  const thousands = Math.floor((rupees % 1_00_000) / 1_000);
  const remainder = rupees % 1_000;
  const parts: string[] = [];
  if (lakhs > 0)     parts.push(twoDigits(lakhs) + ' Lakh' + (lakhs !== 1 ? 's' : ''));
  if (thousands > 0) parts.push(twoDigits(thousands) + ' Thousand');
  if (remainder > 0) parts.push(threeDigits(remainder));
  return parts.join(' ');
};

/* ─── Formatters ─── */
const fmtFull = (v: number): string => `₹${Math.round(v).toLocaleString("en-IN")}`;
const fmtHero = (v: number): string => `₹${Math.round(v).toLocaleString("en-IN")}`;

const tenureStr = (months: number): string => {
  const yrs = months / 12;
  if (Number.isInteger(yrs)) return `${yrs} Yr${yrs > 1 ? "s" : ""}`;
  return `${yrs.toFixed(1)} Yrs`;
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
  const [loanAmount, setLoanAmount] = useState(1_500_000);  // Rupees (3L–30L)
  const [loanInputVal, setLoanInputVal] = useState("15,00,000");
  const [amountWarning, setAmountWarning] = useState("");
  const [rate,       setRate]       = useState(18);  // % p.a. (18–30)
  const [tenure,     setTenure]     = useState(60);  // months: 60 | 84 | 120

  const handleSliderAmount = (v: number) => {
    setLoanAmount(v);
    setLoanInputVal(v.toLocaleString("en-IN"));
    setAmountWarning("");
  };

  const handleInputAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoanInputVal(e.target.value);
  };

  const handleBlurAmount = () => {
    const raw = parseInt(loanInputVal.replace(/,/g, ""), 10);
    if (!isNaN(raw) && raw > 0) {
      if (raw < 3_00_000) {
        setAmountWarning("Minimum loan amount is ₹3,00,000. Setting to minimum.");
        setLoanAmount(3_00_000);
        setLoanInputVal("3,00,000");
      } else if (raw > 30_00_000) {
        setAmountWarning("Maximum loan amount is ₹30,00,000. Setting to maximum.");
        setLoanAmount(30_00_000);
        setLoanInputVal("30,00,000");
      } else {
        setAmountWarning("");
        setLoanAmount(raw);
        setLoanInputVal(raw.toLocaleString("en-IN"));
      }
    } else {
      setAmountWarning("");
      setLoanInputVal(loanAmount.toLocaleString("en-IN"));
    }
  };

  const [rateInputVal, setRateInputVal] = useState("18");

  const handleSliderRate = (v: number) => {
    setRate(v);
    setRateInputVal(String(v));
  };

  const handleInputRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRateInputVal(e.target.value);
  };

  const handleBlurRate = () => {
    const v = parseFloat(rateInputVal);
    if (!isNaN(v)) {
      const clamped = Math.max(18, Math.min(30, Math.round(v * 2) / 2));
      setRate(clamped);
      setRateInputVal(String(clamped));
    } else {
      setRateInputVal(String(rate));
    }
  };


  /* ── Core maths ── */
  const { emi, totalInterest, totalPayment, principalPct } = useMemo(() => {
    const P = loanAmount;
    const r = rate / 12 / 100;
    const n = tenure;
    const emiVal = r > 0
      ? (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : P / n;
    const totalPay = emiVal * n;
    const totalInt = totalPay - P;

    return {
      emi:           Math.round(emiVal),
      totalInterest: Math.round(totalInt),
      totalPayment:  Math.round(totalPay),
      principalPct:  Math.round((P / totalPay) * 100),
    };
  }, [loanAmount, rate, tenure]);

  /* ── Donut data ── */
  const chartData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest",  value: totalInterest },
  ];

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
            Plan Your <br className="sm:hidden" /><span className="text-gradient-coral">Repayment</span>
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
                    <div className="flex items-center gap-0.5 px-3 py-1.5 rounded-2xl bg-primary/8 shadow-clay-sm justify-end">
                      <span className="font-body text-[11px] font-semibold" style={{ color: C_GOLD_TEXT }}>₹</span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={loanInputVal}
                        onChange={handleInputAmount}
                        onBlur={handleBlurAmount}
                        className="w-24 bg-transparent font-display text-sm font-bold outline-none text-right"
                        style={{ color: C_GOLD_TEXT }}
                      />
                    </div>
                  </div>
                  <Slider
                    aria-label="Loan amount"
                    value={[loanAmount]} onValueChange={(v) => handleSliderAmount(v[0])}
                    min={3_00_000} max={30_00_000} step={10_000} className="w-full"
                  />
                  <div className="flex justify-between">
                    <span className="font-body text-[10px] text-muted-foreground">₹3,00,000</span>
                    <span className="font-body text-[10px] text-muted-foreground">₹30,00,000</span>
                  </div>
                  {amountWarning ? (
                    <p className="font-body text-[11px] text-amber-600 text-center leading-snug flex items-center justify-center gap-1">
                      ⚠ {amountWarning}
                    </p>
                  ) : (
                    <p className="font-body text-[11px] font-medium text-center leading-snug" style={{ color: C_GOLD_TEXT }}>
                      {amountWords(loanAmount)}
                    </p>
                  )}
                </div>

                {/* ── Interest Rate ── */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="font-body text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                      <TrendingUp size={13} style={{ color: C_INTEREST }} />
                      Interest Rate
                    </label>
                    <div className="flex items-center gap-0.5 px-3 py-1.5 rounded-2xl shadow-clay-sm justify-end"
                      style={{ background: `${C_INTEREST}18` }}>
                      <input
                        type="text"
                        inputMode="decimal"
                        value={rateInputVal}
                        onChange={handleInputRate}
                        onBlur={handleBlurRate}
                        className="w-10 bg-transparent font-display text-sm font-bold outline-none text-right"
                        style={{ color: C_GOLD_TEXT }}
                      />
                      <span className="font-body text-[11px] font-semibold ml-0.5"
                        style={{ color: C_GOLD_TEXT }}>
                        %
                      </span>
                    </div>
                  </div>
                  <Slider
                    aria-label="Interest rate percent"
                    value={[rate]} onValueChange={(v) => handleSliderRate(v[0])}
                    min={18} max={30} step={0.5} className="w-full"
                  />
                  <div className="flex justify-between">
                    <span className="font-body text-[10px] text-muted-foreground">18%</span>
                    <span className="font-body text-[10px] text-muted-foreground">30%</span>
                  </div>
                </div>

                {/* ── Loan Tenure ── */}
                <div className="space-y-2.5">
                  <label className="font-body text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                    <Calendar size={13} className="text-[hsl(208,90%,45%)]" />
                    Loan Tenure
                  </label>
                  <div className="flex gap-2">
                    {[{ label: "5 Yrs", months: 60 }, { label: "7 Yrs", months: 84 }, { label: "10 Yrs", months: 120 }].map((opt) => (
                      <button
                        key={opt.months}
                        type="button"
                        onClick={() => setTenure(opt.months)}
                        className={`flex-1 py-2.5 rounded-2xl font-body text-sm font-bold transition-all shadow-clay-sm ${
                          tenure === opt.months
                            ? "bg-[hsl(208,90%,45%)] text-white shadow-clay"
                            : "bg-card text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── Monthly EMI (moved below tenure) ── */}
                <div className="pt-5 mt-2 border-t border-border/40">
                  <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.12em] mb-2">
                    Monthly EMI
                  </p>
                  <div className="flex items-end gap-2 flex-wrap">
                    <motion.span
                      key={emi}
                      initial={{ opacity: 0.4, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="font-mono tabular-nums text-4xl md:text-5xl font-bold text-gradient-coral leading-none tracking-tight"
                    >
                      {fmtHero(emi)}
                    </motion.span>
                    <span className="font-body text-sm text-muted-foreground pb-1">/month</span>
                  </div>
                  <p className="font-body text-xs text-muted-foreground mt-2">
                    {tenureStr(tenure)} · {rate}% p.a. · {tenure} EMIs
                  </p>
                </div>

              </div>

              {/* ════════ RIGHT — Results ════════ */}
              <div className="p-7 md:p-10 flex flex-col justify-between gap-6 bg-gradient-to-br from-card to-muted/40">

                {/* ── Top group: donut + legend ── */}
                <div>
                {/* Donut chart */}
                <div className="relative mb-2">
                  <ResponsiveContainer width="100%" height={230}>
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
                <div className="flex items-center justify-center gap-5 mt-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: C_PRINCIPAL }} />
                    <span className="font-body text-xs text-muted-foreground">Principal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: C_INTEREST }} />
                    <span className="font-body text-xs text-muted-foreground">Interest</span>
                  </div>
                </div>
                </div>

                {/* ── Bottom group: breakdown ── */}
                <div>
                {/* Three stat cards */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    {
                      label: "Principal",
                      value: fmtFull(loanAmount),
                      bg: `${C_PRINCIPAL}15`,
                      border: C_PRINCIPAL,
                      color: C_PRINCIPAL,
                    },
                    {
                      label: "Interest",
                      value: fmtFull(totalInterest),
                      bg: `${C_INTEREST}15`,
                      border: C_INTEREST,
                      color: C_GOLD_TEXT,
                    },
                    {
                      label: "Total Payable",
                      value: fmtFull(totalPayment),
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

                {/* CTA */}
                <Button variant="default" size="lg" className="mt-5 w-full font-body" asChild>
                  <Link to="/contact">
                    Get in Touch <ArrowRight size={15} />
                  </Link>
                </Button>
                </div>

              </div>
            </div>

            {/* Disclaimer — inside the calculator frame */}
            <div className="border-t border-border/40 px-7 md:px-10 py-3.5">
              <p className="font-body text-[11px] text-muted-foreground text-center leading-relaxed">
                Indicative figures only · Subject to credit assessment · Attractive rates · RBI-registered NBFC
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
