import { FaArrowDown } from "react-icons/fa";
import ScrollButton from "./ScrollButton";
import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';





export default function Intro() {

     return (
        <div className="w-[calc(100vw-70px)]  rounded-2xl  text-primary flex justify-center items-center relative ">
            
            <div id="intro" className="w-full h-[calc(100%+30px)] absolute -top-[35px] bg-secondary flex items-center flex-col rounded-2xl relative">
              
              <div className="absolute -top-[35px] w-[200px] h-[35px] text-white flex items-center justify-center ">
      
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

                <div className="w-[700px] h-[200px] flex flex-col mt-[150px] items-center ">
                    <span className="text-[48px] leading-[46px] font-medium tracking-normal text-center">
                        With years of experience in the
                    </span>
                    <span className="text-[48px] leading-[46px] font-medium tracking-normal text-center">
                        industry, I have worked with
                    </span>
                    <span className="text-[48px] leading-[46px] font-medium tracking-normal text-center">
                        businesses of all sizes. 
                    </span>
                </div>

                <div className="p-4 mt-[10px] h-[10px] border border-gray-300 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center ">
                  <Link to="/about" >
                    <AnimatedButton text="EXPLORE MY STORY" />
                  </Link>
                </div>

                <div className="w-full flex justify-center items-center mt-[100px]">
                    
                    <motion.span
                        
                        initial={{ y: "100%", opacity: 0 }}
                        
                        
                        whileInView={{ y: 0, opacity: 1 }} 
                        
                        
                        viewport={{ once: true, amount: 0 }} 
                        
                        transition={{
                            duration: 1.2,
                            ease: [0.76, 0, 0.24, 1], 
                            delay: 0.2, 
                        }}
                        className="block text-[150px] font-semibold uppercase tracking-[0.15em] text-primary leading-none select-none"
                    >
                        Since 2014
                    </motion.span>

                </div>

                <div className="w-[calc(100vw-70px)] absolute bottom-0  h-[70px] bg-secondary rounded-b-2xl   ">

                </div>

                
            </div>
        
        </div>
    );
}