import {
  PortfolioWrapper,
  Container,
  CardWrapper,
  Card,
  Lines,
  Image,
  Content,
  Details,
  Button,
} from "./styles";

import { PROJECTS } from "../../../../helpers/projects";

export function Portfolio() {
  return (
    <PortfolioWrapper>
      <Container>
        <CardWrapper>
          {PROJECTS.map((p) => (
            <Card key={p.id}>
              <Lines />
              <Image>
                <img src={p.image} alt="temporary" />
              </Image>
              <Content>
                <Details>
                  <h2>{p.title}</h2>
                  <p>{p.desc}</p>
                  <Button href={p.link} target="_blank">
                    Ver Projeto
                  </Button>
                </Details>
              </Content>
            </Card>
          ))}
        </CardWrapper>
      </Container>
    </PortfolioWrapper>
  );
}
