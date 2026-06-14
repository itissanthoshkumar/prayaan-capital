import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Zap, IndianRupee, Home, CheckCircle } from "lucide-react";

import heroStoreOwner from "@/assets/hero-store-owner.jpg";
import heroRajesh from "@/assets/testimonial-rajesh.jpg";
import heroMeera from "@/assets/testimonial-meera.jpg";
import heroAmit from "@/assets/testimonial-amit.jpg";

/* Hero carousel — real MSME borrowers (male/female mix). Replace with
   licensed/consented customer photography when available. */
const slides = [
  { img: heroStoreOwner, alt: "Shop owner who borrowed from Prayaan Capital", amount: "₹35 Lakhs", product: "Secured Business Loan", place: "Chennai, TN" },
  { img: heroRajesh, alt: "Self-employed borrower in South India", amount: "₹28 Lakhs", product: "Loan Against Property", place: "Salem, TN" },
  { img: heroMeera, alt: "Woman entrepreneur and property owner", amount: "₹45 Lakhs", product: "Loan Against Property", place: "Kochi, KL" },
  { img: heroAmit, alt: "Homeowner funded by Prayaan Capital", amount: "₹18 Lakhs", product: "Housing Loan", place: "Coimbatore, TN" },
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
            <a href="/#emi-calculator">Calculate My EMI</a>
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

      {/* ── Right — full-bleed image (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block relative w-[44%] shrink-0 self-stretch"
      >
        {/* Crossfading carousel of real borrowers */}
        <AnimatePresence initial={false}>
          <motion.img
            key={active}
            src={slide.img}
            alt={slide.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />
        {/* Left edge soft blend into hero bg */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[hsl(var(--hero))] to-transparent" />

        {/* Floating loan badge — bottom left (updates per slide) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="absolute bottom-12 left-8 clay-surface p-3.5 rounded-2xl shadow-clay max-w-[210px]"
        >
          <p className="font-body text-[10px] text-muted-foreground mb-0.5">Recent disbursement</p>
          <p className="font-mono text-sm font-bold text-foreground">{slide.amount}</p>
          <p className="font-body text-[11px] text-muted-foreground">{slide.product} · {slide.place}</p>
        </motion.div>

        {/* Verified badge — top right */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="absolute top-8 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-mint shadow-clay-sm"
        >
          <CheckCircle size={11} className="text-white" />
          <span className="font-body text-[10px] font-bold text-white tracking-wide">Prayaan ✓</span>
        </motion.div>

        {/* Carousel dots */}
        <div className="absolute bottom-5 left-8 flex items-center gap-2 z-10">
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
      </motion.div>
    </section>
  );
};

export default HeroSection;
