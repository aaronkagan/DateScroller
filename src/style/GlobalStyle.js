import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  button:hover {
    cursor: pointer;
  }
  button:active {
    transform: scale(0.95);
  }

`;

export default GlobalStyle;
