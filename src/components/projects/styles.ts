import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, colors } from '../../styles'

export const SectionContainer = styled.section`
  padding: 80px 0;
  background: ${colors.background};
  min-height: 100vh;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`

export const SectionTitle = styled.h2`
  font-size: 32px;
  color: ${colors.title};
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;

  &::after {
    content: '';
    width: 50px;
    height: 4px;
    background: ${colors.primary};
    border-radius: 2px;
  }
`

export const Controls = styled.div`
  display: flex;
  gap: 16px;
`

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

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
  // O segredo do grid responsivo moderno:
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
`
