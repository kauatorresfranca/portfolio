import * as S from './styles'
import me from '../../../assets/images/me.jpg'
import ParticlesBackground from './particlesBackground'
import { useEffect, useState, useMemo } from 'react'

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const normalText1 = "Hello World! Meu nome é "
  const highlightedText = "Kauã Torres"
  const normalText2 = " e sou"

  useEffect(() => {
    const full = normalText1 + highlightedText + normalText2
    let index = 0
    const interval = setInterval(() => {
      index++
      if (index <= normalText1.length) {
        setDisplayedText(normalText1.slice(0, index))
      } else if (index <= normalText1.length + highlightedText.length) {
        setDisplayedText(
          normalText1 +
            `<span class="highlight">${highlightedText.slice(
              0,
              index - normalText1.length
            )}</span>`
        )
      } else if (index <= full.length) {
        setDisplayedText(
          normalText1 +
            `<span class="highlight">${highlightedText}</span>` +
            normalText2.slice(0, index - normalText1.length - highlightedText.length)
        )
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [])

  // memoriza o fundo de partículas
  const memoizedParticles = useMemo(() => <ParticlesBackground />, [])

  return (
    <S.Hero>
      {memoizedParticles}

      <S.HeroContent>
        <img src={me} alt="Kauã Torres" />

        <S.SubTitle>
          <span dangerouslySetInnerHTML={{ __html: displayedText }} />
          <span className="cursor">|</span>
        </S.SubTitle>

        <S.Title>Desenvolvedor Fullstack</S.Title>
        <S.Description>
          Transformo necessidades em aplicações reais, evolventes e funcionais.
          Desenvolvo sistemas através da minha paixão pela tecnologia,
          contribuindo com soluções inovadoras e eficazes para desafios complexos.
        </S.Description>
      </S.HeroContent>

      <i className="ri-arrow-down-double-fill"></i>
    </S.Hero>
  )
}

export default Hero
