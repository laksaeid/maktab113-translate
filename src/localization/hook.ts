import companyAppInstance from "./instance";

export const useSwitchCompanyLanguage = () => {
  return (languageId: string) => companyAppInstance.changeLanguage(languageId);
};
