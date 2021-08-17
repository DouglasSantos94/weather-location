import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: sans-serif;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100vh;
  }

  ul, li {
    list-style: none;
  }

  body {
    background-color: #b6f9ff;
  }
`;