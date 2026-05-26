import { motion } from 'framer-motion';
import Navibar from '../common/Navibar';
import AboutMe from '../common/HeroCard';
import HeroCard from '../common/HeroCard';
import HeroImage from '../common/HeroImage';
import AnimatedTable from './AnimatedTable';





export default function Hero() {
  return (
    
    <div className="w-full  bg-black text-white relative flex justify-center items-center flex-col">
      
      
      <div className="w-full h-screen  flex justify-center items-center flex-col overflow-hidden select-none">
        
        
        
          <Navibar />
        

           
        <div className=" w-full h-[calc(100vh-105px)] p-10  flex flex-col  items-center relative">
          
          
          <div className="font-semibold text-[190px]  leading-[0.8] tracking-wider text-white flex justify-center items-center overflow-hidden">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              ISHARA
            </motion.span>
          </div>  

         
          <div className="font-semibold text-[190px] mt-[50px]  leading-[0.8] tracking-wider text-white flex justify-center items-center overflow-hidden mt-4">  
            <motion.span
              className="block"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              DESHAPRIYA
            </motion.span>
          </div>
           
          <HeroImage />
   

        </div>
      
      </div>
       
      <HeroCard/>
      <AnimatedTable />

    </div>
  );
}