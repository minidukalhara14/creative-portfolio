export default function AnimatedButton({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full font-medium overflow-hidden border border-black group transition-all duration-300 hover:bg-transparent hover:text-black ${className}"
    >
      
      <span className="relative inline-block h-5 overflow-hidden leading-5 font-semibold">
        
        
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
          {text}
        </span>
        
        
        <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
          {text}
        </span>
        
      </span>
    </button>
  );
}