
import ProductPageLayout from "@/components/ProductPageLayout";

const SewageTreatmentPlant = () => {
  return (
    <ProductPageLayout
      title="Sewage Treatment Plant"
      subtitle="Municipal and residential sewage treatment"
      image="/images/STP.jpg"
      description="Our sewage treatment plants are designed to treat domestic and municipal wastewater efficiently. Using proven biological and physical treatment processes, these systems remove contaminants and produce treated water that can be safely discharged or reused."
      features={[
        "Primary, secondary, and tertiary treatment",
        "Biological nutrient removal",
        "Odor control systems",
        "Energy recovery options",
        "Compact modular design",
        "Low operational costs"
      ]}
      applications={[
        "Municipal sewage treatment",
        "Residential complexes",
        "Commercial developments",
        "Industrial townships",
        "Institutional facilities",
        "Remote communities"
      ]}
    />
  );
};

export default SewageTreatmentPlant;
