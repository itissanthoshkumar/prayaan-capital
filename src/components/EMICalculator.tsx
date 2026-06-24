import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Calculator, TrendingUp, IndianRupee, Calendar, ArrowRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/* ─── Brand colours ─── */
const BLUE   = "hsl(208, 100%, 31%)";
const GOLD   = "hsl(42, 100%, 50%)";
const GOLD_L = "hsl(42, 100%, 62%)";

/* ─── Amount in words ─── */
const ONES = ['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine',
              'Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen',
              'Seventeen','Eighteen','Nineteen'];
const TENS = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
const twoDigit   = (x: number) => x < 20 ? ONES[x] : TENS[Math.floor(x/10)] + (x%10 ? ' '+ONES[x%10] : '');
const threeDigit = (x: number) => { const h=Math.floor(x/100), r=x%100; const p=[]; if(h) p.push(`${ONES[h]} Hundred`); if(r) p.push(twoDigit(r)); return p.join(' '); };
const rupeesToWords = (n: number): string => {
  if (n<=0) return '';
  const lakh=Math.floor(n/1_00_000), thou=Math.floor((n%1_00_000)/1_000), rem=n%1_000;
  const p: string[]=[];
  if (lakh) p.push(`${twoDigit(lakh)} Lakh${lakh>1?'s':''}`);
  if (thou)  p.push(`${twoDigit(thou)} Thousand`);
  if (rem)   p.push(threeDigit(rem));
  return p.join(' ');
};

/* ─── Formatters ─── */
const fmtFull = (v: number): string => {
  const n = Math.round(v);
  if (n >= 1_00_00_000) { const c=n/1_00_00_000; return `₹${c===Math.floor(c)?c.toFixed(0):c.toFixed(2)} Cr`; }
  if (n >= 1_00_000)    { const l=n/1_00_000;    return `₹${l===Math.floor(l)?l.toFixed(0):l.toFixed(2)}L`; }
  return `₹${n.toLocaleString('en-IN')}`;
};
const fmtHero = (v: number): string => {
  const n = Math.round(v);
  if (n>=1_00_00_000) return `₹${(n/1_00_00_000).toFixed(1)}Cr`;
  if (n>=10_00_000)   return `₹${(n/1_00_000).toFixed(0)}L`;
  if (n>=1_00_000)    return `₹${(n/1_00_000).toFixed(1)}L`;
  if (n>=10_000)      return `₹${Math.round(n/1_000)}K`;
  if (n>=1_000)       return `₹${(n/1_000).toFixed(1)}K`;
  return `₹${n}`;
};
const tenureStr = (m: number) => { const y=m/12; return Number.isInteger(y)?`${y} Yr${y>1?'s':''}`:` ${y.toFixed(1)} Yrs`; };

/* ─── Recharts tooltip ─── */
const ChartTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ name: string; value: number }> }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-2xl px-4 py-2.5 text-xs font-body" style={{ background: "hsl(208 100% 18%)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }}>
      <p className="font-semibold mb-0.5">{payload[0].name}</p>
      <p style={{ color: GOLD_L }}>{fmtFull(payload[0].value)}</p>
    </div>
  );
};

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════ */
const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(1500000);
  const [loanInput,  setLoanInput]  = useState('15,00,000');
  const [rate,       setRate]       = useState(18);
  const [rateInput,  setRateInput]  = useState('18');
  const [tenure,     setTenure]     = useState(60);

  const { emi, totalInterest, totalPayment, principalPct } = useMemo(() => {
    const P=loanAmount, r=rate/12/100, n=tenure;
    const emiVal = r>0 ? (P*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1) : P/n;
    const totalPay=emiVal*n, totalInt=totalPay-P;
    return { emi: Math.round(emiVal), totalInterest: Math.round(totalInt), totalPayment: Math.round(totalPay), principalPct: Math.round((P/totalPay)*100) };
  }, [loanAmount, rate, tenure]);

  const chartData = [{ name: "Principal", value: loanAmount }, { name: "Interest", value: totalInterest }];

  /* ── inline style helpers ── */
  const glass    = { background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" } as const;
  const glassSm  = { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" } as const;
  const dimText  = { color: "rgba(255,255,255,0.55)" } as const;
  const faintTxt = { color: "rgba(255,255,255,0.35)" } as const;

  return (
    <section id="emi-calculator" className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: "hsl(208 100% 16%)" }}>

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[500px] rounded-full blur-[130px]"
          style={{ background: "hsl(208 100% 38%)", opacity: 0.18 }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full blur-[110px]"
          style={{ background: GOLD, opacity: 0.10 }} />
      </div>

      <div className="container mx-auto px-5 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.12em] font-body mb-5"
            style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)", color: GOLD_L }}>
            <Calculator size={12} /> EMI Calculator
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-4 text-white">
            Plan Your{" "}
            <span style={{ color: GOLD }}>Repayment</span>
          </h2>
          <p className="font-body text-base md:text-lg max-w-lg mx-auto" style={dimText}>
            Move the sliders or type a value to see your monthly EMI and full cost breakdown instantly.
          </p>
        </motion.div>

        {/* ── Main card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.65 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 32px 72px hsl(208 100% 6% / 0.7), 0 8px 24px hsl(208 100% 6% / 0.5), inset 0 1px 0 rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="grid md:grid-cols-[5fr_6fr]">

              {/* ════════ LEFT ════════ */}
              <div className="p-7 md:p-10 flex flex-col gap-7"
                style={{ background: "hsl(208 100% 20%)", borderRight: "1px solid rgba(255,255,255,0.08)" }}>

                <h3 className="font-display text-base font-bold text-white">Loan Details</h3>

                {/* Loan Amount */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="font-body text-sm font-medium flex items-center gap-1.5" style={dimText}>
                      <IndianRupee size={13} style={{ color: GOLD_L }} /> Loan Amount
                    </label>
                    <div className="flex items-center gap-0.5 px-3 py-1.5 rounded-2xl min-w-[130px] justify-end" style={glass}>
                      <span className="font-body text-[11px] font-semibold" style={{ color: GOLD_L }}>₹</span>
                      <input type="text" inputMode="numeric" value={loanInput}
                        onFocus={(e) => e.target.select()}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/[^0-9]/g, '');
                          if (!raw) { setLoanInput(''); return; }
                          const v = parseInt(raw);
                          setLoanInput(v.toLocaleString('en-IN'));
                          setLoanAmount(Math.max(3_00_000, Math.min(50_00_000, v)));
                        }}
                        onBlur={() => {
                          const v = parseInt(loanInput.replace(/[^0-9]/g, '')) || 3_00_000;
                          const c = Math.max(3_00_000, Math.min(50_00_000, v));
                          setLoanAmount(c); setLoanInput(c.toLocaleString('en-IN'));
                        }}
                        className="w-24 bg-transparent font-display text-sm font-bold outline-none text-right"
                        style={{ color: GOLD_L }}
                      />
                    </div>
                  </div>
                  <Slider aria-label="Loan amount" value={[loanAmount]}
                    onValueChange={(v) => { setLoanAmount(v[0]); setLoanInput(v[0].toLocaleString('en-IN')); }}
                    min={300000} max={5000000} step={100000} className="w-full" />
                  <div className="flex justify-between">
                    <span className="font-body text-[10px]" style={faintTxt}>₹3L</span>
                    <span className="font-body text-[10px]" style={faintTxt}>₹50L</span>
                  </div>
                  <p className="font-body text-[11px] text-center leading-snug" style={{ color: GOLD_L }}>
                    {rupeesToWords(loanAmount)}
                  </p>
                </div>

                {/* Interest Rate */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="font-body text-sm font-medium flex items-center gap-1.5" style={dimText}>
                      <TrendingUp size={13} style={{ color: GOLD_L }} /> Interest Rate
                    </label>
                    <div className="flex items-center gap-0.5 px-3 py-1.5 rounded-2xl min-w-[88px] justify-end" style={glass}>
                      <input type="text" inputMode="decimal" value={rateInput}
                        onFocus={(e) => e.target.select()}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/[^0-9.]/g, '');
                          setRateInput(raw);
                          const v = parseFloat(raw);
                          if (!isNaN(v) && v >= 18 && v <= 30) setRate(v);
                        }}
                        onBlur={() => {
                          const v = parseFloat(rateInput);
                          const c = isNaN(v) ? 18 : Math.max(18, Math.min(30, v));
                          setRate(c); setRateInput(String(c));
                        }}
                        className="w-12 bg-transparent font-display text-sm font-bold outline-none text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
                        style={{ color: GOLD_L }}
                      />
                      <span className="font-body text-[11px] font-semibold ml-0.5" style={{ color: GOLD_L }}>%</span>
                    </div>
                  </div>
                  <Slider aria-label="Interest rate" value={[rate]}
                    onValueChange={(v) => { setRate(v[0]); setRateInput(String(v[0])); }}
                    min={18} max={30} step={0.5} className="w-full" />
                  <div className="flex justify-between">
                    <span className="font-body text-[10px]" style={faintTxt}>18%</span>
                    <span className="font-body text-[10px]" style={faintTxt}>30%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div className="space-y-2.5">
                  <label className="font-body text-sm font-medium flex items-center gap-1.5" style={dimText}>
                    <Calendar size={13} style={{ color: GOLD_L }} /> Loan Tenure
                  </label>
                  <div className="flex gap-2">
                    {[{ label: "5 Yrs", months: 60 }, { label: "7 Yrs", months: 84 }, { label: "10 Yrs", months: 120 }].map((opt) => (
                      <button key={opt.months} type="button" onClick={() => setTenure(opt.months)}
                        className="flex-1 py-2.5 rounded-2xl font-body text-sm font-bold transition-all"
                        style={tenure === opt.months
                          ? { background: GOLD, color: "hsl(208 100% 14%)" }
                          : { ...glass, color: "rgba(255,255,255,0.65)" }
                        }
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stat cards at bottom */}
                <div className="mt-auto space-y-3">
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "Principal",     value: fmtFull(loanAmount),    pct: `${principalPct}%`,         color: "hsl(208,90%,70%)" },
                      { label: "Interest",      value: fmtFull(totalInterest), pct: `${100-principalPct}%`,     color: GOLD_L },
                      { label: "Total Payable", value: fmtFull(totalPayment),  pct: "",                         color: "white" },
                    ].map((s) => (
                      <motion.div key={s.label} layout className="rounded-2xl p-3" style={glassSm}>
                        <p className="font-body text-[10px] mb-1" style={faintTxt}>{s.label}</p>
                        <motion.p key={s.value} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}
                          transition={{ duration: 0.25 }} className="font-display text-sm font-bold leading-tight"
                          style={{ color: s.color }}>
                          {s.value}
                        </motion.p>
                        {s.pct && <p className="font-body text-[10px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{s.pct} of total</p>}
                      </motion.div>
                    ))}
                  </div>
                  {/* Stacked bar */}
                  <div className="h-2 rounded-full overflow-hidden flex" style={{ background: "rgba(255,255,255,0.1)" }}>
                    <motion.div className="h-full" style={{ background: BLUE }}
                      initial={{ width: 0 }} animate={{ width: `${principalPct}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }} />
                    <motion.div className="h-full flex-1" style={{ background: GOLD }}
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }} />
                  </div>
                </div>

              </div>

              {/* ════════ RIGHT ════════ */}
              <div className="p-7 md:p-10 flex flex-col" style={{ background: "hsl(208 100% 24%)" }}>

                {/* Hero EMI */}
                <div className="mb-7 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <p className="font-body text-xs font-semibold uppercase tracking-[0.12em] mb-2" style={dimText}>
                    Monthly EMI
                  </p>
                  <div className="flex items-end gap-2 flex-wrap">
                    <motion.span key={emi}
                      initial={{ opacity: 0.4, y: 8 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="font-mono tabular-nums text-5xl md:text-6xl font-bold leading-none tracking-tight"
                      style={{ color: GOLD }}>
                      {fmtHero(emi)}
                    </motion.span>
                    <span className="font-body text-sm pb-1" style={dimText}>/month</span>
                  </div>
                  <p className="font-body text-xs mt-2" style={faintTxt}>
                    {tenureStr(tenure)} · {rate}% p.a. · {tenure} EMIs
                  </p>
                </div>

                {/* Donut chart */}
                <div className="relative mb-2 flex-1 min-h-[180px]">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie key={`${loanAmount}-${rate}-${tenure}`} data={chartData}
                        cx="50%" cy="50%" startAngle={90} endAngle={-270}
                        innerRadius="58%" outerRadius="78%" dataKey="value"
                        strokeWidth={3} stroke="hsl(208 100% 24%)"
                        isAnimationActive animationBegin={0} animationDuration={600} animationEasing="ease-out">
                        <Cell fill={BLUE} />
                        <Cell fill={GOLD} />
                      </Pie>
                      <Tooltip content={<ChartTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-0.5">
                    <p className="font-body text-[10px] uppercase tracking-wide" style={faintTxt}>Principal</p>
                    <p className="font-display text-xl font-extrabold leading-none text-white">{principalPct}%</p>
                    <p className="font-body text-[10px]" style={faintTxt}>of total</p>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-5 mt-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: BLUE }} />
                    <span className="font-body text-xs" style={dimText}>Principal</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: GOLD }} />
                    <span className="font-body text-xs" style={dimText}>Interest</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <Button variant="default" size="lg" className="font-body" asChild>
              <Link to="/contact">Get in Touch <ArrowRight size={15} /></Link>
            </Button>
            <p className="font-body text-xs mt-3 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.3)" }}>
              Indicative figures only · Subject to credit assessment · Rates starting from 18% p.a. · RBI-registered NBFC
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default EMICalculator;
