import { styled } from "styled-components";

export const WavyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-block: 2.5rem;
`;

export const Wavy = styled.div`
  position: relative;

  & span {
    position: relative;
    bottom: 0.6rem;
    display: inline-block;
    color: ${({ theme }) => theme["blue-300"]};
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    animation: animateText 3s ease-in-out infinite;
    animation-delay: calc(0.1s * var(--i));
  }

  @media screen AND (max-width: 768px) {
    & span {
      font-size: 1.75rem;
    }
  }

  @keyframes animateText {
    0%,
    40%,
    100% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-20px);
    }
  }
`;
