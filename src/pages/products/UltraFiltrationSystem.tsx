
import ProductPageLayout from "@/components/ProductPageLayout";

const UltraFiltrationSystem = () => {
  return (
    <ProductPageLayout
      title="Ultra Filtration System"
      subtitle="Membrane-based water purification technology"
      image="/images/UF.jpg"
      description="Our ultra filtration systems use advanced membrane technology to remove bacteria, viruses, suspended solids, and high molecular weight compounds from water. These systems provide reliable, chemical-free water treatment."
      features={[
        "Hollow fiber membrane technology",
        "Automatic backwashing",
        "Chemical-free operation",
        "High rejection rates",
        "Long membrane life",
        "Low energy consumption"
      ]}
      applications={[
        "Pre-treatment for RO systems",
        "Drinking water production",
        "Wastewater reclamation",
        "Food & beverage processing",
        "Biotechnology applications",
        "Municipal water treatment"
      ]}
    />
  );
};

export default UltraFiltrationSystem;
