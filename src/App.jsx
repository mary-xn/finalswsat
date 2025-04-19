import React from 'react'
import NavBar from './components/NavBar'
import About from './components/routes/About'
import Home from './components/routes/Home'
import Features from './components/routes/Features'
import Demo from './components/routes/Demo'
import Contact from './components/routes/Contact'
import Testimonials from './components/routes/Testimonials';
import Footer from './components/routes/Footer'




export default function App() {
  return (
    <div className="font-poppins relative min-h-screen">

    <div class="fixed inset-0 -z-10 h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
  
    <NavBar />
    <Home />
    <About />
    <Features />
    <Demo />
    <Testimonials />
    <Contact />
    <Footer/>
    
  </div>
  )
}
