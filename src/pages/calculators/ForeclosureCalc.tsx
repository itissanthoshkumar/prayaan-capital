import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { useMemo, useState } from "react";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

const ForeclosureCalc = () => {
  const [outstanding, setOutstanding] = useState(15);
  const [paid, setPaid] = useState(12);
  const [rate, setRate] = useState(14);

  const { savings, charges, payable } = useMemo(() => {
    const principal = outstanding * 100000;
    const monthsLeft = 36 - paid;
    const interestSaved = (principal * rate / 100) * (monthsLeft / 12) * 0.55;
    const fc = paid >= 6 ? 0 : principal * 0.04;
    return { savings: Math.round(interestSaved), charges: Math.round(fc), payable: Math.round(principal + fc) };
  }, [outstanding, paid, rate]);

  const fmt = (v: number) => `₹${(v / 100000).toFixed(2)}L`;

  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <AIBadge label="Foreclosure" />
            <h1 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mt-4 mb-3">Foreclosure Calculator</h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl">See how much you save by closing your loan early.</p>
          </motion.div>
            </div>
            <HeroIllustration variant="calculator" />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-card rounded-3xl border border-border/60 shadow-card overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-primary via-accent to-[hsl(var(--color-coral))]" />
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-10 space-y-8 border-r border-border/40">
                <div>
                  <div className="flex justify-between mb-3"><label className="text-sm font-semibold">Outstanding Principal</label><span className="font-display font-bold text-primary">₹{outstanding}L</span></div>
                  <Slider value={[outstanding]} onValueChange={(v) => setOutstanding(v[0])} min={1} max={50} step={1} />
                </div>
                <div>
                  <div className="flex justify-between mb-3"><label className="text-sm font-semibold">EMIs Already Paid</label><span className="font-display font-bold text-accent">{paid}</span></div>
                  <Slider value={[paid]} onValueChange={(v) => setPaid(v[0])} min={1} max={36} step={1} />
                </div>
                <div>
                  <div className="flex justify-between mb-3"><label className="text-sm font-semibold">Interest Rate</label><span className="font-display font-bold text-[hsl(var(--color-lavender))]">{rate}%</span></div>
                  <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={12} max={20} step={0.5} />
                </div>
              </div>
              <div className="p-6 md:p-10 bg-muted/20 space-y-5">
                <div><p className="text-xs uppercase text-muted-foreground tracking-wider">Foreclosure charges</p><p className="text-3xl font-display font-extrabold text-foreground mt-1">{fmt(charges)}</p></div>
                <div><p className="text-xs uppercase text-muted-foreground tracking-wider">Total payable today</p><p className="text-3xl font-display font-extrabold text-primary mt-1">{fmt(payable)}</p></div>
                <div><p className="text-xs uppercase text-muted-foreground tracking-wider">Interest you save</p><p className="text-3xl font-display font-extrabold text-accent mt-1">{fmt(savings)}</p></div>
                <p className="text-[11px] text-muted-foreground">Foreclosure is free after 6 EMIs as per Prayaan Capital's Fair Practice Code.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ForeclosureCalc;
