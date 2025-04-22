import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Footer from '../HomePage/Footer';


export default function Vision() {

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
            <p className={titleStyles}>Vision & Mission</p>
            
          </div>
        </div>

          

          <div>
            <h1 className={subtitleStyles}>Overview</h1>
            <p className={descriptionStyles}>Explore the core beliefs and long-term aspirations that guide the development of the Barangay Document System. This section reflects the developer’s commitment to innovation, security, and public service.</p>
          </div>

          <div>
            <h2 className={subtitleStyles}>Vision</h2>
            <p className={descriptionStyles}>To lead the way in digital transformation for barangay governance, setting a standard for how technology can enhance public service by making it more responsive, secure, and inclusive.</p>
          </div>

          <div>
            <h2 className={subtitleStyles}>Mission</h2>
            <p className={descriptionStyles}>Our mission is to build a robust and scalable system that simplifies document handling within barangays while ensuring data integrity and security. By automating processes and incorporating modern technologies like QR codes and role-based access controls, we aim to reduce workloads, eliminate bottlenecks, and foster a more professional and accountable environment in barangay operations.</p>

            <p className={descriptionStyles}>We are committed to continuous innovation and collaboration with local government units to keep improving the system. Through this project, we hope to inspire more tech-driven solutions that uplift local communities and contribute to nation-building from the ground up.</p>
          </div>

        </div>
      </div>

      </div>
      </div>

      <Footer/>

      
    </div>
  )
}
