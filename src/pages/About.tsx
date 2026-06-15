import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Brain, Target, Eye, Shield, Users, Zap, Sparkles } from "lucide-react";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";

const values = [
  { icon: Users, title: "Customer First", desc: "Door-step service with the right mix of products designed around the borrower's needs.", tint: "bg-gradient-coral" },
  { icon: Brain, title: "Technology Driven", desc: "User-friendly app-based solutions backed by a strong technology-enabled backend for our customers.", tint: "bg-gradient-mint" },
  { icon: Target, title: "Financial Inclusion", desc: "We bring fair, transparent credit to property owners often overlooked by mainstream banks.", tint: "bg-gradient-lavender" },
  { icon: Zap, title: "Quick Turn-around", desc: "Fast credit decisions and minimal paperwork so you can get to your funds sooner.", tint: "bg-gradient-sunset" },
  { icon: Eye, title: "Fair Credit Analysis", desc: "Transparent assessment combining ground-level understanding of local property markets with modern credit tools.", tint: "bg-gradient-coral" },
  { icon: Shield, title: "Regulatory Excellence", desc: "RBI-registered NBFC committed to compliance, sound governance and customer protection.", tint: "bg-gradient-mint" },
];

const timeline = [
  { year: "2018", event: "Prayaan Capital Private Limited incorporated on 10 December 2018 in Chennai", tint: "bg-gradient-coral" },
  { year: "2019", event: "Granted NBFC Certificate of Registration by RBI on 6 June 2019 (non-deposit taking)", tint: "bg-gradient-mint" },
  { year: "2020", event: "Began extending Loan Against Property to self-employed and salaried property owners", tint: "bg-gradient-lavender" },
  { year: "2022", event: "Mr. Rangarajan Krishnan joined as Promoter & Managing Director, infusing fresh capital and expertise", tint: "bg-gradient-sunset" },
  { year: "2024", event: "Expanded the mortgage suite with housing and construction loans across Tier 3–6 India", tint: "bg-gradient-coral" },
  { year: "2026", event: "Co-travelling with thousands of families as they unlock the value of their property", tint: "bg-gradient-mint" },
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
            <h1 className=”font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight”>
              The <span className=”text-gradient-coral”>power on your side</span> for India's property owners in Tier 3–6 India
            </h1>
            <p className=”text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl”>
              Prayaan Capital Private Limited was incorporated on 10 December 2018 and granted the NBFC Certificate of Registration by RBI on 6 June 2019, with our Registered and Corporate Office in Chennai, Tamil Nadu. We serve homeowners, shopkeepers, and small landlords across Tier 3–6 India — communities often overlooked by mainstream banks. The word <em>Prayaan</em>, meaning “Journey”, was conceptualised by the founders to reflect our intent of co-travelling with our customers on their journey.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="about" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            {[
              { label: "Our Mission", title: "Where we want to be", desc: "To help India's property owners unlock the value of what they already own — through highly digitized sourcing, fair underwriting and deeper, long-term relationships.", tint: "bg-gradient-coral" },
              { label: "Our Focus", title: "Property-backed lending, done fairly", desc: "We serve homeowners, shopkeepers and small landlords across Tier 3–6 India — people with valuable property but limited access to fair, transparent credit. A combination of property value and our credit tools decides the ideal loan amount for you.", tint: "bg-gradient-mint" },
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

      {/* Values */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
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
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
<Zap size={12} /> Our Journey
            </span>
            <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground mt-3">
              Building the Future of <span className="text-gradient-coral">Mortgage Lending</span>
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
