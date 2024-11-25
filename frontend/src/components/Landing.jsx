import React, { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function Landing() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-black  to-black overflow-hidden">
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
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6 md:px-20">
        {/* Heading */}
        <div data-aos="fade-up" className="text-white space-y-6 mb-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Empowering <span className="text-blue-500">Innovation</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-light text-gray-300">
            Building Cutting-Edge Software Solutions for Modern Businesses
          </h2>
        </div>

        {/* Call to Action */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <button className="group relative w-48 h-12 flex justify-center items-center border border-blue-500 text-white rounded-lg overflow-hidden hover:scale-105 transition duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 group-hover:opacity-40"></span>
            <span className="relative flex items-center gap-2 font-semibold text-lg">
              Explore Services <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator
      <div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm animate-bounce"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Scroll Down
      </div> */}
    </div>
  );
}

export default Landing;
