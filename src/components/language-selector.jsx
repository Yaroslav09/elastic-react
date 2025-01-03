import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "En" },
  { code: "it", lang: "It" },
  { code: "fr", lang: "Fr" },
  { code: "es", lang: "Es" },
  { code: "de", lang: "De" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex py-2 px-3 bg-gray-200 rounded-full dark:bg-gray-800 shadow-lg transition-all duration-300 focus:outline-none"
      >
        {languages.find((lang) => lang.code === i18n.language)?.lang ||
          "Select Language"}
        <svg
          className={`ml-2 -mr-1 h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="xl:absolute mt-2 py-2 w-full xl:w-38 bg-white dark:bg-transparent xl:dark:bg-custom-gradient rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
          role="menu"
        >
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              className={`block w-full text-left px-4 py-2 text-sm ${
                lng.code === i18n.language
                  ? "bg-gray-200 dark:bg-gray-700 font-bold"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {lng.lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
