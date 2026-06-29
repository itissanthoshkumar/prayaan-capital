import { createRoot } from "react-dom/client";
import { injectSpeedInsights } from "@vercel/speed-insights";
import App from "./App.tsx";
import "./index.css";

// Real-user Core Web Vitals (LCP/INP/CLS) → Vercel Speed Insights. No-op off Vercel.
injectSpeedInsights();

createRoot(document.getElementById("root")!).render(<App />);
