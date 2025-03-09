import * as S from './styles'

const Footer = () => {
  const ano = new Date().getFullYear()
  return (
    <S.Footer>
      <S.Container>
        <p>© Kauã Torres - {ano} - Todos os direitos reservados</p>
      </S.Container>
    </S.Footer>
  )
}

export default Footer
