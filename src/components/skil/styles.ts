import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProgressContainer = styled.div`
  margin-top: 16px;
  height: 8px;
  width: 100px;
  background-color: #D3D3D3;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${(props) => props.theme.detach}, ${(props) => props.theme.lightPurple});

  &.Html {
    width: 90%;
  }

  &.Css {
    width: 95%;
  }

  &.Js {
    width: 70%;
  }

  &.Ts {
    width: 65%;
  }

  &.React {
    width: 75%;
  }

  &.Postgres {
    width: 65%;
  }

  &.Python {
    width: 70%;
  }

  &.Git {
    width: 80%;
  }

  &.Redux {
    width: 65%;
  }

  &.django {
    width: 50%;
  }

  &.Css-in-Js {
    width: 90%;
  }

  &.Vue{
    width: 40%
  }

  &.Sass{
    width: 50%
  }

  &.Cypress{
    width: 45%
  }
`

export const SkilContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 40px;
  border-radius: 18%;
  background-color: ${(props) => props.theme.secondaryBackground};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: transform .6s ease-in-out;
  transform-style: preserve-3d;

    h4 {
      text-align: center;
      margin-bottom: 8px;
      color: ${(props) => props.theme.titleColor};
    }

    p {
      color: ${(props) => props.theme.textColor};
      margin-top: 6px;
      font-size: 10px;
    }

  @media (max-width: ${breakpoints.desktop}) {
    width: 80px;

    &.flip {
      transform: rotateY(180deg) scale(1.2);
  }

  @media (min-width: ${breakpoints.desktop}) {
    &:hover {
      transform: rotateY(180deg) scale(1.2);
    }
}
`

export const Card = styled.div`
  position: relative;
  width: 100px;
  height: 140px;
  transform-style: preserve-3d;
`

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
      width: 65px;
      text-align: center;
    }

  @media (max-width: ${breakpoints.tablet}) {
      img {
        width: 56px;
      }
    }
`

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);

  h4 {
    font-size: 14px;
    color: ${(props) => props.theme.detach};
  }

  p {
    text-align: center;
  }
`

