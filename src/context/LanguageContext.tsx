import { useMemo, useState } from "react";
import { LanguageContext } from "./ContextDefinition";

export const LanguageProvider = ({ children }: ChildrenType) => {
  const [language, setLanguage] = useState<LanguageType>("pt-BR");

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
