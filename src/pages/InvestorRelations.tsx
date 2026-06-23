import { useState } from "react";
import Layout from "@/components/Layout";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion } from "framer-motion";
import { TrendingUp, FileText, CalendarCheck, Vote, ChevronDown, LucideIcon } from "lucide-react";

const VISIBLE = 5;

const BASE = "https://prayaancapital.com/assets/images/downloads";

type Doc = { label: string; size: string; href: string };
type Group = { title: string; blurb: string; icon: LucideIcon; docs: Doc[] };

const groups: Group[] = [
  {
    title: "AGM Notices",
    blurb: "Notices of Annual General Meetings",
    icon: CalendarCheck,
    docs: [
      { label: "7th AGM Notice", size: "1.49 MB", href: `${BASE}/7th%20AGM%20Notice.pdf` },
      { label: "6th AGM Notice", size: "1.34 MB", href: `${BASE}/6th-AGM-Notice.pdf` },
      { label: "5th AGM Notice", size: "2.44 MB", href: `${BASE}/agm/5-agm-notice.pdf` },
      { label: "4th AGM Notice", size: "1.61 MB", href: `${BASE}/agm/4-agm-notice.pdf` },
      { label: "Adjourned 4th AGM Notice", size: "428.82 KB", href: `${BASE}/agm/notice-adjourned-4th-agm.pdf` },
      { label: "3rd AGM Notice", size: "495.7 KB", href: `${BASE}/agm/3-agm-notice.pdf` },
      { label: "2nd AGM Notice", size: "4.09 MB", href: `${BASE}/agm/2-agm-notice.pdf` },
      { label: "1st AGM Notice", size: "1.34 MB", href: `${BASE}/agm/1-agm-notice.pdf` },
    ],
  },
  {
    title: "Annual Return",
    blurb: "Annual returns and Form MGT-7 filings",
    icon: FileText,
    docs: [
      { label: "Annual Return FY 2024-25", size: "1.94 MB", href: `${BASE}/Updated-Annual%20Return%202024-25.pdf` },
      { label: "Annual Return FY 2023-24", size: "1.76 MB", href: `${BASE}/Annual-Return-for-FY-2023-24.pdf` },
      { label: "Annual Return FY 2022-23", size: "1.34 MB", href: `${BASE}/ar/Annual-Return-for-FY-2022-23.pdf` },
      { label: "Annual Return FY 2021-22", size: "986.23 KB", href: `${BASE}/annual-return2022.pdf` },
      { label: "Form MGT-7 FY 2021-22", size: "114.32 KB", href: `${BASE}/ar/Form-MGT-7-for-FY-2021-22.pdf` },
      { label: "Form MGT-7 FY 2020-21", size: "112.56 KB", href: `${BASE}/ar/Form-MGT-7-for-FY-2020-21.pdf` },
    ],
  },
  {
    title: "EGM Notices",
    blurb: "Notices of Extraordinary General Meetings",
    icon: Vote,
    docs: [
      { label: "18th EGM Notice", size: "3.84 MB", href: `${BASE}/18th%20EGM%20Notice_25.03.2026.pdf` },
      { label: "17th EGM Notice", size: "1.85 MB", href: `${BASE}/17th%20EGM%20Notice_19.02.2026.pdf` },
      { label: "16th EGM Notice", size: "4.70 MB", href: `${BASE}/16th%20EGM%20Notice_04.02.2026.pdf` },
      { label: "15th EGM Notice", size: "1.22 MB", href: `${BASE}/15th%20EGM%20Notice_03.02.2026.pdf` },
      { label: "13th EGM Notice", size: "2.10 MB", href: `${BASE}/13th%20EGM%20Notice_02-Jan-2026.pdf` },
      { label: "12th EGM Notice", size: "2.25 MB", href: `${BASE}/Notice%20of%20the%2012th%20EGM.pdf` },
      { label: "11th EGM Notice", size: "1.34 MB", href: `${BASE}/egm/11-EGM-Notice.pdf` },
      { label: "10th EGM Notice", size: "2.18 MB", href: `${BASE}/egm/10-EGM-Notice.pdf` },
      { label: "9th EGM Notice", size: "3.87 MB", href: `${BASE}/egm/9-EGM-Notice.pdf` },
      { label: "8th EGM Notice", size: "1.81 MB", href: `${BASE}/egm/8-EGM-Notice.pdf` },
      { label: "7th EGM Notice", size: "9.03 MB", href: `${BASE}/egm/7-EGM-Notice.pdf` },
      { label: "6th EGM Notice", size: "3.5 MB", href: `${BASE}/egm/6-EGM-Notice.pdf` },
      { label: "5th EGM Notice", size: "728.82 KB", href: `${BASE}/egm/5-EGM-Notice.pdf` },
      { label: "4th EGM Notice", size: "2.51 MB", href: `${BASE}/egm/4-EGM-Notice.pdf` },
      { label: "3rd EGM Notice", size: "884.78 KB", href: `${BASE}/egm/3-EGM-Notice.pdf` },
      { label: "2nd EGM Notice", size: "4.17 MB", href: `${BASE}/egm/2-EGM-Notice.pdf` },
      { label: "1st EGM Notice", size: "1.44 MB", href: `${BASE}/egm/1-EGM-Notice.pdf` },
    ],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const itemAnim = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const DocGroup = ({ g }: { g: Group }) => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? g.docs : g.docs.slice(0, VISIBLE);
  const remaining = g.docs.length - VISIBLE;
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="w-11 h-11 rounded-2xl bg-gradient-sunset shadow-clay-sm flex items-center justify-center shrink-0">
          <g.icon size={20} className="text-white" />
        </span>
        <div>
          <h2 className="font-display text-lg md:text-2xl font-bold text-foreground leading-tight">
            {g.title}{" "}
            <span className="text-xs font-semibold text-muted-foreground align-middle">({g.docs.length})</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground">{g.blurb}</p>
        </div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="grid sm:grid-cols-2 gap-3"
      >
        {shown.map((d) => (
          <motion.a
            key={d.label}
            variants={itemAnim}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group clay-surface clay-press flex items-center gap-3 px-4 py-3.5"
          >
            <span className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center shrink-0">
              <FileText size={16} className="text-primary" />
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {d.label}
              </h3>
              <span className="text-[11px] text-muted-foreground">PDF · {d.size}</span>
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-wide shrink-0">View</span>
          </motion.a>
        ))}
      </motion.div>
      {remaining > 0 && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            {expanded ? "Show less" : `View more (${remaining})`}
            <ChevronDown size={15} className={`transition-transform ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </div>
  );
};

const InvestorRelations = () => (
  <Layout>
    {/* Hero */}
    <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
              <TrendingUp size={12} /> Investor Relations
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-3 leading-tight">
              Investor <span className="text-gold-deep">Relations</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              Statutory notices and annual filings. Click any document to open the official PDF.
            </p>
          </motion.div>
          <HeroIllustration variant="legal" />
        </div>
      </div>
    </section>

    {/* Document sections */}
    <section className="py-12 md:py-16 bg-background relative">
      <div className="container mx-auto px-5 relative z-10 max-w-4xl space-y-12 md:space-y-14">
        {groups.map((g) => (
          <DocGroup key={g.title} g={g} />
        ))}
        <p className="text-center text-xs text-muted-foreground">
          PDFs open in a new tab. Documents are hosted on prayaancapital.com.
        </p>
      </div>
    </section>
  </Layout>
);

export default InvestorRelations;
