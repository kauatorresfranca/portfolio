import styled from 'styled-components'
import { colors } from '../../styles'

export const ProgressContainer = styled.div`
  margin-top: 16px;
  height: 8px;
  width: 100px;
  background-color: ${colors.white};
  border-radius: 10px;
  overflow: hidden;
`

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, ${colors.blue}, ${colors.lightPurple});

  &.Html {
    width: 90%;
  }

  &.Css {
    width: 80%;
  }

  &.Js {
    width: 60%;
  }

  &.Ts {
    width: 55%;
  }

  &.React {
    width: 75%;
  }

  &.Postgres {
    width: 50%;
  }

  &.Py {
    width: 60%;
  }

  &.Git {
    width: 80%;
  }

  &.Redux {
    width: 60%;
  }

  &.django {
    width: 40%;
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

    &:hover {
      transform: scale(1.1);
    }

    h4 {
      text-align: center;
      margin-bottom: 8px;
      color: #D3D3D3;
    }

    .diferent {
      margin-left: 4px;
    }

    img {
      width: 70px;
      text-align: center;
    }
`
