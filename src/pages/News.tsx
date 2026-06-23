import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";

const featured = {
  tag: "Press Release",
  title: "Prayaan Capital Crosses ₹100Cr in Disbursals",
  excerpt: "Prayaan Capital, an AI-native NBFC, announced today that it has crossed ₹100 crore in cumulative secured business loan disbursals across South India, powered by its AI underwriting engine.",
  date: "March 10, 2026",
};

const news = [
  { tag: "Product Update", title: "Launching Instant Pre-Approved Loans for Repeat Borrowers", excerpt: "Our AI now pre-scores existing borrowers, enabling instant top-up loans with zero additional documentation.", date: "Feb 28, 2026", tint: "bg-gradient-coral" },
  { tag: "Partnership", title: "Prayaan Capital Partners with NHB for Affordable Housing", excerpt: "Strategic partnership with NHB to offer credit guarantee-backed housing loans, reducing collateral requirements.", date: "Feb 15, 2026", tint: "bg-gradient-mint" },
  { tag: "Engineering", title: "How Our AI Processes 200+ Data Points in Under 30 Seconds", excerpt: "A deep dive into the machine learning pipeline that powers our real-time credit decisioning engine.", date: "Jan 30, 2026", tint: "bg-gradient-lavender" },
  { tag: "Industry", title: "RBI's Digital Lending Guidelines: What They Mean for Borrowers", excerpt: "Our take on the latest regulatory framework and how compliant AI-native NBFCs are better positioned.", date: "Jan 15, 2026", tint: "bg-gradient-sunset" },
  { tag: "Company", title: "Named in India's Top 10 AI-Native Fintech Startups", excerpt: "Recognized by FinTech Global for our innovative approach to AI-driven secured lending.", date: "Dec 20, 2025", tint: "bg-gradient-coral" },
  { tag: "Milestone", title: "1,000 Families Funded — Here's What We Learned", excerpt: "Reflections from our founding team on reaching this milestone and our roadmap ahead.", date: "Nov 10, 2025", tint: "bg-gradient-mint" },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const News = () => {
  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Sparkles size={12} /> Newsroom
            </span>
            <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
              News & <span className="text-gradient-coral">Updates</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Product launches, partnerships, engineering insights, and company milestones.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="news" />
          </div>
        </div>
      </section>

      {/* media & investor enquiries */}
      <section className="py-6 md:py-8 bg-section">
        <div className="container mx-auto px-5">
          <div className="clay-surface max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Media: press@prayaancapital.com</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Investors: ir@prayaancapital.com</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">RBI-registered NBFC</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative clay-surface p-6 md:p-10 mb-10 md:mb-12 max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] md:text-xs px-3 py-1 rounded-full bg-gradient-coral text-white font-semibold uppercase tracking-wider shadow-clay-sm">{featured.tag}</span>
              <div className="flex items-center gap-1.5">
                <AIPulse />
                <span className="text-[10px] text-primary font-semibold uppercase tracking-wider">Featured</span>
              </div>
            </div>
            <h2 className="font-display text-xl md:text-4xl font-bold text-foreground mt-2 mb-3">{featured.title}</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 max-w-3xl">{featured.excerpt}</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar size={12} /> {featured.date}</span>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline">Read more <ArrowRight size={12} /></a>
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
            {news.map((item) => (
              <motion.div
                key={item.title}
                variants={cardAnim}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group relative clay-surface p-6 md:p-7 clay-press"
              >
                <span className={`inline-block text-[10px] md:text-xs px-2.5 py-0.5 rounded-full ${item.tint} text-white font-medium shadow-clay-sm mb-3`}>{item.tag}</span>
                <h3 className="font-display text-sm md:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.excerpt}</p>
                <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground"><Calendar size={10} /> {item.date}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
