import React from "react";
import Footer from "../components/Footer"; // 👈 Footer import
import { Link } from "react-router-dom";

const WhyChooseEspace = () => {
  const features = [
    {
      title: "Award-Winning Agency",
      desc: "Recognized for excellence in Dubai real estate with an experienced team.",
    },
    {
      title: "Trusted by Thousands",
      desc: "We build long-term relationships through trust, honesty, and transparency.",
    },
    {
      title: "Local Expertise",
      desc: "Deep understanding of Dubai’s communities, trends, and property values.",
    },
    {
      title: "Complete Real Estate Support",
      desc: "From buying to selling to management — we handle everything.",
    },
  ];

  const team = [
    { name: "John Lyons", role: "Managing Director", img: "/assets/team1.webp" },
    { name: "Lee Malcolm", role: "HR Director", img: "/assets/team2.webp" },
    { name: "Gil Van Gelder", role: "Director of Residential Brokerage", img: "/assets/team3.webp" },
    { name: "Matthew Montgomery", role: "Sales Director", img: "/assets/team4.webp" },
  ];

  return (
    <div className="w-full font-[Poppins]">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full h-[90vh]">
        <img
          src="/assets/AboutUs.webp"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center">
          <div className="px-6 ml-10 text-white max-w-xl">
            <p className="uppercase tracking-wide text-sm mb-3">
              Why Choose Espace
            </p>
            <h1 className="text-4xl font-semibold leading-snug mb-6">
              Professional, Transparent, and Client-Focused Real Estate Services in Dubai
            </h1>
            <div className="flex gap-4">
              <button className="bg-red-600 px-6 py-3 rounded text-white">
                Learn More
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

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="col-span-2">
          <h2 className="text-3xl font-semibold mb-6">Why Choose Espace</h2>
          <p className="text-gray-700 leading-7 mb-10 max-w-4xl">
            Espace Real Estate has built a reputation for excellence in Dubai, offering a client-focused approach, 
            professionalism, and deep market expertise. We ensure smooth, transparent, and successful property 
            experiences for buyers, sellers, and investors.
          </p>

          {/* Accordions */}
          <div className="border-t border-b py-5">
            <details className="group">
              <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                <span>Award-Winning Agency</span>
                <span className="text-gray-500 group-open:rotate-180 transition">&#9660;</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-7">
                Recognized for excellence in Dubai real estate with an experienced and professional team ready to assist clients at every step.
              </p>
            </details>
          </div>

          <div className="border-b py-5">
            <details className="group">
              <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                <span>Trusted by Thousands</span>
                <span className="text-gray-500 group-open:rotate-180 transition">&#9660;</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-7">
                We build long-term relationships through trust, honesty, and transparency, ensuring our clients are confident in every transaction.
              </p>
            </details>
          </div>

          <div className="border-b py-5">
            <details className="group">
              <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                <span>Local Expertise</span>
                <span className="text-gray-500 group-open:rotate-180 transition">&#9660;</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-7">
                Deep understanding of Dubai’s communities, trends, and property values allows us to provide accurate advice and guidance to clients.
              </p>
            </details>
          </div>

          <div className="border-b py-5">
            <details className="group">
              <summary className="cursor-pointer text-lg font-medium flex justify-between items-center">
                <span>Complete Real Estate Support</span>
                <span className="text-gray-500 group-open:rotate-180 transition">&#9660;</span>
              </summary>
              <p className="text-gray-600 mt-4 leading-7">
                From buying to selling to management — we handle all aspects of your property journey with efficiency and care.
              </p>
            </details>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-6">Explore Espace</h3>
          <ul className="flex flex-col gap-4 text-gray-700">
            <li>
              <Link to="/team" className="flex items-center gap-2 hover:text-red-600 transition">
                <span className="w-3 h-3 border border-gray-500 rounded-full"></span>
                MEET THE TEAM
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-red-600 transition">
                <span className="w-3 h-3 border border-gray-500 rounded-full"></span>
                OUR SERVICES
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------------- STATS SECTION ---------------- */}
      <section className="bg-[#F6F6F0] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-8 text-center">
          <div className="border-r border-gray-300 pr-8 last:border-r-0">
            <h3 className="text-4xl font-bold mb-1">2009</h3>
            <p className="text-gray-500 text-xs tracking-widest uppercase">THE YEAR WE WERE BORN</p>
          </div>
          <div className="border-r border-gray-300 pr-8 last:border-r-0">
            <h3 className="text-4xl font-bold mb-1">51000</h3>
            <p className="text-gray-500 text-xs tracking-widest uppercase">REGISTERED BUYERS</p>
          </div>
          <div className="border-r border-gray-300 pr-8 last:border-r-0">
            <h3 className="text-4xl font-bold mb-1">60</h3>
            <p className="text-gray-500 text-xs tracking-widest uppercase">COMMUNITIES COVERED</p>
          </div>
          <div className="pr-8">
            <h3 className="text-4xl font-bold mb-1">270</h3>
            <p className="text-gray-500 text-xs tracking-widest uppercase">NUMBER OF EMPLOYEES</p>
          </div>
        </div>
      </section>

      {/* ---------------- MEET TEAM ---------------- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">Meet our team</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="text-center group overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-72 object-cover object-top rounded-lg transform transition duration-500 group-hover:scale-105"
              />
              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
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
  <h2 className="text-3xl font-semibold mb-4 leading-snug">
    We’re always <span className="text-red-600 italic">here to help.</span><br />
    Book a call with our team
  </h2>

  <p className="text-gray-700 max-w-md leading-relaxed mt-3">
    As a truly customer-centric real estate agency, we offer a range of related
    services that are designed to make your property journey stress-free and
    successful from start to end.
  </p>
</div>


    {/* Right Form Section (WITH FORMSPREE) */}
    <form 
      action="https://formspree.io/f/xdkqzdbk"
      method="POST"
      className="flex flex-col gap-6 max-w-md"
    >
      <label className="text-gray-700 text-sm font-medium">Name*</label>
      <input 
        name="Name"
        type="text" 
        placeholder="Your Name" 
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600" 
        required 
      />
      
      <label className="text-gray-700 text-sm font-medium">Email Address*</label>
      <input 
        name="Email"
        type="email" 
        placeholder="Email Address" 
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600" 
        required 
      />

      <label className="text-gray-700 text-sm font-medium">Telephone*</label>
      <input 
        name="Phone"
        type="tel" 
        placeholder="Phone Number" 
        className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-red-600" 
        required 
      />

      <label className="text-gray-700 text-sm font-medium">Message*</label>
      <textarea
        name="Message"
        placeholder="Write your message..."
        className="border border-gray-300 p-3 rounded h-28 focus:outline-none focus:ring-2 focus:ring-red-600"
        required
      ></textarea>

      <p className="text-xs text-gray-500 mb-2">
        By clicking Submit, you agree to our{" "}
        <Link to="/terms" className="underline hover:text-red-600">Terms & Conditions</Link> and{" "}
        <Link to="/privacy" className="underline hover:text-red-600">Privacy Policy</Link>.
      </p>

      <button 
        type="submit"
        className="bg-red-600 text-white py-3 rounded border border-red-600 hover:bg-white hover:text-red-600 transition font-semibold tracking-widest"
      >
        SUBMIT
      </button>
    </form>

  </div>
</section>


      {/* ---------------- FOOTER ---------------- */}
      <Footer />

    </div>
  );
};

export default WhyChooseEspace;
