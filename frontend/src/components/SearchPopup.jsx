import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchPopup = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const executeSearch = (searchMode) => {
    
    const path = searchMode === "rent" ? "/for-rent" : "/for-sale";
    const finalUrl = query.trim() 
      ? `${path}?search=${encodeURIComponent(query.trim())}` 
      : path;
      
    navigate(finalUrl);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-20 w-full max-w-lg p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-800"
      >
        <div className="flex justify-end mb-4">
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl">×</button>
        </div>

        <h2 className="text-xl font-bold text-white mb-6 text-center uppercase">Property Search</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Search by Property Name or Area..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-gray-800 text-white px-5 py-4 rounded-lg focus:ring-2 focus:ring-red-600 outline-none border border-gray-700"
            onKeyDown={(e) => {
              if (e.key === "Enter") executeSearch("sale"); 
            }}
          />

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => executeSearch("sale")}
              className="bg-white text-black py-4 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-all uppercase"
            >
              Search Buy
            </button>

            <button
              onClick={() => executeSearch("rent")}
              className="bg-red-600 text-white py-4 rounded-lg font-bold hover:bg-black transition-all uppercase"
            >
              Search Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;