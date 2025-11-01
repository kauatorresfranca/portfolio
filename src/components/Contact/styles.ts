import styled from "styled-components"
import { breakpoints, colors} from "../../styles"


export const Contact = styled.div`
  padding-top: 32px;
  padding-bottom: 64px;
  background-color: ${colors.background};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > p {
      color: ${colors.text};
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
  margin-bottom: 32px;
  width: 80%;

  div {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }

  input, textarea {
    width: 100%;
    height: 32px;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 2px solid transparent; /* Define uma borda inicial invisível */
    border-radius: 10px;
    background-color: ${colors.secondaryBackground};
    color: ${colors.text};
    box-shadow: 1px 2px rgba(0, 0, 0, 0.2);
    outline: none; /* Remove a borda azul padrão do navegador */
    transition: border 0.3s ease; /* Suaviza a transição da borda */
  }

  textarea {
    height: 125px;
    resize: none;
    max-height: 450px;
    line-height: 1.4;
  }

  /* Label para inputs normais */
  label {
    position: absolute;
    left: 12px;
    top: 18px;
    color: ${colors.text};
    font-size: 14px;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  /* Label para textarea: começa no topo */
  textarea + label {
    top: 16px;
    transform: none;
  }

  input:focus, textarea:focus {
    border: 2px solid ${colors.primary}; /* Mantém apenas a borda inferior vermelha */
    box-shadow: 0px 0px 0px 0px transparent;
  }

  /* Floating effect para inputs */
  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 5px;
    left: 10px;
    font-size: 12px;
    padding: 0 5px;
  }

  /* Floating effect para textarea */
  textarea:focus + label,
  textarea:not(:placeholder-shown) + label {
    top: 5px;
    font-size: 12px;
    padding: 0 5px;
  }

  button {
    width: 100%;
    height: 40px;
    margin-top: 16px;
    cursor: pointer;
    border-radius: 10px;
    background: linear-gradient(to right, ${colors.primary}, ${colors.lightPurple});
    color: #fff;
    border: none;
    transition: all .3s ease-in-out;

    &:hover {
      background: linear-gradient(to top, ${colors.primary}, ${colors.lightPurple});
      transform: scale(1.02);
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
    color: ${colors.text};
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
    background-color: ${colors.secondaryBackground};

    &:hover{
      transform: scale(1.2);
    }
  }
`
