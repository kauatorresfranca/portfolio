import { useState, useMemo } from 'react'
import { AnimatePresence } from 'framer-motion'
import * as S from './styles'
import ProjectCard from '../project'
import { projectsData, SkilType, parseProjectDate } from '../../data/projects'

const Projects = () => {
  const [sortOrder, setSortOrder] = useState<'recent' | 'oldest'>('recent')
  const [filter, setFilter] = useState<SkilType | 'all'>('all')

  const processedProjects = useMemo(() => {
    let filtered = [...projectsData]

    if (filter !== 'all') {
      filtered = filtered.filter(p => p.skils.some(s => s.type === filter))
    }

    return filtered.sort((a, b) => {
      const dateA = parseProjectDate(a.date).getTime()
      const dateB = parseProjectDate(b.date).getTime()
      return sortOrder === 'recent' ? dateB - dateA : dateA - dateB
    })
  }, [sortOrder, filter])

  return (
    <S.SectionContainer id="projects">
      <div className="container">
        <header>
          <S.SectionTitle>Projetos</S.SectionTitle>
          <S.Controls>
            <S.SelectGroup>
              <label>Tecnologia</label>
              <select value={filter} onChange={e => setFilter(e.target.value as any)}>
                <option value="all">Todas</option>
                <option value="react">React</option>
                <option value="django">Django</option>
                <option value="ts">TypeScript</option>
                <option value="python">Python</option>
              </select>
            </S.SelectGroup>

            <S.SelectGroup>
              <label>Ordem</label>
              <select value={sortOrder} onChange={e => setSortOrder(e.target.value as any)}>
                <option value="recent">Mais recentes</option>
                <option value="oldest">Mais antigos</option>
              </select>
            </S.SelectGroup>
          </S.Controls>
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
