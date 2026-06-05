export default function AnimatedButton({ text, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center text-black cursor-pointer overflow-hidden group transition-all duration-300 hover:bg-transparent ${className}`}
    >
     
      <span className="relative inline-block h-4 overflow-hidden leading-4 text-xs font-medium">
        
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
          {text}
        </span>
        
        <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
          {text}
        </span>
        
      </span>
    </div>
  );
}