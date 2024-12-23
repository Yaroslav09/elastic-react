import React, { useEffect } from "react";

const HubspotForm = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="//js-eu1.hsforms.net/forms/v2.js"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "//js-eu1.hsforms.net/forms/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: "eu1",
            portalId: "25103088",
            formId: "327cf4c4-90df-4e58-bde0-80280f74decf",
            target: "#hubspot-form-container",
          });
        }
      };

      document.body.appendChild(script);
    } else {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "25103088",
          formId: "327cf4c4-90df-4e58-bde0-80280f74decf",
          target: "#hubspot-form-container",
        });
      }
    }
  }, []);

  return <div id="hubspot-form-container"></div>;
};

export default HubspotForm;
