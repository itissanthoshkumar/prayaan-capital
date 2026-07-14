import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import NotFound from "./pages/NotFound";
import { appRoutes } from "./routes";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {appRoutes.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<div className="min-h-screen bg-background" />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
          {/* Legacy document URLs (printed in old sanction letters / loan agreements) → current pages.
              On Vercel these are handled by an edge 308 in vercel.json; these client routes are the
              fallback that also works on the dev server. */}
          <Route path="/policies.html" element={<Navigate to="/policies" replace />} />
          <Route path="/nach-instructions.php" element={<Navigate to="/nach-mandate-instructions" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* Vercel Web Analytics + Speed Insights — cookieless, no consent banner needed.
          Auto-tracks SPA route changes via the History API. Only reports on Vercel. */}
      <Analytics />
      <SpeedInsights />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
