import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Products = () => {
  const { t, i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const products = [
    { id: "ipaas", text: t("ipaas"), link: "#" },
    {
      id: "enterprise_integration",
      text: t("enterprise_integration"),
      link: "https://www.elastic.io/enterprise-integration-platform/",
    },
    {
      id: "saas_embedded_integration",
      text: t("saas_embedded_integration"),
      link: "https://www.elastic.io/saas-embedded-integration/",
    },
  ];

  return (
    <div className="relative inline-block text-left w-full">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-start w-full focus:outline-none"
      >
        {t("products")}
        <svg
          className={`ml-2 -mr-1 h-5 w-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
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
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="xl:origin-top-right xl:absolute xl:mt-5 xl:p-2 xl:w-80 text-[#445265]-700
            rounded-md xl:shadow-lg bg-white ring-1 ring-black ring-opacity-5
            focus:outline-none dark:text-white xl:dark:bg-custom-gradient xl:dark:ring-1 xl:dark:ring-[#445265] w-full mt-2 pl-4 pr-2 py-1 dark:bg-transparent shadow-md space-y-1"
          role="menu"
        >
          <div className="py-1 capitalize" role="none">
            {products.map(({ id, text, link }) => (
              <a
                key={id}
                href={link}
                className="block px-4 py-2 text-lg
                  hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                role="menuitem"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
