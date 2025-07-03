import styled from "styled-components";

export const BackWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  z-index: -150;
`;
export const Bubbles = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1920px;
  margin-inline: auto;

  & span {
    position: relative;
    width: 25px;
    height: 25px;
    background: ${({ theme }) => theme["blue-100"]};
    margin: 0 4px;
    border-radius: 50%;
    box-shadow: 0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc;
    animation: animateBubbles 15s linear infinite;
    animation-duration: calc(125s / var(--i));

    &:nth-child(even) {
      background: ${({ theme }) => theme["purple-700"]};
      box-shadow: 0 0 0 10px #00d6c444, 0 0 50px #772aff, 0 0 100px #772aff;
      animation: animateBubbles 15s linear infinite;
      animation-duration: calc(125s / var(--i));
    }

    @media screen AND (max-width: 1366px) {
      & {
        width: 20px;
        height: 20px;
        margin: 0 2px;
      }
    }
    @media screen AND (max-width: 768px) {
      & {
        width: 10px;
        height: 10px;
        margin: 0;
      }
    }
    @media screen AND (max-width: 375px) {
      & {
        width: 10px;
        height: 10px;
        margin: 0;
      }
    }
  }
  @keyframes animateBubbles {
    0% {
      transform: translateY(100vh) scale(0);
    }
    100% {
      transform: translateY(-10vh) scale(1);
    }
  }
`;
