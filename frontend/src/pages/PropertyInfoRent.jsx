import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer";

const API_URL = "http://localhost:1337";

const PropertyInfoRent = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  // Mortgage/Calculator state
  const [price, setPrice] = useState(0);
  const [downPayment, setDownPayment] = useState(20);
  const [years, setYears] = useState(1);
  const [interest, setInterest] = useState(3.5);

  const mortgage =
    (price - price * (downPayment / 100)) *
      (interest / 100 / 12) *
      Math.pow(1 + interest / 100 / 12, years * 12) /
      (Math.pow(1 + interest / 100 / 12, years * 12) - 1) || 0;

  useEffect(() => {
    fetchProperty();
    fetchAllProperties();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchProperty = async () => {
    try {
      const res = await fetch(`${API_URL}/api/properties/${id}?populate=*`);
      const json = await res.json();
      if (json.data) {
        setProperty(json.data);
        setPrice(json.data.price || 0);
      }
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const fetchAllProperties = async () => {
    try {
      const res = await fetch(`${API_URL}/api/properties?filters[category][$eq]=rent&populate=*`);
      const json = await res.json();
      setAllProperties(json.data || []);
    } catch (err) { console.error(err); }
  };

  if (loading) return <div className="text-center py-20 font-[Poppins]">Loading...</div>;
  if (!property) return <div className="text-center py-20 text-red-600 font-[Poppins]">Property not found</div>;

  const fullDescriptionText = property.description
    ?.map((block) => block.children?.map((child) => child.text).join(""))
    .filter(text => text && text.trim() !== "")
    .join("\n") 
    .trim();

  const similarProperties = allProperties
    .filter((p) => p.documentId !== property.documentId)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f5f6f1] font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 uppercase">
          <Link to="/" className="hover:text-red-600">Home</Link> &gt;
          <Link to="/for-rent" className="hover:text-red-600 mx-1">For Rent</Link>
          &gt; <span className="text-gray-800 ml-1">{property.title}</span>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <img src={property.images?.[0]?.url ? `${API_URL}${property.images[0].url}` : ""} className="w-full h-[260px] md:h-[500px] object-cover" alt="Main" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {property.images?.slice(1, 5).map((img, i) => (
              <img key={i} src={`${API_URL}${img.url}`} className="w-full h-[120px] md:h-[240px] object-cover" alt="Gallery" />
            ))}
          </div>
        </div>

        {/* Title + Buttons */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold uppercase">{property.title}</h1>
          <div className="flex gap-3">
            <button onClick={() => setShowCallPopup(true)} className="px-4 py-2 border flex items-center gap-2 hover:bg-red-600 hover:text-white transition-all"><FaPhoneAlt /> Call</button>
            <button onClick={() => setShowEmailPopup(true)} className="px-4 py-2 border flex items-center gap-2 hover:bg-red-600 hover:text-white transition-all"><FaEnvelope /> Email</button>
            <a href="https://wa.me/911234567890" target="_blank" className="px-4 py-2 border flex items-center gap-2 hover:bg-red-600 hover:text-white transition-all"><FaWhatsapp /> WhatsApp</a>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 border-b border-gray-200 pb-8">
          <div><p className="font-bold text-gray-800 uppercase text-xs">Rent</p><p className="text-red-600 font-bold text-xl">AED {property.price?.toLocaleString()} <span className="text-sm font-normal text-gray-400">/ Year</span></p></div>
          <div><p className="font-bold text-gray-800 uppercase text-xs">Location</p><p className="font-medium">{property.location}</p></div>
          <div><p className="font-bold text-gray-800 uppercase text-xs">Bedrooms</p><p className="font-medium">{property.beds}</p></div>
          <div><p className="font-bold text-gray-800 uppercase text-xs">Area</p><p className="font-medium">{property.area}</p></div>
        </div>

        {/* Description */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-3 uppercase">Description</h2>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {fullDescriptionText}
          </p>
        </div>

        {/* 🔹 Updated Google Map Section (Rent) 🔹 */}
        {property.googleMapLink && (
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase">Location Map</h2>
            <div className="w-full h-[300px] md:h-[450px] bg-gray-200 rounded-sm overflow-hidden border border-gray-300 shadow-sm">
              <iframe
                title="Google Map Rent"
                src={property.googleMapLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}

        {/* Mortgage & Inquiry Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Mortgage Calculator */}
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h2 className="text-2xl mb-6 font-bold uppercase border-b pb-2">Mortgage Calculator</h2>
            <div className="space-y-5">
              <div>
                <label className="text-sm font-bold text-gray-600 block mb-1">Property Price (AED)</label>
                <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full border px-4 py-2 outline-none focus:border-red-600" />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-600 block mb-1">Down Payment ({downPayment}%)</label>
                <input type="range" min="0" max="90" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} className="w-full accent-red-600" />
              </div>
              <div>
                <label className="text-sm font-bold text-gray-600 block mb-1">Duration: {years} Years</label>
                <input type="range" min="1" max="30" value={years} onChange={(e) => setYears(e.target.value)} className="w-full accent-red-600" />
              </div>
              <div className="pt-4 border-t">
                <p className="text-gray-500 text-xs uppercase font-bold">Estimated Monthly Payment</p>
                <p className="text-red-600 text-4xl font-bold">AED {mortgage.toFixed(0)}</p>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-8 border border-gray-200 shadow-sm rounded-sm">
            <h2 className="text-2xl mb-6 font-bold uppercase border-b pb-2">Inquire Now</h2>
            <form action="https://formspree.io/f/xdkqzdbk" method="POST" className="space-y-4">
              <input className="w-full border px-4 py-3 outline-none focus:border-red-600" name="name" placeholder="Full Name" required />
              <input className="w-full border px-4 py-3 outline-none focus:border-red-600" type="email" name="email" placeholder="Email Address" required />
              <textarea className="w-full border px-4 py-3 outline-none focus:border-red-600" rows="4" name="message" placeholder="I'm interested in this property..." required />
              <button className="w-full bg-red-600 text-white py-4 font-bold uppercase hover:bg-black transition-all">Send Message</button>
            </form>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mb-10 border-t pt-10">
            <h2 className="text-xl md:text-2xl font-bold mb-8 uppercase">Similar Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProperties.map((p) => (
                <Link key={p.documentId} to={`/property-info-rent/${p.documentId}`} className="bg-white shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100">
                  <img src={p.images?.[0]?.url ? `${API_URL}${p.images[0].url}` : ""} className="h-48 w-full object-cover" alt={p.title} />
                  <div className="p-4">
                    <h3 className="font-bold uppercase text-sm line-clamp-1">{p.title}</h3>
                    <p className="text-red-600 font-bold mt-1">AED {p.price?.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Popups */}
        {showEmailPopup && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-md p-6 rounded relative shadow-xl">
              <button onClick={() => setShowEmailPopup(false)} className="absolute top-4 right-4 text-gray-500"><FaTimes /></button>
              <h2 className="text-xl font-bold mb-4 uppercase">Email Inquiry</h2>
              <form action="https://formspree.io/f/xdkqzdbk" method="POST" className="space-y-4">
                <input className="w-full border p-3" name="name" placeholder="Full Name" required />
                <input className="w-full border p-3" type="email" name="email" placeholder="Email" required />
                <textarea className="w-full border p-3" name="message" rows="4" defaultValue={`Inquiry about ${property.title}`} required />
                <button className="w-full bg-red-600 text-white py-3 font-bold uppercase">Submit</button>
              </form>
            </div>
          </div>
        )}

        {showCallPopup && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-xs p-8 text-center relative shadow-xl">
              <button onClick={() => setShowCallPopup(false)} className="absolute top-4 right-4 text-gray-500"><FaTimes /></button>
              <FaPhoneAlt className="text-red-600 text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Contact Number</h2>
              <p className="text-gray-600 mb-6 font-semibold">+91 123 456 7890</p>
              <a href="tel:+911234567890" className="inline-block w-full bg-red-600 text-white py-3 font-bold uppercase">Call Now</a>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default PropertyInfoRent;