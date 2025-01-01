import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ResourcesMenu = () => {
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

  const resources_1 = [
    { id: "getting_started", text: t("getting_started"), link: "#" },
    { id: "documentation", text: t("documentation"), link: "#" },
    { id: "release_notes", text: t("release_notes"), link: "#" },
    { id: "system_status", text: t("system_status"), link: "#" },
    { id: "rest_api", text: t("rest_api"), link: "#" },
    { id: "success_stories", text: t("success_stories"), link: "#" },
    { id: "datasheets", text: t("datasheets"), link: "#" },
  ];
  const resources_2 = [
    { id: "partners", text: t("partners"), link: "#" },
    { id: "customers", text: t("customers"), link: "#" },
    { id: "blog", text: t("blog"), link: "#" },
    { id: "pressroom", text: t("pressroom"), link: "#" },
    { id: "about_us", text: t("about_us"), link: "#" },
    { id: "careers", text: t("careers"), link: "#" },
    { id: "contact_us", text: t("contact_us"), link: "#" },
  ];

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <div
          onClick={toggleDropdown}
          className="inline-flex justify-start w-full focus:outline-none"
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
          className="xl:origin-top-right xl:absolute xl:right-0 xl:mt-5 p-3 xl:w-auto text-[#445265]
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none flex flex-col xl:flex-row dark:text-white dark:bg-transparent xl:dark:bg-custom-gradient dark:ring-1 xl:dark:ring-[#445265]"
          role="menu"
        >
          <div className="p-2 w-52 capitalize" role="none">
            {resources_1.map(({ id, text, link }) => (
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
          <div className="p-2 w-40 capitalize" role="none">
            {resources_2.map(({ id, text, link }) => (
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

export default ResourcesMenu;
