import {
  FileJs,
  FileTs,
  FileHtml,
  FileCss,
  FileJsx,
  FileTsx,
} from "@phosphor-icons/react";
import { useLanguage } from "../../../../hooks/useLanguage";
import { texts } from "../../../../helpers/language";
import { Card, Content, TechnologiesWrapper, CardContainer } from "./styles";

export function Technologies() {
  const { language } = useLanguage();
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
            <p>{texts[language][3]}</p>
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
            <p>{texts[language][4]}</p>
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
            <p>{texts[language][5]}</p>
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
            <p>{texts[language][6]}</p>
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
            <p>{texts[language][7]}</p>
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
            <p>{texts[language][8]}</p>
          </Content>
        </Card>
      </CardContainer>
    </TechnologiesWrapper>
  );
}
