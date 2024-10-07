import { useState } from 'react'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Marquee from './components/Marquee'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div>
        <section className='bg-black'>
          <AboutMe />
        </section>
        <section className='bg-white'>
          <Skills />
        </section>
        <section className='bg-black'>
          <Projects />
        </section>
      </div>
    </>

  )
}

export default App
