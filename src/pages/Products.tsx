import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Building2, Landmark, Home, Wallet, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";
import EMICalculator from "@/components/EMICalculator";

const products = [
  {
    icon: Landmark,
    title: "Loan Against Property",
    range: "₹5L – ₹50L",
    tenure: "Up to 10 years",
    rate: "From 18% p.a.",
    desc: "Unlock the value of your residential, commercial or industrial property for any need — without selling it. Higher amounts, longer tenures, competitive rates.",
    features: ["Up to 50% LTV", "Fund Your Ambition", "Residential & commercial", "Long tenure", "No prepayment penalty after 6 months"],
    ideal: "Businesses that need a larger, longer-tenure loan against property they already own.",
    tint: "bg-gradient-coral",
    aiTag: "AI valuation assist",
  },
  {
    icon: Home,
    title: "Housing Loan",
    range: "₹5L – ₹50L",
    tenure: "Up to 10 years",
    rate: "From 18% p.a.",
    desc: "Buy a ready home, or fund construction on land you own. Affordable EMIs, minimal paperwork and doorstep service in the communities that need it most.",
    features: ["Up to 80% funding", "Salaried & self-employed", "Doorstep service", "Digital documentation", "48-hour decisions"],
    ideal: "Families buying or building their own home, including first-time buyers in smaller towns.",
    tint: "bg-gradient-mint",
    aiTag: "AI-scored in 48 hrs",
  },
  {
    icon: Building2,
    title: "Property Construction Loan",
    range: "₹5L – ₹50L",
    tenure: "Up to 10 years",
    rate: "From 18% p.a.",
    desc: "Finance the construction, extension or renovation of a residential or commercial property on a plot you already own, with staged disbursal.",
    features: ["Staged disbursal", "Renovation & extension", "Plot-owner friendly", "Flexible EMIs", "Quick valuation"],
    ideal: "Owners building or improving property on land already in their name.",
    tint: "bg-gradient-lavender",
    aiTag: "Stage-linked underwriting",
  },
  {
    icon: Wallet,
    title: "Balance Transfer & Top-up",
    range: "₹5L – ₹50L",
    tenure: "Up to 10 years",
    rate: "From 18% p.a.",
    desc: "Move your existing property loan to Prayaan for a lower rate, and unlock an additional top-up against the same property in one go.",
    features: ["Lower your EMI", "Extra top-up", "Minimal docs", "Fast switch", "Transparent charges"],
    ideal: "Borrowers paying a high rate elsewhere who want to save and borrow a little more.",
    tint: "bg-gradient-sunset",
    aiTag: "Instant savings estimate",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const Products = () => {
  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Building2 size={12} /> Our Products
            </span>
            <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
              Secured business loans for <span className="text-gradient-coral">India's SMEs</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Secured business loans from ₹5L to ₹50L, backed by the property you own — for working capital, expansion, machinery or any business need. Transparent pricing, 48-hour decisions, tenures up to 10 years, and doorstep service. Specialised lines include MSME term loans (from ₹3L) and supply-chain finance (from ₹1L).
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="products" />
          </div>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-8 md:py-10 bg-section relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="clay-surface max-w-5xl mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border/50"
          >
            {[
              { v: "₹5L – ₹50L", l: "Loan amount" },
              { v: "From 18% p.a.", l: "Interest rate" },
              { v: "48 hours", l: "Decisions" },
              { v: "Up to 10 yrs", l: "Tenure" },
            ].map((s) => (
              <div key={s.l} className="text-center px-2 md:px-4">
                <p className="font-display text-lg md:text-2xl font-extrabold text-foreground leading-none">{s.v}</p>
                <p className="font-body text-[11px] text-muted-foreground mt-2 uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
            {products.map((product) => (
              <motion.div
                key={product.title}
                variants={cardAnim}
                whileHover={{ y: -3, transition: { duration: 0.25 } }}
                className="group clay-surface p-6 md:p-10 clay-press relative overflow-hidden"
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl ${product.tint} shadow-clay-sm flex items-center justify-center shrink-0`}>
                        <product.icon size={26} className="text-white" />
                      </div>
                      <div>
                        <h2 className="font-display text-lg md:text-2xl font-bold text-foreground">{product.title}</h2>
                        <div className="flex flex-wrap gap-2 mt-1">
                          <span className="text-xs font-semibold text-primary">{product.range}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs text-muted-foreground">{product.tenure}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-xs font-medium text-accent-foreground">{product.rate}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{product.desc}</p>
                    <p className="text-xs text-muted-foreground/70 italic mb-4">{product.ideal}</p>

                    {/* AI tag */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card shadow-clay-sm">
                      <AIPulse />
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider font-body">{product.aiTag}</span>
                    </div>
                  </div>
                  <div className="lg:w-72 shrink-0">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-5">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle size={14} className="text-primary shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="default" size="sm" className="w-full">
                        Contact Us <ArrowRight size={14} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <EMICalculator />
    </Layout>
  );
};

export default Products;
