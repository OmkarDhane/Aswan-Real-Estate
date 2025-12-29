import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ForSale = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    area: "All",
    type: "All",
    minPrice: "",
    maxPrice: "",
    minBeds: "",
  });

  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/properties/sale");
      const data = await response.json();
      setProperties(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProperties = properties.filter((property) => {
    const matchArea =
      filters.area === "All" ||
      property.area.includes(filters.area) ||
      property.location.includes(filters.area);
    const matchType = filters.type === "All" || property.type.includes(filters.type);
    const matchMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
    const matchMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
    const matchMinBeds = !filters.minBeds || property.beds >= parseInt(filters.minBeds);

    return matchArea && matchType && matchMinPrice && matchMaxPrice && matchMinBeds;
  });

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-normal mb-6 text-black">
          Looking for a property in Dubai? Start your property search.
        </h1>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <select
            name="area"
            value={filters.area}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="All">All Areas</option>
            <option value="Downtown">Downtown</option>
            <option value="Dubai Marina">Dubai Marina</option>
            <option value="JLT">JLT</option>
            <option value="JVC">JVC</option>
          </select>

          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 w-full"
          >
            <option value="All">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Office">Office</option>
          </select>

          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 w-full"
          />

          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 w-full"
          />

          <input
            type="number"
            name="minBeds"
            placeholder="Min Beds"
            value={filters.minBeds}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 w-full"
          />
        </div>

        {/* Property List */}
        <div className="space-y-6">
          {filteredProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-lg shadow flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <Link
                to={`/property-info-sale/${property._id}`}
                className="w-full sm:w-1/2 block"
              >
                <img
                  src={property.images[0] || "/assets/placeholder.jpg"}
                  className="h-64 sm:h-80 w-full object-cover rounded-lg"
                  alt={property.title}
                />
              </Link>

              <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
                {/* Title */}
                <Link to={`/property-info-sale/${property._id}`}>
                  <h3 className="text-xl sm:text-2xl mb-2 transition-colors duration-300 hover:text-red-600 cursor-pointer">
                    {property.title}
                  </h3>
                </Link>

                <p className="text-red-600 text-lg sm:text-xl mb-2">
                  AED {property.price.toLocaleString()}
                </p>
                <p className="text-gray-700 mb-2 line-clamp-2">{property.description}</p>

                <p className="text-gray-500">{property.beds} Beds | {property.type}</p>
                <p className="text-gray-500">{property.area} | {property.location}</p>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
                  <button
                    onClick={() => setShowCallPopup(true)}
                    className="flex items-center justify-center space-x-2 bg-white text-black border px-7 py-3 rounded hover:bg-red-600 hover:text-white w-full sm:w-auto"
                  >
                    <FaPhone /> <span>Call</span>
                  </button>

                  <button
                    onClick={() => setShowEmailPopup(true)}
                    className="flex items-center justify-center space-x-2 bg-white text-black border px-7 py-3 rounded hover:bg-red-600 hover:text-white w-full sm:w-auto"
                  >
                    <FaEnvelope /> <span>Email</span>
                  </button>

                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 bg-white text-black border px-7 py-3 rounded hover:bg-red-600 hover:text-white w-full sm:w-auto"
                  >
                    <FaWhatsapp /> <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filteredProperties.length === 0 && (
            <p className="text-center text-gray-500 mt-10">No properties found.</p>
          )}
        </div>
      </div>

      {/* Call Popup */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="w-full max-w-md bg-white p-6 rounded-lg text-center">
            <h2 className="text-xl mb-4">Call Us</h2>
            <p className="text-gray-700">📞 +91 12345 67890</p>
            <button
              onClick={() => setShowCallPopup(false)}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Email Popup */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4 text-center font-semibold">Send Email</h2>
            <form
              action="https://formspree.io/f/xdkqzdbk"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border px-3 py-2 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full border px-3 py-2 rounded"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full border px-3 py-2 rounded h-28"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                Send Message
              </button>
            </form>
            <button
              onClick={() => setShowEmailPopup(false)}
              className="w-full mt-3 bg-gray-300 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default ForSale;
