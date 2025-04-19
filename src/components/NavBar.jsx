import React, { useState } from 'react'
import { Link } from 'react-scroll'
import docuLogoo from '../assets/docuLogoo.png'
import { IoMenuOutline } from "react-icons/io5"

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'demo', label: 'Demo' },
    { id: 'testimonials', label: 'Testimonials' }
  ]

  const routeStyles = `
    text-base
    text-white
    hover:text-orange-500
    hover:cursor-pointer
    transition
    duration-200
  `

  const contactStyles = `
    border border-orange-500
    text-white
    px-4 py-2
    rounded-full
    hover:bg-orange-600
    hover:text-white
    transition
    duration-200
    cursor-pointer
  `

  const handleLinkClick = (id) => {
    if (activeSection !== id) {
      setActiveSection(id)
    }
    setTimeout(() => setMenuOpen(false), 300)
  }

  return (
    <nav className="fixed top-0 z-[9999] w-full bg-black/20 shadow-sm backdrop-blur-md">
      <div className="flex justify-between items-center px-5 py-4 md:px-10 md:py-5">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img className="w-[50px]" src={docuLogoo} alt="DocuForge Logo" />
          <div className="text-xl font-bold text-white">
            Docu<span className="text-orange-600">Forge</span>
          </div>
        </div>

      
        <div className="md:hidden text-3xl text-orange-500 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <IoMenuOutline />
        </div>

       
        <div className="hidden md:flex gap-9 items-center">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              offset={-90}
              spy={true}
              onSetActive={() => setActiveSection(section.id)}
              className={`${routeStyles} ${activeSection === section.id ? 'text-orange-500 font-semibold' : ''}`}
            >
              {section.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            onClick={() => handleLinkClick('contact')}
            onSetActive={() => setActiveSection('contact')}
            className={`${contactStyles} ${activeSection === 'contact' ? 'bg-orange-600 text-white font-semibold' : ''}`}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 py-6 bg-black/80 text-white shadow-md rounded-b-lg z-50">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              offset={-50}
              spy={true}
              onClick={() => handleLinkClick(section.id)}
              className={`${routeStyles} ${activeSection === section.id ? 'text-orange-500 font-semibold' : ''}`}
            >
              {section.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            spy={true}
            onClick={() => handleLinkClick('contact')}
            className={`${contactStyles} ${activeSection === 'contact' ? 'bg-orange-600 text-white font-semibold' : ''}`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
