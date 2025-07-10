import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { ReactNode } from "react";
import { types } from "util";

interface ProductPageLayoutProps {
  title: string;
  subtitle: string;
  image: string;
  description: ReactNode;
  features?: string[];
  types?: string[];
  applications?: string[];
}

const ProductPageLayout = ({
  title,
  subtitle,
  image,
  description,
  features,
  types,
  applications,
}: ProductPageLayoutProps) => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const featuresRef = useRef(null);
  const applicationsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const contentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const applicationsInView = useInView(applicationsRef, {
    once: true,
    amount: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 right-20 w-40 h-40 border border-white/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 mb-8"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Product Image and Description */}
      <motion.section
        ref={contentRef}
        className="py-20 bg-gray-50"
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div className="relative" variants={itemVariants}>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl transform rotate-3"
                whileHover={{ rotate: 6 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src={image}
                alt={title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                animate={{
                  y: [-10, 10, -10],
                  transition: { duration: 3, repeat: Infinity },
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-500 rounded-full opacity-40"
                animate={{
                  y: [10, -10, 10],
                  x: [-5, 5, -5],
                  transition: { duration: 4, repeat: Infinity },
                }}
              />
            </motion.div>

            <motion.div className="lg:pl-8" variants={itemVariants}>
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                About {title}
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed mb-8"
                variants={itemVariants}
              >
                {description}
              </motion.p>

              {/* Only show for Filtration Systems */}
              {title === "Filtration Systems" && (
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-lg border border-blue-100 mb-8"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    Type of Filters
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Gravity Filters",
                      "Dual media filters",
                      "Multigrade filters",
                      "Activated carbon filters",
                      "Micron cartridge filters",
                      "Side stream filters",
                    ].map((filter, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-800">{filter}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Only show for Clarification System */}
              {title === "Clarification System" && (
                <motion.div
                  className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-lg border border-blue-100 mb-8"
                  variants={itemVariants}
                >
                  <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    Clarification Technologies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Clariflocculator",
                      "High rate solid contact clarifier",
                      "Lamella Clarifier",
                      "Activated carbon filters",
                      "Tube settler",
                    ].map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500" />
                        <span className="text-gray-800">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              <motion.div
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Why Choose Our Solution?
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Advanced Technology
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Energy Efficient
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Low Maintenance
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      {features && features.length > 0 && (
        <motion.section
          ref={featuresRef}
          className="py-20 bg-white"
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our {title.toLowerCase()} comes with advanced features designed
                for optimal performance and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Advanced implementation ensuring optimal performance and
                    reliability.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {types && types.length > 0 && (
        <motion.div
          className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-lg border border-blue-100 mb-8"
          variants={itemVariants}
          initial="visible"
          animate="visible"
        >
          <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            Types of {title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {types.map((type, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-blue-500" />
                <span className="text-gray-800">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Applications Section */}
      {applications && applications.length > 0 && (
        <motion.section
          ref={applicationsRef}
          className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
          initial="hidden"
          animate={applicationsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Applications
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Versatile solutions suitable for various industries and
                applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="flex items-center">
                    <motion.div
                      className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    </motion.div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {application}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      <Footer />
    </div>
  );
};

export default ProductPageLayout;
