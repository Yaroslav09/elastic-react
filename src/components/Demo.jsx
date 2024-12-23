import React from "react";
import { useTranslation } from "react-i18next";
import HubspotForm from "./HubspotForm";

function Demo() {
  const { t } = useTranslation();

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
              <h5>In meno di 30 minuti imparerai a conoscere:</h5>
              <ul>
                <li>
                  Come puoi{" "}
                  <strong>sviluppare le tue integrazioni personalizzate</strong>
                </li>
                <li>
                  Come puoi scalarle utilizzando la nostra{" "}
                  <strong>API di gestione dell'integrazione</strong>
                </li>
                <li>
                  Come la nostra piattaforma <strong>whitelabel</strong> può
                  semplificare i processi aziendali!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
