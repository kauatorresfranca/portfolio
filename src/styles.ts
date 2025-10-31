import { createGlobalStyle } from "styled-components"

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const colors = {
  primary:'#003bcd',
  background: '#17191e',
  headerBackground: 'rgba(255, 255, 255, 0.5)',
  title: '#ffffff',
  text: '#b0b3b8',
  detach: '#2a3342',
  secondaryBackground: '#00aaff',
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
  font-family: Roboto, sans-serif;

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
