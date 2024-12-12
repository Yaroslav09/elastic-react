import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "En" },
  { code: "it", lang: "It" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="btn-container flex">
      {languages.map((lng) => {
        return (
          <button
            className={`${lng.code === i18n.language ? "selected" : ""} py-2 px-3 mx-2 bg-gray-200 rounded-full dark:bg-gray-800 shadow-lg transition-all duration-300`}
            // {lng.code === i18n.language ? "selected" : ""}

            key={lng.code}
            onClick={() => changeLanguage(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};
export default LanguageSelector;
