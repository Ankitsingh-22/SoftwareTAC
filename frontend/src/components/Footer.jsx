import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagramSquare, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section with Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-4">
              SoftwareCo
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              We are a forward-thinking software development company, committed to delivering cutting-edge solutions that drive innovation and business growth.
            </p>
            <p className="text-gray-500">Transforming ideas into reality with technology.</p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
            <ul className="text-gray-400 space-y-3">
              <li>
                <Link
                  to="home" // Add the id of the section you want to scroll to
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="about-us"
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="featured"
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="hover:text-blue-500 transition-colors duration-300 ease-in-out cursor-pointer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social Media */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-lg text-gray-400 mb-6">
              Email: <a href="mailto:contact@softwareco.com" className="text-blue-400 hover:text-blue-500">contact@softwareco.com</a>
            </p>
            <div className="flex justify-center lg:justify-start gap-6 text-gray-400">
              <a href="https://www.instagram.com" className="hover:text-blue-500 transition-colors duration-300 ease-in-out">
                <FaInstagram size={28} />
              </a>
              <a href="https://facebook.com" className="hover:text-blue-500 transition-colors duration-300 ease-in-out">
                <FaFacebook size={28} />
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-500 transition-colors duration-300 ease-in-out">
                <FaLinkedin size={28} />
              </a>
              {/* <a href="https://github.com" className="hover:text-blue-500 transition-colors duration-300 ease-in-out">
                <FaGithub size={28} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="text-center text-gray-500 text-sm mt-12">
          <p>&copy; {new Date().getFullYear()} SoftwareCo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
