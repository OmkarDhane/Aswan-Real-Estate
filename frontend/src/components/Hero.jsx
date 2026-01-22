import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const API_URL = "https://aswan-real-estate-3.onrender.com";

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
      const mappedData = (json.data || []).map((item) => ({ ...item, type: "Buy" }));
      setSale(mappedData.slice(0, 2)); 
    } catch (error) {
      console.error("Error fetching sale properties:", error);
    }
  };

  const fetchRent = async () => {
    try {
      const res = await fetch(`${API_URL}/api/properties?filters[type][$eq]=For Rent&populate=*`);
      const json = await res.json();
      const mappedData = (json.data || []).map((item) => ({ ...item, type: "Rent" }));
      setRent(mappedData.slice(0, 2));
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
    if (property.type === "Buy") {
      navigate(`/property-info-sale/${property.documentId}`);
    } else {
      navigate(`/property-info-rent/${property.documentId}`);
    }
  };

  return (
    /* बदल १: bg-white ऐवजी bg-[#F2F2F2] (Light Grey) आणि font-custom वापरला */
    <section className="bg-[#F2F2F2] text-black py-12 md:py-16 font-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Hero Text */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 animate-fadeIn text-center lg:text-left">
          {/* बदल: Text split into 3 lines using block spans */}
  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]  leading-tight text-black">
    <span className="block">Welcome to Sharjah's</span>
    <span className="block text-[#D4AF37] italic font-semibold">client-focused</span>
    <span className="block">real estate agency</span>
  </h1>
          <p className="text-gray-800 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
           Search properties across Sharjah — villas, apartments, luxury listings
          </p>

          <div className="mt-4 w-full max-w-md mx-auto lg:mx-0">
            {/* बदल ३: Input border hover Gold ठेवली */}
            <input
              type="text"
              placeholder="Search by area or title"
              className="w-full border border-gray-300 hover:border-[#D4AF37] rounded-md px-4 py-3 text-base sm:text-lg font-medium transition-colors outline-none shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            or{" "}
            <Link
              to="/valuation"
              className="text-black underline hover:text-[#D4AF37] transition-colors uppercase tracking-widest font-semibold"
            >
              Book a property valuation
            </Link>
          </p>
        </div>

        {/* Right Thumbnails */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex justify-center lg:justify-end gap-2 mb-4 flex-wrap">
            {["All", "Buy", "Rent"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  filterType === type
                    /* बदल ४: Active button Gold (Background) आणि Black (Text) */
                    ? "bg-[#D4AF37] text-black shadow-md"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
                onClick={() => setFilterType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {propertiesToShow().map((property) => {
              const rawImageUrl = property.images?.[0]?.url;
              const imageUrl = rawImageUrl 
                ? (rawImageUrl.startsWith('http') ? rawImageUrl : `${API_URL}${rawImageUrl}`)
                : "https://via.placeholder.com/400x300?text=No+Image";

              return (
                /* बदल ५: Card border hover Gold */
                <div
                  key={property.documentId}
                  className="relative w-full h-48 sm:h-52 rounded-md overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 border-2 border-transparent hover:border-[#D4AF37]"
                  onClick={() => handleClick(property)}
                >
                  <img
                    src={imageUrl}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Error+Loading"; }}
                  />
                  {/* बदल ६: Overlay Gold/Black combination मध्ये */}
                  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity p-2 text-center">
                    <p className="text-[#D4AF37] text-sm font-bold uppercase">{property.title}</p>
                  </div>
                </div>
              );
            })}

            {propertiesToShow().length === 0 && (
              <p className="text-center text-gray-500 col-span-1 sm:col-span-2 py-10">No properties found.</p>
            )}
          </div>
        </div>
      </div>

      <style>{`
       
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
       
        .font-main {
          font-family: "Poppins", sans-serif;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        h1, button, input, p {
            letter-spacing: 0.5px;
        }
      `}</style>
    </section>
  );
};

export default Hero;