import { useState } from 'react'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
import Reveal from './components/Reveal'
import WhiteCurve from './components/WhiteCurve'
import BlackCurve from './components/BlackCurve'
import Intro from './components/Intro'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <NavBar />
      <BackToTop />
      <div>
        <section className='bg-black p-0 m-0'>
          <Intro />
          <WhiteCurve />
        </section>
        <section className='bg-white'>
            <AboutMe />
            <Skills />
          <BlackCurve />
        </section>
        <section className='bg-black'>
            <Projects />
        </section>
      </div>
    </>

  )
}

export default App
