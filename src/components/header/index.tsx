import { useState } from 'react'
import * as S from './styles'

const Header = () => {
  const [hamburguerIsOpen, setHamburgerIsOpen] = useState(false)

  return (
    <>
      <S.Container>
        <S.TopHeader>
          <h1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#65dddd" className="bi bi-code-slash" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
          </svg> KAUÃ TORRES</h1>
          <S.HamburguerMenu onClick={() => setHamburgerIsOpen(!hamburguerIsOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </S.HamburguerMenu>
        </S.TopHeader>
        <nav>
          <S.Links className={hamburguerIsOpen ? 'active' : ''}>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#skils">Skils</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </S.Links>
        </nav>
      </S.Container >
    </>
  )
}

export default Header
