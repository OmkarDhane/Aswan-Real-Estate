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
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/95 p-4 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-20 w-full max-w-lg p-8 bg-[#111] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-[#D4AF37]/30"
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="text-[#D4AF37] hover:text-white transition-colors text-4xl font-light"
          >
            ×
          </button>
        </div>

        {/* UPDATED TITLE */}
        <h2 className="text-2xl font-light text-white mb-4 text-center uppercase tracking-widest">
  <span>PROPERTY </span>
  <span className="text-[#D4AF37] italic">SEARCH</span>
</h2>


        {/* UPDATED BODY TEXT */}
        <p className="text-center text-gray-400 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          
        </p>

        <div className="flex flex-col gap-6">
          {/* Input Box */}
          <input
  type="text"
  placeholder="Serach by Property, Name or Area."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  autoFocus
  className="
    w-full
    bg-black
    text-white
    px-7
    py-4
    rounded-lg
    text-sm
    leading-relaxed
    focus:ring-1
    focus:ring-[#D4AF37]
    outline-none
    border
    border-gray-800
    placeholder:text-gray-500
    placeholder:text-xs
    placeholder:leading-snug
    transition-all
  "
  onKeyDown={(e) => {
    if (e.key === "Enter") executeSearch("sale");
  }}
/>


          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => executeSearch("sale")}
              className="bg-[#D4AF37] text-black py-3 rounded-lg font-bold hover:bg-white transition-all uppercase tracking-widest text-sm"
            >
               Buy
            </button>

            <button
              onClick={() => executeSearch("rent")}
              className="bg-transparent border border-[#D4AF37] text-[#D4AF37] py-3 rounded-lg font-bold hover:bg-[#D4AF37] hover:text-black transition-all uppercase tracking-widest text-sm"
            >
               Rent
            </button>
          </div>
        </div>

        {/* Brand Tagline */}
        <p className="mt-8 text-center text-gray-600 text-[10px] uppercase tracking-[0.2em]">
          Aswan Real Estate Agency
        </p>
      </div>
    </div>
  );
};

export default SearchPopup;
