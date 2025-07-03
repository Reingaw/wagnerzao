import styled from "styled-components";

export const AnimatedButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    min-width: 130px;
    position: relative;
    text-decoration: none;
    padding: 15px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme["gray-700"]};
    color: ${({ theme }) => theme["gray-300"]};
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      width: 140px;
      height: 70%;
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme["blue-100"]},
        ${({ theme }) => theme["blue-300"]}
      );
      animation: animate 4s linear infinite;
    }
    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    &::after {
      content: "";
      position: absolute;
      inset: 2px;
      background: ${({ theme }) => theme["gray-800"]};
    }

    &:hover {
      color: ${({ theme }) => theme["blue-100"]};
    }

    &:focus {
      box-shadow: none;
    }

    & span {
      position: relative;
      z-index: 10;
      text-transform: uppercase;
      transition: color 0.3s ease-in;
    }
  }
`;
