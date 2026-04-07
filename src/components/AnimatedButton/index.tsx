import { AnimatedButtonWrapper } from "./styles";

interface AnimatedButtonProps {
  readonly text: string;
  readonly onClick?: () => void;
}

const links = new Map([
  ["linkedin", "https://www.linkedin.com/in/wagnerzao/"],
  ["github", "https://github.com/Reingaw"],
]);

export function AnimatedButton({ text, onClick }: AnimatedButtonProps) {
  return (
    <AnimatedButtonWrapper>
      <a
        href={links.get(text)}
        target="_blank"
        rel="noreferrer"
        onClick={onClick}
      >
        <span>{text}</span>
      </a>
    </AnimatedButtonWrapper>
  );
}
