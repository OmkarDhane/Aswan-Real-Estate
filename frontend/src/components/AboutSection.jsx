
import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section
      className="relative w-full h-[600px] flex items-center"
      style={{
        backgroundImage: "url('/assets/about.webp')", // तुझा फोटो
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl ml-12 md:ml-20 px-6 text-white">
        <p className="uppercase tracking-wider text-sm mb-3">
          Who’s behind Espace
        </p>

        <h1 className="text-4xl md:text-5xl font-normal max-w-3xl leading-tight">
         We work hard to take our clients on a hassle-free and successful property journey.
        </h1>

        {/* LINK TO TEAM PAGE */}
        <Link
          to="/team"
          className="mt-8 inline-block border-b-2 border-white text-lg tracking-wide pb-1 hover:opacity-70 transition"
        >
          MEET THE TEAM
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
