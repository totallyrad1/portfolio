import { useRef, useState } from 'react'
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
  const introRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <NavBar introRef={introRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef}/>
      <BackToTop />
      <div>
        <section className='bg-black p-0 m-0' ref={introRef}>
          <Intro aboutMeRef={aboutMeRef}/>
          <WhiteCurve />
        </section>
        <section className='bg-white' ref={aboutMeRef}>
            <AboutMe />
            <Skills />
          <BlackCurve />
        </section>
        <section className='bg-black' ref={projectsRef}>
            <Projects />
        </section>
      </div>
    </>

  )
}

export default App
