import * as S from './styles'

type Props = {
  title: string,
  description: string,
  imgUrl: string,
  gitHubUrl: string,
  projectViewUrl: string,
  children: JSX.Element
}

const Project = ({ title, description, gitHubUrl, projectViewUrl, children, imgUrl }: Props) => {

  return (
    <S.Project>
      <img src={imgUrl} alt="image eplay" />
      <S.TagList>
        {children}
      </S.TagList >
      <h2>{title}</h2>
      <p>{description}</p>
      <S.ButtonGroup>
        <a href={gitHubUrl}><S.PrimaryButton>View on github</S.PrimaryButton></a>
        <a href={projectViewUrl}><S.SecundaryButton>View project</S.SecundaryButton></a>
      </S.ButtonGroup>
    </S.Project>
  )
}

export default Project
