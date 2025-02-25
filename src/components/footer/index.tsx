import * as S from './styles'

const Footer = () => {
  const ano = new Date().getFullYear()
  console.log(ano)
  return (
    <S.Background>
      <S.Container>
        <p>© Kauã Torres - {2025} - Todos os direitos reservados</p>
      </S.Container>
    </S.Background>
  )
}

export default Footer
