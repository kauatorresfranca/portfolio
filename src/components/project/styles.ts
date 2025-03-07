import styled from "styled-components"
import { breakpoints } from "../../styles"

export const Project = styled.div`
  background-color: ${(props) => props.theme.secondaryBackground};
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
  background: ${(props) => props.theme.overlay};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px 10px 14px 14px;
  z-index: 1;
  transition: background 0.4s ease-in;
  cursor: pointer;
  border-bottom: 4px solid ${(props) => props.theme.detach};

  &:hover {
    background: ${(props) => props.theme.overlayminor};
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
      color: ${(props) => props.theme.titleColor};
      text-align: center;
    }
`

export const TagList = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;

  img {
    width: 36px;
    background-color: ${(props) => props.theme.overlay === 'rgba(255, 255, 255, 0.6)' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%;
  }
`

export const Modal = styled.div`
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 20px;
  border-radius: 8px;
  max-width: 100vw;
  width: 80%;
  max-height: 100vh;
  height: 50%;
  box-shadow: 0 4px 10px ${(props) => props.theme.overlay};

  @media (max-width: ${breakpoints.tablet}) {
    height: 70%;
    flex-direction: column;
  }

  img {
  width: 38vw;
  border-radius: 4px 4px 6px 6px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 10px;
    margin-top: 22px;
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

    @media (max-width: ${breakpoints.tablet}) {
      margin-bottom: 8px;
  }
  }

  .description {
    color: ${(props) => props.theme.textColor};

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 15px;
  }
  }

  .date {
    position: absolute;
    bottom: 18px;
    right: 12px;
    font-size: 14px;
    color: ${(props) => props.theme.detach};
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
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.titleColor};
  width: 260px;
  height: 32px;
  border: none;
  border-radius: 10px;
  transition: background 2s ease, transform 0.3s ease;

  &:hover{
    cursor: pointer;
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 320px;
      height: 40px;
    }
`

export const SecundaryButton = styled.button`
  background: linear-gradient(to right, ${(props) => props.theme.detach}, ${(props) => props.theme.lightPurple});
  color: #fff;
  width: 260px;
  height: 32px;
  border: none;
  border-radius: 10px;
  transition: background 2s ease, transform 0.3s ease;
  margin-right: 8px;

  &:hover{
    cursor: pointer;
    background: linear-gradient(to left, ${(props) => props.theme.detach}, ${(props) => props.theme.lightPurple});
    transform: scale(1.05);
  }

  @media (max-width: ${breakpoints.tablet}) {
      width: 320px;
      height: 40px;
      margin-top: 8px;
      margin-right: 0;
    }
`
