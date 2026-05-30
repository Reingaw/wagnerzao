import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10000;

  & nav {
    gap: 0.5rem;
    display: flex;

    & button {
      background: transparent;
      border: none;
      cursor: pointer;
      opacity: 0.2;
      transition: opacity 0.3s ease;

      &.grayscale {
        filter: grayscale(100%);
      }

      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const HomeWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;
