import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Scroll handler
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.8"
      className="w-full h-screen relative bg-gradient-to-b from-black to-black overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover opacity-30"
          src="https://videos.pexels.com/video-files/6994619/6994619-sd_640_360_30fps.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
      </div>

      {/* Content */}
      <div
        id="home"
        className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6 md:px-20"
      >
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="text-white space-y-4 md:space-y-6 mb-8 md:mb-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Empowering{" "}
            <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-teal-400 text-transparent bg-clip-text">
              Innovation
            </span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-300">
            Building Cutting-Edge Software Solutions for Modern Businesses
          </h2>
        </div>

        {/* Call to Action */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <button
            onClick={handleScrollToServices}
            className="group relative w-40 sm:w-48 h-10 sm:h-12 flex justify-center items-center border border-blue-500 text-white rounded-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 group-hover:opacity-40"></span>
            <span className="relative flex items-center gap-1 sm:gap-2 font-semibold text-sm sm:text-lg">
              Explore Services <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
