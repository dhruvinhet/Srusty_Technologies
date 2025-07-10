
import ProductPageLayout from "@/components/ProductPageLayout";

const NanoFiltrationSystem = () => {
  return (
    <ProductPageLayout
      title="Nano Filtration System"
      subtitle="Selective membrane separation technology"
      image="/images/Nano.jpg"
      description="Our nano filtration systems provide selective separation of organic molecules and multivalent ions while allowing monovalent salts to pass through. This technology offers precise control over water quality for specific applications."
      features={[
        "Selective ion removal",
        "Organic compound rejection",
        "Lower pressure operation",
        "High water recovery",
        "Minimal chemical usage",
        "Compact system design"
      ]}
      applications={[
        "Water softening",
        "Color removal",
        "Organics concentration",
        "Pharmaceutical processing",
        "Food industry applications",
        "Textile wastewater treatment"
      ]}
    />
  );
};

export default NanoFiltrationSystem;
