import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const WhyChooseEspace = () => {
  const team = [
    { name: "John Lyons", role: "Managing Director", img: "/assets/team1.webp" },
    { name: "Lee Malcolm", role: "HR Director", img: "/assets/team2.webp" },
    { name: "Gil Van Gelder", role: "Director of Residential Brokerage", img: "/assets/team3.webp" },
    { name: "Matthew Montgomery", role: "Sales Director", img: "/assets/team4.webp" },
  ];

  return (
    <div className="w-full font-[Poppins]">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative w-full min-h-[85vh] md:h-[90vh]">
        <img
          src="/assets/AboutUs.webp"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div
            className="
              w-full
              px-5
              sm:px-6
              md:ml-10
              max-w-xl
              text-white
              text-center
              md:text-left
            "
          >
            <p className="uppercase tracking-wide text-xs sm:text-sm mb-3">
              Why Choose Espace
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6">
              Professional, Transparent, and Client-Focused Real Estate Services in Dubai
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-red-600 px-6 py-3 rounded text-white w-full sm:w-auto">
                Learn More
              </button>

              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  className="
                    border border-white
                    px-6 py-3
                    rounded
                    text-white
                    w-full
                    hover:bg-red-600 hover:border-red-600 transition
                  "
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Why Choose Espace
          </h2>
          <p className="text-gray-700 leading-7 mb-10 max-w-4xl">
            Espace Real Estate has built a reputation for excellence in Dubai, offering a client-focused approach,
            professionalism, and deep market expertise. We ensure smooth, transparent, and successful property
            experiences for buyers, sellers, and investors.
          </p>

          {[
            ["Award-Winning Agency", "Recognized for excellence in Dubai real estate with an experienced and professional team ready to assist clients at every step."],
            ["Trusted by Thousands", "We build long-term relationships through trust, honesty, and transparency, ensuring our clients are confident in every transaction."],
            ["Local Expertise", "Deep understanding of Dubai’s communities, trends, and property values allows us to provide accurate advice and guidance to clients."],
            ["Complete Real Estate Support", "From buying to selling to management — we handle all aspects of your property journey with efficiency and care."]
          ].map(([title, desc], i) => (
            <div key={i} className="border-b py-5">
              <details className="group">
                <summary className="cursor-pointer text-base sm:text-lg font-medium flex justify-between items-center">
                  <span>{title}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition">&#9660;</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-7">
                  {desc}
                </p>
              </details>
            </div>
          ))}
        </div>

        {/* Right Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-6">Explore Espace</h3>
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
      <section className="bg-[#F6F6F0] py-14">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-4">
          {[
            ["2009", "THE YEAR WE WERE BORN"],
            ["51000", "REGISTERED BUYERS"],
            ["60", "COMMUNITIES COVERED"],
            ["270", "NUMBER OF EMPLOYEES"]
          ].map(([num, label], i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-bold mb-1">{num}</h3>
              <p className="text-gray-500 text-xs tracking-widest uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- MEET TEAM ---------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Meet our team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="text-center group overflow-hidden rounded-lg shadow-md cursor-pointer"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-72 object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <h3 className="mt-4 font-semibold">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CONTACT FORM ---------------- */}
      <section className="bg-[#F6F6F0] py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
              We’re always <span className="text-red-600 italic">here to help.</span><br />
              Book a call with our team
            </h2>
            <p className="text-gray-700 max-w-md leading-relaxed mt-3">
              As a truly customer-centric real estate agency, we offer a range of related
              services that are designed to make your property journey stress-free and
              successful from start to end.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xdkqzdbk"
            method="POST"
            className="flex flex-col gap-4 max-w-md w-full"
          >
            <input name="Name" placeholder="Your Name" className="border p-3 rounded w-full" required />
            <input name="Email" type="email" placeholder="Email Address" className="border p-3 rounded w-full" required />
            <input name="Phone" placeholder="Phone Number" className="border p-3 rounded w-full" required />
            <textarea name="Message" placeholder="Write your message..." className="border p-3 rounded h-28 w-full" required />

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
