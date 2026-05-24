import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function HeroPhoto() {
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

 
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    
    mouseX.set((clientX / width) - 0.5);
    mouseY.set((clientY / height) - 0.5);
  };

  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  
  const smoothMouseX = useSpring(mouseX, { stiffness: 90, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 90, damping: 25 });

  
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);

  const rotateZ = useTransform(smoothMouseX, [-0.5, 0.5], [-13, 13]);
  
  const moveX = useTransform(smoothMouseX, [-0.5, 0.5], [-100, 100]);

 
  const moveY = useTransform([smoothMouseX, smoothMouseY], ([xVal, yVal]) => {
    
    let baseFormY = 10;
    if (yVal >= -0.2) {
      const progressY = (yVal - (-0.2)) / (0.5 - (-0.2));
      baseFormY = 10 + (progressY * 90); 
    }

   
    const arcDrop = Math.pow(xVal, 2) * 50; 

    return baseFormY + arcDrop;
  });

  return (
    
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave} 
      className="absolute top-0 flex w-full h-full justify-center [perspective:1200px]"
    >
      
     
      <motion.div
        initial={{
          y: "100vh",
          rotateX: 45,
          rotateY: 360,
          rotateZ: 20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          duration: 2.5,
          ease: [0.19, 1, 0.22, 1],
        }}
        className="[transform-style:preserve-3d]"
      >

        
        <motion.div
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            rotateZ: rotateZ,
            x: moveX,
            y: moveY, 
            transformStyle: "preserve-3d",
          }}
          className="relative flex h-[330px] w-[250px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#1e1e2f] to-[#111119] shadow-xl"
        >
          
         
          <img
            src="/assets/hero.png"
            alt="Hero Element"
            className="w-[250px] h-[330px] select-none object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
          />

        </motion.div>
      </motion.div>

    </div>
  );
}