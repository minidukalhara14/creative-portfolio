import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import AnimatedButton from "../common/AnimatedButton";
import { Link } from "react-router-dom";

export default function AnimatedTable() {
  const tableData = [
    {  name: "Airtable", type: "Graphic design", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" },
    {  name: "Delta Airlines", type: "Branding", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop" },
    {  name: "Webflow", type: "Development", img: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=400&auto=format&fit=crop" },
    {  name: "Airtable", type: "Graphic design", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop" },
    {  name: "Delta Airlines", type: "Branding", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop" },
    {  name: "Webflow", type: "Development", img: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=400&auto=format&fit=crop" },
  ];

  return (
    <div className="w-full min-h-screen text-white flex flex-col justify-center items-center ">
      <div className="w-full max-w-6xl  flex justify-center items-center flex-col mx-auto mb-16 px-4 py-12 text-center">
  
        <h1 className="text-xl mb-15  font-medium tracking-tight text-white leading-tight max-w-4xl select-none">
           I have worked with businesses of all sizes to<br/>
            create stunning websites and designs that<br/>
            capture their brand's identity.
        </h1>
         <Link to="/projects" className=" px-6 py-3 border border-solid border-white/20 rounded-full">
      <AnimatedButton text="View Projects" className="text-secondary uppercase" />
    </Link>
    </div>
   

      <div className="w-[calc(100vw-70px)] max-w-6xl mx-auto  border-t border-white/10">
        {tableData.map((row) => (
          <TableRow key={row.id} row={row} />
        ))}
      </div>
    </div>
  );
}

function TableRow({ row }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  
  const springConfig = { stiffness: 90, damping: 25 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const rotateZ = useTransform(smoothMouseX, [-0.5, 0.5], [-13, 13]);
  
  
  const moveX = useTransform(smoothMouseX, [-0.5, 0.5], [-60, 60]); // දකුණු පැත්තේ සීමාව ඇතුළෙ සෙල්ලම් කරන්න දුර -60 සිට 60 දක්වා අඩු කරා

  const moveY = useTransform([smoothMouseX, smoothMouseY], ([xVal, yVal]) => {
   
    let baseFormY = 0; ateY: "-50%" 
    if (yVal >= -0.2) {
      const progressY = (yVal - (-0.2)) / (0.5 - (-0.2));
      baseFormY = 0 + (progressY * 40); 
    }
    const arcDrop = Math.pow(xVal, 2) * 30; 
    return baseFormY + arcDrop;
  });

 
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
   
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
   <div
  ref={ref}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={handleMouseLeave}
  onMouseMove={handleMouseMove}
  
  className="relative grid grid-cols-3 items-center py-8 border-b border-white/10 cursor-pointer group transition-colors duration-300 hover:bg-white/[0.02] [perspective:1200px] [transform-style:preserve-3d]"
>
  
  
  <div className="pointer-events-none text-left">
    <h2 className="text-5xl font-medium text-secondary tracking-tight group-hover:translate-x-3 transition-transform duration-300 ease-out">
      {row.name}
    </h2>
  </div>

  
  
  <div className="pointer-events-none flex justify-center  py-1 rounded"> 
   
   
    <span className="text-lg ">
      <AnimatedButton text={row.type} className="text-secondary uppercase" /> 
    </span>
  </div>

  
  
  <div className="pointer-events-none"></div>

  
  
  <motion.div
    style={{
      rotateX: rotateX,
      rotateY: rotateY,
      rotateZ: rotateZ,
      x: moveX,
      y: moveY, 
      translateY: "-50%",
      transformStyle: "preserve-3d",
    }}
    animate={{
      scale: isHovered ? 1 : 0,
      opacity: isHovered ? 1 : 0,
    }}
    transition={{
      type: "spring",
      stiffness: 200,
      damping: 20,
    }}
    
    
    className="pointer-events-none absolute right-16 top-1/2 z-50 w-[150px] h-[180px] overflow-hidden rounded-xl shadow-2xl border border-white/20 origin-center"
  >
    <img
      src={row.img}
      alt={row.name}
      className="w-full h-full object-cover transform scale-105 select-none"
    />
  </motion.div>

</div>
  );
}