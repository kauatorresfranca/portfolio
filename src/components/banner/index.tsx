import dev from '../../../assets/images/imageTest.png'
import * as S from './styles'

const Banner = () => {

  return (
    <S.background>
      <S.Container>
        <S.Description>
          <S.Title>
            Hi, i am<span> Kauã Torres</span>
          </S.Title>
          <h4>DEVELOPER FULL-STACK</h4>
          <a href="/curriculo.pdf"><button>DOWNLOAD RESUME</button></a>
        </S.Description>
        <div>
          <img src={dev} alt="dev working" />
        </div>
      </S.Container>
    </S.background>
  )
}

export default Banner
