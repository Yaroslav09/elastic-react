// import "./App.css";
// import { useTranslation } from "react-i18next";
// import LanguageSelector from "./components/language-selector";

// function App() {
//   const { t } = useTranslation("header");
//   // const { ipaas, enterprise_integration, saas_embedded_integration } =
//   //   t("products");

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//   };

//   return (
//     <>
//       <div>
//         <LanguageSelector />
//         <h1 className="bg-blue-400 text-white text-lg">{t("products")}</h1>
//         <h2>{t("ipaas")}</h2>
//         <h2>{t("enterprise_integration")}</h2>
//         <h2>{t("saas_embedded_integration")}</h2>
//       </div>
//     </>
//   );
// }

// export default App;

import React from "react";
import Navbar from "./components/header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
