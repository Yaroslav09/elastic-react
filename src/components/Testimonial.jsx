import React from "react";
import { useTranslation } from "react-i18next";
import QuotesImg from "../assets/img/quotes.png";

function Testimonial() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full h-[22rem] dark:h-[38rem] relative bg-[#f4f9fe] dark:bg-transparent ">
      <div className="container  max-w-[1200px]  mx-auto h-full flex flex-col justify-center items-center text-center">
        <div className="dark:h-[30rem] dark:w-[39rem] dark:bg-[#ED4B23] dark:rotate-[7deg]">
          <div className="dark:h-[30rem] dark:w-[38rem] dark:bg-white dark:rotate-[-7deg] text-[#455263] font-normal dark:text-[#003554] dark:font-bold dark:flex flex-col justify-center items-center">
            <p className="relative px-12 mb-4 dark:mb-12">
              <img
                src={QuotesImg}
                className="inline absolute top-[-1.5rem] left-0 dark:hidden"
              />
              <span className="text-[2rem] dark:text-2xl dark:leading-9  italic leading-[40px]">
                {t("testimonial-text")}
              </span>
            </p>
            <p className="text-2xl">{t("testimonial-author")}</p>
            <p className="text-2xl my-2">{t("testimonial-role")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
