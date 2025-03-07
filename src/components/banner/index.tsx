import dev from '../../../assets/images/imageTest.png'
import * as S from './styles'

const Banner = () => {

  return (
    <S.background>
      <div className="container">
      <S.Banner>
        <S.Description>
          <S.Title>
            Olá, eu sou<span> Kauã Torres</span>
          </S.Title>
          <h4>DESENVOLVEDOR FULL-STACK</h4>
          <a href="/curriculo.pdf"><button>BAIXAR CURRICULO</button></a>
        </S.Description>
        <div>
          <img src={dev} alt="dev working" />
        </div>
      </S.Banner>
      </div>
    </S.background>
  )
}

export default Banner
