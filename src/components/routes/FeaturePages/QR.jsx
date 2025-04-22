import React, {useEffect} from 'react'
import { IoQrCodeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Footer from '../HomePage/Footer';


export default function QR() {

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
            <IoQrCodeOutline className={iconStyles}/>
            <p className={titleStyles}>QR Code Scanning Integration</p>
            
          </div>
        </div>

          

          <div>
            <h1 className={subtitleStyles}>Overview</h1>
            <p className={descriptionStyles}>Each generated document is stamped with a unique QR code that links directly to its record in the system. Scanning this code verifies the document's authenticity and current status in real-time.</p>
          </div>

          <div>
            <h2 className={subtitleStyles}>Step-by-Step Process</h2>
            <p className={descriptionStyles}>1. System generates a unique identifier for each document.</p>
            <p className={descriptionStyles}>2.QR code is created using this identifier.(e.g., address, ID number).</p>
            <p className={descriptionStyles}>3. QR code is embedded into the document during generation.</p>
            <p className={descriptionStyles}>4. Authorized users scan the code using any scanner or mobile app.</p>
            <p className={descriptionStyles}>5. System fetches the corresponding record, displaying: Document type, Issued date, and the resident's information.</p>
            
          </div>

          <div>
            <h2 className={subtitleStyles}>Additional Notes</h2>
            <p className={descriptionStyles}> &#xB7; Scanning requires authentication for sensitive information.</p>
            <p className={descriptionStyles}> &#xB7; QR code logs are maintained for audit tracking.</p>
          </div>
        </div>
      </div>

      </div>
      </div>

      <Footer/>

      
    </div>
  )
}
