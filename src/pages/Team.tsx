import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Brain, Sparkles } from "lucide-react";
import AIFloatingElements, { AIPulse } from "@/components/AIFloatingElements";

/* Roster mirrors the current prayaancapital.com/about.html — name, designation
   and official headshot only. People the source page has no distinct photo for
   fall back to initials. */
type Person = { name: string; role: string; photo?: string };

const board: Person[] = [
  { name: "Rangarajan Krishnan", role: "Managing Director", photo: "/team/rangarajan-krishnan.png" },
  { name: "Jayalakshmi Rangarajan", role: "Director", photo: "/team/jayalakshmi-rangarajan.png" },
  { name: "G. Madhan Mohan", role: "Chief Credit Officer", photo: "/team/madhan-mohan.png" },
  { name: "Ravi Shankar Venkataraman Ganapathy Agraharam (Mr. GV)", role: "Nominee Director", photo: "/team/gv.png" },
  { name: "Sasidhar Thumuluri", role: "Nominee Director", photo: "/team/sasidhar-thumuluri.png" },
  { name: "Rahil Rangwala", role: "Nominee Director", photo: "/team/rahil-rangwala.png" },
];

const management: Person[] = [
  { name: "Tharasree Amarnath", role: "Chief Technology Officer", photo: "/team/tharasree-amarnath.jpg" },
  { name: "Parthasarathy S", role: "Chief Financial Officer", photo: "/team/parthasarathy-s.jpg" },
  { name: "Sujatha M", role: "Head - Collections", photo: "/team/sujatha-m.png" },
  { name: "Sindhuja A M", role: "Company Secretary & Compliance Officer", photo: "/team/sindhuja-am.png" },
  { name: "Sathya Ganesh T", role: "Chief Executive Officer", photo: "/team/sathya-ganesh.webp" },
  { name: "Apparswamy Subramanian", role: "Chief Financial Officer", photo: "/team/apparswamy-subramanian.webp" },
  { name: "Ramprashanth Ganesan", role: "Chief Operating Officer", photo: "/team/ramprashanth-ganesan.webp" },
  { name: "Akash S. Chelvam", role: "Chief Human Resource Officer", photo: "/team/akash-chelvam.png" },
  { name: "M. B. Srinivasa Rao", role: "Chief Strategy Officer", photo: "/team/srinivasa-rao.webp" },
  { name: "Venkatesh B", role: "Deputy CFO", photo: "/team/venkatesh-b.webp" },
  { name: "Harish R", role: "Chief Technology Officer", photo: "/team/harish-r.webp" },
  { name: "Atul Prakash", role: "Chief Risk Officer", photo: "/team/atul-prakash.webp" },
  { name: "R. S. Bharath", role: "Head - Legal", photo: "/team/rs-bharath.webp" },
];

const advisors = [
  { name: "RBI Registered NBFC", title: "Certificate of Registration granted 6 June 2019" },
  { name: "Headquartered in Chennai", title: "Santhome High Road, Tamil Nadu" },
  { name: "MSME Focus", title: "Secured business loans for small enterprises" },
];

const tints = ["bg-gradient-coral", "bg-gradient-mint", "bg-gradient-lavender", "bg-gradient-sunset"];
const initials = (name: string) =>
  name.replace(/\(.*\)/, "").trim().split(/\s+/).map((n) => n[0]).slice(0, 2).join("");

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const PersonCard = ({ p, i }: { p: Person; i: number }) => (
  <motion.div
    variants={cardAnim}
    whileHover={{ y: -4, transition: { duration: 0.25 } }}
    className="clay-surface p-6 clay-press text-center"
  >
    {p.photo ? (
      <img src={p.photo} alt={p.name} loading="lazy" className="w-20 h-20 rounded-2xl object-cover shadow-clay-sm mx-auto mb-4" />
    ) : (
      <div className={`w-20 h-20 rounded-2xl ${tints[i % tints.length]} shadow-clay-sm flex items-center justify-center mx-auto mb-4`}>
        <span className="font-display font-bold text-xl text-white">{initials(p.name)}</span>
      </div>
    )}
    <h3 className="font-display text-base font-semibold text-foreground leading-tight">{p.name}</h3>
    <p className="text-xs font-medium text-primary mt-1">{p.role}</p>
  </motion.div>
);

const Team = () => {
  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-primary uppercase tracking-[0.12em] font-body mb-4">
                  <Brain size={12} /> Our Team
                </span>
                <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-3 mb-5 leading-tight">
                  Board & <span className="text-gradient-coral">Leadership</span>
                </h1>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  Decades of NBFC, banking and technology leadership — co-travelling with India's small businesses on their journey.
                </p>
              </motion.div>
            </div>
            <HeroIllustration variant="team" />
          </div>
        </div>
      </section>

      {/* quick facts */}
      <section className="py-6 md:py-8 bg-section">
        <div className="container mx-auto px-5">
          <div className="clay-surface max-w-3xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center">
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Est. 2018</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">RBI-registered NBFC</span>
            <span className="hidden sm:block w-px h-4 bg-border" />
            <span className="font-body text-xs md:text-sm font-semibold text-foreground">Chennai HQ</span>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 md:py-20 bg-background relative overflow-hidden">
        <AIFloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-12">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground">Board of Directors</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {board.map((p, i) => (
              <PersonCard key={p.name} p={p} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 md:py-20 bg-section relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 md:mb-12">
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground">Management Team</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {management.map((p, i) => (
              <PersonCard key={p.name} p={p} i={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* At a glance */}
      <section className="py-14 md:py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 md:mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card shadow-clay-sm text-xs font-semibold text-accent-foreground uppercase tracking-[0.12em] font-body mb-5">
              <Sparkles size={12} /> At a Glance
            </span>
            <h2 className="font-display text-xl md:text-3xl font-bold text-foreground">Why Prayaan</h2>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-center gap-x-12 gap-y-6 max-w-3xl mx-auto">
            {advisors.map((advisor) => (
              <motion.div key={advisor.name} variants={cardAnim} className="flex items-center gap-3.5">
                <span className="w-11 h-11 rounded-2xl bg-gradient-mint shadow-clay-sm flex items-center justify-center shrink-0">
                  <AIPulse />
                </span>
                <div className="text-left">
                  <h3 className="font-display text-sm font-semibold text-foreground leading-tight">{advisor.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{advisor.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
