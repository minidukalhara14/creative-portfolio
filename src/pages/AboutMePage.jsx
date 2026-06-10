import Navibar from "../components/common/Navibar";
import AnimatedText from "../components/common/AnimatedText";
import { Link } from "react-router-dom";
import HeroImage from "../components/common/HeroImage";
import AboutMeCard from "../components/common/AboutMeCard";
import Footer from "../components/common/Footer";
import AnimatedButton from "../components/common/AnimatedButton";

export default function AboutMePage() {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center flex-col">
      
     
      <div className="w-full h-auto md:h-screen flex justify-center items-center flex-col overflow-visible md:overflow-hidden select-none relative pb-[250px] md:pb-0">
        
        <div className="w-full h-[80px] flex justify-center absolute top-0">
          <Navibar />
        </div>

        
        <div className="w-full h-auto md:h-[calc(100vh-80px)] pt-24 pb-10  md:p-10 flex flex-col items-center relative">
          <AnimatedText text="About Me  " />
          <HeroImage />
        </div>

        <div className="w-full max-w-[90%] md:w-[400px] h-auto md:h-[200px] flex items-center flex-col absolute bottom-10 md:bottom-0 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 z-50 text-center md:text-left px-4 md:px-0">
          <span className="text-lg md:text-xl mt-5 font-medium tracking-wider text-secondary">
            As a designer, I help companies <br /> to achieve their desired goals.
          </span>

          <div className="p-6 md:p-4 mt-6 md:mt-[20px] h-[10px] border border-gray-300 cursor-pointer rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center">
            <Link to="/about">
              <AnimatedButton text="EXPLORE MY STORY" className="text-secondary" />
            </Link>
          </div>
        </div>

      </div>

      
      <AboutMeCard />
      <Footer />

    </div>
  );
}