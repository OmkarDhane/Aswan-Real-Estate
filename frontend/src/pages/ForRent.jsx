import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

// Helper function to extract unique values from API data
const getUniqueValues = (items, key) => {
  const values = items
    .map((item) => item[key])
    .filter((val) => val && val !== "");
  return ["All", ...Array.from(new Set(values))];
};

const ForRent = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [areas, setAreas] = useState([]);
  const [types, setTypes] = useState([]);
  const [bedsList, setBedsList] = useState([]);

  const [filters, setFilters] = useState({
    area: "All",
    type: "All",
    minPrice: "",
    maxPrice: "",
    minBeds: "All",
  });

  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/properties/rent");
      const data = await response.json();

      setProperties(data);
      setLoading(false);

      setAreas(getUniqueValues(data, "area"));
      setTypes(getUniqueValues(data, "type"));
      setBedsList(getUniqueValues(data, "beds"));
    } catch (error) {
      console.error("Error fetching properties:", error);
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xdkqzdbk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setShowEmailPopup(false);
          setFormSuccess(false);
        }, 2000);
      } else {
        alert("Something went wrong. Try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }

    setFormSubmitting(false);
  };

  const filteredProperties = properties.filter((property) => {
    const matchArea =
      filters.area === "All" ||
      property.area.includes(filters.area) ||
      property.location.includes(filters.area);

    const matchType =
      filters.type === "All" || property.type.includes(filters.type);

    const matchMinPrice =
      !filters.minPrice || property.price >= parseInt(filters.minPrice);

    const matchMaxPrice =
      !filters.maxPrice || property.price <= parseInt(filters.maxPrice);

    const matchMinBeds =
      filters.minBeds === "All" || property.beds >= parseInt(filters.minBeds);

    return matchArea && matchType && matchMinPrice && matchMaxPrice && matchMinBeds;
  });

  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-normal mb-6 text-black">
          Looking for a rental property in Dubai?
        </h1>

        {/* Dynamic Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-6 sm:mb-8">
          <select
            name="area"
            value={filters.area}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 text-sm sm:text-base w-full"
          >
            {areas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>

          <select
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 text-sm sm:text-base w-full"
          >
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>

          <input
            type="number"
            name="minPrice"
            placeholder="Min Price"
            value={filters.minPrice}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 text-sm sm:text-base w-full"
          />

          <input
            type="number"
            name="maxPrice"
            placeholder="Max Price"
            value={filters.maxPrice}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 text-sm sm:text-base w-full"
          />

          <select
            name="minBeds"
            value={filters.minBeds}
            onChange={handleFilterChange}
            className="border rounded px-3 py-2 text-sm sm:text-base w-full"
          >
            {bedsList.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Property List */}
        <div className="space-y-6">
          {filteredProperties.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-lg shadow flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition"
            >
              <Link
                to={`/property-info-rent/${property._id}`}
                className="w-full sm:w-1/2 block"
              >
                <img
                  src={property.images?.[0] || "/assets/placeholder.jpg"}
                  className="h-64 sm:h-80 w-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
                  alt={property.title}
                />
              </Link>

              <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
                <Link to={`/property-info-rent/${property._id}`}>
                  <h3 className="text-xl sm:text-2xl mb-2 transition-colors hover:text-red-600 cursor-pointer">
                    {property.title}
                  </h3>
                </Link>

                <p className="text-red-600 text-lg sm:text-xl mb-2">
                  AED {property.price.toLocaleString()}
                </p>

                <p className="text-gray-700 mb-2 line-clamp-3 text-sm sm:text-base">
                  {property.description}
                </p>

                <p className="text-gray-500 text-sm sm:text-base">
                  {property.beds} Beds | {property.type}
                </p>

                <p className="text-gray-500 text-sm sm:text-base">
                  {property.area} | {property.location}
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-4">
                  <button
                    onClick={() => setShowCallPopup(true)}
                    className="flex justify-center items-center space-x-2 bg-white text-black border px-5 py-2 rounded hover:bg-red-600 hover:text-white text-sm sm:text-base"
                  >
                    <FaPhone /> <span>Call</span>
                  </button>

                  <button
                    onClick={() => setShowEmailPopup(true)}
                    className="flex justify-center items-center space-x-2 bg-white text-black border px-5 py-2 rounded hover:bg-red-600 hover:text-white text-sm sm:text-base"
                  >
                    <FaEnvelope /> <span>Email</span>
                  </button>

                  <a
                    href="https://wa.me/911234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center space-x-2 bg-white text-black border px-5 py-2 rounded hover:bg-red-600 hover:text-white text-sm sm:text-base"
                  >
                    <FaWhatsapp /> <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {filteredProperties.length === 0 && (
            <p className="text-center text-gray-500 mt-10 text-sm sm:text-base">No properties found.</p>
          )}
        </div>
      </div>

      {/* CALL POPUP */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="w-full max-w-sm bg-white p-6 rounded-lg text-center">
            <h2 className="text-xl mb-4">Call Us</h2>
            <p className="text-gray-700">📞 +91 12345 67890</p>
            <button
              onClick={() => setShowCallPopup(false)}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* EMAIL POPUP */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-auto">
          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl mb-4 text-center">Send Email</h2>

            {formSuccess && (
              <p className="text-green-600 text-center mb-4">
                Email sent successfully!
              </p>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                className="border w-full px-3 py-2 rounded"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormChange}
                className="border w-full px-3 py-2 rounded"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleFormChange}
                className="border w-full px-3 py-2 rounded h-28"
                required
              ></textarea>

              <button
                type="submit"
                disabled={formSubmitting}
                className="w-full bg-red-600 text-white py-2 rounded"
              >
                {formSubmitting ? "Sending..." : "Send"}
              </button>

              <button
                type="button"
                onClick={() => setShowEmailPopup(false)}
                className="w-full bg-gray-300 py-2 rounded mt-2"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForRent;
