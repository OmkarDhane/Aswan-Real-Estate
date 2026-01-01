import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // useLocation ॲड केले
import Footer from "../components/Footer";

const API_URL = "http://localhost:1337";

const getUniqueValues = (items, key) => {
  const values = items
    .map((item) => item[key])
    .filter((val) => val && val !== "");
  return ["All", ...Array.from(new Set(values))];
};

const ForRent = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation(); // URL वाचण्यासाठी

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
  const [selectedProp, setSelectedProp] = useState("");

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const response = await fetch(`${API_URL}/api/properties?filters[category][$eq]=rent&populate=*`);
      const json = await response.json();
      const data = json.data || [];
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

  // 🔹 सर्च आणि बाकीचे फिल्टर्स एकत्र केले
  const filteredProperties = properties.filter((property) => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search")?.toLowerCase() || "";

    // नाव (Title) किंवा लोकेशननुसार सर्च शोधणे
    const matchSearch =
      searchTerm === "" ||
      property.title?.toLowerCase().includes(searchTerm) ||
      property.location?.toLowerCase().includes(searchTerm) ||
      property.area?.toLowerCase().includes(searchTerm);

    const matchArea = filters.area === "All" || property.area?.includes(filters.area) || property.location?.includes(filters.area);
    const matchType = filters.type === "All" || property.type?.includes(filters.type);
    const matchMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
    const matchMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);
    const matchMinBeds = filters.minBeds === "All" || property.beds >= parseInt(filters.minBeds);

    return matchSearch && matchArea && matchType && matchMinPrice && matchMaxPrice && matchMinBeds;
  });

  if (loading) return <div className="text-center py-20 font-[Poppins]">Loading rental properties...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-medium mb-6 text-black">Find your perfect home for rent in Dubai.</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <select name="area" value={filters.area} onChange={handleFilterChange} className="border rounded px-3 py-2 text-sm outline-none focus:border-red-600">
            {areas.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          <select name="type" value={filters.type} onChange={handleFilterChange} className="border rounded px-3 py-2 text-sm outline-none focus:border-red-600">
            {types.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          <input type="number" name="minPrice" placeholder="Min Price" value={filters.minPrice} onChange={handleFilterChange} className="border rounded px-3 py-2 text-sm outline-none" />
          <input type="number" name="maxPrice" placeholder="Max Price" value={filters.maxPrice} onChange={handleFilterChange} className="border rounded px-3 py-2 text-sm outline-none" />
          <select name="minBeds" value={filters.minBeds} onChange={handleFilterChange} className="border rounded px-3 py-2 text-sm outline-none focus:border-red-600">
            {bedsList.sort().map((b) => <option key={b} value={b}>{b === "All" ? "All Beds" : `${b} Beds`}</option>)}
          </select>
        </div>

        <div className="space-y-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => {
              const imageUrl = property.images?.[0]?.url ? `${API_URL}${property.images[0].url}` : "/assets/placeholder.jpg";
              const desc = property.description?.[0]?.children?.[0]?.text || "No description available.";

              return (
                <div key={property.documentId} className="bg-white rounded-lg shadow-sm flex flex-col md:flex-row overflow-hidden hover:shadow-md border border-gray-100 transition-all">
                  <Link to={`/property-info-rent/${property.documentId}`} className="w-full md:w-[45%]">
                    <img src={imageUrl} alt={property.title} className="h-64 md:h-80 w-full object-cover" />
                  </Link>

                  <div className="w-full md:w-[55%] p-6 flex flex-col justify-between">
                    <div>
                      <Link to={`/property-info-rent/${property.documentId}`}>
                        <h3 className="text-2xl font-normal mb-2 hover:text-red-600 transition-colors cursor-pointer uppercase tracking-tight">
                          {property.title}
                        </h3>
                      </Link>
                      <p className="text-red-600 text-xl font-normal mb-3">
                        AED {property.price?.toLocaleString()} <span className="text-sm font-normal text-gray-500">/ Year</span>
                      </p>
                      <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">{desc}</p>
                      <div className="text-gray-500 text-sm font-medium">
                        <span>{property.beds} Beds</span> | <span>{property.type}</span>
                        <p className="mt-1 uppercase">{property.area} | {property.location}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-6">
                      <button onClick={() => setShowCallPopup(true)} className="flex items-center gap-2 border px-6 py-2 rounded text-sm font-medium hover:bg-red-600 hover:text-white transition-all"><FaPhone /> Call</button>
                      <button onClick={() => { setShowEmailPopup(true); setSelectedProp(property.title); }} className="flex items-center gap-2 border px-6 py-2 rounded text-sm font-medium hover:bg-red-600 hover:text-white transition-all"><FaEnvelope /> Email</button>
                      <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="flex items-center gap-2 border px-6 py-2 rounded text-sm font-medium hover:bg-green-600 hover:text-white transition-all"><FaWhatsapp /> WhatsApp</a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 text-gray-500">No properties found matching your search.</div>
          )}
        </div>
      </div>
      
      {/* Popups remain same as your code */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xs p-8 text-center relative rounded shadow-xl">
            <button onClick={() => setShowCallPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><FaTimes /></button>
            <FaPhone className="text-red-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 uppercase">Contact Us</h2>
            <p className="text-gray-600 mb-6 font-semibold">+91 123 456 7890</p>
            <a href="tel:+911234567890" className="inline-block w-full bg-red-600 text-white py-3 font-bold rounded uppercase">Call Now</a>
          </div>
        </div>
      )}

      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md p-6 rounded relative shadow-xl">
            <button onClick={() => setShowEmailPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><FaTimes /></button>
            <h2 className="text-xl font-bold mb-4 uppercase">Inquiry for {selectedProp}</h2>
            <form action="https://formspree.io/f/xdkqzdbk" method="POST" className="space-y-4">
              <input type="hidden" name="Property" value={selectedProp} />
              <input className="w-full border p-3 rounded outline-none" name="name" placeholder="Full Name" required />
              <input className="w-full border p-3 rounded outline-none" type="email" name="email" placeholder="Email" required />
              <textarea className="w-full border p-3 rounded outline-none" name="message" rows="4" placeholder="Your Message" required />
              <button className="w-full bg-red-600 text-white py-3 font-bold uppercase rounded hover:bg-black transition-all">Submit Inquiry</button>
            </form>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default ForRent;