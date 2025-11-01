import * as S from './styles'

const Hero = () => {
  return (
    <S.Hero>
        <S.HeroContent>
          <S.SubTitle>
            Hello World! Meu nome é <span>Kauã Torres</span> e sou
          </S.SubTitle>
          <S.Title>
              Desenvolvedor Fullstack
          </S.Title>
          <S.Description>
            Transformo necessidades em aplicações reais, evolventes e funcionais. Desenvolvo sistemas através da minha paixão pela tecnologia, contribuindo com soluções inovadoras e eficazes para desafios complexos.
          </S.Description>
        </S.HeroContent>
        <i className="ri-arrow-down-double-fill"></i>
    </S.Hero>
  )
}

export default Hero
