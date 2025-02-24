import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100vw;
  z-index: 2;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${colors.darkBlack};
  border-bottom: 2px solid ${colors.blue};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    padding-bottom: 0;
    border-bottom: none;
}

    H1 {
    display: flex;
    align-items: center;
    font-size: 29px;
    margin-left: 200px;
    color: #fff;
    font-weight: 500;

    @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    margin: 0;
    margin-left: 16px;
  }

    svg {
      margin-right: 5px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 124px;
  margin-right: 200px;

  @media (max-width: ${breakpoints.tablet}) {
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    height: 0; /* Começa fechado */
    opacity: 0;
    visibility: hidden;
    margin-top: 18px;
    margin-right: 0;
    gap: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    background-color: ${colors.lightBlack};
    overflow: hidden; /* Impede que o conteúdo vaze */
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out, padding 1s ease;

    &.active {
      height: 23vh;
      opacity: 1;
      visibility: visible;
      padding: 12px;
    }
  }

  li {
    width: 100%;
  }

  a {
    width: 100%;
    text-decoration: none;
    color: #D3D3D3;
    font-size: 18px;
    position: relative;
    display: block;
    padding-bottom: 6px;
    text-align: center;
    padding-top: 16px;
    padding-bottom: 16px;

    @media (min-width: ${breakpoints.desktop}) {


    /* Criando a borda animada */
    &:hover::after {
      width: 100%; /* Quando passar o mouse, a largura da borda será 100% */
    }

    /* Criando o pseudo-elemento para a borda */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0; /* Começa com width 0 */
      height: 3px;
      background-color: ${colors.blue}; /* Cor da borda */
      transition: width 0.3s ease; /* Transição suave da largura */
    }
  }
    }

`;


export const HamburguerMenu = styled.div`
  display: none;
  width: 32px;
  margin-right: 16px;
  position: absolute;
  right: 10px;
  cursor: pointer;
  span {
    height: 2px;
    background-color: #fff;
    width: 100%;
    display: block;
    margin-bottom: 4px;
  }
    @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  a {
    text-decoration: none;
  }
`

export const ExitHamburguerMenu = styled.div`
  display: none;
  color: #fff;
  font-size: 18px;
  width: 32px;
  margin-right: 10px;
  position: absolute;
  right: 10px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`
