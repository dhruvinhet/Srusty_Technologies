
import ProductPageLayout from "@/components/ProductPageLayout";

const ClarificationSystem = () => {
  return (
    <ProductPageLayout
      title="Clarification System"
      subtitle="Efficient solids removal and water clarification"
      image="/images/hrscc.jpg"
      description="Our clarification systems are designed to remove suspended solids, turbidity, and other particulate matter from water through sedimentation and flotation processes. These systems ensure clear, high-quality water for various applications."
      features={[
        "High-rate clarification",
        "Sludge recirculation system",
        "Chemical dosing integration",
        "Compact footprint design",
        "Automated operation",
        "Superior effluent quality"
      ]}
      applications={[
        "Municipal water treatment",
        "Industrial water clarification",
        "Wastewater treatment",
        "Mining water treatment",
        "Food & beverage industry",
        "Power plant water treatment"
      ]}
    />
  );
};

export default ClarificationSystem;
