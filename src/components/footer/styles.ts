import styled from "styled-components"

export const Footer = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 18px;
`

export const Container = styled.footer`
  text-align: center;
  background-color: ${(props) => props.theme.secondaryBackground};

  p {
    font-size: 12px;
    color: ${(props) => props.theme.textColor};
  }
`
