import HeroIllustration from "@/components/HeroIllustration";
import Layout from "@/components/Layout";
import AIFloatingElements, { AIBadge } from "@/components/AIFloatingElements";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const posts = [
  { slug: "ai-underwriting-msme", title: "How AI underwriting is rewriting MSME lending", read: "6 min", tag: "AI" },
  { slug: "lap-vs-business-loan", title: "LAP vs unsecured business loan: which fits your firm?", read: "5 min", tag: "Guides" },
  { slug: "gst-cash-flow", title: "Reading GST returns to predict cash-flow stress", read: "7 min", tag: "Insights" },
  { slug: "women-entrepreneurs-india", title: "Women entrepreneurs and the credit gap in India", read: "8 min", tag: "Inclusion" },
  { slug: "rbi-fair-practice", title: "Decoding RBI Fair Practice Code for borrowers", read: "5 min", tag: "Regulatory" },
  { slug: "supply-chain-finance", title: "Supply chain finance 101 for vendors & dealers", read: "6 min", tag: "Working capital" },
];

const Blog = () => (
  <Layout>
    <section className="pt-24 pb-8 md:pt-32 md:pb-10 bg-hero relative overflow-hidden">
      <AIFloatingElements />
      <div className="container mx-auto px-5 relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center">
          <div>
        <AIBadge label="Insights" />
        <h1 className="font-display text-3xl md:text-6xl font-bold text-foreground mt-4 mb-3">Prayaan Insights</h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-xl">Practical know-how on business loans, credit and cash flow from our team.</p>
          </div>
          <HeroIllustration variant="news" />
        </div>
      </div>
    </section>

    {/* topic chips */}
    <section className="py-6 bg-section">
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
          {[...new Set(posts.map((p) => p.tag))].map((t) => (
            <span key={t} className="px-4 py-1.5 rounded-full clay-surface-sm text-xs font-medium text-foreground font-body">{t}</span>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((p, i) => (
          <motion.article key={p.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="clay-surface p-6 relative hover:shadow-clay-lg transition">
            <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${i % 3 === 0 ? "from-primary to-accent" : i % 3 === 1 ? "from-accent to-[hsl(var(--color-lavender))]" : "from-[hsl(var(--color-coral))] to-primary"} opacity-40 rounded-full`} />
            <span className="text-[10px] uppercase tracking-wider font-semibold text-primary">{p.tag}</span>
            <h2 className="font-display text-base md:text-lg font-bold text-foreground mt-2 mb-3 leading-snug">{p.title}</h2>
            <p className="text-xs text-muted-foreground mb-4">{p.read} read</p>
            <Link to="/blog" className="text-xs font-semibold text-primary hover:underline">Read article →</Link>
          </motion.article>
        ))}
      </div>
    </section>
  </Layout>
);
export default Blog;
