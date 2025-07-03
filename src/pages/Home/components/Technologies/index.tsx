import {
  FileJs,
  FileTs,
  FileHtml,
  FileCss,
  FileJsx,
  FileTsx,
} from "@phosphor-icons/react";
import { Card, Content, TechnologiesWrapper, CardContainer } from "./styles";

export function Technologies() {
  const span = [1, 2, 3, 4];

  return (
    <TechnologiesWrapper>
      <CardContainer>
        <Card>
          {span.map((i) => (
            <span key={i}></span>
          ))}
          <Content>
            <h2>
              <FileHtml size={32} />
              <div>HTML5</div>
            </h2>
            <p>
              Com mais de 5 anos de experiência, domino a estruturação semântica
              e as melhores práticas para acessibilidade e SEO, garantindo
              código limpo e eficiente.
            </p>
          </Content>
        </Card>
        <Card>
          {span.map((i) => (
            <span key={i}></span>
          ))}
          <Content>
            <h2>
              <FileCss size={32} />
              <div>CSS3</div>
            </h2>
            <p>
              Experiente no design de interfaces modernas, bem estruturadas,
              acessíveis e responsivas. Tendo domínio em técnicas modernas como
              flexbox, grid e animações para garantir uma boa experiência do
              usuário.
            </p>
          </Content>
        </Card>
        <Card>
          {span.map((i) => (
            <span key={i}></span>
          ))}
          <Content>
            <h2>
              <FileJs size={32} />
              <FileTs size={32} />
              <div>TypeScript</div>
            </h2>
            <p>
              Vasta experiência com JavaScript, desenvolvendo aplicações
              dinâmicas e interativas, adotei o uso do TypeScript garantindo um
              código mais seguro e escalável.
            </p>
          </Content>
        </Card>
        <Card>
          {span.map((i) => (
            <span key={i}></span>
          ))}
          <Content>
            <h2>
              <FileJsx size={32} />
              <FileTsx size={32} />
              <div>React</div>
            </h2>
            <p>
              Com sólida experiência em React, desenvolvo aplicações escaláveis
              e performáticas, utilizando hooks, context API e bibliotecas como
              Axios, React Query e entre outras.
            </p>
          </Content>
        </Card>
        <Card>
          {span.map((i) => (
            <span key={i}></span>
          ))}
          <Content>
            <h2>
              <FileJsx size={32} />
              <FileTsx size={32} />
              <div>React Native</div>
            </h2>
            <p>
              Atráves do React Native desenvolvo aplicativos móveis para Android
              e iOS, aproveitando minha experiência para criar interfaces
              nativas eficientes e responsivas.
            </p>
          </Content>
        </Card>
        <Card>
          {span.map((i) => (
            <span key={i}></span>
          ))}
          <Content>
            <h2>
              <FileJs size={32} />
              <FileTs size={32} />
              <div>Vue JS</div>
            </h2>
            <p>
              Com Vue.js construo aplicações leves e reativas, aproveitando a
              flexibilidade da Composition API e do Vuex para gerenciar estados
              de forma eficiente.
            </p>
          </Content>
        </Card>
      </CardContainer>
    </TechnologiesWrapper>
  );
}
