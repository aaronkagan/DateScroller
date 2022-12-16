import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: lightgrey;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  button:hover {
    cursor: pointer;
  }
  button:active {
    transform: scale(0.95);
  }


`;

export default GlobalStyle;
