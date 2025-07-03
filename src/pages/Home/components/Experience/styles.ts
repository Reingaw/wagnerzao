import styled from "styled-components";

export const ExperienceWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme["black-100"]};
  overflow: hidden;
`;
export const Container = styled.div`
  padding: 120px 40px;
  max-width: 1366px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen AND (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
export const BlobOuter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  inset: 0;
  margin: auto;
  filter: blur(100px);
`;
export const BlobInner = styled.div`
  border-radius: 99999px;
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100vw;
  height: 100vh;
  min-width: 1000px;
  overflow: hidden;
  background: #fff;
  transform: scale(0.6);

  @media screen AND (max-width: 680px) {
    left: -160px;
  }
`;
export const Blob = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  inset: 0;
  margin: auto;
  background: conic-gradient(
    from 0deg,
    #00f0f0,
    #772aff,
    #ffffff,
    #28f0f0,
    #772aff,
    #ffffff,
    #50c8f0,
    #772aff,
    #ffffff
  );
  animation: spinBlob 8s linear infinite;

  @keyframes spinBlob {
    0% {
      transform: rotate(0deg) scale(2);
    }
    100% {
      transform: rotate(1turn) scale(2);
    }
  }
`;
