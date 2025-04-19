import React from 'react'
import { IoDocumentLockOutline } from "react-icons/io5";
import { IoQrCodeOutline } from "react-icons/io5";
import { GrDocumentPdf } from "react-icons/gr";
import { BsFillFilePersonFill } from "react-icons/bs";
import {motion} from 'framer-motion'
import { fadeIn } from '../../variants';

export default function Features() {

  const featureDiv = `
  circle-fill px-8 py-4  bg-white rounded-lg transition-all duration-500 transform lg:hover:-translate-y-5  hover:shadow-lg ease-in-out hover:duration-800 hover:cursor-pointer group hover:text-white flex flex-col items-center xl:items-start
  `

  const description = `text-black  text-justify group-hover:text-white group-active:text-white  `

  const icon = `text-black  text-5xl text cen group-hover:text-white group-active:text-white `

  const title=`text-2xl text-black text-center xl:text-left font-bold w-[290px] mb-5 group-hover:text-white group-active:text-white `


  return (
    <motion.section id="features" className="flex flex-col w-full items-center  gap-25  px-5 py-20 xl:py-50 "
    variants={fadeIn("up", 0.7)}
    initial="hidden"
    whileInView="show"

    viewport={{ once: true}}>
      <motion.div variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView="show"
      
      viewport={{ once: false}}>
        <p className="text-center text-5xl lg:text-6xl font-bold text-orange-500">Features</p>
        <p className=" text-md lg:text-xl text-center">What makes the system easy and efficient to use.</p>
      </motion.div>

      

      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-center "
      variants={fadeIn("up", 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true}}
      >
        <div className={featureDiv}>
          <div ><GrDocumentPdf className={icon}/></div>
          <p className={title}> Automated Document Generation</p>
          <p className={description}>Generate official documents instantly with pre-filled information based on user input. This feature minimizes errors, saves time, and ensures consistency across all document types. Whether it’s certificates, permits, or forms, everything is streamlined. Say goodbye to manual editing and formatting hassles.</p>
        </div>

        <div className={featureDiv}>
          <div><IoQrCodeOutline className={icon}/></div>
          <p className={title}>QR Code Scanning Integration</p>
          <p className={description}>Each generated document comes with a unique QR code for fast verification and tracking. Scanning the code gives authorized users instant access to the document’s details and status. This enhances security and prevents document fraud. It’s a modern solution for a more transparent and efficient system.</p>
        </div>


        <div className={featureDiv}>
          <div><IoDocumentLockOutline className={icon}/></div>
          <p className={title}>Secure Data Management</p>
          <p className={description}>All user and request data are stored in an encrypted database to protect sensitive information. Role-based permissions ensure only authorized personnel can access or modify specific records. Regular backups and data validation measures maintain data integrity. Your community’s data stays safe, organized, and accessible only when needed.</p>
        </div>

        <div className={featureDiv}>
          <div><BsFillFilePersonFill className={icon}/></div>
          <p className={title}>Role-Based Access</p>
          <p className={description}>Control who can access, edit, or approve documents with role-based permissions. Secretaries can manage daily requests and data entries, while the Chairman can oversee approvals and final outputs. This structure enhances accountability and ensures tasks are managed by the right personnel. It also protects sensitive operations from unauthorized access.</p>
        </div>


      </motion.div>
    </motion.section>
  )
}
