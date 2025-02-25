import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Project = styled.div`
  background-color: ${colors.lightBlack};
  border-radius: 20px;
  transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }

  @media (max-width: ${breakpoints.tablet}) {
      width: 320px;
    }

    p {
      text-align: center;
    }
`

export const ProjectViewContainer = styled.div`
  position: relative;

  > img {
    width: 446px;
    max-width: 100%;
    border-radius: 11px 11px;

    @media (max-width: ${breakpoints.tablet}) {
      width: 320px;
    }
  }

`

export const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px 10px 14px 14px;
  z-index: 1;
  transition: background 0.4s ease-in;
  cursor: pointer;
  border-bottom: 4px solid ${colors.blue};

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    border-bottom: none;
  }
`

export const projectViewGroup = styled.div`
  position: absolute; /* Para posicionar o conteúdo do grupo dentro do overlay */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta para centralizar o conteúdo exatamente no centro */
  z-index: 2; /* Garante que o conteúdo fique sobre o Overlay */

  h2 {
      text-align: center;
    }
`

export const TagList = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;

  img {
    width: 40px;
  }
`

export const Modal = styled.div`
  position: relative;
  display: flex;
  background-color: ${colors.lightBlack};
  padding: 20px;
  border-radius: 8px;
  max-width: 100vw;
  width: 80%;
  max-height: 100vh;
  height: 50%;
  box-shadow: 0 4px 10px rgba(1, 0, 0, 0.7);

  @media (max-width: ${breakpoints.tablet}) {
    height: 70%;
    flex-direction: column;
  }

  img {
  width: 38vw;
  border-radius: 12px 12px 20px 20px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 10px;
    margin-top: 24px;
    margin-bottom: 12px;
    width:75vw;
  }
  }

  svg {
    position: absolute;
    top: 12px;
    right: 10px;
    cursor: pointer;
  }
`

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro semitransparente */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.active {
    opacity: 1;
    visibility: visible;
  }
  }
`

export const Description = styled.div`
  margin-left: 24px;

  h2 {
    margin-bottom: 18px;
  }

  .description {
    color: ${colors.textColor};
  }

  .date {
    position: absolute;
    bottom: 18px;
    right: 12px;
    font-size: 14px;
    color: ${colors.blue}
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 8px;
    text-align: center;

    .date {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }
  }
`

export const SkillTag = styled.div`
  diplay: flex;
  align-items: center;
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  bottom: 18px;
  left: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    flex-direction: column;
  }
`

export const PrimaryButton = styled.button`
  background-color: ${colors.darkBlack};
  color: ${colors.white};
  width: 260px;
  height: 32px;
  border: none;
  border-radius: 10px;

  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 360px;
      height: 40px;
    }
`

export const SecundaryButton = styled.button`
  background: linear-gradient(to right, ${colors.blue}, ${colors.lightPurple});
  color: ${colors.white};
  width: 260px;
  height: 32px;
  border: none;
  border-radius: 10px;
  transition: background 2s ease, transform 0.3s ease;
  margin-right: 8px;

  &:hover{
    cursor: pointer;
    background: linear-gradient(to left, ${colors.blue}, ${colors.lightPurple});
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 360px;;
      height: 40px;
      margin-top: 8px;
      margin-right: 0;
    }
`
