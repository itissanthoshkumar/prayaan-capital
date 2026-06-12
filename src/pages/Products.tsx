import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Building2, Landmark, Factory, Wallet, CheckCircle, ArrowRight, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";
import EMICalculator from "@/components/EMICalculator";

const products = [
  {
    icon: Building2,
    title: "MSME Business Term Loan",
    range: "₹5L – ₹50L",
    tenure: "12–60 months",
    rate: "From 14% p.a.",
    desc: "Purpose-built financing for MSMEs — expand operations, purchase inventory, or fund working capital. Flexible EMIs tailored to your cash flow.",
    features: ["No prepayment penalty", "Flexible EMI options", "Doorstep service", "Digital documentation", "Same-day sanction"],
    ideal: "Manufacturers, traders, and service businesses looking for growth capital with predictable repayment schedules.",
    tint: "bg-gradient-coral",
    aiTag: "AI-scored in 15 min",
  },
  {
    icon: Landmark,
    title: "Loan Against Property",
    range: "₹10L – ₹50L",
    tenure: "12–84 months",
    rate: "From 12% p.a.",
    desc: "Unlock property value to fuel business growth. Higher amounts, longer tenures, and competitive rates in the MSME lending space.",
    features: ["Up to 60% LTV", "Residential & commercial", "Quick title verification", "No end-use restriction", "Balance transfer available"],
    ideal: "Business owners with residential or commercial property who need larger loan amounts with longer repayment periods.",
    tint: "bg-gradient-mint",
    aiTag: "AI valuation assist",
  },
  {
    icon: Factory,
    title: "Machinery & Equipment Finance",
    range: "₹5L – ₹40L",
    tenure: "12–48 months",
    rate: "From 13% p.a.",
    desc: "Upgrade manufacturing setup without straining working capital. Equipment itself serves as collateral for streamlined processing.",
    features: ["New & used equipment", "Quick valuation", "Sector-agnostic", "Equipment as collateral", "Fast processing"],
    ideal: "Manufacturing MSMEs looking to upgrade, replace, or add machinery without depleting working capital reserves.",
    tint: "bg-gradient-lavender",
    aiTag: "Smart asset matching",
  },
  {
    icon: Wallet,
    title: "Working Capital Loan",
    range: "₹5L – ₹30L",
    tenure: "12–36 months",
    rate: "From 15% p.a.",
    desc: "Bridge cash flow gaps, manage seasonal demand, or cover operational expenses for growing MSMEs.",
    features: ["Fast top-up", "Minimal docs", "Repeat loan benefit", "Seasonal flexibility", "Quick disbursal"],
    ideal: "Businesses facing seasonal demand fluctuations or needing to bridge receivable gaps to maintain operations.",
    tint: "bg-gradient-sunset",
    aiTag: "Cash flow AI analysis",
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
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <Brain size={12} /> AI-Underwritten Products
            </span>
            <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
              Secured Loans for Every <span className="text-gradient-coral">MSME Need</span>
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              AI-underwritten business loans from ₹5L to ₹50L. Transparent pricing, 2-day disbursal, and terms designed for how MSMEs actually operate.
            </p>
          </motion.div>
            </div>
            <HeroIllustration variant="products" />
          </div>
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
                        Apply Now <ArrowRight size={14} />
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
