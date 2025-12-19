// import React from 'react';

// const AboutSection = () => (
//   <section className="py-12 bg-white">
//     <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center">
//       <div className="lg:col-span-7">
//         <h3 className="text-2xl font-semibold">We work hard to take our clients on a hassle-free and successful property journey.</h3>
//         <p className="mt-4 text-gray-600">
//           We win awards for our quality services and world-class agents. Learn more about our property services.
//         </p>
//       </div>
//       <div className="lg:col-span-5">
//         <img src="/assets/office_interior.jpg" alt="Office" className="rounded-lg shadow-lg" />
//       </div>
//     </div>
//   </section>
// );

// export default AboutSection;

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
