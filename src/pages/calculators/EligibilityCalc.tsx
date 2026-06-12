import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { useMemo, useState } from "react";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EligibilityCalc = () => {
  const [turnover, setTurnover] = useState(60);
  const [vintage, setVintage] = useState(3);
  const [cibil, setCibil] = useState(720);

  const { eligible, amount, score } = useMemo(() => {
    let s = 0;
    if (turnover >= 40) s += 30; if (turnover >= 100) s += 10;
    if (vintage >= 2) s += 25; if (vintage >= 5) s += 10;
    if (cibil >= 700) s += 25; if (cibil >= 750) s += 10;
    const eligibleAmt = Math.min(50, Math.max(5, Math.round(turnover * 0.6 + vintage * 1.5)));
    return { eligible: s >= 60, amount: eligibleAmt, score: Math.min(100, s) };
  }, [turnover, vintage, cibil]);

  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <AIBadge label="Eligibility Check" />
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-4 mb-3">Loan Eligibility Calculator</h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">AI-driven instant eligibility — no impact on your credit score.</p>
          </motion.div>
            </div>
            <HeroIllustration variant="calculator" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-card rounded-3xl border border-border/60 shadow-card overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-primary via-accent to-[hsl(var(--color-lavender))]" />
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-10 space-y-8 border-r border-border/40">
                <div>
                  <div className="flex justify-between mb-3"><label className="text-sm font-semibold">Annual Turnover</label><span className="font-display font-bold text-primary">₹{turnover}L</span></div>
                  <Slider value={[turnover]} onValueChange={(v) => setTurnover(v[0])} min={10} max={500} step={10} />
                </div>
                <div>
                  <div className="flex justify-between mb-3"><label className="text-sm font-semibold">Business Vintage</label><span className="font-display font-bold text-accent">{vintage} yrs</span></div>
                  <Slider value={[vintage]} onValueChange={(v) => setVintage(v[0])} min={1} max={20} step={1} />
                </div>
                <div>
                  <div className="flex justify-between mb-3"><label className="text-sm font-semibold">CIBIL Score</label><span className="font-display font-bold text-[hsl(var(--color-lavender))]">{cibil}</span></div>
                  <Slider value={[cibil]} onValueChange={(v) => setCibil(v[0])} min={550} max={850} step={5} />
                </div>
              </div>
              <div className="p-6 md:p-10 bg-muted/20 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4"><Sparkles size={16} className="text-primary" /><span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">AI Result</span></div>
                <p className="text-xs text-muted-foreground mb-2">Eligibility score</p>
                <div className="text-5xl font-display font-extrabold text-primary mb-4">{score}<span className="text-2xl text-muted-foreground">/100</span></div>
                <div className={`flex items-center gap-2 text-sm font-semibold mb-6 ${eligible ? "text-accent" : "text-[hsl(var(--color-coral))]"}`}>
                  <CheckCircle2 size={16} /> {eligible ? `Eligible up to ₹${amount}L` : "Borderline — apply for human review"}
                </div>
                <Link to="/eligibility"><Button className="rounded-full w-full">Apply Now</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default EligibilityCalc;
