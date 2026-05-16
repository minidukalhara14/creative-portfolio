// src/components/sections/Hero.jsx

import { motion } from 'framer-motion';
import Navibar from '../common/Navibar';

export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-black text-white mt-16   flex flex-col items-center justify-center  ">
      {/* Fixed Navbar එක උඩින්ම තියෙනවා */}
      <Navibar />
        {/* ප්‍රධාන ලොකු අකුරු ටික */}
        <div className="w-full  min-h-screen gap-10  flex flex-col items-center relative ">
             
                <div className=" font-semibold mt-4 text-[80px] md:text-[150px] lg:text-[180px] leading-[0.85]  tracking-wider text-white flex  justify-center items-center">
                
                    <motion.span
                    className="block"
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                    ISHARA
                    </motion.span>
                
                </div>  
                <div className="font-semibold text-[80px] md:text-[150px] lg:text-[180px] leading-[0.85]  tracking-wider text-white flex justify-center items-center">  
                    <motion.span
                    className="block"
                    initial={{ opacity: 0, y: "100%" }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                    DESHAPRIYA
                    </motion.span>
                
                </div>

                {/*Photo Frame එක */}
                <div className="bg-amber-600 absolute  left-1/2 -translate-x-1/2   w-[280px] h-[380px] border-4 border-solid border-white  overflow-hidden">
                <motion.img
                    src="/assets/hero.png"
                    alt="Hero Image"
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                />
                </div>

           
            

                
            </div>

           


        
    </div>

      
    
  );
}

