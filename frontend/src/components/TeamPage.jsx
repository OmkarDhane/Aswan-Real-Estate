import React from "react";
import Footer from "../components/Footer"; 

const TeamPage = () => {
  return (
    <div className="w-full">

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center"
        style={{
          backgroundImage: "url('/assets/team.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 md:ml-20 text-white">
          <p className="uppercase tracking-wider text-xs sm:text-sm mb-3">
            MEET THE TEAM
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal max-w-3xl leading-tight">
            A TEAM OF EXPERTS THAT YOU CAN RELY ON
          </h1>
        </div>
      </section>

      {/* Space before footer */}
      <div className="mt-16 sm:mt-20"></div>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />

    </div>
  );
};

export default TeamPage;
