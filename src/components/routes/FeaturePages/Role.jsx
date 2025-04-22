import React, {useEffect} from 'react'
import { BsFillFilePersonFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import Footer from '../HomePage/Footer';


export default function Role() {

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
            <BsFillFilePersonFill className={iconStyles}/>
            <p className={titleStyles}>Role-Based Access</p>
            
          </div>
        </div>

          

          <div>
            <h1 className={subtitleStyles}>Overview</h1>
            <p className={descriptionStyles}>This feature manages who can view, create, edit, or approve documents. It ensures that each staff member has access only to what they need, improving accountability and security.</p>
          </div>

          <div>
            <h2 className={subtitleStyles}>Step-by-Step Process</h2>
            <p className={descriptionStyles}>1. System admin assigns roles during account creation.</p>
            <p className={descriptionStyles}>2. Each role has specific permissions, such as: Secretary, Chairman, and/or Barangay Admin.
            </p>
            <p className={descriptionStyles}>3. Login credentials determine access to pages and features.</p>
            <p className={descriptionStyles}>4. Restricted areas are blocked from unauthorized users.
            </p>
            <p className={descriptionStyles}>5. Users see only the functions assigned to their role on the dashboard.</p>
            
          </div>

          <div>
            <h2 className={subtitleStyles}>Additional Notes</h2>
            <p className={descriptionStyles}> &#xB7; Roles can be updated by Admins anytime.</p>
            <p className={descriptionStyles}> &#xB7; If you'd like, I can help you format these for display in your app or even auto-generate the JSX structure for the subpages. Let me know!
            </p>
          </div>
        </div>
      </div>

      </div>
      </div>

      <Footer/>

      
    </div>
  )
}
