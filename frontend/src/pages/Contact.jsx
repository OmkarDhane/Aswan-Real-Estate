import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  return (
    <div className="min-h-screen font-[Poppins] bg-white">

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-10 lg:p-20 h-full">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-normal mb-4 sm:mb-6">
            Contact Espace Real <br /> Estate Agents in Dubai
          </h1>

          <p className="text-gray-700 mb-6 sm:mb-8 text-base sm:text-lg leading-7 sm:leading-8">
            Use one of the options to contact us and we’ll<br /> be in touch as soon as we can.
          </p>

          {/* Contact Cards */}
          <div className="space-y-4 sm:space-y-5">

            {/* Telephone */}
            <div
              onClick={() => setShowCallPopup(true)}
              className="border p-5 sm:p-8 rounded-xl flex justify-between items-center hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="text-red-600 text-3xl sm:text-4xl">📞</span>
                <div>
                  <p className="font-normal text-base sm:text-lg text-black">Telephone</p>
                  <p className="text-gray-600 text-sm sm:text-base">+971 (04) 306 9999</p>
                </div>
              </div>
              <span className="text-xl sm:text-2xl">➝</span>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/971043069999"
              target="_blank"
              className="border p-5 sm:p-8 rounded-xl flex justify-between items-center hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <FaWhatsapp className="text-green-600 text-3xl sm:text-4xl" />
                <div>
                  <p className="font-normal text-base sm:text-lg text-black">WhatsApp</p>
                </div>
              </div>
              <span className="text-xl sm:text-2xl">➝</span>
            </a>

            {/* Email Card */}
            <div
              onClick={() => setShowEmailPopup(true)}
              className="border p-5 sm:p-8 rounded-xl flex justify-between items-center hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="text-red-500 text-3xl sm:text-4xl">✉️</span>
                <div>
                  <p className="font-normal text-base sm:text-lg">Email</p>
                  <p className="text-gray-700 text-sm sm:text-md">info@espace.ae</p>
                </div>
              </div>
              <span className="text-xl sm:text-2xl">➝</span>
            </div>

            {/* Video Call Card */}
            <div
              onClick={() => setShowVideoPopup(true)}
              className="border p-5 sm:p-8 rounded-xl flex justify-between items-center hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="text-red-500 text-3xl sm:text-4xl">🎥</span>
                <div>
                  <p className="font-normal text-base sm:text-lg">Video Call</p>
                  <p className="text-gray-700 text-sm sm:text-md">Book a video call with our team</p>
                </div>
              </div>
              <span className="text-xl sm:text-2xl">➝</span>
            </div>

            {/* Office */}
            <Link
              to="/about-us"
              className="border p-5 sm:p-8 rounded-xl flex justify-between items-center hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="text-red-500 text-3xl sm:text-4xl">📍</span>
                <div>
                  <p className="font-normal text-base sm:text-lg">Office</p>
                  <p className="text-gray-700 text-sm sm:text-md">2702 & 2703 Marina Plaza, Dubai Marina</p>
                </div>
              </div>
              <span className="text-xl sm:text-2xl">➝</span>
            </Link>

            {/* People */}
            <Link
              to="/team"
              className="border p-5 sm:p-8 rounded-xl flex justify-between items-center hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <span className="text-red-500 text-3xl sm:text-4xl">📌</span>
                <div>
                  <p className="font-normal text-base sm:text-lg">People</p>
                  <p className="text-gray-700 text-sm sm:text-md">Looking for someone in particular?</p>
                </div>
              </div>
              <span className="text-xl sm:text-2xl">➝</span>
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="h-64 sm:h-96 lg:h-full">
          <img
            src="/assets/contact.webp"
            alt="Dubai"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* POPUPS */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Call Us</h2>
            <p className="text-gray-700 mb-3 text-base sm:text-lg">📞 +971 (04) 306 9999</p>
            <button
              onClick={() => setShowCallPopup(false)}
              className="mt-3 bg-red-600 text-white px-6 py-2 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-center">Contact Espace</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full border px-3 py-2 rounded text-base sm:text-lg" />
              <input type="email" placeholder="Email Address" className="w-full border px-3 py-2 rounded text-base sm:text-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full border px-3 py-2 rounded text-base sm:text-lg" />
              <select className="w-full border px-3 py-2 rounded text-base sm:text-lg">
                <option>Sales</option>
                <option>Rental</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Your message..." className="w-full border px-3 py-2 rounded h-40 text-base sm:text-lg"></textarea>
              <button className="w-full bg-red-600 text-white py-2 rounded text-base sm:text-lg">Send</button>
              <button onClick={() => setShowEmailPopup(false)} className="w-full bg-gray-300 text-black py-2 rounded text-base sm:text-lg mt-2">
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Book a Video Call</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Your Name" className="w-full border px-3 py-2 rounded text-base sm:text-lg" />
              <input type="email" placeholder="Email Address" className="w-full border px-3 py-2 rounded text-base sm:text-lg" />
              <input type="tel" placeholder="Phone Number" className="w-full border px-3 py-2 rounded text-base sm:text-lg" />
              <input type="date" min={new Date().toISOString().split("T")[0]} className="w-full border px-3 py-2 rounded text-base sm:text-lg" />
              <input type="time" className="w-full border px-3 py-2 rounded text-base sm:text-lg" />
              <textarea placeholder="Your message..." className="w-full border px-3 py-2 rounded h-40 text-base sm:text-lg"></textarea>
              <button className="w-full bg-red-600 text-white py-2 rounded text-base sm:text-lg">Book</button>
              <button onClick={() => setShowVideoPopup(false)} className="w-full bg-gray-300 text-black py-2 rounded text-base sm:text-lg mt-2">
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
