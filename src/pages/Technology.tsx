import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Brain, Database, Workflow, Plug, Lock, Users2, Sparkles, ArrowRight,
} from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "AI-native platform",
    desc: "Decisioning models trained on Indian property and credit data combining bureau, banking and valuation signals.",
    tint: "bg-gradient-coral",
  },
  {
    icon: Database,
    title: "Modern data stack",
    desc: "Cloud-native data infrastructure powering risk, portfolio analytics and real-time monitoring.",
    tint: "bg-gradient-mint",
  },
  {
    icon: Workflow,
    title: "Digital origination",
    desc: "End-to-end workflow from lead capture and KYC to sanction, e-agreement and disbursal.",
    tint: "bg-gradient-lavender",
  },
  {
    icon: Plug,
    title: "Partner integrations",
    desc: "APIs for co-lending partners, DSAs, and data providers. Programmable integrations on roadmap.",
    tint: "bg-gradient-sunset",
  },
  {
    icon: Lock,
    title: "Security & compliance",
    desc: "RBI-aligned controls, ISO-grade information security practices, and data-residency in India.",
    tint: "bg-gradient-coral",
  },
  {
    icon: Users2,
    title: "Tech team culture",
    desc: "Small, senior engineering team shipping weekly. Hiring across platform, ML and data engineering.",
    tint: "bg-gradient-mint",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Technology = () => {
  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Sparkles size={12} /> Technology
            </span>
            <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
              An <span className="text-gradient-coral">AI-first</span> lending platform built in-house
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Our technology stack is purpose-built for secured property lending — from origination and underwriting
              to collections and partner integrations.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="tech" />
          </div>
        </div>
      </section>

      {/* quick facts */}
      <section className="py-6 md:py-8 bg-section">
        <div className="container mx-auto px-5">
          <div className="clay-surface max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">AI-assisted underwriting</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">48-hour decisions</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">RBI-aligned controls</span>
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
            className="grid sm:grid-cols-2 gap-x-10 lg:gap-x-16 max-w-4xl mx-auto"
          >
            {pillars.map((item, i) => (
              <motion.div
                key={item.title}
                variants={cardAnim}
                className={`flex gap-4 py-5 ${i < pillars.length - 2 ? "border-b border-border/40" : "border-b border-border/40 sm:border-b-0"}`}
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

      <section className="py-16 md:py-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="clay-surface p-8 md:p-14 text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              Build <span className="text-gradient-coral">with us</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-8 font-body">
              Partner on integrations, data and co-lending — or join the team building it.
              Small team, big impact, weekly shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full px-8 font-body">
                  Partner With Us <ArrowRight size={15} />
                </Button>
              </Link>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="rounded-full px-8 font-body">
                  View Open Roles
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
