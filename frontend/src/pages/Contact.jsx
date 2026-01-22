import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaVideo, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  return (
    <div className="min-h-screen font-[Poppins] bg-[#f4f4f4]">

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 p-6 sm:p-10 lg:p-20">

        {/* LEFT SIDE */}
        <div className="animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 text-black leading-tight">
            Contact <span className="text-[#D4AF37] italic font-normal">Aswan Real Estate</span> <br /> Agents in Sharjah
          </h1>

          <p className="text-gray-600 mb-6 sm:mb-10 text-base sm:text-lg leading-relaxed max-w-md">
            Reach out through any of the options below. Our professional team is ready to assist you with your property journey.
          </p>

          {/* Contact Cards */}
          <div className="space-y-4">

            {/* Telephone */}
            <div
              onClick={() => setShowCallPopup(true)}
              className="bg-white border border-gray-100 p-5 sm:p-6 rounded-xl flex justify-between items-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#D4AF37]">
                   <FaPhoneAlt size={20} />
                </div>
                <div>
                  <p className="font-bold text-black uppercase tracking-widest text-xs">Telephone</p>
                  <p className="text-gray-500 text-sm sm:text-base">+971 55 573 7865</p>
                </div>
              </div>
              <span className="text-[#D4AF37] group-hover:translate-x-2 transition-transform">➝</span>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/971555737865"
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-gray-100 p-5 sm:p-6 rounded-xl flex justify-between items-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
             <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#D4AF37]">
                   <FaWhatsapp size={30} />
                </div>
                <div>
                  <p className="font-bold text-black uppercase tracking-widest text-xs">WhatsApp</p>
                  <p className="text-gray-500 text-sm sm:text-base">Connect Instantly</p>
                </div>
              </div>
              <span className="text-[#D4AF37] group-hover:translate-x-2 transition-transform">➝</span>
            </a>

            {/* Email Card */}
            <div
              onClick={() => setShowEmailPopup(true)}
              className="bg-white border border-gray-100 p-5 sm:p-6 rounded-xl flex justify-between items-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#D4AF37]">
                   <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="font-bold text-black uppercase tracking-widest text-xs">Email</p>
                  <p className="text-gray-500 text-sm sm:text-base">Info@aswanrealestate.com </p>
                </div>
              </div>
              <span className="text-[#D4AF37] group-hover:translate-x-2 transition-transform">➝</span>
            </div>

            

            {/* Office - Updated to open Google Maps */}
            <a
              href="https://www.google.com/maps?q=Al+Qulaya+Sharjah"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-100 p-5 sm:p-6 rounded-xl flex justify-between items-center hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-[#D4AF37]">
                   <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="font-bold text-black uppercase tracking-widest text-xs">Office</p>
                  <p className="text-gray-500 text-sm">Al Qulaya, Sharjah, UAE</p>
                </div>
              </div>
              <span className="text-[#D4AF37] group-hover:translate-x-2 transition-transform">➝</span>
            </a>

          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="h-full min-h-[400px]">
          <img
            src="/assets/contact.webp"
            alt="Sharjah Real Estate"
            className="w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      </div>

      {/* ---------------- GOOGLE MAPS SECTION ---------------- */}
      <section className="w-full h-[400px] sm:h-[500px] mt-10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14429.58474272183!2d55.38548855!3d25.37482455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f596000000001%3A0x868c6e28f328f5b8!2sAl%20Qulayaa%20-%20Sharjah!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
      </section>

      {/* POPUPS */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-white p-8 rounded-sm shadow-2xl text-center border-b-4 border-[#D4AF37]">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] mb-4 text-gray-500">Call Us</h2>
            <a 
              href="tel:+971555737865" 
              className="text-2xl font-light text-black mb-8 block hover:text-[#D4AF37] transition-colors"
            >
              +971 55 573 7865
            </a>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+971555737865"
                className="bg-black text-[#D4AF37] font-bold uppercase tracking-widest px-6 py-4 rounded-sm w-full hover:bg-[#D4AF37] hover:text-black transition-all text-[10px]"
              >
                Call Now
              </a>
              <button
                onClick={() => setShowCallPopup(false)}
                className="text-gray-400 uppercase tracking-widest text-[9px] font-bold hover:text-black mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-[#D4AF37]">
            <h2 className="text-xl font-bold mb-6 text-center uppercase tracking-widest">Contact Aswan</h2>
            <form className="space-y-4" action="https://formspree.io/f/xdkqzdbk" method="POST">
              <input type="text" name="name" placeholder="Your Name" className="w-full border-gray-200 border px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#D4AF37] outline-none" required />
              <input type="email" name="email" placeholder="Email Address" className="w-full border-gray-200 border px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#D4AF37] outline-none" required />
              <div className="grid grid-cols-2 gap-4">
                  <input type="tel" name="phone" placeholder="Phone" className="w-full border-gray-200 border px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#D4AF37] outline-none" required />
                  <select name="type" className="w-full border-gray-200 border px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#D4AF37] outline-none">
                     <option>Sale</option>
                     <option>Rent</option>
                  </select>
              </div>
              <textarea name="message" placeholder="How can we help you?" className="w-full border-gray-200 border px-4 py-3 rounded-lg h-32 outline-none focus:ring-1 focus:ring-[#D4AF37]"></textarea>
              <button type="submit" className="w-full bg-black text-[#D4AF37] py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all">Send Message</button>
              <button type="button" onClick={() => setShowEmailPopup(false)} className="w-full text-gray-400 text-xs uppercase tracking-widest mt-2 hover:text-black">
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {showVideoPopup && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border-t-4 border-[#D4AF37]">
            <h2 className="text-xl font-bold mb-4 text-center uppercase tracking-widest">Schedule Consultation</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border-gray-200 border px-4 py-3 rounded-lg focus:ring-1 focus:ring-[#D4AF37] outline-none" />
              <div className="grid grid-cols-2 gap-2">
                <input type="date" className="w-full border-gray-200 border px-4 py-3 rounded-lg outline-none" />
                <input type="time" className="w-full border-gray-200 border px-4 py-3 rounded-lg outline-none" />
              </div>
              <button type="submit" className="w-full bg-black text-[#D4AF37] py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all">Request Slot</button>
              <button type="button" onClick={() => setShowVideoPopup(false)} className="w-full text-gray-400 text-xs uppercase tracking-widest mt-2 hover:text-black">
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