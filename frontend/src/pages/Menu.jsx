import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();

  const menuRoutes = {
    Buy: "/for-rent",
    Sell: "/for-sale",
    Rent: "/for-rent",
    Landlord: "/contact",
    "Property Management": "/contact",
    Mortgages: "/contact",
    "Holiday Homes": "/contact",
    Careers: "/contact",
  };

  const leftMenuItems = [
    "Buy",
    "Sell",
    "Rent",
    "Landlord",
    "Property Management",
    "Mortgages",
    "Holiday Homes",
    "Careers",
  ];

  // Close menu function
  const handleClose = () => {
    navigate(-1); // Goes back to previous page
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
            src="/src/assets/logo2.jpg"
            alt="ESPACE Real Estate"
            className="h-16 sm:h-20 w-auto"
          />
        </div>

        {/* CLOSE BUTTON */}
        <button onClick={handleClose} className="text-3xl sm:text-4xl font-light">
          ×
        </button>
      </div>

      {/* MAIN MENU */}
      <div className="mt-10 sm:mt-20 px-4 sm:px-20 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20 text-xl sm:text-2xl">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 sm:gap-8">
          {leftMenuItems.map((item) => (
            <div
              key={item}
              className="flex justify-between cursor-pointer px-2 sm:px-0 py-2 sm:py-0 hover:text-gray-300 transition"
              onClick={() => menuRoutes[item] && navigate(menuRoutes[item])}
            >
              <span>{item}</span>
              <span className="text-gray-500 sm:text-gray-300">+</span>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 sm:gap-14 mt-4 sm:mt-2">
          <div
            className="flex justify-between cursor-pointer px-2 sm:px-0 py-2 sm:py-0 hover:text-gray-300 transition"
            onClick={() => navigate("/knowledge-centre")}
          >
            <span>Knowledge Centre</span>
            <span className="text-gray-500 sm:text-gray-300">+</span>
          </div>

          <div
            className="flex justify-between cursor-pointer px-2 sm:px-0 py-2 sm:py-0 hover:text-gray-300 transition"
            onClick={() => navigate("/video")}
          >
            <span>Video</span>
            <span className="text-gray-500 sm:text-gray-300">+</span>
          </div>

          <div
            className="flex justify-between cursor-pointer px-2 sm:px-0 py-2 sm:py-0 hover:text-gray-300 transition"
            onClick={() => navigate("/about-us")}
          >
            <span>About Us</span>
            <span className="text-gray-500 sm:text-gray-300">+</span>
          </div>

          <div
            className="flex justify-between cursor-pointer px-2 sm:px-0 py-2 sm:py-0 hover:text-gray-300 transition"
            onClick={() => navigate("/contact")}
          >
            <span>Contact</span>
            <span className="text-gray-500 sm:text-gray-300">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
