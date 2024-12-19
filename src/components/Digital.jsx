import React from "react";
import { useTranslation } from "react-i18next";
import ExtensibilityImg from "../assets/img/icon-extensibility.svg";
import ElasticityImg from "../assets/img/icon-elasticity.svg";
import FutureImg from "../assets/img/icon-future-proof.svg";

function Digital() {
  const { t } = useTranslation();

  return (
    <div className="digital w-full h-full lg:h-[38rem] relative">
      <div className="container  max-w-[1200px] pt-4 mx-auto h-full flex flex-col justify-center items-center reletive">
        <div className="flex flex-col items-center justify-center">
          <h2 className="dark:text-white text-center mx-auto my-10  w-full font-open-sans text-[2rem] font-bold text-[#445265]">
            {t("digital-header")}
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center text-center w-full my-1 py-1 text-[#445265] dark:text-white">
            <div className="my-4 p-4">
              <div className="mx-auto w-[7.5rem] h-[7.5rem]">
                <img
                  className="dark:shadow-white-shadow dark:rounded-md dark:bg-white mb-2"
                  src={ExtensibilityImg}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-[2rem] font-bold my-4">
                  {t("digital-extensibility-header")}
                </h4>
                <p className="w-[93%] text-[1.2rem] my-10px">
                  {t("digital-extensibility-text")}
                </p>
              </div>
            </div>
            <div className="my-4 p-4">
              <div className="mx-auto  w-[7.5rem] h-[7.5rem] w-[7.5rem] h-[7.5rem] mb-2">
                <img
                  className="dark:shadow-white-shadow dark:rounded-md dark:bg-white"
                  src={ElasticityImg}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-[2rem] font-bold my-4">
                  {t("digital-elasticity-header")}
                </h4>
                <p className="w-[93%] text-[1.2rem] my-10px">
                  {t("digital-elasticity-text")}
                </p>
              </div>
            </div>
            <div className="my-4 p-4">
              <div className="mx-auto  w-[7.5rem] h-[7.5rem] w-[7.5rem] h-[7.5rem] mb-2">
                <img
                  className="dark:shadow-white-shadow dark:rounded-md dark:bg-white"
                  src={FutureImg}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-[2rem] font-bold my-4">
                  {t("digital-future-proof-header")}
                </h4>
                <p className="w-[93%] text-[1.2rem] my-10px">
                  {t("digital-future-proof-text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digital;
