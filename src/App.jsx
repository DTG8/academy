import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Courses from './components/Courses'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #f9fafb, #ffffff, #eff6ff)' }}>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
