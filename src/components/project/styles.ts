import styled from 'styled-components'
import { motion } from 'framer-motion'
import { breakpoints, colors } from '../../styles'

// --- CARD ---
export const Card = styled(motion.div)`
  background: ${colors.secondaryBackground};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.1);
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);

  span {
    color: #fff;
    font-weight: bold;
    border: 1px solid #fff;
    padding: 8px 16px;
    border-radius: 20px;
  }

  ${Card}:hover & {
    opacity: 1;
  }
`

export const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    margin-bottom: 12px;
    color: ${colors.title};
  }
`

export const TechListShort = styled.div`
  display: flex;
  gap: 8px;
  img {
    width: 20px;
    height: 20px;
    filter: grayscale(0);
    transition: 0.3s;
  }

  ${Card}:hover & img {
    filter: grayscale(1);
  }
`

// --- MODAL ---
export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  backdrop-filter: blur(8px);
`

export const ModalContainer = styled(motion.div)`
  background: ${colors.secondaryBackground};
  width: 100%;
  max-width: 1000px;
  border-radius: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

export const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  height: 600px;

  .media-side {
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    video, img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-side {
    padding: 40px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    h2 { font-size: 28px; margin-bottom: 16px; }
    .desc { line-height: 1.6; color: ${colors.text}; margin-bottom: 24px; }
  }

  .date-label {
    position: absolute;
    bottom: 20px;
    right: 0;
    left: 0;
    text-align: center;
    margin-top: 20px;
    color : ${colors.text};
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    height: auto;
    max-height: 90vh;
    overflow-y: auto;

    .media-side { height: 250px; }
  }
`

export const Badge = styled.span`
  background: ${colors.primary}22;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
  border: 1px solid ${colors.primary}44;
`

export const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
`

export const ModalActions = styled.div`
  margin-top: auto;
  display: flex;
  gap: 16px;

  a {
    flex: 1;
    text-align: center;
    padding: 12px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
    border: 1px solid ${colors.primary};
    color: ${colors.primary};

    &.primary {
      background: ${colors.primary};
      color: #fff;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px ${colors.primary}44;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover { background: ${colors.primary}; }
`
