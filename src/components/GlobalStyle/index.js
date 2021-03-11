import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../style";

const GlobalStyle = createGlobalStyle`
     body {
    background-color: ${COLORS.background};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
