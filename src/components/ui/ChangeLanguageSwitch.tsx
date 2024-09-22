import { Switch } from "@mui/material";
import { ChangeEvent } from "react";
import appCompanyInstance from "../../localization/instance";

const ChangeLanguageSwitch = () => {
  const changeLng = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      appCompanyInstance.changeLanguage("en");
      document.documentElement.setAttribute("dir", "ltr");
    } else {
      appCompanyInstance.changeLanguage("pr");
      document.documentElement.setAttribute("dir", "rtl");
    }
  };
  return <Switch onChange={(e) => changeLng(e)} />;
};

export default ChangeLanguageSwitch;
