import { useRef, useState } from "react";
import { AnimatedButton } from "../../components/AnimatedButton";
import { CopyBtn } from "../../assets/icons/copyBtn.tsx";
import { ClearBtn } from "../../assets/icons/clearBtn.tsx";
import { syntaxHighlight } from "../../helpers/json-formatter";
import { useToast } from "../../hooks/useToast.ts";
import { AdSense } from "../../components/Adsense";
import { pub } from "../../helpers/keys.ts";
import {
  JsonFormatterContainer,
  JsonFormatterInputWrapper,
  JsonFormatterLogo,
  JsonFormatterInput,
  JsonFormatterControls,
  JsonFormatterOutputContainer,
  JsonFormatterOutputHeader,
  ActionsButtons,
  JsonFormatterOutput,
  AdsenseArea,
} from "./styles";

import Logo from "../../assets/json_formatter.svg";
4;

export const JsonFormatter = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const { setToastData } = useToast();

  const copyBtn = useRef<HTMLButtonElement>(null);

  const processJSON = (minify = false) => {
    const rawValue = inputValue.trim();
    if (!rawValue) {
      setToastData({
        message: "O campo deve conter um JSON válido!",
        type: "info",
      });
      return;
    }

    try {
      const jsonObj = JSON.parse(rawValue);
      const jsonString = minify
        ? JSON.stringify(jsonObj)
        : JSON.stringify(jsonObj, null, 4);

      setOutputValue(minify ? jsonString : syntaxHighlight(jsonString));

      setToastData({
        message: "JSON formatado com sucesso!",
        type: "success",
      });
    } catch (e) {
      console.error("Invalid JSON:", e);
      setToastData({
        message: "Erro: JSON inválido para formatação.",
        type: "error",
      });
    }
  };

  const copyToClipboard = async () => {
    const text = outputValue.replace(/<span class="[^"]+">|<\/span>/g, "");

    try {
      await navigator.clipboard.writeText(text);

      // Feedback visual simples: muda a cor do botão temporariamente
      const originalColor = copyBtn.current?.style.color;
      copyBtn.current?.style.setProperty("color", "#a6e22e");

      setToastData({
        message: "JSON copiado para a área de transferência!",
        type: "success",
      });

      setTimeout(() => {
        copyBtn.current?.style.setProperty("color", originalColor || "");
      }, 1500);
    } catch (err) {
      console.error("Falha ao copiar: ", err);
    }
  };
  return (
    <JsonFormatterContainer>
      <AdsenseArea>
        <AdSense dataAdClient={pub} dataAdSlot="8491314864" />
      </AdsenseArea>
      <JsonFormatterLogo>
        <img src={Logo} alt="json_formatter_logo" />
      </JsonFormatterLogo>
      <JsonFormatterInputWrapper>
        <JsonFormatterInput
          placeholder="Cole seu JSON aqui..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue && (
          <button onClick={() => setInputValue("")}>
            <ClearBtn />
          </button>
        )}
      </JsonFormatterInputWrapper>
      <JsonFormatterControls>
        <AnimatedButton text="Formatar" onClick={() => processJSON()} />
        <AnimatedButton text="Minificar" onClick={() => processJSON(true)} />
      </JsonFormatterControls>
      <JsonFormatterOutputContainer>
        <JsonFormatterOutputHeader>
          Resultado
          <ActionsButtons>
            <button ref={copyBtn} onClick={copyToClipboard}>
              <CopyBtn />
            </button>
            <button onClick={() => setOutputValue("")}>
              <ClearBtn />
            </button>
          </ActionsButtons>
        </JsonFormatterOutputHeader>
        <JsonFormatterOutput
          dangerouslySetInnerHTML={{ __html: outputValue }}
        />
      </JsonFormatterOutputContainer>
      <AdsenseArea>
        <AdSense dataAdClient={pub} dataAdSlot="9883018665" />
      </AdsenseArea>
    </JsonFormatterContainer>
  );
};
