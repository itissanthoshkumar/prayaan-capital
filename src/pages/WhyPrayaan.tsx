import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion } from "framer-motion";
import {
  Users, MapPin, HeartHandshake, FileCheck, RefreshCw,
  ShieldCheck, BadgeDollarSign, Brain, Sparkles,
} from "lucide-react";

const differentiators = [
  {
    icon: Users,
    title: "MSME-first understanding",
    desc: "Decades of relationship lending experience with manufacturers, traders and service providers across Tier 2 and Tier 3 India.",
    tint: "bg-gradient-coral",
  },
  {
    icon: MapPin,
    title: "Semi-urban expertise",
    desc: "On-ground presence across Tamil Nadu, Andhra Pradesh and Telangana with branch-led origination and servicing.",
    tint: "bg-gradient-mint",
  },
  {
    icon: HeartHandshake,
    title: "Personalised support",
    desc: "Dedicated relationship managers from sourcing through repayment — not call-centre handoffs.",
    tint: "bg-gradient-lavender",
  },
  {
    icon: FileCheck,
    title: "Simple documentation",
    desc: "Minimal paperwork. Digital-first KYC and document collection with branch assistance where required.",
    tint: "bg-gradient-sunset",
  },
  {
    icon: RefreshCw,
    title: "Relationship-first",
    desc: "We invest in long-term customer relationships and repeat business, not transactional lending.",
    tint: "bg-gradient-coral",
  },
  {
    icon: ShieldCheck,
    title: "Reliable lender",
    desc: "RBI-registered, well-capitalised NBFC with transparent disclosures and a published Fair Practice Code.",
    tint: "bg-gradient-mint",
  },
  {
    icon: BadgeDollarSign,
    title: "Reasonable cost",
    desc: "Risk-based pricing that reflects collateral and cashflow, not blanket high-cost rates.",
    tint: "bg-gradient-lavender",
  },
  {
    icon: Brain,
    title: "Tech-enabled underwriting",
    desc: "AI-native credit decisioning combining bureau, banking, GST and alternate data for fast, fair decisions.",
    tint: "bg-gradient-sunset",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const WhyPrayaan = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                <Sparkles size={12} /> Why Prayaan Capital
              </span>
              <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
                Built for the <span className="text-gradient-coral">missing middle</span> of Indian MSMEs
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                We combine deep MSME understanding with AI-led underwriting to serve micro and small businesses
                overlooked by microfinance and banks.
              </p>
            </motion.div>

            <HeroIllustration variant="why" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {differentiators.map((item) => (
              <motion.div
                key={item.title}
                variants={cardAnim}
                className="clay-surface p-6 clay-press group"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.tint} shadow-clay-sm flex items-center justify-center mb-4`}>
                  <item.icon size={20} className="text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <AIPulse />
                  <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default WhyPrayaan;
