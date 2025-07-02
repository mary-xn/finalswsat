import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import About from './HomePage/About'
import Home from './HomePage/Home'
import Features from './HomePage/Features'
import Demo from './HomePage/Demo'
import Testimonials from './HomePage/Testimonials'
import Contact from './HomePage/Contact'
import Footer from './HomePage/Footer'


export default function HomePage() {

  const location = useLocation()

  useEffect(() => {
    
    window.scrollTo(0, 0); 

    
    const hash = location.hash.replace('#', '');
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]); 
  
  return (
    <div className="relative z-10">
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
