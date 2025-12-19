

import React from "react";
import { Link } from "react-router-dom";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Services = () => {
  const services = [
    {
      title: "Property Valuation",
      desc: "We’ll give you an accurate sale and rental value of your property.",
      img: "/assets/valuation'.webp",
      link: "/valuation",
      btn: "Book A Valuation",
    },
    {
      title: "Find a Property",
      desc: "Browse the best properties with Dubai’s award-winning real estate agents.",
      img: "/assets/findProperty.webp",
      link: "/for-rent",
      btn: "Property Search",
    },
    {
      title: "About us",
      desc: "Dubai is home to opportunities for people looking to invest in property.",
      img: "/assets/offplan.webp",
      link: "/about-us",
      btn: "About us ",
    },
    {
      title: "Property Management",
      desc: "We offer a wide range of property management services in Dubai.",
      img: "/assets/mangament.webp",
      link: "/why-espace",
      btn: "Property Management Packages",
    },
  ];

  return (
    <section className="bg-[#f7f6f3] py-20 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
          <h2 className="text-4xl font-normal leading-snug max-w-xl">
            Dubai <span className="text-red-500 italic">Real Estate Agency</span>
            <br /> Property Services
          </h2>
          <div className="max-w-xl text-gray-700">
            <p className="leading-relaxed mb-4">
              Let us take the stress away and add value to your investment through our
              comprehensive range of property services tailored to meet your unique
              property needs.
            </p>
            <Link
              to="/why-espace"
              className="text-gray-900 underline text-sm tracking-wide hover:text-red-500"
            >
              Why Choose Espace?
            </Link>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-lg group cursor-pointer ">

                {/* Image - increased height */}
                <div className="h-80 w-full overflow-hidden rounded-lg shadow mb-4">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-normal">{s.title}</h3>

                {/* Description */}
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">{s.desc}</p>

                {/* Link */}
                <Link
                  to={s.link}
                  className="inline-block mt-4 text-sm underline font-medium text-gray-900 hover:text-red-500"
                >
                  {s.btn}
                </Link>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
