import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ id, img, title, price, details }) => (
  <Link to={`/property/${id}`}>
    <div className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-lg transition w-full">
      <img 
        src={img} 
        alt={title} 
        className="w-full h-48 sm:h-56 md:h-64 object-cover" 
      />
      <div className="p-4 sm:p-5">
        <h4 className="font-semibold text-base sm:text-lg">{title}</h4>
        <p className="text-red-600 font-medium mt-2 text-sm sm:text-base">{price}</p>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">{details}</p>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
