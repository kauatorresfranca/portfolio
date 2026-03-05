import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import * as S from './styles'
import { ProjectData, skillIcons } from '../../data/projects'

const ProjectCard = (props: ProjectData) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <S.Card
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -8 }}
        onClick={() => setIsOpen(true)}
      >
        <S.ImageWrapper>
          <img src={props.imgPath} alt={props.title} />
          <S.CardOverlay className="overlay">
            <span>Ver Detalhes</span>
          </S.CardOverlay>
        </S.ImageWrapper>

        <S.CardContent>
          <h3>{props.title}</h3>
          <S.TechListShort>
            {props.skils.slice(0, 5).map(s => (
              <img key={s.type} src={skillIcons[s.type]} alt={s.type} title={s.type} />
            ))}
          </S.TechListShort>
        </S.CardContent>
      </S.Card>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <S.ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <S.ModalContainer
                onClick={e => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <S.CloseBtn onClick={() => setIsOpen(false)}>&times;</S.CloseBtn>

                <S.ModalGrid>
                  <div className="media-side">
                    {props.videoPath ? (
                      <video autoPlay loop muted playsInline controls>
                        <source src={props.videoPath} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={props.imgPath} alt={props.title} />
                    )}
                  </div>

                  <div className="info-side">
                    <h2>{props.title}</h2>
                    <p className="desc">{props.description}</p>

                    <S.TechRow>
                      {props.skils.map(s => (
                        <S.Badge key={s.type}>{s.type}</S.Badge>
                      ))}
                    </S.TechRow>

                    <S.ModalActions>
                      <a href={props.gitHubUrl} target="_blank" rel="noreferrer">GitHub</a>
                      {props.projectViewUrl && (
                        <a href={props.projectViewUrl} target="_blank" rel="noreferrer" className="primary">Ver Site</a>
                      )}
                    </S.ModalActions>
                    <span className='date-label'>{props.date}</span>
                  </div>
                </S.ModalGrid>
              </S.ModalContainer>
            </S.ModalOverlay>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default ProjectCard
