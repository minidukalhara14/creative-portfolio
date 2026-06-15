import { motion } from "framer-motion";
import Navibar from "../common/Navibar";
import HeroImage from "../common/HeroImage";
import AnimatedTable from "./AnimatedTable";
import Intro from "../common/Intro";
import Services from "./Services";
import Footer from "../common/Footer";

export default function Hero() {
  return (
    <div className="w-full bg-black text-white relative flex justify-center items-center flex-col overflow-x-hidden">

      <div className="w-full h-[700px] lg:min-h-screen  flex justify-center items-center flex-col overflow-hidden select-none relative">

        <div className="w-full h-[70px] md:h-[80px] flex justify-center items-center absolute top-0 z-50">
          <Navibar />
        </div>

        
        <div
          className="
            w-full
            lg:-mt-[70px]
            pb-[50px] 
            md:pb-5
            px-3
            sm:px-4
            md:p-10
            flex
            flex-col
            justify-center
            items-center
            relative
            z-10
          "
        >

          
          <div
            className="
              mt-0
              font-semibold
              text-[48px]
              xs:text-[60px]
              sm:text-7xl
              md:text-[190px]
              leading-[0.85]
              md:leading-[0.8]
              tracking-wide
              md:tracking-wider
              text-white
              flex
              justify-center
              items-center
              overflow-hidden
              text-center
            "
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              ISHARA
            </motion.span>
          </div>

         
          <div
            className="
              font-semibold
              text-[48px]
              xs:text-[60px]
              sm:text-7xl
              md:text-[190px]
              mt-2
              sm:mt-3
              md:mt-[50px]
              leading-[0.85]
              md:leading-[0.8]
              tracking-wide
              md:tracking-wider
              text-white
              flex
              justify-center
              items-center
              overflow-hidden
              text-center
            "
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              DESHAPRIYA
            </motion.span>
          </div>

         
          <div
            className="
              w-full
              flex
              justify-center
              items-center
              mt-6
              sm:mt-6
              md:mt-0
              lg:mt-1
            "
          >
            <HeroImage />
          </div>

        </div>

      </div>

     
      <div
        className="
          flex
          justify-center
          items-center
          mt-6
          lg:mt-0
          relative
          z-20
        "
      >
        <Intro />
      </div>

      
      <div className="w-full relative z-20">
        <AnimatedTable />
      </div>

      <Services />

     
      <Footer />

    </div>
  );
}