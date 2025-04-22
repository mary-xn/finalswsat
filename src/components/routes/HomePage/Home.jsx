import React from 'react'
import webprev from '../../../assets/webprev.png'
import { motion } from 'motion/react'
import { fadeIn } from '../../../variants'
import { TiUserAddOutline } from "react-icons/ti"
import { GrGroup } from "react-icons/gr"
import { LuScanQrCode } from "react-icons/lu"
import { IoDocumentAttachOutline } from "react-icons/io5"

export default function Home() {

  const featureStyles = `
    flex flex-col justify-center items-center bg-white ml-2 p-10 rounded-xl shadow-2xl
    transition-all duration-300 ease-in-out h-[200px] w-[143px] text-xl
    hover:bg-gradient-to-t hover:from-orange-200 hover:to-transparent
    hover:cursor-pointer hover:drop-shadow-[0_5px_10px_rgba(106,54,36,1)] hover:-translate-y-10
  `

  const iconStyles = `
    text-[20px] lg:text-xl bg-orange-300 text-black p-3 rounded-full mb-2 absolute top-2
  `

  const featureTitleStyles = `
    mt-11 font-bold text-center text-[12px]   text-black 
  `

  const descriptionStyles = `
    text-justify text-[9px] w-[140px] text-black p-2
  `


  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row px-10 py-5 gap-[10px] items-center justify-center min-h-screen min-w-screen scroll-mt-32 relative"
    >
      <motion.div
        className="mb-5 text-center xl:text-left lg:text-center relative"
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div>
          <p className="text-4xl  lg:text-7xl font-bold mb-5">
            <span className="text-orange-700">Revolutionizing</span> Barangay Document Requests
          </p>
        </div>

        <div>
          <p className="text-2xl  lg:text-4xl mb-5 italic text-orange-600">
            Automated. Accurate. Easy.
          </p>
        </div>

        <a href="#about" className="border px-3 py-2 rounded-sm text-xl hover:text-white hover:bg-orange-700 active:bg-orange-900 hover:cursor-pointer hover:ring-orange-500 ">
          Learn More
        </a>

        <div></div>
      </motion.div>

      <motion.div
        className="flex relative text-center hover:pb-5s w-fit"
        variants={fadeIn("left", 0.5)}
        initial="left"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <div className="w-full px-4 sm:px-0">
  <motion.img
    src={webprev}
    className="w-full max-w-[950px] min-w-[200px] h-auto object-contain sm:w-[600px] md:w-[950px] lg:w-[950px]"
    variants={fadeIn("left", 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}
  />
</div>

      <motion.div id="absolutediv" className="absolute px-10 flex flex-col z-50 w-2xl bottom-[90%] right-[20%] top-[6%] transition-opacity duration-500 opacity-0 md:opacity-100">

          <motion.div
            className="absolute bg-gradient-to-r from-orange-200 via-orange-50 to-orange-200 w-[695px] rounded-xl h-[438px] z-10 "
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
          >
            <motion.div
              className="flex flex-col mt-15  mb-5 gap-4"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <p className="font-bold text-base text-black">
                Barangay E-Service System - <span className="text-orange-600">Secure and Efficient</span><br />
                Administrative Management for Barangay Officials.<br />
                <span className="text-[10px] font-normal">
                  Manage resident records, process requests, amd oversee barangay services efficiently.
                </span>
              </p>
            </motion.div>

            <motion.div
              className="absolute grid grid-cols-4  gap-38 placee-items-center top-1/4 left-1/5 transform translate-y-1/4 -translate-x-1/4"
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className={featureStyles}>
                <span className={iconStyles}><IoDocumentAttachOutline /></span>
                <p className={featureTitleStyles}>Barangay Documents</p>
                <p className={descriptionStyles}>
                  Preview of available documents such as Barangay Clearance, Indigency, and Residency Certificates.
                </p>
              </div>

              <div className={featureStyles}>
                <span className={iconStyles}><LuScanQrCode /></span>
                <p className={featureTitleStyles}>Scan Information</p>
                <p className={descriptionStyles}>
                  Scan and verify QR codes to quickly retrieve resident and document details for validation.
                </p>
              </div>

              <div className={featureStyles}>
                <span className={iconStyles}><TiUserAddOutline /></span>
                <p className={featureTitleStyles}>Add New Resident</p>
                <p className={descriptionStyles}>
                  Register and update resident information in the barangay database for accurate record-keeping.
                </p>
              </div>

              <div className={featureStyles}>
                <span className={iconStyles}><GrGroup /></span>
                <p className={featureTitleStyles}>View Residents</p>
                <p className={descriptionStyles}>
                  Access and manage the list of registered residents, ensuring up-to-date and accurate records.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
