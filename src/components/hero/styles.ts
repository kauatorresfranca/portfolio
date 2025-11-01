import styled, { keyframes } from "styled-components"
import { breakpoints, colors } from "../../styles"

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`

export const Hero = styled.div`
  background-image: url('../../../../assets/images/background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;

  i {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    color: ${colors.text};
    animation: ${bounce} 2s infinite;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 320px;
    transition: .5s ease-out;

    &:hover {
      transform: scale(1.1)
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    justify-content: space-around;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`

export const Description = styled.div`
  color: ${colors.text};
  font-size: 14px;
  font-weight: 400;
  max-width: 800px;
  text-align: center;
`

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  color: ${colors.title};
  font-size: 36px;
  font-weight: 700;
  white-space: nowrap;

  span {
    display: block;
    position: relative;
    width: 0;
    color: ${colors.detach};
  }
`

export const SubTitle = styled.h3`
  color: ${colors.subTitle};
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;

  span {
    color: ${colors.primary};
  }
`


