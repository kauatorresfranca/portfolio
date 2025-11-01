import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Projects = styled.div`
  padding-top: 32px;
  padding-bottom: 64px;
  scroll-margin-top: 110px;

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
  position: relative;
  max-width: 100%;
  background-color: ${colors.secondaryBackground};
  height: 480px;
  border-radius: 20px;
  transition: transform 0.5s ease;
  box-shadow: 2px 1px 1px 1px rgb(42, 48, 58);

    &:hover {
      transform: scale(1.05);
    }

  img {
    width: 280px;
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }

  h2 {
      margin-bottom: 8px;
      text-align: center;
    }

    p {
      text-align: center;
    }

    @media (max-width: ${breakpoints.tablet}) {
      height: 488px;
      width: 320px;

      img {
        width: 320px;
      }

    }
`

export const ProjectStack = styled.div`


`

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  justify-items: center;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    max-width: 80vw;
    width: 100%;
  }

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
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
`

export const PrimaryButton = styled.button`
  background-color: ${colors.primary};
  color: #fff;
  width: 260px;
  height: 32px;
  border: none;
  margin-bottom: 8px;
  border-radius: 10px;
  margin-top: 24px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 280px;;
    }
`

export const SecundaryButton = styled.button`
  background-color: #fff;
  color: ${colors.secondaryBackground};
  width: 260px;
  height: 32px;
  border: none;
  border-radius: 10px;

  &:hover{
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 280px;
    }
`

export const SortSelect = styled.select`
  margin-bottom: 20px;
  padding: 8px;
  background-color: ${colors.secondaryBackground};
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  font-size: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
    margin-left: 40px;
  }
`;




