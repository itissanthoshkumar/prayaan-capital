import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { MapPin, Clock, ArrowRight, Sparkles, Heart, TrendingUp, Code, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";

const perks = [
  { icon: Sparkles, title: "Cutting-Edge AI", desc: "Work on production ML systems processing millions of data points daily.", tint: "bg-gradient-coral" },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health insurance, mental wellness programs, and fitness benefits.", tint: "bg-gradient-mint" },
  { icon: TrendingUp, title: "Growth Path", desc: "ESOPs, learning budgets, conference sponsorships, and rapid career progression.", tint: "bg-gradient-lavender" },
  { icon: Code, title: "Engineering Culture", desc: "Ship fast, iterate often. Modern stack, open-source contributions, and tech talks.", tint: "bg-gradient-sunset" },
];

const openings = [
  { title: "Senior ML Engineer", team: "AI/ML", location: "Mumbai / Remote", type: "Full-time", hot: true },
  { title: "Backend Engineer (Rust/Go)", team: "Platform", location: "Mumbai / Remote", type: "Full-time", hot: false },
  { title: "Product Designer", team: "Product", location: "Mumbai", type: "Full-time", hot: false },
  { title: "Credit Analyst", team: "Risk", location: "Mumbai", type: "Full-time", hot: false },
  { title: "DevOps Engineer", team: "Infrastructure", location: "Remote", type: "Full-time", hot: true },
  { title: "Growth Marketing Manager", team: "Marketing", location: "Mumbai", type: "Full-time", hot: false },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Careers = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Zap size={12} /> We're Hiring
            </span>
            <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
              Build the Future of <span className="text-gradient-coral">MSME Finance</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Join a team of fintech veterans and AI researchers reimagining how 63 million Indian MSMEs access capital.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="careers" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-accent-foreground uppercase tracking-[0.12em] font-body mb-5">
              <Brain size={12} /> Why Prayaan
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Perks & Culture</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {perks.map((perk) => (
              <motion.div
                key={perk.title}
                variants={cardAnim}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative clay-surface p-6 md:p-7 clay-press"
              >
                <div className={`w-12 h-12 rounded-2xl ${perk.tint} shadow-clay-sm flex items-center justify-center mb-4`}>
                  <perk.icon size={22} className="text-white" />
                </div>
                <h3 className="font-display text-sm md:text-base font-semibold text-foreground mb-1.5">{perk.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
              <Sparkles size={12} /> Open Positions
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Join the Team</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4 max-w-3xl mx-auto">
            {openings.map((job) => (
              <motion.div
                key={job.title}
                variants={cardAnim}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="clay-surface-sm p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 clay-press group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-sm md:text-base font-semibold text-foreground">{job.title}</h3>
                    {job.hot && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-coral text-[9px] font-bold text-white uppercase shadow-clay-sm">
                        <AIPulse className="!h-1.5 !w-1.5" /> Hot
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-[10px] md:text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground font-medium">{job.team}</span>
                    <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground">
                      <MapPin size={10} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground">
                      <Clock size={10} /> {job.type}
                    </span>
                  </div>
                </div>
                <Button variant="default" size="sm" className="text-xs self-start sm:self-center">
                  Apply <ArrowRight size={14} />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
