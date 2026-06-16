import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, TrendingUp, Plug, Users, ArrowRight } from "lucide-react";

/**
 * Audience pathways — one clear entry + conversion route per persona,
 * so the homepage serves borrowers, investors, partners and job-seekers.
 */
const audiences = [
  {
    icon: Home,
    tint: "bg-gradient-coral",
    label: "For Borrowers",
    title: "Unlock your property",
    desc: "Secured business loans from ₹5L to ₹50L, with AI-assisted decisions in 48 hours.",
    cta: "Apply for a Loan",
    to: "/eligibility",
  },
  {
    icon: TrendingUp,
    tint: "bg-gradient-mint",
    label: "For Investors & Lenders",
    title: "Partner with a growing NBFC",
    desc: "Reports, governance and RBI disclosures for investors and co-lenders backing our journey.",
    cta: "Investor Relations",
    to: "/investors",
  },
  {
    icon: Plug,
    tint: "bg-gradient-lavender",
    label: "For Tech & Biz Partners",
    title: "Build & co-lend with us",
    desc: "Integrate with our AI-native platform or partner on origination, data and co-lending.",
    cta: "Explore Partnerships",
    to: "/partner-with-us",
  },
  {
    icon: Users,
    tint: "bg-gradient-sunset",
    label: "For Job Seekers",
    title: "Grow your career here",
    desc: "NBFC and technology roles for people who want to build consequential fintech for Bharat.",
    cta: "View Openings",
    to: "/careers",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const AudienceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
            Who are you here for?
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-bold text-foreground tracking-tight">
            One platform, <span className="text-gradient-coral">every journey</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto mt-3 font-body">
            Whether you want to borrow, invest, partner or build with us — start in the right place.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto"
        >
          {audiences.map((a) => (
            <motion.div key={a.label} variants={cardAnim}>
              <Link
                to={a.to}
                className="group flex h-full flex-col clay-surface p-6 md:p-7 clay-press"
              >
                <div className={`w-12 h-12 rounded-2xl ${a.tint} shadow-clay-sm flex items-center justify-center mb-5`}>
                  <a.icon size={22} className="text-white" />
                </div>
                <p className="font-body text-[11px] font-semibold text-primary uppercase tracking-[0.12em] mb-1.5">
                  {a.label}
                </p>
                <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1 mb-4 font-body">
                  {a.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 font-body text-xs font-semibold text-primary group-hover:gap-2.5 transition-all">
                  {a.cta} <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AudienceSection;
