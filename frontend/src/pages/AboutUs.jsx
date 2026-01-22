import React from "react";
import Footer from "../components/Footer"; 
import { Link } from "react-router-dom";
// Local import ensures the image is bundled correctly
import teamBg from "../assets/aswan-team-bg.jpg";

const AboutUs = () => {
  return (
    <div className="w-full font-[Poppins] bg-[#F7F7F7]">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh]">
        {/* Background Image using the imported teamBg */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${teamBg})` }}
        />

        {/* Overlay with Gold/Black accent */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/65 flex items-center">
          <div className="px-6 sm:px-10 md:px-16 text-white max-w-full sm:max-w-2xl animate-fadeIn">
            <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-3 text-[#D4AF37] font-semibold">
              Real Estate Agency in Sharjah
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6 sm:mb-8">
              Welcome to <span className="text-[#D4AF37] italic font-normal">Aswan</span>, a premier real estate agency
            </h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#D4AF37] px-6 py-3 rounded-sm text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all duration-300 shadow-lg">
                Our Story
              </button>
              <Link to="/contact">
                <button className="border border-white px-6 py-3 rounded-sm text-white hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300 uppercase tracking-widest text-[10px] font-bold">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- OUR STORY SECTION (Light Grey Background) ---------------- */}
      <section className="w-full bg-[#F7F7F7] py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <div className="col-span-2">
            <h2 className="text-3xl sm:text-4xl font-light mb-6 text-black uppercase tracking-tighter">
              Our <span className="text-[#D4AF37] italic">Philosophy</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 sm:mb-12 text-lg font-light">
              Aswan Real Estate was born in 2009 with a vision to integrate elite 
              estate agency standards into the heart of Sharjah. Today, we 
              are a strong team of multilingual specialists transacting 
              all types of property, ensuring our clients enjoy a smooth 
              and transparent process tailored to their unique investment needs.
            </p>

            {/* Accordions (Kept White for Contrast) */}
            <div className="bg-white border border-gray-100 py-6 hover:bg-gray-50 transition-colors px-6 rounded-t-sm shadow-sm">
              <details className="group">
                <summary className="cursor-pointer text-lg sm:text-xl font-medium flex justify-between items-center list-none outline-none">
                  <span className="group-open:text-[#D4AF37] transition-colors">Integrity and Trust</span>
                  <span className="text-[#D4AF37] group-open:rotate-180 transition-transform duration-300">&#9660;</span>
                </summary>
                <p className="text-gray-500 mt-5 leading-7 text-sm sm:text-base font-light border-l-2 border-[#D4AF37] pl-4">
                  In the Sharjah real estate market, we prioritize honest and transparent relationships. From initial inquiry to final handover, we keep our clients informed every step of the way.
                </p>
              </details>
            </div>

            <div className="bg-white border border-t-0 border-gray-100 py-6 hover:bg-gray-50 transition-colors px-6 rounded-b-sm shadow-sm">
              <details className="group">
                <summary className="cursor-pointer text-lg sm:text-xl font-medium flex justify-between items-center list-none outline-none">
                  <span className="group-open:text-[#D4AF37] transition-colors">Why Aswan is the Choice</span>
                  <span className="text-[#D4AF37] group-open:rotate-180 transition-transform duration-300">&#9660;</span>
                </summary>
                <p className="text-gray-500 mt-5 leading-7 text-sm sm:text-base font-light border-l-2 border-[#D4AF37] pl-4">
                  Our team is diligent, professional, and diverse. We understand that property decisions are life-changing, and we work tirelessly to ensure 100% satisfaction through expert market insight.
                </p>
              </details>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-1 border-l border-gray-200 pl-8">
            <h3 className="text-xs font-bold text-black mb-6 uppercase tracking-[0.2em]">Quick Links</h3>
            <ul className="flex flex-col gap-5">
              <li>
                <Link to="/team" className="group flex items-center gap-3 text-gray-500 hover:text-black transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-150 transition-transform"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Expert Team</span>
                </Link>
              </li>
              <li>
                <Link to="/for-sale" className="group flex items-center gap-3 text-gray-500 hover:text-black transition-all">
                  <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-[#D4AF37] transition-colors"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Available Listings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- STATS SECTION (Contrast Black) ---------------- */}
      <section className="bg-[#0A0A0A] py-16 sm:py-24 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-12 text-center">
          <div className="border-r border-[#D4AF37]/20 last:border-r-0">
            <h3 className="text-4xl sm:text-5xl font-light text-[#D4AF37] mb-2">2009</h3>
            <p className="text-gray-400 text-[9px] tracking-[0.3em] uppercase">Established</p>
          </div>
          <div className="border-r border-[#D4AF37]/20 last:border-r-0">
            <h3 className="text-4xl sm:text-5xl font-light text-[#D4AF37] mb-2">51K+</h3>
            <p className="text-gray-400 text-[9px] tracking-[0.3em] uppercase">Active Buyers</p>
          </div>
          <div className="border-r border-[#D4AF37]/20 last:border-r-0">
            <h3 className="text-4xl sm:text-5xl font-light text-[#D4AF37] mb-2">60+</h3>
            <p className="text-gray-400 text-[9px] tracking-[0.3em] uppercase">Communities</p>
          </div>
          <div className="last:border-r-0">
            <h3 className="text-4xl sm:text-5xl font-light text-[#D4AF37] mb-2">270+</h3>
            <p className="text-gray-400 text-[9px] tracking-[0.3em] uppercase">Professionals</p>
          </div>
        </div>
      </section>

      {/* ---------------- TEAM PREVIEW (Light Grey Background) ---------------- */}
      <section className="w-full bg-[#F7F7F7] py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <h2 className="text-3xl sm:text-4xl font-light text-black uppercase tracking-tighter">
              Executive <span className="text-[#D4AF37] italic">Management</span>
            </h2>
            <Link to="/team" className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest border-b border-[#D4AF37] pb-1 hover:text-black hover:border-black transition-all mt-4 md:mt-0">
              View All Staff
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "John Lyons", role: "Managing Director", img: "/assets/team1.webp" },
              { name: "Lee Malcolm", role: "HR Director", img: "/assets/team2.webp" },
              { name: "Gil Van Gelder", role: "Director of Brokerage", img: "/assets/team3.webp" },
              { name: "Matthew Montgomery", role: "Sales Director", img: "/assets/team4.webp" },
            ].map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-sm mb-4 aspect-[3/4] shadow-md">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transform transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-black uppercase tracking-widest text-[11px]">{member.name}</h3>
                <p className="text-[#D4AF37] text-[10px] italic font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT FORM SECTION (Light Grey Background) ---------------- */}
<section className="bg-[#F7F7F7] py-16 sm:py-24 border-t border-gray-200">
  <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl sm:text-4xl font-light text-black mb-6 leading-tight uppercase">
        Expert <br />
        <span className="text-[#D4AF37] italic font-normal">Consultation</span>
      </h2>
      <p className="text-gray-500 leading-relaxed font-light text-base mb-8">
        Whether you are looking to sell, buy, or rent, our team provides data-driven insights to ensure your success in the Sharjah market.
      </p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-[1px] bg-[#D4AF37]"></div>
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-black">Aswan Standards</span>
      </div>
    </div>

    {/* Form - Integrated with Formspree */}
    <form 
      action="https://formspree.io/f/xdkqzdbk" 
      method="POST"
      className="bg-white p-8 sm:p-10 shadow-2xl rounded-sm border-t-2 border-[#D4AF37]"
    >
      <div className="space-y-6">
        <div className="relative">
          <label className="text-black text-[15px] font-bold uppercase tracking-widest mb-1 block">Full Name</label>
          <input 
            type="text" 
            name="name"
            className="w-full border-b border-gray-200 py-2 focus:border-[#D4AF37] outline-none bg-transparent transition-colors text-sm" 
            placeholder="Enter your name"
            required 
          />
        </div>
        
        <div className="relative">
          <label className="text-black text-[15px] font-bold uppercase tracking-widest mb-1 block">Email Address</label>
          <input 
            type="email" 
            name="email"
            className="w-full border-b border-gray-200 py-2 focus:border-[#D4AF37] outline-none bg-transparent transition-colors text-sm" 
            placeholder="email@example.com"
            required 
          />
        </div>
        
        <div className="relative">
          <label className="text-black text-[15px] font-bold uppercase tracking-widest mb-1 block">Contact Number</label>
          <input 
            type="tel" 
            name="phone"
            className="w-full border-b border-gray-200 py-2 focus:border-[#D4AF37] outline-none bg-transparent transition-colors text-sm" 
            placeholder="+971 -- --- ----"
            required 
          />
        </div>

        {/* Optional: Message field add kela aahe better clarity sathi */}
        <div className="relative">
          <label className="text-black text-[15px] font-bold uppercase tracking-widest mb-1 block">Message (Optional)</label>
          <textarea 
            name="message"
            rows="2"
            className="w-full border-b border-gray-200 py-2 focus:border-[#D4AF37] outline-none bg-transparent transition-colors text-sm resize-none" 
            placeholder="How can we help?"
          ></textarea>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-black text-[#D4AF37] py-4 font-bold tracking-[0.2em] uppercase text-[12px] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 mt-4 shadow-lg"
        >
          Request a Call Back
        </button>
      </div>
    </form>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default AboutUs;