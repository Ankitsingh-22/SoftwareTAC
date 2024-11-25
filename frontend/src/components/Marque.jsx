import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <div className="w-full bg-black py-12 rounded-t-3xl overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full bg-gradient-to-b from-gray-900 to-black"
        />
      </div>

      {/* Marquee Section */}
      <div className="relative z-10 border-t border-b border-gray-700 flex overflow-hidden whitespace-nowrap py-6">
        {[...Array(3)].map((_, i) => (
          <motion.h1
            key={i}
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15,
            }}
            className="text-[8vw] lg:text-[6vw] font-extrabold text-white tracking-tight leading-none px-10"
          >
            BUILDING YOUR DIGITAL  
            <span className="text-blue-500"> FUTURE</span>
          </motion.h1>
        ))}
      </div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mt-12 relative z-10"
      >
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Empowering Software Excellence
        </h2>
        <p className="text-lg lg:text-xl text-gray-400">
          Crafting innovative, scalable, and secure solutions for a modern world.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-white text-black rounded-lg shadow-lg font-medium text-lg transition-all hover:bg-gray-200"
        >
          Learn More
        </motion.button>
      </motion.div>

      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-white to-gray-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-br from-white to-gray-700 rounded-full blur-3xl"
        />
      </div>
    </div>
  );
}

export default Marque;
