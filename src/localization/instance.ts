import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import persian from "./translations/common/pr.json";
import english from "./translations/common/en.json";

const appCompanyInstance = i18n.createInstance();
export const defaultNSCompany = "common";

export const companyResources = {
  pr: { common: persian },
  en: { common: english },
};

appCompanyInstance.use(initReactI18next).init({
  resources: companyResources,
  lng: "pr",
  fallbackLng: "en",
  react: {
    useSuspense: true,
  },
  interpolation: {
    escapeValue: false,
  },
  defaultNS: defaultNSCompany,
});

export default appCompanyInstance;
