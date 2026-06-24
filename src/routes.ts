import type { ComponentType } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Eligibility from "./pages/Eligibility";
import PrivacyPolicy from "./pages/PrivacyPolicy";
// import Terms from "./pages/Terms";   // disabled
import GrievanceRedressal from "./pages/GrievanceRedressal";
import Policies from "./pages/Policies";
// import FairPracticeCode from "./pages/FairPracticeCode";   // disabled — kept for reference
// import ProductDetail from "./pages/products/ProductDetail"; // disabled — only /products listing kept
import EMICalc from "./pages/calculators/EMICalc";
// import EligibilityCalc from "./pages/calculators/EligibilityCalc"; // disabled
// import ForeclosureCalc from "./pages/calculators/ForeclosureCalc"; // disabled
// import HowToApply from "./pages/HowToApply";   // disabled
import DocumentChecklist from "./pages/DocumentChecklist";
import InterestRatesAndCharges from "./pages/InterestRatesAndCharges";
import FAQs from "./pages/FAQs";
// import Downloads from "./pages/Downloads";   // disabled
// import CustomerLogin from "./pages/CustomerLogin";   // disabled
// import InterestRatePolicy from "./pages/regulatory/InterestRatePolicy";   // disabled
// import KYCAMLPolicy from "./pages/regulatory/KYCAMLPolicy";   // disabled
// import CodeOfConductRecovery from "./pages/regulatory/CodeOfConductRecovery";   // disabled
// import WhistleblowerPolicy from "./pages/regulatory/WhistleblowerPolicy";   // disabled
// import CSRPolicy from "./pages/regulatory/CSRPolicy";   // disabled
// import CitizensCharter from "./pages/regulatory/CitizensCharter";   // disabled
// import MITC from "./pages/regulatory/MITC";   // disabled
// import NoticesDisclosures from "./pages/regulatory/NoticesDisclosures";   // disabled
// import CookiePolicy from "./pages/regulatory/CookiePolicy";   // disabled
// import Disclaimer from "./pages/regulatory/Disclaimer";   // disabled
// import OmbudsmanScheme from "./pages/regulatory/OmbudsmanScheme";   // disabled
import InvestorRelations from "./pages/InvestorRelations";
// import Blog from "./pages/Blog";   // disabled
// import CaseStudies from "./pages/CaseStudies";   // disabled
// import PartnerWithUs from "./pages/PartnerWithUs";   // disabled
import BranchLocator from "./pages/BranchLocator";
import Sitemap from "./pages/Sitemap";
import NACHInstructions from "./pages/NACHInstructions";
import WhyPrayaan from "./pages/WhyPrayaan";
import Technology from "./pages/Technology";
import Customer from "./pages/Customer";
import CustomerPayments from "./pages/CustomerPayments";
import RBIDisclosures from "./pages/RBIDisclosures";
import ThankYou from "./pages/ThankYou";
import HeroPreview from "./pages/HeroPreview";
// import { productData } from "./data/products"; // used only by the disabled /products/:slug route

export interface AppRoute {
  path: string;
  component: ComponentType;
  /** Sample concrete paths to test for parameterised routes. */
  sampleParams?: string[];
}

export const appRoutes: AppRoute[] = [
  { path: "/", component: Index },
  { path: "/about", component: About },
  // { path: "/team", component: Team },   // disabled — use /about
  { path: "/careers", component: Careers },
  { path: "/news", component: News },
  { path: "/contact", component: Contact },
  { path: "/products", component: Products },
  // Disabled — only the /products listing is kept, no per-product detail pages
  // {
  //   path: "/products/:slug",
  //   component: ProductDetail,
  //   sampleParams: Object.keys(productData).map((s) => `/products/${s}`),
  // },
  // { path: "/eligibility", component: Eligibility },   // disabled — apply flow removed
  { path: "/calculators/emi", component: EMICalc },
  // { path: "/calculators/eligibility", component: EligibilityCalc },   // disabled
  // { path: "/calculators/foreclosure", component: ForeclosureCalc },   // disabled
  // { path: "/how-to-apply", component: HowToApply },   // disabled
  { path: "/document-checklist", component: DocumentChecklist },
  { path: "/interest-rates-and-charges", component: InterestRatesAndCharges },
  { path: "/faqs", component: FAQs },
  // { path: "/downloads", component: Downloads },   // disabled
  // { path: "/customer-login", component: CustomerLogin },   // disabled
  // { path: "/blog", component: Blog },   // disabled
  // { path: "/case-studies", component: CaseStudies },   // disabled
  { path: "/investor-relations", component: InvestorRelations },
  // { path: "/partner-with-us", component: PartnerWithUs },   // disabled
  { path: "/branch-locator", component: BranchLocator },
  { path: "/sitemap", component: Sitemap },
  { path: "/policies", component: Policies },
  { path: "/privacy-policy", component: PrivacyPolicy },
  // { path: "/terms", component: Terms },   // disabled
  { path: "/grievance-redressal", component: GrievanceRedressal },
  // { path: "/fair-practice-code", component: FairPracticeCode },   // disabled
  // { path: "/interest-rate-policy", component: InterestRatePolicy },   // disabled
  // { path: "/kyc-aml-policy", component: KYCAMLPolicy },   // disabled
  // { path: "/code-of-conduct-recovery", component: CodeOfConductRecovery },   // disabled
  // { path: "/whistleblower-policy", component: WhistleblowerPolicy },   // disabled
  // { path: "/csr-policy", component: CSRPolicy },   // disabled
  // { path: "/citizens-charter", component: CitizensCharter },   // disabled
  // { path: "/most-important-terms", component: MITC },   // disabled
  // { path: "/notices-disclosures", component: NoticesDisclosures },   // disabled
  // { path: "/cookie-policy", component: CookiePolicy },   // disabled
  // { path: "/disclaimer", component: Disclaimer },   // disabled
  // { path: "/ombudsman-scheme", component: OmbudsmanScheme },   // disabled
  { path: "/nach-instructions", component: NACHInstructions },

  // New pages
  { path: "/why-prayaan", component: WhyPrayaan },
  { path: "/technology", component: Technology },
  { path: "/customer", component: Customer },
  { path: "/customer/payments", component: CustomerPayments },
  { path: "/rbi-disclosures", component: RBIDisclosures },
  // { path: "/thank-you", component: ThankYou },   // disabled — apply flow removed
  { path: "/hero-preview", component: HeroPreview },

  // Route aliases (spec URLs → existing components)
  // { path: "/investors", component: InvestorRelations },   // disabled
  // { path: "/leadership", component: Team },   // disabled — use /about
  { path: "/branches", component: BranchLocator },
  { path: "/grievance", component: GrievanceRedressal },
  { path: "/customer/grievance", component: GrievanceRedressal },
  { path: "/customer/calculators", component: EMICalc },
  { path: "/apply", component: Eligibility },
  // { path: "/success-stories", component: CaseStudies },   // disabled
  // { path: "/partnerships", component: PartnerWithUs },   // disabled
  { path: "/faq", component: FAQs },
  // Note: /404 and any unknown path are handled by the catch-all route in App.tsx
];

/** Set of all concrete (non-parameterised) route paths in the app, suitable for navigation. */
export const knownPaths = new Set<string>(
  appRoutes.flatMap((r) =>
    r.sampleParams ? r.sampleParams : r.path.includes(":") ? [] : [r.path],
  ),
);

/** Same set without the dynamic patterns — useful for matching `<Link to>` values. */
export const concretePaths = new Set<string>(
  appRoutes.flatMap((r) => r.sampleParams ?? (r.path.includes(":") ? [] : [r.path])),
);
