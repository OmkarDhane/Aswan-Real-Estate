import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTimes } from "react-icons/fa";
import Footer from "../components/Footer";

const API_URL = "https://aswan-real-estate-3.onrender.com";

const PropertyInfoSale = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const [propPrice, setPropPrice] = useState(0);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [durationYears, setDurationYears] = useState(25);
  const [interestRate, setInterestRate] = useState(3.59);

  const loanAmount = propPrice - (propPrice * (downPaymentPct / 100));
  const monthlyInterest = interestRate / 100 / 12;
  const numberOfPayments = durationYears * 12;
  const monthlyPayment = 
    (loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, numberOfPayments)) / 
    (Math.pow(1 + monthlyInterest, numberOfPayments) - 1) || 0;

  useEffect(() => {
    fetchProperty();
    fetchAllProperties();
    window.scrollTo(0, 0);
  }, [id]);

  const fetchProperty = async () => {
    try {
      const res = await fetch(`${API_URL}/api/properties?filters[documentId][$eq]=${id}&populate=*`);
      const json = await res.json();
      if (json.data && json.data.length > 0) {
        setProperty(json.data[0]);
        setPropPrice(json.data[0].price || 0);
      }
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  const fetchAllProperties = async () => {
    try {
      const res = await fetch(`${API_URL}/api/properties?filters[category][$eq]=sale&populate=*`);
      const json = await res.json();
      setAllProperties(json.data || []);
    } catch (err) { console.error(err); }
  };

  
  const getImageUrl = (img) => {
    if (!img) return "https://via.placeholder.com/1200x800?text=No+Image";
    
    
    const url = img.formats?.large?.url || img.formats?.medium?.url || img.url;
    
    return url.startsWith('http') ? url : `${API_URL}${url}`;
  };

  if (loading) return <div className="text-center py-20 font-[Poppins]">Loading...</div>;
  if (!property) return <div className="text-center py-20 text-red-600 font-[Poppins]">Property not found</div>;

  const fullDescriptionText = Array.isArray(property.description)
    ? property.description
        .map((block) => (block.children?.map((child) => child.text).join("") || "").trim())
        .filter(text => {
            const clean = text.toLowerCase();
            return clean !== "" && !clean.includes("drag");
        })
        .join("\n")
    : typeof property.description === "string" 
      ? property.description.replace(/drag/gi, "").trim() 
      : "";

  const similarProperties = allProperties
    .filter((p) => p.documentId !== property.documentId)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        
        <div className="text-sm text-gray-500 mb-6 uppercase tracking-wider">
          <Link to="/" className="hover:text-red-600">Home</Link> &gt;
          <Link to="/for-sale" className="hover:text-red-600 mx-1">For Sale</Link>
          &gt; <span className="text-gray-800 ml-1">{property.title}</span>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative cursor-pointer group overflow-hidden rounded-lg" onClick={() => setSelectedImage(getImageUrl(property.images?.[0]))}>
            <img src={getImageUrl(property.images?.[0])} className="w-full h-[300px] md:h-[550px] object-cover rounded-lg shadow-sm group-hover:scale-105 transition-all duration-700" alt="Main" />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/80 px-4 py-2 rounded text-xs font-bold uppercase tracking-widest">View Full Image</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {property.images?.slice(1, 5).map((img, i) => (
              <img 
                key={i} 
                src={getImageUrl(img)} 
                className="w-full h-[145px] md:h-[268px] object-cover rounded-lg shadow-sm cursor-pointer hover:opacity-90 transition-all border border-gray-100" 
                alt="Gallery" 
                onClick={() => setSelectedImage(getImageUrl(img))}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold uppercase">{property.title}</h1>
          <div className="flex gap-3">
            <button onClick={() => setShowCallPopup(true)} className="px-6 py-2 border border-black flex items-center gap-2 hover:bg-black hover:text-white transition-all uppercase text-sm font-bold"><FaPhoneAlt /> Call</button>
            <button onClick={() => setShowEmailPopup(true)} className="px-6 py-2 border border-black flex items-center gap-2 hover:bg-black hover:text-white transition-all uppercase text-sm font-bold"><FaEnvelope /> Email</button>
            <a href="https://wa.me/97143069999" target="_blank" rel="noreferrer" className="px-6 py-2 border border-green-600 text-green-600 flex items-center gap-2 hover:bg-green-600 hover:text-white transition-all uppercase text-sm font-bold"><FaWhatsapp /> WhatsApp</a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 mb-12 py-8 border-y border-gray-100 bg-gray-50/50 rounded-lg px-4">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-[2px]">Price</p>
            <p className="text-red-600 font-bold text-xl md:text-2xl">AED {property.price?.toLocaleString()}</p>
          </div>
          <div className="flex flex-col gap-1 border-l-0 md:border-l border-gray-200 md:pl-8">
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-[2px]">Location</p>
            <p className="font-medium uppercase text-sm md:text-base text-gray-800 leading-tight">{property.location}</p>
          </div>
          <div className="flex flex-col gap-1 border-l-0 md:border-l border-gray-200 md:pl-8">
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-[2px]">Bedrooms</p>
            <p className="font-medium text-sm md:text-base text-gray-800">{property.beds} BHK</p>
          </div>
          <div className="flex flex-col gap-1 border-l-0 md:border-l border-gray-200 md:pl-8">
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-[2px]">Area</p>
            <p className="font-medium uppercase text-sm md:text-base text-gray-800">{property.area}</p>
          </div>
          <div className="flex flex-col gap-1 border-l-0 md:border-l border-gray-200 md:pl-8">
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-[2px]">Property Type</p>
            <p className="font-bold uppercase text-xs md:text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">{property.category || "Property"}</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">Description</h2>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed italic">
            {fullDescriptionText}
          </p>
        </div>

        {property.map && (
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase">Property Location</h2>
            <div className="w-full h-[300px] md:h-[450px] bg-gray-100 overflow-hidden border border-gray-200">
              <iframe title="Map" src={property.map} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        )}

        {/* Mortgage Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 border-t pt-16">
          <div className="bg-white">
            <h2 className="text-3xl font-light text-gray-800 mb-8">Calculate your Mortgage</h2>
            <div className="space-y-10">
              <div>
                <label className="text-gray-400 text-xs uppercase font-bold mb-2 block tracking-widest">Property Price:</label>
                <div className="relative border-b border-gray-800 pb-2 flex justify-between items-center">
                  <input type="number" value={propPrice} onChange={(e) => setPropPrice(Number(e.target.value))} className="text-xl outline-none w-full font-medium" />
                  <span className="text-gray-600 font-bold">AED</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-4">
                  <span className="text-gray-400 uppercase tracking-widest">Down Payment:</span>
                  <span className="text-gray-800">{(propPrice * (downPaymentPct/100)).toLocaleString()} AED</span>
                </div>
                <input type="range" min="5" max="80" value={downPaymentPct} onChange={(e) => setDownPaymentPct(e.target.value)} className="w-full accent-gray-800 h-1 bg-gray-200 appearance-none cursor-pointer" />
                <div className="text-right mt-2 text-gray-800 font-bold">{downPaymentPct} %</div>
              </div>
              <div>
                <span className="text-gray-400 text-xs uppercase font-bold mb-4 block tracking-widest">Duration:</span>
                <input type="range" min="1" max="30" value={durationYears} onChange={(e) => setDurationYears(e.target.value)} className="w-full accent-gray-800 h-1 bg-gray-200 appearance-none cursor-pointer" />
                <div className="text-right mt-2 text-gray-800 font-bold">{durationYears} Years</div>
              </div>
              <div className="pt-6">
                <p className="text-gray-400 text-xs uppercase font-bold mb-1 tracking-widest">Monthly Payment:</p>
                <p className="text-red-600 text-5xl font-medium tracking-tighter">AED {monthlyPayment.toLocaleString(undefined, {maximumFractionDigits:0})}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f9f9] p-10 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-[2px]">Inquire Now</h2>
            <form action="https://formspree.io/f/xdkqzdbk" method="POST" className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property Location</label>
                  <input className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-red-600 font-bold uppercase text-sm" name="location" value={property.location || ""} readOnly />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Category</label>
                  <input className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-red-600 font-bold uppercase text-sm" name="category" value={property.category || "Sale"} readOnly />
                </div>
              </div>
              <input className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-red-600" name="name" placeholder="FULL NAME *" required />
              <input className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-red-600" type="email" name="email" placeholder="EMAIL ADDRESS *" required />
              <input className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-red-600" name="phone" placeholder="PHONE NUMBER *" required />
              <textarea 
                className="w-full border-b border-gray-300 bg-transparent py-3 outline-none focus:border-red-600 resize-none" 
                rows="3" name="message" 
                defaultValue={`I am interested in ${property.title} for Sale.`}
                required 
              />
              <button className="w-full bg-black text-white py-5 font-bold uppercase hover:bg-red-600 transition-all tracking-[3px] mt-4 text-sm">Send Inquiry</button>
            </form>
          </div>
        </div>

        {similarProperties.length > 0 && (
          <div className="mb-10 border-t pt-10">
            <h2 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-tight">Similar Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProperties.map((p) => (
                <Link key={p.documentId} to={`/property-info-sale/${p.documentId}`} className="bg-white border border-gray-100 group transition-all hover:shadow-lg rounded-lg overflow-hidden">
                  <div className="overflow-hidden h-48">
                    <img src={getImageUrl(p.images?.[0])} className="h-full w-full object-cover group-hover:scale-110 transition-all duration-700" alt={p.title} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold uppercase text-[10px] truncate tracking-wider text-gray-800">{p.title}</h3>
                    <p className="text-red-600 font-bold mt-1 text-sm">AED {p.price?.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
      <Footer />
      
      {/* FULL SCREEN IMAGE LIGHTBOX */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out" 
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-red-600 transition-colors">
            <FaTimes size={30}/>
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-[92vh] object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300" 
            alt="Preview" 
          />
        </div>
      )}

      {/* Popups */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-8 relative shadow-2xl border-t-4 border-red-600">
            <button onClick={() => setShowEmailPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"><FaTimes size={20}/></button>
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-widest">Email Inquiry</h2>
            <form action="https://formspree.io/f/xdkqzdbk" method="POST" className="space-y-5">
              <input className="w-full border-b p-3 outline-none focus:border-red-600 uppercase text-sm" name="name" placeholder="Your Name" required />
              <input className="w-full border-b p-3 outline-none focus:border-red-600 uppercase text-sm" type="email" name="email" placeholder="Your Email" required />
              <textarea className="w-full border-b p-3 outline-none focus:border-red-600 uppercase text-sm" name="message" rows="4" defaultValue={`Requesting info for: ${property.title}`} required />
              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-red-600 transition-all">Submit</button>
            </form>
          </div>
        </div>
      )}

      {showCallPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-xs p-10 text-center relative shadow-2xl border-b-4 border-red-600">
            <button onClick={() => setShowCallPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><FaTimes /></button>
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <FaPhoneAlt className="text-red-600 text-2xl" />
            </div>
            <h2 className="text-xl font-bold mb-2 uppercase tracking-widest">Call Now</h2>
            <p className="text-gray-500 mb-8 font-medium tracking-tight">+971 4 306 9999</p>
            <a href="tel:+97143069999" className="inline-block w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-red-600 transition-all">Call Now</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyInfoSale;