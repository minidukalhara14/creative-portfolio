import { Link } from "react-router-dom";
import ScrollButton from "../common/ScrollButton";
import AnimatedButton from "../common/AnimatedButton";
import { motion } from 'framer-motion';
import ServicesSection from "../common/ServicesSection";








export default function Services() {

     return (
        <div className="w-[calc(100vw-70px)] mt-[100px]  rounded-2xl  text-primary flex justify-center items-center ">
            
            <div id="services" className="w-full  min-h-screen   bg-secondary flex items-center flex-col rounded-2xl relative">
              
                  
                  {/*Scroll Button and SVG curve */}

                <div className="absolute -top-[35px] w-[200px] h-[35px]  text-white flex items-center justify-center ">
        
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

                
                <div className="w-full max-w-6xl mt-20  flex justify-center items-center flex-col mx-auto  px-4 py-12 text-center">
                  
                        <h1 className="text-xl   font-medium tracking-wide text-primary leading-tight max-w-4xl select-none">
                           I have worked with businesses of all sizes to<br/>
                            create stunning websites and designs that<br/>
                            capture their brand's identity.
                        </h1>
                         
                    </div>
                    <Link to="/projects" className=" px-6 py-3 border border-solid border-black/20 rounded-full">
                      <AnimatedButton text="View Projects" className="text-primary uppercase" />
                    </Link>

                <div className="w-full flex flex-col justify-center items-center mt-[70px] relative">
                    
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


                   <div className="w-full h-[180px]  bg-secondary absolute -bottom-[150px]">

                   </div>

                </div>

                

                 <ServicesSection />
                

                
            </div>
        
        </div>
    );
}