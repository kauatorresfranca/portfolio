import styled from "styled-components"
import { breakpoints} from "../../styles"


export const Background = styled.div`
  background-color: ${(props) => props.theme.background};
  padding-top: 32px;
  padding-bottom: 64px;

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p {
      color: ${(props) => props.theme.textColor}
    }

    @media (max-width: ${breakpoints.tablet}) {
    p {
      max-width: 90vw;
    }
  }

    h3 {
    font-size: 24px;
    padding-bottom: 24px;
  }
  }
`

export const ContactForms = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-evenly;
  margin-top: 32px;
  gap: 72px;

  @media (max-width: ${breakpoints.desktop}){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}){
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    justify-content: center;
  }
`

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  a {
    text-decoration: none;
  }

  h5 {
    color: ${(props) => props.theme.textColor};
    align-items: center;
    margin-top: 4px;
  }

  @media (max-width: ${breakpoints.tablet}){
    margin-bottom: 16px;
  }

  svg {
    margin-bottom: 4px;
    padding: 12px;
    border-radius: 20px;
    transition: .4s ease;
    background-color: ${(props) => props.theme.secondaryBackground};

    &:hover{
      transform: scale(1.2);
    }
  }
`
