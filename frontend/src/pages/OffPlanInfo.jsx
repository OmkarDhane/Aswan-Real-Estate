// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { offPlanData } from "../data/OffPlanPropertiesData";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// const OffPlanInfo = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [property, setProperty] = useState(null);
//   const [showEmailPopup, setShowEmailPopup] = useState(false);
//   const [showCallPopup, setShowCallPopup] = useState(false);

//   useEffect(() => {
//     const found = offPlanData.find((item) => item.id === parseInt(id));
//     if (found) {
//       setProperty(found);
//       window.scrollTo(0, 0);
//     }
//   }, [id]);

//   if (!property) return <p className="text-center mt-10">Property not found</p>;

//   // Similar properties
//   const similarProperties = offPlanData.filter(
//     (p) => p.type === property.type && p.id !== property.id
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 font-[Poppins]">
//       <div className="max-w-4xl mx-auto">

//         {/* Image Slider */}
//         <div className="w-full mb-6 shadow-lg rounded-lg overflow-hidden">
//           <Swiper
//             navigation
//             pagination={{ clickable: true }}
//             modules={[Navigation, Pagination]}
//             className="rounded-lg"
//           >
//             {(property.images || [property.image]).map((img, idx) => (
//               <SwiperSlide key={idx}>
//                 <img
//                   src={img}
//                   alt="property"
//                   className="w-full h-[450px] object-cover"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>

//         {/* Property Details */}
//         <button
//           className="text-red-600 font-semibold mb-3"
//           onClick={() => navigate(-1)}
//         >
//           ← Back
//         </button>

//         <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
//         <p className="text-red-600 font-bold text-2xl mb-4">
//           AED {property.price?.toLocaleString() ?? "N/A"}
//         </p>
//         <p className="text-gray-700 text-lg mb-4">{property.description}</p>

//         <div className="bg-white p-6 rounded-lg shadow mb-6 space-y-2">
//           <p><strong>Beds:</strong> {property.beds ?? "N/A"}</p>
//           <p><strong>Type:</strong> {property.type ?? "N/A"}</p>
//           <p><strong>Location:</strong> {property.location}</p>
//           <p><strong>Developer:</strong> {property.developer}</p>
//         </div>

//         {property.keyFeatures && (
//           <div className="bg-white p-6 rounded-lg shadow mb-6">
//             <h2 className="text-xl font-semibold mb-2">Key Features</h2>
//             <ul className="list-disc list-inside text-gray-700">
//               {property.keyFeatures.map((feature, i) => (
//                 <li key={i}>{feature}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {property.paymentPlan && (
//           <div className="bg-white p-6 rounded-lg shadow mb-6">
//             <h2 className="text-xl font-semibold mb-2">Payment Plan</h2>
//             <ul className="list-disc list-inside text-gray-700">
//               {property.paymentPlan.map((plan, i) => (
//                 <li key={i}>{plan}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {property.map && (
//           <div className="mb-6">
//             <a
//               href={property.map}
//               target="_blank"
//               className="text-red-600 underline"
//             >
//               View on Map
//             </a>
//           </div>
//         )}

//         {/* Contact Buttons */}
//         <div className="flex flex-wrap gap-4 mb-12">
//           <button
//             onClick={() => setShowCallPopup(true)}
//             className="flex items-center gap-3 bg-white border px-6 py-3 rounded shadow hover:bg-red-600 hover:text-white"
//           >
//             <FaPhone /> Call
//           </button>

//           <button
//             onClick={() => setShowEmailPopup(true)}
//             className="flex items-center gap-3 bg-white border px-6 py-3 rounded shadow hover:bg-red-600 hover:text-white"
//           >
//             <FaEnvelope /> Email
//           </button>

//           <a
//             href="https://wa.me/911234567890"
//             target="_blank"
//             className="flex items-center gap-3 bg-white border px-6 py-3 rounded shadow hover:bg-red-600 hover:text-white"
//           >
//             <FaWhatsapp /> WhatsApp
//           </a>
//         </div>

//         {/* Similar Properties */}
//         {similarProperties.length > 0 && (
//           <div className="mt-12">
//             <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {similarProperties.map((p) => (
//                 <div
//                   key={p.id}
//                   className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
//                   onClick={() => navigate(`/offplan-info/${p.id}`)}
//                 >
//                   <img
//                     src={p.image}
//                     className="w-full h-40 object-cover rounded mb-2"
//                   />
//                   <h3 className="font-semibold">{p.title}</h3>
//                   <p className="text-red-600 font-bold">
//                     AED {p.price?.toLocaleString() ?? "N/A"}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Call Popup */}
//         {showCallPopup && (
//           <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//             <div className="w-96 bg-white p-6 rounded-lg text-center">
//               <h2 className="text-xl font-bold mb-4">Call Us</h2>
//               <p className="font-semibold text-lg mb-4">📞 +91 12345 67890</p>
//               <button
//                 onClick={() => setShowCallPopup(false)}
//                 className="bg-red-600 text-white px-6 py-2 rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Email Popup */}
//         {showEmailPopup && (
//           <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
//             <div className="w-[450px] bg-white p-6 rounded-lg">
//               <h2 className="text-xl font-bold mb-4 text-center">Send Email</h2>
//               <input className="border w-full px-3 py-2 rounded mb-3" placeholder="Your Name" />
//               <input className="border w-full px-3 py-2 rounded mb-3" placeholder="Email" />
//               <textarea className="border w-full px-3 py-2 rounded mb-3 h-28" placeholder="Message"></textarea>
//               <button className="w-full bg-red-600 text-white py-2 rounded mb-2">Send</button>
//               <button
//                 onClick={() => setShowEmailPopup(false)}
//                 className="w-full bg-gray-300 py-2 rounded"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default OffPlanInfo;
