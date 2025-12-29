import React, { useState } from "react";
import { FaBars, FaSearch, FaHome, FaChartLine } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import FindPropertyPopup from "./FindPropertyPopup";
import SearchPopup from "./SearchPopup";
import logo from "../assets/logo0.png";

const Header = () => {
  const [showFindPopup, setShowFindPopup] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [active, setActive] = useState(""); // track active nav item
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#faf9f7] shadow-sm py-5 px-6 md:px-16 flex justify-between items-center font-[Poppins] sticky top-0 z-50">

      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Logo" className="h-16 md:h-20 cursor-pointer" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-14 text-gray-800 text-lg">

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

        {/* Menu */}
        <button
          className={`flex items-center gap-3 transition ${
            active === "menu"
              ? "text-red-500 font-semibold"
              : "text-gray-800 hover:text-red-500"
          }`}
          onClick={() => {
            setActive("menu");
            navigate("/menu");
          }}
        >
          <FaBars className="text-red-500" /> Menu
        </button>
      </nav>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-800 hover:text-red-500 focus:outline-none"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#faf9f7] shadow-md flex flex-col items-start gap-5 p-5 md:hidden z-50">
          <button
            className="flex items-center gap-3 text-gray-800 hover:text-red-500 w-full text-left"
            onClick={() => {
              setShowFindPopup(!showFindPopup);
              setActive("find");
              setMobileMenuOpen(false);
            }}
          >
            <FaHome className="text-red-500" /> Find a Property
          </button>

          <Link
            to="/valuation"
            onClick={() => {
              setActive("valuation");
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 text-gray-800 hover:text-red-500 w-full"
          >
            <FaChartLine className="text-red-500" /> Valuation
          </Link>

          <button
            className="flex items-center gap-3 text-gray-800 hover:text-red-500 w-full text-left"
            onClick={() => {
              setShowSearch(true);
              setActive("search");
              setMobileMenuOpen(false);
            }}
          >
            <FaSearch className="text-red-500" /> Search
          </button>

          <button
            className="flex items-center gap-3 text-gray-800 hover:text-red-500 w-full text-left"
            onClick={() => {
              setActive("menu");
              navigate("/menu");
              setMobileMenuOpen(false);
            }}
          >
            <FaBars className="text-red-500" /> Menu
          </button>
        </div>
      )}

      {/* Popups */}
      {showFindPopup && <FindPropertyPopup onClose={() => setShowFindPopup(false)} />}
      {showSearch && <SearchPopup onClose={() => setShowSearch(false)} />}

    </header>
  );
};

export default Header;
