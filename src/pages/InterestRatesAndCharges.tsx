import { useEffect } from "react";
import Layout from "@/components/Layout";

const PDF_URL =
  "https://prayaancapital.com/assets/images/downloads/Interest%20Rates%20and%20Gradation%20of%20Risk%20Policy%20V4.0.pdf";

const InterestRatesAndCharges = () => {
  useEffect(() => {
    window.location.replace(PDF_URL);
  }, []);

  return (
    <Layout>
      <section className="pt-24 pb-8 md:pt-32 bg-hero relative">
        <div className="container mx-auto px-5 relative z-10 text-center py-24">
          <p className="text-sm text-muted-foreground font-body">
            Opening Interest Rates & Charges PDF…
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default InterestRatesAndCharges;
