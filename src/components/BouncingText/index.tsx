import { Wavy, WavyWrapper } from "./styles";

interface BouncingtextProps {
  readonly text: string;
  readonly size: number;
}

export function Bouncingtext({ text, size }: BouncingtextProps) {
  const spans = Array.from(text).map((char, index) => (
    <span
      key={`${char}-${index}`}
      style={{ "--i": index + 1 } as React.CSSProperties}
      data-testid="bouncingMessageChar"
    >
      {char === "_" ? "\u00A0" : char}
    </span>
  ));

  return (
    <WavyWrapper>
      <Wavy fontSize={size}>{spans}</Wavy>
    </WavyWrapper>
  );
}
