import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Services = () => {
  const services = [
    {
      title: "Property Valuation",
      desc: "We’ll help you find the accurate sale and rental value of your property.",
      img: "/assets/property-valuation.jpg",
      link: "/valuation",
      btn: "Book A Valuation",
    },
    {
      title: "Find a Property",
      desc: "Browse the best Properties in Sharjah with our real estate agents.",
      img: "/assets/find-a-property.jpg",
      link: "/for-rent",
      btn: "Property Search",
    },
    {
      title: "Property Management",
      desc: "We offer a wide range of property management services in Sharjah.",
      img: "/assets/property-management.png",
      link: "/contact",
      btn: "Management Packages",
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-16 sm:py-20 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-12 sm:mb-16 text-center lg:text-left items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl font-light leading-snug max-w-xl text-black">
            Sharjah <span className="text-[#D4AF37] italic font-normal">Real Estate Agency</span>
            <br /> Property Services
          </h2>
          <div className="max-w-xl text-gray-700 mt-4 lg:mt-0">
            <p className="leading-relaxed mb-4 text-sm sm:text-base">
              Our comprehensive range of property services are designed to simplify ownership, reduce complexity, and enhance long-term value.
            </p>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          centeredSlides={true}               // <-- Cards middle
          centerInsufficientSlides={true}    // <-- Agar 3 card hi kam asel, te pan center
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 }, // 3 cards maximum
          }}
          className="pb-10"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <div className="rounded-xl group cursor-pointer bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 max-w-xs w-full">
                {/* Image Container */}
                <div className="h-64 sm:h-72 w-full overflow-hidden rounded-lg mb-5">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* Content */}
                <div className="px-2 pb-2 text-center">
                  <h3 className="text-lg font-normal text-black uppercase tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                    {s.desc}
                  </p>

                  {/* Button/Link - Gold Hover */}
                  <Link
                    to={s.link}
                    className="inline-block mt-4 text-sm font-bold uppercase tracking-widest border-b-2 border-[#D4AF37] pb-1 text-black hover:text-[#D4AF37] hover:border-black transition-all duration-300"
                  >
                    {s.btn}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
