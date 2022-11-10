import React, { useContext } from "react";

const LanguageContext = React.createContext();

export const useLanguageContext = () => useContext(LanguageContext);

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = React.useState("en");

  return (
    <LanguageContext.Provider value={[language, setLanguage]}>
      {children}
    </LanguageContext.Provider>
  );
}
