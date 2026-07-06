import { lazy, type ComponentType } from "react";
import Index from "./pages/Index";

// All non-home pages are lazy-loaded — each becomes its own JS chunk,
// removing ~120 KB from the initial bundle and cutting the LCP render delay.
const About = lazy(() => import("./pages/About")) as ComponentType;
const Careers = lazy(() => import("./pages/Careers")) as ComponentType;
// const News = lazy(() => import("./pages/News")) as ComponentType;   // disabled
const Contact = lazy(() => import("./pages/Contact")) as ComponentType;
const Products = lazy(() => import("./pages/Products")) as ComponentType;
// const Eligibility = lazy(() => import("./pages/Eligibility")) as ComponentType;   // disabled
const EMICalc = lazy(() => import("./pages/calculators/EMICalc")) as ComponentType;
// const BTCalc = lazy(() => import("./pages/calculators/BTCalc")) as ComponentType;   // disabled — page kept, not routed
// const EligibilityCalc = lazy(() => import("./pages/calculators/EligibilityCalc")) as ComponentType;   // disabled
// const ForeclosureCalc = lazy(() => import("./pages/calculators/ForeclosureCalc")) as ComponentType;   // disabled
// const HowToApply = lazy(() => import("./pages/HowToApply")) as ComponentType;   // disabled
// const DocumentChecklist = lazy(() => import("./pages/DocumentChecklist")) as ComponentType;   // disabled
const InterestRatesAndCharges = lazy(() => import("./pages/InterestRatesAndCharges")) as ComponentType;
// const FAQs = lazy(() => import("./pages/FAQs")) as ComponentType;   // disabled
// const Downloads = lazy(() => import("./pages/Downloads")) as ComponentType;   // disabled
// const CustomerLogin = lazy(() => import("./pages/CustomerLogin")) as ComponentType;   // disabled
// const InterestRatePolicy = lazy(() => import("./pages/regulatory/InterestRatePolicy")) as ComponentType;   // disabled
// const KYCAMLPolicy = lazy(() => import("./pages/regulatory/KYCAMLPolicy")) as ComponentType;   // disabled
// const CodeOfConductRecovery = lazy(() => import("./pages/regulatory/CodeOfConductRecovery")) as ComponentType;   // disabled
// const WhistleblowerPolicy = lazy(() => import("./pages/regulatory/WhistleblowerPolicy")) as ComponentType;   // disabled
// const CSRPolicy = lazy(() => import("./pages/regulatory/CSRPolicy")) as ComponentType;   // disabled
// const CitizensCharter = lazy(() => import("./pages/regulatory/CitizensCharter")) as ComponentType;   // disabled
// const MITC = lazy(() => import("./pages/regulatory/MITC")) as ComponentType;   // disabled
// const NoticesDisclosures = lazy(() => import("./pages/regulatory/NoticesDisclosures")) as ComponentType;   // disabled
// const CookiePolicy = lazy(() => import("./pages/regulatory/CookiePolicy")) as ComponentType;   // disabled
// const Disclaimer = lazy(() => import("./pages/regulatory/Disclaimer")) as ComponentType;   // disabled
// const OmbudsmanScheme = lazy(() => import("./pages/regulatory/OmbudsmanScheme")) as ComponentType;   // disabled
const InvestorRelations = lazy(() => import("./pages/InvestorRelations")) as ComponentType;
// const Blog = lazy(() => import("./pages/Blog")) as ComponentType;   // disabled
// const CaseStudies = lazy(() => import("./pages/CaseStudies")) as ComponentType;   // disabled
// const PartnerWithUs = lazy(() => import("./pages/PartnerWithUs")) as ComponentType;   // disabled
const BranchLocator = lazy(() => import("./pages/BranchLocator")) as ComponentType;
const Sitemap = lazy(() => import("./pages/Sitemap")) as ComponentType;
const NACHInstructions = lazy(() => import("./pages/NACHInstructions")) as ComponentType;
const NachMandate = lazy(() => import("./pages/NachMandate")) as ComponentType;
const WhyPrayaan = lazy(() => import("./pages/WhyPrayaan")) as ComponentType;
// const Technology = lazy(() => import("./pages/Technology")) as ComponentType;   // disabled
const Customer = lazy(() => import("./pages/Customer")) as ComponentType;
// const CustomerPayments = lazy(() => import("./pages/CustomerPayments")) as ComponentType;   // disabled
const RBIDisclosures = lazy(() => import("./pages/RBIDisclosures")) as ComponentType;
// const ThankYou = lazy(() => import("./pages/ThankYou")) as ComponentType;   // disabled
// const HeroPreview = lazy(() => import("./pages/HeroPreview")) as ComponentType;   // disabled — internal design preview, not for production
const Policies = lazy(() => import("./pages/Policies")) as ComponentType;
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy")) as ComponentType;
// const Terms = lazy(() => import("./pages/Terms")) as ComponentType;   // disabled
const GrievanceRedressal = lazy(() => import("./pages/GrievanceRedressal")) as ComponentType;
// const FairPracticeCode = lazy(() => import("./pages/FairPracticeCode")) as ComponentType;   // disabled
// const ProductDetail = lazy(() => import("./pages/products/ProductDetail")) as ComponentType;   // disabled

export interface AppRoute {
  path: string;
  component: ComponentType;
  /** Sample concrete paths to test for parameterised routes. */
  sampleParams?: string[];
}

export const appRoutes: AppRoute[] = [
  { path: "/", component: Index },
  { path: "/team", component: About },
  { path: "/about", component: About },
  { path: "/careers", component: Careers },
  // { path: "/news", component: News },   // disabled — 404
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
  // { path: "/calculators/bt", component: BTCalc },   // disabled — Balance Transfer calculator hidden for now
  // { path: "/calculators/eligibility", component: EligibilityCalc },   // disabled
  // { path: "/calculators/foreclosure", component: ForeclosureCalc },   // disabled
  // { path: "/how-to-apply", component: HowToApply },   // disabled
  // { path: "/document-checklist", component: DocumentChecklist },   // disabled — 404
  { path: "/interest-rates-and-charges", component: InterestRatesAndCharges },
  // { path: "/faqs", component: FAQs },   // disabled — 404
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
  { path: "/nach-mandate-instructions", component: NachMandate },

  // New pages
  { path: "/why-prayaan", component: WhyPrayaan },
  // { path: "/technology", component: Technology },   // disabled — 404
  { path: "/customer", component: Customer },
  // { path: "/customer/payments", component: CustomerPayments },   // disabled — 404
  { path: "/rbi-disclosures", component: RBIDisclosures },
  // { path: "/thank-you", component: ThankYou },   // disabled — apply flow removed
  // { path: "/hero-preview", component: HeroPreview },   // disabled — internal design preview, not for production

  // Route aliases (spec URLs → existing components)
  // { path: "/investors", component: InvestorRelations },   // disabled
  // { path: "/leadership", component: Team },   // disabled — use /about
  { path: "/branches", component: BranchLocator },
  { path: "/grievance", component: GrievanceRedressal },
  { path: "/customer/grievance", component: GrievanceRedressal },
  { path: "/customer/calculators", component: EMICalc },
  // { path: "/apply", component: Eligibility },   // disabled — 404
  // { path: "/success-stories", component: CaseStudies },   // disabled
  // { path: "/partnerships", component: PartnerWithUs },   // disabled
  // { path: "/faq", component: FAQs },   // disabled — 404
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
