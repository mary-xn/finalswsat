import React, { useState } from 'react';
import { Link } from 'react-scroll';
import docuLogoo from '../assets/docuLogoo.png';
import { IoMenuOutline } from 'react-icons/io5';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`); // store the target section in the hash
    } else {
      setActiveSection(id);
      scrollToSection(id);
    }
    setTimeout(() => setMenuOpen(false), 100);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/About' },
    { id: 'features', label: 'Features', path: '/Features' },
    { id: 'demo', label: 'Demo', path: '/Demo' },
    { id: 'testimonials', label: 'Testimonials', path: '/Testimonials' },
  ];

  const routeStyles = `
    text-base
    hover:text-orange-700
    hover:cursor-pointer
    hover:shadow-xs
    transition
    duration-500
  `;

  const contactStyles = `
    border 
    px-3 
    py-2 
    rounded-4xl
    hover:text-white
    hover:bg-orange-700
    hover:cursor-pointer
    transition
    duration-500
  `;

  return (
    <nav className="sticky top-0 z-[99] bg-slate-900/50 shadow-sm backdrop-blur-xs">
      <div className="flex justify-between items-center px-5 py-4 md:px-10 md:py-5">
        <div className="flex justify-center items-center gap-1">
          <img className="w-[50px]" src={docuLogoo} alt="logo" />
          <div className="text-xl font-bold">
            Docu<span className="text-orange-700">Forge</span>
          </div>
        </div>

        <div className="md:hidden text-3xl text-orange-500 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <IoMenuOutline />
        </div>

        <div className="hidden md:flex gap-9 items-center">
          {sections.map((section) =>
            location.pathname === '/' ? (
              <Link
                key={section.id}
                to={section.id}
                smooth={true}
                duration={200}
                offset={-100} 
                spy={true}
                onSetActive={() => setActiveSection(section.id)}
                className={`${routeStyles} ${activeSection === section.id ? 'text-orange-500 font-semibold' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </Link>
            ) : (
              <span
                key={section.id}
                onClick={() => handleLinkClick(section.id)}
                className={`${routeStyles} ${activeSection === section.id ? 'text-orange-500 font-semibold' : ''}`}
              >
                {section.label}
              </span>
            )
          )}

          {location.pathname === '/' ? (
            <Link
              to="contact"
              smooth={true}
              duration={200}
              offset={-100}
              spy={true}
              onSetActive={() => setActiveSection('contact')}
              className={`${contactStyles} ${activeSection === 'contact' ? 'bg-orange-500 text-white font-semibold' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Contacts
            </Link>
          ) : (
            <span
              onClick={() => handleLinkClick('contact')}
              className={`${contactStyles} ${activeSection === 'contact' ? 'bg-orange-500 text-white font-semibold' : ''}`}
            >
              Contacts
            </span>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 text-white py-6 rounded-b-lg z-[100] absolute top-full left-0 w-full bg-black/50 shadow-sm backdrop-blur-xl ">
          {sections.map((section) =>
            location.pathname === '/' ? (
              <Link
                key={section.id}
                to={section.id}
                smooth={true}
                duration={200}
                offset={-100}
                spy={true}
                onSetActive={() => setActiveSection(section.id)}
                className={`${routeStyles} ${activeSection === section.id ? 'text-orange-500 font-semibold' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </Link>
            ) : (
              <span
                key={section.id}
                onClick={() => handleLinkClick(section.id)}
                className={`${routeStyles} ${activeSection === section.id ? 'text-orange-500 font-semibold' : ''}`}
              >
                {section.label}
              </span>
            )
          )}
          {location.pathname === '/' ? (
            <Link
              to="contact"
              smooth={true}
              duration={200}
              offset={-130}
              spy={true}
              onSetActive={() => setActiveSection('contact')}
              className={`${contactStyles} ${activeSection === 'contact' ? 'bg-orange-500 text-white font-semibold' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Contacts
            </Link>
          ) : (
            <span
              onClick={() => handleLinkClick('contact')}
              className={`${contactStyles} ${activeSection === 'contact' ? 'bg-orange-500 text-white font-semibold' : ''}`}
            >
              Contacts
            </span>
          )}
        </div>
      )}
    </nav>
  );
}
