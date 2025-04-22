import React from 'react';
import webprev from '../../../assets/webprev.png';
import { motion } from 'motion/react';
import { fadeIn } from '../../../variants';
import javaLogo from '../../../assets/techSTack/javaLogo.png';
import mysqlLogo from '../../../assets/techSTack/mysqlLogo.png';
import reactLogo from '../../../assets/techSTack/reactLogo.png';
import springbootLogo from '../../../assets/techSTack/springbootLogo.png';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import tailwindLogo from '../../../assets/techSTack/tailwindLogo.png';
import { Tooltip } from 'react-tooltip';


export default function About() {
  const logoStyles = `w-[28px] lg:w-[40px]`;

  const iconStyles = `text-xl font-bold`

  const buttonStyles =`border text-white  p-[8px] flex justify-center items-center text-base rounded-lg group-hover:text-white hover:cursor-pointer active:bg-orange-800  w-[198px]   hover:bg-orange-600 hover:border-none transform hover:-translate-y-2 transition-all duration-300 `

  return (
    <motion.section
      id="about"
      className="flex flex-col  w-full items-center justify-center gap-20 px-4 md:px-10 pt-[120px] xl:pt-[140px] relative pb-[200px] "
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div>
        <h2 className="text-center font-bold text-5xl lg:text-6xl  ">About</h2>
        <p className="text-md sm:text-lg lg:text-xl text-center">
          Learn more about the system and its purpose.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-10 max-w-screen-2xl w-full">
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={webprev} alt="Web Preview" className="w-full object-contain" />
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="text-justify text-md  lg:text-xl px-2 sm:px-4 lg:px-7 ">
            The <span className=" font-bold text-orange-500">Barangay Document Request System</span> is a smart, user-friendly platform designed to streamline the process of requesting and processing official documents within the barangay. It empowers barangay officials—especially the Barangay Secretary—to manage document requests efficiently, accurately, and securely.
          </p>

          <br />

          <p className="text-justify text-md  lg:text-xl mb-5 px-2 sm:px-4 lg:px-7">
            This system was built with the goal of reducing manual work, minimizing errors, and bringing convenience to both barangay staff and residents.
          </p>

          <div className="flex flex-wrap gap-5 px-2 sm:px-4 lg:px-7 justify-center xl:justify-start">
            <img data-tooltip-id="java" data-tooltip-content="Java" className={logoStyles} src={javaLogo} />
            <img data-tooltip-id="mySQL" data-tooltip-content="MySQL" className={logoStyles} src={mysqlLogo} />
            <img data-tooltip-id="react" data-tooltip-content="React" className={logoStyles} src={reactLogo} />
            <img data-tooltip-id="springboot" data-tooltip-content="Springboot" className={logoStyles} src={springbootLogo} />
            <img data-tooltip-id="tailwind" data-tooltip-content="Tailwind CSS" className={logoStyles} src={tailwindLogo} />

            <Tooltip id="java" place="bottom" />
            <Tooltip id="mySQL" place="bottom" />
            <Tooltip id="react" place="bottom" />
            <Tooltip id="springboot" place="bottom" />
            <Tooltip id="tailwind" place="bottom" />
          </div>

          <div className="flex flex-col items-center lg:flex-row md:flex-row xl:justify-between md:justify-between justify-center px-2 sm:px-4 lg:px-7 mt-5 gap-5 ">
          <Link to="/Vision"><button className={buttonStyles}>Vision & Mission <MdArrowOutward className={iconStyles}/> </button></Link>
          <Link to="/Purpose"><button className={buttonStyles}>Purpose<MdArrowOutward className={iconStyles}/> </button></Link>
          <Link to="/Developer"><button className={buttonStyles}>Meet the Developer<MdArrowOutward className={iconStyles}/> </button></Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
