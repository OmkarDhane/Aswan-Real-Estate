// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { offPlanData } from "../data/OffPlanPropertiesData";
// import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// const OffPlanProperties = () => {
//   const [filters, setFilters] = useState({
//     projectName: "All",
//     developer: "All",
//     area: "All",
//     minPrice: "",
//     maxPrice: "",
//     type: "All",
//   });

//   const [showEmailPopup, setShowEmailPopup] = useState(false);
//   const [showCallPopup, setShowCallPopup] = useState(false);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const getUniqueValues = (key) => {
//     return [...new Set(offPlanData.map((item) => item[key]))].filter(
//       (val) => val && val !== ""
//     );
//   };

//   const filteredProperties = offPlanData.filter((property) => {
//     const matchProjectName =
//       filters.projectName === "All" || property.title === filters.projectName;
//     const matchDeveloper =
//       filters.developer === "All" || property.developer === filters.developer;
//     const matchArea = filters.area === "All" || property.location === filters.area;
//     const matchType = filters.type === "All" || property.type === filters.type;
//     const matchMinPrice = !filters.minPrice || property.price >= parseInt(filters.minPrice);
//     const matchMaxPrice = !filters.maxPrice || property.price <= parseInt(filters.maxPrice);

//     return matchProjectName && matchDeveloper && matchArea && matchType && matchMinPrice && matchMaxPrice;
//   });

//   return (
//     <div className="w-full font-[Poppins] max-w-6xl mx-auto px-6 py-16">
//       <h1 className="text-4xl font-semibold mb-8">Off-Plan Properties</h1>

//       {/* Filters */}
//       <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
//         <select name="projectName" value={filters.projectName} onChange={handleFilterChange} className="border rounded px-3 py-2">
//           <option value="All">All Projects</option>
//           {getUniqueValues("title").map((title, i) => (
//             <option key={i} value={title}>{title}</option>
//           ))}
//         </select>

//         <select name="developer" value={filters.developer} onChange={handleFilterChange} className="border rounded px-3 py-2">
//           <option value="All">All Developers</option>
//           {getUniqueValues("developer").map((dev, i) => (
//             <option key={i} value={dev}>{dev}</option>
//           ))}
//         </select>

//         <select name="area" value={filters.area} onChange={handleFilterChange} className="border rounded px-3 py-2">
//           <option value="All">All Areas</option>
//           {getUniqueValues("location").map((area, i) => (
//             <option key={i} value={area}>{area}</option>
//           ))}
//         </select>

//         <input type="number" name="minPrice" value={filters.minPrice} onChange={handleFilterChange} placeholder="Min Price" className="border rounded px-3 py-2" />
//         <input type="number" name="maxPrice" value={filters.maxPrice} onChange={handleFilterChange} placeholder="Max Price" className="border rounded px-3 py-2" />
//         <select name="type" value={filters.type} onChange={handleFilterChange} className="border rounded px-3 py-2">
//           <option value="All">All Types</option>
//           {getUniqueValues("type").map((type, i) => (
//             <option key={i} value={type}>{type}</option>
//           ))}
//         </select>
//       </div>

//       {/* Property Listings */}
//       <div className="space-y-6">
//         {filteredProperties.length ? (
//           filteredProperties.map((property) => (
//             <Link to={`/offplan/${property.id}`} key={property.id}>
//               <div className="bg-white rounded-lg shadow flex cursor-pointer overflow-hidden hover:shadow-lg transition">
//                 {/* Left Image */}
//                 <div className="w-1/2 p-2">
//                   <img src={property.image} alt={property.title} className="h-80 w-full object-cover rounded-lg" />
//                 </div>

//                 {/* Right Info */}
//                 <div className="w-1/2 p-6 flex flex-col justify-between">
//                   <div>
//                     <h3 className="font-semibold text-2xl mb-2">{property.title}</h3>
//                     <p className="text-red-600 font-bold text-xl mb-2">Starting Price: AED {property.price ?? "N/A"}</p>
//                     <p className="text-gray-700 mb-1">Location: {property.location}</p>
//                     <p className="text-gray-700 mb-1">Developer: {property.developer}</p>
//                     <p className="text-gray-700 mb-1">Type: {property.type ?? "N/A"}</p>
//                     <p className="text-gray-700 mb-1">Beds: {property.beds ?? "N/A"}</p>
//                   </div>

//                   {/* Contact Buttons */}
//                   <div className="flex space-x-3 mt-4">
//                     <button className="flex items-center space-x-3 bg-white text-black border border-gray-300 px-7 py-3 rounded transition text-sm hover:bg-red-600 hover:text-white">
//                       <FaPhone /> <span>Call</span>
//                     </button>

//                     <button className="flex items-center space-x-3 bg-white text-black border border-gray-300 px-7 py-3 rounded transition text-sm hover:bg-red-600 hover:text-white">
//                       <FaEnvelope /> <span>Email</span>
//                     </button>

//                     <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 bg-white text-black border border-gray-300 px-7 py-3 rounded transition text-sm hover:bg-red-600 hover:text-white">
//                       <FaWhatsapp /> <span>WhatsApp</span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           ))
//         ) : (
//           <p className="text-center text-gray-500 mt-10">No properties found matching your filters.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OffPlanProperties;
