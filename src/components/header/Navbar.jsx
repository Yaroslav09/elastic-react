import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LanguageSelector from "../language-selector";
import Products from "./Products";
import Solutions from "./Solutions";
import Resources from "./Resources";
import Dark from "./Dark";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: <Products /> },
    { id: 2, text: "CONNECTORS" },
    { id: 3, text: <Solutions /> },
    { id: 4, text: "PRICING" },
    { id: 5, text: <Resources /> },
    { id: 6, text: <LanguageSelector /> },
    { id: 7, text: <Dark /> },
  ];

  return (
    <div className="bg-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-[#445265] dark:bg-blue-200">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#ED4B23]">ELASTIC.IO</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 rounded-xl m-2 cursor-pointer duration-300 "
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          ELASTIC.IO
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
