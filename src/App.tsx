import { useTranslation } from "react-i18next";
import ChangeLanguageSwitch from "./components/ui/ChangeLanguageSwitch";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./utils/axiosInstance";

function App() {
  const { t } = useTranslation();
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => (await axiosInstance("/api/categories")).data,
  });

  return (
    <>
      {data?.data?.categories?.map(
        (category: { _id: string; name: TemplateStringsArray }) => (
          <div key={category._id}>{t(category.name)}</div>
        )
      )}
      <ChangeLanguageSwitch />
      <>{t("userName")}</>
    </>
  );
}

export default App;
