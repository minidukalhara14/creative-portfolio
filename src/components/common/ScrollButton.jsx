import { FaArrowDown } from "react-icons/fa";


// Arrow function එක වෙනුවට සාමාන්‍ය Function එකක් විදිහට ලියලා තියෙනවා
export default function ScrollButton() {

 const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
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