import { colors } from '../../styles'
import * as S from "./styles"


const AboutMe = () => {

  return (
    <div id='about'>
      <div className="container">
        <S.Container>
          <S.Description>
            <h2>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={colors.blue} className="bi bi-diamond" viewBox="0 0 16 16">
                <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
              </svg>
              ABOUT ME
            </h2>
            <p>From a young age, I have always been fascinated by technology and the digital world. That's when I started exploring programming, starting with Python. Since then, I have been dedicating my studies to building a solid career in the technology field. <br /> <br />
              My experience, although recent, has already allowed me to work on projects that involve both the <span className='bold'>front-end</span> and the <span className='bold'>back-end</span>. I have been developing creative solutions focused on <span className="bold">user experience</span>. Furthermore, I always seek to improve myself, learning new technologies and applying them in practical projects.
            </p>
          </S.Description>
        </S.Container >
      </div>
    </div>
  )
}


export default AboutMe
