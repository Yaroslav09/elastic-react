import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <div
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 bg-white 
                    text-sm font-medium text-[#445265] uppercase 
                    focus:outline-none"
        >
          {t("products")}
          <svg
            className="ml-2 -mr-1 h-5 w-5"
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
          className="origin-top-right absolute right-0 mt-2 w-80 text-[#445265] 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
          role="menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-lg text-[#445265]-700 
                            hover:bg-gray-100"
              role="menuitem"
            >
              {t("ipaas")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-[#445265]
                            hover:bg-gray-100"
              role="menuitem"
            >
              {t("enterprise_integration")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg text-text-[#445265]-700
                            hover:bg-gray-100"
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
