import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ReactNode } from "react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";
export const theme = createTheme({});

export const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export function Rtl({ children }: { children: ReactNode }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
