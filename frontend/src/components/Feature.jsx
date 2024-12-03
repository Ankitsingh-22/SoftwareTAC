import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon from react-icons
import wbg from "../../assets/web.mp4";

function Featured() {
  const [inView, setInView] = useState(false);
  const scrollAnimation = useAnimation();

  // Check if the component is in view
  const handleScroll = () => {
    const position = window.scrollY + window.innerHeight;
    const elementTop = document.getElementById("featured").offsetTop;
    const elementHeight = document.getElementById("featured").offsetHeight;
    if (position >= elementTop && position <= elementTop + elementHeight) {
      setInView(true);
    } else {
      setInView(false);
    }
  };

  // Use effect for scrolling
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll animation
  useEffect(() => {
    if (inView) {
      scrollAnimation.start({ opacity: 1, y: 0 });
    } else {
      scrollAnimation.start({ opacity: 0, y: 50 });
    }
  }, [inView, scrollAnimation]);

  return (
    <div
      id="featured"
      className="relative w-full py-20 bg-gradient-to-b from-[#1a202c] via-[#111] to-[#000] text-white"
    >
      {/* Background Animated Circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 opacity-30"
        animate={{
          x: [0, 50, -50],
          y: [0, 30, -30],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 opacity-20"
        animate={{
          x: [0, -30, 30],
          y: [0, -20, 20],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 7,
          ease: "easeInOut",
        }}
      />

      {/* Section Header */}
      <motion.div
        className="w-full px-8 md:px-12 pb-10 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-center text-teal-300">
          Featured Project
        </h1>
      </motion.div>

      {/* Featured Card Section */}
      <div className="flex justify-center items-center pt-10 px-4 md:px-8 relative z-10">
        <motion.div
          className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[50%] h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden rounded-lg shadow-2xl bg-gradient-to-t from-teal-600 to-teal-800"
          initial={{ opacity: 0, y: 50 }}
          animate={scrollAnimation}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Replacing Image with Video */}
          <motion.video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={wbg}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Project Title */}
          <motion.h1
            className="absolute left-1/2 -translate-x-1/2 top-3/4 text-teal-500 z-10 leading-none tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
          >
            {"".split("").map((item, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
              >
                {item}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
      </div>

      {/* Project Description */}
      <motion.div
        className="mt-10 px-6 md:px-8 md:max-w-[60%] lg:max-w-[50%] mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={scrollAnimation}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
      >
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white opacity-80">
          <span className="font-bold text-teal-400">Talent Connect</span> is a cutting-edge platform
          designed to bring together top talent and innovative opportunities. With a seamless and
          user-friendly interface, we connect the best professionals with leading organizations in
          the industry.
        </p>
      </motion.div>

      {/* Call to Action Button with React Icons */}
      <motion.div
        className="w-full mt-5 flex justify-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={scrollAnimation}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
      >
        <motion.a
          href="https://www.talentsconnectss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-8 py-4 mt-10 bg-teal-500 rounded-full text-white hover:bg-teal-600 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          VISIT TALENT CONNECT
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Featured;
