import React from "react";
import { useNavigate } from "react-router-dom";

const FindPropertyPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const handleForSale = () => {
    navigate("/for-sale");
    onClose();
  };

  const handleForRent = () => {
    navigate("/for-rent");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start sm:items-start">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-25"
        onClick={onClose}
      ></div>

      {/* Popup container */}
      <div
        className="
          relative bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-sm
          mt-20 sm:mt-20 sm:ml-auto sm:mr-44
          border border-gray-100
          transition-transform duration-300 ease-out
        "
      >
        <h3 className="text-lg font-normal mb-2 text-gray-900">
          Let’s find your new home together
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Find your dream home with us, we have a wide range of properties that suit your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleForSale}
            className="flex-1 border border-gray-900 py-2 font-normal hover:bg-gray-100 transition"
          >
            FOR SALE
          </button>
          <button
            onClick={handleForRent}
            className="flex-1 border border-gray-900 py-2 font-normal hover:bg-gray-100 transition"
          >
            FOR RENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindPropertyPopup;
