import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, FileStack, Sparkles, ArrowUpRight } from "lucide-react";

const eligibility = [
  "Indian resident who owns the property to be mortgaged",
  "Property with clear, marketable title in your name",
  "Age 21–65 years at loan maturity",
  "Residential, commercial or industrial property accepted",
  "Valid KYC: PAN, Aadhaar, and address proof",
  "Income proof — salaried, self-employed or business",
];

const documents = [
  { category: "Identity & KYC", items: ["PAN Card (mandatory)", "Aadhaar Card", "Passport / Voter ID"], accent: "from-primary to-[hsl(36_90%_58%)]", dot: "bg-primary" },
  { category: "Property Documents", items: ["Title deed & chain of title", "Encumbrance certificate", "Approved building plan", "Property tax receipt"], accent: "from-accent to-[hsl(200_55%_50%)]", dot: "bg-accent" },
  { category: "Income Documents", items: ["Bank statements (6 months)", "Salary slips / business proof"], accent: "from-[hsl(var(--color-lavender))] to-[hsl(var(--color-indigo))]", dot: "bg-[hsl(var(--color-lavender))]" },
  { category: "For Self-Employed", items: ["GST / Udyam (if applicable)", "P&L and Balance Sheet", "Business continuity proof"], accent: "from-[hsl(var(--color-coral))] to-primary", dot: "bg-[hsl(var(--color-coral))]" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const listAnim = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const EligibilitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-section relative overflow-hidden">
      {/* Pastel blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-lavender opacity-15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-mint opacity-15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-5">
            <Sparkles size={12} /> Eligibility & Documents
          </span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground tracking-tight leading-[1.1] mb-4">
            Simple Requirements,
            <br />
            <span className="text-gradient-mint">Minimal Paperwork</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto font-body leading-relaxed">
            Spend less time on paperwork and get to your funds faster.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto">
          {/* Who Can Apply Card */}
          <motion.div
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative clay-surface p-6 md:p-8 clay-press"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-mint shadow-clay-sm flex items-center justify-center">
                <CheckCircle size={22} className="text-white" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">Who Can Apply?</h3>
            </div>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {eligibility.map((item) => (
                <motion.li key={item} variants={listAnim} className="flex items-start gap-3 group/item">
                  <div className="mt-1 w-6 h-6 rounded-lg bg-gradient-mint shadow-clay-sm flex items-center justify-center shrink-0">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground leading-relaxed font-body group-hover/item:text-foreground transition-colors">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="mt-6 pt-5 border-t border-border/40">
              <Link to="/contact" className="flex items-center gap-2 text-xs text-primary font-semibold font-body group/link hover:gap-3 transition-all">
                Contact us to apply <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Documents Required Card */}
          <motion.div
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative clay-surface p-6 md:p-8 clay-press"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-coral shadow-clay-sm flex items-center justify-center">
                <FileStack size={22} className="text-white" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground tracking-tight">Documents Required</h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5"
            >
              {documents.map((doc) => (
                <motion.div key={doc.category} variants={listAnim}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${doc.dot}`} />
                    <h4 className="text-sm font-semibold text-foreground font-body">{doc.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pl-4">
                    {doc.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs text-muted-foreground font-body"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
