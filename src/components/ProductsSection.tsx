import { motion } from "framer-motion";
import { Landmark, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const products = [
  {
    icon: Landmark,
    title: "Secured Business Loans",
    range: "Up to ₹50L",
    tenure: "Up to 72 months",
    desc: "A long-term loan secured by mortgage of commercial or residential property. Designed to help your business grow with easy repayment schedules and competitive interest rates.",
    features: ["Mortgage backed", "Flexi tenure", "Capital investment"],
    tint: "bg-gradient-coral",
    href: "/products/loan-against-property",
  },
  {
    icon: Home,
    title: "Housing Loans",
    range: "Working capital",
    tenure: "Up to 48 months",
    desc: "Loans up to 48 months tailored for working capital needs of small businesses and self-employed customers, with simple paperwork and quick processing.",
    features: ["Less paperwork", "Quick turn-around", "Door-step service"],
    tint: "bg-gradient-mint",
    href: "/products/business-loan",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
            Our Products
          </span>
          <h2 className="font-display text-2xl md:text-5xl font-extrabold text-foreground mt-3 mb-3 md:mb-4 tracking-tight">
            Tailor-made loans for <span className="text-gradient-coral">your business</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto font-body">
            Because "one size doesn't fit all" — Prayaan Capital focuses on MSMEs in manufacturing, trading and services with the right mix of products.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto"
        >
          {products.map((product) => (
            <motion.div
              key={product.title}
              variants={cardAnim}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group clay-surface p-6 md:p-8 clay-press"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <div className={`w-14 h-14 rounded-2xl ${product.tint} shadow-clay-sm flex items-center justify-center shrink-0`}>
                  <product.icon size={26} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base md:text-xl font-semibold text-foreground mb-1">{product.title}</h3>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="text-xs md:text-sm font-semibold text-primary">{product.range}</span>
                    <span className="text-xs md:text-sm text-muted-foreground">•</span>
                    <span className="text-xs md:text-sm text-muted-foreground">{product.tenure}</span>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-3 md:mb-4 font-body">{product.desc}</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {product.features.map((f) => (
                      <span key={f} className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-body">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 md:mt-6 flex justify-end">
                <Link to={product.href}>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary text-xs md:text-sm font-body">
                    Read More <ArrowRight size={14} />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
