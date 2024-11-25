import React from "react";

const SoftwareCompanyHomePage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen flex flex-col items-center px-6 py-12">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Empowering Businesses with {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-green-500 animate-text">
          Next-Gen Tech Solutions
          </span>
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          Delivering innovative solutions for a digital-first world.
        </p>
      </header>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl">
        {/* Card 1 */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500 flex flex-col items-center text-center relative">
          <div className="mb-6">
            <span className="text-green-400 text-5xl">🌐</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Website Development</h3>
          <p className="text-sm text-gray-400 mb-6">
            We specialize in crafting modern, responsive designs that ensure a
            seamless user experience across devices.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            From dynamic e-commerce platforms to powerful CMS solutions, we
            provide websites tailored to your business needs.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-110 hover:shadow-lg">
            Learn More
          </button>
          <div className="absolute bottom-4 right-4 h-12 w-12 bg-green-500 rounded-full blur-xl opacity-30"></div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-500 flex flex-col items-center text-center relative">
          <div className="mb-6">
            <span className="text-orange-400 text-5xl">📱</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">App Development</h3>
          <p className="text-sm text-gray-400 mb-6">
            Create high-quality iOS, Android, and hybrid applications to drive
            user engagement and business growth.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            From concept to deployment, we provide full-cycle app development
            for scalable, user-friendly solutions.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-110 hover:shadow-lg">
            Learn More
          </button>
          <div className="absolute bottom-4 right-4 h-12 w-12 bg-orange-500 rounded-full blur-xl opacity-30"></div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-yellow-500 flex flex-col items-center text-center relative">
          <div className="mb-6">
            <span className="text-yellow-400 text-5xl">🤖</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4">AI Integration</h3>
          <p className="text-sm text-gray-400 mb-6">
            Harness the power of AI to enhance automation, decision-making, and
            business efficiency with our tailored solutions.
          </p>
          <p className="text-sm text-gray-400 mb-6">
            From AI agents to data-driven systems, we help integrate AI into
            your workflows for transformative outcomes.
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-110 hover:shadow-lg">
            Learn More
          </button>
          <div className="absolute bottom-4 right-4 h-12 w-12 bg-yellow-500 rounded-full blur-xl opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareCompanyHomePage;
