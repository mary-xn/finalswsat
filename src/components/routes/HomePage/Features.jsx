import React from 'react'
import { IoDocumentLockOutline } from "react-icons/io5";
import { IoQrCodeOutline } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFillFilePersonFill } from "react-icons/bs";
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router';

export default function Features() {
  
  const featureDiv = `
    relative
     px-8 py-15 xl:py-10 xl:bg-orange-50 md:bg-white  rounded-lg transition-all duration-500 transform 
    lg:hover:-translate-y-5 hover:shadow-lg ease-in-out hover:duration-800 lg:hover:bg-orange-600
    md:hover:bg-orange-600
    hover:cursor-pointer group hover:text-white flex flex-col items-center gap-3 
    xl:active:scale-95 xl:active:rotate-2  
    md:active:scale-95 
    border
     xl:border-none
     md:border-none
    border-orange-700
    flex  justify-center
  `;

  const description = ` lg:text-md md:text-base
  text-white md:text-black xl:text-black  text-justify group-hover:text-white mb-6
  
  `;

  const icon = `
    absolute
    bottom-[94%]
    left-[44%]
    xs:bottom-[90%]
    xs:left-[45%]
    md:bottom-[92%]
    md:left-[45%]
    lg:bottom-[95%]
    lg:left-[41%]
    xl:bottom-[93%]
    xl:left-[44%]
    2xl:bottom-[91%]
    2xl:left-[45%]
    2xl:bg-orange-50
    rounded-full
    py-2
     md:border-none
    md:bg-white
    xl:border-none
    border
    xl:bg-orange-50
    bg-orange-700
    border-orange-700
    transition-all duration-500 
    xl:group-hover:bg-orange-600
     md:text-black text-white xl:text-black text-5xl text-center group-hover:text-white
     md:group-hover:bg-orange-600
  `;

  const title = `
    text-2xl text-white md:text-black xl:text-black  text-center  font-bold w-[290px] mb-5 
    group-hover:text-white 
    md:text-2xl
    md:w-[190px]
    lg:text-2xl
    lg:w-[200px]
    xl:text-2xl
    xl:w-[280px]
  `;

  const buttonStyles =`border  text-white md:text-black xl:text-black p-3 flex justify-center items-center text-base rounded-lg group-hover:text-white hover:cursor-pointer active:bg-orange-700 absolute bottom-5 xl:left-[30%] sm:left-[25%] w-[170px]   xl:hover:bg-slate-900 md:hover:bg-slate-900 sm:hover:bg-slate-900 hover:bg-orange-600 hover:border-none [@media(min-width:480px)]:right-[32%] [@media(min-width:400px)]:right-[25%] [@media(min-width:370px)]:right-[25%] `

  const iconStyles = `text-xl font-bold`


  return (
    <motion.section id="features" className="flex flex-col py-20 w-full items-center gap-25 px-5 pb-[200px] min-h-screen "
      variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}>
      
      <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView="show" viewport={{ once: false }}>
        <p className="text-center text-5xl lg:text-6xl font-bold text-white xl:text-orange-500 md:text-orange-500 2xl:text-orange-500">Features</p>
        <p className="text-md lg:text-xl text-center">What makes the system easy and efficient to use.</p>
      </motion.div>

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-6 w-full justify-center "
        variants={fadeIn("up", 0.7)} initial="hidden" whileInView="show" viewport={{ once: true }}>
        
        <div className={featureDiv}>
          <div><GrDocumentPdf className={icon}/></div>
          <p className={title}>Automated Document Generation</p>
          <p className={description}>Generate official documents instantly with pre-filled information based on user input. This feature minimizes errors, saves time, and ensures consistency across all document types. Whether it’s certificates, permits, or forms, everything is streamlined. Say goodbye to manual editing and formatting hassles.</p>
          <Link to="/Automated"><button className={buttonStyles}>Read More <MdArrowOutward className={iconStyles}/> </button></Link>
        </div>

        <div className={featureDiv}>
          <div><IoQrCodeOutline className={icon}/></div>
          <p className={title}>QR Code Scanning Integration</p>
          <p className={description}>Each generated document comes with a unique QR code for fast verification and tracking. Scanning the code gives authorized users instant access to the document’s details and status. This enhances security and prevents document fraud. It’s a modern solution for a more transparent and efficient system.</p>
          <Link to="/QR"><button className={buttonStyles}>Read More <MdArrowOutward className={iconStyles}/> </button></Link>
        </div>

        <div className={featureDiv}>
          <div><IoDocumentLockOutline className={icon}/></div>
          <p className={title}>Secure Data Management</p>
          <p className={description}>All user and request data are stored in an encrypted database to protect sensitive information. Role-based permissions ensure only authorized personnel can access or modify specific records. Regular backups and data validation measures maintain data integrity. Your community’s data stays safe, organized, and accessible only when needed.</p>
          <Link to="/Secure"><button className={buttonStyles}>Read More <MdArrowOutward className={iconStyles}/> </button></Link>
        </div>

        <div className={featureDiv}>
          <div><BsFillFilePersonFill className={icon}/></div>
          <p className={title}>Role-Based Access</p>
          <p className={description}>Control who can access, edit, or approve documents with role-based permissions. Secretaries can manage daily requests and data entries, while the Chairman can oversee approvals and final outputs. This structure enhances accountability and ensures tasks are managed by the right personnel. It also protects sensitive operations from unauthorized access.</p>
          <Link to="/Role"><button className={buttonStyles}>Read More <MdArrowOutward className={iconStyles}/> </button></Link>
        </div>

      </motion.div>
    </motion.section>
  )
}
