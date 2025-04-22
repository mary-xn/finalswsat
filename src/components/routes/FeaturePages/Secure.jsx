import React, {useEffect} from 'react'
import { IoDocumentLockOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Footer from '../HomePage/Footer';


export default function Secure() {

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
            <IoDocumentLockOutline className={iconStyles}/>
            <p className={titleStyles}>Secure Data Management</p>
            
          </div>
        </div>

          

          <div>
            <h1 className={subtitleStyles}>Overview</h1>
            <p className={descriptionStyles}>This feature ensures all user and request data is encrypted and protected. Access is granted only to those with the right roles, keeping sensitive information safe from leaks and tampering.</p>
          </div>

          <div>
            <h2 className={subtitleStyles}>Step-by-Step Process</h2>
            <p className={descriptionStyles}>1. User data is stored in an encrypted database (AES or SHA).</p>
            <p className={descriptionStyles}>2. Each role (e.g., Secretary, Chairman) has predefined permissions.</p>
            <p className={descriptionStyles}>3. Sensitive actions (e.g., delete, edit) require authorization tokens or admin approval.</p>
            <p className={descriptionStyles}>4. System creates daily backups to avoid data loss.</p>
            <p className={descriptionStyles}>5. Data validation routines are run to prevent corrupted or missing entries.</p>
            
          </div>

          <div>
            <h2 className={subtitleStyles}>Additional Notes</h2>
            <p className={descriptionStyles}> &#xB7; All access logs are timestamped for traceability.</p>
            <p className={descriptionStyles}> &#xB7; Data can be restored from backups in case of failure.</p>
          </div>
        </div>
      </div>

      </div>
      </div>

      <Footer/>

      
    </div>
  )
}
