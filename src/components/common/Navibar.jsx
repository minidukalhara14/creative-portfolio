import { Link } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

export default function Navibar() {
    return (
        <div className=" w-[calc(100%-96px)] h-[80px]   rotate-0 opacity-100  flex justify-between items-center ">
           
            <div className="w-[91.28px] h-[24px]">
               
                <Link to="/" className="font-sans text-[16px] leading-[24px] tracking-normal uppercase align-middle">Portfolio</Link>
            
            </div>

            
 
                <nav className="flex gap-[32px]  ">
                    <div class="p-4 h-[10px] border border-solid border-slate-700 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center ">
                        <Link to="/about" ><AnimatedButton text="ABOUT" className="font-sans  text-[12px] text-secondary leading-[24px] tracking-normal uppercase align-middle" /></Link>
                    </div>
                    <div class="p-4 h-[10px] border border-solid border-slate-700 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center ">
                        <Link to="/projects" ><AnimatedButton text="WORK" className="font-sans  text-[12px] text-secondary leading-[24px] tracking-normal uppercase align-middle"  /></Link>
                    </div>
                    <div class="p-4 h-[10px] border border-solid border-slate-700 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center ">
                        <Link to="/contact" ><AnimatedButton text="CONTACT" className="font-sans  text-[12px] text-secondary leading-[24px] tracking-normal uppercase align-middle" /></Link>
                    </div>
                </nav>
                    
            
        </div>
    );
}