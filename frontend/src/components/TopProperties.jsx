import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = "https://aswan-real-estate-3.onrender.com";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", right: 10, zIndex: 20 }} onClick={onClick} />;
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", left: 10, zIndex: 20 }} onClick={onClick} />;
};

const TopPropertiesForSaleRent = () => {
  const navigate = useNavigate();
  const tabs = ["Villas", "Apartments", "Townhouse", "Warehouse", "Office"];
  const [activeTab, setActiveTab] = useState("Villas");
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true); // Loading स्टेट जोडली

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    setLoading(true);
    try {
      const [resSale, resRent] = await Promise.all([
        fetch(`${API_URL}/api/properties?filters[type][$eq]=For Sale&populate=*`),
        fetch(`${API_URL}/api/properties?filters[type][$eq]=For Rent&populate=*`)
      ]);

      const saleJson = await resSale.json();
      const rentJson = await resRent.json();

      const combined = [
        ...(saleJson.data || []).map(p => ({ ...p, dealType: "Sale" })),
        ...(rentJson.data || []).map(p => ({ ...p, dealType: "Rent" }))
      ];

      setAllProperties(combined);
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPropertiesForTab = () => {
    return allProperties.filter((p) => {
      const pCategory = (p.category || "").toLowerCase();
      const currentTab = activeTab.toLowerCase().replace(/s$/, ""); 
      return pCategory === currentTab;
    });
  };

  const currentProps = getPropertiesForTab();

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
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ],
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-2xl sm:text-3xl font-normal mb-6 text-center sm:text-left">
          Top <span className="text-red-600 font-bold">{activeTab}</span> Properties
        </h2>

        {/* Tabs */}
        <div className="flex gap-2 sm:gap-4 mb-8 flex-wrap justify-center sm:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                activeTab === tab ? "bg-red-600 text-white shadow-md" : "bg-white border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="py-20 text-center text-gray-500 font-medium">Loading properties...</div>
        ) : currentProps.length > 0 ? (
          
          <Slider key={activeTab} {...sliderSettings}>
            {currentProps.map((prop) => {
              const rawImageUrl = prop.images?.[0]?.url;
              const finalImageUrl = rawImageUrl 
                ? (rawImageUrl.startsWith('http') ? rawImageUrl : `${API_URL}${rawImageUrl}`)
                : "https://via.placeholder.com/600x400?text=No+Image";

              return (
                <div key={prop.documentId} className="px-2 cursor-pointer outline-none mb-6" 
                     onClick={() => navigate(prop.dealType === "Sale" ? `/property-info-sale/${prop.documentId}` : `/property-info-rent/${prop.documentId}`)}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 flex flex-col h-[450px] border border-gray-100 mt-2">
                    <div className="relative h-64 overflow-hidden">
                      <img src={finalImageUrl} alt={prop.title} className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
                      <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-bold text-white uppercase ${prop.dealType === 'Sale' ? 'bg-blue-600' : 'bg-green-600'}`}>
                        For {prop.dealType}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="font-semibold text-lg mb-2 uppercase line-clamp-1">{prop.title}</h4>
                        <p className="text-red-600 font-bold text-xl">AED {prop.price?.toLocaleString()}</p>
                        <p className="text-gray-500 text-sm mt-2 line-clamp-1">{prop.location}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 border-t pt-3">
                        <span className="text-gray-400 text-[10px] font-bold uppercase">{activeTab.replace(/s$/, "")}</span>
                        <span className="text-red-600 text-xs font-bold">View Details →</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        ) : (
          <div className="text-center text-gray-400 mt-10 py-20 border-2 border-dashed rounded-xl bg-white">
            No {activeTab} properties found.
          </div>
        )}
      </div>
    </section>
  );
};

export default TopPropertiesForSaleRent;