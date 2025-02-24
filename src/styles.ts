import { createGlobalStyle } from "styled-components"

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const colors = {
  blue: '#8257e6',
  lightPurple: 'rgb(46, 23, 100)',
  white: '#fff',
  lightBlack: '#2a3342',
  darkBlack: '#1f2732',
  textColor: '#D3D3D3'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0:
  box-sizing: border-box;
  color: #fff;
  list-style: none;
  font-family: Roboto, sans-serif;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

  body {
    background-color: ${colors.darkBlack};
  }
}
  html {
    scroll-behavior: smooth;
  }
`
