import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const ProgressContainer = styled.div`
  margin-top: 16px;
  height: 8px;
  width: 100px;
  background-color: ${colors.textColor};
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${colors.blue}, ${colors.lightPurple});

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
`

export const SkilContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 40px;
  border-radius: 18%;
  background-color:hsl(218, 22.20%, 21.20%);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;

  @media (max-width: ${breakpoints.tablet}) {
    width: 80px;
  }

    &:hover {
      transform: scale(1.1);
    }

    h4 {
      text-align: center;
      margin-bottom: 8px;
      color: ${colors.white};
    }

    img {
      width: 70px;
      text-align: center;

      @media (max-width: ${breakpoints.tablet}) {
        width: 56px;
      }
    }

    p {
      color: ${colors.textColor};
      margin-top: 6px;
      font-size: 10px;
    }
`
