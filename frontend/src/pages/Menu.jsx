import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();

  // Menu Routes Mapping
  const menuRoutes = {
    "Buy": "/for-sale",
    "Sell": "/contact",
    "Rent": "/for-rent",
    "Landlord": "/contact",
    "Property Management": "/contact",
    "Mortgages": "/contact",
    "Knowledge Centre": "/knowledge-centre",
    "Video": "/video",
    // "About Us": "/about-us",
    "Contact": "/contact",
  };

  // Left side che 5 items
  const leftMenuItems = [
    "Buy",
    "Sell",
    "Rent",
    "Landlord",
    "Property Management",
  ];

  // Right side che 5 items
  const rightMenuItems = [
    "Mortgages",
    "Knowledge Centre",
    "Video",
    // "About Us",
    "Contact",
  ];

  // Close menu function
  const handleClose = () => {
    navigate(-1); 
  };

  return (
    <div
      className="fixed inset-0 z-50 text-white overflow-y-auto bg-black bg-opacity-95"
      style={{ fontFamily: "monospace" }}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-4 sm:px-10 pt-6 sm:pt-10">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/assets/l-w.png"
            alt="Aswan Real Estate"
            className="h-16 sm:h-25 w-auto"
          />
        </div>

        {/* CLOSE BUTTON */}
        <button onClick={handleClose} className="text-3xl sm:text-4xl font-light hover:text-[#D4AF37] transition-colors">
          ×
        </button>
      </div>

      {/* MAIN MENU */}
      <div className="mt-10 sm:mt-20 px-4 sm:px-20 grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-4 sm:gap-y-8 text-xl sm:text-2xl">
        
        {/* LEFT COLUMN (5 ITEMS) */}
        <div className="flex flex-col gap-4 sm:gap-8">
          {leftMenuItems.map((item) => (
            <div
              key={item}
              className="flex justify-between cursor-pointer px-2 sm:px-0 py-2 sm:py-0 hover:text-[#D4AF37] transition group"
              onClick={() => menuRoutes[item] && navigate(menuRoutes[item])}
            >
              <span>{item}</span>
              <span className="text-gray-500 group-hover:text-[#D4AF37]">+</span>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN (5 ITEMS) */}
        <div className="flex flex-col gap-4 sm:gap-8">
          {rightMenuItems.map((item) => (
            <div
              key={item}
              className="flex justify-between cursor-pointer px-2 sm:px-0 py-2 sm:py-0 hover:text-[#D4AF37] transition group"
              onClick={() => menuRoutes[item] && navigate(menuRoutes[item])}
            >
              <span>{item}</span>
              <span className="text-gray-500 group-hover:text-[#D4AF37]">+</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default MenuPage;