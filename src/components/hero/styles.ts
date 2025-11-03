import styled, { keyframes } from "styled-components"
import { breakpoints, colors } from "../../styles"

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`

const blink = keyframes`
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
`

export const Hero = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: #17191e;
  overflow: hidden;

  #tsparticles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  i.ri-arrow-down-double-fill {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    color: ${colors.text};
    animation: ${bounce} 2s infinite;
    z-index: 2;
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 120px;
    height: 120px;
    padding: 3px;
    border: 1px solid ${colors.primary};
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: space-around;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    margin: 0 auto;
  }
`

export const Description = styled.div`
  color: ${colors.text};
  font-size: 14px;
  font-weight: 400;
  max-width: 800px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const Title = styled.h2`
  margin-bottom: 16px;
  color: ${colors.title};
  font-size: 36px;
  font-weight: 700;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 28px;
  }
`

export const SubTitle = styled.h3`
  color: ${colors.subTitle};
  font-size: 16px;
  font-weight: 400;
  margin-top: 40px;
  margin-bottom: 16px;
  text-align: center;

  .cursor {
    display: inline-block;
    margin-left: 3px;
    color: ${colors.text};
    animation: ${blink} 2s step-start infinite;
  }

  .highlight {
    color: ${colors.primary};
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const SocialLinks = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  justify-content: center;

  a {
    color: ${colors.primary};
    font-size: 24px;
    transition: transform 0.2s ease, color 0.2s ease;

    &:hover {
      transform: scale(1.2);
      color: ${colors.white || colors.primary};
    }
  }
`

