import * as S from './styles'

type Props = {
  title: string
  img: string
}

const Skil = ({ title, img }: Props) => {

  return (
    <S.SkilContainer>
      <h4>{title}</h4>
      <img src={img} alt="html" />
      <S.ProgressContainer>
        <S.ProgressFill className={title} />
      </S.ProgressContainer>
    </S.SkilContainer>
  )
}

export default Skil
