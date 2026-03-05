import styled, { keyframes } from "styled-components"
import { motion } from "framer-motion"
import { colors } from "../../styles"

const bounce = keyframes`
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -10px); }
`

const blink = keyframes`
  50% { opacity: 0; }
`

export const Hero = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: ${colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  #tsparticles {
    position: absolute;
    inset: 0;
    z-index: 0;
  }
`

export const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
`

export const ProfileWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto 32px;

  img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${colors.primary};
    padding: 5px;
    background: ${colors.background};
    box-shadow: 0 0 30px ${colors.primary}44;
  }

  .status-badge {
    position: absolute;
    bottom: 5px;
    right: -10px;
    background: #10b981; // Verde esmeralda
    color: white;
    font-size: 10px;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    border: 2px solid ${colors.background};
  }
`

export const Title = styled.h2`
  font-size: clamp(32px, 8vw, 56px);
  color: ${colors.title};
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.1;

  span {
    color: ${colors.primary};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 8px;
      background: ${colors.primary}33;
      z-index: -1;
    }
  }
`

export const SubTitle = styled.div`
  color: ${colors.text};
  font-size: 18px;
  margin-bottom: 12px;
  font-family: 'Fira Code', monospace; // Dá um ar de dev

  .highlight {
    color: ${colors.primary};
    font-weight: 600;
  }

  .cursor {
    margin-left: 4px;
    color: ${colors.primary};
    animation: ${blink} 1s infinite;
  }
`

export const Description = styled.p`
  color: ${colors.text};
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0.9;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: ${colors.white};
    text-decoration: none;
    transition: all 0.3s ease;

    i { font-size: 20px; color: ${colors.primary}; }
    span { font-size: 14px; font-weight: 500; }

    &:hover {
      background: ${colors.primary}11;
      border-color: ${colors.primary};
      transform: translateY(-3px);
    }
  }
`

export const ScrollArrow = styled.a`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.text};
  font-size: 32px;
  animation: ${bounce} 2s infinite;
  text-decoration: none;
  opacity: 0.5;
  transition: 0.3s;

  &:hover { opacity: 1; color: ${colors.primary}; }
`
