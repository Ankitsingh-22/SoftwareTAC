import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Importing the arrow icon from react-icons
import wbg from "../../assets/webt.mp4";

function Featured() {
  return (
    <div
      id="featured"
      className="relative w-full py-20 bg-gradient-to-b from-[#1a202c] via-[#111] to-[#000] text-white"
    >
      {/* Background Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 opacity-20" />

      {/* Section Header */}
      <div className="w-full px-8 md:px-12 pb-10 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-teal-300">
          Featured Project
        </h1>
      </div>

      {/* Featured Card Section */}
      <div className="flex justify-center items-center pt-10 px-4 md:px-8 relative z-10">
        <div className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[50%] h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden rounded-lg shadow-2xl bg-gradient-to-t from-teal-600 to-teal-800">
          {/* Replacing Image with Video */}
          <video
            className="rounded-lg object-cover w-full h-full"
            src={wbg}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Project Title */}
          
        </div>
      </div>

      {/* Project Description */}
      <div className="mt-10 px-6 md:px-8 md:max-w-[60%] lg:max-w-[50%] mx-auto text-center relative z-10">
        <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white opacity-80">
          <span className="font-bold text-teal-400">Talent Connect</span> is a cutting-edge platform
          designed to bring together top talent and innovative opportunities. With a seamless and
          user-friendly interface, we connect the best professionals with leading organizations in
          the industry.
        </p>
      </div>

      {/* Call to Action Button with React Icons */}
      <div className="w-full mt-5 flex justify-center relative z-10">
        <a
          href="https://www.talentsconnectss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 px-8 py-4 mt-10 bg-teal-500 rounded-full text-white hover:bg-teal-600 transition-all"
        >
          VISIT TALENT CONNECT
          <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Featured;