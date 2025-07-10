import { Award, Clock, Users, Leaf } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Leading Quality",
      description: "Our water meets and exceeds all federal and state quality standards with rigorous testing protocols."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "On-time delivery and prompt service responses. We value your time and keep our commitments."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable practices and environmentally responsible solutions for a better tomorrow."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Srusty Technologies ?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience the difference that quality, reliability, and exceptional service make
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-blue-100">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
