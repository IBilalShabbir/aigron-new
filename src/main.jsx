import React from "react";
import { createRoot } from "react-dom/client";
import LanguageContextProvider from "./context/languageContext";
import Router from "./Router";

createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <Router />
  </LanguageContextProvider>
);
