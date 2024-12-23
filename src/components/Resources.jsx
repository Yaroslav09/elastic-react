import React from "react";
import { useTranslation } from "react-i18next";

function Resources() {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full h-full hl:h-[42rem] py-8 relative">
      <div className="container  max-w-[1200px] pt-4 mx-auto h-full flex flex-col justify-center items-center reletive">
        <div className=" w-full flex flex-col items-center justify-center text-[#445265] dark:text-white">
          <h2 className="dark:text-white text-center mx-auto my-10  w-full font-open-sans text-[2rem] font-bold">
            {t("resources-header")}
          </h2>
          <div className="resources-content flex flex-row flex-wrap justify-center items-center w-full gap-12">
            <div className="flex flex-col justify-center items-start text-start border-2 border-[#cfe4fa] h-[22rem] w-[23rem]  p-2 sm:p-7 mx-4 sm:mx-0">
              <div>
                <h4 className="text-2xl">
                  {t("card-cloud-integration-header")}
                </h4>
                <p className="my-8 text-lg">
                  {t("card-cloud-integration-text")}
                </p>
              </div>
              <div className="text-[#ed4b23]">
                <a
                  href="https://www.elastic.io/cloud-integration/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("card-cloud-integration-link")}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start text-start border-2 border-[#cfe4fa] h-[22rem] w-[23rem] p-2 sm:p-7 mx-4 sm:mx-0">
              <div>
                <h4 className="text-2xl">
                  {t("card-hybrid-integration-header")}
                </h4>
                <p className="my-8 text-lg">
                  {t("card-hybrid-integration-text")}
                </p>
              </div>
              <div className="text-[#ed4b23]">
                <a
                  href="https://www.elastic.io/hybrid-integration/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("card-hybrid-integration-link")}
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start text-start border-2 border-[#cfe4fa] h-[22rem] w-[23rem] p-2 sm:p-7 mx-4 sm:mx-0">
              <div>
                <h4 className="text-2xl">{t("card-api-integration-header")}</h4>
                <p className="my-8 text-lg">{t("card-api-integration-text")}</p>
              </div>
              <div className="text-[#ed4b23]">
                <a
                  href="https://www.elastic.io/api-integration-platform/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("card-api-integration-link")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
