import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import AIFloatingElements from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion } from "framer-motion";
import { TrendingUp, FileText, LucideIcon } from "lucide-react";

const BASE = "/assets/images/downloads";

const BLUE  = "hsl(208,100%,31%)";
const GOLD  = "hsl(38,100%,28%)";  // deepened from 42/47 so gold text & links read on light (~4.8:1)

type Doc = { label: string; size: string; href: string };
type Group = { title: string; blurb: string; icon: LucideIcon; color: string; docs: Doc[] };

const groups: Group[] = [
  {
    title: "Annual Return",
    blurb: "Annual returns and Form MGT-7 filings",
    icon: FileText,
    color: GOLD,
    docs: [
      { label: "Annual Return FY 2024-25", size: "1.94 MB",   href: `${BASE}/Updated-Annual%20Return%202024-25.pdf` },
      { label: "Annual Return FY 2023-24", size: "1.76 MB",   href: `${BASE}/Annual-Return-for-FY-2023-24.pdf` },
      { label: "Annual Return FY 2022-23", size: "1.34 MB",   href: `${BASE}/ar/Annual-Return-for-FY-2022-23.pdf` },
      { label: "Annual Return FY 2021-22", size: "986.23 KB", href: `${BASE}/annual-return2022.pdf` },
      { label: "Form MGT-7 FY 2021-22",   size: "114.32 KB", href: `${BASE}/ar/Form-MGT-7-for-FY-2021-22.pdf` },
      { label: "Form MGT-7 FY 2020-21",   size: "112.56 KB", href: `${BASE}/ar/Form-MGT-7-for-FY-2020-21.pdf` },
    ],
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } };
const itemAnim = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

// Parse the starting financial year from a label like "Annual Return FY 2024-25" → 2024
const fyYear = (label: string): number => {
  const m = label.match(/FY\s*(\d{4})/);
  return m ? parseInt(m[1], 10) : 0;
};

const DocGroup = ({ g }: { g: Group }) => (
  <div>
    {/* Group header */}
    <div className="flex items-center gap-3 mb-5">
      <span
        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
        style={{ background: `${g.color}18` }}
      >
        <g.icon size={20} style={{ color: g.color }} />
      </span>
      <div>
        <h2 className="font-display text-lg md:text-2xl font-bold text-foreground leading-tight">
          {g.title}
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground">{g.blurb}</p>
      </div>
    </div>

    {/* Document cards */}
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="grid sm:grid-cols-2 gap-3"
    >
      {[...g.docs].sort((a, b) => fyYear(b.label) - fyYear(a.label)).map((d) => (
        <motion.a
          key={d.label}
          variants={itemAnim}
          whileHover={{ y: -3, transition: { duration: 0.2 } }}
          href={d.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group clay-surface clay-press flex items-center gap-3 px-4 py-3.5"
        >
          <span
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${g.color}15` }}
          >
            <FileText size={16} style={{ color: g.color }} />
          </span>
          <div className="flex-1 min-w-0">
            <h3
              className="font-body text-sm font-semibold text-foreground leading-snug transition-colors"
              style={{ ["--hover-color" as string]: g.color }}
            >
              <span className="group-hover:opacity-80 transition-opacity">{d.label}</span>
            </h3>
            <span className="text-[11px] text-muted-foreground">PDF · {d.size}</span>
          </div>
          <span className="text-xs font-bold uppercase tracking-wide shrink-0" style={{ color: g.color }}>
            View ↗
          </span>
        </motion.a>
      ))}
    </motion.div>
  </div>
);

const InvestorRelations = () => (
  <Layout>
      <Seo title="Investor Relations" description="Investor relations information, annual returns and regulatory filings for Prayaan Capital Private Limited, an RBI-registered NBFC." path="/investor-relations" />
    {/* ── Hero ── */}
    <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      {/* Blue + gold ambient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none"
        style={{ background: BLUE }} />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full opacity-[0.07] blur-[80px] pointer-events-none"
        style={{ background: GOLD }} />

      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold uppercase tracking-[0.12em] font-body mb-4"
              style={{ color: BLUE }}
            >
              <TrendingUp size={12} /> Investor Relations
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-3 leading-tight">
              Investor{" "}
              <span style={{ color: GOLD }}>Relations</span>
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              Statutory notices and annual filings for Prayaan Capital Private Limited. Click any document to open the official PDF.
            </p>

            {/* Blue + gold stat chips */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                { label: "RBI Registered", sub: "NBFC-ICC since 2019", color: BLUE },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="px-4 py-2 rounded-2xl clay-surface shadow-clay-sm"
                >
                  <p className="font-body text-xs font-bold" style={{ color: chip.color }}>{chip.label}</p>
                  <p className="font-body text-[10px] text-muted-foreground">{chip.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <HeroIllustration variant="legal" />
        </div>
      </div>
    </section>

    {/* ── Divider bar — blue to gold gradient ── */}
    <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${BLUE}, ${GOLD})` }} />

    {/* ── Document sections ── */}
    <section className="py-12 md:py-16 bg-background relative">
      {/* Subtle blue tint on left */}
      <div className="absolute top-0 left-0 w-[300px] h-full opacity-[0.03] pointer-events-none"
        style={{ background: `linear-gradient(90deg, ${BLUE}, transparent)` }} />

      <div className="container mx-auto px-5 relative z-10 max-w-4xl space-y-12 md:space-y-14">
        {groups.map((g) => (
          <DocGroup key={g.title} g={g} />
        ))}

        <p className="text-center text-xs text-muted-foreground">
          PDFs open in a new tab.
        </p>
      </div>
    </section>
  </Layout>
);

export default InvestorRelations;
