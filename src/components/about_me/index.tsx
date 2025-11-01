import { colors } from "../../styles"
import * as S from "./styles"

const AboutMe = () => {
  return (
    <div className="container">
      <S.AboutMe id='about'>
        <S.Description>
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.primary} className="bi bi-diamond" viewBox="0 0 16 16">
              <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
            </svg>
            SOBRE MIM
          </h2>

          <p>
            Sou um <span className="bold">desenvolvedor full stack</span> apaixonado por transformar ideias em soluções digitais completas, unindo <span className="bold">design</span>, <span className="bold">performance</span> e <span className="bold">funcionalidade</span>.
          </p>

          <br />

          <p>
            Trabalho com tecnologias como <span className="bold">Django</span>, <span className="bold">React</span>, <span className="bold">TypeScript</span> e <span className="bold">SQL</span>, entre outras ferramentas que me permitem desenvolver aplicações modernas e eficientes, tanto no front-end quanto no back-end.
          </p>

          <br />

          <p>
            Acredito que cada projeto é uma oportunidade de criar algo útil e significativo.
            Por isso, encaro cada desafio com dedicação e busco entregar resultados que realmente causem impacto.
          </p>
        </S.Description>
      </S.AboutMe>
    </div>
  )
}

export default AboutMe
