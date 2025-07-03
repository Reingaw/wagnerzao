import { AboutMe, MeImage, ImgBox, InfoBox } from "./styles";

import zaoImg from "../../../../assets/zao.jpeg";

export function About() {
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
        <p>
          Sou um profissional altamente qualificado e experiente com mais de 5
          anos de experiência na indústria de desenvolvimento. Minha formação
          acadêmica inclui uma graduação em Marketing, uma graduação em Análise
          e Desenvolvimento de Sistemas e uma pós-graduação em Business
          Intelligence e Big Data, além de Arquitetura de Software.
        </p>
        <p>
          No campo do desenvolvimento front-end, possuo expertise na utilização
          das tecnologias mais recentes, incluindo HTML, CSS3, JavaScript, React
          e Vue.js, para criar interfaces de usuário dinâmicas e responsivas.
          Minha proficiência nessas tecnologias me permite entregar experiências
          de usuário contínuas e envolventes.
        </p>
        <p>
          Embora meu foco principal seja o desenvolvimento front-end, também
          possuo habilidades substanciais em desenvolvimento back-end. Sou
          adepto em trabalhar com as plataformas de programação dotnet e
          node.js, o que me permite contribuir para projetos de desenvolvimento
          full-stack e colaborar efetivamente com equipes multifuncionais.
        </p>
      </div>
    </AboutMe>
  );
}
