
import React, { useState } from "react";
import { FaBars, FaSearch, FaHome, FaChartLine } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import FindPropertyPopup from "./FindPropertyPopup";
import SearchPopup from "./SearchPopup";
import logo from "../assets/logo0.png"; // Updated logo

const Header = () => {
  const [showFindPopup, setShowFindPopup] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [active, setActive] = useState(""); // track which nav item is active

  const navigate = useNavigate(); // <-- Added navigation hook

  return (
    <header className="w-full bg-[#faf9f7] shadow-sm py-5 px-16 flex justify-between items-center font-[Poppins] sticky top-0 z-50">

      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-20 cursor-pointer" />
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-14 text-gray-800 text-lg">

        {/* Find Property */}
        <button
          className={`flex items-center gap-3 transition ${
            active === "find"
              ? "text-red-500 font-semibold"
              : "text-gray-800 hover:text-red-500"
          }`}
          onClick={() => {
            setShowFindPopup(!showFindPopup);
            setActive("find");
          }}
        >
          <FaHome className="text-red-500" /> Find a Property
        </button>

        {/* Valuation */}
        <Link
          to="/valuation"
          onClick={() => setActive("valuation")}
          className={`flex items-center gap-3 transition ${
            active === "valuation"
              ? "text-red-500 font-semibold"
              : "text-gray-800 hover:text-red-500"
          }`}
        >
          <FaChartLine className="text-red-500" /> Valuation
        </Link>

        {/* Search */}
        <button
          className={`flex items-center gap-3 transition ${
            active === "search"
              ? "text-red-500 font-semibold"
              : "text-gray-800 hover:text-red-500"
          }`}
          onClick={() => {
            setShowSearch(true);
            setActive("search");
          }}
        >
          <FaSearch className="text-red-500" /> Search
        </button>

        {/* Menu — UPDATED */}
        <button
          className={`flex items-center gap-3 transition ${
            active === "menu"
              ? "text-red-500 font-semibold"
              : "text-gray-800 hover:text-red-500"
          }`}
          onClick={() => {
            setActive("menu");
            navigate("/menu"); // 👈 Now goes to the menu page
          }}
        >
          <FaBars className="text-red-500" /> Menu
        </button>

      </nav>

      {/* Popups */}
      {showFindPopup && (
        <FindPropertyPopup onClose={() => setShowFindPopup(false)} />
      )}

      {showSearch && (
        <SearchPopup onClose={() => setShowSearch(false)} />
      )}

    </header>
  );
};

export default Header;
