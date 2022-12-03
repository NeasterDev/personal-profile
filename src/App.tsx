import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nav } from './components/Nav'
import { AboutMe } from './components/AboutMe'

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutMe />
    </div>
  )
}

export default App
