import * as S from './styles'
import Project from '../project'
import { useState } from 'react'

import eplayVideo from '../../../assets/videos/eplay.mp4'
import efoodVideo from '../../../assets/videos/efood.mp4'
import toDoVideo from '../../../assets/videos/todo.mp4'
import camilaVideo from '../../../assets/videos/camila.mp4'
import ticiana from '../../../assets/videos/ticiana.mp4'
import zuppi from '../../../assets/videos/zuppi.mp4'
import barberly from '../../../assets/videos/barberly.mp4'
import ambiente from '../../../assets/videos/ambiente.mp4'
import { colors } from '../../styles'

// Definir o tipo para a propriedade 'type'
type SkillType =
  | 'react'
  | 'redux'
  | 'ts'
  | 'sc'
  | 'django'
  | 'postgress'
  | 'git'
  | 'html'
  | 'css'
  | 'js'
  | 'python'
  | 'vue'
  | 'next'

// Definir a interface para os projetos
interface ProjectData {
  date: string
  skills: { type: SkillType }[]
  videoPath: string
  imgPath: string
  gitHubUrl: string
  projectViewUrl: string
  title: string
  description: string
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
  }

  const parts = dateStr.split(' ').filter(word => word !== 'de')
  // Se a string não estiver no formato esperado, tenta criar Date direto
  if (parts.length < 3) return new Date(dateStr)

  const day = parseInt(parts[0], 10)
  const monthStr = parts[1].toLowerCase()
  const year = parseInt(parts[2], 10)

  const month = (months[monthStr] ?? 1) - 1
  return new Date(year, month, day)
}

const projectsData: ProjectData[] = [
  {
    date: '17 de dezembro de 2025',
    skills: [{ type: 'react' }, { type: 'sc' }, { type: 'ts' }],
    videoPath: '',
    imgPath: '/mitre.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/mitre',
    projectViewUrl: 'https://mitre.vercel.app/',
    title: 'Mitre',
    description:
      'Landing page moderna e responsiva para uma agência de marketing digital, design elegante. Construída com React, TypeScript e Styled Components, voltada a converter leads em clientes.'
  },
  {
    date: '17 de outubro de 2025',
    skills: [{ type: 'react' }, { type: 'sc' }, { type: 'ts' }],
    videoPath: '',
    imgPath: '/luiz.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/luiz-miguel',
    projectViewUrl: 'https://luiz-miguel.vercel.app/',
    title: 'Dr. Luiz Miguel',
    description:
      'Landing page moderna e responsiva com sistema de agendamento integrado, design elegante e foco em conversão para dentista. Construída com React, TypeScript e Styled Components, voltada a apresentar serviços de forma profissional, transmitindo autoridade e confiança.'
  },
  {
    date: '31 de agosto de 2025',
    skills: [{ type: 'react' }, { type: 'sc' }, { type: 'ts' }],
    videoPath: ambiente,
    imgPath: '/ambiente_de_beleza.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/ambiente_de_beleza',
    projectViewUrl: 'https://www.ambientedebeleza.com/',
    title: 'Ambiente de Beleza',
    description:
      'Landing page moderna e responsiva com sistema de agendamento integrado, design elegante e foco em conversão. Construída com React, TypeScript e Styled Components, voltada a apresentar serviços de beleza de forma profissional.'
  },
  {
    date: '12 de agosto de 2025',
    skills: [{ type: 'react' }, { type: 'ts' }, { type: 'sc' }],
    videoPath: ticiana,
    imgPath: '/ticiana_moura.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/ticiana-moura-psic',
    projectViewUrl: 'https://www.ticianamourapsicologa.com.br/',
    title: 'Psic. Ticiana Moura',
    description:
      'Landing page para psicóloga com foco em transmitir confiança e atrair pacientes. Inclui identidade visual, estrutura responsiva e animações sutis com Framer Motion. Desenvolvido em React + TypeScript + Styled Components.'
  },
  {
    date: '01 de agosto de 2025',
    skills: [
      { type: 'react' },
      { type: 'ts' },
      { type: 'sc' },
      { type: 'django' },
      { type: 'postgress' },
      { type: 'git' }
    ],
    videoPath: zuppi,
    imgPath: '/zuppi.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/Zuppi',
    projectViewUrl: 'https://zuppi.vercel.app/',
    title: 'Zuppi',
    description:
      'Réplica do Twitter construída durante curso (EBAC). Funcionalidades como postagem, curtidas e comentários. Backend em Django com API REST e autenticação via tokens; frontend em React + TypeScript.'
  },
  {
    date: '29 de abril de 2025',
    skills: [
      { type: 'react' },
      { type: 'ts' },
      { type: 'sc' },
      { type: 'django' },
      { type: 'postgress' },
      { type: 'git' }
    ],
    videoPath: barberly,
    imgPath: '/barberly.jpg',
    gitHubUrl: 'https://github.com/kauatorresfranca/barbely',
    projectViewUrl: 'https://barbely.vercel.app/',
    title: 'Barberly',
    description:
      'Plataforma SaaS para gestão de barbearias com controle de agendamentos, serviços e funcionários. Clientes podem criar conta e agendar online. Frontend em React/TypeScript; backend em Django REST Framework.'
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
      'Plataforma de agendamento médico com front-end em React/TypeScript e back-end em Django + PostgreSQL. Permite busca por médicos, marcação de consultas e gestão de agendamentos com foco em usabilidade e segurança.'
  },
  {
    date: '15 de março de 2025',
    skills: [{ type: 'python' }, { type: 'django' }, { type: 'postgress' }, { type: 'git' }],
    videoPath: '../../../assets/images/in_developing(dark).png',
    imgPath: '/bookstore.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/bookstore',
    projectViewUrl: '',
    title: 'Bookstore',
    description:
      'Backend de plataforma de e-commerce para livraria online, usando Python e Django REST Framework. Implementação de endpoints CRUD, modelagem adequada, serialização e containerização com Docker.'
  },
  {
    date: '21 de janeiro de 2025',
    skills: [{ type: 'react' }, { type: 'ts' }, { type: 'sc' }],
    videoPath: camilaVideo,
    imgPath: '/camila_matos.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/DraCamilaMatos',
    projectViewUrl: 'https://dracamilamatos.vercel.app/',
    title: 'Dra. Camila Matos',
    description:
      'Landing page para dentista com design moderno e profissional. Projeto responsivo, com navegação fluida e desenvolvido em React + TypeScript + Styled Components.'
  },
  {
    date: '21 de agosto de 2024',
    skills: [{ type: 'react' }, { type: 'redux' }, { type: 'ts' }, { type: 'sc' }],
    videoPath: eplayVideo,
    imgPath: '/E_play.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/site-game-eplay',
    projectViewUrl: 'https://site-game-eplay.vercel.app/',
    title: 'E-play – E-commerce Gamer',
    description:
      'E-commerce de jogos digitais com catálogo, carrinho e simulação de compra. Desenvolvido com React, TypeScript, Redux e Styled Components, com foco em UX e desempenho.'
  },
  {
    date: '08 de agosto de 2024',
    skills: [{ type: 'react' }, { type: 'redux' }, { type: 'ts' }, { type: 'sc' }],
    videoPath: efoodVideo,
    imgPath: '/E_food.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/Efood',
    projectViewUrl: 'https://efood-rouge-six.vercel.app/',
    title: 'E-food',
    description:
      'Site fictício para pedidos em restaurantes — busca, menus, carrinho e finalização simulada. Construído com React, TypeScript, Styled Components e Redux para experiência fluida.'
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
      'Aplicação para gerenciamento de tarefas com adicionar/editar/excluir e marcar como concluído. Interface minimalista, responsiva e com gerenciamento de estado via Redux.'
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
      'Réplica do Disney Plus desenvolvida durante curso, com foco em layout responsivo e reprodução de seções principais da interface.'
  }
]

const Projects = () => {
  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent')

  const sortedProjects = [...projectsData]

  sortedProjects.sort((a, b) => {
    const dateA = parseProjectDate(a.date)
    const dateB = parseProjectDate(b.date)

    if (sortOrder === 'recent') {
      return dateB.getTime() - dateA.getTime()
    } else {
      return dateA.getTime() - dateB.getTime()
    }
  })

  return (
    <div className="container">
      <S.Projects id="projects">
        <h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill={colors.primary}
            className="bi bi-diamond"
            viewBox="0 0 16 16"
          >
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
          </svg>
          Projetos
        </h3>
        <S.SortSelect
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value as 'recent' | 'oldest')}
        >
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
