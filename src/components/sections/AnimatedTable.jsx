import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import AnimatedButton from "../common/AnimatedButton";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../sanityClient";

export default function AnimatedTable() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "project"]{ _id, title, projectType, description, images, projectUrl }`;
    
    client
      .fetch(query)
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error in table:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-white text-center py-20">Loading Artworks...</div>;
  }

  return (
    <div className="w-full min-h-screen text-white flex flex-col justify-center items-center">
      <div className="w-full max-w-6xl flex justify-center items-center flex-col mx-auto mb-8 md:mb-16 px-6 py-12 text-center">
       
        <h1 className="text-2xl md:text-xl mb-10 md:mb-15 font-medium tracking-tight text-white leading-tight max-w-4xl select-none">
          I work with manufacturers, startups, and product companies worldwide
          <br className="hidden md:inline" />
          to bring complex engineering ideas to life through precision
          <br className="hidden md:inline" />
          SolidWorks design.
        </h1>
        <Link to="/projects" className="px-6 py-3 border border-solid border-white/20 rounded-full">
          <AnimatedButton text="View Projects" className="text-secondary uppercase" />
        </Link>
      </div>

     
      <Link  to={`/projects/${_id}`}  className="w-[90%] md:w-[calc(100vw-70px)] max-w-6xl mx-auto border-t border-white/10">
        {projects.map((row) => (
          <TableRow key={row._id} row={row} />
        ))}
      </Link>
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
  
  const moveX = useTransform(smoothMouseX, [-0.5, 0.5], [-60, 60]);

  const moveY = useTransform([smoothMouseX, smoothMouseY], ([xVal, yVal]) => {
    let baseFormY = 0; 
    if (yVal >= -0.2) {
      const progressY = (yVal - (-0.2)) / (0.5 - (-0.2));
      baseFormY = 0 + (progressY * 40); 
    }
    const arcDrop = Math.pow(xVal, 2) * 30; 
    return baseFormY + arcDrop;
  });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; 
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
      
      className="relative grid grid-cols-1 md:grid-cols-3 items-start md:items-center py-6 md:py-8 border-b border-white/10 cursor-pointer group transition-colors duration-300 hover:bg-white/[0.02] [perspective:1200px] [transform-style:preserve-3d] gap-2 md:gap-0"
    >
      
     
      <div className="pointer-events-none text-left">
        <h2 className="text-3xl md:text-5xl font-medium text-secondary tracking-tight group-hover:translate-x-0 md:group-hover:translate-x-3 transition-transform duration-300 ease-out">
          {row.title}
        </h2>
      </div>

      
      <div className="pointer-events-none flex justify-start md:justify-center py-1 rounded"> 
        <span className="text-sm md:text-lg max-w-xs text-center truncate opacity-60 md:opacity-100">
          <AnimatedButton text={row.projectType || "Development"} className="text-secondary uppercase" /> 
        </span>
      </div>

      
      <div className="pointer-events-none hidden md:block"></div>

      
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
        className="hidden md:block pointer-events-none absolute right-16 top-1/2 z-50 w-[150px] h-[180px] overflow-hidden rounded-xl shadow-2xl border border-white/20 origin-center"
      >
        {row.images && row.images[0] && (
          <img
            src={urlFor(row.images[0]).url()} 
            alt={row.title}
            className="w-full h-full object-cover transform scale-105 select-none"
          />
        )}
      </motion.div>
    </div>
  );
}