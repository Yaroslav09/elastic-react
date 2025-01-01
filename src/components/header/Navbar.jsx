import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LanguageSelector from "../language-selector";
import Products from "./Products";
import Solutions from "./Solutions";
import ResourcesMenu from "./ResourcesMenu";
import Dark from "../../Dark";

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
    { id: 5, text: <ResourcesMenu /> },
    { id: 6, text: <LanguageSelector /> },
    { id: 7, text: <Dark /> },
  ];

  return (
    <div className="h-24 w-full mx-auto sticky top-0 z-50 bg-white dark:bg-[#031A28]">
      <div className=" flex justify-between items-center h-24 max-w-[1200px] mx-auto px-4 text-[#445265]  dark:text-white">
        {/* Logo */}
        <h1 className="w-full text-3xl font-bold text-[#ED4B23]">ELASTIC.IO</h1>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center uppercase">
          {navItems.map((item) => (
            <li
              key={item.id}
              className=" p-4 m-2 cursor-pointer duration-300 flex w-full  
                    text-sm font-medium text-[#445265] dark:text-white 
                    focus:outline-none"
            >
              {item.text}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block xl:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed xl:hidden left-0 top-[80px] w-full h-full border-r border-r-gray-900 bg-white ease-in-out duration-500 dark:bg-custom-gradient "
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] "
          }
        >
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 border-b rounded-xl hover:bg-gray-100 duration-300 hover:text-black cursor-pointer border-gray-600 uppercase dark:bg-custom-gradient dark:text-white bg-white"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
