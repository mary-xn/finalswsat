import React from 'react';
import FeatureCarousel from '../../../FeatureCarousel';
import login from '../../../assets/demoVid/login.mp4';
import brgyDocu from '../../../assets/demoVid/brgyDocu.mp4';
import scanInfo from '../../../assets/demoVid/scanInfo.mp4';
import addNew from '../../../assets/demoVid/addNew.mp4';
import viewRes from '../../../assets/demoVid/viewRes.mp4';
import logOut from '../../../assets/demoVid/logOut.mp4';
import { motion } from 'motion/react';

export default function Demo() {
  const slides = [login, brgyDocu, scanInfo, addNew, viewRes, logOut];

  return (
    <motion.section
      id="demo"
      className="flex flex-col items-center gap-5  w-full pt-[100px] md:pt-[30px] xl:pt-[0px]  px-4  md:px-8 relative min-w-screen min-h-screen"
      
    >
      <motion.div className="text-center">
        <p className="font-bold text-5xl lg:text-6xl ">Demo</p>
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
