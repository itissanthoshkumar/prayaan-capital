import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Sparkles, Heart, TrendingUp, Code, Brain, Zap, Mail, Workflow, Database, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AIFloatingElements from "@/components/AIFloatingElements";

const techStack = [
  { icon: Brain, title: "Bureau-led credit platform", desc: "Credit decisions built on bureau data, property valuations, and bank statement analysis — combining multiple signals with human review.", tint: "bg-gradient-coral" },
  { icon: Workflow, title: "Digital origination", desc: "End-to-end workflow from lead capture and KYC to sanction, e-agreement and disbursal.", tint: "bg-gradient-lavender" },
  { icon: Database, title: "Modern data stack", desc: "Cloud-native infrastructure powering risk, portfolio analytics and real-time monitoring.", tint: "bg-gradient-mint" },
  { icon: Lock, title: "Security & compliance", desc: "RBI-aligned controls, ISO-grade information security practices, and data-residency in India.", tint: "bg-gradient-sunset" },
];

const perks = [
  { icon: Sparkles, title: "Purposeful Work", desc: "Every role here has a direct impact on real businesses and the families behind them. You'll see the difference your work makes.", tint: "bg-gradient-coral" },
  { icon: Heart, title: "People First", desc: "We take care of the people who take care of our customers. Your wellbeing matters here, both in and out of the office.", tint: "bg-gradient-mint" },
  { icon: TrendingUp, title: "Room to Grow", desc: "Whether you're deepening your expertise or stepping into new territory, we support your growth every step of the way.", tint: "bg-gradient-lavender" },
  { icon: Code, title: "Collaborative Culture", desc: "Credit professionals, technologists, and operators — all working together with shared values and a common mission.", tint: "bg-gradient-sunset" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Careers = () => {
  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Zap size={12} /> We're Hiring
            </span>
            <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
              Build the Future of <span className="text-gradient-coral">Property Finance</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Join a team of credit professionals, fintech practitioners, and technology builders reimagining how Indian small businesses access fair credit.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="careers" />
          </div>
        </div>
      </section>

      {/* quick facts */}
      <section className="py-6 md:py-8 bg-section">
        <div className="container mx-auto px-5">
          <div className="clay-surface max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Chennai · Bangalore</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Mission-driven team</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">RBI-regulated NBFC</span>
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
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-16 max-w-4xl mx-auto">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                variants={cardAnim}
                className={`flex gap-4 py-5 ${i < perks.length - 2 ? "border-b border-border/40" : "border-b border-border/40 sm:border-b-0"}`}
              >
                <span className={`w-11 h-11 rounded-xl ${perk.tint} shadow-clay-sm flex items-center justify-center shrink-0`}>
                  <perk.icon size={20} className="text-white" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{perk.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What you'll build */}
      <section className="py-16 md:py-24 bg-section relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14 md:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
              <Workflow size={12} /> What you'll build
            </span>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground">Our Technology</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-16 max-w-4xl mx-auto">
            {techStack.map((item, i) => (
              <motion.div
                key={item.title}
                variants={cardAnim}
                className={`flex gap-4 py-5 ${i < techStack.length - 2 ? "border-b border-border/40" : "border-b border-border/40 sm:border-b-0"}`}
              >
                <span className={`w-11 h-11 rounded-xl ${item.tint} shadow-clay-sm flex items-center justify-center shrink-0`}>
                  <item.icon size={20} className="text-white" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center clay-surface p-10 md:p-14"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-coral shadow-clay flex items-center justify-center mx-auto mb-6">
              <Mail size={26} className="text-white" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Interested in working with us?
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              Drop us an email with your latest resume. We'd love to hear from you.
            </p>
            <Button variant="default" size="lg" className="font-body" asChild>
              <a href="mailto:careers@prayaancapital.com">
                <Mail size={15} /> careers@prayaancapital.com
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
