import React from "react";
import { FaGlobe, FaMobileAlt, FaRobot, FaTools } from "react-icons/fa";




const SoftwareCompanyHomePage = () => {
  return (
    <div data-scroll data-scroll-speed=".06" className=" pt-30 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col items-center px-6 py-12 rounded-t-3xl">
      
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Empowering Businesses with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-500 animate-text">
            Next-Gen Tech Solutions
          </span>
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          Delivering innovative solutions for a digital-first world.
        </p>
      </header>

      {/* Card Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl">
        {/* Card 1 */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 flex flex-col items-center text-center relative overflow-hidden">
          <div className="mb-6">
            <FaGlobe className="text-green-400 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Transformative Tech Solutions</h3>
          <p className="text-sm text-gray-400">
            Build modern, responsive designs that provide a seamless experience across devices.
          </p>
          <button
           onClick={() => {
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            } else {
              console.error("Contact section not found!");
            }
          }}
          className="mt-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-110 hover:shadow-lg  cursor-pointer">
            Learn More
          </button>
          {/* Background animation */}
          <div className="absolute bottom-4 right-4 h-12 w-12 bg-green-500 rounded-full blur-xl opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 opacity-10 hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 flex flex-col items-center text-center relative overflow-hidden">
          <div className="mb-6">
            <FaMobileAlt className="text-orange-400 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Seamless User Experience</h3>
          <p className="text-sm text-gray-400">
            Develop high-quality applications that enhance user engagement and drive growth.
          </p>
          <button className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-110 hover:shadow-lg">
            Learn More
          </button>
          {/* Background animation */}
          <div className="absolute bottom-4 right-4 h-12 w-12 bg-orange-500 rounded-full blur-xl opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 opacity-10 hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/50 flex flex-col items-center text-center relative overflow-hidden">
          <div className="mb-6">
            <FaRobot className="text-yellow-400 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">AI-Driven Strategies</h3>
          <p className="text-sm text-gray-400">
            Leverage AI to enhance automation, decision-making, and business efficiency.
          </p>
          <button className="mt-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-110 hover:shadow-lg">
            Learn More
          </button>
          {/* Background animation */}
          <div className="absolute bottom-4 right-4 h-12 w-12 bg-yellow-500 rounded-full blur-xl opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-red-500 opacity-10 hover:opacity-20 transition-opacity duration-300"></div>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex flex-col items-center text-center relative overflow-hidden">
          <div className="mb-6">
            <FaTools className="text-purple-400 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">24x7 Maintenance & Support</h3>
          <p className="text-sm text-gray-400">
            Provide round-the-clock support to keep your systems running smoothly and efficiently.
          </p>
          <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-110 hover:shadow-lg">
            Learn More
          </button>
          {/* Background animation */}
          <div className="absolute bottom-4 right-4 h-12 w-12 bg-purple-500 rounded-full blur-xl opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCompanyHomePage;
