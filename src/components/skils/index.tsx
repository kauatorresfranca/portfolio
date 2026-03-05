import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import * as S from "./styles"
import Skil from '../skil'

// Importações completas
import html from '/html.png'
import css from '/css.svg'
import js from '/js.png'
import ts from '/ts.png'
import react from '/react.png'
import postgres from '/postgrees.png'
import py from '/py.png'
import git from '/git.png'
import redux from '/redux.svg'
import django from '/django_icon.png'
import sc from '/styledcomponents.png'
import vue from '/vue.icon.png'
import sass from '/sass_icon.png'
import cypress from '/cypress_icon.svg'

const Skils = () => {
  const [activeArea, setActiveArea] = useState<string | null>('front')

  const skillData = {
    front: [
      { title: 'Html', img: html, percentage: 90, desc: 'É uma linguagem de marcação usada para estruturar páginas web' },
      { title: 'Css', img: css, percentage: 95, desc: 'Responsável pela estilização das páginas e layouts responsivos' },
      { title: 'Js', img: js, percentage: 70, desc: 'Linguagem de programação que adiciona interatividade e dinamismo' },
      { title: 'Ts', img: ts, percentage: 65, desc: 'Superset do JavaScript que adiciona tipagem estática e segurança' },
      { title: 'React', img: react, percentage: 75, desc: 'Biblioteca para criação de interfaces interativas e componentes' },
      { title: 'Redux', img: redux, percentage: 65, desc: 'Biblioteca para gerenciamento de estado global da aplicação' },
      { title: 'Css-in-Js', img: sc, percentage: 90, desc: 'Técnica para escrever estilos dentro do JavaScript (Styled Components)' },
      { title: 'Sass', img: sass, percentage: 50, desc: 'Pré-processador CSS que permite estilos dinâmicos e modulares' },
      { title: 'Vue', img: vue, percentage: 40, desc: 'Framework progressivo para construção de interfaces reativas' },
    ],
    back: [
      { title: 'Postgres', img: postgres, percentage: 65, desc: 'Banco de dados relacional poderoso e escalável' },
      { title: 'Python', img: py, percentage: 70, desc: 'Linguagem versátil para backend e automação' },
      { title: 'Django', img: django, percentage: 50, desc: 'Framework web em Python focado em rapidez e segurança' },
    ],
    tools: [
      { title: 'Git', img: git, percentage: 80, desc: 'Sistema de controle de versão distribuído' },
      { title: 'Cypress', img: cypress, percentage: 45, desc: 'Framework de testes end-to-end para aplicações web' },
    ]
  }

  return (
    <S.Background id="skils">
      <div className="container">
        <S.SectionTitle>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
          </svg>
          <h3>Minhas Skills</h3>
        </S.SectionTitle>

        <S.AccordionContainer>
          {Object.entries(skillData).map(([key, skills]) => (
            <S.SkillArea key={key}>
              <S.Acordeon
                onClick={() => setActiveArea(activeArea === key ? null : key)}
                isActive={activeArea === key}
              >
                <S.AreaLeft>
                  <div className="icon-wrapper">
                     {key === 'front' ? '💻' : key === 'back' ? '⚙️' : '🛠️'}
                  </div>
                  <div>
                    <h4>{key === 'front' ? 'Front-end' : key === 'back' ? 'Back-end' : 'Tools'}</h4>
                    <span>{skills.length} tecnologias dominadas</span>
                  </div>
                </S.AreaLeft>
                <S.ArrowIcon isOpen={activeArea === key}>
                   <i className="ri-arrow-down-s-line"></i>
                </S.ArrowIcon>
              </S.Acordeon>

              <AnimatePresence>
                {activeArea === key && (
                  <S.SkilContent
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <S.ListSkil>
                      {skills.map((s) => (
                        <Skil
                          key={s.title}
                          title={s.title}
                          img={s.img}
                          percentage={s.percentage}
                          description={s.desc}
                        />
                      ))}
                    </S.ListSkil>
                  </S.SkilContent>
                )}
              </AnimatePresence>
            </S.SkillArea>
          ))}
        </S.AccordionContainer>
      </div>
    </S.Background>
  )
}

export default Skils
