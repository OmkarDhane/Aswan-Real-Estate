import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

// Import slick-carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = "http://localhost:1337";

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
      // Strapi कडून Sale आणि Rent दोन्ही डेटा एकाच वेळी मिळवणे
      const [resSale, resRent] = await Promise.all([
        fetch(`${API_URL}/api/properties?filters[category][$eq]=sale&populate=*`),
        fetch(`${API_URL}/api/properties?filters[category][$eq]=rent&populate=*`)
      ]);

      const saleJson = await resSale.json();
      const rentJson = await resRent.json();

      const saleData = saleJson.data || [];
      const rentData = rentJson.data || [];

      const getType = (p) => (p.type || "").toLowerCase();

      // डेटा फिल्टर आणि मर्ज करण्याचे फंक्शन
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
    // Strapi documentId वापरून नेव्हिगेशन
    navigate(
      property.dealType === "Sale"
        ? `/property-info-sale/${property.documentId}`
        : `/property-info-rent/${property.documentId}`
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
    infinite: getPropertiesForTab().length > 3, // ३ पेक्षा कमी आयटम असतील तर इनफिनिट बंद राहील
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
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
          {getPropertiesForTab().map((prop) => {
            // Strapi इमेज पाथ सेटअप
            const imageUrl = prop.images?.[0]?.url 
              ? `${API_URL}${prop.images[0].url}` 
              : "/assets/placeholder.jpg";

            return (
              <div
                key={prop.documentId}
                className="px-2 cursor-pointer outline-none"
                onClick={() => handleClick(prop)}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 flex flex-col h-[450px] w-full border border-gray-100 mb-4 mt-2">
                  <img
                    src={imageUrl}
                    alt={prop.title}
                    className="w-full h-56 sm:h-64 object-cover"
                  />
                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 uppercase line-clamp-1">{prop.title}</h4>
                      <p className="text-red-600 font-bold text-lg">
                        AED {prop.price?.toLocaleString()}
                      </p>
                      <p className="text-gray-500 text-sm mt-2 line-clamp-1">
                        {prop.area} | {prop.location}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mt-4 border-t pt-3">
                       <span className={`text-xs font-bold px-2 py-1 rounded uppercase ${prop.dealType === 'Sale' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                         For {prop.dealType}
                       </span>
                       <span className="text-gray-400 text-xs">View Details →</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>

        {getPropertiesForTab().length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-sm sm:text-base border-2 border-dashed py-10 rounded-lg">
            No {activeTab} properties found currently.
          </p>
        )}
      </div>
    </section>
  );
};

export default TopPropertiesForSaleRent;