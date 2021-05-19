import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
// font-family: 'Noto Sans KR', sans-serif;
//     font-family: 'Roboto', sans-serif;
const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
