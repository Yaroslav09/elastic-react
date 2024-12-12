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
    <div className="intro w-full h-[36rem] dark:bg-none bg-[url('elastic-react/src/assets/img/intro-bg.jpg')] bg-cover bg-no-repeat ">
      <div className="container  max-w-[1200px] px-2 mx-auto h-full flex flex-col justify-center items-center">
        <h2 className="dark:text-white text-center mx-auto my-4  w-[80%] font-open-sans text-[3.5rem] font-bold leading-[4rem] text-[#445265] h-[100px]">
          {t("intro-header")}
        </h2>
        <div className="flex flex-col justify-center items-center my-6 py-6">
          <p className="dark:text-white text-center mx-auto w-3/5 text-[#879db5] text-3xl my-2">
            {t("intro-p-lage-text")}
          </p>
          <p className="dark:text-white text-center mx-auto w-[55%] text-[#879db5] text-lg my-2 py-2">
            {t("intro-p-small-text")}
          </p>
        </div>
        <button className="w-[330px] h-[60px] rounded-full mb-2 text-xl bg-[#ed4b23] shadow-[0em_0.05em_1.25em_0.15em_rgb(237,75,35)] font-inherit font-semibold leading-[1.6] text-white border-none mt-4">
          <a href="#online-demo">{t("intro-demo-button")}</a>
        </button>
      </div>
    </div>
  );
}

export default Intro;
