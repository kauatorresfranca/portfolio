import html from '../../../assets/images/html.webp'
import css from '../../../assets/images/css.svg'
import js from '../../../assets/images/js.png'
import ts from '../../../assets/images/ts.png'
import react from '../../../assets/images/react.png'
import postgres from '../../../assets/images/postgrees.png'
import py from '../../../assets/images/py.png'
import git from '../../../assets/images/git.png'
import redux from '../../../assets/images/redux.svg'
import django from '../../../assets/images/django.png'

import * as S from "./styles"
import Skil from '../skil'
import { colors } from '../../styles'
import { useState } from 'react'


const Skils = () => {
  const [frontIsOpen, setFrontIsOpen] = useState(true)
  const [backIsOpen, setBackIsOpen] = useState(false)
  const [toolsIsOpen, setToolsIsOpen] = useState(false)

  return (

    <S.Background id="skils">
      <div className="container">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.blue} className="bi bi-diamond" viewBox="0 0 16 16">
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
          </svg>
          Skils</h3>
        <div>
          <S.SkilArea className="front">
            <S.Acordeon onClick={() => { setFrontIsOpen(!frontIsOpen) }}>
              <S.AreaLeft>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.blue} className="bi bi-code-slash" viewBox="0 0 16 16">
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                </svg>
                <div>
                  <h4>Front-end</h4>
                  <p>more than 1 year</p>
                </div>
              </S.AreaLeft>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.blue} className={frontIsOpen ? 'bi bi-chevron-compact-down open' : 'bi bi-chevron-compact-down'} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
              </svg>
            </S.Acordeon>
            <S.ListSkil className={frontIsOpen ? 'active' : ''}>
              <Skil percentage='90%' title='Html' img={html} />
              <Skil percentage='80%' title='Css' img={css} />
              <Skil percentage='70%' title='Js' img={js} />
              <Skil percentage='65%' title='Ts' img={ts} />
              <Skil percentage='75%' title='React' img={react} />
              <Skil percentage='65%' title='Redux' img={redux} />
            </S.ListSkil>
          </S.SkilArea>
          <S.SkilArea className="back">
            <S.Acordeon onClick={() => { setBackIsOpen(!backIsOpen) }}>
              <S.AreaLeft>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.blue} className="bi bi-database" viewBox="0 0 16 16">
                  <path d="M4.318 2.687C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4c0-.374.356-.875 1.318-1.313M13 5.698V7c0 .374-.356.875-1.318 1.313C10.766 8.729 9.464 9 8 9s-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777A5 5 0 0 0 13 5.698M14 4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13zm-1 4.698V10c0 .374-.356.875-1.318 1.313C10.766 11.729 9.464 12 8 12s-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777A5 5 0 0 0 13 8.698m0 3V13c0 .374-.356.875-1.318 1.313C10.766 14.729 9.464 15 8 15s-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13s3.022-.289 4.096-.777c.324-.147.633-.323.904-.525" />
                </svg>
                <div>
                  <h4>Back-end</h4>
                  <p>more than 1 year</p>
                </div>
              </S.AreaLeft>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.blue} className={backIsOpen ? 'bi bi-chevron-compact-down open' : 'bi bi-chevron-compact-down'} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
              </svg>
            </S.Acordeon>
            <S.ListSkil className={backIsOpen ? 'active' : ''}>
              <Skil percentage='65%' title='Postgres' img={postgres} />
              <Skil percentage='70%' title='Python' img={py} />
              <Skil percentage='50%' title='django' img={django} />
            </S.ListSkil>
          </S.SkilArea>
          <S.SkilArea className="tools">
            <S.Acordeon onClick={() => { setToolsIsOpen(!toolsIsOpen) }}>
              <S.AreaLeft>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.blue} className="bi bi-tools" viewBox="0 0 16 16">
                  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
                </svg>
                <div>
                  <h4>Tools</h4>
                  <p>more than 1 year</p>
                </div>
              </S.AreaLeft>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.blue} className={toolsIsOpen ? 'bi bi-chevron-compact-down open' : 'bi bi-chevron-compact-down'} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
              </svg>
            </S.Acordeon>
            <S.ListSkil className={toolsIsOpen ? 'active' : ''}>
              <Skil percentage='80%' title='Git' img={git} />
            </S.ListSkil>
          </S.SkilArea>
        </div>
      </div>
    </S.Background>
  )
}

export default Skils
