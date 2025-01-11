import html from '../../../assets/images/html.webp'
import css from '../../../assets/images/css.svg'
import js from '../../../assets/images/js.png'
import ts from '../../../assets/images/ts.png'
import react from '../../../assets/images/react.png'
import postgres from '../../../assets/images/postgrees.png'
import py from '../../../assets/images/py.png'
import git from '../../../assets/images/git.png'

import * as S from "./styles"


const Skils = () => {

  return (

    <S.Background id="skils">
      <div className="container">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#65dddd" className="bi bi-diamond" viewBox="0 0 16 16">
            <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
          </svg>
          Skils</h3>
        <S.ListSkil>
          <S.Skil>
            <h4>Html</h4>
            <img src={html} alt="html" />
          </S.Skil>
          <S.Skil>
            <h4>Css</h4>
            <img src={css} alt="html" />
          </S.Skil>
          <S.Skil>
            <h4>JavaScript</h4>
            <img className='diferent' src={js} alt="html" />
          </S.Skil>
          <S.Skil>
            <h4>TypeScript</h4>
            <img className='diferent' src={ts} alt="html" />
          </S.Skil>
          <S.Skil>
            <h4>React</h4>
            <img src={react} alt="html" />
          </S.Skil>
          <S.Skil>
            <h4>Postgres</h4>
            <img src={postgres} alt="html" />
          </S.Skil>
          <S.Skil>
            <h4>Python</h4>
            <img src={py} alt="html" />
          </S.Skil>
          <S.Skil>
            <h4>Git</h4>
            <img src={git} alt="html" />
          </S.Skil>
        </S.ListSkil>
      </div>
    </S.Background>
  )
}

export default Skils
