import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 10, zIndex: 20 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 10, zIndex: 20 }}
      onClick={onClick}
    />
  );
};

const TopPropertiesForSaleRent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Villas");

  const [villas, setVillas] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [townhouses, setTownhouses] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const resSale = await fetch("http://localhost:3000/api/properties/sale");
      const saleData = await resSale.json();

      const resRent = await fetch("http://localhost:3000/api/properties/rent");
      const rentData = await resRent.json();

      const getType = (p) =>
        (p.type || p.propertyType || p.categoryType || "").toLowerCase();

      const mergeType = (type) => [
        ...saleData
          .filter((p) => getType(p) === type.toLowerCase())
          .map((p) => ({ ...p, dealType: "Sale" })),
        ...rentData
          .filter((p) => getType(p) === type.toLowerCase())
          .map((p) => ({ ...p, dealType: "Rent" })),
      ];

      setVillas(mergeType("villa"));
      setApartments(mergeType("apartment"));
      setTownhouses(mergeType("townhouse"));
      setWarehouses(mergeType("warehouse"));
      setOffices(mergeType("office"));
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleClick = (property) => {
    navigate(
      property.dealType === "Sale"
        ? `/property-info-sale/${property._id || property.id}`
        : `/property-info-rent/${property._id || property.id}`
    );
  };

  const getPropertiesForTab = () => {
    if (activeTab === "Villas") return villas;
    if (activeTab === "Apartments") return apartments;
    if (activeTab === "Townhouse") return townhouses;
    if (activeTab === "Warehouse") return warehouses;
    if (activeTab === "Office") return offices;
    return [];
  };

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Desktop view
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1, // Mobile & Tablet view - 1 card
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
    ],
  };

  const tabs = ["Villas", "Apartments", "Townhouse", "Warehouse", "Office"];

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-normal mb-6 text-center sm:text-left">
          Top <span className="text-red-600">{activeTab}</span> Properties
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mb-8 flex-wrap justify-center sm:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-normal text-sm sm:text-base transition ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Slider */}
        <Slider {...sliderSettings}>
          {getPropertiesForTab().map((prop) => (
            <div
              key={prop._id || prop.id}
              className="px-2 cursor-pointer flex justify-center"
              onClick={() => handleClick(prop)}
            >
              <div className="bg-white rounded-lg shadow overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col h-full max-w-sm w-full">
                <img
                  src={prop.images?.[0] || "/assets/placeholder.jpg"}
                  alt={prop.title}
                  className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover rounded-t-lg"
                />
                <div className="p-4 flex flex-col justify-between h-full">
                  <h4 className="font-medium text-sm sm:text-base mb-2">{prop.title}</h4>
                  <p className="text-red-600 font-medium text-sm sm:text-base">
                    AED {prop.price.toLocaleString()}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    {prop.area} | {prop.location}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{prop.dealType}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {getPropertiesForTab().length === 0 && (
          <p className="text-center text-gray-500 mt-4 text-sm sm:text-base">
            No properties found.
          </p>
        )}
      </div>
    </section>
  );
};

export default TopPropertiesForSaleRent;
