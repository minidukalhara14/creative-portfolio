import { Link } from "react-router-dom";
import ScrollButton from "../common/ScrollButton";
import AnimatedButton from "../common/AnimatedButton";
import { motion } from 'framer-motion';
import ServicesSection from "../common/ServicesSection";
import ReviewSlider from "../common/ReviewSlider";
import { useState } from "react";


export default function Services() {
    const [activeFaqIndex, setActiveFaqIndex] = useState(null);

    const faqs = [
        {
            question: "What types of projects do you take on?",
            answer: "I work on mechanical engineering, product development, machine design, and production-ready concepts that need a practical path from idea to execution.",
        },
        {
            question: "How do you handle project timelines?",
            answer: "Each project is scoped based on complexity, deliverables, and revision cycles so the process stays predictable and aligned with the final goal.",
        },
        {
            question: "Can you support both concept and final design stages?",
            answer: "Yes. I can help at the early concept stage, refine the design, and prepare it for manufacturing or production-ready handoff.",
        },
    ];

    const toggleFaq = (index) => {
        setActiveFaqIndex((currentIndex) => (currentIndex === index ? null : index));
    };

     return (
       
        <div className="w-full px-4 md:px-0 md:w-[calc(100vw-70px)] mt-[100px] rounded-2xl text-primary flex justify-center items-center">
            
           
            <div id="services" className="w-full min-h-screen bg-secondary flex items-center flex-col rounded-2xl relative pb-16 md:pb-20">
              
               
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

               
                <div className="w-full max-w-6xl mt-16 sm:mt-20 flex justify-center items-center flex-col mx-auto px-4 py-8 md:py-12 text-center">
                    <h1 className="text-2xl md:text-xl font-medium tracking-[-0.02em] text-primary leading-[1.45] max-w-[18ch] sm:max-w-4xl select-none mx-auto">
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

               
                <div className="w-full flex flex-col justify-center items-center mt-[28px] sm:mt-[40px] md:mt-[70px] relative overflow-hidden px-4">
                    <div className="w-full flex justify-center items-center mt-[34px] sm:mt-[40px] md:mt-[100px]">
                        <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }} 
                            viewport={{ once: true, amount: 0 }} 
                            transition={{
                                duration: 1.2,
                                ease: [0.76, 0, 0.24, 1], 
                                delay: 0.2, 
                            }}
                            className="block font-display text-4xl sm:text-6xl md:text-[150px] font-semibold uppercase tracking-[-0.03em] text-primary leading-[0.9] select-none text-center max-w-[11ch] sm:max-w-none mx-auto"
                        >
                            MY SERVICES
                        </motion.span> 
                    </div>

                    <div className="hidden md:block w-full h-[180px] bg-secondary absolute -bottom-[150px]"></div>
                </div>

               
                <div className="w-full mt-10 md:mt-0">
                    <ServicesSection />
                </div>

                <div className="w-full mt-12 md:mt-16 flex flex-col gap-8 md:gap-10">
                    <ReviewSlider />

                   <div className="w-full flex flex-col justify-center items-center mt-[10px] overflow-hidden px-0 md:px-4"> 
                       
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 md:gap-4 mb-2 md:mb-0">
                            <motion.span
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }} 
                            viewport={{ once: true, amount: 0 }} 
                            transition={{
                                duration: 1.2,
                                ease: [0.76, 0, 0.24, 1], 
                                delay: 0.2, 
                            }}
                             className="block font-display text-[40px] sm:text-[80px] md:text-[150px] font-semibold uppercase tracking-[-0.03em] text-primary leading-[0.9] select-none text-center max-w-[10ch] sm:max-w-none mx-auto"
                        >
                            Questions
                        </motion.span> 
                            
                        </div>
                        <div className="w-full max-w-4xl mx-auto px-0 md:px-0 text-center mt-1 sm:mt-2">
                            
                            <span className="label text-xs md:text-sm text-primary/30 select-none">
                                    FAQ
                                </span>

                            <div className="mt-5 sm:mt-6 rounded-2xl bg-white shadow-2xl overflow-hidden border border-black/5">
                                {faqs.map((faq, index) => {
                                    const isOpen = activeFaqIndex === index;
                                    const number = String(index + 1).padStart(3, "0");

                                    return (
                                        <div
                                            key={faq.question}
                                            className="border-b border-black/10 last:border-b-0"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleFaq(index)}
                                                className="w-full flex items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left cursor-pointer"
                                            >
                                                <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
                                                    <span className="label text-xs md:text-sm text-black/35 select-none shrink-0">
                                                        {number}
                                                    </span>
                                                    <span className="text-base sm:text-lg md:text-xl font-medium text-black leading-[1.35] select-none max-w-[22ch] sm:max-w-none">
                                                        {faq.question}
                                                    </span>
                                                </div>

                                                <motion.span
                                                    animate={{ rotate: isOpen ? 45 : 0 }}
                                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                                    className="relative flex h-5 w-5 shrink-0 items-center justify-center text-black"
                                                    aria-hidden="true"
                                                >
                                                    <span className="absolute h-px w-4 bg-current" />
                                                    <span className="absolute h-4 w-px bg-current" />
                                                </motion.span>
                                            </button>

                                            <motion.div
                                                initial={false}
                                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                                                    <div className="rounded-xl md:rounded-2xl bg-zinc-950 border border-white/5 px-4 sm:px-5 md:px-6 py-4 md:py-5 text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                                                        <p className="text-sm sm:text-base md:text-lg leading-7 text-white/90 max-w-3xl">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>
            
        </div>
    );
}