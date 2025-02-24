import styled, { keyframes } from "styled-components"
import { breakpoints, colors } from "../../styles"


export const background = styled.div`
  background-color: ${colors.darkBlack};
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 128px;
  padding-bottom: 32px;

  img {
    width: 320px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  margin-right: 280px;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    margin-right: 0;

    h4 {
      margin-top: 6px;
    }
  }

  h4 {
    font-size: 12px;
    color: ${colors.textColor};
    margin-bottom: 12px;
  }

  button {
  width: 240px;
  height: 36px;
  font-weight: 700;
  background-color: ${colors.lightBlack};
  color: ${colors.white};
  border: 2px solid ${colors.blue};
  border-radius: 12px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
  }

    &:hover {
      color: ${colors.lightBlack};
      background-color: ${colors.blue};
    }
  }
`

const typing = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const blinkCursor = keyframes`
  0%, 50% {
    background-color: transparent; /* O cursor ficará invisível */
  }
  50%, 100% {
    background-color: ${colors.blue}; /* Cor do cursor */
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;

  span {
    color: ${colors.blue};
    display: inline-block;
    position: relative;
    width: 0;
    animation: ${typing} 2s steps(10, end) forwards; /* Controla a animação do texto */
  }

  span::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 2px; /* Largura do cursor */
    height: 100%;
    background-color: ${colors.blue}; /* Cor inicial do cursor */
    animation: ${blinkCursor} 5s step-start infinite; /* A animação de piscar */
  }
`


