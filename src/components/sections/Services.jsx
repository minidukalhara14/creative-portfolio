import { Link } from "react-router-dom";
import ScrollButton from "../common/ScrollButton";
import AnimatedButton from "../common/AnimatedButton";
import { motion } from 'framer-motion';
import ServicesSection from "../common/ServicesSection";
import { RectangleVertical } from "lucide-react";
import ReviewSlider from "../common/ReviewSlider";


export default function Services() {

     return (
       
        <div className="w-full px-4 md:px-0 md:w-[calc(100vw-70px)] mt-[100px] rounded-2xl text-primary flex justify-center items-center">
            
           
            <div id="services" className="w-full min-h-screen bg-secondary flex items-center flex-col rounded-2xl relative pb-10 md:pb-0">
              
               
                <div className="absolute -top-[34px] w-[200px] h-[35px] text-white flex items-center justify-center">
                    <svg
                        viewBox="0 0 200 50"
                        className="absolute top-0 left-0 w-full h-full fill-secondary"
                        preserveAspectRatio="none"
                    >
                        <path d="M 100 0 C 130 0, 150 50, 200 50 L 0 50 C 50 50, 70 0, 100 0 Z" />
                    </svg>
                    
                    <div className="absolute top-2 w-full h-full flex justify-center items-center">
                        <ScrollButton targetId="services" />
                    </div>
                </div>

               
                <div className="w-full max-w-6xl mt-20 flex justify-center items-center flex-col mx-auto px-4 py-8 md:py-12 text-center">
                    <h1 className="text-2xl md:text-xl font-medium tracking-wide text-primary leading-tight max-w-4xl select-none">
                        Have a machine to build or a product to bring to life?
                        <br className="hidden md:inline" />
                        I have the engineering expertise to take your project
                        <br className="hidden md:inline" />
                        from idea to production-ready design.
                    </h1>
                </div>

               
                <Link to="/projects" className="px-6 py-3 border border-solid border-black/20 rounded-full">
                  <AnimatedButton text="View Projects" className="text-primary uppercase" />
                </Link>

               
                <div className="w-full flex flex-col justify-center items-center mt-[40px] md:mt-[70px] relative overflow-hidden px-4">
                    <div className="w-full flex justify-center items-center mt-[40px] md:mt-[100px]">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }} 
                            viewport={{ once: true, amount: 0 }} 
                            transition={{
                                duration: 1.2,
                                ease: [0.76, 0, 0.24, 1], 
                                delay: 0.2, 
                            }}
                            className="block text-4xl sm:text-6xl md:text-[150px] font-semibold uppercase tracking-[0.1em] text-primary leading-none select-none text-center"
                        >
                            MY SERVICES
                        </motion.span> 
                    </div>

                    <div className="hidden md:block w-full h-[180px] bg-secondary absolute -bottom-[150px]"></div>
                </div>

               
                <div className="w-full mt-10 md:mt-0">
                    <ServicesSection />
                </div>
                
            <ReviewSlider/>
        
            </div>
            
        </div>
    );
}