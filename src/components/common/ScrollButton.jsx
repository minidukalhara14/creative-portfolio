import { FaArrowDown } from "react-icons/fa";
import { animate } from "framer-motion"; 

export default function ScrollButton({ targetId }) {

  const handleScroll = () => {
    const element = document.getElementById(targetId);
    
    if (element) {
      
      const startPosition = window.scrollY;
      
      
      const targetPosition = element.getBoundingClientRect().top + window.scrollY;

      
      animate(startPosition, targetPosition, {
        type: "tween",
        duration: 1.8, 
        ease: [0.76, 0, 0.24, 1], 
        onUpdate: (latest) => {
          window.scrollTo(0, latest); 
        },
        onComplete: () => {
          
          window.history.pushState(null, null, `#${targetId}`);
        }
      });
    }
  };

  return (
    <div className="flex justify-center items-center my-6">
      <button 
        className="group flex flex-col justify-center items-center w-[30px] h-[30px] border-2 border-gray-200 rounded-full overflow-hidden relative cursor-pointer bg-transparent transition-colors duration-300 hover:bg-gray-100"
        onClick={handleScroll}
      >
        <span className="text-[8px] text-zinc-900 inline-block transition-all duration-500 ease-in-out transform group-hover:translate-y-8 group-hover:opacity-0">
          <FaArrowDown />
        </span>
        
        <span className="text-[8px] text-zinc-900 inline-block absolute -translate-y-8 opacity-0 transition-all duration-500 ease-in-out transform group-hover:translate-y-0 group-hover:opacity-100">
          <FaArrowDown />
        </span>
      </button>
    </div>
  );
}