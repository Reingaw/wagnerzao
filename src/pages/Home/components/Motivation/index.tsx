import { useCallback, useEffect, useRef } from "react";
import { useLanguage } from "../../../../hooks/useLanguage";
import { texts } from "../../../../helpers/language";
import { Content, Rocket, Scene, Text } from "./styles";

import RocketImg from "../../../../assets/rocket.png";

export function Motivation() {
  const { language } = useLanguage();
  const scene = useRef<HTMLDivElement>(null);

  const stars = useCallback(() => {
    const count = 50;
    let i = 0;
    while (i < count) {
      const star = document.createElement("i");
      const x = Math.floor(Math.random() * window.innerWidth);

      const duration = Math.random() * 1;
      const h = Math.random() * 100;

      star.style.left = `${x}px`;
      star.style.width = `${1}px`;
      star.style.height = `${50 + h}px`;
      star.style.animationDuration = `${duration}s`;

      if (!scene.current) return;
      scene.current.appendChild(star);
      i++;
    }
  }, [scene]);

  useEffect(() => {
    stars();
  }, [stars]);

  return (
    <Scene ref={scene}>
      <Content>
        <Rocket>
          <img src={RocketImg} alt="rocket_3D" />
        </Rocket>
        <Text>
          <p>{texts[language][9]}</p>
          <p>{texts[language][10]}</p>
          <p>{texts[language][11]}</p>
        </Text>
      </Content>
    </Scene>
  );
}
