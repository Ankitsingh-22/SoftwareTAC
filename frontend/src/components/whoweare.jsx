import React from "react";
import { FaUserAlt, FaAward, FaCode } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="about-section bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-12 sm:py-20 relative">
      {/* Background Animations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-indigo-500 blur-3xl opacity-30 rounded-full animate-pulse"
          style={{ top: "20%", left: "25%" }}
        ></div>
        <div
          className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-pink-500 blur-3xl opacity-30 rounded-full animate-pulse-slow"
          style={{ bottom: "30%", right: "10%" }}
        ></div>
      </div>

      <div id="about-us" className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-12 sm:space-y-0">
          {/* Left Column - Text Content */}
          <div className="sm:w-1/2 text-center sm:text-left space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight text-indigo-400">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              We are a team of passionate individuals combining creativity and
              technical expertise to build stunning, user-friendly digital
              experiences.
            </p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
              {/* Experience Points */}
              <div className="flex flex-col sm:flex-row items-center space-x-2 text-base sm:text-lg">
                <FaUserAlt size={20} className="text-indigo-500" />
                <span className="text-sm sm:text-base">Gen Z Energy</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-x-2 text-base sm:text-lg">
                <FaAward size={20} className="text-teal-400" />
                <span className="text-sm sm:text-base">Next-Level Creativity</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-x-2 text-base sm:text-lg">
                <FaCode size={20} className="text-orange-500" />
                <span className="text-sm sm:text-base">Tech-Savvy Team</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Illustration */}
          <div className="sm:w-1/2 flex justify-center">
            <img
              src="https://i.postimg.cc/bNxrXKqy/rb-2149365021.png"
              alt="About Us"
              className="w-56 sm:w-64 md:w-80 h-auto transform hover:scale-105 transition-all duration-500 ease-in-out rounded-lg"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-indigo-400">Our Vision</h3>
            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              We strive to provide innovative and efficient solutions for our
              clients, helping them build a digital presence that truly reflects
              their brand.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-teal-400">Our Mission</h3>
            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              Our mission is to deliver high-quality, creative designs that
              elevate our clients' businesses and make a lasting impact in their
              industries.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-500">Our Values</h3>
            <p className="text-gray-300 mt-4 text-sm sm:text-base">
              We believe in transparency, collaboration and pushing the
              boundaries of design and technology to create meaningful results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
