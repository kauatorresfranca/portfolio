import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, colors } from '../../styles'

export const SectionContainer = styled.section`
  padding: 80px 0;
  background: ${colors.background};
  min-height: 100vh;
  padding: 20px 20px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
    gap: 20px;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
`

export const Controls = styled.div`
  display: flex;
  gap: 16px;
  flex: 1; /* Ocupa espaço na esquerda */
`

export const TitleWrapper = styled.div`
  flex: 2; /* Dá mais peso ao centro */
  display: flex;
  justify-content: center;
`

export const HeaderSpacer = styled.div`
  flex: 1; /* Equilibra o flex do Controls na direita para centralizar o título perfeitamente */
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const SectionTitle = styled.h2`
  font-size: 42px;
  color: ${colors.title};
  font-weight: 800;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${colors.primary};
    border-radius: 2px;
  }
`

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;

  label {
    font-size: 12px;
    color: ${colors.text};
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  select {
    background: ${colors.secondaryBackground};
    color: ${colors.title};
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
    outline: none;

    &:focus {
      border-color: ${colors.primary};
    }
  }
`

export const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
`
