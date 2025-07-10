
import ProductPageLayout from "@/components/ProductPageLayout";

const DemineralisationPlant = () => {
  return (
    <ProductPageLayout
      title="Demineralisation Plant"
      subtitle="Complete mineral removal for ultra-pure water"
      image="/images/DM.jpg"
      description="Our demineralisation plants remove dissolved minerals and salts from water using ion exchange technology. These systems produce high-quality demineralized water suitable for industrial processes requiring ultra-pure water."
      features={[
        "Ion exchange technology",
        "Regeneration systems",
        "Mixed bed polishing",
        "Conductivity monitoring",
        "Automated controls",
        "High purity output"
      ]}
      applications={[
        "Power plant boiler feed",
        "Electronics manufacturing",
        "Pharmaceutical production",
        "Laboratory applications",
        "Steam generation",
        "High-pressure boilers"
      ]}
    />
  );
};

export default DemineralisationPlant;
