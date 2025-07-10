
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Company</h1>
            <p className="text-xl text-blue-100">
              Leading the water treatment industry with innovative solutions and exceptional service
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-semibold text-lg">ABOUT US</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">About Our Company</h2>
              <p className="text-lg text-gray-700 mb-6">
                Srusty Technologies water provides a value to our customers, is our main objective and it is a 
                basis on which, we strive to build our market leadership in water and 
                wastewater, also effort for Cleaner and Greener environment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                As you know, untreated water is alarmingly unfit for human consumption due 
                to many impurities Present in water such as excess Dissolved Salts, 
                Microbiological Impurities and Suspended Solids etc. Hence treatment of 
                water becomes very essential to maintain the quality of life and here we step 
                in, with our wide range of expertise and experience in treating water.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl flex items-center justify-center">
                <div className="bg-white/90 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">COMPLETE WATER</h3>
                  <h4 className="text-xl font-semibold text-blue-800 mb-2">MANAGEMENT</h4>
                  <h4 className="text-xl font-semibold text-blue-800">SOLUTIONS</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3000+</div>
              <div className="text-gray-700">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
