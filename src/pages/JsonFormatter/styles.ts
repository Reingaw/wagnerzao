import styled from "styled-components";

export const JsonFormatterContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto;
  width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  justify-items: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const JsonFormatterLogo = styled.div`
  margin-block: 25px;
`;

export const JsonFormatterInputWrapper = styled.div`
  width: 100%;
  position: relative;

  & button {
    position: absolute;
    right: 10px;
    top: 5px;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    opacity: 0.2;
    transition: 0.6s ease;
  }

  & button:hover {
    opacity: 1;
  }
`;

export const JsonFormatterInput = styled.textarea`
  grid-area: input;
  width: 100%;
  max-width: 800px;
  height: 200px;
  font-family: "Courier New", monospace;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const JsonFormatterControls = styled.div`
  display: flex;
  gap: 10px;
  margin-block: 15px;
  width: 100%;
  justify-content: flex-end;
`;

export const JsonFormatterOutputContainer = styled.div`
  width: 100%;
  max-width: 800px;
  position: relative;
  margin-top: 20px;
  background-color: #272822; /* Fundo do editor */
  border-radius: 8px;
  overflow: hidden;
`;

export const JsonFormatterOutputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 15px;
  background-color: #3e3d32;
  color: #f8f8f2;
  font-size: 0.85em;
`;
export const ActionsButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & button {
    background: transparent;
    border: none;
    color: #f8f8f2;
    padding: 5px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
    display: flex;
    align-items: center;

    &:hover {
      background-color: #49483e;
      color: #a6e22e; /* Verde para destaque */
    }
  }
`;

export const JsonFormatterOutput = styled.pre`
  margin: 0;
  padding: 15px;
  border-radius: 4px;
  max-height: 500px;
  overflow: auto;
  font-family: "Fira Code", "Courier New", monospace;
  color: #f8f8f2;
`;

export const AdsenseArea = styled.aside`
  grid-area: adsense;
  color: ${({ theme }) => theme["blue-100"]};
  width: 100%;
  padding-block: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
