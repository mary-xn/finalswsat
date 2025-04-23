import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa"
import docuLogoo from '../../../assets/docuLogoo.png'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-4 px-5 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center xl:justify-start md:justify-start">
          <img src={docuLogoo} className="w-[40px]"></img>
          <h3 className="text-xl font-semibold text-white ">Docu<span className="text-orange-500">Bayan</span></h3>
          </div>
          <p className="text-xs text-gray-400">Developed with ❤️ for the community</p>
          <p className="text-xs text-gray-400">Developer: Mary Sembrero</p>
        </div>
        
        <div className="flex gap-4 text-lg">
          <a 
            className="hover:text-orange-500 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a 
            className="hover:text-orange-500 transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            className="hover:text-orange-500 transition-colors"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-700" />
      <p className="text-sm text-center text-gray-400">© {new Date().getFullYear()} DocuBayan. All Rights Reserved.</p>
    </footer>
  )
}
