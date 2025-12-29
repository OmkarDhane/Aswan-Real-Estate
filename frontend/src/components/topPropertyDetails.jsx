import React from "react";
import { useParams } from "react-router-dom";
import {
  topPropertiesLuxury,
  topPropertiesVillas,
  topPropertiesApartments,
} from "../data/topProperties";
import Footer from "../components/Footer";

const TopPropertyDetails = () => {
  const { id } = useParams();
  const propertyId = parseInt(id);

  const allProperties = [
    ...topPropertiesLuxury,
    ...topPropertiesVillas,
    ...topPropertiesApartments,
  ];

  const property = allProperties.find((p) => p.id === propertyId);

  if (!property) {
    return <div className="p-12 text-center">Property not found</div>;
  }

  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-16">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-center sm:text-left">
          {property.title}
        </h1>

        {/* Property Image */}
        <img
          src={property.img}
          alt={property.title}
          className="w-full h-64 sm:h-96 object-cover rounded-md mb-6"
        />

        {/* Property Description */}
        <p className="text-gray-700 text-sm sm:text-base mb-2 whitespace-pre-line">
          {property.description}
        </p>

        {/* Price */}
        <p className="text-red-600 font-semibold mb-2 text-sm sm:text-base">
          {property.price}
        </p>

        {/* Details */}
        <div className="text-gray-600 mb-4 space-y-1 text-sm sm:text-base">
          {property.bedrooms && <p>Bedrooms: {property.bedrooms}</p>}
          {property.bathrooms && <p>Bathrooms: {property.bathrooms}</p>}
          {property.size && <p>Size: {property.size}</p>}
          {property.location && <p>Location: {property.location}</p>}
        </div>

        {/* Amenities */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="mt-4">
            <p className="font-semibold mb-2 text-sm sm:text-base">Amenities:</p>
            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TopPropertyDetails;
