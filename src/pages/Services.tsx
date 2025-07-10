
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive water treatment solutions for all your needs
            </p>
          </div>
        </div>
      </section>

      <Services />
      <Footer />
    </div>
  );
};

export default ServicesPage;
