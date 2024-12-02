import React, { useState } from "react";
import { gsap } from "gsap";

const DynamicScrollPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Toggle the expanded section and animate the text visibility
  const toggleExtraText = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);

    // Get the extra text and animate it
    const extraText = document.querySelector(`#${sectionId} .extra-text`);

    if (extraText) {
      if (expandedSection === sectionId) {
        // Hide extra text with animation
        gsap.to(extraText, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // Show extra text with a delay and animation
        gsap.fromTo(
          extraText,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3, // Delay for staggered animation
          }
        );
      }
    }
  };

  return (
    <div className="w-full font-sans bg-transparent rounded-t-3xl">
      {/* Section 1 */}
      <section
        className="section flex flex-col md:flex-row items-center min-h-screen p-8 sm:p-12 md:p-14 gap-16 md:gap-32 bg-teal-100 rounded-t-3xl"
        data-bg="#F8FAFC"
        id="services"
      >
        <div
          data-scroll
          data-scroll-speed="-0.1"
          className="content w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-700 mb-6 leading-tight">
            Web Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            Create stunning, responsive, and user-friendly websites with cutting-edge technologies.
          </p>
          {/* Extra Text */}
          <div className="extra-text hidden">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
              We design websites that don’t just look good—they slay. Whether you’re building an e-commerce empire or showcasing your brand, we make sure your site is fire, fast, and future-ready.
            </p>
          </div>
          <button
            onClick={() => toggleExtraText("services")}
            className="mt-6 px-8 py-3 border-[2px] border-teal-600 text-teal-600 rounded-full shadow-md hover:bg-teal-100 transition-transform transform hover:scale-105"
          >
            {expandedSection === "services" ? "Show Less" : "Learn More"}
          </button>
        </div>
        <div className="image w-full md:w-2/5 mt-6 md:mt-0">
          <img
            src="https://i.postimg.cc/gj9FJQPB/rb-1812-3.png"
            alt="Web Development"
            className="rounded-xl max-w-full h-auto"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section
        data-scroll
        data-scroll-speed="-0.2"
        className="section flex flex-col lg:flex-row items-center min-h-screen p-8 sm:p-18 lg:p-14 gap-10 lg:gap-32 rounded-t-3xl bg-purple-300 overflow-hidden"
        data-bg="#E5E7EB"
        id="application"
      >
        <div className="content w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-700 mb-6 leading-tight">
            Application Development
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            Build powerful and scalable applications tailored to your unique requirements.
          </p>
          {/* Extra Text */}
          <div className="extra-text hidden">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
              Our application development team ensures smooth, seamless, and secure apps that enhance business efficiency.
            </p>
          </div>
          <button
            onClick={() => toggleExtraText("application")}
            className="mt-6 px-8 py-3 border-[2px] border-purple-600 text-purple-600 rounded-full shadow-md hover:bg-indigo-100 transition-transform transform hover:scale-105"
          >
            {expandedSection === "application" ? "Show Less" : "Learn More"}
          </button>
        </div>
        <div className="image w-full md:w-2/4 mt-6 md:mt-0 sm:mb-20">
          <img
            src="https://i.postimg.cc/8CtWbm04/communication-social-media-icons-smartphone-device.png"
            alt="Application Development"
            className="rounded-xl max-w-full h-auto"
          />
        </div>
      </section>

      {/* Section 3 */}
      <section
        data-scroll
        data-scroll-speed="-0.3"
        className="section flex flex-col md:flex-row items-center min-h-screen p-8 sm:p-5 lg:p-10 -gap-2 lg:gap-22 bg-blue-100 rounded-t-3xl overflow-hidden"
        data-bg="#F3F4F6"
        id="ai"
      >
        <div className="content w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 leading-tight">
            AI Integration
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
            Leverage artificial intelligence to revolutionize processes and unlock innovation.
          </p>
          {/* Extra Text */}
          <div className="extra-text hidden">
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6">
              AI integration can help streamline your operations, provide actionable insights, and improve customer experiences.
            </p>
          </div>
          <button
            onClick={() => toggleExtraText("ai")}
            className="mt-6 px-8 py-3 border-[2px] border-blue-600 text-blue-600 rounded-full shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105"
          >
            {expandedSection === "ai" ? "Show Less" : "Learn More"}
          </button>
        </div>
        <div className="image w-full md:w-2/4 mt-6 md:mt-0">
          <img
            src="https://i.postimg.cc/HsMyNyxw/rb-5442.png"
            alt="AI Integration"
            className="rounded-xl max-w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
};

export default DynamicScrollPage;
