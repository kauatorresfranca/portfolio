import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, colors } from '../../styles'

interface HeaderProps {
  isScrolled: boolean
}

export const HeaderWrapper = styled.header<HeaderProps>`
  position: fixed;
  top: ${(props) => (props.isScrolled ? '10px' : '24px')};
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Efeito Glassmorphism */
  background: ${(props) =>
    props.isScrolled ? 'rgba(22, 27, 34, 0.8)' : 'rgba(82, 82, 82, 0.2)'};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
`

export const Logo = styled.a`
  text-decoration: none;
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${colors.title};
    letter-spacing: -1px;

    span {
      color: ${colors.primary};
    }
  }
`

export const NavLinks = styled.ul`
  display: flex;
  gap: 32px;
  list-style: none;

  @media (max-width: ${breakpoints.desktop}) {
    display: none; /* Escondemos o menu padrão no mobile */
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    padding: 8px 0;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: ${colors.primary};
      transition: width 0.3s ease;
    }

    &:hover {
      color: ${colors.primary};
      &::after {
        width: 100%;
      }
    }
  }
`

export const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);

    a {
      color: ${colors.white};
      text-decoration: none;
      font-size: 18px;
      text-align: center;
      padding: 10px;
      border-radius: 10px;
      &:hover {
        background: rgba(255, 255, 255, 0.05);
        color: ${colors.primary};
      }
    }
  }
`

export const HamburguerMenu = styled.div`
  display: none;
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;

  span, &::before, &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: ${colors.white};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  span { top: 50%; transform: translateY(-50%); }
  &::before { top: 0; }
  &::after { bottom: 0; }

  &.active {
    span { opacity: 0; transform: translateX(-20px); }
    &::before { top: 50%; transform: translateY(-50%) rotate(45deg); }
    &::after { top: 50%; transform: translateY(-50%) rotate(-45deg); }
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
  }
`
