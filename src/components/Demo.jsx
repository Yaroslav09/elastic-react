import React from "react";
import { useTranslation } from "react-i18next";
import HubspotForm from "./HubspotForm";

function Demo() {
  const { t } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="w-full h-full h-full hl:h-[42rem] py-8 relative bg-[#455263] dark:bg-transparent">
      <div className="container  max-w-[1200px] pt-4 mx-auto h-full flex flex-col justify-center items-center reletive">
        <div className=" w-full flex flex-col items-center justify-center text-white">
          <h2 className="dark:text-white text-center mx-auto my-10  w-full font-open-sans text-[2rem] font-bold">
            {t("demo-header")}
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full gap-12">
            <div className="w-full md:w-[60%] p-4">
              <HubspotForm />
            </div>
            <div className="w-full md:w-[38%] p-4">
              <h5 className="text-2xl lg:w-[66%] px-4">
                {t("demo-30-minutes-header-list")}
              </h5>
              <ul className="text-base mt-4 lg:w-[66%] px-4">
                <li className="mb-4 list-disc">{t("demo-list-item-1")}</li>
                <li className="mb-4 list-disc">{t("demo-list-item-2")}</li>
                <li className="list-disc">{t("demo-list-item-3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
