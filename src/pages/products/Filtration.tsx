
import ProductPageLayout from "@/components/ProductPageLayout";

const Filtration = () => {
  return (
    <ProductPageLayout
      title="Filtration Systems"
      subtitle="Advanced filtration technology for pure water"
      image="/images/Filtration.jpg"
      description="Our filtration systems utilize cutting-edge technology to remove suspended solids, turbidity, and other contaminants from water. These systems are designed for high efficiency, long service life, and minimal maintenance requirements."
      features={[
        "Multi-media filtration",
        "Automatic backwashing",
        "High flow rate capacity",
        "Low pressure drop",
        "Corrosion-resistant materials",
        "Easy maintenance access"
      ]}
      applications={[
        "Pre-treatment for RO systems",
        "Swimming pool filtration",
        "Industrial process water",
        "Potable water treatment",
        "Cooling tower makeup water",
        "Irrigation water treatment"
      ]}
    />
  );
};

export default Filtration;
