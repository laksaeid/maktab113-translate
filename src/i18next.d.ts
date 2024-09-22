import { companyResources, defaultNSCompany } from "./localization";

declare module "i18next" {
  export interface CustomTypeOptions {
    defaultNS: typeof defaultNSCompany;
    resources: typeof companyResources.en;
  }
}
