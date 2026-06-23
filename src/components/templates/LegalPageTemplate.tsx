import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { LucideIcon, Scale } from "lucide-react";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const itemAnim = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  sections: LegalSection[];
  intro?: React.ReactNode;
}

const LegalPageTemplate = ({ eyebrow = "Regulatory", title, subtitle, icon: Icon = Scale, sections, intro }: Props) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                <Icon size={12} /> {eyebrow}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-3 leading-tight">{title}</h1>
              {subtitle && <p className="text-sm md:text-base text-muted-foreground max-w-2xl">{subtitle}</p>}
            </motion.div>
            <HeroIllustration variant="legal" />
          </div>
        </div>
      </section>

      {/* Document body — clean reading layout, no cards */}
      <section className="py-12 md:py-16 bg-background relative">
        <div className="container mx-auto px-5 relative z-10">
          <article className="max-w-3xl mx-auto font-body">
            {intro && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="text-base md:text-lg text-foreground/80 leading-relaxed space-y-4 pb-8 border-b border-border/60"
              >
                {intro}
              </motion.div>
            )}

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="divide-y divide-border/50"
            >
              {sections.map((section) => (
                <motion.section
                  key={section.title}
                  variants={itemAnim}
                  className="py-7 md:py-8 first:pt-8 scroll-mt-24"
                >
                  <h2 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3 leading-snug">
                    {section.title}
                  </h2>
                  <div className="text-sm md:text-base text-muted-foreground leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
                    {section.content}
                  </div>
                </motion.section>
              ))}
            </motion.div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPageTemplate;
