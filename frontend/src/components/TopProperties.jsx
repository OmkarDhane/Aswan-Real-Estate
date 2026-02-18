import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = "https://aswan-real-estate-4.onrender.com";

/* ---------- Slider Arrows ---------- */
const SampleNextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      right: 10,
      zIndex: 20,
      filter: "invert(1) grayscale(100%) brightness(0.5)",
    }}
    onClick={onClick}
  />
);

const SamplePrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      left: 10,
      zIndex: 20,
      filter: "invert(1) grayscale(100%) brightness(0.5)",
    }}
    onClick={onClick}
  />
);

/* ---------- Component ---------- */
const TopPropertiesForSaleRent = () => {
  const navigate = useNavigate();

  /* Tabs (PLURAL) */
  const tabs = ["Apartments", "Offices", "Villas",  "Warehouses"];

  /* Singular map for titles & logic */
  const singularMap = {
    Villas: "Villa",
    Apartments: "Apartment",
    Warehouses: "Warehouse",
    Offices: "Office",
  };

  const [activeTab, setActiveTab] = useState("Villas");
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  /* ---------- Fetch Sale + Rent ---------- */
  const fetchProperties = async () => {
    setLoading(true);
    try {
      const [resSale, resRent] = await Promise.all([
        fetch(`${API_URL}/api/properties?filters[type][$eq]=For Sale&populate=*`),
        fetch(`${API_URL}/api/properties?filters[type][$eq]=For Rent&populate=*`),
      ]);

      const saleJson = await resSale.json();
      const rentJson = await resRent.json();

      const combined = [
        ...(saleJson.data || []).map((p) => ({ ...p, dealType: "Sale" })),
        ...(rentJson.data || []).map((p) => ({ ...p, dealType: "Rent" })),
      ];

      setAllProperties(combined);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- Filter by Category ---------- */
  const getPropertiesForTab = () => {
    const tabCategory = singularMap[activeTab].toLowerCase();
    return allProperties.filter(
      (p) => (p.category || "").toLowerCase() === tabCategory
    );
  };

  const currentProps = getPropertiesForTab();

  /* ---------- Slider Settings ---------- */
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: currentProps.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-[#f4f4f4] py-12 sm:py-16 min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        {/* ---------- Title ---------- */}
        <h2 className="text-2xl sm:text-3xl font-light mb-6 text-center sm:text-left text-black">
          Top{" "}
          <span className="text-[#D4AF37] font-bold italic">
            {singularMap[activeTab]}
          </span>{" "}
          Properties
        </h2>

        {/* ---------- Tabs ---------- */}
        <div className="flex gap-2 sm:gap-4 mb-8 flex-wrap justify-center sm:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-all duration-300 ${
                activeTab === tab
                  ? "bg-black text-[#D4AF37] shadow-lg"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-[#D4AF37]"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ---------- Content ---------- */}
        {loading ? (
          <div className="py-20 text-center text-gray-500 font-medium">
            Loading properties...
          </div>
        ) : currentProps.length > 0 ? (
          <Slider key={activeTab} {...sliderSettings}>
            {currentProps.map((prop) => {
              const rawImageUrl = prop.images?.[0]?.url;
              const finalImageUrl = rawImageUrl
                ? rawImageUrl.startsWith("http")
                  ? rawImageUrl
                  : `${API_URL}${rawImageUrl}`
                : "https://via.placeholder.com/600x400?text=No+Image";

              return (
                <div
                  key={prop.documentId}
                  className="px-2 cursor-pointer outline-none mb-10"
                  onClick={() =>
                    navigate(
                      prop.dealType === "Sale"
                        ? `/property-info-sale/${prop.documentId}`
                        : `/property-info-rent/${prop.documentId}`
                    )
                  }
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-2xl transition duration-500 flex flex-col h-[460px] border border-gray-200">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={finalImageUrl}
                        alt={prop.title}
                        className="w-full h-full object-cover hover:scale-105 transition duration-700"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-sm text-[10px] font-bold text-white uppercase bg-black/80 tracking-widest">
                        For {prop.dealType}
                      </div>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="font-bold text-black text-lg mb-1 uppercase line-clamp-1">
                          {prop.title}
                        </h4>
                        <p className="text-[#D4AF37] font-bold text-xl">
                          AED {prop.price?.toLocaleString()}
                        </p>
                        <p className="text-gray-500 text-sm mt-2 italic line-clamp-1">
                          {prop.location}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-4 border-t pt-4">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                          {singularMap[activeTab]}
                        </span>
                        <span className="text-black text-xs font-bold hover:text-[#D4AF37] transition">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <div className="h-20"></div>
        )}
      </div>
    </section>
  );
};

export default TopPropertiesForSaleRent;
