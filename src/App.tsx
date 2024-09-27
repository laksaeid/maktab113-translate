import { useTranslation } from "react-i18next";
import ChangeLanguageSwitch from "./components/ui/ChangeLanguageSwitch";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./utils/axiosInstance";
import QueryString from "qs";
import { useSearchParams } from "react-router-dom";
function App() {
  const { t } = useTranslation();
  const [params, setParams] = useSearchParams();
  const searchParams = Object.fromEntries(Array.from(params));

  const queryString = QueryString.stringify(searchParams);

  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      (await axiosInstance("/api/products" + "?" + queryString)).data,
  });
  // console.log(
  //   QueryString.stringify({
  //     sort: "asc",
  //     subCategory: "32165484",
  //   })
  // );

  return (
    <>
      {data?.data?.products?.map(
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
