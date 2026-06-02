import styled from "styled-components";

export const FlashcardCreatorPage = styled.main`
  background: url("/img/machi.png") no-repeat center;
  background-size: cover;
  background-attachment: fixed;
`;

export const FlashcardCreatorContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  align-items: center;
  padding-block: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 97vh;
  }
`;

export const FlashCardCreatorLogo = styled.img`
  width: 300px;
`;

export const FlashCardCreatorInputWrapper = styled.div`
  margin-block: 2rem;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: "Importar arquivo";
    position: absolute;
    top: -20px;
    right: -40px;
    width: 100px;
    font-size: 0.625em;
    color: ${({ theme }) => theme["gray-300"]};
  }
`;

export const FlashCardCreatorTextInput = styled.input`
  width: 300px;
  padding: 10px;
`;

export const FlashCardCreatorSendButton = styled.button`
  min-width: 30px;
  position: relative;
  text-decoration: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-300"]};
  border: none;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 80px;
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

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
    &::before {
      animation: none;
    }
  }
`;

export const FlashCardCreatorInputLabel = styled.label`
  min-width: 30px;
  position: relative;
  text-decoration: none;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-300"]};
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    width: 80px;
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

  &:has(input:disabled) {
    cursor: not-allowed;
    opacity: 0.3;
    &::before {
      animation: none;
    }
  }
`;

export const FlashCardCreatorInput = styled.input`
  display: none;
`;

export const FlashCardCreatorCardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  padding-block: 2rem;
`;

export const FlashCardCreatorExportButton = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme["gray-300"]};
  cursor: pointer;
  transition: color 0.3s ease-in;

  &:hover {
    color: ${({ theme }) => theme["blue-100"]};
  }
`;

export const FlashCardCreatorClearButton = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme["gray-300"]};
  cursor: pointer;
  transition: color 0.3s ease-in;

  &:hover {
    color: ${({ theme }) => theme["red-500"]};
  }
`;

export const FlashCardCreatorCard = styled.div`
  border: 1px solid ${({ theme }) => theme["gray-700"]};
  background: ${({ theme }) => theme["gray-800"]};
  padding: 1rem;
  border-radius: 8px;
`;
