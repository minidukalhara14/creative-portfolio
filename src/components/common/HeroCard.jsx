import { FaArrowDown } from "react-icons/fa";
import ScrollButton from "./ScrollButton";




export default function HeroCard() {

    
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };


    return (
        <div className="w-[calc(100vw-70px)] h-screen bg-secondary text-primary flex justify-center items-center relative ">
            
            <div className="w-full h-[calc(100%+45px)] absolute -top-[15px] bg-secondary flex justify-center items-center flex-col rounded-2xl relative">
              
              <div className="absolute -top-[35px] w-[200px] h-[35px] text-white flex items-center justify-center ">
      
                <svg
                    viewBox="0 0 200 50"
                    className="absolute top-0 left-0 w-full h-full fill-secondary"
                    preserveAspectRatio="none"
                >
                    <path d="M 100 0 C 130 0, 150 50, 200 50 L 0 50 C 50 50, 70 0, 100 0 Z" />
                </svg>
                <div className="absolute top-2 w-full h-full flex justify-center items-center">
                    <ScrollButton />

                </div>
                
                </div>

            </div>
        </div>
    );
}