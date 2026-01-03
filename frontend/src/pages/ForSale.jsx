import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

// Render Live API URL
const API_URL = "https://aswan-real-estate-3.onrender.com";

const getUniqueValues = (items, key) => {
  const values = items
    .map((item) => item[key])
    .filter((val) => val && val !== "");
  return ["All", ...Array.from(new Set(values))];
};

const ForSale = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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
      // Strapi 5 साठी filters आणि populate वापरून डेटा मिळवणे
      const res = await fetch(
        `${API_URL}/api/properties?filters[type][$eq]=For Sale&populate=*`
      );
      const json = await res.json();
      const data = json.data || [];
      setProperties(data);
      
      setAreas(getUniqueValues(data, "area"));
      setTypes(getUniqueValues(data, "category")); // Strapi मध्ये category नाव असेल तर
      setBedsList(getUniqueValues(data, "beds"));
      
    } catch (err) {
      console.error("Error fetching properties:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProperties = properties.filter((property) => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search")?.toLowerCase() || "";

    const matchSearch =
      searchTerm === "" ||
      property.title?.toLowerCase().includes(searchTerm) ||
      property.location?.toLowerCase().includes(searchTerm) ||
      property.area?.toLowerCase().includes(searchTerm);

    const matchArea = filters.area === "All" || property.area === filters.area || property.location === filters.area;
    const matchType = filters.type === "All" || property.category === filters.type;
    const matchMinPrice = !filters.minPrice || property.price >= Number(filters.minPrice);
    const matchMaxPrice = !filters.maxPrice || property.price <= Number(filters.maxPrice);
    const matchMinBeds = filters.minBeds === "All" || property.beds >= Number(filters.minBeds);

    return matchSearch && matchArea && matchType && matchMinPrice && matchMaxPrice && matchMinBeds;
  });

  if (loading) return <div className="text-center py-20 font-[Poppins]">Loading properties...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl mb-6 font-semibold">
          Properties for Sale
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <select name="area" value={filters.area} onChange={handleFilterChange} className="border rounded px-3 py-2 outline-none focus:border-red-600">
            {areas.map((a) => <option key={a} value={a}>{a === "All" ? "All Areas" : a}</option>)}
          </select>
          <select name="type" value={filters.type} onChange={handleFilterChange} className="border rounded px-3 py-2 outline-none focus:border-red-600">
            {types.map((t) => <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>)}
          </select>
          <input type="number" name="minPrice" placeholder="Min Price" value={filters.minPrice} onChange={handleFilterChange} className="border rounded px-3 py-2 outline-none" />
          <input type="number" name="maxPrice" placeholder="Max Price" value={filters.maxPrice} onChange={handleFilterChange} className="border rounded px-3 py-2 outline-none" />
          <select name="minBeds" value={filters.minBeds} onChange={handleFilterChange} className="border rounded px-3 py-2 outline-none focus:border-red-600">
            {bedsList.sort().map((b) => (
              <option key={b} value={b}>{b === "All" ? "All Beds" : `${b} Beds`}</option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => {
              // Cloudinary Image URL logic
              const rawImageUrl = property.images?.[0]?.url;
              const mainImage = rawImageUrl 
                ? (rawImageUrl.startsWith('http') ? rawImageUrl : `${API_URL}${rawImageUrl}`)
                : "https://via.placeholder.com/400x300?text=No+Image";
              
              // Strapi 5 Blocks Description logic
              const descriptionText = property.description?.[0]?.children?.[0]?.text || "No description available.";

              return (
                <div key={property.documentId} className="bg-white rounded-lg shadow flex flex-col sm:flex-row overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                  <Link to={`/property-info-sale/${property.documentId}`} className="w-full sm:w-1/2">
                    <img src={mainImage} alt={property.title} className="h-64 sm:h-80 w-full object-cover" />
                  </Link>

                  <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <Link to={`/property-info-sale/${property.documentId}`}>
                        <h3 className="text-2xl mb-2 hover:text-red-600 uppercase font-medium tracking-tight">{property.title}</h3>
                      </Link>
                      <p className="text-red-600 text-xl mb-2 font-bold">AED {property.price?.toLocaleString()}</p>
                      <p className="text-gray-700 mb-2 line-clamp-2 text-sm">{descriptionText}</p>
                      <div className="text-gray-500 text-sm">
                        <p className="font-semibold">{property.beds} Beds | {property.category || property.type}</p>
                        <p className="uppercase mt-1">{property.area} | {property.location}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <button onClick={() => setShowCallPopup(true)} className="flex items-center gap-2 border px-6 py-2 rounded text-sm hover:bg-red-600 hover:text-white transition-all font-medium"><FaPhone /> Call</button>
                      <button onClick={() => { setShowEmailPopup(true); setSelectedProp(property.title); }} className="flex items-center gap-2 border px-6 py-2 rounded text-sm hover:bg-red-600 hover:text-white transition-all font-medium"><FaEnvelope /> Email</button>
                      <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer" className="flex items-center gap-2 border px-6 py-2 rounded text-sm hover:bg-green-600 hover:text-white transition-all font-medium"><FaWhatsapp /> WhatsApp</a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-20 text-gray-500 bg-white rounded-lg border">No properties found matching your criteria.</div>
          )}
        </div>
      </div>

      {/* Popups */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-xs p-8 text-center relative rounded shadow-xl">
            <button onClick={() => setShowCallPopup(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"><FaTimes /></button>
            <FaPhone className="text-red-600 text-4xl mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2 uppercase">Contact Us</h2>
            <p className="text-gray-600 mb-6 font-semibold">+91 123 456 7890</p>
            <a href="tel:+911234567890" className="inline-block w-full bg-red-600 text-white py-3 font-bold rounded uppercase hover:bg-black transition-colors">Call Now</a>
          </div>
        </div>
      )}

      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md p-6 rounded relative shadow-xl">
            <button onClick={() => setShowEmailPopup(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors"><FaTimes /></button>
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

export default ForSale;