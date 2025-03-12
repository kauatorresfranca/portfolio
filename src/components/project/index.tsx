import { useState, useRef  } from 'react'
import * as S from './styles'

type skil = {
  type: 'react' | 'html' | 'css' | 'js' | 'ts' | 'redux' | 'python' | 'django' | 'postgress' | 'git' | 'sc' | 'vue'
}

type Props = {
  title: string,
  description: string,
  imgPath: string,
  videoPath?: string,
  gitHubUrl: string,
  projectViewUrl: string,
  skils: skil[],
  date: string
}

const skillIcons: Record<skil['type'], string> = {
  html: '/html_icon.png',
  css: '/css_icon.png',
  js: '/js_icon.png',
  react: '/react_icon.png',
  ts: '/ts_icon.png',
  redux: '/redux_icon.png',
  python: '/py_icon.png',
  django: '/django_icon.png',
  postgress: '/postgress_icon.png',
  git: '/git_icon.png',
  sc: '/styledcomponents.svg',
  vue: '/vue.icon.png'
}

const Project = ({ title, description, gitHubUrl, projectViewUrl, videoPath, imgPath, skils, date }: Props) => {

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    if (videoRef.current) {
      videoRef.current.pause(); // Pausa o vídeo ao fechar a modal
      videoRef.current.currentTime = 0; // Opcional: Reseta o vídeo para o início
    }
  }

  return (
    <>
      <S.Project>
        <S.ProjectViewContainer onClick={openModal}>
          <img src={imgPath} />
          <S.Overlay >
            <S.projectViewGroup>
              <h2>{title}</h2>
              <S.TagList>
                {skils.map((skill, index) => (
                  <S.SkillTag key={index}>
                    <img src={skillIcons[skill.type]} alt={`imagem ${skill.type}`} />
                  </S.SkillTag>
                ))}
              </S.TagList >
            </S.projectViewGroup>
          </S.Overlay>
        </S.ProjectViewContainer>
      </S.Project>

      <S.OverlayModal onClick={closeModal} className={modalIsOpen ? 'active' : ''}>
        <S.Modal onClick={(e) => e.stopPropagation()}>
          <div className='imgGroup'>
            <video ref={videoRef} controls>
                <source src={videoPath} type="video/mp4" />
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
            <S.ButtonGroup>
              <a href={gitHubUrl}><S.PrimaryButton>Ver no GitHub</S.PrimaryButton></a>
              <a href={projectViewUrl}><S.SecundaryButton>Ver Projeto</S.SecundaryButton></a>
            </S.ButtonGroup>
          </div>
          <S.Description>
            <h2>{title}</h2>
            <p className='description'>{description}</p>
            <p className='date'>{date}</p>
          </S.Description>
          <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
          </svg>
        </S.Modal>
      </S.OverlayModal>
    </>
  )
}

export default Project
