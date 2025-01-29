import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/home'
import Skills from './Components/skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Skills />
      <br />
      <br />
      <Projects/>
      <br />
      <Contact/>
    </div>
  )
}

export default App
