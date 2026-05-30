import { useLanguage } from "../../../../hooks/useLanguage";
import { Timeline } from "../../../../components/Timeline";
import {
  ExperienceWrapper,
  Container,
  BlobOuter,
  BlobInner,
  Blob,
} from "./styles";

import { professional, academic } from "../../../../helpers/experience";

export function Experience() {
  const { language } = useLanguage();

  return (
    <ExperienceWrapper>
      <Container>
        <Timeline
          data={academic(language)}
          timeline={
            language === "pt-BR" ? "Formação Acadêmica" : "Academic Background"
          }
        />
        <Timeline
          data={professional(language)}
          timeline={
            language === "pt-BR"
              ? "Experiência Profissional"
              : "Professional Experience"
          }
        />
      </Container>
      <BlobOuter>
        <BlobInner>
          <Blob />
        </BlobInner>
      </BlobOuter>
    </ExperienceWrapper>
  );
}
