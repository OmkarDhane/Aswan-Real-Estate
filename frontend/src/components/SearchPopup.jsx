import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPopup = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState("rent"); // buy/rent toggle
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== "") {
      navigate(
        mode === "rent"
          ? `/for-rent?search=${encodeURIComponent(query)}`
          : `/for-sale?search=${encodeURIComponent(query)}`
      );
      onClose();
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-80 p-4 sm:p-8"
    >
      {/* INNER BOX */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-20 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 p-6 sm:p-8 bg-gray-900 rounded-xl shadow-lg"
      >
        {/* TOP CLOSE BUTTON */}
        <div className="flex justify-end mb-6">
          <button
            onClick={onClose}
            className="text-white text-2xl sm:text-3xl font-light"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* TITLE */}
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 text-center">
          Property Search
        </h2>

        {/* SEARCH BAR */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-2 w-full">
          <input
            type="text"
            placeholder="Area or Community"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-gray-800 text-white placeholder-gray-400 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          <div className="flex gap-2 sm:gap-4 justify-center">
            <button
              onClick={() => {
                setMode("buy");
                handleSearch();
              }}
              className={`px-4 py-2 rounded-md font-medium transition ${
                mode === "buy" ? "bg-red-600 text-white" : "bg-gray-700 text-gray-200 hover:bg-red-500"
              }`}
            >
              Buy
            </button>

            <button
              onClick={() => {
                setMode("rent");
                handleSearch();
              }}
              className={`px-4 py-2 rounded-md font-medium transition ${
                mode === "rent" ? "bg-red-600 text-white" : "bg-gray-700 text-gray-200 hover:bg-red-500"
              }`}
            >
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
