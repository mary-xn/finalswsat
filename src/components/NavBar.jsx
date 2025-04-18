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
    hover:text-orange-700
    hover:cursor-pointer
    hover:shadow-xs
    transition
    duration-200
  `

  const contactStyles = `
    border 
    px-3 
    py-2 
    rounded-4xl
    hover:text-white
    hover:bg-orange-700
    hover:cursor-pointer
    transition
    duration-200
  `

  const handleLinkClick = (id) => {
    if (activeSection !== id) {
      setActiveSection(id)
    }
    setTimeout(() => setMenuOpen(false), 300)
  }

  return (
    <nav className="sticky top-0 z-[99] bg-black/5 shadow-sm backdrop-blur-xs">
      <div className="flex justify-between items-center px-5 py-4 md:px-10 md:py-5">
        
        <div className="flex justify-center items-center gap-1">
        <img className="w-[50px]  " src={docuLogoo}></img>
        <div className="text-xl font-bold">
          Docu<span className="text-orange-700">Forge</span>
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
            className={`${contactStyles} ${activeSection === 'contact' ? 'bg-orange-500 text-white font-semibold' : ''}`}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 bg-transparent text-red-200 py-6 shadow-md rounded-b-lg z-[100]">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              offset={-500}
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
            className={`${contactStyles} ${activeSection === 'contact' ? 'bg-orange-500 text-white font-semibold' : ''}`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
