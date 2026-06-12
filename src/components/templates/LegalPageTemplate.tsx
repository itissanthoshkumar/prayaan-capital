import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { LucideIcon, Scale } from "lucide-react";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const accents = [
  "from-accent to-primary",
  "from-primary to-[hsl(36_90%_58%)]",
  "from-[hsl(var(--color-lavender))] to-[hsl(var(--color-indigo))]",
  "from-[hsl(var(--color-coral))] to-primary",
];

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
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                <Icon size={12} /> {eyebrow}
              </span>
              <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">{title}</h1>
              {subtitle && <p className="text-sm md:text-base text-muted-foreground max-w-2xl">{subtitle}</p>}
            </motion.div>

            <HeroIllustration variant="legal" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto space-y-6">
            {intro && (
              <motion.div variants={itemAnim} className="clay-surface p-5 md:p-7 relative">
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-accent to-primary opacity-30 rounded-full" />
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed">{intro}</div>
              </motion.div>
            )}
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                variants={itemAnim}
                className="clay-surface p-5 md:p-7 relative"
              >
                <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${accents[i % accents.length]} opacity-30 rounded-full`} />
                <h2 className="font-display text-base md:text-xl font-semibold text-foreground mb-3">{section.title}</h2>
                <div className="text-xs md:text-sm text-muted-foreground leading-relaxed space-y-2">{section.content}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalPageTemplate;
