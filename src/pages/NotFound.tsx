import { useLocation, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { concretePaths } from "@/routes";

/** Tiny Levenshtein for "did you mean?" suggestions. */
const distance = (a: string, b: string): number => {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        a[i - 1] === b[j - 1]
          ? dp[i - 1][j - 1]
          : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
};

const tokenize = (p: string) =>
  p.toLowerCase().split(/[/-]/).filter(Boolean);

export const suggestPaths = (target: string, all: string[], limit = 5): string[] => {
  const t = target.toLowerCase();
  const tTokens = new Set(tokenize(t));
  const scored = all
    .filter((p) => p !== "/")
    .map((p) => {
      const pTokens = tokenize(p);
      const overlap = pTokens.filter((tok) => tTokens.has(tok)).length;
      const dist = distance(t, p.toLowerCase());
      // lower is better
      return { p, score: dist - overlap * 4 };
    })
    .sort((a, b) => a.score - b.score);
  return scored.slice(0, limit).map((s) => s.p);
};

const prettify = (p: string) =>
  p === "/"
    ? "Home"
    : p
        .replace(/^\//, "")
        .split("/")
        .map((seg) => seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
        .join(" › ");

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const suggestions = useMemo(
    () => suggestPaths(location.pathname, Array.from(concretePaths)),
    [location.pathname],
  );

  return (
    <Layout>
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-hero min-h-screen">
        <div className="container mx-auto px-5 max-w-3xl">
          <div className="clay-surface p-8 md:p-12 text-center">
            <div className="w-20 h-20 rounded-3xl bg-gradient-coral shadow-clay-primary flex items-center justify-center mx-auto mb-6">
              <span className="font-display font-bold text-3xl text-white">!</span>
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              404 — Page not found
            </p>
            <h1 className="mb-3 font-display text-3xl md:text-5xl font-extrabold text-foreground">
              We couldn't find that page
            </h1>
            <p className="mb-2 text-sm md:text-base text-muted-foreground">
              The page <code className="px-1.5 py-0.5 rounded-md bg-muted text-foreground/80 text-xs">{location.pathname}</code> doesn't exist.
            </p>
            <p className="mb-8 text-sm text-muted-foreground">
              Here are some pages you might be looking for.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link to="/">
                <Button size="lg"><Home size={16} /> Home</Button>
              </Link>
              <Link to="/sitemap">
                <Button size="lg" variant="outline"><Search size={16} /> Browse sitemap</Button>
              </Link>
            </div>
          </div>

          {suggestions.length > 0 && (
            <div className="clay-surface p-6 md:p-8 mt-6">
              <h2 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                Did you mean?
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {suggestions.map((p) => (
                  <li key={p}>
                    <Link
                      to={p}
                      className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-card shadow-clay-sm hover:shadow-clay-primary transition-all group"
                    >
                      <span className="text-sm font-medium text-foreground font-body">{prettify(p)}</span>
                      <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary transition" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
