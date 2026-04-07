import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  :focus {
    outline: none;
  }

  /**** SCROLLBAR ******/
  html {
    /* For Firefox */
    overflow-y: scroll;
    scrollbar-color: ${({ theme }) => theme["blue-100"]} ${({ theme }) =>
      theme["black-600"]};
    scrollbar-width: thin;
  }
  body::-webkit-scrollbar {
    width: 0.5em;
  }
  body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme["black-600"]};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme["blue-100"]};
    border-radius: 10px;
  }
  /**** SCROLLBAR ******/
 
  body {
    background-color: ${(props) => props.theme["black-600"]};
    color: ${(props) => props.theme["gray-100"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  /* Cores para o Highlighting */
  .json-key {
    color: #a6e22e;
  } /* Verde */
  .json-string {
    color: #e6db74;
  } /* Amarelo */
  .json-number {
    color: #ae81ff;
  } /* Roxo */
  .json-boolean {
    color: #f92672;
  } /* Rosa */
  .json-null {
    color: #66d9ef;
  } /* Azul */
`;
