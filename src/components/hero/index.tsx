import { useEffect, useState, useMemo } from 'react'
import * as S from './styles'
import me from '../../../assets/images/me.jpg'
import ParticlesBackground from './particlesBackground'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState({ part1: '', highlight: '', part2: '' })

  const text = {
    p1: "Hello World! Meu nome é ",
    h: "Kauã Torres",
    p2: " e sou"
  }

  useEffect(() => {
    let currentPos = 0
    const fullLength = text.p1.length + text.h.length + text.p2.length

    const interval = setInterval(() => {
      currentPos++

      const newText = {
        part1: text.p1.slice(0, Math.max(0, Math.min(currentPos, text.p1.length))),
        highlight: text.h.slice(0, Math.max(0, Math.min(currentPos - text.p1.length, text.h.length))),
        part2: text.p2.slice(0, Math.max(0, currentPos - text.p1.length - text.h.length))
      }

      setDisplayedText(newText)

      if (currentPos >= fullLength) clearInterval(interval)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const memoizedParticles = useMemo(() => <ParticlesBackground />, [])

  return (
    <S.Hero id="home">
      {memoizedParticles}

      <S.HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <S.ProfileWrapper>
          <img src={me} alt="Kauã Torres" />
        </S.ProfileWrapper>

        <S.SubTitle>
          {displayedText.part1}
          <span className="highlight">{displayedText.highlight}</span>
          {displayedText.part2}
          <span className="cursor">|</span>
        </S.SubTitle>

        <S.Title>
          Desenvolvedor <span>Fullstack</span>
        </S.Title>

        <S.Description>
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas através da minha paixão pela tecnologia,
          contribuindo com soluções inovadoras e eficazes para desafios complexos.
        </S.Description>

        <S.SocialLinks>
          <a href="https://github.com/kauatorresfranca" target="_blank" rel="noreferrer">
            <i className="ri-github-line"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kauatorres/" target="_blank" rel="noreferrer">
            <i className="ri-linkedin-line"></i>
            <span>LinkedIn</span>
          </a>
        </S.SocialLinks>
      </S.HeroContent>

      <S.ScrollArrow href="#about">
        <i className="ri-arrow-down-double-fill"></i>
      </S.ScrollArrow>
    </S.Hero>
  )
}

export default Hero
