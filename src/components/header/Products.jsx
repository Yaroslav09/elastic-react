import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <div
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full focus:outline-none"
        >
          {t("products")}
          <svg
            className={`ml-2 -mr-1 h-5 w-5 transform transition-transform duration-300 ${isRotated ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute mt-5 p-2 w-80 text-[#445265]-700 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none dark:text-white dark:bg-custom-gradient dark:ring-1 dark:ring-[#445265]"
          role="menu"
        >
          <div className="py-1 capitalize" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-lg 
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("ipaas")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg 
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("enterprise_integration")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg 
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("saas_embedded_integration")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
