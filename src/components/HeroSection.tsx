import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Shield, Zap, IndianRupee, Home, CheckCircle } from "lucide-react";

import hero1 from "@/assets/pexels-pexels-user-1476227307-26861411.jpg";
import hero2 from "@/assets/pexels-ravikant-5807481.jpg";
import hero3 from "@/assets/pexels-thilina-alagiyawanna-3266092-37051956.jpg";
import hero4 from "@/assets/pexels-aslam-shah-938590627-20794317.jpg";
import hero5 from "@/assets/pexels-prithiv-raj-1074343528-28371334.jpg";
import hero6 from "@/assets/pexels-akib-pictures-804689963-19179109.jpg";
import hero7 from "@/assets/pexels-varan-6472534.jpg";
import hero8 from "@/assets/pexels-himanshu817-14707127.jpg";
import hero9 from "@/assets/pexels-akib-pictures-804689963-19179112.jpg";
import hero10 from "@/assets/pexels-rk-preetham-2001609-3622671.jpg";
import hero11 from "@/assets/pexels-rk-preetham-2001609-3622670.jpg";
import hero12 from "@/assets/pexels-saman-films-703617-6060893.jpg";
import hero13 from "@/assets/pexels-henry-benjamin-2149128840-30443336.jpg";
import hero14 from "@/assets/pexels-ragu-raja-61455736-11612188.jpg";

/* Dynamic collage — rotating image pool from user-provided photos.
   Pool rotates 3 tiles every ~1.6s. Photos sourced from Pexels. See /credits.txt. */
const pool = [
  { img: hero1, alt: "Entrepreneur at work", amount: "₹5.5 Lakhs", product: "Secured Business Loan", place: "Tamil Nadu" },
  { img: hero2, alt: "Business professional", amount: "₹6.5 Lakhs", product: "Secured Business Loan", place: "Telangana" },
  { img: hero3, alt: "Craftsperson working", amount: "₹4.5 Lakhs", product: "Secured Business Loan", place: "Andhra Pradesh" },
  { img: hero4, alt: "Shop owner", amount: "₹7.5 Lakhs", product: "Loan Against Property", place: "Karnataka" },
  { img: hero5, alt: "Artisan craftsman", amount: "₹5 Lakhs", product: "Secured Business Loan", place: "Tamil Nadu" },
  { img: hero6, alt: "Self-employed professional", amount: "₹6 Lakhs", product: "Secured Business Loan", place: "Andhra Pradesh" },
  { img: hero7, alt: "Business operator", amount: "₹8 Lakhs", product: "Loan Against Property", place: "Telangana" },
  { img: hero8, alt: "Vendor or merchant", amount: "₹4.5 Lakhs", product: "Secured Business Loan", place: "Karnataka" },
  { img: hero9, alt: "Industry worker", amount: "₹7 Lakhs", product: "Loan Against Property", place: "Tamil Nadu" },
  { img: hero10, alt: "Service provider", amount: "₹5.5 Lakhs", product: "Secured Business Loan", place: "Telangana" },
  { img: hero11, alt: "Skilled tradesperson", amount: "₹6.5 Lakhs", product: "Secured Business Loan", place: "Andhra Pradesh" },
  { img: hero12, alt: "Business owner", amount: "₹8.5 Lakhs", product: "Loan Against Property", place: "Karnataka" },
  { img: hero13, alt: "Professional worker", amount: "₹5 Lakhs", product: "Secured Business Loan", place: "Tamil Nadu" },
  { img: hero14, alt: "Entrepreneur", amount: "₹7.5 Lakhs", product: "Loan Against Property", place: "Telangana" },
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
    <div className={`relative overflow-hidden rounded-3xl shadow-2xl ring-1 ring-foreground/10 ${className}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={idx}
          src={item.img}
          alt={item.alt}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />
      <div className="absolute inset-0 bg-primary/8 mix-blend-multiply" />
    </div>
  );
};

const HeroSection = () => {
  const [slots, setSlots] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let tick = 0;
    const t = setInterval(() => {
      const slot = tick % 6;
      setSlots((prev) => {
        const next = [...prev];
        next[slot] = (next[slot] + 6) % pool.length;
        return next;
      });
      tick++;
    }, 1800);
    return () => clearInterval(t);
  }, []);

  const featured = pool[slots[0]];

  return (
    <section className="relative lg:min-h-[88vh] flex items-stretch overflow-hidden bg-hero">
      {/* Soft blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-coral opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[440px] h-[440px] rounded-full bg-gradient-lavender opacity-25 blur-3xl" />
      </div>

      {/* ── Left content (tightened) ── */}
      <div className="flex-1 pl-5 md:pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pr-5 md:pr-12 pt-28 pb-16 md:py-32 flex flex-col lg:justify-center relative z-10">
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card shadow-clay-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="text-[10px] md:text-[11px] font-semibold tracking-[0.14em] uppercase font-body">
              <span className="text-gold-glitter font-bold">PRAYAAN CAPITAL</span>
              <span className="text-muted-foreground"> · RBI REGISTERED NBFC · EST. 2018</span>
            </span>
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl leading-[1.15] font-extrabold text-foreground mb-6 max-w-2xl"
        >
          Capital that respects the <span className="text-gradient-coral italic">hands</span> that{" "}
          <span className="text-gradient-coral">built India.</span>
        </motion.h1>

        <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp}
          className="text-base md:text-lg text-muted-foreground max-w-xl mb-10 font-body leading-[1.8]">
          Tailored financial support for the micro-entrepreneurs and artisans who form the backbone of our economy. Decisions in 48 hours.
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp}
          className="flex items-center gap-5 mb-10">
          <Button variant="hero" size="lg" className="text-sm animate-cta-glow relative overflow-hidden" asChild>
            <Link to="/eligibility">
              <span className="animate-cta-shimmer absolute inset-0 rounded-[inherit]" />
              <span className="relative z-10 flex items-center gap-2">Apply for a Loan <ArrowRight size={15} /></span>
            </Link>
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
            <div key={item.label} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-card/80 shadow-clay border border-foreground/5">
              <span className={`flex items-center justify-center w-5 h-5 rounded-full ${item.tint} text-white shadow-sm`}>
                <item.icon size={11} />
              </span>
              <span className="text-xs font-semibold text-foreground font-body">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Right — dynamic rotating collage (desktop only) ── */}
      <div className="hidden lg:flex items-center justify-center w-[48%] shrink-0 self-stretch pl-4 pr-10 xl:pr-16 py-20 relative z-10">
        <div className="relative w-full max-w-[520px]">
          <div className="grid grid-cols-4 grid-rows-5 gap-3.5 h-[580px]">
            <Tile idx={slots[0]} className="col-span-2 row-span-3" />
            <Tile idx={slots[1]} className="col-span-1 row-span-3" />
            <Tile idx={slots[2]} className="col-span-1 row-span-3" />
            <Tile idx={slots[3]} className="col-span-2 row-span-2" />
            <Tile idx={slots[4]} className="col-span-2 row-span-2" />
          </div>

          {/* Disbursement badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute -bottom-12 -left-8 clay-surface p-4.5 rounded-2xl shadow-2xl max-w-sm border border-foreground/5"
          >
            <p className="font-body text-[8px] text-muted-foreground mb-1 uppercase tracking-widest font-semibold">Live Disbursement</p>
            <AnimatePresence mode="wait">
              <motion.div key={slots[0]} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.5 }}>
                <p className="font-mono tabular-nums text-lg font-bold text-foreground">{featured.amount}</p>
                <p className="font-body text-[10px] text-muted-foreground mt-0.5">{featured.product} · {featured.place}</p>
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
