import { ThemeProvider } from "@mui/material";
import { Rtl, theme } from "../theme";
import { CompanyAppI18nWrapper } from "../localization/provider";
import { useTranslation } from "react-i18next";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const QC = new QueryClient();
const Providers = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={QC}>
          {i18n.dir() === "ltr" ? (
            <CompanyAppI18nWrapper> {children}</CompanyAppI18nWrapper>
          ) : (
            <Rtl>
              <CompanyAppI18nWrapper>{children}</CompanyAppI18nWrapper>
            </Rtl>
          )}
          {/* </CompanyAppI18nWrapper> */}
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};

export default Providers;
