import * as S from './styles'
import Tag from '../tag'
import { colors } from '../../styles'
import Project from '../project'

const Projects = () => {

  return (
    <>
      <div id="projects" className="container">
        <S.Container>
          <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.blue} className="bi bi-diamond" viewBox="0 0 16 16">
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
          </svg>Projects</h3>
          <S.ProjectList>
            <Project imgUrl='../../../assets/images/E_play.png' gitHubUrl='https://github.com/kauatorresfranca/site-game-eplay' projectViewUrl='https://site-game-eplay.vercel.app/' title='E-PLAY' description='o site consiste em um e-comerce de jogos'>
              <>
                <Tag tagType='react'>react</Tag>
                <Tag tagType='ts'>ts</Tag>
                <Tag tagType='js'>js</Tag>
                <Tag tagType='css'>css</Tag>
              </>
            </Project>
            <Project imgUrl='../../../assets/images/E_food.png' gitHubUrl='https://github.com/kauatorresfranca/Efood' projectViewUrl='https://efood-rouge-six.vercel.app/' title='E-FOOD' description='dsadasdadas'>
              <>
                <Tag tagType='react'>react</Tag>
                <Tag tagType='ts'>ts</Tag>
                <Tag tagType='js'>js</Tag>
                <Tag tagType='css'>css</Tag>
              </>
            </Project>
            <Project imgUrl='../../../assets/images/to_do.png' gitHubUrl='https://github.com/kauatorresfranca/to-do' projectViewUrl='https://to-do-seven-steel.vercel.app/' title='TO-DO LIST' description='dsadasdadas'>
              <>
                <Tag tagType='react'>react</Tag>
                <Tag tagType='ts'>ts</Tag>
                <Tag tagType='js'>js</Tag>
                <Tag tagType='css'>css</Tag>
              </>
            </Project>
            <Project imgUrl='../../../assets/images/camila_matos.png' gitHubUrl='https://github.com/kauatorresfranca/portfolio' projectViewUrl='https://portfolio-tau-eight-25.vercel.app/' title='DENTIST WEBSITE' description='dsadasdadas'>
              <>
                <Tag tagType='react'>react</Tag>
                <Tag tagType='ts'>ts</Tag>
                <Tag tagType='js'>js</Tag>
                <Tag tagType='css'>css</Tag>
              </>
            </Project>
            <Project imgUrl='../../../assets/images/mySite.png' gitHubUrl='https://github.com/kauatorresfranca/DraCamilaMatos' projectViewUrl='https://dracamilamatos.vercel.app/' title='PORTFOLIO' description='dsadasdadas'>
              <>
                <Tag tagType='react'>react</Tag>
                <Tag tagType='ts'>ts</Tag>
                <Tag tagType='js'>js</Tag>
                <Tag tagType='css'>css</Tag>
              </>
            </Project>
          </S.ProjectList>
        </S.Container>
      </div>
    </>
  )
}

export default Projects
