import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function Dark() {
  // Initialize the dark mode state based on localStorage
  const [dark, setDark] = useState(() => {
    // Check if 'theme' is stored in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  // UseEffect to apply or remove 'dark' class from the <html> element
  useEffect(() => {
    const root = document.documentElement; // Get the <html> element
    if (dark) {
      root.classList.add("dark"); // Apply dark mode by adding 'dark' class
      localStorage.setItem("theme", "dark"); // Save the theme to localStorage
    } else {
      root.classList.remove("dark"); // Remove dark mode by removing 'dark' class
      localStorage.setItem("theme", "light"); // Save the theme to localStorage
    }
  }, [dark]); // Dependency on dark, so it runs whenever 'dark' state changes

  // Toggle dark mode handler
  const darkModeHandler = () => {
    setDark(!dark); // Toggle the dark mode state
  };

  return (
    <div className="p-2">
      <button
        onClick={darkModeHandler}
        className="p-3 bg-gray-200 rounded-full dark:bg-gray-800 shadow-lg transition-all duration-300"
        aria-label="Toggle Dark Mode"
      >
        {dark ? <IoSunny size={18} /> : <IoMoon size={18} />}
      </button>
    </div>
  );
}

export default Dark;
