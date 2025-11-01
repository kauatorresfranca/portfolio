import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  padding: 16px 32px;
  margin: 24px auto 0 auto;
  z-index: 2;
  background-color: ${colors.headerBackground};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.18));
  backdrop-filter: blur(10px);
  border-radius: 25px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 12px 0;

    @media (max-width: ${breakpoints.desktop}) {
      display: block;
      width: 100%;
      padding: 6px 0;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    padding-bottom: 0;
    border-bottom: none;
    width: 90%;
    left: 50%;
    transform: translateX(-50%);
  }

  h1 {
    display: flex;
    align-items: center;
    color: ${colors.title};
    font-size: 29px;
    font-weight: 500;

    @media (max-width: ${breakpoints.desktop}) {
      text-align: center;
      margin-right: 32px;
      margin-left: 0px;
    }

    svg {
      margin-right: 8px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 80px;
  border: none;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
    margin-right: 0;
    gap: 0;
    padding: 0;
    height: 0; /* Começa fechado */
    opacity: 0;
    visibility: hidden;
    border-radius: 18px;
    background-color: ${colors.secondaryBackground};
    overflow: hidden; /* Impede que o conteúdo vaze */
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out,
    padding 1s ease;

    &.active {
      height: 100%;
      opacity: 1;
      visibility: visible;
      padding: 12px;
    }
  }

  li {
    width: 100%;
  }

  a {
    display: block;
    position: relative;
    width: 100%;
    padding-bottom: 6px;
    text-align: center;
    text-decoration: none;
    color: ${colors.white};
    font-size: 18px;
    transition: all 0.4s ease-in-out;

    @media (max-width: ${breakpoints.desktop}) {
      padding-bottom: 16px;
      padding-top: 16px;
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
        background-color: ${colors.detach}; /* Cor da borda */
        transition: width 0.3s ease-out; /* Transição suave da largura */
      }
    }
  }
`

export const ToggleTheme = styled.div<{ themeName: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  width: 50px;
  height: 26px;
  margin-left: 10px;
  border: none;
  background-color: ${colors.secondaryBackground};
  color: ${colors.title};
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  right: 42px;

  @media (max-width: ${breakpoints.desktop}) {
    position: relative;
    right: 0;
  }
`

export const HamburguerMenu = styled.div`
  display: none;
  position: relative;
  margin-right: 12px;
  width: 28px;
  height: 28px;
  cursor: pointer;

  span,
  &::before,
  &::after {
    content: '';
    height: 2px;
    background-color: ${colors.title};
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
      bottom: 0;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    position: relative;
    margin-right: 50px;
  }
`

export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;

  a {
    text-decoration: none;
  }
`
