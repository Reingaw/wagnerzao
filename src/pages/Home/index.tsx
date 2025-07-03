import { AnimatedButton } from "../../components/AnimatedButton";
import { Bouncingtext } from "../../components/BouncingText";
import { AnimatedBackground } from "../../components/AnimatedBackground";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Motivation } from "./components/Motivation";
import { Portfolio } from "./components/Potfolio";
import { Experience } from "./components/Experience";
import { ContactUs } from "./components/Contactus";
import { HomeWrapper, ButtonWrapper } from "./styles";
import { Footer } from "./components/Footer";

export function Home() {
  return (
    <>
      <HomeWrapper>
        <Bouncingtext text="Frontend_Developer..." />
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
