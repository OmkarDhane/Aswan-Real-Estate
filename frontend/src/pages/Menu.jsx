import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchPopup from "../components/SearchPopup";

const MenuPage = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();

  // Mapping menu items → routes
  const menuRoutes = {
    Buy: "/for-rent",
    Sell: "/for-sale",
    Rent: "/for-rent",
    Landlord: "/contact",
    // "Off Plan": "/offplan"
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
    // "Off Plan",
    "Property Management",
    "Mortgages",
    "Holiday Homes",
    "Careers",
  ];

  return (
    <div
      className="fixed inset-0 z-50 text-white"
      style={{ backgroundColor: "#0d0d0d", fontFamily: "monospace" }}
    >
      {/* TOP BAR */}
      <div className="flex justify-between items-start px-10 pt-10">

       {/* LOGO 👉 ADDED Home Navigation */}
<div
  className="text-left cursor-pointer"
  onClick={() => navigate("/")}
>
  <img
    src="/src/assets/logo2.jpg"  
    alt="ESPACE Real Estate"
    className="h-20 w-auto"      
  />
</div>

        {/* CLOSE BUTTON */}
        <button
          onClick={() => window.history.back()}
          className="text-2xl font-light"
        >
          ×
        </button>
      </div>

      {/* MAIN MENU GRID */}
      <div className="mt-20 px-20 grid grid-cols-2 gap-20 text-2xl">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-8">
          {leftMenuItems.map((item) => (
            <div
              key={item}
              className="flex justify-between cursor-pointer"
              onClick={() => {
                if (menuRoutes[item]) {
                  navigate(menuRoutes[item]);
                }
              }}
            >
              <span>{item}</span>
              <span className="text-gray-300">+</span>
            </div>
          ))}
        </div>

        {/* MIDDLE COLUMN */}
        <div className="flex flex-col gap-14 mt-2">

          <div className="flex justify-between cursor-pointer">
            <span>Knowledge Centre</span>
            <span className="text-gray-300">+</span>
          </div>

          <div className="flex justify-between cursor-pointer">
            <span>Video</span>
            <span className="text-gray-300">+</span>
          </div>

          <div
            className="flex justify-between cursor-pointer"
            onClick={() => navigate("/about-us")}
          >
            <span>About Us</span>
            <span className="text-gray-300">+</span>
          </div>

          <div
            className="flex justify-between cursor-pointer"
            onClick={() => navigate("/contact")}
          >
            <span>Contact</span>
            <span className="text-gray-300">+</span>
          </div>

        </div>
      </div>

      {/* SEARCH POPUP (optional) */}
      {/* {openSearch && <SearchPopup onClose={() => setOpenSearch(false)} />} */}

    </div>
  );
};

export default MenuPage;
