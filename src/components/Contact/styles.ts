import styled from "styled-components"
import { breakpoints} from "../../styles"


export const Contact = styled.div`
  padding-top: 32px;
  padding-bottom: 64px;
  background-color: ${(props) => props.theme.background};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > p {
      color: ${(props) => props.theme.textColor};
      margin-bottom: 24px;
    }

    @media (max-width: ${breakpoints.tablet}) {
    p {
      max-width: 80vw;
    }
  }

    h3 {
    padding-bottom: 24px;
    text-align: center;
    font-size: 24px;
  }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  input, textarea {
    width: 100%;
    height: 32px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-bottom: 10px;
    border: 1px solid transparent; /* Define uma borda inicial invisível */
    border-radius: 10px;
    background-color: ${(props) => props.theme.secondaryBackground};
    color: ${(props) => props.theme.textColor};
    box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.2);
    outline: none; /* Remove a borda azul padrão do navegador */
    transition: border 0.3s ease; /* Suaviza a transição da borda */

    @media (max-width: ${breakpoints.desktop}) {
      height: 24px;
      max-width: 80vw;
      width: 100%;
    }
  }

  textarea {
    height: 125px;
    resize: none;
    max-height: 450px;
  }

  input:focus, textarea:focus {
    background-color: ${(props) => props.theme.background};
    border: 1px solid ${(props) => props.theme.detach}; /* Mantém apenas a borda inferior vermelha */
  }

input::placeholder, textarea::placeholder {
  color: ${(props) => props.theme.textColor};
}

  button {
    width: 100%;
    height: 40px;
    margin-top: 16px;
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(to right, ${(props) => props.theme.detach}, ${(props) => props.theme.lightPurple});
    color: #fff;
    border: none;
    transition: all .3s ease-in-out;

    &:hover {
      background: linear-gradient(to top, ${(props) => props.theme.detach}, ${(props) => props.theme.lightPurple});
      transform: scale(1.02)
    }
  }
`

export const ContactWaysContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const ContactWays = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  margin-top: 32px;
  gap: 72px;

  @media (max-width: ${breakpoints.desktop}){
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}){
    grid-template-columns: 1fr;
    gap: 24px;
    justify-content: center;
  }
`

export const ContactWay = styled.div`
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
