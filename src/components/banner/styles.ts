import styled from "styled-components"
import { breakpoints, colors } from "../../styles"


export const background = styled.div`
  background-color: ${(props) => props.theme.background}
`

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 128px;
  padding-bottom: 32px;

  img {
    width: 320px;
    transition: .5s ease-out;

    &:hover {
      transform: scale(1.1)
    }
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
  margin-right: 280px;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    align-items: center;
    margin-right: 0;

    h4 {
      margin-top: 6px;
    }
  }

  h4 {
    font-size: 12px;
    color: ${(props) => props.theme.textColor};
    margin-bottom: 12px;
  }

  button {
  width: 240px;
  height: 36px;
  font-weight: 700;
  background-color: ${(props) => props.theme.secondaryBackground};
  color: ${(props) => props.theme.titleColor};
  border: 2px solid ${(props) => props.theme.detach};
  border-radius: 12px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
  }

    &:hover {
      color: ${(props) => props.theme.secondaryBackground};
      background-color: ${colors.blue};
    }
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme.titleColor};
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  span {
    color: ${(props) => props.theme.detach};
    display: block;
    position: relative;
    width: 0;
  }
`


