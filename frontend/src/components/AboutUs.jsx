import React from "react";
import Eyes from "./Eyes"; // Assuming Eyes is a separate component
import om from "../../assets/ombg.jpg";
import wbg from "../../assets/wbg.jpg";

const AboutUsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 relative overflow-hidden">
      <div  className="container mx-auto">
  {/* Heading */}
  <h2 className="text-8xl font-bold mb-6 text-center bg-gradient-to-r from-blue-700 to-green-400 text-transparent bg-clip-text tracking-wider">
    ABOUT US
  </h2>



        {/* Eyes Component - Reduced height */}
        <div className="relative w-full h-[60vh]">
          <Eyes />
        </div>

        <div  id="about-us" className="relative mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Our Mission Card - Left Side */}
          <div className=" top-0 left-0 z-10 p-8 bg-black  rounded-lg shadow-2xl flex flex-col items-start text-left w-full lg:w-3/4 mx-auto"  style={{
          backgroundImage: `url(${om})`, // Correct way to set the background image
          backgroundSize: "contain", // Ensures the image is scaled without cropping
          //backgroundRepeat: "no-repeat", // Prevents the image from repeating
         // backgroundPosition: "center center", // Centers the image
        }}>
            <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg mb-4">
              Our mission is to provide innovative solutions that empower businesses, foster creativity, and build lasting connections. We aim to deliver excellence and transform ideas into reality.
            </p>
            <ul className="list-disc list-inside text-white space-y-3">
              <li>Delivering excellence through cutting-edge solutions.</li>
              <li>Fostering creativity that sparks innovation.</li>
              <li>Building connections that empower communities.</li>
            </ul>
          </div>

          {/* Why Choose Us Card - Right Side */}
          <div className=" z-10 p-8 mt-20 bg-black bg-opacity-80 rounded-lg shadow-2xl flex flex-col items-start text-left"
                style={{
          backgroundImage: `url(${wbg})`, // Correct way to set the background image
          backgroundSize: "contain", // Ensures the image is scaled without cropping
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
         // backgroundPosition: "center center", // Centers the image
        }}>
            <h3 className="text-3xl font-semibold mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-white space-y-3">
              <li>Client-first approach for personalized solutions.</li>
              <li>Innovation-driven culture for continuous improvement.</li>
              <li>Dedicated support to guide you every step of the way.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Element for Extra Flair */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-80"></div>
    </section>
  );
};

export default AboutUsSection;
