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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10 lg:p-20 h-full">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl lg:text-4xl font-normald mb-6">
            Contact Espace Real <br /> Estate Agents in Dubai
          </h1>

          <p className="text-gray-700 mb-8 text-lg leading-8">
            Use one of the options to contact us and we’ll<br /> be in touch as soon as we can.
          </p>

          {/* Contact Cards */}
          <div className="space-y-5">

            {/* Telephone */}
           <div
  onClick={() => setShowCallPopup(true)}
  className="border p-8 rounded-xl flex justify-between items-center hover:shadow-md transition cursor-pointer"
>
  <div className="flex items-center gap-5">
    <span className="text-red-600 text-4xl">📞</span> {/* Red Telephone icon */}
    <div>
      <p className="font-normal text-lg text-black">Telephone</p> {/* Text stays black */}
      <p className="text-gray-600">+971 (04) 306 9999</p>
    </div>
  </div>
  <span className="text-2xl">➝</span>
</div>

            {/* WhatsApp */}
            <a
  href="https://wa.me/971043069999"
  target="_blank"
  className="border p-8 rounded-xl flex justify-between items-center hover:shadow-md transition cursor-pointer"
>
  <div className="flex items-center gap-5">
    <FaWhatsapp className="text-green-600 text-4xl" /> {/* Green WhatsApp logo */}
    <div>
      <p className="font-normal text-lg text-black">WhatsApp</p> {/* Text stays black */}
    </div>
  </div>
  <span className="text-2xl">➝</span>
</a>

            {/* Email Card */}
<div
  onClick={() => setShowEmailPopup(true)}
  className="border p-8 rounded-xl flex justify-between items-center hover:shadow-md transition cursor-pointer"
>
  <div className="flex items-center gap-5">
    <span className="text-red-500 text-4xl">✉️</span>
    <div>
      <p className="font-normal text-lg">Email</p>
      <p className="text-gray-700 text-md">info@espace.ae</p>
    </div>
  </div>
  <span className="text-2xl">➝</span>
</div>

{/* Email Popup (Formspree) */}
{showEmailPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="w-[450px] bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl mb-4 text-center font-semibold">
        Send Email
      </h2>

      <form
        action="https://formspree.io/f/xdkqzdbk"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full border px-3 py-2 rounded h-28"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Send Message
        </button>
      </form>

      <button
        onClick={() => setShowEmailPopup(false)}
        className="w-full mt-3 bg-gray-300 py-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
)}

           {/* Video Call Card */}
<div
  onClick={() => setShowVideoPopup(true)}
  className="border p-8 rounded-xl flex justify-between items-center hover:shadow-md transition cursor-pointer"
>
  <div className="flex items-center gap-5">
    <span className="text-red-500 text-4xl">🎥</span>
    <div>
      <p className="font-normal text-lg">Video Call</p>
      <p className="text-gray-700 text-md">Book a video call with our team</p>
    </div>
  </div>
  <span className="text-2xl">➝</span>
</div>

{/* Video Call Popup (Formspree) */}
{showVideoPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="w-[450px] bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl mb-4 text-center font-semibold">
        Schedule a Video Call
      </h2>

      <form
        action="https://formspree.io/f/xdkqzdbk" 
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full border px-3 py-2 rounded"
        />

        <textarea
          name="message"
          placeholder="Preferred Date & Time"
          required
          className="w-full border px-3 py-2 rounded h-28"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          Book Call
        </button>
      </form>

      <button
        onClick={() => setShowVideoPopup(false)}
        className="w-full mt-3 bg-gray-300 py-2 rounded"
      >
        Close
      </button>
    </div>
  </div>
)}


            {/* Office */}
            <Link
              to="/about-us"
              className="border p-8 rounded-xl flex justify-between items-center hover:shadow-md transition"
            >
              <div className="flex items-center gap-5">
                <span className="text-red-500 text-4xl">📍</span>
                <div>
                  <p className="font-normal text-lg">Office</p>
                  <p className="text-gray-700 text-md">2702 & 2703 Marina Plaza, Dubai Marina</p>
                </div>
              </div>
              <span className="text-2xl">➝</span>
            </Link>

            {/* People */}
            <Link
              to="/team"
              className="border p-8 rounded-xl flex justify-between items-center hover:shadow-md transition"
            >
              <div className="flex items-center gap-5">
                <span className="text-red-500 text-4xl">📌</span>
                <div>
                  <p className="font-normal text-lg">People</p>
                  <p className="text-gray-700 text-md">Looking for someone in particular?</p>
                </div>
              </div>
              <span className="text-2xl">➝</span>
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="h-full">
          <img
            src="/assets/contact.webp"
            alt="Dubai"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* CALL POPUP */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-96 bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Call Us</h2>
            <p className="text-gray-700 mb-3 text-lg">📞 +971 (04) 306 9999</p>
            <button
              onClick={() => setShowCallPopup(false)}
              className="mt-3 bg-red-600 text-white px-6 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* EMAIL POPUP */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[500px] bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-center">Contact Espace</h2>

            <label className="block font-medium mb-1">Name*</label>
            <input type="text" placeholder="Your Name" className="border w-full px-3 py-3 rounded mb-3 text-lg" />

            <label className="block font-medium mb-1">Email Address:*</label>
            <input type="email" placeholder="Email Address" className="border w-full px-3 py-3 rounded mb-3 text-lg" />

            <label className="block font-medium mb-1">Telephone*</label>
            <input type="tel" placeholder="Phone Number" className="border w-full px-3 py-3 rounded mb-3 text-lg" />

            <label className="block font-medium mb-1">Enquiry Type*</label>
            <select className="border w-full px-3 py-3 rounded mb-3 text-lg">
              <option>Sales</option>
              <option>Rental</option>
              <option>Other</option>
            </select>

            <label className="block font-medium mb-1">Message</label>
            <textarea placeholder="Your message..." className="border w-full px-3 py-3 rounded mb-3 h-52 text-lg"></textarea>

            <button className="w-full bg-red-600 text-white py-3 rounded mb-2 text-lg">Send</button>
            <button onClick={() => setShowEmailPopup(false)} className="w-full bg-gray-300 text-black py-3 rounded text-lg">
              Close
            </button>
          </div>
        </div>
      )}

      {/* VIDEO CALL POPUP */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[500px] bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Book a Video Call</h2>

            <label className="block font-medium mb-1">Name*</label>
            <input type="text" placeholder="Your Name" className="border w-full px-3 py-3 rounded mb-3 text-lg" />

            <label className="block font-medium mb-1">Email Address:*</label>
            <input type="email" placeholder="Email Address" className="border w-full px-3 py-3 rounded mb-3 text-lg" />

            <label className="block font-medium mb-1">Telephone*</label>
            <input type="tel" placeholder="Phone Number" className="border w-full px-3 py-3 rounded mb-3 text-lg" />

            <label className="block font-medium mb-1">Preferred Date*</label>
            <input type="date" min={new Date().toISOString().split("T")[0]} className="border w-full px-3 py-3 rounded mb-3 text-lg" />

            <label className="block font-medium mb-1">Preferred Time*</label>
            <input type="time" className="border w-full px-3 py-3 rounded mb-3 text-lg" />

            <label className="block font-medium mb-1">Message</label>
            <textarea placeholder="Your message..." className="border w-full px-3 py-3 rounded mb-3 h-52 text-lg"></textarea>

            <button className="w-full bg-red-600 text-white py-3 rounded mb-2 text-lg">Book</button>
            <button onClick={() => setShowVideoPopup(false)} className="w-full bg-gray-300 text-black py-3 rounded text-lg">
              Close
            </button>
          </div>
        </div>
      )}
<Footer />
    </div>
  );
};

export default Contact;
