import styled from "styled-components"
import { breakpoints } from "../../styles"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #1f2732;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }

  H1 {
    font-size: 29px;
    margin-left: 200px;
    color: #fff;
    font-weight: 500;

    @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    margin: 0;
  }

    svg {
      margin-right: 3px;
    }
  }
`

export const Links = styled.ul`
  display: flex;
  gap: 124px;
  margin-right: 200px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 18px;
    gap: 60px;
  }

  a {
    text-decoration: none;
    color: #D3D3D3;
    font-size: 18px;

    &:hover {
      border-bottom: 2px solid #65dddd;
      color: #fff;
    }
  }
`
