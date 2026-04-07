import { useEffect, useRef } from "react";
import { useToast } from "../../hooks/useToast";
import {
  InfoIcon,
  ErrorIcon,
  SuccessIcon,
} from "../../assets/icons/toastIcons";
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
            {type === "success" && <SuccessIcon />}
            {type === "error" && <ErrorIcon />}
            {type === "info" && <InfoIcon />}
          </span>
          <span>{message}</span>
          <ToastProgress ref={toastProgressRef} />
        </ToastContent>
      )}
    </ToastContainer>
  );
};
