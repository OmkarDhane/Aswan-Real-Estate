import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

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
      const resSale = await fetch("https://aswan-real-estate.onrender.com/api/properties/sale");
      const saleData = await resSale.json();

      const resRent = await fetch("https://aswan-real-estate.onrender.com/api/properties/rent");
      const rentData = await resRent.json();

      // 👉 Detect property type safely
      const getType = (p) =>
        (p.type || p.propertyType || p.categoryType || "").toLowerCase();

      // 👉 Combine sale + rent by type
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

      console.log("Townhouse:", mergeType("townhouse"));
      console.log("Warehouse:", mergeType("warehouse"));
      console.log("Office:", mergeType("office"));
      
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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const tabs = ["Villas", "Apartments", "Townhouse", "Warehouse", "Office"];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-normal mb-6">
          Top <span className="text-red-600">{activeTab}</span> Properties
        </h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-md font-normal ${
                activeTab === tab
                  ? "bg-red-600 text-white"
                  : "bg-white border border-gray-300"
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
              className="px-2 cursor-pointer"
              onClick={() => handleClick(prop)}
            >
              <div className="bg-white rounded-lg shadow overflow-hidden hover:scale-105 transform transition duration-300">
                <img
                  src={prop.images?.[0] || "/assets/placeholder.jpg"}
                  alt={prop.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-medium">{prop.title}</h4>
                  <p className="text-red-600 font-medium mt-2">
                    AED {prop.price}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {prop.area} | {prop.location}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {prop.dealType}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {getPropertiesForTab().length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No properties found.
          </p>
        )}
      </div>
    </section>
  );
};

export default TopPropertiesForSaleRent;
