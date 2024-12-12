import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Resources = () => {
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
          {t("resources")}
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
          className="origin-top-right absolute right-0 mt-5 p-3 w-auto text-[#445265]
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none flex flex-row dark:text-white dark:bg-custom-gradient dark:ring-1 dark:ring-[#445265]"
          role="menu"
        >
          <div className="p-2 w-52 capitalize" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("getting_started")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("documentation")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("release_notes")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("system_status")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("rest_api")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("success_stories")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("datasheets")}
            </a>
          </div>
          <div className="p-2 w-40 capitalize" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("partners")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("customers")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("blog")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("pressroom")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("about_us")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg 
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("careers")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg
                            hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              role="menuitem"
            >
              {t("contact_us")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
