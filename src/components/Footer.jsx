import React from "react";
import { useTranslation } from "react-i18next";
import ElasticLogo from "../assets/img/elasticI_Logo.svg";
import CloudServiceLogo from "../assets/img/cloud@2x.webp";
import GermanBusinesClouLogo from "../assets/img/businesscloud@2x.webp";
import BitKomLogo from "../assets/img/bitkom.webp";

const Footer = () => {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <footer className="bg-gray-50 dark:bg-transparent">
      {/* Footer 1 */}
      <div className="py-24">
        <div className="container max-w-[1200px]  mx-auto h-full px-4">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-x-4 gap-y-12 xl:gap-y-0 text-left text-gray-700 dark:text-white">
            {/* Portfolio Section */}
            <div className="w-auto px-4 xl:p-0 xl:pr-4">
              <p className="font-bold text-lg mb-6">{t("footer-portfolio")}</p>
              <dl className="space-y-3">
                <dd>
                  <a
                    href="https://www.elastic.io/connectors/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-connectors")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/cloud-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-solutions")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/customers/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-customers")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/integration-partner-program/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-partners")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/plans/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-pricing")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/resources/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-resources")}
                  </a>
                </dd>
              </dl>
            </div>

            {/* Connector Pairings Section */}
            <div className="w-auto px-4">
              <p className="font-bold text-lg mb-6">
                {t("footer-connectors-pairs")}
              </p>
              <dl className="space-y-3">
                <dd>
                  <a
                    href="https://www.elastic.io/netsuite-integration-with-salesforce/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-netsuite-salesforce")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/integrate-sap-with-salesforce/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-sap-salesforce")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/sap-bydesign-salesforce-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-bydesign-salesforce")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/quickbooks-online-salesforce-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-quickbooks-salesforce")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/shopify-netsuite-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-shopify-netsuite")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/shopware-netsuite-integration/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-shopware-netsuite")}
                  </a>
                </dd>
              </dl>
            </div>

            {/* Industries and Documentation */}
            <div className="w-auto px-4">
              <div>
                <p className="font-bold text-lg mb-6">
                  {t("footer-industries")}
                </p>
                <dl className="space-y-3">
                  <dd>
                    <a
                      href="https://www.elastic.io/ipaas-for-telecommunications/"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("footer-telecommunications")}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://www.elastic.io/ipaas-for-technology-companies-cloud-integration-tools/"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("footer-technology")}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://www.elastic.io/ipaas-omni-channel-retail/"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("footer-retail")}
                    </a>
                  </dd>
                </dl>
              </div>
              <div className="mt-10">
                <p className="font-bold text-lg mb-6">
                  {t("footer-documentation")}
                </p>
                <dl className="space-y-3">
                  <dd>
                    <a
                      href="https://docs.elastic.io/getting-started/first-flow.html"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("footer-integration-designer")}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://docs.elastic.io/references/"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("footer-component-reference")}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://api.elastic.io/docs/v2/"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("footer-rest-api")}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://docs.elastic.io/developers/sdk.html"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("footer-sdk")}
                    </a>
                  </dd>
                  <dd>
                    <a
                      href="https://docs.elastic.io/"
                      target="_blank"
                      className="hover:underline"
                    >
                      {t("footer-support")}
                    </a>
                  </dd>
                </dl>
              </div>
            </div>

            {/* Elastic.io Section */}
            <div className="w-auto px-4">
              <p className="font-bold text-lg mb-6">{t("footer-elastic-io")}</p>
              <dl className="space-y-3">
                <dd>
                  <a
                    href="https://www.elastic.io/blog/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-blog")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/pressroom/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-pressroom")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/team/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-about-us")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/career/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-careers")}
                  </a>
                </dd>
                <dd>
                  <a
                    href="https://www.elastic.io/contact/"
                    target="_blank"
                    className="hover:underline"
                  >
                    {t("footer-contact-us")}
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
        <div className="container max-w-[1200px] mx-auto px-4 text-center text-gray-500 dark:text-white">
          <p className="text-[15px] leading-relaxed">{t("footer2-content")}</p>

          <ul className="flex flex-wrap justify-center items-center space-x-4 text-sm mt-4">
            <li>
              <a
                href="https://www.elastic.io/legal-disclosure/"
                target="_blank"
                className="hover:underline uppercase"
              >
                {t("footer2-legal-disclosure")}
              </a>
            </li>
            <li>
              <a
                href="https://www.elastic.io/privacy-policy/"
                target="_blank"
                className="hover:underline uppercase"
              >
                {t("footer2-privacy-policy")}
              </a>
            </li>
            <li>
              <a
                href="https://www.elastic.io/tou/"
                target="_blank"
                className="hover:underline uppercase"
              >
                {t("footer2-terms-of-use")}
              </a>
            </li>
            <li>
              <a
                href="https://www.elastic.io/contact/"
                target="_blank"
                className="hover:underline uppercase"
              >
                {t("footer2-contact")}
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
