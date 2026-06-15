import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Zap, IndianRupee, Home, CheckCircle } from "lucide-react";

import heroSalemLady from "@/assets/hero-salem-lady.jpg";
import heroTailor from "@/assets/hero-tailor.jpg";
import heroFarmers from "@/assets/hero-farmers.jpg";
import heroFruitLady from "@/assets/hero-fruit-lady.jpg";
import heroMarketMen from "@/assets/hero-market-men.jpg";
import heroVesselShop from "@/assets/hero-vessel-shop.jpg";
import heroCarpenter from "@/assets/hero-carpenter.jpg";
import heroTelangana from "@/assets/hero-telangana.jpg";
import heroDriver from "@/assets/hero-driver.jpg";
import heroFlowers from "@/assets/hero-flowers.jpg";

/* Dynamic collage — real self-employed customers across TN / AP / TG.
   Pool rotates 3 tiles every ~5s. Photos: Wikimedia Commons, CC BY/BY-SA — see /credits.txt. */
const pool = [
  { img: heroSalemLady, alt: "Woman fruit vendor in Salem, Tamil Nadu", amount: "₹6 Lakhs", product: "Secured Business Loan", place: "Salem, TN" },
  { img: heroTailor, alt: "Tailor at his machine in Ooty, Tamil Nadu", amount: "₹4 Lakhs", product: "Secured Business Loan", place: "Ooty, TN" },
  { img: heroFarmers, alt: "Farmers near Eluru, Andhra Pradesh", amount: "₹8 Lakhs", product: "Loan Against Property", place: "Eluru, AP" },
  { img: heroFruitLady, alt: "Woman fruit-shop owner, Tamil Nadu", amount: "₹7 Lakhs", product: "Secured Business Loan", place: "Madurai, TN" },
  { img: heroMarketMen, alt: "Traders at Koyambedu market, Chennai", amount: "₹9 Lakhs", product: "Loan Against Property", place: "Chennai, TN" },
  { img: heroVesselShop, alt: "Vessel-shop owner, Tamil Nadu", amount: "₹5 Lakhs", product: "Secured Business Loan", place: "Madurai, TN" },
  { img: heroCarpenter, alt: "Carpenter in his workshop", amount: "₹6 Lakhs", product: "Secured Business Loan", place: "Erode, TN" },
  { img: heroTelangana, alt: "Vegetable seller at Nagarkurnool market, Telangana", amount: "₹5 Lakhs", product: "Secured Business Loan", place: "Nagarkurnool, TG" },
  { img: heroDriver, alt: "Auto-rickshaw driver at work", amount: "₹4 Lakhs", product: "Secured Business Loan", place: "Hyderabad, TG" },
  { img: heroFlowers, alt: "Flower sellers at City Market, Bengaluru", amount: "₹7 Lakhs", product: "Loan Against Property", place: "Vijayawada, AP" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const Tile = ({ idx, className }: { idx: number; className: string }) => {
  const item = pool[idx];
  return (
    <div className={`relative overflow-hidden rounded-3xl shadow-clay ring-1 ring-foreground/5 ${className}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={idx}
          src={item.img}
          alt={item.alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/35 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
    </div>
  );
};

const HeroSection = () => {
  const [slots, setSlots] = useState([0, 1, 2]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let tick = 0;
    const t = setInterval(() => {
      const slot = tick % 3;
      setSlots((prev) => {
        const next = [...prev];
        next[slot] = (next[slot] + 3) % pool.length;
        return next;
      });
      tick++;
    }, 1600);
    return () => clearInterval(t);
  }, []);

  const featured = pool[slots[0]];

  return (
    <section className="relative min-h-[88vh] flex items-stretch overflow-hidden bg-hero">
      {/* Soft blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-coral opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[440px] h-[440px] rounded-full bg-gradient-lavender opacity-25 blur-3xl" />
      </div>

      {/* ── Left content (tightened) ── */}
      <div className="flex-1 pl-5 md:pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pr-5 md:pr-12 py-20 md:py-24 flex flex-col justify-center relative z-10">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card shadow-clay-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold text-primary tracking-[0.14em] uppercase font-body">RBI Registered NBFC · Mortgage &amp; Housing Finance</span>
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display text-[2.5rem] leading-[1.05] md:text-[4rem] font-extrabold text-foreground mb-4 max-w-xl"
        >
          Your property has{" "}
          <span className="text-gradient-coral">more to give.</span>
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="text-base md:text-lg text-muted-foreground max-w-md mb-8 font-body leading-[1.7]">
          <span className="font-display font-bold text-foreground/80">Own. Unlock. Grow.</span>{" "}
          Loan Against Property &amp; housing loans up to ₹50L, decisions in 48 hours, doorstep service across South India.
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="flex items-center gap-5 mb-10">
          <Button variant="hero" size="lg" className="text-sm animate-cta-glow" asChild>
            <Link to="/eligibility">Apply for a Loan <ArrowRight size={15} /></Link>
          </Button>
          <a href="/#emi-calculator" className="font-body text-sm font-semibold text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1.5">
            Calculate EMI <ArrowRight size={14} />
          </a>
        </motion.div>

        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp}
          className="flex flex-wrap gap-3">
          {[
            { icon: IndianRupee, label: "From 12% p.a.", tint: "bg-gradient-mint" },
            { icon: Shield, label: "RBI Registered NBFC", tint: "bg-gradient-coral" },
            { icon: Zap, label: "48-hr decisions", tint: "bg-gradient-sunset" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 px-3 py-2 rounded-full bg-card shadow-clay-sm">
              <span className={`flex items-center justify-center w-6 h-6 rounded-full ${item.tint} text-white shadow-clay-sm`}>
                <item.icon size={12} />
              </span>
              <span className="text-[11px] md:text-xs font-semibold text-foreground font-body tracking-wide">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Right — dynamic rotating collage (desktop only) ── */}
      <div className="hidden lg:flex items-center justify-center w-[46%] shrink-0 self-stretch pl-4 pr-10 xl:pr-16 py-20 relative z-10">
        <div className="relative w-full max-w-[460px]">
          <div className="grid grid-cols-3 grid-rows-5 gap-3 h-[520px]">
            <Tile idx={slots[0]} className="col-span-2 row-span-5" />
            <Tile idx={slots[1]} className="col-span-1 row-span-3" />
            <Tile idx={slots[2]} className="col-span-1 row-span-2" />
          </div>

          {/* Disbursement badge (follows featured tile) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-4 -left-4 clay-surface p-3.5 rounded-2xl shadow-clay-lg max-w-[210px]"
          >
            <p className="font-body text-[10px] text-muted-foreground mb-0.5">Recent disbursement · indicative</p>
            <AnimatePresence mode="wait">
              <motion.div key={slots[0]} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
                <p className="font-mono tabular-nums text-sm font-bold text-foreground">{featured.amount}</p>
                <p className="font-body text-[11px] text-muted-foreground">{featured.product} · {featured.place}</p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Verified badge */}
          <div className="absolute -top-3 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-mint shadow-clay-sm">
            <CheckCircle size={11} className="text-white" />
            <span className="font-body text-[10px] font-bold text-white tracking-wide">Prayaan ✓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
