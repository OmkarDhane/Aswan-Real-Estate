// // src/pages/PropertySearch.jsx
// import React from "react";
// import { useLocation } from "react-router-dom";
// import { allProperties } from "../data/allProperties"; // सर्व properties data

// const PropertySearch = () => {
//   const location = useLocation();
//   const params = new URLSearchParams(location.search);
//   const query = params.get("query")?.toLowerCase() || "";

//   // Filter properties based on query (area or type)
//   const filteredProperties = allProperties.filter((prop) => {
//     return (
//       prop.title.toLowerCase().includes(query) ||
//       prop.description.toLowerCase().includes(query)
//     );
//   });

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12">
//       <h2 className="text-2xl font-semibold mb-6">Search Results for "{query}"</h2>

//       {filteredProperties.length === 0 ? (
//         <p>No properties found.</p>
//       ) : (
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProperties.map((prop) => (
//             <div key={prop.id} className="bg-white shadow rounded-lg overflow-hidden">
//               <img src={prop.img} alt={prop.title} className="h-56 w-full object-cover" />
//               <div className="p-4">
//                 <h3 className="font-semibold">{prop.title}</h3>
//                 <p className="text-red-600 font-medium mt-2">{prop.price}</p>
//                 <p className="text-gray-500 text-sm mt-1">{prop.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertySearch;
