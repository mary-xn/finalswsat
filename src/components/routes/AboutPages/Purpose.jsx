import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Footer from '../HomePage/Footer';


export default function Purpose() {

  const titleDivStyles=`flex gap-5 items-center`
  const titleStyles = `xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-bold  text-orange-500`

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
    

          <Link to="/#about">
            <div className="flex items-center gap-2 text-white hover:text-orange-400 active:text-orange-700">
                  <IoMdArrowBack className="xl:text-2xl md:text-2xl text-xl"/>
                  <p className="xl:text-lg md:text-lg text-sm">Back to About</p>
            </div>
          </Link>

          <div className={titleDivStyles}>
            <p className={titleStyles}>Purpose</p>
            
          </div>
        </div>

          

          <div>
            <h1 className={subtitleStyles}>Overview</h1>
            <p className={descriptionStyles}>Dive into the driving force behind the Barangay Document System. This section explains why the system was created and highlights how it aims to transform the everyday operations of barangays through smart and user-friendly technology.</p>
          </div>

          <div>
          <h1 className={subtitleStyles}>What is the purpose?</h1>
            <p className={descriptionStyles}>The primary goal of this system is to address the inefficiencies commonly encountered in barangay document processing. Traditional manual methods are time-consuming, prone to errors, and can often lead to delays in delivering important documents to residents. This not only affects productivity but also creates frustration for both staff and community members.</p>
          </div>

          <div>
            <p className={descriptionStyles}>The Barangay Document System automates the entire process—from document requests to approvals and issuance—ensuring a faster and more reliable service. It integrates QR code generation to uniquely identify and verify each document, and it securely stores resident data in a role-based access database to ensure privacy and prevent unauthorized access. Ultimately, this system empowers barangays to operate more effectively while giving residents the convenience they deserve.</p>
          </div>

        </div>
      </div>

      </div>
      </div>

      <Footer/>

      
    </div>
  )
}
