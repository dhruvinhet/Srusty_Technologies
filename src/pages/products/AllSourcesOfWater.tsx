
import ProductPageLayout from "@/components/ProductPageLayout";

const AllSourcesOfWater = () => {
  return (
    <ProductPageLayout
      title="All Sources of Water"
      subtitle="Comprehensive water treatment for every source"
      image="/images/ALL.png"
      description="Our comprehensive water treatment solutions are designed to handle water from all possible sources - surface water, groundwater, seawater, brackish water, and recycled water. Each solution is customized based on the specific characteristics and quality requirements of the source water."
      features={[
        "Source-specific treatment design",
        "Multi-barrier approach",
        "Scalable treatment capacity",
        "Advanced pre-treatment systems",
        "Quality monitoring systems",
        "Flexible configuration options"
      ]}
      applications={[
        "Surface water treatment",
        "Groundwater purification",
        "Seawater desalination",
        "Brackish water treatment",
        "Rainwater harvesting",
        "Greywater recycling"
      ]}
    />
  );
};

export default AllSourcesOfWater;
