import { useState } from 'react'
import * as S from './styles'

type Props = {
  title: string
  img: string
  percentage: string
  description: string
}

const Skil = ({ title, img, percentage, description }: Props) => {

  const [back, setBack] = useState(false)

  return (
    <S.SkilContainer className={back ? 'flip' : ''} onClick={() => setBack(!back)}>
      <S.Card>
        <S.CardFront>
          <S.CardContent>
            <h4>{title}</h4>
            <img src={img} alt={title} />
          </S.CardContent>
          <S.ProgressContainer>
            <S.ProgressFill className={title} />
          </S.ProgressContainer>
          <p>{percentage}</p>
        </S.CardFront>
        <S.CardBack>
          <h4>O que é {title} ?</h4>
          <p>{description}</p>
        </S.CardBack>
      </S.Card>
    </S.SkilContainer>
  )
}

export default Skil
