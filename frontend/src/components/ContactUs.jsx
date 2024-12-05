import React, { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
  });

  const [errors, setErrors] = useState({});
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error for the field
  };

  const validatePhoneNumber = (phoneNumber) => /^[6-9]\d{9}$/.test(phoneNumber);
  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/.test(email);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain alphabets and spaces.";
      isValid = false;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
      isValid = false;
    }

    if (!formData.service) {
      newErrors.service = "Please select a service type.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${apiUrl}/api/contact`, formData);
      setShowDialog(true);
      setFormData({ name: "", email: "", phoneNumber: "", message: "", service: "" });
    } catch (error) {
      setErrors({
        form: error.response?.data?.error || "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const closeDialog = () => setShowDialog(false);

  return (
    <div  className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 flex items-center justify-center relative px-4 sm:px-8 lg:px-16">
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute w-72 h-72 bg-gradient-to-br from-pink-500 to-purple-500 blur-3xl opacity-40 rounded-full top-10 left-10 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 to-teal-400 blur-3xl opacity-40 rounded-full bottom-10 right-10 animate-bounce-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full space-y-8 md:space-y-0 md:grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div
          id="contact"
          className="bg-gray-800 bg-opacity-90 p-8 sm:p-12 md:p-8 m-5 rounded-lg shadow-xl space-y-6 transition-transform transform"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center">
            Get In Touch With Us
          </h2>
          {errors.form && (
            <div className="text-red-400 text-sm mb-4 text-center">{errors.form}</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 focus:ring-2 focus:ring-teal-400 text-gray-200 placeholder-gray-400"
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 focus:ring-2 focus:ring-teal-400 text-gray-200 placeholder-gray-400"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={(e) => {
                  if (/^\d{0,10}$/.test(e.target.value)) handleChange(e);
                }}
                placeholder="Your Phone Number"
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 focus:ring-2 focus:ring-teal-400 text-gray-200 placeholder-gray-400"
              />
              {errors.phoneNumber && (
                <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 focus:ring-2 focus:ring-teal-400 text-gray-200 placeholder-gray-400"
              rows="5"
            ></textarea>

            {/* Service Type */}
            <div>
              <label className="block text-teal-400 font-bold mb-2">
                What service are you looking for?
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 rounded-lg bg-gray-700 focus:ring-2 focus:ring-teal-400 text-gray-200"
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Application Development">Application Development</option>
                <option value="SEO">SEO</option>
                <option value="AI Integration">AI Integration</option>
                <option value="Branding">Branding</option>
              </select>
              {errors.service && (
                <p className="text-red-400 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 sm:py-4 bg-gradient-to-r from-teal-400 to-blue-500 text-gray-900 font-bold rounded-lg hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8 flex flex-col justify-center items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 text-center mb-8">
            Contact Us
          </h2>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition duration-300 ease-in-out w-full">
            <FaMapMarkerAlt className="text-teal-400 text-3xl" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-teal-400">Address</h3>
              <p className="text-gray-300">Bengaluru, Karnataka</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition duration-300 ease-in-out w-full">
            <FaWhatsapp className="text-green-400 text-3xl" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-teal-400">WhatsApp</h3>
              <p className="text-gray-300">(+91) 99999-99999</p>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg p-4 transition duration-300 ease-in-out w-full">
            <FaEnvelope className="text-yellow-400 text-3xl" />
            <div className="text-center">
              <h3 className="text-xl font-bold text-teal-400">Email</h3>
              <p className="text-gray-300">info@example.com</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ContactUs;
