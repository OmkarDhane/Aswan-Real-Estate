import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import Footer from "../components/Footer";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <h2 className="text-center text-xl mt-20 text-red-500 px-4">
        Property Not Found!
      </h2>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal mb-6">
          {property.title}
        </h1>

        {/* Image */}
        <img
          src={property.img}
          alt={property.title}
          className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-xl shadow-lg"
        />

        {/* Description */}
        <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          {property.description}
        </p>

        {/* Property Details */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-lg sm:text-xl font-medium text-green-600">
            <span className="font-semibold">Price:</span> {property.price}
          </div>
          <div className="text-lg sm:text-xl font-medium text-green-600">
            <span className="font-semibold">Bedrooms:</span> {property.bedrooms}
          </div>
          <div className="text-lg sm:text-xl font-medium text-green-600">
            <span className="font-semibold">Size:</span> {property.size}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PropertyDetails;
