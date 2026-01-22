import React from "react";
import Footer from "../components/Footer"; 
// Image import keli aahe jeva tumhi bundle karal tevha error yenar nahi
import teamBg from "../assets/aswan-team-bg.jpg";

const TeamPage = () => {
  return (
    <div className="w-full">

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${teamBg})`, // Import keleli image ithe vaparli aahe
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay - Text clear disnyasathi */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:ml-20 text-white animate-fadeIn">
          <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 text-[#D4AF37] font-bold">
            MEET THE TEAM
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light max-w-4xl leading-tight">
            A TEAM OF <span className="italic font-normal">EXPERTS</span> <br /> 
            THAT YOU CAN RELY ON
          </h1>
          
          <div className="w-20 h-1 bg-[#D4AF37] mt-8"></div>
        </div>
      </section>

      {/* ---------------- TEAM LIST SECTION (Optional Space) ---------------- */}
      <div className="bg-[#f4f4f4] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-sm font-bold tracking-[0.4em] uppercase text-gray-400 mb-2">Our Professionals</h2>
            <p className="text-2xl font-light text-black">Dedicated to finding your perfect home in Sharjah.</p>
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />

    </div>
  );
};

export default TeamPage;