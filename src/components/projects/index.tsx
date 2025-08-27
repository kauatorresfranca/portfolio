import * as S from './styles'
import { darkTheme } from '../../../theme'
import Project from '../project'
import { useState } from 'react'

import eplayVideo from '../../../assets/videos/eplay.mp4'
import efoodVideo from '../../../assets/videos/efood.mp4'
import toDoVideo from '../../../assets/videos/todo.mp4'
import camilaVideo from '../../../assets/videos/camila.mp4'
import portifolioVideo from '../../../assets/videos/portfolio.mp4'

// Definir o tipo para a propriedade 'type'
type SkillType = 'react' | 'redux' | 'ts' | 'sc' | 'django' | 'postgress' | 'git' | 'html' | 'css' | 'js' | 'python' | 'vue' | 'next';

// Definir a interface para os projetos
interface ProjectData {
  date: string;
  skills: { type: SkillType }[];
  videoPath: string;
  imgPath: string;
  gitHubUrl: string;
  projectViewUrl: string;
  title: string;
  description: string;
}

const parseProjectDate = (dateStr: string): Date => {
  const months: { [key: string]: number } = {
    janeiro: 1,
    fevereiro: 2,
    março: 3,
    abril: 4,
    maio: 5,
    junho: 6,
    julho: 7,
    agosto: 8,
    setembro: 9,
    outubro: 10,
    novembro: 11,
    dezembro: 12
  };

  const parts = dateStr.split(' ').filter(word => word !== 'de');
  const day = parseInt(parts[0], 10);
  const monthStr = parts[1].toLowerCase();
  const year = parseInt(parts[2], 10);

  const month = months[monthStr] - 1;
  return new Date(year, month, day);
};

const projectsData: ProjectData[] = [
    {
      date: '21 de agosto de 2024',
      skills: [{ type: 'react' }, { type: 'redux' }, { type: 'ts' }, { type: 'sc' }],
      videoPath: eplayVideo,
      imgPath: '/E_play.png',
      gitHubUrl: 'https://github.com/kauatorresfranca/site-game-eplay',
      projectViewUrl: 'https://site-game-eplay.vercel.app/',
      title: 'E-play',
      description:
        'Uma loja fictícia de jogos, onde os usuários podem navegar por diferentes categorias, visualizar detalhes dos jogos e adicioná-los ao carrinho. A aplicação simula um ambiente real de e-commerce, incluindo funcionalidades como listagem dinâmica, filtros e gerenciamento de estado eficiente com Redux. O design foi pensado para ser intuitivo, com destaque para os jogos em promoção e novidades.',
    },
    {
      date: '8 de agosto de 2024',
      skills: [{ type: 'react' }, { type: 'redux' }, { type: 'ts' }, { type: 'sc' }],
      videoPath: efoodVideo,
      imgPath: '/E_food.png',
      gitHubUrl: 'https://github.com/kauatorresfranca/Efood',
      projectViewUrl: 'https://efood-rouge-six.vercel.app/',
      title: 'E-food',
      description:
        'Um site fictício para pedidos em vários restaurantes, permitindo que os usuários explorem menus, adicionem itens ao carrinho e finalizem pedidos. A interface prioriza a usabilidade, com filtros para facilitar a busca por restaurantes e pratos específicos. A aplicação foi construída com React, TypeScript, Styled Components e Redux, garantindo um fluxo de dados eficiente e uma experiência fluida para o usuário.',
    },
    {
      date: '15 de julho de 2024',
      skills: [{ type: 'react' }, { type: 'redux' }, { type: 'ts' }, { type: 'sc' }],
      videoPath: toDoVideo,
      imgPath: '/to_do.png',
      gitHubUrl: 'https://github.com/kauatorresfranca/to-do',
      projectViewUrl: 'https://to-do-seven-steel.vercel.app/',
      title: 'To-do List',
      description:
        'Uma aplicação simples e funcional para gerenciamento de tarefas, onde os usuários podem adicionar, editar, excluir e marcar tarefas como concluídas. O foco do projeto foi criar uma interface minimalista e intuitiva, garantindo que a experiência fosse fluida e responsiva. O uso de Redux permite um controle eficiente do estado, tornando a aplicação organizada e escalável.',
    },
    {
      date: '21 de janeiro de 2025',
      skills: [{ type: 'react' }, { type: 'ts' }, { type: 'sc' }],
      videoPath: camilaVideo,
      imgPath: '/camila_matos.png',
      gitHubUrl: 'https://github.com/kauatorresfranca/DraCamilaMatos',
      projectViewUrl: 'https://dracamilamatos.vercel.app/',
      title: 'Dentist Website',
      description:
        'Uma landing page desenvolvida para uma dentista, com um design moderno e profissional para apresentar seus serviços e informações de contato. O site conta com uma navegação fluida e uma interface responsiva para garantir uma boa experiência tanto em dispositivos móveis quanto em desktops. Construído com React, TypeScript, Styled Components e Redux para uma estrutura escalável e organizada.',
    },
    {
      date: '12 de agosto de 2025',
      skills: [{ type: 'react' }, { type: 'ts' }, { type: 'sc' }],
      videoPath: portifolioVideo,
      imgPath: '/ticiana_moura.png',
      gitHubUrl: 'https://github.com/kauatorresfranca/ticiana-moura-psic',
      projectViewUrl: 'https://www.ticianamourapsicologa.com.br/',
      title: 'Psychologist Website',
      description:
        'Um site desenvolvido para apresentar meus projetos, habilidades e informações sobre minha trajetória na programação. O design foi pensado para ser moderno e responsivo. O site conta com uma sessão de skills, onde destaco as tecnologias que domino, uma área de projetos, e uma página de contato para facilitar a comunicação com potenciais clientes e recrutadores. Foi desenvolvido com React, TypeScript, Styled Components e Redux.',
    },
    {
      date: '22 de maio de 2025',
      skills: [{ type: 'react' }, { type: 'ts' }, { type: 'git' }, { type: 'next' }],
      videoPath: '../../../assets/images/in_developing(dark).png',
      imgPath: '/doctorize.png',
      gitHubUrl: 'https://github.com/kauatorresfranca/doctorize',
      projectViewUrl: 'https://doctorize.vercel.app/authentication',
      title: 'Doctorize',
      description:
        'Uma plataforma para agendamento de consultas médicas, permitindo que pacientes encontrem médicos, marquem horários e gerenciem suas consultas. A aplicação combina um front-end moderno construído com React, TypeScript e Styled Components com um back-end robusto em Django e PostgreSQL, garantindo uma integração eficiente e segura. A interface foi projetada para ser intuitiva, com foco na usabilidade e acessibilidade.',
    },
    {
      date: '29 de abril de 2025',
      skills: [{ type: 'react' }, { type: 'ts' }, { type: 'sc' }, { type: 'django' }, { type: 'postgress' }, { type: 'git' }],
      videoPath: '../../../assets/images/in_developing(dark).png',
      imgPath: '/barberly.jpg',
      gitHubUrl: 'https://github.com/kauatorresfranca/barbely',
      projectViewUrl: 'https://barbely.vercel.app/',
      title: 'Barberly',
      description:
        'Uma aplicação para gerenciamento de barbearias, permitindo que clientes agendem horários, visualizem serviços disponíveis e recebam confirmações. O projeto integra um front-end responsivo feito com React, TypeScript e Styled Components, com um back-end em Django e PostgreSQL para gerenciar dados de forma eficiente. A interface prioriza a simplicidade e a experiência do usuário, com um design moderno e funcional.',
    },
    {
      date: '01 de agosto de 2025',
      skills: [{ type: 'react' }, { type: 'ts' }, { type: 'sc' }, { type: 'django' }, { type: 'postgress' }, { type: 'git' }],
      videoPath: '../../../assets/images/in_developing(dark).png',
      imgPath: '/zuppi.png',
      gitHubUrl: 'https://github.com/kauatorresfranca/Zuppi',
      projectViewUrl: 'https://zuppi.vercel.app/',
      title: 'Zuppi',
      description:
        'Uma réplica do Twitter desenvolvida durante um curso da EBAC, focada em recriar funcionalidades principais como postagem, curtidas e comentários. O front-end foi construído com React, TypeScript e Styled Components, enquanto o back-end utiliza Django e PostgreSQL para gerenciar dados de usuários e publicações. A aplicação oferece uma interface moderna e responsiva, com ênfase na interatividade e na experiência do usuário.',
    },
    {
      date: '24 de fevereiro de 2024',
      skills: [{ type: 'html' }, { type: 'css' }, { type: 'js' }],
      videoPath: '../../../assets/images/in_developing(dark).png',
      imgPath: '/clone_disney_plus.png',
      gitHubUrl: 'https://github.com/kauatorresfranca/clone_disney_plus',
      projectViewUrl: 'https://clone-disney-plus-henna.vercel.app/',
      title: 'Clone Disney Plus',
      description:
        'Uma réplica do Disney Plus desenvolvida durante um curso da EBAC',
    },
]

const Projects = () => {
  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent');

  const sortedProjects = [...projectsData];

  sortedProjects.sort((a, b) => {
    const dateA = parseProjectDate(a.date);
    const dateB = parseProjectDate(b.date);

    if (sortOrder === 'recent') {
      return dateB.getTime() - dateA.getTime();
    } else {
      return dateA.getTime() - dateB.getTime();
    }
  });

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
        <S.SortSelect value={sortOrder} onChange={(e) => setSortOrder(e.target.value as 'recent' | 'oldest')}>
          <option value="recent">Mais recentes</option>
          <option value="oldest">Mais antigos</option>
        </S.SortSelect>
        <S.ProjectList>
          {sortedProjects.map((project, index) => (
            <Project
              key={`${project.title}-${index}`}
              date={project.date}
              skils={project.skills}
              videoPath={project.videoPath}
              imgPath={project.imgPath}
              gitHubUrl={project.gitHubUrl}
              projectViewUrl={project.projectViewUrl}
              title={project.title}
              description={project.description}
            />
          ))}
        </S.ProjectList>
      </S.Projects>
    </div>
  )
}

export default Projects
