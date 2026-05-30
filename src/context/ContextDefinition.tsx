import { createContext } from "react";

export const ToastContext = createContext<ToastContextProps>(
  {} as ToastContextProps,
);

export const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps,
);
