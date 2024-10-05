import { useState } from 'react'
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <AboutMe />
      <Projects />
    </>

  )
}

export default App
