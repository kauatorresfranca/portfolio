import { createGlobalStyle } from "styled-components"

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0:
  box-sizing: border-box;
  color: ${(props) => props.theme.titleColor};
  list-style: none;
  font-family: Roboto, sans-serif;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${(props) => props.theme.background};
  }
}
  html {
    scroll-behavior: smooth;
  }
`
