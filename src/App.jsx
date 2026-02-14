import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-industrial-gray selection:bg-industrial-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Timeline />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
