import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [sale, setSale] = useState([]);
  const [rent, setRent] = useState([]);
  const [filterType, setFilterType] = useState('All'); 
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchSale();
    fetchRent();
  }, []);

  const fetchSale = async () => {
    try {
      const res = await fetch("https://aswan-real-estate.onrender.com/api/properties/sale");
      const data = await res.json();
      const mappedData = data.map(item => ({ ...item, type: 'Buy' }));
      setSale(mappedData.slice(0, 2)); 
    } catch (error) {
      console.error("Error fetching sale properties:", error);
    }
  };

  const fetchRent = async () => {
    try {
      const res = await fetch("https://aswan-real-estate.onrender.com/api/properties/rent");
      const data = await res.json();
      const mappedData = data.map(item => ({ ...item, type: 'Rent' }));
      setRent(mappedData.slice(0, 2)); 
    } catch (error) {
      console.error("Error fetching rent properties:", error);
    }
  };

  const propertiesToShow = () => {
    let props = [];
    if (filterType === 'Buy') props = sale;
    else if (filterType === 'Rent') props = rent;
    else props = [...sale, ...rent];

    if (search.trim() !== '') {
      props = props.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return props;
  };

  const handleClick = (property) => {
    if (property.type === 'Buy') {
      navigate(`/property-info-sale/${property._id || property.id}`);
    } else {
      navigate(`/property-info-rent/${property._id || property.id}`);
    }
  };

  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        {/* Left Hero Text with fade-in */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 animate-fadeIn">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-900 text-center lg:text-left">
            Welcome to Dubai's <span className="text-red-500 italic">award-winning</span> real estate agency
          </h1>
          <p className="text-gray-700 text-lg max-w-lg text-center lg:text-left mx-auto lg:mx-0">
            Search properties across Dubai — villas, apartments, luxury listings
          </p>

          {/* Search input */}
          <div className="mt-6 w-full">
            <input
              type="text"
              placeholder="Search by area or title"
              className="w-full border border-gray-200 hover:border-gray-400 rounded-md px-4 py-3 text-base font-medium transition-colors"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Book a property valuation */}
          <p className="mt-4 text-sm md:text-base text-gray-500 text-center lg:text-left">
            or{' '}
            <Link
              to="/valuation"
              className="text-black underline hover:text-red-500 transition-colors uppercase tracking-widest font-medium"
            >
              Book a property valuation
            </Link>
          </p>
        </div>

        {/* Right Thumbnails + Buttons */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Filter buttons */}
          <div className="flex justify-end gap-2 mb-4">
            {['All', 'Buy', 'Rent'].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  filterType === type
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setFilterType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-4">
            {propertiesToShow().map((property) => (
              <div
                key={property._id || property.id}
                className="relative w-full h-52 rounded-md overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => handleClick(property)}
              >
                <img
                  src={property.images?.[0] || '/assets/placeholder.jpg'}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity p-2">
                  <p className="text-white text-sm font-semibold text-center">{property.title}</p>
                </div>
              </div>
            ))}

            {propertiesToShow().length === 0 && (
              <p className="text-center text-gray-500 col-span-2">No properties found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Tailwind custom animation */}
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
