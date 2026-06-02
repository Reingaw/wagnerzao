import { AnimatedButton } from "../../components/AnimatedButton";
import { Bouncingtext } from "../../components/BouncingText";
import { AnimatedBackground } from "../../components/AnimatedBackground";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Motivation } from "./components/Motivation";
import { Portfolio } from "./components/Potfolio";
import { Experience } from "./components/Experience";
import { ContactUs } from "./components/Contactus";
import { Footer } from "./components/Footer";
import { BrazilFlag, USFlag } from "../../assets/icons/flags";
import { useLanguage } from "../../hooks/useLanguage";

import { Header, HomeWrapper, ButtonWrapper } from "./styles";

export function Home() {
  const { language, setLanguage } = useLanguage();

  return (
    <>
      <Header>
        <nav>
          <button
            onClick={() => setLanguage("pt-BR")}
            className={language === "pt-BR" ? "" : "grayscale"}
          >
            <BrazilFlag />
          </button>
          <button
            onClick={() => setLanguage("en-US")}
            className={language === "en-US" ? "" : "grayscale"}
          >
            <USFlag />
          </button>
        </nav>
      </Header>
      <HomeWrapper>
        <Bouncingtext text="Frontend_Developer..." size={4} />
        <ButtonWrapper>
          <AnimatedButton text="linkedin" />
          <AnimatedButton text="github" />
        </ButtonWrapper>
        <AnimatedBackground />
      </HomeWrapper>
      <About />
      <Technologies />
      <Motivation />
      <Portfolio />
      <Experience />
      <ContactUs />
      <Footer />
    </>
  );
}
