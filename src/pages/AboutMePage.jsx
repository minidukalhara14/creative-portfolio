import Navibar from "../components/common/Navibar";
import AnimatedText from "../components/common/AnimatedText";
import AnimatedButton from "../components/common/AnimatedButton";
import { Link } from "react-router-dom";
import HeroPhoto from "../components/common/HeroImage";
import HeroImage from "../components/common/HeroImage";
import AboutMeCard from "../components/common/AboutMeCard";
import Footer from "../components/common/Footer";


export default function AboutMePage() {
   
    
return (
    <div className="w-full min-h-screen relative flex justify-center items-center flex-col ">
     
    <div className="w-full h-screen  flex justify-center items-center flex-col overflow-hidden select-none relative">
        
        <div className="w-full h-[80px]   flex justify-center  absolute top-0">
            <Navibar />
        </div>


         <div className=" w-full h-[calc(100vh-80px)] p-10 flex flex-col  items-center relative">
                          
          <AnimatedText text="About Me  " />
          
            <HeroImage />
            
          </div>

          <div className="w-[400px] h-[200px] flex items-center  flex-col absolute bottom-0 left-0">
              <span className="text-xl mt-5 font-medium tracking-wider text-secondary">
                As a designer, I help companies <br /> to achieve their desired goals.
                </span>

               <div className="p-4 mt-10 h-[10px] border border-gray-300 uppercase rounded-full cursor-pointer rotate-0 opacity-100 bg-transparent flex justify-center items-center ">
                                 <Link to="/projects" realoadDocument >
                                   <AnimatedButton text="View My Projects" className="text-white text-lg uppercase"  />
                                 </Link>
                               </div>
          </div>
        </div>
          <AboutMeCard />
          <Footer />
  
</div>

);
}