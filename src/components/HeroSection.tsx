import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Zap, IndianRupee, Home, CheckCircle } from "lucide-react";

import heroFruitLady from "@/assets/hero-fruit-lady.jpg";
import heroMarketMen from "@/assets/hero-market-men.jpg";
import heroSalemLady from "@/assets/hero-salem-lady.jpg";
import heroTailor from "@/assets/hero-tailor.jpg";
import heroFarmers from "@/assets/hero-farmers.jpg";

/* Hero carousel — real South-Indian self-employed customers across TN / AP / TG
   (shopkeepers, tailors, farmers, traders; male/female mix). Amounts reflect our
   ~₹7L average ticket. Photos: Wikimedia Commons, CC BY/BY-SA — see /credits.txt. */
const slides = [
  { img: heroSalemLady, alt: "Woman fruit vendor running her shop in Salem, Tamil Nadu", amount: "₹6 Lakhs", product: "Secured Business Loan", place: "Salem, TN" },
  { img: heroTailor, alt: "Tailor at his sewing machine in Ooty, Tamil Nadu", amount: "₹4 Lakhs", product: "Secured Business Loan", place: "Ooty, TN" },
  { img: heroFarmers, alt: "Farmers in a village near Eluru, Andhra Pradesh", amount: "₹8 Lakhs", product: "Loan Against Property", place: "Eluru, AP" },
  { img: heroFruitLady, alt: "Woman fruit-shop owner at her stall in Tamil Nadu", amount: "₹7 Lakhs", product: "Secured Business Loan", place: "Madurai, TN" },
  { img: heroMarketMen, alt: "Traders at Koyambedu wholesale market, Chennai", amount: "₹9 Lakhs", product: "Loan Against Property", place: "Chennai, TN" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const HeroSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setActive((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-stretch overflow-hidden bg-hero">
      {/* Puffy clay blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-coral opacity-40 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[480px] h-[480px] rounded-full bg-gradient-lavender opacity-40 blur-3xl" />

        {/* Floating clay shapes */}
        <motion.div
          aria-hidden
          className="hidden md:block absolute top-24 right-[48%] w-16 h-16 rounded-3xl bg-gradient-coral shadow-clay-primary"
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="hidden md:block absolute bottom-24 left-[8%] w-20 h-20 rounded-full bg-gradient-mint shadow-clay-accent"
          animate={{ y: [0, 16, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ── Left content ── */}
      <div className="flex-1 pl-5 md:pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pr-5 md:pr-12 py-32 md:py-40 flex flex-col justify-center relative z-10">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 md:mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card shadow-clay-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold text-primary tracking-[0.15em] uppercase font-body">RBI Registered NBFC</span>
            <span className="w-px h-3 bg-border"></span>
            <span className="text-[10px] md:text-[11px] font-medium text-muted-foreground tracking-[0.15em] uppercase font-body">Mortgage & Housing Finance</span>
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display text-[2.25rem] leading-[1.1] sm:text-5xl md:text-[4rem] lg:text-[3.25rem] xl:text-[4rem] font-extrabold text-foreground md:leading-[1.05] mb-5 md:mb-8 max-w-xl"
        >
          Your property has{" "}
          <span className="text-gradient-coral">more to give.</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg md:text-2xl font-display font-bold text-foreground/75 max-w-md mb-4 leading-snug tracking-wide"
        >
          Own.&nbsp; Unlock.&nbsp; Grow.
        </motion.p>

        <motion.p
          custom={2.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-[15px] md:text-lg text-muted-foreground max-w-md mb-10 md:mb-12 font-body leading-[1.7]"
        >
          Loan Against Property and housing loans from ₹10L to ₹1Cr. Tenures up to 20 years. AI-backed decisions in 48 hours, with doorstep service across India.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-14"
        >
          <Button variant="hero" size="lg" className="text-sm">
            Apply for a Loan <ArrowRight size={15} />
          </Button>
          <Button variant="hero-outline" size="lg" className="text-sm" asChild>
            <a href="/#emi-calculator">Calculate EMI</a>
          </Button>
        </motion.div>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 md:gap-3"
        >
          {[
            { icon: IndianRupee, label: "From 12% p.a.", tint: "bg-gradient-mint" },
            { icon: Shield, label: "RBI Registered NBFC", tint: "bg-gradient-coral" },
            { icon: Home, label: "Up to 60% LTV", tint: "bg-gradient-lavender" },
            { icon: Zap, label: "48-hr AI Decisions", tint: "bg-gradient-sunset" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-card shadow-clay-sm"
            >
              <span className={`flex items-center justify-center w-6 h-6 rounded-full ${item.tint} text-white shadow-clay-sm`}>
                <item.icon size={12} />
              </span>
              <span className="text-[11px] md:text-xs font-semibold text-foreground font-body tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Right — framed carousel (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:flex items-center justify-center w-[46%] shrink-0 self-stretch pl-4 pr-10 xl:pr-16 py-24 relative z-10"
      >
        <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-clay-lg ring-1 ring-foreground/5 bg-card">
          {/* Crossfading carousel of real customers — contained within the frame */}
          <AnimatePresence initial={false}>
            <motion.img
              key={active}
              src={slide.img}
              alt={slide.alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Bottom gradient for badge legibility */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/75 to-transparent" />

          {/* Verified badge — top right, inside frame */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-mint shadow-clay-sm">
            <CheckCircle size={11} className="text-white" />
            <span className="font-body text-[10px] font-bold text-white tracking-wide">Prayaan ✓</span>
          </div>

          {/* Disbursement badge — bottom left, inside frame */}
          <motion.div
            key={`badge-${active}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-12 left-4 clay-surface p-3 rounded-2xl shadow-clay max-w-[200px]"
          >
            <p className="font-body text-[10px] text-muted-foreground mb-0.5">Recent disbursement</p>
            <p className="font-mono tabular-nums text-sm font-bold text-foreground">{slide.amount}</p>
            <p className="font-body text-[11px] text-muted-foreground">{slide.product} · {slide.place}</p>
          </motion.div>

          {/* Carousel dots — inside frame */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
            {slides.map((s, i) => (
              <button
                key={s.place}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.product} story from ${s.place}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
