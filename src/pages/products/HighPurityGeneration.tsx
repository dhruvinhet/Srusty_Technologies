
import ProductPageLayout from "@/components/ProductPageLayout";

const HighPurityGeneration = () => {
  return (
    <ProductPageLayout
      title="High Purity Generation & Distribution System"
      subtitle="Ultra-pure water for critical applications"
      image="/images/High.jpg"
      description="Our high purity water generation and distribution systems are designed for industries requiring ultra-pure water with extremely low levels of contaminants. These systems integrate multiple purification technologies to achieve the highest water quality standards."
      features={[
        "Multi-stage purification",
        "Electrodeionization (EDI)",
        "UV sterilization",
        "Sanitizable distribution loops",
        "Real-time quality monitoring",
        "Validated system design"
      ]}
      applications={[
        "Semiconductor manufacturing",
        "Pharmaceutical production",
        "Laboratory research",
        "Power generation",
        "Biotechnology",
        "Medical device manufacturing"
      ]}
    />
  );
};

export default HighPurityGeneration;
