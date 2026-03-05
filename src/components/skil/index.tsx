import { useState } from 'react'
import { motion } from 'framer-motion'
import * as S from './styles'

type Props = {
  title: string
  img: string
  percentage: number
  description: string
}

const Skil = ({ title, img, percentage, description }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <S.SkilCard
      onClick={() => setIsFlipped(!isFlipped)}
      layout
    >
      <S.CardInner
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* Lado da Frente */}
        <S.CardFront>
          <img src={img} alt={title} />
          <h4>{title}</h4>
          <S.ProgressWrapper>
            <motion.div
              className="bar"
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <span>{percentage}%</span>
          </S.ProgressWrapper>
        </S.CardFront>

        {/* Lado de Trás */}
        <S.CardBack>
          <h5>O que é?</h5>
          <p>{description}</p>
          <span className="tap-hint">Clique para voltar</span>
        </S.CardBack>
      </S.CardInner>
    </S.SkilCard>
  )
}

export default Skil
