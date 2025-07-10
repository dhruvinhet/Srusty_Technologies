import ProductPageLayout from "@/components/ProductPageLayout";

const zeroliquiddischarge = () => {
  return (
    <ProductPageLayout
      title="Zero Liquid Discharge (ZLD)"
      subtitle=""
      image="/images/7.jpg"
      description="Zero liquid discharge is process where no effluent or discharge is left over. Effluent is fed to the evaporator where dissolved solids precipitate as crystals. Crystals are dewatered and water vapour is condensed which is returned to the process."
      types={[
        "Metallic Evaporator",
        "Multi-Effect Evaporator"
      ]}
      applications={[
        "Power Plants",
        "Textile and Dyeing Industries",
        "Petrochemical and Refinery Units",
        "Desalination Plants",
        "Food & beverage industry",
        "Tanneries and Leather Industries"
      ]}
    />
  );
};

export default zeroliquiddischarge;