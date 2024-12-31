import React from "react";
// import { useTranslation } from "react-i18next";
import ElasticLogo from "../assets/img/elasticI_Logo.svg";
import CloudServiceLogo from "../assets/img/cloud@2x.webp";
import GermanBusinesClouLogo from "../assets/img/businesscloud@2x.webp";
import BitKomLogo from "../assets/img/bitkom.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-transparent">
      {/* Footer 1 */}
      <div className="py-24">
        <div className="container max-w-[1200px]  mx-auto h-full px-4">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-x-4 gap-y-12 xl:gap-y-0 text-left text-gray-700 dark:text-white">
            {/* Portfolio Section */}
            <div className="w-auto px-4 xl:p-0 xl:pr-4">
              <p className="font-bold text-lg mb-6">PORTFOLIO</p>
              <dl className="space-y-3">
                <dd>
                  <a
                    href="https://www.elastic.io/connectors/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Connettori
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/cloud-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Soluzioni
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/customers/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Clienti
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/integration-partner-program/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Partner
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/plans/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Prezzi
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/resources/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Risorse
                  </a>
                </dd>
              </dl>
            </div>

            {/* Connector Pairings Section */}
            <div className="w-auto px-4">
              <p className="font-bold text-lg mb-6">
                ACCOPPIAMENTI CON CONNETTORI
              </p>
              <dl className="space-y-3">
                <dd>
                  <a
                    href="https://www.elastic.io/netsuite-integration-with-salesforce/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Integrazione NetSuite Salesforce
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/integrate-sap-with-salesforce/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Integrazione SAP Salesforce
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/sap-bydesign-salesforce-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Integrazione Salesforce by design
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/quickbooks-online-salesforce-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Integrazione Quickbooks Salesforce
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/shopify-netsuite-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Integrazione Shopify NetSuite
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/shopware-netsuite-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Integrazione Shopware NetSuite
                  </a>
                </dd>
              </dl>
            </div>

            {/* Industries and Documentation */}
            <div className="w-auto px-4">
              <div>
                <p className="font-bold text-lg mb-6">LE INDUSTRIE</p>
                <dl className="space-y-3">
                  <dd>
                    <a
                      href="https://www.elastic.io/ipaas-for-telecommunications/"
                      target="_blank"
                      className="hover:underline"
                    >
                      Telecomunicazioni
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://www.elastic.io/ipaas-for-technology-companies-cloud-integration-tools/"
                      target="_blank"
                      className="hover:underline"
                    >
                      ICT
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://www.elastic.io/ipaas-omni-channel-retail/"
                      target="_blank"
                      className="hover:underline"
                    >
                      Retail
                    </a>
                  </dd>
                </dl>
              </div>
              <div className="mt-10">
                <p className="font-bold text-lg mb-6">DOCUMENTAZIONE</p>
                <dl className="space-y-3">
                  <dd>
                    <a
                      href="https://docs.elastic.io/getting-started/first-flow.html"
                      target="_blank"
                      className="hover:underline"
                    >
                      Integration Designer
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://docs.elastic.io/references/"
                      target="_blank"
                      className="hover:underline"
                    >
                      Component Reference
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://api.elastic.io/docs/v2/"
                      target="_blank"
                      className="hover:underline"
                    >
                      API REST
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://docs.elastic.io/developers/sdk.html"
                      target="_blank"
                      className="hover:underline"
                    >
                      SDK
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://docs.elastic.io/"
                      target="_blank"
                      className="hover:underline"
                    >
                      Supporto
                    </a>
                  </dd>
                </dl>
              </div>
            </div>

            {/* Elastic.io Section */}
            <div className="w-auto px-4">
              <p className="font-bold text-lg mb-6">ELASTIC.IO</p>
              <dl className="space-y-3">
                <dd>
                  <a
                    href="https://www.elastic.io/blog/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Blog
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/pressroom/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Sala stampa
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/team/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Chi siamo
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/career/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Carriere
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/contact/"
                    target="_blank"
                    className="hover:underline"
                  >
                    Contattaci
                  </a>
                </dd>
              </dl>
            </div>

            {/* Logo Section */}
            <div className="w-auto px-4 xl:px-0 xl:pl-4 flex flex-col items-start md:items-center">
              <img
                src={ElasticLogo}
                alt="Elastic.io Logo"
                className="h-8 mb-4"
              />
              <span>© 2024</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer 2 */}
      <div className="border-t border-gray-300 py-12">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-white">
          <p className="text-sm leading-relaxed">
            Chi è elastic.io: elastic.io è una realtà innovativa nata nel cloud
            ed esperta in soluzioni di integrazione cloud in Europa. La
            piattaforma di integrazione ibrida dell’azienda, fornita nella
            modalità “as-a-service” (iPaaS) offre agli utenti una gamma completa
            di strumenti e tecnologie per connettere facilmente diverse
            tipologie di software nella modalità cloud-to-cloud e
            cloud-to-ground, con un importante risparmio economico e di tempo.
          </p>

          <ul className="flex flex-wrap justify-center items-center space-x-4 text-sm mt-4">
            <li>
              <a
                href="https://www.elastic.io/legal-disclosure/"
                target="_blank"
                className="hover:underline"
              >
                INFORMAZIONI LEGALI
              </a>
            </li>
            <li>
              <a
                href="https://www.elastic.io/privacy-policy/"
                target="_blank"
                className="hover:underline"
              >
                INFORMATIVA SULLA PRIVACY
              </a>
            </li>
            <li>
              <a
                href="https://www.elastic.io/tou/"
                target="_blank"
                className="hover:underline"
              >
                TERMINI E CONDIZIONI D'USO
              </a>
            </li>
            <li>
              <a
                href="https://www.elastic.io/contact/"
                target="_blank"
                className="hover:underline"
              >
                CONTATTI
              </a>
            </li>
          </ul>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-6">
            <a
              href="https://www.cloud-services-made-in-germany.de/"
              target="_blank"
            >
              <img
                src={CloudServiceLogo}
                alt="Cloud Services Logo"
                className="h-12"
              />
            </a>
            <a
              href="https://store.basaas.com/app-store/app/elastic-io"
              target="_blank"
            >
              <img
                src={GermanBusinesClouLogo}
                alt="Business Cloud Logo"
                className="h-12"
              />
            </a>
            <a href="https://www.bitkom.org/" target="_blank">
              <img src={BitKomLogo} alt="Bitkom Logo" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
