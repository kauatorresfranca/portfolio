import { colors } from '../../styles'
import * as S from "./styles"


const AboutMe = () => {

  return (
    <div id='about'>
      <div className="container">
        <S.Container>
          <S.Description>
            <h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.blue} className="bi bi-diamond" viewBox="0 0 16 16">
                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
              </svg>
              SOBRE MIM
            </h2>
            <p>Desde muito jovem sempre fui fascinado pela tecnologia e pelo mundo digital. Foi aí que comecei a explorar a programação, começando pelo Python. Desde então, venho dedicando meus estudos à construção de uma carreira sólida na área de tecnologia. <br /> <br />
              Minha experiência, apesar de recente, já me permitiu trabalhar em projetos que envolvem tanto o <span className='bold'>front-end</span> quanto o <span className='bold'>back-end</span>. Tenho desenvolvido soluções criativas com foco na <span className="bold">experiência do usuário</span>. Além disso, busco sempre me aprimorar, aprendendo novas tecnologias e aplicando-as em projetos práticos.
            </p>
          </S.Description>
        </S.Container >
      </div>
    </div>
  )
}


export default AboutMe
