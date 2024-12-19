import React from "react";
import { useTranslation } from "react-i18next";

function Intro() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="intro w-full h-full sm:h-[36rem] dark:bg-none bg-[url('./assets/intro-bg.jpg')] bg-cover bg-no-repeat ">
      <div className="container  max-w-[1200px] px-2 mx-auto h-full flex flex-col justify-center items-center">
        <h2 className="dark:text-white text-center mx-auto sm:my-4 w-[90%] xl:w-[80%] font-open-sans text-3xl sm:text-[3rem] md:text-[3.5rem] font-bold leading-normal lg:leading-[4rem] text-[#445265] lg:h-[100px]">
          {t("intro-header")}
        </h2>
        <div className="flex flex-col justify-center items-center my-2 py-2 lg:my-6 lg:py-6">
          <p className="dark:text-white text-center mx-auto w-[94%] lg;w-3/5 text-[#879db5] text-2xl md:text-3xl my-2">
            {t("intro-p-lage-text")}
          </p>
          <p className="dark:text-white text-center mx-auto w-[94%] lg:w-[55%] text-[#879db5] text-lg my-2 py-2">
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
