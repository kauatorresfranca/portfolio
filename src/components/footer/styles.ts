import styled from "styled-components"
import { colors } from "../../styles"

export const Footer = styled.div`
  background-color: ${colors.secondaryBackground};
  padding: 18px;
`

export const Container = styled.footer`
  text-align: center;
  background-color: ${colors.secondaryBackground};

  p {
    font-size: 12px;
    color: ${colors.text};
  }
`
