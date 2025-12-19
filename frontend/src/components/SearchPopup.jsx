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
      className="fixed inset-0 z-50 flex items-start justify-center"
      style={{ backgroundColor: "#000" }}
    >
      {/* INNER BOX */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="mt-20 p-8 w-[80%] max-w-[900px]"
        style={{ color: "white", fontFamily: "monospace" }}
      >
        {/* TOP CLOSE BUTTON */}
        <div className="flex justify-end w-full mb-10">
          <button
            onClick={onClose}
            className="text-white text-xl"
            aria-label="Close"
            style={{ fontWeight: 100 }}
          >
            ×
          </button>
        </div>

        {/* TOP TABS */}
        <div className="flex gap-10 mb-6 text-lg">
          <span className="border-b border-white pb-1">Property Search</span>
        </div>

        {/* SEARCH BAR */}
        <div className="flex items-center border border-gray-600 w-full px-4 py-3">
          <input
            type="text"
            placeholder="Area or Community"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />

          {/* BUY / RENT buttons */}
          <div className="flex gap-6 text-white ml-4">

            {/* BUY */}
            <span
              className="cursor-pointer text-white hover:text-red-500 transition"
              onClick={() => {
                setMode("buy");
                navigate(`/for-sale?search=${encodeURIComponent(query)}`);
                onClose();
              }}
            >
              Buy
            </span>

            {/* RENT */}
            <span
              className="cursor-pointer text-white hover:text-red-500 transition"
              onClick={() => {
                setMode("rent");
                navigate(`/for-rent?search=${encodeURIComponent(query)}`);
                onClose();
              }}
            >
              Rent
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
