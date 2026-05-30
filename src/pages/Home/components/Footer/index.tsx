import { useLanguage } from "../../../../hooks/useLanguage";
import { WavyFooter } from "./styles";

export function Footer() {
  const { language } = useLanguage();
  return (
    <WavyFooter>
      {language === "pt-BR" ? (
        <p>Feito com 💜 por Wagner Andrade</p>
      ) : (
        <p>Made with 💜 by Wagner Andrade</p>
      )}
    </WavyFooter>
  );
}
