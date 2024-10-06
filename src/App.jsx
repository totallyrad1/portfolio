import { useState } from 'react'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Marquee from './components/Marquee'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div>
        <AboutMe />
        <Marquee />
        <Projects />
      </div>
    </>

  )
}

export default App
