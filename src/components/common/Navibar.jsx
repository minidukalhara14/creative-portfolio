import { useState } from "react";
import { Link } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

export default function Navibar() {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="w-[90%] md:w-[calc(100%-96px)] h-[80px] rotate-0 opacity-100 flex justify-between items-center relative z-[999]">
        
       
        <div className="w-[91.28px] h-[24px]">
            <Link to="/" reloadDocument className="font-sans text-[16px] leading-[24px] tracking-normal uppercase align-middle text-white">
              Portfolio
            </Link>
        </div>

      
        <nav className="hidden md:flex gap-[32px]">
            <div className="p-4 h-[10px] cursor-pointer border border-solid border-slate-700 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center">
                <Link to="/about">
                  <AnimatedButton text="ABOUT" className="font-sans text-[12px] text-secondary leading-[24px] tracking-normal uppercase align-middle" />
                </Link>
            </div>
            <div className="p-4 h-[10px] cursor-pointer border border-solid border-slate-700 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center">
                <Link to="/projects">
                  <AnimatedButton text="WORK" className="font-sans text-[12px] text-secondary leading-[24px] tracking-normal uppercase align-middle" />
                </Link>
            </div>
            <div className="p-4 h-[10px] cursor-pointer border border-solid border-slate-700 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center">
                <Link to="/contact" reloadDocument>
                  <AnimatedButton text="CONTACT" className="font-sans text-[12px] text-secondary leading-[24px] tracking-normal uppercase align-middle" />
                </Link>
            </div>
        </nav>

      
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none flex flex-col justify-center items-center gap-[6px] w-[30px] h-[30px] cursor-pointer"
        >
          
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>

        
        {isOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-black/95 border border-slate-800 rounded-2xl p-6 flex flex-col items-center gap-5 md:hidden shadow-2xl backdrop-blur-md">
            <div className="w-full text-center p-3 border border-solid border-slate-700 rounded-full bg-transparent flex justify-center items-center">
                <Link to="/about" onClick={() => setIsOpen(false)} className="w-full">
                  <AnimatedButton text="ABOUT" className="font-sans text-[14px] text-secondary tracking-normal uppercase" />
                </Link>
            </div>
            <div className="w-full text-center p-3 border border-solid border-slate-700 rounded-full bg-transparent flex justify-center items-center">
                <Link to="/projects" onClick={() => setIsOpen(false)} className="w-full">
                  <AnimatedButton text="WORK" className="font-sans text-[14px] text-secondary tracking-normal uppercase" />
                </Link>
            </div>
            <div className="w-full text-center p-3 border border-solid border-slate-700 rounded-full bg-transparent flex justify-center items-center">
                <Link to="/" reloadDocument onClick={() => setIsOpen(false)} className="w-full">
                  <AnimatedButton text="CONTACT" className="font-sans text-[14px] text-secondary tracking-normal uppercase" />
                </Link>
            </div>
          </div>
        )}
            
    </div>
  );
}