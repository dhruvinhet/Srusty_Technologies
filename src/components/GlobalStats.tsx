import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Building, Award, Globe } from "lucide-react";

const GlobalStats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

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

  // Animated Counter Component
  const AnimatedCounter = ({ target, suffix = "", duration = 2 }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const [display, setDisplay] = useState(null);

    useEffect(() => {
      if (isInView) {
        const animation = animate(count, target, {
          duration,
          onUpdate: (latest) => setDisplay(Math.round(latest)),
        });
        return animation.stop;
      }
    }, [count, target, duration, isInView]);

    return (
      <motion.span className="text-4xl md:text-5xl font-bold text-white">
        {display !== null ? display : ""}
        {display !== null ? suffix : ""}
      </motion.span>
    );
  };

  const stats = [
    {
      icon: Users,
      value: 3000,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Award,
      value: 20,
      suffix: "+",
      label: "Years Experience",
      description: "Industry expertise",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"
          animate={{ 
            rotate: -360,
            y: [-20, 20, -20]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/20 rounded-full"
          animate={{ 
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            rotate: 180
          }}
          transition={{ 
            x: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
        />
      </div>

      <motion.div 
        ref={sectionRef}
        className="container mx-auto px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-block bg-white/10 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            OUR ACHIEVEMENTS
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry
            <br />
            <motion.span 
              className="text-blue-300"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
            </motion.span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has earned us recognition and trust from clients.
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${stats.length} gap-8 justify-center`}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group flex flex-col justify-center h-full"
              variants={itemVariants}
              custom={index}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 group-hover:bg-white/15 transition-all duration-300 flex flex-col items-center min-h-[300px] h-full"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)"
                }}
              >
                {/* Animated Icon Background */}
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Animated Counter */}
                <div className="mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>

                <motion.h3 
                  className="text-xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.label}
                </motion.h3>
                
                <p className="text-blue-200 text-sm">
                  {stat.description}
                </p>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-colors duration-300"
                  whileHover={{
                    borderColor: "rgba(255, 255, 255, 0.5)"
                  }}
                />

                {/* Floating Particles */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full"
                  animate={{
                    y: [-5, 5, -5],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/20 rounded-full"
                  animate={{
                    y: [5, -5, 5],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <motion.p 
            className="text-blue-100 text-lg max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            Join thousands of satisfied customers who trust us for their water treatment needs.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GlobalStats;
