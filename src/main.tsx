import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Providers from "./providers/index.tsx";
import { CssBaseline } from "@mui/material";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/products" element={<App />} />)
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <CssBaseline />
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>
);
