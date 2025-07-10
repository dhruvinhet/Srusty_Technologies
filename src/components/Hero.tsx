import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-20 h-20 border border-white/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/4 w-16 h-16 border border-white/20 rounded-full"
          animate={floatingAnimation}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen container mx-auto px-4">
        {/* Text Content */}
        <motion.div
  className="flex-1 text-center lg:text-left pt-36 md:pt-40" // <- Added padding here
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h1
    className="text-4xl md:text-6xl font-bold mb-6"
    variants={itemVariants}
  >
    Pure Water, <span className="text-blue-200">Pure Trust</span>
  </motion.h1>
  <motion.p
    className="text-lg md:text-2xl mb-8 text-blue-100 max-w-xl mx-auto lg:mx-0"
    variants={itemVariants}
  >
    Delivering advanced water treatment solutions for industries, businesses, and communities since 2002. Experience quality, reliability, and innovation with Srusty Technologies.
  </motion.p>
  <motion.div
    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
    variants={itemVariants}
  >
    <Button
      size="lg"
      className="bg-white text-blue-700 hover:bg-blue-100 font-semibold flex items-center gap-2"
      asChild
    >
      <a href="#contact">
        <Phone className="w-5 h-5" />
        Get a Free Consultation
      </a>
    </Button>
  </motion.div>

        </motion.div>
        {/* Optional: Hero Image or Illustration */}
        <motion.div
  className="flex-1 mt-12 lg:mt-0 flex justify-center"
  variants={imageVariants}
  initial="hidden"
  animate="visible"
>
  <img
    src="src/assets/logo.png"
    alt="Water Treatment Plant"
    className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-white/10 mt-[100px]" // <- Corrected spacing
  />
</motion.div>

      </div>
    </section>
  );
};

export default Hero;
