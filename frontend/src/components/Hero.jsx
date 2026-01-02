import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "http://localhost:1337"; // Strapi URL

const Hero = () => {
  const navigate = useNavigate();
  const [sale, setSale] = useState([]);
  const [rent, setRent] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchSale();
    fetchRent();
  }, []);

  const fetchSale = async () => {
    try {
      // Strapi कडून 'sale' डेटा मिळवणे
      const res = await fetch(
        `${API_URL}/api/properties?filters[type][$eq]=For Sale&populate=*`
      );
      const json = await res.json();
      const mappedData = (json.data || []).map((item) => ({ ...item, type: "Buy" }));
      setSale(mappedData.slice(0, 2)); // फक्त २ डेटा
    } catch (error) {
      console.error("Error fetching sale properties:", error);
    }
  };

  const fetchRent = async () => {
    try {
      // Strapi कडून 'rent' डेटा मिळवणे
      const res = await fetch(`${API_URL}/api/properties?filters[type][$eq]=For Rent&populate=*`);
      const json = await res.json();
      const mappedData = (json.data || []).map((item) => ({ ...item, type: "Rent" }));
      setRent(mappedData.slice(0, 2)); // फक्त २ डेटा
    } catch (error) {
      console.error("Error fetching rent properties:", error);
    }
  };

  const propertiesToShow = () => {
    let props = [];
    if (filterType === "Buy") props = sale;
    else if (filterType === "Rent") props = rent;
    else props = [...sale, ...rent];

    if (search.trim() !== "") {
      props = props.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return props;
  };

  const handleClick = (property) => {
    // Strapi documentId वापरून नेव्हिगेशन
    if (property.type === "Buy") {
      navigate(`/property-info-sale/${property.documentId}`);
    } else {
      navigate(`/property-info-rent/${property.documentId}`);
    }
  };

  return (
    <section className="bg-white text-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Hero Text */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 animate-fadeIn text-center lg:text-left">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-900">
            Welcome to Dubai's <span className="text-red-500 italic">award-winning</span> real estate agency
          </h1>
          <p className="text-gray-700 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            Search properties across Dubai — villas, apartments, luxury listings
          </p>

          {/* Search Input */}
          <div className="mt-4 w-full max-w-md mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Search by area or title"
              className="w-full border border-gray-200 hover:border-gray-400 rounded-md px-4 py-3 text-base sm:text-lg font-medium transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Book a property valuation */}
          <p className="mt-3 text-sm sm:text-base text-gray-500">
            or{" "}
            <Link
              to="/valuation"
              className="text-black underline hover:text-red-500 transition-colors uppercase tracking-widest font-medium"
            >
              Book a property valuation
            </Link>
          </p>
        </div>

        {/* Right Thumbnails */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Filter Buttons */}
          <div className="flex justify-center lg:justify-end gap-2 mb-4 flex-wrap">
            {["All", "Buy", "Rent"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  filterType === type
                    ? "bg-red-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setFilterType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Property Thumbnails */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {propertiesToShow().map((property) => {
              // Strapi इमेज URL सेटअप
              const imageUrl = property.images?.[0]?.url 
                ? `${API_URL}${property.images[0].url}` 
                : "/assets/placeholder.jpg";

              return (
                <div
                  key={property.documentId}
                  className="relative w-full h-48 sm:h-52 rounded-md overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
                  onClick={() => handleClick(property)}
                >
                  <img
                    src={imageUrl}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity p-2">
                    <p className="text-white text-sm font-semibold text-center uppercase">{property.title}</p>
                  </div>
                </div>
              );
            })}

            {propertiesToShow().length === 0 && (
              <p className="text-center text-gray-500 col-span-1 sm:col-span-2">No properties found.</p>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;