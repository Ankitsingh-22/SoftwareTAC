import React, { useState } from "react";
import axios from "axios";
import bgVideo from "../../assets/animated_contact_us.mp4";

const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [error, setError] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent typing anything that isn't a letter or space
    }

    setFormData({ ...formData, [name]: value });
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^[6-9]\d{9}$/.test(phoneNumber); // Only valid Indian phone numbers (10 digits, starting with 6-9)
  };

  const validateEmail = (email) => {
    // Simple email validation check for '@' and '.com'
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.(com)$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset previous errors
    setLoading(true); // Set loading to true while the request is ongoing

    // Validate Name: Only alphabets and spaces
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      setError("Name can only contain alphabets and spaces.");
      setLoading(false);
      return;
    }

    // Validate Email: Check for '@' and '.com'
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address with '@' and '.com'.");
      setLoading(false);
      return;
    }

    // Validate Phone Number: Only 10-digit Indian phone numbers
    if (!validatePhoneNumber(formData.phoneNumber)) {
      setError("Please enter a valid 10-digit Indian phone number.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${apiUrl}/api/contact`, // Backend URL from .env
        formData
      );

      // Immediately show the dialog box after successful submission
      setShowDialog(true);
      setFormData({ name: "", email: "", phoneNumber: "", message: "" }); // Reset form after successful submission
    } catch (error) {
      // Check for response from the backend
      if (error.response) {
        console.error("Backend error:", error.response.data);
        setError(error.response.data.error || "Server error. Please try again later.");
      } else if (error.request) {
        console.error("No response received:", error.request);
        setError("No response from the server. Please try again later.");
      } else {
        console.error("Error in request setup:", error.message);
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false); // Set loading to false once the request completes
    }
  };

  const closeDialog = () => {
    setShowDialog(false); // Close the success dialog
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></video>

      {/* Foreground Content */}
      <div className="relative z-10 flex h-full items-center justify-between px-[4vw] flex-col md:flex-row">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-[6vw] md:text-[4vw] font-bold tracking-tighter leading-tight">
            Get in Touch with Us
          </h1>
          <p className="text-[4vw] md:text-[1.5vw] mt-4 leading-relaxed">
            Have a question or want to collaborate? We’re here to help you. Let’s build
            something great together!
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 h-auto md:h-auto bg-black bg-opacity-80 rounded-lg p-8 mt-8 md:mt-0">
          <h2 className="text-[5vw] md:text-[2vw] font-semibold text-white mb-6">
            Contact Us
          </h2>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[#212121] text-white text-[4vw] md:text-[1vw] focus:outline-none"
              maxLength="50"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#212121] text-white text-[4vw] md:text-[1vw] focus:outline-none"
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => {
                // Restrict to only 10 digits
                if (/^\d{0,10}$/.test(e.target.value)) {
                  handleChange(e);
                }
              }}
              placeholder="Your Phone Number"
              className="w-full p-4 rounded-lg bg-[#212121] text-white text-[4vw] md:text-[1vw] focus:outline-none"
              maxLength="10"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-[#212121] text-white text-[4vw] md:text-[1vw] focus:outline-none"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#CDEA68] text-black font-semibold py-3 rounded-lg hover:bg-[#a8c45a] text-[5vw] md:text-[1.2vw] transition"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Sending..." : "Send Message"} {/* Change text while loading */}
            </button>
          </form>
        </div>
      </div>

      {/* Success Dialog Box */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-20">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">
              Thank You For Connecting!
            </h2>
            <p className="text-gray-600 mb-4">Your message has been received. We will get back to you shortly!</p>
            <button
              onClick={closeDialog}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-400"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
