import * as S from './styles'

type Props = {
  title: string
  img: string
  percentage: string
}

const Skil = ({ title, img, percentage }: Props) => {

  return (
    <S.SkilContainer>
      <h4>{title}</h4>
      <img src={img} alt="html" />
      <S.ProgressContainer>
        <S.ProgressFill className={title} />
      </S.ProgressContainer>
      <p>{percentage}</p>
    </S.SkilContainer>
  )
}

export default Skil
