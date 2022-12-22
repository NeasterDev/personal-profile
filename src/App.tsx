import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nav } from './components/Nav'
import { AboutMe } from './components/AboutMe'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
