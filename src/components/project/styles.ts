import styled from "styled-components"
import { breakpoints } from "../../styles"

export const Project = styled.div`
  background-color: transparent;
  border-radius: 20px;
  transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }

  @media (max-width: ${breakpoints.desktop}) {
      width: 320px;
    }

    p {
      text-align: center;
    }
`

export const ProjectViewContainer = styled.div`
  position: relative;
  border-radius: 11px 11px;
  width: 100% ;
  max-width: 446px;

  > img {
    width: 100% ;
    max-width: 446px;
    height: 100%;
    border-radius: 11px 11px;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }

`

export const projectViewGroup = styled.div`
  position: absolute; /* Para posicionar o conteúdo do grupo dentro do overlay */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta para centralizar o conteúdo exatamente no centro */
  z-index: 2; /* Garante que o conteúdo fique sobre o Overlay */
  opacity: 1;
  transition: opacity 0.4s ease-in;

  h2 {
      color: ${(props) => props.theme.titleColor};
      text-align: center;
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

  &:hover {
    background: ${(props) => props.theme.overlayminor};
    border-bottom: none;

    ${projectViewGroup} {
        opacity: 0;
    }
  }
`


export const TagList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;

  img {
    width: 36px;
    background-color: ${(props) => props.theme.overlay === 'rgba(255, 255, 255, 0.6)' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%;
  }
`

export const Modal = styled.div`
  display: flex;
  position: relative;
  background-color: ${(props) => props.theme.secondaryBackground};
  padding: 20px;
  border-radius: 8px;
  max-width: 100vw;
  width: 80%;
  max-height: 100vh;
  height: 50%;
  box-shadow: 0 4px 10px ${(props) => props.theme.overlay};

  @media (max-width: ${breakpoints.desktop}) {
    height: 70%;
    flex-direction: column;
  }

  video {
  width: 38vw;
  border-radius: 4px 4px 6px 6px;
  box-shadow: 3px 2px 2px 1px rgba(0, 0, 0, 0.3);

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 10px;
    margin-top: 22px;
    margin-bottom: 12px;
    width:75vw;
  }
  }

  svg {
    width: 18px;
    height: 18px;
    position: absolute;
    padding: 3px;
    top: 10px;
    right: 10px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.overlayminor};
      border-radius: 50%;
    }
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

    @media (max-width: ${breakpoints.desktop}) {
      margin-bottom: 8px;
  }
  }

  .description {
    color: ${(props) => props.theme.textColor};

    @media (max-width: ${breakpoints.desktop}) {
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

  @media (max-width: ${breakpoints.desktop}) {
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

  @media (max-width: ${breakpoints.desktop}) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    flex-direction: column;
  }
`

export const PrimaryButton = styled.button`
  width: 340px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.titleColor};
  transition: background 2s ease, transform 0.3s ease;

  &:hover{
    cursor: pointer;
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.desktop}) {
      width: 320px;
      height: 40px;
    }
`

export const SecundaryButton = styled.button`
  background: linear-gradient(to right, ${(props) => props.theme.detach}, ${(props) => props.theme.lightPurple});
  color: #fff;
  width: 340px;
  height: 40px;
  border: none;
  border-radius: 10px;
  transition: background 2s ease, transform 0.3s ease;
  margin-right: 8px;

  &:hover{
    cursor: pointer;
    background: linear-gradient(to left, ${(props) => props.theme.detach}, ${(props) => props.theme.lightPurple});
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.desktop}) {
      width: 320px;
      height: 40px;
      margin-top: 8px;
      margin-right: 0;
    }
`
