import styled from "styled-components"
import { motion } from "framer-motion"
import { breakpoints, colors } from "../../styles"

export const AboutSection = styled.section`
  padding: 100px 0;
  background: ${colors.background};
  overflow: hidden;
`

export const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 60px;

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

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 60px;
  align-items: start;
  padding: 0 20px;


  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const TextSide = styled(motion.div)`
  p {
    color: ${colors.text};
    line-height: 1.8;
    font-size: 18px;
    margin-bottom: 24px;
    text-align: justify;

    strong {
      color: ${colors.primary};
      font-weight: 600;
    }

    em {
      color: ${colors.title};
      font-style: normal;
      font-weight: 500;
    }
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;

  .stat-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 16px;
    transition: 0.3s;

    &:hover {
      border-color: ${colors.primary};
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.05);
    }

    .label {
      display: block;
      font-size: 12px;
      text-transform: uppercase;
      color: ${colors.text};
      opacity: 0.7;
      margin-bottom: 8px;
    }

    .value {
      font-size: 16px;
      font-weight: 700;
      color: ${colors.title};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const KnowledgeSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;

  .experience-box {
    background: ${colors.secondaryBackground};
    padding: 30px;
    border-radius: 24px;
    border: 1px solid rgba(255, 255, 255, 0.05);

    h3 {
      margin-bottom: 24px;
      color: ${colors.title};
      font-size: 20px;
    }

    ul {
      list-style: none;
      li {
        position: relative;
        padding-left: 20px;
        margin-bottom: 20px;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 8px;
          height: 8px;
          background: ${colors.primary};
          border-radius: 50%;
        }

        strong {
          display: block;
          color: ${colors.title};
          font-size: 16px;
        }

        span {
          font-size: 14px;
          color: ${colors.text};
        }
      }
    }
  }
`

export const ResumeBox = styled.div`
  padding: 30px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  text-align: center;

  p {
    font-size: 14px;
    color: ${colors.text};
    margin-bottom: 20px;
    line-height: 1.5;
  }
`

export const ResumeButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${colors.primary};
  color: #fff;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100%;

  i {
    font-size: 20px;
  }

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.02);
    box-shadow: 0 10px 20px ${colors.primary}33;
  }
`
