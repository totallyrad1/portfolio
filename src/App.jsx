import { useState } from 'react'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
import Reveal from './components/Reveal'
import WhiteCurve from './components/WhiteCurve'
import BlackCurve from './components/BlackCurve'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div>
        <section className='bg-black'>
          <Reveal>
            <AboutMe />
          </Reveal>
          <WhiteCurve />
        </section>
        <section className='bg-white'>
          <Reveal>
            <Skills />
          </Reveal>
          <BlackCurve />
        </section>
        <section className='bg-black'>
          <Reveal>
            <Projects />
          </Reveal>
        </section>
      </div>
    </>

  )
}

export default App
