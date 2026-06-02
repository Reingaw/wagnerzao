import { useEffect, useRef } from "react";
import { useToast } from "../../hooks/useToast";
import { Info, CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { ToastContainer, ToastContent, ToastProgress } from "./styles";

export const Toast: React.FC<ToastProps> = () => {
  const { toastData, setToastData, hidden, setHidden } = useToast();
  const { message, type } = toastData;

  const toastContentRef = useRef<HTMLDivElement>(null);
  const toastProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message !== "") {
      setHidden(false);
    }

    if (toastContentRef.current) {
    }

    if (toastProgressRef.current) {
      toastProgressRef.current.addEventListener("animationend", () => {
        setHidden(true);
      });
    }

    if (toastContentRef.current) {
      toastContentRef.current.addEventListener("animationend", (e) => {
        if (e.animationName === "slideOut") {
          setToastData({
            message: "",
            type: "info",
          });
        }
      });
    }
  }, [message, setHidden, toastProgressRef]);

  return (
    <ToastContainer>
      {message !== "" && (
        <ToastContent
          className={hidden ? "hide" : ""}
          ref={toastContentRef}
          data-type={type}
        >
          <span>
            {type === "success" && <CheckCircle size={32} />}
            {type === "error" && <WarningCircle size={32} />}
            {type === "info" && <Info size={32} />}
          </span>
          <span>{message}</span>
          <ToastProgress ref={toastProgressRef} />
        </ToastContent>
      )}
    </ToastContainer>
  );
};
