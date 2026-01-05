import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaTimes, FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";

const API_URL = "https://aswan-real-estate-3.onrender.com";

const PropertyInfoRent = () => {
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
      const res = await fetch(`${API_URL}/api/properties?populate=*`);
      const json = await res.json();
      setAllProperties(json.data || []);
    } catch (err) { console.error(err); }
  };

  // --- १. HD IMAGE FUNCTION (Force Cloudinary to send high quality) ---
  const getImageUrl = (img) => {
    if (!img) return "https://via.placeholder.com/1200x800?text=No+Image";
    
    // मूळ URL शोधा
    let url = img.formats?.large?.url || img.formats?.medium?.url || img.url;

    // जर इमेज Cloudinary वर असेल, तर त्याचे क्वालिटी पॅरामीटर्स बदला
    if (url.includes("cloudinary.com")) {
        // q_auto:best आणि f_auto मुळे इमेजची क्लॅरिटी वाढते
        url = url.replace("/upload/", "/upload/q_auto:best,f_auto,w_1200/");
    } else {
        url = url.startsWith('http') ? url : `${API_URL}${url}`;
    }
    return url;
  };

  if (loading) return <div className="text-center py-20 font-[Poppins]">Loading...</div>;
  if (!property) return <div className="text-center py-20 text-red-600 font-[Poppins]">Property not found</div>;

  const fullDescriptionText = Array.isArray(property.description)
    ? property.description.map(block => block.children?.map(child => child.text).join("")).join("\n")
    : typeof property.description === "string" 
    ? property.description 
    : "No description available.";

  const getAmenitiesList = () => {
    const data = property.amenties || property.amenities; 
    if (!data) return [];
    if (typeof data === "string") return data.split(",").filter(item => item.trim() !== "");
    if (Array.isArray(data)) {
      return data.map(block => block.children?.map(child => child.text).join("")).join(",").split(",").filter(item => item.trim() !== "");
    }
    return [];
  };

  const amenitiesArray = getAmenitiesList();
  const similarProperties = allProperties.filter((p) => p.documentId !== property.documentId).slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
        
        <div className="text-sm text-gray-500 mb-6 uppercase tracking-wider">
          <Link to="/" className="hover:text-red-600">Home</Link> &gt;
          <Link to="/for-rent" className="hover:text-red-600 mx-1">For Rent</Link>
          &gt; <span className="text-gray-800 ml-1">{property.title}</span>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 relative cursor-pointer group overflow-hidden rounded-lg shadow-md" onClick={() => setSelectedImage(getImageUrl(property.images?.[0]))}>
            <img src={getImageUrl(property.images?.[0])} className="w-full h-[300px] md:h-[550px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-700" alt="Main" />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white/90 px-4 py-2 rounded text-xs font-bold uppercase">View High Res</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {property.images?.slice(1, 5).map((img, i) => (
              <img 
                key={i} 
                src={getImageUrl(img)} 
                className="w-full h-[145px] md:h-[268px] object-cover rounded-lg cursor-pointer hover:opacity-90 transition-all border border-gray-100 shadow-sm" 
                alt="Gallery" 
                onClick={() => setSelectedImage(getImageUrl(img))}
              />
            ))}
          </div>
        </div>

        {/* Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <h1 className="text-2xl md:text-3xl font-semibold uppercase">{property.title}</h1>
          <div className="flex gap-3">
            <button onClick={() => setShowCallPopup(true)} className="px-6 py-2 border border-black font-bold text-sm uppercase flex items-center gap-2 hover:bg-black hover:text-white transition-all"><FaPhoneAlt /> Call</button>
            <button onClick={() => setShowEmailPopup(true)} className="px-6 py-2 border border-black font-bold text-sm uppercase flex items-center gap-2 hover:bg-black hover:text-white transition-all"><FaEnvelope /> Email</button>
            <a href="https://wa.me/97143069999" target="_blank" rel="noreferrer" className="px-6 py-2 border border-green-600 text-green-600 font-bold text-sm uppercase flex items-center gap-2 hover:bg-green-600 hover:text-white transition-all"><FaWhatsapp /> WhatsApp</a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 mb-12 py-8 border-y border-gray-100 bg-gray-50/50 rounded-lg px-4">
          <div className="flex flex-col gap-1">
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-[2px]">Rent Price</p>
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
            <p className="font-bold text-gray-400 uppercase text-[10px] tracking-[2px]">Category</p>
            <p className="font-bold uppercase text-xs md:text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">{property.category || "Rent"}</p>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">Description</h2>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed italic">{fullDescriptionText}</p>
        </div>

        {/* Amenities Section */}
        {amenitiesArray.length > 0 && (
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase">Key Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {amenitiesArray.map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 border border-gray-100 shadow-sm hover:border-red-200 transition-colors">
                  <FaCheckCircle className="text-red-600 text-sm" />
                  <span className="text-xs md:text-sm font-medium uppercase text-gray-700">{item.trim()}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map Section */}
        {property.map && (
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase">Property Location</h2>
            <div className="w-full h-[300px] md:h-[450px] bg-gray-100 overflow-hidden border border-gray-200 shadow-inner">
              <iframe title="map" src={property.map} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        )}

        {/* Calculator & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 border-t pt-16">
          <div className="bg-white">
            <h2 className="text-3xl font-light text-gray-800 mb-8">Mortgage Calculator</h2>
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
                <input type="range" min="5" max="80" value={downPaymentPct} onChange={(e) => setDownPaymentPct(e.target.value)} className="w-full accent-black h-1 bg-gray-200 appearance-none cursor-pointer" />
                <div className="text-right mt-2 text-gray-800 font-bold">{downPaymentPct} %</div>
              </div>
              <div className="pt-6">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Estimated Monthly Payment:</p>
                <p className="text-red-600 text-5xl font-medium tracking-tighter">AED {monthlyPayment.toLocaleString(undefined, {maximumFractionDigits:0})}</p>
              </div>
            </div>
          </div>

          <div className="bg-[#f9f9f9] p-10 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 uppercase tracking-[2px]">Inquire Now</h2>
            <form action="https://formspree.io/f/xdkqzdbk" method="POST" className="space-y-6">
              <input className="w-full border-b bg-transparent py-4 outline-none focus:border-red-600 font-medium" name="name" placeholder="FULL NAME *" required />
              <input className="w-full border-b bg-transparent py-4 outline-none focus:border-red-600 font-medium" type="email" name="email" placeholder="EMAIL ADDRESS *" required />
              <textarea 
                className="w-full border-b bg-transparent py-4 outline-none focus:border-red-600 resize-none font-medium" 
                rows="3" name="message" 
                defaultValue={`I am interested in ${property.title} for Rent.`}
                required 
              />
              <button className="w-full bg-black text-white py-5 font-bold uppercase hover:bg-red-600 transition-all tracking-[3px] mt-4 text-sm">Send Request</button>
            </form>
          </div>
        </div>

        {/* Similar Properties Section */}
        {similarProperties.length > 0 && (
          <div className="mb-10 border-t pt-10">
            <h2 className="text-xl md:text-2xl font-bold mb-8 uppercase tracking-tight">Similar Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProperties.map((p) => (
                <Link key={p.documentId} to={`/property-info-rent/${p.documentId}`} className="bg-white border border-gray-100 group shadow-sm hover:shadow-lg transition-all rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden h-48">
                    <img src={getImageUrl(p.images?.[0])} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" alt={p.title} />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold uppercase text-[10px] tracking-wider truncate text-gray-800">{p.title}</h3>
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
            <FaTimes size={35}/>
          </button>
          <img 
            src={selectedImage} 
            className="max-w-full max-h-[92vh] object-contain rounded shadow-2xl animate-in fade-in zoom-in duration-300" 
            alt="Preview" 
          />
        </div>
      )}
      
      {/* Contact Popups */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md p-8 relative shadow-2xl border-t-4 border-red-600">
            <button onClick={() => setShowEmailPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black"><FaTimes size={20}/></button>
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
            <p className="text-gray-500 mb-8 font-medium">+971 4 306 9999</p>
            <a href="tel:+97143069999" className="inline-block w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-red-600 transition-all">Call Now</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyInfoRent;