import { motion } from 'framer-motion';

export default function AnimatedText({text}) {

  return (
    
    <div className="w-full h-full bg-black py-2 md:py-4 flex whitespace-nowrap overflow-hidden">
          
         
          <motion.div
           
            className="text-white text-6xl sm:text-9xl md:text-[250px] font-bold uppercase tracking-wider flex shrink-0 pr-4"
            animate={{ x: [0, "-100%"] }} 
            transition={{
              ease: "linear",
              duration: 12, 
              repeat: Infinity, 
            }}
          >
            {text}&nbsp;
          </motion.div>

          
          <motion.div
            className="text-white text-6xl sm:text-9xl md:text-[250px] font-bold uppercase tracking-wider flex shrink-0 pr-4"
            animate={{ x: [0, "-100%"] }}
            transition={{
              ease: "linear",
              duration: 12,
              repeat: Infinity,
            }}
          >
            {text}&nbsp;
          </motion.div>
          
    </div>
  );
}