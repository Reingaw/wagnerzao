import styled from "styled-components";

export const TechnologiesWrapper = styled.section`
  background-color: ${({ theme }) => theme["black-600"]};
`;
export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1366px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 3.75rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme["gray-700"]};
  transition: 0.5s;
  overflow: hidden;

  &:nth-child(1) {
    filter: hue-rotate(194deg);
  }
  &:nth-child(2) {
    filter: hue-rotate(44deg);
  }
  &:nth-child(3) {
    filter: hue-rotate(227deg);
  }
  &:nth-child(5) {
    filter: hue-rotate(20deg);
  }
  &:nth-child(6) {
    filter: hue-rotate(336deg);
  }

  &:hover {
    background: #03e9f4;
    z-index: 1000;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }

  & span {
    position: absolute;
    display: block;
  }

  & span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 2s linear infinite;
    animation-delay: 0s;
  }
  @keyframes animate1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }
  & span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 5px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 2s linear infinite;
    animation-delay: 1s;
  }
  @keyframes animate3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  & span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 2s linear infinite;
    animation-delay: 0.5s;
  }
  @keyframes animate2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }
  & span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 2s linear infinite;
    animation-delay: 1.5s;
  }
  @keyframes animate4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }

  &:hover span {
    animation-play-state: paused;
  }
`;
export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme["blue-300"]};
  text-align: center;

  & h2 {
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 1.625rem;
  }

  & p {
    line-height: 1.5;
  }

  ${Card}:hover & {
    color: ${({ theme }) => theme["black-600"]};
  }
`;
