import React, {useEffect} from 'react'
import { GrDocumentPdf } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Footer from '../HomePage/Footer';


export default function Automated() {

  const titleDivStyles=`flex gap-5 items-center text-orange-500`
  const iconStyles = `xl:text-6xl md:text-6xl text-5xl `
  const titleStyles = `xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-bold`

  const subtitleStyles =`xl:text-2xl md:text-2xl sm:text-xl text-md flex font-semibold text-orange-600`
  const descriptionStyles=`xl:text-lg md:text-lg sm:text-xl text-sm flex text-justify`

  const containerStyles = ` flex flex-col  gap-9  `
  const outsideContainerStyles = `gap-5  w-[310px] sm:w-[450px] md:w-[550px] lg:w-[650px]   xl:w-[700px]`

 
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div >

      <div className="min-w-screen flex justify-center p-10 ">
      <div className="flex gap-5  px-10 items-start ">
        

        <div  className={outsideContainerStyles} >


        <div className={containerStyles}>
          <div className="flex flex-col gap-2">
    

          <Link to="/#features">
            <div className="flex items-center gap-2 text-white hover:text-orange-400 active:text-orange-700">
                  <IoMdArrowBack className="xl:text-2xl md:text-2xl text-xl"/>
                  <p className="xl:text-lg md:text-lg text-sm">Back to Features</p>
            </div>
          </Link>

          <div className={titleDivStyles}>
            <GrDocumentPdf className={iconStyles}/>
            <p className={titleStyles}>Automated Document Generation</p>
            
          </div>
        </div>

          

          <div>
            <h1 className={subtitleStyles}>Overview</h1>
            <p className={descriptionStyles}>This feature allows users to automatically generate official documents (like certificates, permits, or forms) with pre-filled data. The system pulls information from the database based on user inputs and dynamically populates templates, reducing manual work and errors.</p>
          </div>

          <div>
            <h2 className={subtitleStyles}>Step-by-Step Process</h2>
            <p className={descriptionStyles}>1. User submits a document request via a form.</p>
            <p className={descriptionStyles}>2.System verifies user input and fetches related data (e.g., address, ID number).</p>
            <p className={descriptionStyles}>3. Template is selected based on the type of document.</p>
            <p className={descriptionStyles}>4. Data is automatically filled in using placeholders.</p>
            <p className={descriptionStyles}>5. Document is generated as a PDF, ready for review or printing.</p>
            <p className={descriptionStyles}>6. QR code is attached for validation (if enabled).</p>
            <p className={descriptionStyles}>7. Document is stored in the system and optionally emailed to the requester.</p>
          </div>

          <div>
            <h2 className={subtitleStyles}>Additional Notes</h2>
            <p className={descriptionStyles}> &#xB7; Templates are customizable for different types of documents.</p>
            <p className={descriptionStyles}> &#xB7; The system logs each document generated for tracking purposes.</p>
          </div>
        </div>
      </div>

      </div>
      </div>

      <Footer/>

      
    </div>
  )
}
