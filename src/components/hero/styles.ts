import styled from "styled-components"
import { breakpoints, colors } from "../../styles"


export const background = styled.div`
  background-color: ${colors.background}
`

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 128px;
  padding-bottom: 32px;

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;

  h4 {
    font-size: 12px;
    color: ${colors.text};
    margin-bottom: 12px;
  }

  button {
    width: 240px;
    height: 36px;
    font-weight: 700;
    background-color: ${colors.secondaryBackground};
    color: ${colors.title};
    border: 2px solid ${colors.detach};
    border-radius: 12px;
    cursor: pointer;

  i {
    margin-right: 6px;
  }

    &:hover i {
      color: ${colors.secondaryBackground};
    }

    &:hover {
      color: ${colors.secondaryBackground};
      background-color: ${colors.detach};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    margin-right: 0;

    button {
      width: 280px;
    }

    h4 {
      margin-top: 6px;
    }
  }
`

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  color: ${colors.text};
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


