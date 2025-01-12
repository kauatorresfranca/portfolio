import styled from "styled-components"
import { breakpoints } from "../../styles"

export const Container = styled.div`
  padding-top: 32px;
  padding-bottom: 64px;

  h3 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;

      svg {
        margin-right: 6px;
      }
  }
`

export const Project = styled.div`
  width: 280px;
  max-width: 100%;
  background-color: #1f2732;
  height: 480px;
  border-radius: 20px;

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

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;

  @media (max-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr;
      justify-items: center;
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
`

export const PrimaryButton = styled.button`
  background-color: #65dddd;
  color: #1f2732;
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
  background-color: #2a3342;
  color: #fff;
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




