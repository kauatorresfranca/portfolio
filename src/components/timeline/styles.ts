import styled from "styled-components"
import { colors } from "../../styles"

export const TimelineSection = styled.section`
  padding: 4rem 0;

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 24px;
    color: ${colors.title};
    margin-bottom: 32px;

    svg {
      margin-right: 6px;
    }
  }
`

export const TimelineContainer = styled.div`
  position: relative;
  padding-left: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 17px; /* centralizado na bolinha */
    width: 4px;
    height: 100%;
    background: ${colors.primary};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    padding-left: 30px;

    &::before {
      left: 14px;
      width: 3px;
    }
  }
`

export const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }
`

export const Dot = styled.div`
  position: absolute;
  left: 15px; /* centralizado na linha */
  top: 0;
  width: 16px;
  height: 16px;
  background: ${colors.primary};
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 0 0 2px ${colors.primary};
  transition: transform 0.3s;

  ${TimelineItem}:hover & {
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
    left: 12px;
  }
`

export const Content = styled.div`
  padding-left: 50px;
  flex: 1;

  @media (max-width: 768px) {
    padding-left: 40px;
  }
`

export const Title = styled.h4`
  font-size: 1.1rem;
  margin: 0 0 4px 0;
  color: ${colors.primary};
`

export const Subtitle = styled.h5`
  font-size: 0.95rem;
  margin: 0 0 2px 0;
  font-weight: 500;
  color: #ccc;
`

export const Period = styled.div`
  font-size: 0.85rem;
  color: #888;
  margin-bottom: 0.5rem;
`

export const Description = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  margin: 0;
  line-height: 1.4;
`
