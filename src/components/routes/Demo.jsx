import React from 'react';
import FeatureCarousel from '../../FeatureCarousel.jsx';
import login from '../../assets/demoVid/login.mp4';
import brgyDocu from '../../assets/demoVid/brgyDocu.mp4';
import scanInfo from '../../assets/demoVid/scanInfo.mp4';
import addNew from '../../assets/demoVid/addNew.mp4';
import viewRes from '../../assets/demoVid/viewRes.mp4';
import logOut from '../../assets/demoVid/logOut.mp4';
import { fadeIn } from '../../variants.js';
import { motion } from 'motion/react';

export default function Demo() {
  const slides = [login, brgyDocu, scanInfo, addNew, viewRes, logOut];

  return (
    <motion.section
      id="demo"
      className="flex flex-col items-center gap-5 min-h-screen w-full pt-[100px] md:pt-[120px] lg:pt-[90px] px-4 md:px-8 relative"
      
    >
      <motion.div className="text-center">
        <p className="font-bold text-4xl sm:text-5xl">Demo</p>
        <p className="text-base sm:text-lg lg:text-xl">
          See how the system works in real time.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl">
        <FeatureCarousel slides={slides} />
      </div>
    </motion.section>
  );
}
