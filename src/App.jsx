import React from 'react'
import NavBar from './components/NavBar'
import About from './components/routes/About'
import Home from './components/routes/Home'
import Features from './components/routes/Features'
import Demo from './components/routes/Demo'
import Contact from './components/routes/Contact'
import Testimonials from './components/routes/Testimonials';




export default function App() {
  return (
    <div className="font-poppins relative min-h-screen">
      
    <div className="fixed inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[length:20px_20px]" />
  
    <NavBar />
    <Home />
    <About />
    <Features />
    <Demo />
    <Testimonials />
    <Contact />
  </div>
  )
}
