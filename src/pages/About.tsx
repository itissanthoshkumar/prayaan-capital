import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Brain, Eye, Shield, Users, Zap, Sparkles, HeartHandshake, TrendingUp } from "lucide-react";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";

const values = [
  { icon: Users, title: "MSME First", desc: "Secured business loans purpose-built for the manufacturers, traders and service providers who form the backbone of India's economy.", tint: "bg-gradient-coral" },
  { icon: HeartHandshake, title: "Serving the Underserved", desc: "Fewer than 1 in 5 small businesses get the formal credit they need. We back the entrepreneurs mainstream banks routinely overlook.", tint: "bg-gradient-mint" },
  { icon: Brain, title: "Technology Driven", desc: "AI-assisted underwriting blends property value, banking and bureau data to deliver fast, fair credit decisions.", tint: "bg-gradient-lavender" },
  { icon: Zap, title: "Quick Turn-around", desc: "Minimal paperwork, doorstep service and decisions in 48 hours so businesses reach their funds sooner.", tint: "bg-gradient-sunset" },
  { icon: Eye, title: "Fair & Transparent", desc: "Ground-level market understanding plus modern credit tools — full rate-card clarity and no hidden charges.", tint: "bg-gradient-coral" },
  { icon: Shield, title: "Regulatory Excellence", desc: "An RBI-registered NBFC committed to compliance, sound governance and customer protection.", tint: "bg-gradient-mint" },
];

const timeline = [
  { year: "2018", event: "Prayaan Capital Private Limited incorporated on 10 December 2018 in Chennai, with a mission to fund India's underserved small businesses.", tint: "bg-gradient-coral" },
  { year: "2019", event: "Granted the NBFC Certificate of Registration by RBI on 6 June 2019 (non-deposit taking).", tint: "bg-gradient-mint" },
  { year: "2020", event: "Raised a US$1.2M seed round led by Accion Venture Lab and scaled secured lending to micro and small enterprises.", tint: "bg-gradient-lavender" },
  { year: "2023", event: "Deepened property-backed business lending to manufacturing, trading and services MSMEs across Tamil Nadu, Andhra Pradesh and Telangana.", tint: "bg-gradient-sunset" },
  { year: "2026", event: "Rangarajan Krishnan, former MD & CEO of Five Star Business Finance, acquired a controlling stake and became Managing Director; raised a ₹110 Cr Series A led by Peak XV Partners to deepen MSME lending.", tint: "bg-gradient-coral" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const About = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                  <Sparkles size={12} /> About Prayaan Capital
                </span>
                <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
                  Capital for the small businesses that <span className="text-gradient-coral">power India's growth</span>
                </h1>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Prayaan Capital Private Limited is an RBI-registered NBFC incorporated in Chennai in December 2018. We provide secured business loans to India's micro, small and medium enterprises — the manufacturers, traders and service providers who create jobs and drive growth, yet remain underserved by mainstream banks. The word <em>Prayaan</em>, meaning "Journey", reflects our intent to co-travel with every entrepreneur on their growth journey.
                </p>
              </motion.div>
            </div>
            <HeroIllustration variant="about" />
          </div>
        </div>
      </section>

      {/* Mission & Focus */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            {[
              { label: "Why We Exist", title: "Closing India's MSME credit gap", desc: "Small businesses power our economy, yet most cannot access the formal credit they need to grow. We help underserved entrepreneurs unlock the value of the property they own to fund their business — fairly, transparently, and on terms that respect their cashflow.", tint: "bg-gradient-coral" },
              { label: "What We Do", title: "Secured business loans, done fairly", desc: "We lend to manufacturing, trading and services MSMEs, backed by commercial or residential property. A blend of ground-level property valuation and modern credit tools decides the right loan for each enterprise — with doorstep service across South India.", tint: "bg-gradient-mint" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                className="group relative clay-surface p-6 md:p-10 clay-press"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.tint} shadow-clay-sm mb-5`} />
                <div className="flex items-center gap-2 mb-4">
                  <AIPulse />
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">{item.label}</span>
                </div>
                <h2 className="font-display text-xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MSME impact strip */}
      <section className="py-12 md:py-16 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto"
          >
            {[
              { stat: "63M+", label: "MSMEs in India", sub: "the engine of jobs and GDP", icon: TrendingUp, tint: "bg-gradient-coral" },
              { stat: "~19%", label: "credit demand formally met", sub: "the gap we exist to close", icon: HeartHandshake, tint: "bg-gradient-mint" },
              { stat: "100%", label: "secured & transparent", sub: "property-backed, fair pricing", icon: Shield, tint: "bg-gradient-lavender" },
            ].map((s) => (
              <div key={s.label} className="clay-surface p-6 flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl ${s.tint} shadow-clay-sm flex items-center justify-center shrink-0`}>
                  <s.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-display text-2xl font-extrabold text-foreground leading-none">{s.stat}</p>
                  <p className="font-body text-sm font-semibold text-foreground mt-1.5">{s.label}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-accent-foreground uppercase tracking-[0.12em] font-body mb-5">
              <Brain size={12} /> Our Values
            </span>
            <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mt-3 mb-4">What Drives Us</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={cardAnim}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative clay-surface p-6 md:p-7 clay-press"
              >
                <div className={`w-12 h-12 rounded-2xl ${v.tint} shadow-clay-sm flex items-center justify-center mb-4`}>
                  <v.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
              <Zap size={12} /> Our Journey
            </span>
            <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mt-3">
              Funding India's <span className="text-gradient-coral">MSME backbone</span>
            </h2>
          </motion.div>
          <div className="max-w-2xl mx-auto relative">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative flex gap-5 md:gap-8 pb-6 last:pb-0"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${item.tint} shadow-clay-sm flex items-center justify-center shrink-0 relative z-10`}>
                  <span className="text-[11px] md:text-sm font-bold text-white">'{item.year.slice(2)}</span>
                </div>
                <div className="pt-1 md:pt-2 flex-1 clay-surface-sm p-4">
                  <span className="text-xs font-semibold text-primary">{item.year}</span>
                  <p className="text-sm md:text-base text-foreground mt-0.5">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
