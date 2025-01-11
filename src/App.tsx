import AboutMe from './components/about_me/index'
import Banner from './components/banner'
import Header from './components/header'
import Projects from './components/projects'
import Skils from './components/skils'
import { GlobalCss } from './styles'


function App() {

  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <AboutMe />
      <Skils />
      <Projects />
    </>
  )
}

export default App
