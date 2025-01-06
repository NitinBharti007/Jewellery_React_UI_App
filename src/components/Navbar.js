import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center px-5 p-2">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to={"/"}>
          <img
            className="w-32 h-auto object-contain"
            src={logo}
            alt="Pahadisunar Logo"
          />
          </Link>
          
        </div>

        {/* Hamburger Icon for mobile */}
        <div
          className="md:hidden text-[#D4AF37] text-3xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links for desktop */}
        <ul
          className={`md:flex md:space-x-4 absolute md:static top-24 left-0 w-full md:w-auto bg-white md:bg-transparent z-50 transition-all duration-500 ease-in-out ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="block py-3 px-6 text-[#3B3B3B] hover:text-[#D4AF37] text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-4 decoration-[#D4AF37] underline-offset-8"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-3 px-6 text-[#3B3B3B] hover:text-[#D4AF37] text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-4 decoration-[#D4AF37] underline-offset-8"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/collections"
              className="block py-3 px-6 text-[#3B3B3B] hover:text-[#D4AF37] text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-4 decoration-[#D4AF37] underline-offset-8"
            >
              Collections
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block py-3 px-6 text-[#3B3B3B] hover:text-[#D4AF37] text-lg font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-4 decoration-[#D4AF37] underline-offset-8"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        } bg-white shadow-xl rounded-lg`}
      >
        <ul className="space-y-4 p-6 mt-8">
          <li>
            <Link
              to="/"
              className="text-[#3B3B3B] text-lg font-medium hover:text-[#D4AF37] transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-4 decoration-[#D4AF37] underline-offset-8"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-[#3B3B3B] text-lg font-medium hover:text-[#D4AF37] transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-4 decoration-[#D4AF37] underline-offset-8"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/collections"
              className="text-[#3B3B3B] text-lg font-medium hover:text-[#D4AF37] transition-all duration-300 ease-in-out transform hover:scale-105 hover:underline decoration-4 decoration-[#D4AF37] underline-offset-8"
            >
              Collections
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
