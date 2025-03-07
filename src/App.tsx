import { ClipLoader } from 'react-spinners'

import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'

import AboutMe from './components/about_me/index'
import Banner from './components/banner'
import Contact from './components/Contact'
import Header from './components/header'
import Projects from './components/projects'
import Skills from './components/skils'
import {GlobalCss} from './styles'
import {darkTheme, lightTheme} from '../theme'
import Footer from './components/footer'


function App() {

  const [estacarrgando, setEstacarregando] = useState(true)
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light"
  )

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Salva a escolha do usuário (opicional)
      return newTheme;
    });
  }

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
      <ClipLoader color={darkTheme.detach} />
    </div>


  ) : (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalCss />
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App
