import styled from "styled-components";

export const AboutMe = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  min-height: 600px;
  background: ${({ theme }) => theme["black-100"]};
  padding: 3.75rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  & p {
    max-width: 655px;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme["blue-100"]};
  }
`;

export const MeImage = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  transition: 0.5s;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    filter: blur(40px);
  }

  &::before,
  &::after {
    background: linear-gradient(
      235deg,
      ${({ theme }) => theme["blue-100"]},
      ${({ theme }) => theme["black-100"]},
      ${({ theme }) => theme["purple-700"]}
    );
  }

  &:hover {
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  background: ${({ theme }) => theme["black-600"]};
  z-index: 2;

  & img {
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    opacity: 0.1;
    transition: 0.5s;

    @media (max-width: 768px) {
      opacity: 1;
    }
  }

  ${MeImage}:hover & img {
    opacity: 1;
  }
`;
export const InfoBox = styled.div`
  position: absolute;
  left: 0;
  right: 10px;
  bottom: 2px;
  width: 100%;
  height: 100px;
  background: ${({ theme }) => theme["black-600"]};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.5s;
  opacity: 0;
  z-index: 3;

  @media (max-width: 768px) {
    opacity: 1;
  }

  ${MeImage}:hover & {
    opacity: 1;
  }

  & h2 {
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1px;
  }
`;
