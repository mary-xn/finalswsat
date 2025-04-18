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
      <div className="font-poppins">
      
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)]  bg-[size:20px_20px]">


        
      </div>

        <NavBar/>
        <div className="relative">
        <Home/>
        <About/>
        <Features/>
        <Demo/>
        <Testimonials/>
        <Contact/>
        </div>
        
        
      

    </div>
    
    
  )
}
