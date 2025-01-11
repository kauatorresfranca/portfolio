import * as S from './styles'
import disney from '../../../assets/images/disney.png'
import eplay from '../../../assets/images/egame.png'
import efood from '../../../assets/images/Captura de tela 2025-01-10 180044.png'
import Tag from '../tag'

const Projects = () => {

  return (
    <>
      <div className="container">
        <S.Container>
          <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#65dddd" className="bi bi-diamond" viewBox="0 0 16 16">
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
          </svg>Projects</h3>
          <S.ProjectList>
            <S.Project>
              <img src={eplay} alt="image eplay" />
              <S.TagList>
                <Tag>React</Tag>
                <Tag>node</Tag>
                <Tag>js</Tag>
                <Tag>css</Tag>
              </S.TagList >
              <h2>E-PLAY</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi soluta nulla eos officia quis quo commodi? Placeat facilis alias, odit quas, ipsa rerum doloribus dolore cum quaerat, voluptatum corporis eum?</p>
              <S.ButtonGroup>
                <a href="https://github.com/kauatorresfranca/clone_disney_plus"><S.PrimaryButton>Ver no github</S.PrimaryButton></a>
                <a href="https://clone-disney-plus-henna.vercel.app/"><S.SecundaryButton>Visualizar projeto</S.SecundaryButton></a>
              </S.ButtonGroup>
            </S.Project>
            <S.Project>
              <img src={efood} alt="image e-food" />
              <S.TagList>
                <Tag>React</Tag>
                <Tag>node</Tag>
                <Tag>js</Tag>
                <Tag>css</Tag>
              </S.TagList >
              <h2>E-FOOD</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi soluta nulla eos officia quis quo commodi? Placeat facilis alias, odit quas, ipsa rerum doloribus dolore cum quaerat, voluptatum corporis eum?</p>
              <S.ButtonGroup>
                <a href="https://github.com/kauatorresfranca/clone_disney_plus"><S.PrimaryButton>Ver no github</S.PrimaryButton></a>
                <a href="https://clone-disney-plus-henna.vercel.app/"><S.SecundaryButton>Visualizar projeto</S.SecundaryButton></a>
              </S.ButtonGroup>
            </S.Project>
            <S.Project>
              <img src={disney} alt="image disney plus" />
              <S.TagList>
                <Tag>React</Tag>
                <Tag>node</Tag>
                <Tag>js</Tag>
                <Tag>css</Tag>
              </S.TagList >
              <h2>PROJECT NAME</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi soluta nulla eos officia quis quo commodi? Placeat facilis alias, odit quas, ipsa rerum doloribus dolore cum quaerat, voluptatum corporis eum?</p>
              <S.ButtonGroup>
                <a href="https://github.com/kauatorresfranca/clone_disney_plus"><S.PrimaryButton>Ver no github</S.PrimaryButton></a>
                <a href="https://clone-disney-plus-henna.vercel.app/"><S.SecundaryButton>Visualizar projeto</S.SecundaryButton></a>
              </S.ButtonGroup>
            </S.Project>
            <S.Project>
              <img src={disney} alt="image disney plus" />
              <S.TagList>
                <Tag>React</Tag>
                <Tag>node</Tag>
                <Tag>js</Tag>
                <Tag>css</Tag>
              </S.TagList >
              <h2>PROJECT NAME</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi soluta nulla eos officia quis quo commodi? Placeat facilis alias, odit quas, ipsa rerum doloribus dolore cum quaerat, voluptatum corporis eum?</p>
              <S.ButtonGroup>
                <a href="https://github.com/kauatorresfranca/clone_disney_plus"><S.PrimaryButton>Ver no github</S.PrimaryButton></a>
                <a href="https://clone-disney-plus-henna.vercel.app/"><S.SecundaryButton>Visualizar projeto</S.SecundaryButton></a>
              </S.ButtonGroup>
            </S.Project>
          </S.ProjectList>
        </S.Container>
      </div>
    </>
  )
}

export default Projects
