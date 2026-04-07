import { useMemo, useState } from "react";
import { ToastContext } from "./ContextDefinition";

export const ToastProvider = ({ children }: ChildrenType) => {
  const [toastData, setToastData] = useState<ToastProps>({
    message: "",
    type: "info",
  });

  const [hidden, setHidden] = useState(true);

  const obj = useMemo(
    () => ({ toastData, setToastData, hidden, setHidden }),
    [toastData, setToastData, hidden, setHidden],
  );

  return <ToastContext.Provider value={obj}>{children}</ToastContext.Provider>;
};
