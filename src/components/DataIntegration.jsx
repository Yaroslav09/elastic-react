import React from "react";
import { useTranslation } from "react-i18next";
import FlowImg from "../assets/img/flows-1.webp";
import FasterImg from "../assets/img/80-faster-2.png";
import ConnectorsImg from "../assets/img/connectors-1.png";

function DataIntegration() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="enterprise w-full h-[30rem] relative">
      <div className="container  max-w-[1200px] pt-4 mx-auto h-full flex flex-col justify-center items-center">
        <h2 className="dark:text-white text-center mx-auto my-7  w-full font-open-sans text-3xl font-bold text-[#445265]">
          {t("data-integration-header")}
        </h2>
        <div className="flex flex-row justify-center items-center w-full my-1 py-1 text-[#445265] dark:text-white">
          <div className="flex flex-col justify-center items-center basis-1/3">
            <div className="flex justify-center items-center w-[7.5rem] h-[7.5rem] text-center">
              <img className="h-[81px]" src={FlowImg} />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h4 className="text-[2rem] font-bold">6 500 000</h4>
              <p className="text-xl w-[74%] m-2.5 mx-auto">{t("flow-text")}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center basis-1/3">
            <div className="flex justify-center items-center w-[7.5rem] h-[7.5rem] text-center">
              <img className="h-[81px]" src={FasterImg} />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h4 className="text-[2rem] font-bold">80%</h4>
              <p className="text-xl w-[74%] m-2.5 mx-auto">
                {t("faster-text")}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center basis-1/3">
            <div className="flex justify-center items-center w-[7.5rem] h-[7.5rem] text-center">
              <img className="h-[34px]" src={ConnectorsImg} />
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <h4 className="text-[2rem] font-bold">100+</h4>
              <p className="text-xl w-[74%] m-2.5 mx-auto">
                {t("connectors-text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataIntegration;
