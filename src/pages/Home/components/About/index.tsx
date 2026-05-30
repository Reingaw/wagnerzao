import { useLanguage } from "../../../../hooks/useLanguage";
import { texts } from "../../../../helpers/language";
import { AboutMe, MeImage, ImgBox, InfoBox } from "./styles";

import zaoImg from "../../../../assets/zao.jpeg";

export function About() {
  const { language } = useLanguage();

  return (
    <AboutMe>
      <MeImage>
        <ImgBox>
          <img src={zaoImg} alt="Wagner" />
        </ImgBox>
        <InfoBox>
          <h2>Wagner Andrade</h2>
        </InfoBox>
      </MeImage>
      <div>
        <p>{texts[language][0]}</p>
        <p>{texts[language][1]}</p>
        <p>{texts[language][2]}</p>
      </div>
    </AboutMe>
  );
}
