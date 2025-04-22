import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Footer from '../HomePage/Footer';
import developer from '../../../assets/developer.png'


export default function Developer() {

  const titleDivStyles=`flex gap-5 items-center`
  const titleStyles = `xl:text-5xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-bold  text-orange-500`

  const subtitleStyles =`xl:text-2xl md:text-2xl sm:text-xl text-md flex font-semibold text-orange-600`
  const descriptionStyles=`xl:text-md md:text-lg sm:text-xl text-sm text-justify`

  const containerStyles = ` flex flex-col  gap-9  `
  const outsideContainerStyles = `gap-5  w-[310px] sm:w-[450px] md:w-[550px] lg:w-[650px]   xl:w-[700px]`

 
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="pb-[30px] lg:pb-0 md:pb-0" >

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
            <p className={titleStyles}>Meet the Developer</p>
            
          </div>
        </div>

          

          <div>
            <h1 className={subtitleStyles}>Overview</h1>
            <p className={descriptionStyles}>Get to know the passionate developer behind the Barangay Document System—a solution built not only with technical expertise, but also with a deep understanding of community needs and local government processes.</p>
          </div>

          <div className="flex flex-col lg:flex-row md:flex-row items-center">
            <img className="w-[400px]" src={developer}  />
            <div className={descriptionStyles}>Hi! I'm <span className="text-orange-500 font-bold">Mary Sembrero</span>,  a first-year Computer Science student with a strong passion for using technology to solve real-world problems.  </div>
          </div>

          <div>
            <p className={descriptionStyles}>Even though I’m still early in my journey as a developer, I created the Barangay Document System as a way to apply what I’m learning and make a positive impact in the community.</p>
          </div>

          <div>
            <p className={descriptionStyles}>This project started as a simple idea—what if barangay processes could be faster, more secure, and more efficient? I took that idea and turned it into a working system that helps automate document requests, adds QR code tracking for verification, and ensures data privacy through a role-based access setup. It wasn’t easy, but I put in a lot of time and effort to research, code, and test every part of the system.</p>
          </div>

          <div>
            <p className={descriptionStyles}>I believe that age or experience shouldn’t stop anyone from trying to make a difference. As I continue to learn and grow in the field of computer science, I hope to keep improving this project and build more systems that serve and support the people around me.</p>
          </div>


        </div>
      </div>

      </div>
      </div>

      <Footer/>

      
    </div>
  )
}
