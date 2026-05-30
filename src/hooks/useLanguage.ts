import { useContext } from "react";
import { LanguageContext } from "../context/ContextDefinition";

export const useLanguage = () => useContext(LanguageContext);
