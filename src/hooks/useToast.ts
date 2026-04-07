import { useContext } from "react";
import { ToastContext } from "../context/ContextDefinition";

export const useToast = () => useContext(ToastContext);
