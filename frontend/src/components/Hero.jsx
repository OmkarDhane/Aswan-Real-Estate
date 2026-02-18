import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "https://aswan-real-estate-4.onrender.com";

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
      const res = await fetch(
        `${API_URL}/api/properties?filters[type][$eq]=For Sale&populate=*`
      );
      const json = await res.json();
      const mappedData = (json.data || []).map((item) => ({
        ...item,
        type: "Buy",
      }));
      setSale(mappedData.slice(0, 4));
    } catch (error) {
      console.error("Error fetching sale properties:", error);
    }
  };

  const fetchRent = async () => {
    try {
      const res = await fetch(
        `${API_URL}/api/properties?filters[type][$eq]=For Rent&populate=*`
      );
      const json = await res.json();
      const mappedData = (json.data || []).map((item) => ({
        ...item,
        type: "Rent",
      }));
      setRent(mappedData.slice(0, 4));
    } catch (error) {
      console.error("Error fetching rent properties:", error);
    }
  };

  const propertiesToShow = () => {
    let props = [];

    if (filterType === "Buy") props = sale;
    else if (filterType === "Rent") props = rent;
    else props = [...sale, ...rent];

    if (search.trim()) {
      props = props.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return props.slice(0, 4);
  };

  const handleClick = (property) => {
    if (property.type === "Buy") {
      navigate(`/property-info-sale/${property.documentId}`);
    } else {
      navigate(`/property-info-rent/${property.documentId}`);
    }
  };

  const list = propertiesToShow();

  return (
    <section className="bg-[#F2F2F2] text-black py-12 md:py-16 font-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* LEFT */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 animate-fadeIn text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] leading-tight text-black">
            <span className="block">Welcome to Sharjah's</span>
            <span className="block text-[#D4AF37] italic font-semibold">
              client-focused
            </span>
            <span className="block">real estate agency</span>
          </h1>

          <p className="text-gray-800 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            Search properties across Sharjah — villas, apartments, luxury listings
          </p>

          <input
            type="text"
            placeholder="Search by area or title"
            className="w-full border border-gray-300 hover:border-[#D4AF37] rounded-md px-4 py-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

         <p className="text-sm text-gray-600">
  or{" "}
  <Link
    to="/valuation"
    className="text-black underline font-semibold hover:text-[#D4AF37] transition-colors"
  >
    Book a property valuation
  </Link>
</p>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex justify-center lg:justify-end gap-2 mb-4 flex-wrap">
            {["All", "Buy", "Rent"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  filterType === type
                    ? "bg-[#D4AF37] text-black shadow-md"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                onClick={() => setFilterType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* GRID — FIXED HEIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[440px]">
            {[...list, ...Array(Math.max(0, 4 - list.length))]
              .slice(0, 4)
              .map((property, index) => {
                if (!property) {
                  return (
                    <div
                      key={`empty-${index}`}
                      className="w-full h-48 sm:h-52 rounded-md border border-transparent"
                    />
                  );
                }

                const rawImageUrl = property.images?.[0]?.url;
                const imageUrl = rawImageUrl
                  ? rawImageUrl.startsWith("http")
                    ? rawImageUrl
                    : `${API_URL}${rawImageUrl}`
                  : "https://via.placeholder.com/400x300?text=No+Image";

                return (
                  <div
                    key={property.documentId}
                    className="relative w-full h-48 sm:h-52 rounded-md overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 border-2 border-transparent hover:border-[#D4AF37]"
                    onClick={() => handleClick(property)}
                  >
                    <img
                      src={imageUrl}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity p-2 text-center">
                      <p className="text-[#D4AF37] text-sm font-bold uppercase">
                        {property.title}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
