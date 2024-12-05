import React from "react";
import { FaGlobe, FaMobileAlt, FaRobot, FaTools } from "react-icons/fa";
import { Link } from "react-scroll";

const SoftwareCompanyHomePage = () => {
  const cards = [
    {
      icon: <FaGlobe className="text-green-400 text-5xl" />,
      title: "Transformative Tech Solutions",
      description:
        "Build modern, responsive designs that provide a seamless experience across devices.",
      gradient: "from-blue-500 to-teal-500",
      shadowColor: "shadow-blue-500/50",
    },
    {
      icon: <FaMobileAlt className="text-orange-400 text-5xl" />,
      title: "Seamless User Experience",
      description:
        "Develop high-quality applications that enhance user engagement and drive growth.",
      gradient: "from-orange-500 to-yellow-500",
      shadowColor: "shadow-orange-500/50",
    },
    {
      icon: <FaRobot className="text-yellow-400 text-5xl" />,
      title: "AI-Driven Strategies",
      description:
        "Leverage AI to enhance automation, decision-making and business efficiency.",
      gradient: "from-yellow-500 to-red-500",
      shadowColor: "shadow-yellow-500/50",
    },
    {
      icon: <FaTools className="text-purple-400 text-5xl" />,
      title: "24x7 Maintenance & Support",
      description:
        "Provide round-the-clock support to keep your systems running smoothly and efficiently.",
      gradient: "from-purple-500 to-pink-500",
      shadowColor: "shadow-purple-500/50",
    },
  ];

  return (
    <div
      data-scroll
      data-scroll-speed=".06"
      className="pt-30 bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col items-center px-6 py-12 rounded-t-3xl"
    >
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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl place-items-stretch mb-5">
        {cards.map((card, index) => (
          <Link
            key={index}
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg h-full flex flex-col justify-between transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:{card.shadowColor} text-center relative overflow-hidden">
              {/* Centered Icon Container */}
              <div className="mb-6 flex items-center justify-center h-24">
                {card.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
                <p className="text-sm text-gray-400">{card.description}</p>
              </div>
              <button
                className={`mt-4 bg-gradient-to-r ${card.gradient} text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-110 hover:shadow-lg`}
              >
                Learn More
              </button>
              {/* Background animation */}
              <div
                className={`absolute bottom-4 right-4 h-12 w-12 ${card.gradient.split(
                  " "
                )[0]} rounded-full blur-xl opacity-30`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-10 hover:opacity-20 transition-opacity duration-300`}
              ></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SoftwareCompanyHomePage;
