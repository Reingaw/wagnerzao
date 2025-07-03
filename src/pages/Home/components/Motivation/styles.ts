import { styled } from "styled-components";

export const Scene = styled.section`
  position: relative;
  background: ${({ theme }) => theme["black-100"]};
  overflow: hidden;
  height: 60vh;

  @media (max-width: 768px) {
    height: 100vh;
  }

  & i {
    position: absolute;
    top: -100px;
    background: rgba(255, 255, 255, 0.5);
    animation: stars linear infinite;
  }
  @keyframes stars {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(200vh);
    }
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.75rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Rocket = styled.div`
  animation: rocket 0.2s ease infinite;

  @keyframes rocket {
    0%,
    100% {
      transform: translateY(-2px);
    }
    50% {
      transform: translateY(2px);
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: -141px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 150px;
    background: linear-gradient(
      ${({ theme }) => theme["blue-100"]},
      transparent
    );
    filter: blur(20);
  }
`;

export const Text = styled.div`
  color: ${({ theme }) => theme["blue-100"]};
  max-width: 850px;
  padding-top: 4rem;

  & p {
    margin-bottom: 1rem;
    line-height: 1.25rem;
    text-align: justify;
  }
`;
