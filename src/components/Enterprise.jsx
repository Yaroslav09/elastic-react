import React from "react";
import { useTranslation } from "react-i18next";
import EnterpriseImg from "../assets/enterprise-integration.svg";

function Enterprise() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="enterprise w-full h-full md:h-[48rem] relative">
      <div className="container  max-w-[1200px] pt-4 mx-auto h-full flex flex-col justify-center items-center text-center">
        <h2 className="dark:text-white text-center mx-auto mt-4 sm:mt-7  w-[94%] md;w-[80%] font-open-sans text-3xl font-bold sm:leading-[4rem] text-[#445265]">
          {t("enterprise-integration-header")}
        </h2>
        <div className="flex flex-col justify-center items-center w- [96] md:w-[80%] my-4sm:my-6 py-6 px-4 lg:px-12">
          <p className="dark:text-white text-center mx-auto w-full text-[#879db5] text-lg my-2 md:w-[80%]  ">
            {t("enterprise-integration-text")}
          </p>
          <div>
            <a href="/enterprise-integration-platform/">
              <img
                className="max-h-[22rem] mx-auto my-6 p-4 sm:my-10 block w-auto h-full"
                src={EnterpriseImg}
                alt="elastic.io iPaaS Platform for Enterprise Integration"
              />
            </a>
          </div>
          <div>
            <strong>
              <a
                className="text-base font-semibold text-[#e64e39]"
                href="https://www.elastic.io/enterprise-integration-platform/"
              >
                {t("enterprise-integration-link")}
              </a>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enterprise;
