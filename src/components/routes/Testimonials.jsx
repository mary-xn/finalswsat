import React from 'react'
import TestimonialCarousel from '../TestimonialCarousel';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


export default function Testimonials() {
  const testimonials = [
    {
      name: "Ma. Elena R. Cruz",
      role: "Barangay Secretary, Brgy. Malinis",
      message:
        "This system has completely changed the way we handle document requests. It’s fast, reliable, and removes so much manual work.",
    },
    {
      name: "Hon. Roger D. Villanueva",
      role: "Barangay Captain, Brgy. Sta. Teresa",
      message:
        "Before this, we were buried in papers. Now, we can track everything digitally—and the QR code feature is a game changer!",
    },
    {
      name: "Jennifer L. Santos",
      role: "Staff Officer, Brgy. San Miguel",
      message:
        "We love how easy it is to use. Even our older staff picked it up quickly. It’s made our office more organized.",
    },
    {
      name: "Carlos T. Mendoza",
      role: "Administrative Aide, Brgy. Mabuhay",
      message:
        "We process over 50 requests a week. This system made that possible without delays or confusion.",
    },
    {
      name: "Rhoda Mae S. Buenaventura",
      role: "Records Clerk, Brgy. Sto. Niño",
      message:
        "Residents no longer have to wait in long lines. It’s smooth for both the public and the staff. Highly recommended!",
    },
    {
      name: "Leah M. Reyes",
      role: "IT Support Officer, Brgy. San Roque",
      message:
        "What impressed me the most is the security and automation. Every document has a unique QR code for easy verification.",
    },
  ];

 
  return (
    <motion.section id="testimonials" className="min-w-screen text-white flex flex-col  items-center gap-9  py-52"
    variants={fadeIn("up", 0.7)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7 }}>
      <div className="gap-3 flex flex-col">
        <p className="font-bold text-5xl text-orange-400 text-center">Testimonials</p>
        <p className=" text-md lg:text-xl text-center">What my clients' say...</p>
      </div>
      <div className="w-[60%] mx-auto">
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </motion.section>
  )
}
