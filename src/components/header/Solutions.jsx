import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Solutions = () => {
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

  const solutions_1 = [
    {
      id: "salesforce_integration",
      text: t("salesforce_integration"),
      link: "#",
    },
    {
      id: "net_suite_integration",
      text: t("net_suite_integration"),
      link: "#",
    },
    {
      id: "sap_integration",
      text: t("sap_integration"),
      link: "#",
    },
  ];
  const solutions_2 = [
    { id: "cloud_integration", text: t("cloud_integration"), link: "#" },
    { id: "hybrid_integration", text: t("hybrid_integration"), link: "#" },
    {
      id: "api_integration",
      text: t("api_integration"),
      link: "#",
    },
    {
      id: "data_migration",
      text: t("data_migration"),
      link: "#",
    },
  ];
  const solutions_3 = [
    { id: "data_analysis", text: t("data_analysis"), link: "#" },
    { id: "b2b_integration", text: t("b2b_integration"), link: "#" },
    {
      id: "mobile_integration",
      text: t("mobile_integration"),
      link: "#",
    },
    {
      id: "iot_integration",
      text: t("iot_integration"),
      link: "#",
    },
  ];

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <div
          onClick={toggleDropdown}
          className="inline-flex justify-start w-full focus:outline-none"
        >
          {t("solutions")}
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
          className="xl:origin-top-right xl:left-[-320px] p-4 xl:absolute xl:mt-5 xl:w-auto text-[#445265]-700 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none flex flex-col xl:flex-row dark:text-white dark:bg-transparent xl:dark:bg-custom-gradient xl:dark:ring-1 xl:dark:ring-[#445265]"
          role="menu"
        >
          <div className="py-1 xl:w-60 capitalize" role="none">
            {solutions_1.map(({ id, text, link }) => (
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
          <div className="py-1 w-52 capitalize" role="none">
            {solutions_2.map(({ id, text, link }) => (
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
          <div className="py-1 w-52 capitalize" role="none">
            {solutions_3.map(({ id, text, link }) => (
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

export default Solutions;
