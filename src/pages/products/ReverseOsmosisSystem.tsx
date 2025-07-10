
import ProductPageLayout from "@/components/ProductPageLayout";

const ReverseOsmosisSystem = () => {
  return (
    <ProductPageLayout
      title="Reverse Osmosis System"
      subtitle="Advanced membrane technology for pure water"
      image="/images/RO.jpg"
      description="Our reverse osmosis systems utilize semi-permeable membranes to remove dissolved salts, organics, bacteria, and other contaminants from water. These systems deliver consistently high-quality water for various applications."
      features={[
        "High-efficiency RO membranes",
        "Energy recovery systems",
        "Automatic controls",
        "CIP (Clean-in-place) systems",
        "Multiple stage configuration",
        "Low maintenance operation"
      ]}
      applications={[
        "Drinking water production",
        "Industrial process water",
        "Boiler feed water",
        "Electronics industry",
        "Pharmaceutical applications",
        "Food & beverage processing"
      ]}
    />
  );
};

export default ReverseOsmosisSystem;
