
import ProductPageLayout from "@/components/ProductPageLayout";

const EffluentTreatmentPlant = () => {
  return (
    <ProductPageLayout
      title="Effluent Treatment Plant"
      subtitle="Industrial wastewater treatment solutions"
      image="/images/ETP.jpg"
      description="Our effluent treatment plants are engineered to treat industrial wastewater effectively, removing contaminants and pollutants to meet environmental discharge standards. These systems help industries comply with regulatory requirements while protecting the environment."
      features={[
        "Advanced biological treatment",
        "Chemical precipitation systems",
        "Sludge management solutions",
        "Automated monitoring and control",
        "Compliance with environmental standards",
        "Cost-effective operation"
      ]}
      applications={[
        "Textile industries",
        "Chemical manufacturing",
        "Pharmaceutical companies",
        "Food processing plants",
        "Paper and pulp mills",
        "Metal finishing industries"
      ]}
    />
  );
};

export default EffluentTreatmentPlant;
