import { useState } from 'react'
import * as S from './styles'
import { colors } from '../../styles'

const Header = () => {
  const [hamburguerIsOpen, setHamburgerIsOpen] = useState(false)

  return (
    <>
      <S.Container>
        <S.TopHeader>
          <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={colors.blue} className="bi bi-code-slash" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
          </svg> Portfólio</h1>
          {hamburguerIsOpen ? (
            <S.ExitHamburguerMenu onClick={() => setHamburgerIsOpen(!hamburguerIsOpen)} ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg></S.ExitHamburguerMenu>
          ) : (<S.HamburguerMenu onClick={() => setHamburgerIsOpen(!hamburguerIsOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </S.HamburguerMenu>)
          }
        </S.TopHeader>
        <nav>
          <S.Links className={hamburguerIsOpen ? 'active' : ''}>
            <li><a href="#about">About me</a></li>
            <li><a href="#skils">Skils</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </S.Links>
        </nav>
      </S.Container >
    </>
  )
}

export default Header
