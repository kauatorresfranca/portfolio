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
    margin-left: 16px;
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

  &.active {
      display: flex;
    }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
    margin-top: 18px;
    margin-right: 16px;
    gap: 0;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #D3D3D3;
    font-size: 18px;

    @media (max-width: ${breakpoints.tablet}) {
    margin-right: 32px;
  }

    &:hover {
      border-bottom: 2px solid #65dddd;
      color: #fff;
    }
  }
`

export const HamburguerMenu = styled.div`
  display: none;
  width: 32px;
  margin-right: 16px;
  span {
    height: 2px;
    background-color: #fff;
    width: 100%;
    display: block;
    margin-bottom: 4px;
  }
    @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
