import { ClipLoader } from 'react-spinners'

import { useEffect, useState } from 'react'

import AboutMe from './components/about_me/index'
import Contact from './components/Contact'
import Header from './components/header'
import Projects from './components/projects'
import Skills from './components/skils'
import {colors, GlobalCss} from './styles'
import Footer from './components/footer'
import Hero from './components/hero'


function App() {

  const [estacarrgando, setEstacarregando] = useState(true)

  useEffect(() => {
    setEstacarregando(false)
  }, [])

  return estacarrgando ? (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100%",
      backgroundColor: "#2a3342"
    }}>
      <ClipLoader color={colors.primary} />
    </div>


  ) : (
      <>
      <GlobalCss />
      <Header/>
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
