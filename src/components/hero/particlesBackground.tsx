import { useCallback, useEffect, useState } from "react"
import Particles, {
  initParticlesEngine,
} from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { ISourceOptions } from "@tsparticles/engine"

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine) // versão leve do tsparticles
    }).then(() => setInit(true))
  }, [])

  const particlesLoaded = useCallback(async () => {
    // função obrigatória mas não usada — mantemos tipagem correta
  }, [])

  if (!init) return null

  const options: ISourceOptions = {
    fullScreen: { enable: false }, // impede ocupar todo o body
    background: { color: { value: "#17191e" } },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: { enable: true, width: 800, height: 800 },
      },
      color: { value: ["#05225eff", "#0572e7ff", "#96cbffff"] },
      shape: { type: "circle" },
      opacity: { value: { min: 0.2, max: 0.6 } },
      size: {
        value: { min: 1, max: 5 },
        animation: { enable: true, speed: 1, sync: false },
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: "none",
        random: true,
        straight: false,
        outModes: { default: "out" },
      },
    },
    detectRetina: true,
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  )
}

export default ParticlesBackground
