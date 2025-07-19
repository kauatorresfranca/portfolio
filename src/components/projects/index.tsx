import * as S from './styles'
import { darkTheme } from '../../../theme'
import Project from '../project'

import eplayVideo from '../../../assets/videos/eplay.mp4'
import efoodVideo from '../../../assets/videos/efood.mp4'
import toDoVideo from '../../../assets/videos/todo.mp4'
import camilaVideo from '../../../assets/videos/camila.mp4'
import portifolioVideo from '../../../assets/videos/portfolio.mp4'

const Projects = () => {
  return (
    <div className="container">
      <S.Projects id="projects">
        <h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={darkTheme.detach}
            className="bi bi-diamond"
            viewBox="0 0 16 16"
          >
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
          </svg>
          Projetos
        </h3>
          <S.ProjectStack id="front-end">
            <h3>Front-end</h3>
            <S.ProjectList>
            <Project
            date="21 de agosto 2024"
            skils={[
              { type: 'react' },
              { type: 'redux' },
              { type: 'ts' },
              { type: 'sc' }
            ]}
            videoPath={eplayVideo}
            imgPath="/E_play.png"
            gitHubUrl="https://github.com/kauatorresfranca/site-game-eplay"
            projectViewUrl="https://site-game-eplay.vercel.app/"
            title="E-PLAY"
            description="Uma loja fictícia de jogos, onde os usuários podem navegar por diferentes categorias, visualizar detalhes dos jogos e adicioná-los ao carrinho. A aplicação simula um ambiente real de e-commerce, incluindo funcionalidades como listagem dinâmica, filtros e gerenciamento de estado eficiente com Redux. O design foi pensado para ser intuitivo, com destaque para os jogos em promoção e novidades."
          ></Project>
          <Project
            date="8 de agosto de 2024"
            skils={[
              { type: 'react' },
              { type: 'redux' },
              { type: 'ts' },
              { type: 'sc' }
            ]}
            videoPath={efoodVideo}
            imgPath="/E_food.png"
            gitHubUrl="https://github.com/kauatorresfranca/Efood"
            projectViewUrl="https://efood-rouge-six.vercel.app/"
            title="E-FOOD"
            description="Um site fictício para pedidos em vários restaurantes, permitindo que os usuários explorem menus, adicionem itens ao carrinho e finalizem pedidos. A interface prioriza a usabilidade, com filtros para facilitar a busca por restaurantes e pratos específicos. A aplicação foi construída com React, TypeScript, Styled Components e Redux, garantindo um fluxo de dados eficiente e uma experiência fluida para o usuário."
          ></Project>
          <Project
            date="15 de julho de 2024"
            skils={[
              { type: 'react' },
              { type: 'redux' },
              { type: 'ts' },
              { type: 'sc' }
            ]}
            videoPath={toDoVideo}
            imgPath="/to_do.png"
            gitHubUrl="https://github.com/kauatorresfranca/to-do"
            projectViewUrl="https://to-do-seven-steel.vercel.app/"
            title="TO-DO LIST"
            description="Uma aplicação simples e funcional para gerenciamento de tarefas, onde os usuários podem adicionar, editar, excluir e marcar tarefas como concluídas. O foco do projeto foi criar uma interface minimalista e intuitiva, garantindo que a experiência fosse fluida e responsiva. O uso de Redux permite um controle eficiente do estado, tornando a aplicação organizada e escalável."
          ></Project>
          <Project
            date="21 de janeiro de 2024"
            skils={[{ type: 'react' }, { type: 'ts' }, { type: 'sc' }]}
            videoPath={camilaVideo}
            imgPath="/camila_matos.png"
            gitHubUrl="https://github.com/kauatorresfranca/DraCamilaMatos"
            projectViewUrl="https://dracamilamatos.vercel.app/"
            title="DENTIST WEBSITE"
            description="Uma landing page desenvolvida para uma dentista, com um design moderno e profissional para apresentar seus serviços e informações de contato. O site conta com uma navegação fluida e uma interface responsiva para garantir uma boa experiência tanto em dispositivos móveis quanto em desktops. Construído com React, TypeScript, Styled Components e Redux para uma estrutura escalável e organizada."
          ></Project>
          <Project
            date="11 de janeiro de 2024"
            skils={[{ type: 'react' }, { type: 'ts' }, { type: 'sc' }]}
            videoPath={portifolioVideo}
            imgPath="/mySite.png"
            gitHubUrl="https://github.com/kauatorresfranca/portfolio"
            projectViewUrl="https://portfolio-tau-eight-25.vercel.app/"
            title="PORTFOLIO"
            description="Um site desenvolvido para apresentar meus projetos, habilidades e informações sobre minha trajetória na programação. O design foi pensado para ser moderno e responsivo. O site conta com uma sessão de skills, onde destaco as tecnologias que domino, uma área de projetos, e uma página de contato para facilitar a comunicação com potenciais clientes e recrutadores. Foi desenvolvido com React, TypeScript, Styled Components e Redux."
          ></Project>
          </S.ProjectList>
          </S.ProjectStack>
        <S.ProjectStack id="back-end">
          <h3>Back-end</h3>
          <S.ProjectList>
            <Project
            date="22 de março de 2025"
            skils={[
              { type: 'react' },
              { type: 'ts' },
              { type: 'sc' },
              { type: 'django' },
              { type: 'postgress' },
              { type: 'git' }
            ]}
            videoPath="../../../assets/images/in_developing(dark).png"
            imgPath="../../../assets/images/in_developing(dark).png"
            gitHubUrl="https://github.com/kauatorresfranca/portfolio"
            projectViewUrl="https://portfolio-tau-eight-25.vercel.app/"
            title="DOCTORIZE"
            description="lorem"
          ></Project>
          <Project
            date="22 de março de 2025"
            skils={[
              { type: 'react' },
              { type: 'ts' },
              { type: 'sc' },
              { type: 'django' },
              { type: 'postgress' },
              { type: 'git' }
            ]}
            videoPath="../../../assets/images/in_developing(dark).png"
            imgPath="../../../assets/images/in_developing(dark).png"
            gitHubUrl="https://github.com/kauatorresfranca/portfolio"
            projectViewUrl="https://portfolio-tau-eight-25.vercel.app/"
            title="BARBERLY"
            description="lorem"
          ></Project>
          </S.ProjectList>
        </S.ProjectStack>
      </S.Projects>
    </div>
  )
}

export default Projects
