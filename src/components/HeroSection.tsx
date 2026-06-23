import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

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

const HeroSection = () => {
  const [slots, setSlots] = useState([0, 1, 2]);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let tick = 0;
    const t = setInterval(() => {
      setSlots((prev) => {
        const next = [...prev];
        next[tick % 3] = (next[tick % 3] + 3) % pool.length;
        return next;
      });
      tick++;
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative lg:min-h-[90vh] flex items-stretch overflow-hidden"
      style={{ background: "#0b1828" }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -left-20 w-[560px] h-[560px] rounded-full blur-[140px] opacity-[0.18]"
          style={{ background: "#00549c" }}
        />
        <div
          className="absolute -bottom-20 right-[5%] w-[440px] h-[440px] rounded-full blur-[120px] opacity-[0.12]"
          style={{ background: "#f0a800" }}
        />
      </div>

      {/* ── Left content ── */}
      <div className="flex-1 pl-5 md:pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pr-5 md:pr-16 pt-28 pb-16 md:py-32 flex flex-col lg:justify-center relative z-10">
        {/* Top badge */}
        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp} className="mb-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/55 font-body">
              RBI REGISTERED NBFC · EST. 2018
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-display text-[2.75rem] md:text-[3.75rem] leading-[1.1] font-extrabold text-white mb-7 max-w-2xl"
        >
          Capital that respects the{" "}
          <span className="text-[#f0a800] italic">hands</span> that{" "}
          <span className="text-[#f0a800] italic">built India.</span>
        </motion.h1>

        {/* Body */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-base md:text-lg text-white/55 max-w-[480px] mb-10 font-body leading-[1.8]"
        >
          Secured business loans for the small and medium enterprises — the manufacturers, traders and
          shopkeepers who form the backbone of our economy. Decisions in 48 hours.
        </motion.p>

        {/* CTAs */}
        <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex items-center gap-4 mb-11">
          <Link
            to="/eligibility"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f0a800] text-[#0b1828] font-bold text-sm shadow-[0_0_28px_rgba(240,168,0,0.40)] hover:shadow-[0_0_40px_rgba(240,168,0,0.60)] hover:bg-[#fbb500] transition-all font-body"
          >
            Apply for a Loan <ArrowRight size={15} />
          </Link>
          <a
            href="/#emi-calculator"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/10 transition-all font-body"
          >
            Calculate EMI <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Stat pills */}
        <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.06]">
            <span className="font-mono font-bold text-[#f0a800] text-sm leading-none">18% p.a.</span>
            <span className="text-[10px] font-semibold text-white/45 uppercase tracking-[0.13em] font-body">Starting Rate</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.06]">
            <CheckCircle size={13} className="text-[#f0a800] shrink-0" />
            <span className="text-[10px] font-semibold text-white/65 uppercase tracking-[0.1em] font-body">RBI Registered NBFC</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="text-[10px] font-semibold text-white/65 uppercase tracking-[0.1em] font-body">48-hr Decisions</span>
          </div>
        </motion.div>
      </div>

      {/* ── Right collage (desktop only) ── */}
      <div className="hidden lg:flex items-stretch w-[46%] shrink-0 pr-10 xl:pr-16 py-16 gap-4 relative z-10">

        {/* Phone mockup */}
        <div className="relative flex-[1.5] rounded-[2.8rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.img
              key={slots[0]}
              src={pool[slots[0]].img}
              alt={pool[slots[0]].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15 pointer-events-none" />

          {/* Verified badge (top inside phone) */}
          <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-sm border border-white/10">
            <CheckCircle size={11} className="text-[#f0a800]" />
            <span className="text-[11px] font-bold text-white font-body">Prayaan ✓</span>
          </div>

        </div>

        {/* Right photo stack */}
        <div className="flex flex-col flex-1 gap-4">
          {/* Top photo — ₹100 Cr+ overlay */}
          <div className="relative flex-1 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={slots[1]}
                src={pool[slots[1]].img}
                alt={pool[slots[1]].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute top-3.5 left-3.5 right-3.5 rounded-xl p-3 bg-black/50 backdrop-blur-sm border border-white/10">
              <p className="font-mono font-bold text-[#f0a800] text-lg leading-none">₹50 Cr+</p>
              <p className="text-[9px] font-semibold text-white/55 uppercase tracking-[0.15em] mt-0.5 font-body">
                Disbursed to date
              </p>
            </div>
          </div>

          {/* Bottom photo */}
          <div className="relative flex-1 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.img
                key={slots[2]}
                src={pool[slots[2]].img}
                alt={pool[slots[2]].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
