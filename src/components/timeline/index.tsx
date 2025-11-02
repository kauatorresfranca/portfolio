import * as S from "./styles"
import { colors } from "../../styles"

interface TimelineItem {
  title: string
  subtitle: string
  period: string
  description?: string
}

const Timeline: React.FC = () => {
  const items: TimelineItem[] = [
    {
      title: "Bacharelado em Ciência da Computação",
      subtitle: "Unima",
      period: "02/25 - 12/29",
      description: "Estudo de programação, estruturas de dados, algoritmos e desenvolvimento de software."
    },
    {
      title: "Desenvolvedor Full Stack Python",
      subtitle: "EBAC",
      period: "11/23 - 05/25",
      description:
        "Aprendizado completo de Django, React, TypeScript, PostgreSQL e desenvolvimento de APIs RESTful, com foco em projetos full stack."
    },
    {
      title: "Freelas / Projetos relevantes",
      subtitle: "React, Django, TypeScript, Styled Components",
      period: "08/2025 - Atual",
      description:
        "Trabalhando em projetos de clientes e pessoais, construindo aplicações modernas, responsivas e funcionais, com foco em design, performance e experiência do usuário."
    }
  ]

  return (
    <div className="container">
      <S.TimelineSection id="timeline">
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
          Formação & Experiência
        </h3>

        <S.TimelineContainer>
          {items.map((item, index) => (
            <S.TimelineItem key={index}>
              <S.Dot />
              <S.Content>
                <S.Title>{item.title}</S.Title>
                <S.Subtitle>{item.subtitle}</S.Subtitle>
                <S.Period>{item.period}</S.Period>
                {item.description && <S.Description>{item.description}</S.Description>}
              </S.Content>
            </S.TimelineItem>
          ))}
        </S.TimelineContainer>
      </S.TimelineSection>
    </div>
  )
}

export default Timeline
