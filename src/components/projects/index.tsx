import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import * as S from './styles'
import ProjectCard from '../project'
import { projectsData, parseProjectDate } from '../../data/projects'

const Projects = () => {
  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent')

  const processedProjects = useMemo(() => {
    const filtered = [...projectsData]

    return filtered.sort((a, b) => {
      const dateA = parseProjectDate(a.date).getTime()
      const dateB = parseProjectDate(b.date).getTime()
      return sortOrder === 'recent' ? dateB - dateA : dateA - dateB
    })
  }, [sortOrder])

  return (
    <S.SectionContainer id="projects">
      <div className="container">
        <header>
          <S.Controls>
            <S.SelectGroup>
              <label>Ordem</label>
              <select value={sortOrder} onChange={e => setSortOrder(e.target.value as any)}>
                <option value="recent">Mais recentes</option>
                <option value="oldest">Mais antigos</option>
              </select>
            </S.SelectGroup>
          </S.Controls>

          <S.TitleWrapper>
            <S.SectionTitle>Projetos</S.SectionTitle>
          </S.TitleWrapper>

          <S.HeaderSpacer />
        </header>

        <S.ProjectGrid layout>
          <AnimatePresence mode='popLayout'>
            {processedProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </AnimatePresence>
        </S.ProjectGrid>
      </div>
    </S.SectionContainer>
  )
}

export default Projects
