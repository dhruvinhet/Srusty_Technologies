import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Wrench, Shield, Truck, Home, Building } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "System Installation",
      description: "Professional installation of water filtration and purification systems for homes and businesses."
    },
    {
      icon: Truck,
      title: "Emergency Services",
      description: "24/7 emergency water services for urgent situations and critical water needs."
    },
    {
      icon: Home,
      title: "Residential Solutions",
      description: "Complete water solutions tailored for homes, including filtration and softening systems."
    },
    {
      icon: Building,
      title: "Commercial Services",
      description: "Large-scale water solutions for businesses, offices, and industrial facilities."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Water Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive water solutions designed to meet all your residential and commercial needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md hover-scale">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
