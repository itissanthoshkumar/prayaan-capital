import { useState } from "react";
import Layout from "@/components/Layout";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";
import HeroIllustration from "@/components/HeroIllustration";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink, Shield, Clock } from "lucide-react";


const levels = [
  {
    level: "Level 1",
    label: "Customer Support",
    heading: "Customer Support",
    intro:
      "For any query or issue, first reach out to our customer care team. We are committed to resolving your queries within 7 working days. If your query remains unaddressed, please escalate to the Grievance Redressal Officer.",
    officer: null,
    contacts: [
      { icon: Phone, label: "Customer Care Number", value: "+91-6380589898", href: "tel:+916380589898" },
      { icon: Mail, label: "Customer Care Email", value: "customercare@prayaancapital.com", href: "mailto:customercare@prayaancapital.com" },
    ],
    hours: "Monday – Friday, 9:30 AM – 6:30 PM (except on holidays)",
    extra: null,
  },
  {
    level: "Level 2",
    label: "Grievance Redressal Officer",
    heading: "Grievance Redressal Officer",
    intro:
      "If you are not satisfied with the resolution provided at Level 1, or if your query remains unaddressed for over 7 days, you can write to our Grievance Redressal Officer.",
    officer: "Harish Kumar E",
    contacts: [
      { icon: Mail, label: "Email", value: "gro@prayaancapital.com", href: "mailto:gro@prayaancapital.com" },
      { icon: Phone, label: "Landline", value: "044-49939225", href: "tel:04449939225" },
      { icon: Phone, label: "Mobile", value: "+91-9600133756", href: "tel:+919600133756" },
    ],
    hours: "Monday – Friday, 9:30 AM – 6:30 PM (except on holidays)",
    extra: null,
  },
  {
    level: "Level 3",
    label: "Principal Nodal Officer",
    heading: "Principal Nodal Officer",
    intro:
      "If you are not satisfied with the resolution provided by the Grievance Redressal Officer, or if your query remains unaddressed for over 15 days, you can contact the Principal Nodal Officer.",
    officer: "Akash S Chelvam",
    contacts: [
      { icon: Mail, label: "Email", value: "pno@prayaancapital.com", href: "mailto:pno@prayaancapital.com" },
      { icon: Phone, label: "Mobile", value: "+91-9820186402", href: "tel:+919820186402" },
    ],
    hours: "Monday – Friday, 9:30 AM – 6:30 PM",
    extra: null,
  },
  {
    level: "Level 4",
    label: "RBI Officer-In-Charge",
    heading: "RBI Officer-In-Charge",
    intro:
      "If the issue is not resolved within 30 days or you are dissatisfied with the resolution, you may appeal to the Regional Office of the Reserve Bank of India under whose jurisdiction the registered office of the Company falls.",
    officer: null,
    contacts: [
      { icon: Phone, label: "Tel", value: "044 2539 3406", href: "tel:04425393406" },
    ],
    hours: null,
    extra: {
      address: [
        "Regional Office of Department of Supervision",
        "Reserve Bank of India, Fort Glacis, Rajaji Salai",
        "Chennai – 600001, Tamil Nadu",
      ],
      channels: [
        { label: "(i) Online", detail: "Through RBI's CMS portal", link: { text: "https://cms.rbi.org.in", href: "https://cms.rbi.org.in" } },
        { label: "(ii) Email", detail: null, link: { text: "crpc@rbi.org.in", href: "mailto:crpc@rbi.org.in" } },
        { label: "(iii) Physical", detail: "Centralised Receipt and Processing Centre (CRPC), 4th Floor, Reserve Bank of India, Sector 17, Central Vista, Chandigarh – 160017", link: null },
      ],
    },
  },
];

const GrievanceRedressal = () => {
  const [active, setActive] = useState(0);
  const level = levels[active];

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                <Shield size={12} /> Grievance Redressal
              </span>
              <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-4 leading-tight">
                Customer Grievance <span className="text-gradient-coral">Redressal</span>
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground max-w-2xl font-body leading-relaxed">
                As per RBI Master Direction – NBFC Customer Protection Directions. All complaints are
                addressed through a structured four-level escalation process.
              </p>
            </motion.div>

            <HeroIllustration variant="grievance" />
          </div>
        </div>
      </section>

      {/* Two-panel */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-5 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-clay-lg"
          >
            {/* ── Sidebar ── */}
            <aside className="md:w-64 lg:w-72 shrink-0 bg-foreground flex flex-col">
              <div className="px-6 py-5 border-b border-white/10">
                <p className="font-body text-[10px] font-black text-white/40 uppercase tracking-[0.18em]">
                  Escalation Path
                </p>
              </div>
              <nav className="flex md:flex-col overflow-x-auto md:overflow-visible flex-1 md:py-2">
                {levels.map((l, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`relative shrink-0 md:w-full text-left flex items-center gap-3 px-5 py-4 transition-colors group ${
                      active === i ? "bg-white/10" : "hover:bg-white/5"
                    }`}
                  >
                    {/* Left indicator bar — desktop only */}
                    {active === i && (
                      <motion.span
                        layoutId="sidebar-bar"
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary rounded-r-full"
                      />
                    )}

                    {/* Number badge */}
                    <span
                      className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-body text-xs font-black transition-colors ${
                        active === i
                          ? "bg-primary text-white"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      {i + 1}
                    </span>

                    <div>
                      <p className={`font-body text-[9px] font-bold uppercase tracking-[0.14em] mb-0.5 transition-colors ${
                        active === i ? "text-primary" : "text-white/35"
                      }`}>
                        {l.level}
                      </p>
                      <p className={`font-body text-sm font-medium leading-snug whitespace-nowrap md:whitespace-normal transition-colors ${
                        active === i ? "text-white" : "text-white/55 group-hover:text-white/75"
                      }`}>
                        {l.label}
                      </p>
                    </div>
                  </button>
                ))}
              </nav>
            </aside>

            {/* ── Content ── */}
            <div className="flex-1 bg-card p-8 md:p-10 lg:p-12 min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full"
                >
                  {/* Level label */}
                  <div className="flex items-center gap-2 mb-2">
                    <AIPulse />
                    <span className="font-body text-[10px] font-bold text-primary uppercase tracking-[0.15em]">
                      {level.level}
                    </span>
                  </div>

                  {/* Heading */}
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                    {level.heading}
                  </h2>

                  {/* Intro — no max-width so it fills the panel */}
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
                    {level.intro}
                  </p>

                  {/* Officer pill */}
                  {level.officer && (
                    <div className="mb-6 inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-primary/8 border border-primary/15">
                      <div className="w-9 h-9 rounded-xl bg-gradient-coral shadow-clay-sm flex items-center justify-center shrink-0">
                        <span className="font-display text-white text-sm font-black">
                          {level.officer.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wide">
                          {level.heading}
                        </p>
                        <p className="font-display text-sm font-bold text-foreground">{level.officer}</p>
                      </div>
                    </div>
                  )}

                  {/* RBI address */}
                  {level.extra?.address && (
                    <div className="mb-6 flex gap-3 items-start p-4 rounded-2xl bg-muted">
                      <div className="w-9 h-9 rounded-xl bg-gradient-mint shadow-clay-sm flex items-center justify-center shrink-0">
                        <MapPin size={15} className="text-white" />
                      </div>
                      <div>
                        <p className="font-body text-[10px] font-bold text-muted-foreground uppercase tracking-wide mb-1">
                          Officer-in-Charge
                        </p>
                        {level.extra.address.map((line, i) => (
                          <p key={i} className="font-body text-sm text-foreground leading-relaxed">{line}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contact cards — same size/style for all */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {level.contacts.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        className="group flex items-center gap-3 p-4 rounded-2xl bg-muted hover:bg-primary/8 border border-transparent hover:border-primary/20 transition-all"
                      >
                        <div className="w-9 h-9 rounded-xl bg-background shadow-clay-sm flex items-center justify-center shrink-0">
                          <c.icon size={15} className="text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-body text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">
                            {c.label}
                          </p>
                          <p className="font-body text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                            {c.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Hours */}
                  {level.hours && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
                      <Clock size={12} className="text-muted-foreground" />
                      <span className="font-body text-xs text-muted-foreground">{level.hours}</span>
                    </div>
                  )}

                  {/* RBI contact channels */}
                  {level.extra?.channels && (
                    <div className="mt-6 pt-6 border-t border-border space-y-3">
                      <p className="font-body text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">
                        Contact Channels
                      </p>
                      {level.extra.channels.map((ch, i) => (
                        <div key={i} className="flex gap-2 font-body text-sm leading-relaxed">
                          <span className="font-semibold text-foreground shrink-0">{ch.label}:</span>
                          <span className="text-muted-foreground">
                            {ch.detail && `${ch.detail} `}
                            {ch.link && (
                              <a
                                href={ch.link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline inline-flex items-center gap-1"
                              >
                                {ch.link.text}
                                <ExternalLink size={11} />
                              </a>
                            )}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GrievanceRedressal;
