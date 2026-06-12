import LegalPageTemplate from "@/components/templates/LegalPageTemplate";
const InterestRatePolicy = () => (
  <LegalPageTemplate
    title="Interest Rate Policy"
    subtitle="Approved by the Board of Directors of Prayaan Capital Pvt. Ltd."
    sections={[
      { title: "1. Reference rate", content: "Prayaan Capital uses an internal Reference Lending Rate (PRLR) reviewed quarterly by the ALCO. The PRLR is the base over which risk-adjusted spreads are added." },
      { title: "2. Risk-based pricing", content: "Final rate = PRLR + spread. Spread is determined by the AI risk model considering credit bureau, GST/bank cash-flow, sector, vintage, geography and collateral." },
      { title: "3. Approach to gradation of risk", content: "Borrowers are graded A1 (lowest risk) to C3. Indicative spreads range from 0% to 8% over PRLR." },
      { title: "4. Communication", content: "The applicable rate, annualised, is disclosed in the sanction letter and key facts statement (KFS) before disbursal." },
      { title: "5. Penal interest", content: "Penal interest of 2% per month on overdue amounts. No penalty for delays caused by Prayaan Capital systems." },
      { title: "6. Review", content: "This policy is reviewed annually or whenever the RBI updates relevant directions." },
    ]}
  />
);
export default InterestRatePolicy;
