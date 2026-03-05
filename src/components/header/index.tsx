import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import * as S from './styles'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Efeito para mudar o estilo ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen)

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#skils' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <S.HeaderWrapper isScrolled={scrolled}>
      <div className="container">
        <S.HeaderMain>
          <S.Logo href="#">
            <h1>Kauã Torres</h1>
          </S.Logo>

          <S.NavLinks className={menuIsOpen ? 'active' : ''}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMenuIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </S.NavLinks>

          <S.HamburguerMenu
            className={menuIsOpen ? 'active' : ''}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
          </S.HamburguerMenu>
        </S.HeaderMain>
      </div>

      {/* Menu Mobile com Animação */}
      <AnimatePresence>
        {menuIsOpen && (
          <S.MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </S.MobileMenu>
        )}
      </AnimatePresence>
    </S.HeaderWrapper>
  )
}

export default Header
