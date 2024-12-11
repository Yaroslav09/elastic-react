import React from "react";
import { useTranslation } from "react-i18next";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { imageUrl } from "../../imageURL";

function Intro() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="intro h-[36rem] bg-[url('elastic-react/src/assets/img/intro-bg.jpg')] bg-cover bg-no-repeat border-2 border-indigo-600">
      <div className="container lg:px-2 mx-auto h-full flex flex-col justify-center items-center border-2 border-indigo-600">
        <h2>{t("intro-header")}</h2>
        <div className="flex flex-col justify-center items-center">
          <p>{t("intro-p-lage-text")}</p>
          <p>{t("intro-p-small-text")}</p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
