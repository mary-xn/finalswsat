import React, { useState } from 'react';
import quote from '../assets/quote.svg'

export default function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const TestimonialCard = ({ name, role, message }) => (
    <div className="bg-transparent h-auto w-[90vw] sm:w-[300px] md:w-[400px] lg:w-[900px] p-6 rounded-xl shadow-md transition duration-300 hover:shadow-xl text-center flex flex-col justify-center items-center gap-5">

      <div>
      <img src={quote} className="absolute  left-36 sm:left-[47%] lg:top-4 lg:left-[50%] w-[40px] lg:w-[50px] bg-orange-500 rounded-full" />

      </div>

      <div className="rounded-xl border border-orange-600 p-8">
      <p className="text-white text-xl lg:text-3xl italic mb-4">“{message}”</p>
      <div>
        <p className="font-semibold text-md lg:text-xl  text-gray-200">{name}</p>
        <p className="text-sm lg:text-md text-gray-300">{role}</p>
      </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col items-center gap-10">
      
      <TestimonialCard
        name={testimonials[currentIndex].name}
        role={testimonials[currentIndex].role}
        message={testimonials[currentIndex].message}
      />

      <div className="flex gap-7 mt-4">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-300 hover:text-black hover:cursor-pointer hover:bg-orange-400 text-gray-800 rounded active:bg-orange-600"
        >
          ⟨ Prev
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-gray-300 hover:cursor-pointer  hover:text-black hover:bg-orange-400 text-gray-800 rounded active:bg-orange-600"
        >
          Next ⟩
        </button>
      </div>
    </div>
  );
}
