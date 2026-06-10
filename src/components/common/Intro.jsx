import { FaArrowDown } from "react-icons/fa";
import ScrollButton from "./ScrollButton";
import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

export default function Intro() {
     return (
       
        <div className="w-full md:w-[calc(100vw-70px)] rounded-2xl text-primary flex justify-center items-center relative px-4 md:px-0">
            
           
            <div id="intro" className="w-full h-[calc(100%+30px)] absolute -top-[80px] bg-secondary flex items-center flex-col rounded-2xl relative pb-12 md:pb-0">
              
             
              <div className="absolute -top-[34px] w-[160px] sm:w-[200px] h-[35px] text-white flex items-center justify-center">
                    <svg
                        viewBox="0 0 200 50"
                        className="absolute top-0 left-0 w-full h-full fill-secondary"
                        preserveAspectRatio="none"
                    >
                        <path d="M 100 0 C 130 0, 150 50, 200 50 L 0 50 C 50 50, 70 0, 100 0 Z" />
                    </svg>
                    <div className="absolute top-2 w-full h-full flex justify-center items-center">
                        <ScrollButton targetId="intro" />
                    </div>
              </div>

                <div className="w-full max-w-full md:w-[700px] min-h-[150px] md:h-[200px] flex flex-col mt-[120px] md:mt-[150px] items-center px-4 md:px-0">
                    <span className="text-[24px] sm:text-[34px] md:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[46px] font-medium tracking-normal text-center block">
                        With years of experience in the
                    </span>
                    <span className="text-[24px] sm:text-[34px] md:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[46px] font-medium tracking-normal text-center block">
                        industry, I have worked with
                    </span>
                    <span className="text-[24px] sm:text-[34px] md:text-[48px] leading-[32px] sm:leading-[40px] md:leading-[46px] font-medium tracking-normal text-center block">
                        businesses of all sizes. 
                    </span>
                </div>

              
                <div className="p-4 mt-[30px] md:mt-[10px] h-[10px] border border-gray-300 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center">
                  <Link to="/about">
                    <AnimatedButton text="EXPLORE MY STORY" />
                  </Link>
                </div>

              
                <div className="w-full flex justify-center items-center mt-[60px] md:mt-[100px] overflow-hidden px-4">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }} 
                        viewport={{ once: true, amount: 0 }} 
                        transition={{
                            duration: 1.2,
                            ease: [0.76, 0, 0.24, 1], 
                            delay: 0.2, 
                        }}
                        className="block text-[40px] sm:text-[80px] md:text-[150px] font-semibold uppercase tracking-[0.10em] md:tracking-[0.15em] text-primary leading-none select-none text-center"
                    >
                        Since 2014
                    </motion.span>
                </div>

               
                <div className="w-full md:w-[calc(100vw-70px)] absolute bottom-0 h-[35px] bg-secondary rounded-b-2xl">
                   
                </div>
                
            </div>
        
        </div>
    );
}