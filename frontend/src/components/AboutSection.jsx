import React from "react";
import { Link } from "react-router-dom";
import teamBg from "../assets/aswan-team-bg.jpg";

const AboutSection = () => {
  return (
    <section
      className="relative w-full h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${teamBg})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl ml-12 md:ml-20 px-6 text-white">
        <p className="uppercase tracking-wider text-sm mb-3">
          Who’s behind Aswan
        </p>

        <h1 className="text-4xl md:text-5xl font-normal max-w-3xl leading-tight">
         We guide our clients through property decisions with ease and experienced insight
        </h1>

        {/* LINK SECTION */}
        <div className="mt-8">
          <Link
            to="/team"
            className="inline-block border-b-2   px-4 py-2 text-[#D4AF37] text-lg   hover:text-black "
          >
            “Why choose Aswan?” 
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;