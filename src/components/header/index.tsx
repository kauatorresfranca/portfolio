import { useState } from 'react'
import * as S from './styles'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <div className='container'>
      <S.Header>
        <div className="container">
          <S.TopHeader>
            <a href="#"><h1>Kauã Torres.</h1></a>
            <S.HamburguerMenu
              className={menuIsOpen ? 'active' : ''}
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            >
              <span></span>
            </S.HamburguerMenu>
          </S.TopHeader>
          <S.Links className={menuIsOpen ? 'active' : ''}>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}><a href="#">Inicio</a></li>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}><a href="#about">Sobre</a></li>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}><a href="#skils">Skils</a></li>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}><a href="#projects">Projetos</a></li>
            <li onClick={() => setMenuIsOpen(!menuIsOpen)}><a href="#contact">Contato</a></li>
          </S.Links>
        </div>
      </S.Header>
    </div>
  )
}

export default Header
