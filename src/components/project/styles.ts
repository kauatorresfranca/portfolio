import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Project = styled.div`
  background-color: transparent;
  border-radius: 20px;
  transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }

    p {
      text-align: center;
    }

    @media (max-width: ${breakpoints.desktop}) {
      width: 320px;
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
  }

  @media (max-width: ${breakpoints.desktop}) {
      > img {
        width: 100%;
      }
    }

`

export const ProjectTitle = styled.div`
  position: absolute; /* Para posicionar o conteúdo do grupo dentro do overlay */
  top: 50%; /* Centraliza verticalmente */
  left: 50%; /* Centraliza horizontalmente */
  transform: translate(-50%, -50%); /* Ajusta para centralizar o conteúdo exatamente no centro */
  z-index: 2; /* Garante que o conteúdo fique sobre o Overlay */
  opacity: 1;
  transition: opacity 0.4s ease-in;

  h2 {
      color: ${colors.title};
      text-align: center;
    }
`

export const TagList = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.4s ease-in;

  img {
    width: 24px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 50%;
  }
`

export const Overlay = styled.div`
  position: absolute;
  background: ${colors.overlay};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 10px 10px 14px 14px;
  z-index: 1;
  transition: background 0.4s ease-in;
  cursor: pointer;

  &:hover {
    background: ${colors.overlayminor};
    border-bottom: none;

    ${ProjectTitle}, ${TagList} {
        opacity: 0;
    }
  }
`

export const Modal = styled.div`
  display: flex;
  position: relative;
  background-color: ${colors.secondaryBackground};
  padding: 20px;
  border-radius: 8px;
  max-width: 100vw;
  width: 80%;
  max-height: 100vh;
  height: 400px;
  box-shadow: 0 4px 10px ${colors.overlay};

  .imgGroup {
    width: 100%;
  }

  video {
    height: 80%;
    width: 100%;
    border-radius: 4px 4px 6px 6px;
    box-shadow: 3px 2px 2px 1px rgba(0, 0, 0, 0.3);
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
      background-color: ${colors.overlayminor};
      border-radius: 50%;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    height: 70%;
    flex-direction: column;

    video {
      margin-top: 22px;
      margin-bottom: 12px;
      width: 100%;
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
  }

  .description {
    color: ${colors.text};
  }

  .date {
    position: absolute;
    bottom: 18px;
    right: 12px;
    font-size: 14px;
    color: ${colors.text};
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 8px;
    text-align: center;

    h2 {
      margin-bottom: 8px;
    }

    .description {
      font-size: 15px;
    }

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
  background-color: ${colors.background};
  color: ${colors.title};
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
  background-color: ${colors.primary};
  color: #fff;
  width: 340px;
  height: 40px;
  border: none;
  border-radius: 10px;
  transition: background 2s ease, transform 0.3s ease;
  margin-right: 8px;

  &:hover{
    cursor: pointer;
    background: linear-gradient(to left, ${colors.primary}, ${colors.lightPurple});
    transform: scale(1.02);
  }

  @media (max-width: ${breakpoints.desktop}) {
      width: 320px;
      height: 40px;
      margin-top: 8px;
      margin-right: 0;
    }
`
