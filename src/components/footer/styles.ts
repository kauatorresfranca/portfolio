import styled from "styled-components"
import { colors } from "../../styles"

export const Background = styled.div`
  background-color: ${colors.lightBlack};
  padding: 18px;
`

export const Container = styled.footer`
  text-align: center;
  background-color: ${colors.lightBlack};

  p {
    font-size: 12px;
    color: ${colors.textColor}
  }
`
