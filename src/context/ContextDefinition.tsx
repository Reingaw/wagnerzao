import { createContext } from "react";

export const ToastContext = createContext<ToastContextProps>(
  {} as ToastContextProps,
);
