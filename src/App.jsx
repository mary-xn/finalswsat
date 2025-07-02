import React from 'react'
import NavBar from './components/NavBar'
import HomePage from './components/routes/HomePage'
import {Routes, Route } from 'react-router-dom'
import Automated from './components/routes/FeaturePages/Automated'
import QR from './components/routes/FeaturePages/QR'
import Role from './components/routes/FeaturePages/Role'
import ScrollToTop from './components/ScrollToTop'
import Secure from './components/routes/FeaturePages/Secure'
import Vision from './components/routes/AboutPages/Vision'
import Developer from './components/routes/AboutPages/Developer'
import Purpose from './components/routes/AboutPages/Purpose'

export default function App() {
  return (
    <div className="font-poppins relative min-h-screen">
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>
      <div className="relative z-10">
      <NavBar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Automated" element={<Automated/>}  />
        <Route path="/QR" element={<QR/>}  />
        <Route path="/Role" element={<Role/>}  />
        <Route path="/Secure" element={<Secure/>}  />
        <Route path="/Developer" element={<Developer/>}/>
        <Route path="/Vision" element={<Vision/>}  />
        <Route path="/Purpose" element={<Purpose/>}  />
      </Routes>
      </div>
      

      
    </div>
  )
}
