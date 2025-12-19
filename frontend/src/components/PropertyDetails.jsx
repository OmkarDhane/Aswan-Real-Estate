
import React from "react";
import { useParams } from "react-router-dom";
import { properties } from "../data/properties";
import Footer from "../components/Footer";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <h2 className="text-center text-xl mt-20 text-red-500">
        Property Not Found!
      </h2>
    );
  }

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Title */}
        <h1 className="text-4xl font-normal mb-6">{property.title}</h1>

        {/* Image */}
        <img
          src={property.img}
          alt={property.title}
          className="w-full h-[450px] object-cover rounded-xl shadow-lg"
        />

        {/* Description */}
        <p className="mt-6 text-normal text-gray-700 leading-relaxed">
          {property.description}
        </p>

        {/* Price */}
        <div className="mt-4 text-2xl font-normal text-green-600">
          Price: {property.price}
        </div>

        {/* Bedrooms */}
        <div className="mt-4 text-2xl font-normal text-green-600">
          Bedrooms: {property.bedrooms}
        </div>

        {/* Size */}
        <div className="mt-4 text-2xl font-normal text-green-600">
          Size: {property.size}
        </div>
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />
    </div>
  );
};

export default PropertyDetails;
