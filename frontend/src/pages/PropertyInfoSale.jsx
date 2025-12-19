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

  // Mortgage
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
      const response = await fetch(
        `http://localhost:3000/api/properties/sale/${id}`
      );
      if (response.ok) {
        const data = await response.json();
        setProperty({ ...data, status: "For Sale" });
        setPrice(data.price);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllProperties = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/properties/sale");
      const data = await response.json();
      setAllProperties(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!property) return <div className="text-center py-20">Property not found</div>;

  // SIMILAR PROPERTIES LOGIC
  const similarProperties = allProperties
    .filter(
      (p) =>
        p._id !== property._id &&
        (p.location === property.location || p.type === property.type)
    )
    .slice(0, 4); // show max 4 similar properties

  return (
    <div className="min-h-screen bg-[#f5f6f1] py-12 font-[Poppins]">
      <div className="max-w-7xl mx-auto px-6">
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
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute top-3 left-3 bg-white px-3 py-1 flex items-center gap-2 text-sm">
              📷 {property.images.length}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1, 5).map((img, i) => (
              <img
                key={i}
                src={img}
                className="w-full h-[240px] object-cover"
              />
            ))}
          </div>
        </div>

        {/* TITLE + CONTACT BUTTONS */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-semibold">{property.title}</h1>
          </div>

          <div className="flex gap-3">
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
        <div className="grid grid-cols-4 gap-6 text-gray-800 mb-10">
          <div className="flex flex-col">
            <span className="font-semibold text-2xl">Price:</span> 
            <span className="text-red-600 font-bold text-1xl mt-1">AED {property.price.toLocaleString()}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-2xl">Location:</span>
            <span className="text-1xl mt-1">{property.location}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-2xl">Bedrooms:</span>
            <span className="text-1xl mt-1">{property.beds}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-semibold text-2xl">Size:</span>
            <span className="text-1xl mt-1">{property.area}</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-gray-700 mb-10 whitespace-pre-line">{property.description}</p>

        {/* AMENITIES */}
        {property.amenities?.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {property.amenities.map((item, idx) => (
                <p key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                  {item}
                </p>
              ))}
            </div>
          </>
        )}

        {/* MAP */}
        {property.googleMapLink && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Location</h2>
            <div className="w-full h-96 mb-20">
              <iframe
                src={property.googleMapLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </>
        )}

        {/* CALCULATOR + CONTACT FORM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* CALCULATOR */}
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
            <p className="text-gray-600 mb-4">AED {(price * downPayment) / 100}</p>

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
            <p className="text-red-600 text-3xl font-bold">AED {mortgage.toFixed(0)}</p>
          </div>

          {/* CONTACT FORM - RIGHT */}
          <div>
            <h2 className="text-2xl mb-4 font-semibold">Request More Details</h2>
            <form 
  action="https://formspree.io/f/xdkqzdbk" 
  method="POST" 
  className="space-y-4"
>
  <input 
    className="w-full border px-4 py-3" 
    type="text" 
    name="name"
    placeholder="Your Name" 
    required
  />

  <input 
    className="w-full border px-4 py-3" 
    type="email" 
    name="email"
    placeholder="Email Address" 
    required
  />

  <input 
    className="w-full border px-4 py-3" 
    type="text" 
    name="phone"
    placeholder="Phone Number" 
    required
  />

  <textarea 
    className="w-full border px-4 py-3" 
    rows="4" 
    name="message"
    placeholder="Message"
    required
  ></textarea>

  <button 
    className="w-full bg-red-600 text-white py-3 hover:bg-white hover:text-red-600 border transition"
    type="submit"
  >
    Send Message
  </button>
</form>

          </div>
        </div>


        {/* SIMILAR PROPERTIES */}
        {similarProperties.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-6">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {similarProperties.map((p) => (
                <Link
                  key={p._id}
                  to={`/property-info-sale/${p._id}`}
                  className="block bg-white rounded-lg shadow hover:shadow-lg overflow-hidden"
                >
                  <img src={p.images[0]} alt={p.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-red-600 font-bold">AED {p.price.toLocaleString()}</p>
                    <p className="text-gray-600">{p.beds} beds • {p.area}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CALL & EMAIL POPUPS */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-96 bg-white p-6 text-center">
            <h2 className="text-xl mb-4">Call Us</h2>
            <p className="text-gray-700 text-lg">📞 +91 12345 67890</p>
            <button
              onClick={() => setShowCallPopup(false)}
              className="mt-6 bg-gray-200 px-6 py-2 hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showEmailPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="w-[450px] bg-white p-6">
            <h2 className="text-xl mb-4 text-center">Send Email</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border px-4 py-2" />
              <input type="email" placeholder="Email Address" className="w-full border px-4 py-2" />
              <textarea placeholder="Message" className="w-full border px-4 py-2 h-32"></textarea>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-700">
                Send Message
              </button>
            </form>
            <button
              onClick={() => setShowEmailPopup(false)}
              className="w-full mt-3 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PropertyInfoSale;
