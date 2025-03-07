import styled from "styled-components"
import { breakpoints } from "../../styles"


export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  width: 100vw;
  z-index: 2;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: ${(props) => props.theme.background};
  border-bottom: 2px solid ${(props) => props.theme.detach};

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    padding-bottom: 0;
    border-bottom: none;
}

    h1 {
    color: ${(props) => props.theme.titleColor};
    display: flex;
    align-items: center;
    font-size: 29px;
    font-weight: 500;

    @media (max-width: ${breakpoints.desktop}) {
      text-align: center;
      margin-right: 54px;
      margin-left: 0px;
  }

    svg {
      margin-right: 8px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 124px;
  margin-right: 210px;
  padding-bottom: 16px;

  @media (max-width: ${breakpoints.desktop}) {
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
    background-color: ${(props) => props.theme.secondaryBackground};
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
    color: ${(props) => props.theme.titleColor};
    font-size: 18px;
    position: relative;
    display: block;
    padding-bottom: 6px;
    text-align: center;
    padding-top: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      padding-bottom: 16px;
    }

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
      background-color: ${(props) => props.theme.detach}; /* Cor da borda */
      transition: width 0.3s ease; /* Transição suave da largura */
    }
  }
    }

`;

export const HamburguerMenu = styled.div`
  display: none;
  width: 28px;
  height: 28px;
  position: relative;
  cursor: pointer;
  margin-right: 12px;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }

  span,
  &::before,
  &::after {
    content: '';
    height: 2px;
    background-color: ${(props) => props.theme.titleColor};
    width: 100%;
    position: absolute;
    transition: all 0.4s ease-out;
    border-radius: 10px;
  }

  span {
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    top: 8px; /* Define uma posição inicial fixa */
  }

  &::after {
    bottom: 8px; /* Define uma posição inicial fixa */
  }

  &.active {
    span {
      transform: rotate(45deg);
    }

    &::before {
      top: 50%; /* Move para o centro */
      transform: translateY(-50%) rotate(-45deg); /* Centraliza e rotaciona */
    }

    &::after {
      top: 50%; /* Move para o centro */
      transform: translateY(-50%) rotate(45deg); /* Centraliza e rotaciona */
    }
  }
`


export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }

  button {
    margin-left: 10px;
    border: none;
    background-color: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.titleColor};
    border-radius: 15px;
    padding: 8px;
    cursor: pointer;
    position: absolute;
    right: 32px;

    @media (max-width: ${breakpoints.desktop}) {
    position: static;
    right: 0;
}
  }
`
