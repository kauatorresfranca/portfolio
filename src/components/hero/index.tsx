import * as S from './styles'

const Banner = () => {
  return (
    <S.background>
        <S.Banner>
          <S.Description>
            <S.Title>
              Olá, eu sou<span> Kauã Torres</span>
            </S.Title>
            <h4>DESENVOLVEDOR FULL-STACK</h4>
            <a href="/curriculo.pdf">
              <button>
                <i className="ri-download-line"></i>BAIXAR CURRICULO
              </button>
            </a>
          </S.Description>
        </S.Banner>
    </S.background>
  )
}

export default Banner
