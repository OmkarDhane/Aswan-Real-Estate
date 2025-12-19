import React from "react";
import { useParams } from "react-router-dom";
import {
  topPropertiesLuxury,
  topPropertiesVillas,
  topPropertiesApartments,
} from "../data/topProperties";
import Footer from "../components/Footer";  // 👈 Footer import

const TopPropertyDetails = () => {
  const { id } = useParams();
  const propertyId = parseInt(id);

  // Combine all top properties into one array
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
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-semi-bold mb-4">{property.title}</h1>

        {/* Property Image */}
        <img
          src={property.img}
          alt={property.title}
          className="w-full h-96 object-cover rounded-md mb-6"
        />

        {/* Property Description */}
        <p className="text-gray-700 text-normal mb-2">{property.description}</p>

        {/* Price */}
        <p className="text-red-600 font-normal mb-2">{property.price}</p>

        {/* Details */}
        <div className="text-gray-600 mb-2 space-y-1">
          {property.bedrooms && <p>Bedrooms: {property.bedrooms}</p>}
          {property.bathrooms && <p>Bathrooms: {property.bathrooms}</p>}
          {property.size && <p>Size: {property.size}</p>}
          {property.location && <p>Location: {property.location}</p>}
        </div>

        {/* Amenities */}
        {property.amenities && property.amenities.length > 0 && (
          <div className="mt-4">
            <p className="font-normal mb-2">Amenities:</p>
            <ul className="list-disc list-inside text-gray-600">
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ---------------- FOOTER ---------------- */}
      <Footer />   {/* 👈 Footer added here */}
    </div>
  );
};

export default TopPropertyDetails;
