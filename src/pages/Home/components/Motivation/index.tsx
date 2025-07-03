import { useCallback, useEffect, useRef } from "react";
import { Content, Rocket, Scene, Text } from "./styles";

import RocketImg from "../../../../assets/rocket.png";

export function Motivation() {
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
          <p>
            Ao longo da minha trajetória profissional, sempre enxerguei o
            desenvolvimento de software como uma jornada contínua de
            descobertas. Em um universo tecnológico que está em constante
            expansão, acredito que a busca por conhecimento e inovação é
            essencial.
          </p>
          <p>
            Cada nova tecnologia que aprendo, cada desafio que enfrento,
            representa para mim a descoberta de uma nova galáxia: cheia de
            possibilidades, complexidade e oportunidades para evoluir. É por
            isso que faço do lifelong learning um pilar da minha carreira.
          </p>
          <p>
            Assim como exploradores do universo, profissionais de tecnologia
            precisam estar em constante movimento, se adaptando, aprendendo e
            ultrapassando seus próprios limites. Essa mentalidade me permite
            entregar soluções cada vez mais eficazes, modernas e alinhadas às
            demandas de um mercado em transformação.
          </p>
        </Text>
      </Content>
    </Scene>
  );
}
