import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Factory, Recycle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const products = [
    {
      title: "Water Treatment Plant",
      description: "Advanced purification systems for clean, safe drinking water from various sources.",
      icon: Droplets,
      image: "/images/ALL.png",
      link: "/products/water-treatment-plant",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Effluent Treatment Plant",
      description: "Industrial wastewater treatment solutions meeting environmental compliance standards.",
      icon: Factory,
      image: "/images/ETP.jpg",
      link: "/products/effluent-treatment-plant",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Sewage Treatment Plant",
      description: "Municipal and residential sewage treatment for sustainable water management.",
      icon: Recycle,
      image: "/images/STP.jpg",
      link: "/products/sewage-treatment-plant",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "High Purity Generation",
      description: "Ultra-pure water systems for pharmaceutical and semiconductor industries.",
      icon: Zap,
      image: "/images/High.jpg",
      link: "/products/high-purity-generation-distribution",
      gradient: "from-orange-500 to-red-500"
    },
    // Add more plants here:
    {
      title: "All Sources of Water",
      description: "Solutions for treating all types of water sources.",
      icon: Droplets,
      image: "/images/ALL.png",
      link: "/products/all-sources-of-water",
      gradient: "from-blue-400 to-blue-700"
    },
    {
      title: "Filtration",
      description: "Comprehensive filtration systems for various applications.",
      icon: Droplets,
      image: "/images/Filtration.jpg",
      link: "/products/filtration",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Clarification System",
      description: "Efficient clarification for water and wastewater.",
      icon: Factory,
      image: "/images/hrscc.jpg",
      link: "/products/clarification-system",
      gradient: "from-green-400 to-green-700"
    },
    {
      title: "Demineralisation Plant",
      description: "Remove minerals for high-purity water needs.",
      icon: Zap,
      image: "/images/DM.jpg",
      link: "/products/demineralisation-plant",
      gradient: "from-yellow-400 to-yellow-700"
    },
    {
      title: "Ultra Filtration System",
      description: "Advanced ultra-filtration for fine particle removal.",
      icon: Recycle,
      image: "/images/UF.jpg",
      link: "/products/ultra-filtration-system",
      gradient: "from-indigo-400 to-indigo-700"
    },
    {
      title: "Reverse Osmosis System",
      description: "High-efficiency RO systems for pure water.",
      icon: Droplets,
      image: "/images/RO.jpg",
      link: "/products/reverse-osmosis-system",
      gradient: "from-blue-600 to-blue-900"
    },
    {
      title: "Nano Filtration System",
      description: "Nano filtration for selective contaminant removal.",
      icon: Zap,
      image: "/images/Nano.jpg",
      link: "/products/nano-filtration-system",
      gradient: "from-pink-400 to-pink-700"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="products">
      <motion.div 
        ref={sectionRef}
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            OUR PRODUCTS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Water Treatment
            <br />
            <span className="text-blue-600 animate-pulse">
              Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of water treatment systems designed to meet diverse industrial, 
            commercial, and municipal requirements with cutting-edge technology.
          </p>
        </motion.div>

        <div className="overflow-x-hidden relative w-full">
          <motion.div
            className="flex gap-8"
            style={{ width: `${products.length * 2 * 320}px` }} // 320px per card, doubled for seamless loop
            animate={{ x: ["0%", `-${products.length * 320}px`] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: products.length * 4 // SLOWER: 10 seconds per card, adjust as needed
            }}
          >
            {[...products, ...products].map((product, index) => (
              <div
                key={index}
                className="w-[320px] flex-shrink-0"
              >
                <Link to={product.link} className="block h-full">
                  <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                      <div
                        className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-lg flex items-center justify-center shadow-lg`}
                      >
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {product.description}
                      </p>
                      <Button
                        variant="ghost"
                        className="w-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300 justify-between px-0"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Products;
