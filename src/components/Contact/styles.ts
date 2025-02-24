import styled from "styled-components"
import { breakpoints, colors } from "../../styles"


export const Background = styled.div`
  background-color: ${colors.darkBlack};
  padding-top: 32px;
  padding-bottom: 64px;

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h3 {
    font-size: 24px;
    padding-bottom: 24px;
  }
  }
`

export const ContactForms = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 18px;
  gap: 72px;

  h5 {
    align-items: center
  }

  @media (max-width: ${breakpoints.tablet}){
    display: block;
  }
`

export const ContactForm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  @media (max-width: ${breakpoints.tablet}){
    margin-bottom: 16px;
  }

  svg {
    margin-right: 6px;
  }
`
