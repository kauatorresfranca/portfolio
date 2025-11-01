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
            Desde jovem, sempre fui curioso sobre como o mundo digital funciona por trás das telas.
            Em <span className="bold">2023</span>, incentivado pelo meu tio — um desenvolvedor back-end —
            mergulhei na programação com <span className="bold">Python</span>.
            Meu primeiro projeto, uma automação com <span className="bold">PyAutoGUI</span>,
            me mostrou que eu podia transformar ideias em soluções reais,
            e desde então não parei de aprender e criar.
          </p>

          <br />

          <p>
            Hoje, como <span className="bold">desenvolvedor full stack</span>,
            trabalho com <span className="bold">Django</span>, <span className="bold">React</span>,
            <span className="bold">TypeScript</span>, <span className="bold">Redux</span>,
            <span className="bold">SQL</span> e <span className="bold">Sass</span>,
            sempre buscando entregar projetos que unam técnica e impacto.
            Destaque para o <span className="bold">Barberly</span>, um SaaS que simplifica
            a gestão de barbearias, e o <span className="bold">Zuppi</span>, uma réplica do Twitter
            que me desafiou a resolver problemas complexos.
            Adoro o processo de transformar ideias em código e ver o resultado na prática.
          </p>

          <br />

          <p>
            Meu objetivo é crescer como <span className="bold">full stack</span>,
            explorando áreas como <span className="bold">inteligência artificial</span>
            e criando soluções que façam a diferença na vida das pessoas.
            Estou sempre aprendendo e pronto para contribuir com equipes
            que valorizam <span className="bold">inovação</span> e <span className="bold">criatividade</span>.
          </p>
        </S.Description>
      </S.AboutMe>
    </div>
  )
}

export default AboutMe
