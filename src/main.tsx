import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Providers from "./providers/index.tsx";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <CssBaseline />
      <App />
    </Providers>
  </StrictMode>
);
