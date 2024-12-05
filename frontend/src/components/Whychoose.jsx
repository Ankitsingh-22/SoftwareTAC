import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for smooth animations
import { FaSearch, FaChartLine, FaPalette } from "react-icons/fa"; // Import React Icons

const WhyOurCompany = () => {
  // State to track selected feature
  const [activeFeature, setActiveFeature] = useState("SEO");

  // Feature data
  const features = {
    SEO: {
      title: "SEO",
      description: "Optimize your website with on-page, off-page and technical SEO.",
      image: "https://images.unsplash.com/photo-1674027001834-719c347d1eca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlb3xlbnwwfHwwfHx8MA%3D%3D", // Replace with actual image URLs
      bgColor: "bg-orange-100", // Light background color for SEO
      titleColor: "text-orange-600", // Darker title color for SEO
      descriptionColor: "text-orange-500", // Darker description color for SEO
    },
    DigitalMarketing: {
      title: "Digital Marketing",
      description: "Grow your business with PPC, social media and email campaigns.",
      image: "https://images.unsplash.com/photo-1707301280406-55612d3bb9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D",
      bgColor: "bg-teal-50", // Light background color for Digital Marketing
      titleColor: "text-teal-600", // Darker title color for Digital Marketing
      descriptionColor: "text-teal-500", // Darker description color for Digital Marketing
    },
    Branding: {
      title: "Branding",
      description: "Create a unique identity with logo design, brand strategy and more.",
      image: "https://images.unsplash.com/photo-1661956601031-4cf09efadfce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmRpbmclMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
      bgColor: "bg-indigo-200", // Light background color for Branding
      titleColor: "text-indigo-600", // Darker title color for Branding
      descriptionColor: "text-indigo-500", // Darker description color for Branding
    },
  };

  // Function to get the keys in order to map over the features
  const featureKeys = Object.keys(features);

  return (
    <section
      className={`flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 md:px-24 lg:px-24 py-12 sm:py-20 md:py-24 text-gray-800 relative overflow-hidden transition-all duration-500 ease-in-out gap-8 md:gap-10 rounded-t-3xl ${features[activeFeature].bgColor}`}
    >
      {/* Left Section (Content separated from image) */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide transition-all duration-500 ${features[activeFeature].titleColor}`}
        >
          Why Choose <span className="text-blue-400">Our Company?</span>
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl">
          Empowering your digital presence with innovative solutions that drive results.
        </p>
        <h3 className="text-gray-800 text-lg sm:text-xl font-semibold mt-3 tracking-wider">
          Step into the future of technology and growth.
        </h3>

        {/* Buttons to change content */}
        <ul className="space-y-4 mt-8">
          {featureKeys.map((key) => (
            <li
              key={key}
              onClick={() => setActiveFeature(key)}
              className={`flex items-center space-x-3 cursor-pointer ${activeFeature === key ? "text-gray-900" : "text-gray-600"
                } hover:text-blue-400 transition-all duration-300`}
            >
              <span
                className={`p-3 rounded-full text-xs transition-all duration-300 ${activeFeature === key
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
                  }`}
              >
                {key === "SEO" && <FaSearch />}
                {key === "DigitalMarketing" && <FaChartLine />}
                {key === "Branding" && <FaPalette />}
              </span>
              <span className="font-medium">{features[key].title}</span>
              <span className="text-sm text-gray-500">
                ({features[key].description.split(" ")[0]})
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section (Image Container) */}
      <div className="flex-1 mt-14 sm:mt-16 md:mt-0 relative w-full">
        <div className="bg-transparent rounded-xl mt-6 sm:mt-8 md:mt-20 overflow-hidden">
          <div className="relative w-full h-60 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
            {/* Image Container */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <img
                src={features[activeFeature].image} // Dynamic image
                alt={features[activeFeature].title}
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>
          </div>
          <p
            className={`text-xs sm:text-sm md:text-base mt-2 p-5 text-center ${features[activeFeature].descriptionColor}`}
          >
            {features[activeFeature].description} {/* Dynamic description */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyOurCompany;
