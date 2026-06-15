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
import Terms from "./pages/Terms";
import GrievanceRedressal from "./pages/GrievanceRedressal";
import FairPracticeCode from "./pages/FairPracticeCode";
import ProductDetail from "./pages/products/ProductDetail";
import EMICalc from "./pages/calculators/EMICalc";
import EligibilityCalc from "./pages/calculators/EligibilityCalc";
import ForeclosureCalc from "./pages/calculators/ForeclosureCalc";
import HowToApply from "./pages/HowToApply";
import DocumentChecklist from "./pages/DocumentChecklist";
import InterestRatesAndCharges from "./pages/InterestRatesAndCharges";
import FAQs from "./pages/FAQs";
import Downloads from "./pages/Downloads";
import CustomerLogin from "./pages/CustomerLogin";
import InterestRatePolicy from "./pages/regulatory/InterestRatePolicy";
import KYCAMLPolicy from "./pages/regulatory/KYCAMLPolicy";
import CodeOfConductRecovery from "./pages/regulatory/CodeOfConductRecovery";
import WhistleblowerPolicy from "./pages/regulatory/WhistleblowerPolicy";
import CSRPolicy from "./pages/regulatory/CSRPolicy";
import CitizensCharter from "./pages/regulatory/CitizensCharter";
import MITC from "./pages/regulatory/MITC";
import NoticesDisclosures from "./pages/regulatory/NoticesDisclosures";
import CookiePolicy from "./pages/regulatory/CookiePolicy";
import Disclaimer from "./pages/regulatory/Disclaimer";
import OmbudsmanScheme from "./pages/regulatory/OmbudsmanScheme";
import InvestorRelations from "./pages/InvestorRelations";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import PartnerWithUs from "./pages/PartnerWithUs";
import BranchLocator from "./pages/BranchLocator";
import Sitemap from "./pages/Sitemap";
import NACHInstructions from "./pages/NACHInstructions";
import WhyPrayaan from "./pages/WhyPrayaan";
import Technology from "./pages/Technology";
import Customer from "./pages/Customer";
import CustomerPayments from "./pages/CustomerPayments";
import RBIDisclosures from "./pages/RBIDisclosures";
import ThankYou from "./pages/ThankYou";
import IndexV2 from "./pages/IndexV2";
import { productData } from "./data/products";

export interface AppRoute {
  path: string;
  component: ComponentType;
  /** Sample concrete paths to test for parameterised routes. */
  sampleParams?: string[];
}

export const appRoutes: AppRoute[] = [
  { path: "/", component: Index },
  { path: "/home-v2", component: IndexV2 },
  { path: "/about", component: About },
  { path: "/team", component: Team },
  { path: "/careers", component: Careers },
  { path: "/news", component: News },
  { path: "/contact", component: Contact },
  { path: "/products", component: Products },
  {
    path: "/products/:slug",
    component: ProductDetail,
    sampleParams: Object.keys(productData).map((s) => `/products/${s}`),
  },
  { path: "/eligibility", component: Eligibility },
  { path: "/calculators/emi", component: EMICalc },
  { path: "/calculators/eligibility", component: EligibilityCalc },
  { path: "/calculators/foreclosure", component: ForeclosureCalc },
  { path: "/how-to-apply", component: HowToApply },
  { path: "/document-checklist", component: DocumentChecklist },
  { path: "/interest-rates-and-charges", component: InterestRatesAndCharges },
  { path: "/faqs", component: FAQs },
  { path: "/downloads", component: Downloads },
  { path: "/customer-login", component: CustomerLogin },
  { path: "/blog", component: Blog },
  { path: "/case-studies", component: CaseStudies },
  { path: "/investor-relations", component: InvestorRelations },
  { path: "/partner-with-us", component: PartnerWithUs },
  { path: "/branch-locator", component: BranchLocator },
  { path: "/sitemap", component: Sitemap },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/terms", component: Terms },
  { path: "/grievance-redressal", component: GrievanceRedressal },
  { path: "/fair-practice-code", component: FairPracticeCode },
  { path: "/interest-rate-policy", component: InterestRatePolicy },
  { path: "/kyc-aml-policy", component: KYCAMLPolicy },
  { path: "/code-of-conduct-recovery", component: CodeOfConductRecovery },
  { path: "/whistleblower-policy", component: WhistleblowerPolicy },
  { path: "/csr-policy", component: CSRPolicy },
  { path: "/citizens-charter", component: CitizensCharter },
  { path: "/most-important-terms", component: MITC },
  { path: "/notices-disclosures", component: NoticesDisclosures },
  { path: "/cookie-policy", component: CookiePolicy },
  { path: "/disclaimer", component: Disclaimer },
  { path: "/ombudsman-scheme", component: OmbudsmanScheme },
  { path: "/nach-instructions", component: NACHInstructions },

  // New pages
  { path: "/why-prayaan", component: WhyPrayaan },
  { path: "/technology", component: Technology },
  { path: "/customer", component: Customer },
  { path: "/customer/payments", component: CustomerPayments },
  { path: "/rbi-disclosures", component: RBIDisclosures },
  { path: "/thank-you", component: ThankYou },

  // Route aliases (spec URLs → existing components)
  { path: "/investors", component: InvestorRelations },
  { path: "/leadership", component: Team },
  { path: "/branches", component: BranchLocator },
  { path: "/grievance", component: GrievanceRedressal },
  { path: "/customer/grievance", component: GrievanceRedressal },
  { path: "/customer/calculators", component: EMICalc },
  { path: "/apply", component: Eligibility },
  { path: "/success-stories", component: CaseStudies },
  { path: "/partnerships", component: PartnerWithUs },
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
