
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png"; // Update the path to your actual logo image

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isWaterTreatmentOpen, setIsWaterTreatmentOpen] = useState(false);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.15 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className="bg-white shadow-lg fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
     
      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
                {/* Replace the span with your logo image */}
                <img src={logo} alt="Shrusti Technology Logo" className="w-10 h-10 object-contain" />
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-xl font-bold text-gray-900">Srusty Technologies</div>
                <div className="text-sm text-gray-600">Srusty Technologies Pvt. Ltd.</div>
              </motion.div>
            </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.div whileHover={{ y: -2 }}>
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">HOME</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">ABOUT US</Link>
            </motion.div>
            
            <div className="relative">
              <motion.button 
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center transition-colors duration-200"
                whileHover={{ y: -2 }}
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                PRODUCTS 
                <motion.div
                  animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="ml-1 w-4 h-4" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-lg border border-gray-100 z-50"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="py-2">
                      <div className="relative">
                        <motion.div
                          whileHover={{ backgroundColor: "#eff6ff", x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <button 
                            onClick={() => setIsWaterTreatmentOpen(!isWaterTreatmentOpen)}
                            className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 w-full text-left"
                          >
                            Water Treatment Plant 
                            <motion.div
                              animate={{ rotate: isWaterTreatmentOpen ? -90 : -90 }}
                              whileHover={{ x: 3 }}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>
                        </motion.div>
                        <AnimatePresence>
                          {isWaterTreatmentOpen && (
                            <motion.div 
                              className="mt-2 w-full bg-white shadow-xl rounded-lg border border-gray-100 z-40 lg:absolute lg:left-full lg:top-0 lg:mt-0 lg:w-64"

                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                            >
                              <div className="py-2">
                                {[
                                  { to: "/products/all-sources-of-water", label: "All Sources of Water" },
                                  { to: "/products/filtration", label: "Filtration" },
                                  { to: "/products/clarification-system", label: "Clarification System" },
                                  { to: "/products/demineralisation-plant", label: "Demineralisation Plant" },
                                  { to: "/products/ultra-filtration-system", label: "Ultra Filtration System" },
                                  { to: "/products/reverse-osmosis-system", label: "Reverse Osmosis System" },
                                  { to: "/products/nano-filtration-system", label: "Nano Filtration System" }
                                ].map((item, index) => (
                                  <motion.div
                                    key={index}
                                    whileHover={{ backgroundColor: "#eff6ff", x: 5 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <Link 
                                      to={item.to} 
                                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                                      onClick={() => {
                                        setIsProductsOpen(false);
                                        setIsWaterTreatmentOpen(false);
                                      }}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      {[
                        { to: "/products/effluent-treatment-plant", label: "Effluent Treatment Plant" },
                        { to: "/products/sewage-treatment-plant", label: "Sewage Treatment Plant" },
                        { to: "/products/high-purity-generation-distribution", label: "High Purity Generation & Distribution System" },
                        { to: "/products/zero-liquid-discharge", label: "Zero Liquid Discharge (ZLD)" },
                        { to: "/products/swimming-pool-systems", label: "Swimming Pool Systems" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ backgroundColor: "#eff6ff", x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link 
                            to={item.to} 
                            className="block px-4 py-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div whileHover={{ y: -2 }}>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">SERVICES</Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }}>
              <Link to="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">GALLERY</Link>
            </motion.div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 transition-all duration-300 shadow-lg hover:shadow-xl">
                  CONTACT US
                </Button>
              </motion.div>
            </Link>
            <motion.button 
              className="lg:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden py-4 border-t"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="space-y-4">
                {[
                  { to: "/", label: "HOME" },
                  { to: "/about", label: "ABOUT US" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      to={item.to} 
                      className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  <button 
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center transition-colors duration-200"
                  >
                    PRODUCTS 
                    <motion.div
                      animate={{ rotate: isProductsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div 
                        className="ml-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div>
                          <button 
                            onClick={() => setIsWaterTreatmentOpen(!isWaterTreatmentOpen)}
                            className="w-full text-left text-gray-700 hover:text-blue-600 flex justify-between items-center transition-colors duration-200 px-4 py-2"
                          >
                            Water Treatment Plant 
                            <motion.div
                              animate={{ rotate: isWaterTreatmentOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-4 h-4" />
                            </motion.div>
                          </button>
                          <AnimatePresence>
                            {isWaterTreatmentOpen && (
                              <motion.div 
                                className="ml-4 mt-2 space-y-2"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                {[
                                  { to: "/products/all-sources-of-water", label: "All Sources of Water" },
                                  { to: "/products/filtration", label: "Filtration" },
                                  { to: "/products/clarification-system", label: "Clarification System" },
                                  { to: "/products/demineralisation-plant", label: "Demineralisation Plant" },
                                  { to: "/products/ultra-filtration-system", label: "Ultra Filtration System" },
                                  { to: "/products/reverse-osmosis-system", label: "Reverse Osmosis System" },
                                  { to: "/products/nano-filtration-system", label: "Nano Filtration System" }
                                ].map((item, index) => (
                                  <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: index * 0.1 }}
                                  >
                                    <Link 
                                      to={item.to} 
                                      className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsProductsOpen(false);
                                        setIsWaterTreatmentOpen(false);
                                      }}
                                    >
                                      {item.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        {[
                          { to: "/products/effluent-treatment-plant", label: "Effluent Treatment Plant" },
                          { to: "/products/sewage-treatment-plant", label: "Sewage Treatment Plant" },
                          { to: "/products/high-purity-generation-distribution", label: "High Purity Generation & Distribution System" },
                          { to: "/products/zero-liquid-discharge", label: "Zero Liquid Discharge (ZLD)" },
                          { to: "/products/swimming-pool-systems", label: "Swimming Pool Systems" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: (index + 7) * 0.1 }}
                          >
                            <Link 
                              to={item.to} 
                              className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsProductsOpen(false);
                              }}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {[
                  { to: "/services", label: "SERVICES" },
                  { to: "/gallery", label: "GALLERY" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: (index + 3) * 0.1 }}
                  >
                    <Link 
                      to={item.to} 
                      className="block text-gray-700 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
