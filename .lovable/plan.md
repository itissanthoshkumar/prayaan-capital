## Goal

Replace placeholder/AI-generated copy across the site with the real content scraped from https://prayaancapital.com/, while keeping the existing claymorphism design, theme, and AI-native presentation intact.

## Source content gathered

From the live site (prayaancapital.com):

- **Company**: Prayaan Capital Private Limited, incorporated 10 Dec 2018, NBFC CoR granted 6 June 2019. Non-deposit-taking NBFC.
- **HQ**: No. 40/97, Minerva Building, 2nd Floor, Santhome High Road, Chennai 600028 (NOT Mumbai/BKC as currently shown).
- **Phones**: +91-6380589898 (customer care), +91-9600133756 (grievance).
- **Emails**: customercare@prayaancapital.com, gro@prayaancapital.com.
- **CIN**: U65900TN2018PTC126232.
- **Tagline**: "Prayaan, the power on your side. Affordable MSME Loans."
- **Mission**: "To meet the vast unmet needs of micro & small businesses through highly digitized channels of sourcing, accepting and deeper engagement."
- **Why Prayaan**: Customer First (door-step service), Technology Driven (app-based solutions), Financial Inclusion (small business focus).
- **Products** (from real site): Secured Business Loans (up to 72 months, with collateral), Housing Loans (up to 48 months, working capital, no collateral). Loan-application loan types: Short Term, Long Term, Machinery.
- **Target segment**: MSMEs in Manufacturing, Trading, Services — micro/small "missing middle" not served by microfinance or banks.
- **Advantages**: Flexi Tenure, Fair Credit Analysis, Quick Turn-around, Less Paperwork, Door-Step Services.
- **Leadership**:
  - Rangarajan Krishnan — Managing Director (ex Five Star Business Finance JMD/CEO, StanChart, HDFC Bank, IFC, Spark Capital).
  - Jayalakshmi Rangarajan — Director (Technology, ex Wipro, Ahaguru).
  - G. Madhan Mohan — Chief Credit Officer (21+ yrs MSME, ex RBL Bank, Swadhaar, Fullerton, Vistaar).
  - Akash S. Chelvam — Chief Human Resources Officer.
- **Testimonials**: Perumal — Sri Vaari Auto Spares, Salem; Kannan — K R Thoppu, Salem (powerloom weaver).
- **Footer/legal items requested**: About, Products, Work @ Prayaan, Contact, Privacy Policy, NACH Instructions, Customer Grievance Redressal, CIN, Policies & Guidelines, Compliances, Customer Education.

## Files to update

1. **`src/components/Footer.tsx`** — Restructure into the four real columns the user listed:
   - Column 1: About, Products, Work @ Prayaan, Contact
   - Column 2: Privacy Policy, NACH Instructions, Customer Grievance Redressal, CIN — U65900TN2018PTC126232
   - Column 3: Policies & Guidelines (group of regulatory policy links), Compliances (group of compliance links)
   - Column 4: Customer Education (FAQs, How to Apply, Document Checklist, Calculators, Downloads)
   - Update address, phones, emails to Chennai/real values.

2. **`src/components/HeroSection.tsx`** — Update hero copy: "Prayaan, the power on your side." with subline "Affordable MSME Loans" while keeping AI-native framing.

3. **`src/components/ProductsSection.tsx`** + **`src/data/products.ts`** + **`src/pages/Products.tsx`** — Replace product list with the two real products: Secured Business Loans (≤72 months, collateral-backed) and Housing Loans (≤48 months, working capital, no collateral). Update target-segment description.

4. **`src/components/TestimonialsSection.tsx`** — Replace fake testimonials with Perumal (Sri Vaari Auto Spares, Salem) and Kannan (K R Thoppu, Salem) using the real quotes.

5. **`src/pages/About.tsx`** — Replace with real company history (incorporation 10 Dec 2018, NBFC CoR 6 June 2019, Chennai HQ, name meaning "Journey"), mission statement, and the leadership transition narrative.

6. **`src/pages/Team.tsx`** — Replace team with the four real leaders (Rangarajan Krishnan, Jayalakshmi Rangarajan, G. Madhan Mohan, Akash S. Chelvam) with their real bios.

7. **`src/pages/Contact.tsx`** — Replace with real Chennai address, phone +91-6380589898, customercare@prayaancapital.com.

8. **`src/pages/GrievanceRedressal.tsx`** — Replace L1/L2 contacts with real GRO: Mr. Harish Kumar E (AVP-HR), +91-9600133756, gro@prayaancapital.com, Chennai address.

9. **`src/pages/Careers.tsx`** (rename label to "Work @ Prayaan" in footer) — Keep structure but adjust intro to reflect Chennai HQ; remove invented Mumbai/BKC references. Mark openings as illustrative.

10. **`src/components/HowItWorks.tsx`** + **`src/components/EligibilitySection.tsx`** — Adjust copy to emphasize the real "Prayaan Advantage" pillars: Flexi Tenure, Fair Credit Analysis, Quick Turn-around, Less Paperwork, Door-Step Services.

11. **Privacy/Terms/Regulatory pages** — Replace Mumbai address and `prayaancapital.com` emails to Chennai address and the real `customercare@` / `gro@` / `privacy@prayaancapital.com` (keep privacy@ as it's a standard alias) where used.

12. **`src/pages/calculators/*` and EMI ranges** — Adjust loan-amount sliders to match real-world MSME secured loan ranges (keep ₹5L–₹50L as plausible; no change unless source contradicts).

## Out of scope / preserved

- Visual design, claymorphism, palette, fonts, animations — unchanged.
- Routing, tests, sitemap — unchanged (only link labels in footer/sitemap update where wording changes, e.g., "Work @ Prayaan").
- AI-native marketing language — kept as enhancement layered on real product facts.
- No new pages added; NACH Instructions will link to a new short page or to Downloads (decide during build — default: add a small `src/pages/NACHInstructions.tsx` so the footer link resolves).

## Acceptance

- All four footer columns match the user's listed structure with working links.
- Address, phones, emails, CIN match the real site everywhere they appear.
- Products, leadership, testimonials, mission reflect real Prayaan content.
- Existing route tests still pass; new NACH page (if added) is registered in `src/routes.ts` and `public/sitemap.xml`.
