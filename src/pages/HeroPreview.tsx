import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

import hero1 from "@/assets/pexels-pexels-user-1476227307-26861411.jpg";
import hero2 from "@/assets/pexels-ravikant-5807481.jpg";
import hero4 from "@/assets/pexels-aslam-shah-938590627-20794317.jpg";

interface VariantStyle {
  id: string;
  name: string;
  bg: string;
  blob1: string;
  blob2: string;
  badgeBorder: string;
  badgeBg: string;
  badgeText: string;
  h1: string;
  gold: string;
  body: string;
  ctaOutBorder: string;
  ctaOutText: string;
  pillBorder: string;
  pillBg: string;
  pillText: string;
  pillAccent: string;
  light?: boolean;
}

const VARIANTS: VariantStyle[] = [
  {
    id: "v1",
    name: "Midnight Navy",
    bg: "linear-gradient(135deg, #001428 0%, #002248 55%, #001830 100%)",
    blob1: "#00549c",
    blob2: "#f0a800",
    badgeBorder: "rgba(240,168,0,0.32)",
    badgeBg: "rgba(240,168,0,0.09)",
    badgeText: "#f0a800",
    h1: "#ffffff",
    gold: "#f0a800",
    body: "rgba(255,255,255,0.52)",
    ctaOutBorder: "rgba(255,255,255,0.22)",
    ctaOutText: "rgba(255,255,255,0.88)",
    pillBorder: "rgba(255,255,255,0.10)",
    pillBg: "rgba(255,255,255,0.06)",
    pillText: "rgba(255,255,255,0.65)",
    pillAccent: "#f0a800",
  },
  {
    id: "v2",
    name: "Bold Brand Blue",
    bg: "linear-gradient(135deg, #002d5e 0%, #00549c 55%, #003d7a 100%)",
    blob1: "#0066bb",
    blob2: "#f0a800",
    badgeBorder: "rgba(255,255,255,0.28)",
    badgeBg: "rgba(255,255,255,0.12)",
    badgeText: "#ffffff",
    h1: "#ffffff",
    gold: "#f0a800",
    body: "rgba(255,255,255,0.65)",
    ctaOutBorder: "rgba(255,255,255,0.38)",
    ctaOutText: "#ffffff",
    pillBorder: "rgba(255,255,255,0.22)",
    pillBg: "rgba(255,255,255,0.10)",
    pillText: "#ffffff",
    pillAccent: "#f0a800",
  },
  {
    id: "v3",
    name: "White & Gold (Editorial)",
    bg: "linear-gradient(135deg, #f8fcff 0%, #eef5fd 60%, #f4f9ff 100%)",
    blob1: "rgba(0,84,156,0.30)",
    blob2: "rgba(240,168,0,0.25)",
    badgeBorder: "rgba(0,84,156,0.22)",
    badgeBg: "rgba(0,84,156,0.07)",
    badgeText: "#00549c",
    h1: "#001428",
    gold: "#b56d00",
    body: "rgba(0,20,40,0.52)",
    ctaOutBorder: "rgba(0,84,156,0.28)",
    ctaOutText: "#00549c",
    pillBorder: "rgba(0,84,156,0.14)",
    pillBg: "rgba(0,84,156,0.05)",
    pillText: "rgba(0,20,40,0.58)",
    pillAccent: "#b56d00",
    light: true,
  },
  {
    id: "v4",
    name: "Deep Azure Diagonal",
    bg: "linear-gradient(120deg, #001f50 0%, #003278 40%, #004d9a 100%)",
    blob1: "#0066cc",
    blob2: "#f0a800",
    badgeBorder: "rgba(255,255,255,0.24)",
    badgeBg: "rgba(255,255,255,0.10)",
    badgeText: "rgba(255,255,255,0.90)",
    h1: "#ffffff",
    gold: "#f0a800",
    body: "rgba(255,255,255,0.58)",
    ctaOutBorder: "rgba(255,255,255,0.30)",
    ctaOutText: "#ffffff",
    pillBorder: "rgba(255,255,255,0.16)",
    pillBg: "rgba(255,255,255,0.08)",
    pillText: "rgba(255,255,255,0.70)",
    pillAccent: "#f0a800",
  },
  {
    id: "v5",
    name: "Blue-to-Dark Dusk",
    bg: "linear-gradient(155deg, #00549c 0%, #003070 45%, #001535 100%)",
    blob1: "#0070c0",
    blob2: "#f0a800",
    badgeBorder: "rgba(240,168,0,0.35)",
    badgeBg: "rgba(240,168,0,0.10)",
    badgeText: "#f0c040",
    h1: "#ffffff",
    gold: "#f0a800",
    body: "rgba(255,255,255,0.54)",
    ctaOutBorder: "rgba(255,255,255,0.24)",
    ctaOutText: "rgba(255,255,255,0.88)",
    pillBorder: "rgba(240,168,0,0.22)",
    pillBg: "rgba(240,168,0,0.07)",
    pillText: "rgba(255,255,255,0.68)",
    pillAccent: "#f0a800",
  },
];

const HeroVariantSection = ({ v, index }: { v: VariantStyle; index: number }) => (
  <section
    id={v.id}
    className="relative min-h-[92vh] flex items-stretch overflow-hidden scroll-mt-12"
    style={{ background: v.bg }}
  >
    {/* Ambient blobs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -left-20 w-[560px] h-[560px] rounded-full blur-[140px] opacity-[0.25]"
        style={{ background: v.blob1 }}
      />
      <div
        className="absolute -bottom-20 right-[5%] w-[440px] h-[440px] rounded-full blur-[120px] opacity-[0.18]"
        style={{ background: v.blob2 }}
      />
    </div>

    {/* Variant label */}
    <div className="absolute top-5 right-6 z-20 flex items-center gap-3">
      <span
        className="text-[11px] font-bold tracking-[0.18em] uppercase opacity-50"
        style={{ color: v.light ? "#001428" : "#ffffff" }}
      >
        V{index + 1} — {v.name}
      </span>
      <button
        onClick={() => window.alert(`Tell Claude: "Apply hero V${index + 1} — ${v.name}"`)}
        className="px-4 py-1.5 rounded-full text-[11px] font-bold cursor-pointer border-none"
        style={{ background: v.gold, color: "#0d1f30" }}
      >
        Use V{index + 1} →
      </button>
    </div>

    {/* Left content */}
    <div className="flex-1 pl-5 md:pl-[max(1.25rem,calc((100vw-1280px)/2+1.25rem))] pr-5 md:pr-16 pt-28 pb-16 md:py-32 flex flex-col lg:justify-center relative z-10">
      {/* Badge */}
      <div className="mb-7">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full"
          style={{ border: `1px solid ${v.badgeBorder}`, background: v.badgeBg }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#22c55e]" />
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase font-body" style={{ color: v.badgeText }}>
            RBI REGISTERED NBFC · EST. 2018
          </span>
        </div>
      </div>

      {/* Headline */}
      <h1
        className="font-display text-[2.75rem] md:text-[3.75rem] leading-[1.1] font-extrabold mb-7 max-w-2xl"
        style={{ color: v.h1 }}
      >
        Capital that respects the{" "}
        <span style={{ color: v.gold }} className="italic">hands</span> that{" "}
        <span style={{ color: v.gold }} className="italic">built India.</span>
      </h1>

      {/* Body */}
      <p className="text-base md:text-lg max-w-[480px] mb-10 font-body leading-[1.8]" style={{ color: v.body }}>
        Secured business loans for the small and medium enterprises — the manufacturers,
        traders and shopkeepers who form the backbone of our economy. Decisions in 48 hours.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-4 mb-11">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm font-body transition-all"
          style={{ background: v.gold, color: "#0d2137" }}
        >
          Get in Touch <ArrowRight size={15} />
        </Link>
        <a
          href="/#emi-calculator"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm font-body transition-all"
          style={{ border: `1px solid ${v.ctaOutBorder}`, color: v.ctaOutText }}
        >
          Calculate EMI <ArrowRight size={15} />
        </a>
      </div>

      {/* Stat pills */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full" style={{ border: `1px solid ${v.pillBorder}`, background: v.pillBg }}>
          <span className="font-mono font-bold text-sm leading-none" style={{ color: v.pillAccent }}>18% p.a.</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.13em] font-body" style={{ color: v.pillText }}>Starting Rate</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full" style={{ border: `1px solid ${v.pillBorder}`, background: v.pillBg }}>
          <CheckCircle size={13} style={{ color: v.pillAccent }} className="shrink-0" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] font-body" style={{ color: v.pillText }}>RBI Registered NBFC</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2.5 rounded-full" style={{ border: `1px solid ${v.pillBorder}`, background: v.pillBg }}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.1em] font-body" style={{ color: v.pillText }}>48-hr Decisions</span>
        </div>
      </div>
    </div>

    {/* Right collage — desktop only */}
    <div className="hidden lg:flex items-stretch w-[46%] shrink-0 pr-10 xl:pr-16 py-16 gap-4 relative z-10">
      <div className="relative flex-[1.5] rounded-[2.8rem] overflow-hidden shadow-2xl ring-1 ring-white/10">
        <img src={hero1} alt="Entrepreneur at work" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15 pointer-events-none" />
        <div className="absolute top-5 left-5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/45 backdrop-blur-sm border border-white/10">
          <CheckCircle size={11} style={{ color: v.gold }} />
          <span className="text-[11px] font-bold text-white font-body">Prayaan ✓</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div className="relative flex-1 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
          <img src={hero2} alt="Business professional" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          <div className="absolute top-3.5 left-3.5 right-3.5 rounded-xl p-3 bg-black/50 backdrop-blur-sm border border-white/10">
            <p className="font-mono font-bold text-lg leading-none" style={{ color: v.gold }}>₹50 Cr+</p>
            <p className="text-[9px] font-semibold text-white/55 uppercase tracking-[0.15em] mt-0.5 font-body">Disbursed to date</p>
          </div>
        </div>
        <div className="relative flex-1 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl">
          <img src={hero4} alt="Shop owner" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);

const HeroPreview = () => (
  <div>
    {/* Sticky jump nav */}
    <div className="sticky top-0 z-50 flex items-center justify-center gap-2 py-2.5 px-4 bg-black/85 backdrop-blur-sm border-b border-white/10">
      <span className="text-[11px] text-white/50 font-semibold uppercase tracking-widest mr-2">Hero Variants</span>
      {VARIANTS.map((v, i) => (
        <a
          key={v.id}
          href={`#${v.id}`}
          className="px-3 py-1 rounded-full text-[11px] font-bold text-white/70 hover:text-white hover:bg-white/10 transition-all"
        >
          V{i + 1}
        </a>
      ))}
      <span className="mx-2 text-white/20">|</span>
      <Link to="/" className="text-[11px] text-white/50 hover:text-white/80 transition-colors">← Back to site</Link>
    </div>

    {VARIANTS.map((v, i) => (
      <HeroVariantSection key={v.id} v={v} index={i} />
    ))}
  </div>
);

export default HeroPreview;
