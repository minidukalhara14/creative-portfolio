import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

export default function Navibar() {
  
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuItems = [
    { to: "/about", label: "ABOUT", reloadDocument: false },
    { to: "/projects", label: "WORK", reloadDocument: false },
    { to: "/contact", label: "CONTACT", reloadDocument: true },
    { to: "/", label: "CLONE ME", reloadDocument: false },
  ];

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

        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scaleY: 0.98 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0, y: -12, scaleY: 0.98 }}
              transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
              className="absolute top-[80px] left-0 w-full origin-top overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl md:hidden"
            >
              <div className="flex flex-col divide-y divide-black/10">
                {mobileMenuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    reloadDocument={item.reloadDocument}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-5 py-5 text-black hover:bg-black/[0.03] transition-colors duration-200"
                  >
                    <span className="text-base font-semibold uppercase tracking-[0.18em] text-black">
                      {item.label}
                    </span>
                    <ChevronRight className="h-4 w-4 text-black/60" strokeWidth={2.25} />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
            
    </div>
  );
}