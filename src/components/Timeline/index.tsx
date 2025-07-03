import { TimelineArea, TimelineCard, Title, Company, Period } from "./styles";

interface TimelineProps {
  data: {
    id: number;
    title: string;
    company: string;
    period: string;
  }[];
  timeline: string;
}

export function Timeline({ data, timeline }: TimelineProps) {
  return (
    <TimelineArea data-timeline={timeline}>
      {data.map((item) => (
        <TimelineCard key={item.id}>
          <Title>{item.title}</Title>
          <Company>{item.company}</Company>
          <Period>{item.period}</Period>
        </TimelineCard>
      ))}
    </TimelineArea>
  );
}
