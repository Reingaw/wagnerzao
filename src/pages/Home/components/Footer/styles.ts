import styled from "styled-components";

export const WavyFooter = styled.footer`
  position: relative;
  background-color: ${({ theme }) => theme["blue-300"]};
  color: ${({ theme }) => theme["black-100"]};
  text-align: center;
  padding-block: 0.315rem;
`;
