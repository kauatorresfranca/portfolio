import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Project = styled.div`
  width: 280px;
  position: relative;
  max-width: 100%;
  background-color: ${colors.lightBlack};
  height: 480px;
  border-radius: 20px;
  transition: transform 0.5s ease;
  box-shadow: 2px 1px 1px 1px rgb(42, 48, 58);

    &:hover {
      transform: scale(1.05);
    }

  @media (max-width: ${breakpoints.tablet}) {
      height: 488px;
      width: 320px;
    }

  img {
    width: 280px;
    max-width: 100%;
    border-radius: 20px 20px 0 0;

    @media (max-width: ${breakpoints.tablet}) {
      width: 320px;
    }
  }

  h2 {
      margin-bottom: 8px;
      text-align: center;
    }

    p {
      text-align: center;
    }
`
export const TagList = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
`

export const PrimaryButton = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  width: 260px;
  height: 32px;
  border: none;
  margin-bottom: 8px;
  border-radius: 10px;
  margin-top: 24px;

  &:hover{
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 280px;;
    }
`

export const SecundaryButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.lightBlack};
  width: 260px;
  height: 32px;
  border: none;
  border-radius: 10px;

  &:hover{
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 280px;;
    }
`
