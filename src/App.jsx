import React from 'react'
import NavBar from './components/NavBar'
import HomePage from './components/routes/HomePage'
import {Routes, Route } from 'react-router-dom'
import Automated from './components/routes/FeaturePages/Automated'
import QR from './components/routes/FeaturePages/QR'
import Role from './components/routes/FeaturePages/Role'
import ScrollToTop from './components/ScrollToTop'
import Secure from './components/routes/FeaturePages/Secure'

export default function App() {
  return (
    <div className="font-poppins relative min-h-screen min-w-screen">
      
      
      <div className="custom-grid-bg fixed inset-0 -z-10 h-full w-full"></div>

      <div className="relative z-10">
      <NavBar />
      <ScrollToTop/>
      <Routes>
      <Route path="/finalswsat" element={<HomePage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Automated" element={<Automated/>}  />
        <Route path="/QR" element={<QR/>}  />
        <Route path="/Role" element={<Role/>}  />
        <Route path="/Secure" element={<Secure/>}  />
      </Routes>
      </div>
      

      
    </div>
  )
}
