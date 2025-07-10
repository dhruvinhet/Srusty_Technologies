
import ProductPageLayout from "@/components/ProductPageLayout";

const WaterTreatmentPlant = () => {
  return (
    <ProductPageLayout
      title="Water Treatment Plant"
      subtitle="Advanced water purification solutions for all sources"
      image="/images/ALL.png"
      description="Our water treatment plants are designed to provide safe, clean, and potable water from various sources including rivers, lakes, groundwater, and municipal supplies. Using advanced filtration and purification technologies, we ensure water meets the highest quality standards for residential, commercial, and industrial use."
      features={[
        "Multi-stage filtration system",
        "Automated control systems",
        "Energy-efficient operation",
        "Minimal maintenance requirements",
        "Customizable capacity options",
        "Real-time monitoring capabilities"
      ]}
      applications={[
        "Residential communities",
        "Commercial buildings",
        "Hotels and resorts",
        "Educational institutions",
        "Healthcare facilities",
        "Manufacturing industries"
      ]}
    />
  );
};

export default WaterTreatmentPlant;
