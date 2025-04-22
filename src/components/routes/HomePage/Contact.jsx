import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import contactimg from '../../../assets/contactimg.png'
import { fadeIn } from '../../../variants';
import { motion } from "framer-motion";

export default function Contact() {
  const iconStyles = `text-2xl hover:cursor-pointer`

  return (
    <motion.section
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center  w-full px-4 py-10"

      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
       viewport={{ once: true, amount: 0.7 }}
    >
      <motion.div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0"
      
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
       viewport={{ once: true, amount: 0.7 }}>
        <img
          src={contactimg}
          alt="Girl illustration"
          className="w-[300px] md:w-[400px] lg:w-[700px] object-contain"
        />
      </motion.div>

    
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <motion.form className="bg-orange-100 w-full max-w-xl rounded-md text-black px-6 py-6 shadow-lg"
        
      variants={fadeIn("up", 0.5)}
      initial="hidden"
      whileInView="show"
       viewport={{ once: true, amount: 0.7 }}>
          <div className="flex flex-col items-start mb-9">
          <h3 className="font-semibold text-3xl text-orange-600">Work With Me!</h3>
          <p className="text-gray-700 text-sm mb-2">
            Fill up the form and I will get back to you within 24 hours. Thank you!
          </p>
          
            <div className="flex gap-2">
            <CiFacebook className={iconStyles} />
            <CiInstagram className={iconStyles} />
            <CiLinkedin  className={iconStyles} />
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mb-5">
            <div>
              <label htmlFor="firstName">
                First Name<span className="text-red-600">*</span>
              </label>
              <input
                name="firstName"
                type="text"
                required
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring focus:ring-orange-600"
              />
            </div>

            <div>
              <label htmlFor="lastName">
                Last Name<span className="text-red-600">*</span>
              </label>
              <input
                name="lastName"
                type="text"
                required
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring focus:ring-orange-600"
              />
            </div>

            <div>
              <label htmlFor="email">
                Email Address<span className="text-red-600">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring focus:ring-orange-600"
              />
            </div>

            <div>
              <label htmlFor="mobileNumber">
                Contact Number<span className="text-red-600">*</span>
              </label>
              <input
                name="mobileNumber"
                type="tel"
                required
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring focus:ring-orange-600"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message">
              Message<span className="text-red-600">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring focus:ring-orange-600 resize-none"
            ></textarea>
          </div>

          <div className="text-center xl:text-right">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-200 hover:cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
}
