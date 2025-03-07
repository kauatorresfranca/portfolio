import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Background = styled.div`
  padding-top: 32px;
  background-color: ${(props) => props.theme.background};

  h3 {
    font-size: 24px;
    margin-bottom: 32px;
    text-align: center;

    svg {
      margin-right: 6px;
    }
  }
`

export const SkilArea = styled.div`
  display: flex;
  flex-direction: column;
`

export const AreaLeft = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  p {
    font-size: 10px;
    color: ${(props) => props.theme.textColor}
  }
`

export const Acordeon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-radius: 25px;
  margin-bottom: 32px;
  background-color: ${(props) => props.theme.secondaryBackground};
  cursor: pointer;
  box-shadow: 2px 2px 2px 1.5px rgba(0, 0, 0, 0.2);

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
    margin-bottom: 24px;
    width: 100%;
    max-width: 80vw;
  }

  & > svg {
    transition: ease-in-out .4s;
  }

  & > svg.open {
    transform: rotate(180deg);
  }
`


export const ListSkil = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  opacity: 0;
  visibility: hidden;
  height: 0;
  transition: opacity .9s ease-in, height .9s ease-in;

  &.active {
    opacity: 1;
    visibility: visible;
    height: auto;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

`

export const Skil = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 40px;
  border-radius: 18%;
  background-color: ${colors.lightBlack};
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

export const ProgressContainer = styled.div`
  margin-top: 16px;
  height: 8px;
  width: 100px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
`;

export const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg,, #133168);

  &.html {
    width: 90%;
  }

  &.css {
    width: 80%;
  }

  &.js {
    width: 60%;
  }

  &.ts {
    width: 55%;
  }

  &.react {
    width: 75%;
  }

  &.postgres {
    width: 50%;
  }

  &.py {
    width: 60%;
  }

  &.git {
    width: 80%;
  }
`
