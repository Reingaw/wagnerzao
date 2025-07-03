import { AnimatedButtonWrapper } from "./styles";

interface AnimatedButtonProps {
  readonly text: string;
}

const links = new Map([
  ["linkedin", "https://www.linkedin.com/in/wagnerzao/"],
  ["github", "https://github.com/Reingaw"],
]);

export function AnimatedButton({ text }: AnimatedButtonProps) {
  return (
    <AnimatedButtonWrapper>
      <a href={links.get(text)} target="_blank" rel="noreferrer">
        <span>{text}</span>
      </a>
    </AnimatedButtonWrapper>
  );
}
