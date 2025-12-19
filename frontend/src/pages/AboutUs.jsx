// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="min-h-screen bg-white text-gray-800 p-20 font-[Poppins]">
//       <h1 className="text-4xl font-bold mb-6">About Us</h1>
//       <p className="text-lg leading-8">
//         This is the About Us page. You can add all company information here.
//       </p>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import Footer from "../components/Footer"; // 👈 Footer IMPORT करायला विसरू नकोस
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <div className="w-full font-[Poppins]">

     {/* ---------------- HERO SECTION ---------------- */}
<section className="relative w-full h-[90vh]">
  {/* Background Image */}
  <img
    src="/assets/AboutUs.webp"
    alt="Hero"
    className="w-full h-full object-cover"
  />

  {/* Overlay with semi-transparent black and content */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center">
    {/* Content container aligned left with padding */}
    <div className="px-6 ml-10 text-white text-left max-w-xl">
      <p className="uppercase tracking-wide text-sm mb-3">
        Real Estate Agency in Dubai
      </p>

      <h1 className="text-4xl font-normal leading-snug mb-6">
        Welcome to Espace, an award-winning real estate agency in Dubai
        fulfilling our clients' property needs since 2009.
      </h1>

      <div className="flex gap-4">
        <button className="bg-red-600 px-6 py-3 rounded text-white">
          Espace Story
        </button>
        <Link to="/contact">
  <button className="border border-white px-6 py-3 rounded text-white 
    hover:bg-red-600 hover:border-red-600 hover:text-white transition">
    Contact Us
  </button>
</Link>
      </div>
    </div>
  </div>
</section>



      {/* ---------------- OUR STORY SECTION ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="col-span-2">
          <h2 className="text-3xl font-normal mb-6">Our Story</h2>
<p className="text-gray-700 leading-7 mb-10 max-w-4xl">
  Espace Real Estate was born in 2009 as a small property services company 
  with a goal to bring UK-style estate agency standards to Dubai. Today we 
  are a 150-strong team who are multilingual and specialise in transacting 
  all types of property in Dubai and making sure our clients enjoy a smooth 
  and transparent process tailored to their needs.
</p>



          {/* Accordions */}
          <div className="border-t border-b py-5">
            <details className="group">
              <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                <span>An expert team you can trust</span>
                <span className="text-gray-500 group-open:rotate-180 transition">&#9660;</span>
              </summary>

              <p className="text-gray-600 mt-4 leading-7">
               As a Dubai real estate company we have many goals set out from the beginning whenever we complete a service for our client. We always make sure that there is an honest, transparent, relationship with our clients. We work hard to keep you informed right through to the point of sale or purchase.
              </p>
            </details>
          </div>

          <div className="border-b py-5">
            <details className="group">
              <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                <span>Why people choose Espace</span>
                <span className="text-gray-500 group-open:rotate-180 transition">&#9660;</span>
              </summary>

              <p className="text-gray-600 mt-4 leading-7">
                Contacting our agents today you will find a diligent, professional, diverse team, ready to cater to your every need on the property market. We won’t rest until you are 100 percent satisfied with the service we provide. Our reputation as the leading real estate agency in Dubai didn’t happen overnight. We worked hard to ensure that our clients could trust the service we offer by hiring the best people for the job and you can too
              </p>
            </details>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-normal mb-6">Explore Espace</h3>

          <ul className="flex flex-col gap-4 text-gray-700">
            <li>
              <a href="/team" className="flex items-center gap-2 hover:text-red-600 transition">
                <span className="w-3 h-3 border border-gray-500 rounded-full"></span>
                MEET THE TEAM
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
<section className="bg-[#F6F6F0] py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 text-center">
    {/* Single Stat */}
    <div className="border-r border-gray-300 pr-8 last:border-r-0">
      <h3 className="text-4xl font-semibold mb-1">2009</h3>
      <p className="text-gray-500 text-xs tracking-widest uppercase">THE YEAR WE WERE BORN</p>
    </div>

    <div className="border-r border-gray-300 pr-8 last:border-r-0">
      <h3 className="text-4xl font-semibold mb-1">51000</h3>
      <p className="text-gray-500 text-xs tracking-widest uppercase">REGISTERED BUYERS</p>
    </div>

    <div className="border-r border-gray-300 pr-8 last:border-r-0">
      <h3 className="text-4xl font-semibold mb-1">60</h3>
      <p className="text-gray-500 text-xs tracking-widest uppercase">COMMUNITIES COVERED</p>
    </div>

    <div className="pr-8">
      <h3 className="text-4xl font-semibold mb-1">270</h3>
      <p className="text-gray-500 text-xs tracking-widest uppercase">NUMBER OF EMPLOYEES</p>
    </div>
  </div>
</section>


      {/* ---------------- MEET TEAM ---------------- */}
<section className="max-w-6xl mx-auto px-6 py-20">
  <h2 className="text-3xl font-normal mb-10">Meet our team</h2>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {[
      { name: "John Lyons", role: "Managing Director", img: "/assets/team1.webp" },
      { name: "Lee Malcolm", role: "HR Director", img: "/assets/team2.webp" },
      { name: "Gil Van Gelder", role: "Director of Residential Brokerage", img: "/assets/team3.webp" },
      { name: "Matthew Montgomery", role: "Sales Director", img: "/assets/team4.webp" },
    ].map((member, i) => (
      <div key={i} className="text-center group overflow-hidden rounded-lg shadow-md cursor-pointer">
        {/* Wrapping div has group and overflow-hidden to contain zoom */}
        <img
  src={member.img}
  alt={member.name}
  className="w-full h-72 object-cover object-top rounded-lg transform transition duration-500 group-hover:scale-105"
/>

        <h3 className="mt-4 font-normal text-lg">{member.name}</h3>
        <p className="text-gray-600 text-sm">{member.role}</p>
      </div>
    ))}
  </div>
</section>

      {/* ---------------- CONTACT FORM ---------------- */}
     <section className="bg-[#F6F6F0] py-20">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
    
    {/* Left Text Section */}
    <div>
      <h2 className="text-3xl font-normal mb-4 leading-snug">
        We’re always <span className="text-red-600 italic">here to help.</span><br />
        Book a call with our team
      </h2>
      <p className="text-gray-700 max-w-md leading-relaxed mt-3">
        As a truly customer-centric real estate agency, we offer a range of related services that are designed to make your property journey stress-free and successful from start to end.
      </p>
    </div>

    {/* Right Form Section */}
    <form className="flex flex-col gap-6 max-w-md">
      <label className="text-gray-700 text-sm font-medium">Name*</label>
      <input type="text" placeholder="Your Name" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600" required />
      
      <label className="text-gray-700 text-sm font-medium">Email Address*</label>
      <input type="email" placeholder="Email Address" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600" required />
      
      <label className="text-gray-700 text-sm font-medium">Telephone*</label>
      <input type="tel" placeholder="Phone Number" className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600" required />
      
      
      <p className="text-xs text-gray-500 mb-2">
  By clicking Submit, you agree to our{" "}
  <Link to="/terms" className="underline hover:text-red-600">Terms & Conditions</Link> and{" "}
  <Link to="/privacy" className="underline hover:text-red-600">Privacy Policy</Link>.
</p>
      <button 
        type="submit"
        className="bg-red-600 text-white py-3 rounded border border-red-600 hover:bg-white hover:text-red-600 transition font-normal tracking-widest"
      >
        SUBMIT
      </button>
    </form>

  </div>
</section>


      {/* ---------------- FOOTER ---------------- */}
      <Footer />   {/* 👈 Footer proper इथे आला आहे */}

    </div>
  );
};

export default AboutUs;
