import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import AIFloatingElements from "@/components/AIFloatingElements";
import IndiaMap from "@/components/IndiaMap";
import { motion } from "framer-motion";
import { ChevronRight, Home, ArrowRight, MapPin, Briefcase, TrendingUp, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CUSTOMER_CARE = "+91-6380589898";

const points = [
  { icon: MapPin, tint: "bg-gradient-coral", title: "On the ground", desc: "Local teams who know each market — not a distant call centre." },
  { icon: Briefcase, tint: "bg-gradient-mint", title: "Built for your business", desc: "Secured business loans backed by the property you own — for working capital, expansion or any need." },
  { icon: TrendingUp, tint: "bg-gradient-lavender", title: "Always expanding", desc: "New areas open up as our network grows across South India." },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const BranchLocator = () => {
  return (
    <Layout>
      <Seo title="Branch Locator" description="Find Prayaan Capital's branches across South India — locate your nearest office for secured business loan services." path="/branch-locator" />
      {/* Hero — breadcrumb + headline */}
      <section className="pt-20 pb-8 md:pt-28 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            aria-label="Breadcrumb"
            className="inline-flex items-center flex-wrap gap-1.5 px-4 py-2 rounded-full bg-card shadow-clay-sm font-body text-[11px] uppercase tracking-[0.08em] text-muted-foreground mb-4"
          >
            <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
              <Home size={11} /> Home
            </Link>
            <ChevronRight size={11} />
            <span className="font-bold text-foreground">Our Presence</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display text-2xl md:text-4xl font-extrabold text-foreground mb-3 leading-tight">
              Our presence across <span className="text-gradient-coral">South India</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-xl font-body leading-relaxed mb-5">
              Wherever your business is, we come to you — secured business loans delivered by a local
              team at your doorstep, never a distant call centre.
            </p>
            <Button variant="default" className="rounded-2xl font-body" asChild>
              <Link to="/contact">
                Contact Us <ArrowRight size={15} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Map — the operating states, with blinking location markers */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <IndiaMap className="w-full max-w-[540px]" />
          </motion.div>

          {/* How our local model works */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto mt-12 md:mt-16"
          >
            {points.map((p) => (
              <motion.div key={p.title} variants={cardAnim} className="clay-surface p-6">
                <span className={`w-11 h-11 rounded-2xl ${p.tint} shadow-clay-sm flex items-center justify-center mb-4`}>
                  <p.icon size={20} className="text-white" />
                </span>
                <h3 className="font-display text-base font-bold text-foreground mb-1.5">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-surface p-6 md:p-7 mt-6 md:mt-8 max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <div className="flex-1">
              <h3 className="font-display text-base font-bold text-foreground mb-1">Not sure we're in your town yet?</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Tell us where you run your business and we'll point you to the nearest Prayaan team.
              </p>
            </div>
            <a
              href={`tel:${CUSTOMER_CARE.replace(/-/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-coral text-white font-body text-sm font-bold shadow-clay-sm shrink-0"
            >
              <Phone size={15} /> {CUSTOMER_CARE}
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BranchLocator;
