import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function HeroPhoto() {
  // 1. Mouse coordinates ගන්න values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Mouse move event එක
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // මැද ඉඳන් තියෙන දුර (-0.5 සිට 0.5 දක්වා)
    mouseX.set((clientX / width) - 0.5);
    mouseY.set((clientY / height) - 0.5);
  };

  // 🔥🔥🔥 මවුස් එක එළියට ගියාම හැමදේම ආපහු මැදට ගන්න Function එක 🔥🔥🔥
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // 2. Mouse effect එක smooth කරන්න spring පාවිච්චි කිරීම
  const smoothMouseX = useSpring(mouseX, { stiffness: 90, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 90, damping: 25 });

  // 3. 3D Rotation
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [20, -20]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);

  const rotateZ = useTransform(smoothMouseX, [-0.5, 0.5], [-13, 13]);
  // 4. වමට/දකුණට පාවීම (X axis)
  const moveX = useTransform(smoothMouseX, [-0.5, 0.5], [-100, 100]);

  // 5. Arc Movement එක (දෙපැත්තට යද්දී පල්ලෙහාට බර වන ලොජික් එක)
  const moveY = useTransform([smoothMouseX, smoothMouseY], ([xVal, yVal]) => {
    // (A) Y-Axis මවුස් මූව්මන්ට් සීමාව
    let baseFormY = 10;
    if (yVal >= -0.2) {
      const progressY = (yVal - (-0.2)) / (0.5 - (-0.2));
      baseFormY = 10 + (progressY * 90); 
    }

    // (B) Arc Effect
    const arcDrop = Math.pow(xVal, 2) * 50; 

    return baseFormY + arcDrop;
  });

  return (
    // 🟥 මේ පිටතම තියෙන Div එක (Wrapper) තමයි ඔයාගේ Hero Section එකේ Div එක ඇතුළට වාඩි වෙන්නේ.
    // මේකට `w-full h-full` දීලා තියෙන්නේ parent div එකේ ප්‍රමාණය ගන්නයි.
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave} // 🔥 මෙන්න මෙතනින් මවුස් එක එළියට ගිය සැනින් Reset වෙනවා
      className="absolute top-0 flex w-full h-full justify-center [perspective:1200px]"
    >
      
      {/* ─── WRAPPER DIV: LOADING ANIMATION ─── */}
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

        {/* ─── INNER CARD DIV: MOUSE MOVE EFFECT ─── */}
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
          
          {/* Main Hero Image */}
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