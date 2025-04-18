import React, { useState } from 'react';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

export default function FeatureCarousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const labels = ['Login', 'Documents', 'Scan Info', 'Add Resident', 'View Residents', 'Log Out'];

  return (
    <div className="relative w-full overflow-hidden">
   
      <div
        className="flex transition-transform duration-500 ease-out w-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, index) => (
          <video
            key={index}
            className="w-full flex-shrink-0 object-contain rounded-xl"
            autoPlay
            muted
            loop
            src={src}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
        <button
          onClick={previousSlide}
          className="bg-orange-300 hover:bg-orange-400 text-white rounded-full p-2 text-xl pointer-events-auto"
        >
          <FaArrowLeftLong />
        </button>
        <button
          onClick={nextSlide}
          className="bg-orange-300 hover:bg-orange-400 text-white rounded-full p-2 text-xl pointer-events-auto"
        >
          <FaArrowRightLong />
        </button>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3 w-full">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`text-sm sm:text-base px-3 py-1 rounded-full cursor-pointer transition-colors duration-300 ${
              i === current
                ? 'bg-orange-400 text-white font-semibold'
                : 'bg-gray-300 text-black'
            }`}
          >
            {labels[i]}
          </div>
        ))}
      </div>
    </div>
  );
}
