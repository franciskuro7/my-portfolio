import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    width:100%;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'Inter', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    position:absolute;
  }

`