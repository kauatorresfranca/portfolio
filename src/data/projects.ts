import eplayVideo from '../../assets/videos/eplay.mp4'
import efoodVideo from '../../assets/videos/efood.mp4'
import toDoVideo from '../../assets/videos/todo.mp4'
import camilaVideo from '../../assets/videos/camila.mp4'
import ticiana from '../../assets/videos/ticiana.mp4'
import zuppi from '../../assets/videos/zuppi.mp4'
import barberly from '../../assets/videos/barberly.mp4'
import ambiente from '../../assets/videos/ambiente.mp4'

export type SkilType =
  | 'react'
  | 'redux'
  | 'ts'
  | 'sc'
  | 'tw'
  | 'django'
  | 'postgress'
  | 'git'
  | 'html'
  | 'css'
  | 'js'
  | 'python'
  | 'vue'
  | 'next'

export interface ProjectData {
  date: string
  skils: { type: SkilType }[]
  videoPath: string
  imgPath: string
  gitHubUrl: string
  projectViewUrl: string
  title: string
  description: string
}

export const skillIcons: Record<SkilType, string> = {
  html: '/html_icon.png',
  css: '/css_icon.png',
  js: '/js_icon.png',
  react: '/react_icon.png',
  ts: '/ts_icon.png',
  redux: '/redux_icon.png',
  python: '/py_icon.png',
  django: '/django_icon.png',
  postgress: '/postgress_icon.png',
  git: '/git_icon.png',
  sc: '/styledcomponents.png',
  tw: '/tailwind_icon.png',
  vue: '/vue.icon.png',
  next: '/next_icon.png'
}

export const parseProjectDate = (dateStr: string): Date => {
  const months: { [key: string]: number } = {
    janeiro: 0,
    fevereiro: 1,
    março: 2,
    abril: 3,
    maio: 4,
    junho: 5,
    julho: 6,
    agosto: 7,
    setembro: 8,
    outubro: 9,
    novembro: 10,
    dezembro: 11
  }
  const parts = dateStr.toLowerCase().split(' ').filter(word => word !== 'de')
  if (parts.length < 3) return new Date(dateStr)

  const day = parseInt(parts[0], 10)
  const monthStr = parts[1]
  const year = parseInt(parts[2], 10)

  const month = months[monthStr] ?? 0
  return new Date(year, month, day)
}

export const projectsData: ProjectData[] = [
    {
  date: '17 de março de 2026',
  skils: [{ type: 'react' }, { type: 'sc' }, { type: 'ts' }],
  videoPath: '',
  imgPath: '/central_vision.png',
  gitHubUrl: 'https://github.com/kauatorresfranca/central_vision',
  projectViewUrl: 'https://www.oticacentralvision.com.br/',
  title: 'Central Vision',
  description:
  'Landing page de alta conversão para ótica em Maceió, otimizada com técnicas avançadas de SEO local para dominar as buscas orgânicas. O projeto foca em UX/UI estratégica, integrando agendamento de exames de vista e vitrine digital para transformar visitantes em clientes reais. Desenvolvido com React, TypeScript e Styled Components para máxima performance e interatividade.'
  },
  {
    date: '19 de fevereiro de 2026',
    skils: [{ type: 'react' }, { type: 'tw' }, { type: 'ts' }, { type: 'django' }],
    videoPath: '',
    imgPath: '/psycore.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/psycore',
    projectViewUrl: 'https://psycore-one.vercel.app/',
    title: 'Psycore (em desenvolvimento)',
    description:
      'É um sistema para gestão de clinicas de psicologias com funcionalidades como agendamento, cadastro de pacientes, prontuário eletrônico e controle financeiro. O projeto é construído com Django REST Framework no backend e React (Vite) com styled components e TypeScript.'
  },
  {
    date: '10 de janeiro de 2026',
    skils: [{ type: 'react' }, { type: 'tw' }, { type: 'ts' }, { type: 'django' }],
    videoPath: '',
    imgPath: '/smartmart.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/smartmart-solutions',
    projectViewUrl: 'https://smartmart-solutions.vercel.app/',
    title: 'SmartMart Solutions',
    description:
      'Projeto é uma plataforma completa para gestão e análise de vendas. A solução integra um ecossistema robusto com Django REST Framework no backend e uma interface moderna e responsiva em React (Vite) com Tailwind CSS e Shadcn/UI.'
  },
  {
    date: '17 de dezembro de 2025',
    skils: [{ type: 'react' }, { type: 'sc' }, { type: 'ts' }],
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
    skils: [{ type: 'react' }, { type: 'sc' }, { type: 'ts' }],
    videoPath: '',
    imgPath: '/luiz.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/luiz-miguel',
    projectViewUrl: 'https://luiz-miguel.vercel.app/',
    title: 'Dr. Luiz Miguel',
    description:
      'Landing page moderna e responsiva com sistema de agendamento integrado, design elegante e foco em conversão para dentista. Construída com React, TypeScript e Styled Components.'
  },
  {
    date: '31 de agosto de 2025',
    skils: [{ type: 'react' }, { type: 'sc' }, { type: 'ts' }],
    videoPath: ambiente,
    imgPath: '/ambiente_de_beleza.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/ambiente_de_beleza',
    projectViewUrl: 'https://www.ambientedebeleza.com/',
    title: 'Ambiente de Beleza',
    description:
      'Landing page moderna e responsiva com sistema de agendamento integrado, design elegante e foco em conversão. Construída com React, TypeScript e Styled Components.'
  },
  {
    date: '12 de agosto de 2025',
    skils: [{ type: 'react' }, { type: 'ts' }, { type: 'sc' }],
    videoPath: ticiana,
    imgPath: '/ticiana_moura.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/ticiana-moura-psic',
    projectViewUrl: 'https://www.ticianamourapsicologa.com.br/',
    title: 'Psic. Ticiana Moura',
    description:
      'Landing page para psicóloga com foco em transmitir confiança e atrair pacientes. Inclui identidade visual, estrutura responsiva e animações sutis com Framer Motion.'
  },
  {
    date: '01 de agosto de 2025',
    skils: [
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
    skils: [
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
      'Plataforma SaaS para gestão de barbearias com controle de agendamentos, serviços e funcionários. Clientes podem criar conta e agendar online.'
  },
  {
    date: '22 de maio de 2025',
    skils: [{ type: 'react' }, { type: 'ts' }, { type: 'git' }, { type: 'next' }],
    videoPath: '',
    imgPath: '/doctorize.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/doctorize',
    projectViewUrl: 'https://doctorize.vercel.app/authentication',
    title: 'Doctorize',
    description:
      'Plataforma de agendamento médico com front-end em React/TypeScript e back-end em Django + PostgreSQL. Permite busca por médicos e gestão de agendamentos.'
  },
  {
    date: '15 de março de 2025',
    skils: [{ type: 'python' }, { type: 'django' }, { type: 'postgress' }, { type: 'git' }],
    videoPath: '',
    imgPath: '/bookstore.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/bookstore',
    projectViewUrl: '',
    title: 'Bookstore',
    description:
      'Backend de plataforma de e-commerce para livraria online, usando Python e Django REST Framework. Implementação de endpoints CRUD e containerização com Docker.'
  },
  {
    date: '21 de janeiro de 2025',
    skils: [{ type: 'react' }, { type: 'ts' }, { type: 'sc' }],
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
    skils: [{ type: 'react' }, { type: 'redux' }, { type: 'ts' }, { type: 'sc' }],
    videoPath: eplayVideo,
    imgPath: '/E_play.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/site-game-eplay',
    projectViewUrl: 'https://site-game-eplay.vercel.app/',
    title: 'E-play – E-commerce Gamer',
    description:
      'E-commerce de jogos digitais com catálogo, carrinho e simulação de compra. Desenvolvido com React, TypeScript, Redux e Styled Components.'
  },
  {
    date: '08 de agosto de 2024',
    skils: [{ type: 'react' }, { type: 'redux' }, { type: 'ts' }, { type: 'sc' }],
    videoPath: efoodVideo,
    imgPath: '/E_food.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/Efood',
    projectViewUrl: 'https://efood-rouge-six.vercel.app/',
    title: 'E-food',
    description:
      'Site fictício para pedidos em restaurantes — busca, menus, carrinho e finalização simulada. Construído com React, TypeScript, Styled Components e Redux.'
  },
  {
    date: '15 de julho de 2024',
    skils: [{ type: 'react' }, { type: 'redux' }, { type: 'ts' }, { type: 'sc' }],
    videoPath: toDoVideo,
    imgPath: '/to_do.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/to-do',
    projectViewUrl: 'https://to-do-seven-steel.vercel.app/',
    title: 'To-do List',
    description:
      'Aplicação para gerenciamento de tarefas com adicionar/editar/excluir. Interface minimalista, responsiva e com gerenciamento de estado via Redux.'
  },
  {
    date: '24 de fevereiro de 2024',
    skils: [{ type: 'html' }, { type: 'css' }, { type: 'js' }],
    videoPath: '',
    imgPath: '/clone_disney_plus.png',
    gitHubUrl: 'https://github.com/kauatorresfranca/clone_disney_plus',
    projectViewUrl: 'https://clone-disney-plus-henna.vercel.app/',
    title: 'Clone Disney Plus',
    description:
      'Réplica do Disney Plus desenvolvida durante curso, com foco em layout responsivo e reprodução de seções principais da interface.'
  }
]
