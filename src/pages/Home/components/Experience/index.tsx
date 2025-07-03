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
  return (
    <ExperienceWrapper>
      <Container>
        <Timeline data={academic} timeline="Formação Acadêmica" />
        <Timeline data={professional} timeline="Experiência Profissional" />
      </Container>
      <BlobOuter>
        <BlobInner>
          <Blob />
        </BlobInner>
      </BlobOuter>
    </ExperienceWrapper>
  );
}
