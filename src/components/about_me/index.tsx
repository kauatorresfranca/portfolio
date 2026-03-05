import * as S from './styles'

const AboutMe = () => {
  const stats = [
    { label: 'Idade', value: '19 anos' },
    { label: 'Localização', value: 'Maceió - AL' },
  ]

  return (
    <S.AboutSection id='about'>
      <div className="container">
        <S.SectionHeader
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Sobre Mim</h2>
        </S.SectionHeader>

        <S.MainContent>
          <S.TextSide
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Sou Kauã Torres, desenvolvedor <strong>Full Stack</strong> e estudante de Ciência da Computação. Minha trajetória é marcada pela transição da curiosidade técnica para a construção de soluções que geram valor real. Com base sólida em <strong>Python (Django)</strong> e <strong>React (TypeScript)</strong>, foco em arquitetar aplicações que equilibram performance e design.
            </p>

            <p>
              Durante minha formação na <strong>EBAC</strong>, consolidei fluxos de trabalho modernos, incluindo <strong>CI/CD, Docker e metodologias ágeis</strong>. Projetos complexos, como o <em>Zuppi</em> (réplica funcional do X), permitiram que eu dominasse desde a modelagem de dados até o deploy escalável em produção.
            </p>

            <p>
              Atualmente, atuo como desenvolvedor autônomo, entregando de sistemas de agendamento a landing pages otimizadas para <strong>SEO e conversão</strong>. Encaro o código não apenas como uma ferramenta, mas como o meio para resolver problemas e potencializar negócios digitais.
            </p>

            <S.StatsGrid>
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <span className="label">{stat.label}</span>
                  <span className="value">{stat.value}</span>
                </div>
              ))}
            </S.StatsGrid>
          </S.TextSide>

          <S.KnowledgeSide
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="experience-box">
              <h3>Formação e Experiência</h3>
              <ul>
                <li>
                  <strong>Desenvolvedor Front-end</strong>
                  <span>Autônomo - Atual</span>
                </li>
                <li>
                  <strong>Ciência da Computação</strong>
                  <span>UNIMA | 3º Período</span>
                </li>
                <li>
                  <strong>Desenvolvedor Full Stack</strong>
                  <span>EBAC | Concluído em 2025</span>
                </li>
              </ul>
            </div>

            <S.ResumeBox>
              <p>Quer saber mais sobre minha trajetória técnica e projetos detalhados?</p>
              <S.ResumeButton
                href="/curriculo.pdf" // Altere para o caminho real do seu arquivo
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-file-download-line"></i>
                Ver Currículo Completo
              </S.ResumeButton>
            </S.ResumeBox>
          </S.KnowledgeSide>
        </S.MainContent>
      </div>
    </S.AboutSection>
  )
}

export default AboutMe
