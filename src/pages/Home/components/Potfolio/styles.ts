import styled from "styled-components";

export const PortfolioWrapper = styled.section`
  background-color: ${({ theme }) => theme["black-600"]};
`;
export const Container = styled.div`
  padding: 120px 40px;
  max-width: 1366px;
  margin-inline: auto;

  @media screen AND (max-width: 680px) {
    padding: 80px 20px;
  }
`;
export const CardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 320px);
  align-items: center;
  justify-items: center;

  @media screen AND (max-width: 680px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 430px);
  }
`;
export const Card = styled.div`
  position: relative;
  width: 350px;
  height: 180px;
  background-color: ${({ theme }) => theme["white"]};
  transition: 0.5s;

  @media screen AND (max-width: 680px) {
    height: 400px;
  }

  &:hover {
    height: 400px;
  }

  @media screen AND (min-width: 680px) {
    &:nth-child(n + 4) {
      margin-top: 80px;
    }
  }
`;
export const Lines = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme["black-100"]};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 120px;
    background: linear-gradient(
      transparent,
      ${({ theme }) => theme["blue-300"]},
      ${({ theme }) => theme["blue-300"]},
      ${({ theme }) => theme["blue-300"]},
      transparent
    );
    animation: line 4s linear infinite;
    animation-play-state: paused;

    @media screen AND (max-width: 680px) {
      animation-play-state: running;
    }

    ${Card}:hover & {
      animation-play-state: running;
    }
  }
  @keyframes line {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    background-color: ${({ theme }) => theme["gray-700"]};
  }
`;
export const Image = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  width: 150px;
  height: 150px;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme["black-100"]};
  transition: 0.5s;
  z-index: 10;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen AND (max-width: 680px) {
    top: 25px;
    width: 200px;
    height: 200px;
  }

  ${Card}:hover & {
    top: 25px;
    width: 200px;
    height: 200px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 150px;
    background: linear-gradient(
      transparent,
      ${({ theme }) => theme["purple-700"]},
      ${({ theme }) => theme["purple-700"]},
      ${({ theme }) => theme["purple-700"]},
      transparent
    );
    transform: translate(-50%, -50%);
    animation: imgBox 4s linear infinite;
    animation-play-state: paused;

    @media screen AND (max-width: 680px) {
      animation-play-state: running;
    }

    ${Card}:hover & {
      animation-play-state: running;
    }
  }
  @keyframes imgBox {
    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  &::after {
    content: "";
    position: absolute;
    inset: 3px;
    background-color: ${({ theme }) => theme["gray-700"]};
  }

  & img {
    position: absolute;
    width: 97%;
    height: 97%;
    opacity: 0.5;
    transition: 0.5s;
    z-index: 1;

    @media screen AND (max-width: 680px) {
      opacity: 1;
    }

    ${Card}:hover & {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;
export const Details = styled.div`
  padding: 20px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(110px);

  @media screen AND (max-width: 680px) {
    transform: translateY(0px);
  }

  ${Card}:hover & {
    transform: translateY(0px);
  }

  & h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #45f3ff;
    line-height: 1.2rem;
  }

  & p {
    margin-block: 10px;
    color: ${({ theme }) => theme["white"]};
    opacity: 0;
    transition: 0.5s;
    height: 3.5625rem;

    @media screen AND (max-width: 680px) {
      opacity: 1;
    }
  }

  & a {
    opacity: 0;

    @media screen AND (max-width: 680px) {
      opacity: 1;
    }
  }

  ${Card}:hover & p, ${Card}:hover & a {
    opacity: 1;
  }
`;
export const Button = styled.a`
  display: inline-block;
  padding: 8px 15px;
  background: #45f3ff;
  color: #292929;
  margin-top: 10px;
  font-weight: 500;
  text-decoration: none;
  opacity: 0;
  transition: 0.5s;
`;
