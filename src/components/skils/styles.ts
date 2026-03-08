import styled from "styled-components"
import { motion } from "framer-motion"
import { breakpoints, colors } from "../../styles"

export const Background = styled.section`
  padding: 100px 0;
  background-color: ${colors.background};
  scroll-margin-top: 110px;
  padding: 0 20px;

`

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 50px;
  color: ${colors.primary};

  h2 {
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
  }
`

export const AccordionContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SkillArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const Acordeon = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  border-radius: 20px;
  background-color: ${props => props.isActive ? 'rgba(255,255,255,0.05)' : colors.secondaryBackground};
  cursor: pointer;
  border: 1px solid ${props => props.isActive ? colors.primary : 'transparent'};
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`

export const AreaLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  .icon-wrapper {
    font-size: 24px;
    background: ${colors.background};
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
  }

  h4 {
    color: ${colors.title};
    font-size: 18px;
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    color: ${colors.text};
    opacity: 0.6;
  }
`

export const ArrowIcon = styled.div<{ isOpen: boolean }>`
  font-size: 24px;
  color: ${colors.text};
  transition: transform 0.4s ease;
  transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
`

export const SkilContent = styled(motion.div)`
  overflow: hidden;
`

export const ListSkil = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 24px;
  padding: 40px 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`
