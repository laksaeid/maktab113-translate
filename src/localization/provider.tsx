import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import companyAppInstance from "./instance";

export const CompanyAppI18nWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <I18nextProvider i18n={companyAppInstance}>{children}</I18nextProvider>
  );
};
