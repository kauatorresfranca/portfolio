import dev from '../../../assets/images/dev(ed).png'
import * as S from './styles'

const Banner = () => {

  return (
    <S.background>
      <div className='container'>
        <S.Container>
          <S.Description>
            <h4>DESENVOLVEDOR FULL-STACK</h4>
            <h2>Kauã Torres</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Fugit facere eius, accusantium porro quia quisquam <br />reprehenderit ad dolore, praesentium quaerat ab <br />voluptates esse. Sequi porro cupiditate labore dolor <br />illum accusantium.</p>
            <a href="../../../assets/download/curriculo.pdf"><button>BAIXAR CURRICULO</button></a>
          </S.Description>
          <div>
            <img src={dev} alt="dev working" />
          </div>
        </S.Container>
      </div>
    </S.background>
  )
}

export default Banner
