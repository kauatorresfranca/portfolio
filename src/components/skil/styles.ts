import styled from "styled-components"
import { motion } from "framer-motion"
import { colors } from "../../styles"

export const SkilCard = styled(motion.div)`
  height: 200px;
  width: 100%;
  perspective: 1000px;
  cursor: pointer;
`

export const CardInner = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
`

const CardBase = styled.div`
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  background: ${colors.secondaryBackground || '#1e2128'};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`

export const CardFront = styled(CardBase)`
  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-bottom: 12px;
  }

  h4 {
    font-size: 16px;
    color: ${colors.title};
    margin-bottom: 20px;
  }
`

export const ProgressWrapper = styled.div`
  width: 80%;
  background: rgba(255, 255, 255, 0.1);
  height: 6px;
  border-radius: 10px;
  position: relative;

  .bar {
    height: 100%;
    background: linear-gradient(90deg, ${colors.primary}, #6366f1);
    border-radius: 10px;
  }

  span {
    position: absolute;
    top: -18px;
    right: 0;
    font-size: 10px;
    font-weight: bold;
    color: ${colors.primary};
  }
`

export const CardBack = styled(CardBase)`
  transform: rotateY(180deg);
  background: ${colors.background};
  border: 1px solid ${colors.primary}44;
  text-align: center;

  h5 {
    color: ${colors.primary};
    margin-bottom: 8px;
    font-size: 14px;
    text-transform: uppercase;
  }

  p {
    font-size: 12px;
    line-height: 1.5;
    color: ${colors.text};
  }

  .tap-hint {
    margin-top: auto;
    font-size: 9px;
    opacity: 0.4;
    color: ${colors.text};
  }
`
