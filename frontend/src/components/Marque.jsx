import { motion } from "framer-motion";
import React from "react";

function Marque() {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 30s linear infinite;
          }

        `}
      </style>

      <div
        data-scroll
        data-scroll-speed="-0.1"
        className="w-full py-12 pb-20 -mb-20 rounded-t-3xl overflow-hidden relative bg-teal-900"
      >
        {/* Top Decorative Line */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1 }}
            className="h-1 mx-auto bg-gradient-to-r from-teal-100 to-white"
          ></motion.div>
        </div>

        {/* Marquee Section */}
        <div className="relative z-10 flex overflow-hidden whitespace-nowrap py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(8)].map((_, i) => (
              <h1
                key={i}
                className="marquee-text text-[8vw] lg:text-[6vw] font-semibold tracking-tight leading-none px-10 text-white"
              >
                BUILDING YOUR DIGITAL{" "}
                <span className="text-indigo-400">FUTURE</span>
              </h1>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1 }}
            className="h-1 mx-auto bg-gradient-to-r from-white to-teal-200"
          ></motion.div>
        </div>
      </div>
    </>
  );
}

export default Marque;
