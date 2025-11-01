import { createGlobalStyle } from "styled-components"

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const colors = {
  primary:'#003bcd',
  background: '#17191e',
  secondaryBackground: '#292C34',
  headerBackground: 'rgba(82, 82, 82, 0.5)',
  title: '#ffffff',
  subTitle: '#C0C4CE',
  text: '#878EA1',
  lightPurple: '#6c63ff',
  white: '#ffffff',
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayminor: 'rgba(0, 0, 0, 0.3)',
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: ${colors.title};
  list-style: none;
  text-decoration: none;
  font-family: "asap", sans-serif;

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${colors.background};
  }
}
  html {
    scroll-behavior: smooth;
  }
`
