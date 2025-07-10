import { Button } from "@/components/ui/button";
import { CheckCircle, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    "Licensed & Insured Professionals",
    "24/7 Customer Support",
    "Eco-Friendly Solutions",
    "Competitive Pricing",
    "Satisfaction Guarantee"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted Water Experts Since 2002
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Srusty Technologies, we've been providing exceptional water services to communities 
              for more than 20 years. Our commitment to quality, reliability, and customer satisfaction 
              has made us the leading water service provider in the region.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From residential water delivery to complex commercial installations, we bring 
              expertise, professionalism, and cutting-edge technology to every project.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Quality Guaranteed</h3>
                <p className="text-blue-700">Every drop meets the highest standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
