import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Footer from "../components/Footer";

const PropertyInfoSale = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  // Mortgage (UNCHANGED)
  const [price, setPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(20);
  const [years, setYears] = useState(20);
  const [interest, setInterest] = useState(3.5);

  const mortgage =
    (price - price * (downPayment / 100)) *
      (interest / 100 / 12) *
      Math.pow(1 + interest / 100 / 12, years * 12) /
      (Math.pow(1 + interest / 100 / 12, years * 12) - 1) || 0;

  useEffect(() => {
    fetchProperty();
    fetchAllProperties();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/properties/sale/${id}`);
      const data = await res.json();
      setProperty(data);
      setPrice(data.price);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllProperties = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/properties/sale");
      const data = await res.json();
      setAllProperties(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!property) return <div className="text-center py-20">Property not found</div>;

  const similarProperties = allProperties
    .filter(
      (p) =>
        p._id !== property._id &&
        (p.location === property.location || p.type === property.type)
    )
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-[#f5f6f1] font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-red-600">Home</Link> &gt;
          <Link to="/for-sale" className="hover:text-red-600 mx-1">For Sale</Link>
          &gt; <span className="text-gray-800 ml-1">{property.title}</span>
        </div>

        {/* IMAGE GALLERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="md:col-span-2 relative">
            <img
              src={property.images[0]}
              className="w-full h-[260px] md:h-[500px] object-cover"
            />
            <div className="absolute top-3 left-3 bg-white px-3 py-1 text-sm">
              📷 {property.images.length}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {property.images.slice(1, 5).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-[120px] md:h-[240px] object-cover"
              />
            ))}
          </div>
        </div>

        {/* TITLE + CONTACT BUTTONS (FIXED) */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold md:max-w-[70%]">
            {property.title}
          </h1>

          <div className="flex gap-3 flex-wrap md:flex-nowrap md:flex-shrink-0">
            <button
              onClick={() => setShowCallPopup(true)}
              className="px-4 py-2 border flex items-center gap-2 hover:bg-red-600 hover:text-white"
            >
              <FaPhoneAlt /> Call
            </button>

            <button
              onClick={() => setShowEmailPopup(true)}
              className="px-4 py-2 border flex items-center gap-2 hover:bg-red-600 hover:text-white"
            >
              <FaEnvelope /> Email
            </button>

            <a
              href="https://wa.me/911234567890"
              target="_blank"
              className="px-4 py-2 border flex items-center gap-2 hover:bg-red-600 hover:text-white"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>

        {/* PROPERTY DETAILS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          <div>
            <p className="font-semibold">Price</p>
            <p className="text-red-600 font-bold">
              AED {property.price.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p>{property.location}</p>
          </div>
          <div>
            <p className="font-semibold">Bedrooms</p>
            <p>{property.beds}</p>
          </div>
          <div>
            <p className="font-semibold">Size</p>
            <p>{property.area}</p>
          </div>
        </div>

        {/* DESCRIPTION */}
        <h2 className="text-xl md:text-2xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 mb-10 whitespace-pre-line">
          {property.description}
        </p>

        {/* CALCULATOR + FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">

          {/* CALCULATOR (UNCHANGED) */}
          <div>
            <h2 className="text-2xl mb-6 font-semibold">Calculate Your Mortgage</h2>

            <label>Property Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
              className="w-full border px-4 py-2 mb-4"
            />

            <label>Down Payment ({downPayment}%)</label>
            <input
              type="range"
              min="0"
              max="90"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full my-2"
            />
            <p className="text-gray-600 mb-4">
              AED {(price * downPayment) / 100}
            </p>

            <label>Duration: {years} Years</label>
            <input
              type="range"
              min="1"
              max="30"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full my-2"
            />

            <label>Interest Rate</label>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full border px-4 py-2 mb-4"
            />

            <p className="text-gray-600">Monthly Payment</p>
            <p className="text-red-600 text-3xl font-bold">
              AED {mortgage.toFixed(0)}
            </p>
          </div>

          {/* CONTACT FORM */}
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Request More Details</h2>
            <form
              action="https://formspree.io/f/xdkqzdbk"
              method="POST"
              className="space-y-4"
            >
              <input className="w-full border px-4 py-3" name="name" placeholder="Name" required />
              <input className="w-full border px-4 py-3" name="email" type="email" placeholder="Email" required />
              <input className="w-full border px-4 py-3" name="phone" placeholder="Phone" required />
              <textarea className="w-full border px-4 py-3" rows="4" name="message" placeholder="Message" required />
              <button className="w-full bg-red-600 text-white py-3 hover:bg-white hover:text-red-600 border transition">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* SIMILAR PROPERTIES */}
        {similarProperties.length > 0 && (
          <>
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              Similar Properties
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {similarProperties.map((p) => (
                <Link
                  key={p._id}
                  to={`/property-info-sale/${p._id}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
                >
                  <img src={p.images[0]} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-red-600 font-bold">
                      AED {p.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PropertyInfoSale;
