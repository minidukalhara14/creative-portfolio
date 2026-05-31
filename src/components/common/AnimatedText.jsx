import { motion } from 'framer-motion';

export default function AnimatedText({text}) {


return (
<div className=" w-full h-full  bg-black py-4 flex whitespace-nowrap">
      
      
      <motion.div
        className="text-white text-[250px]  uppercase tracking-wider flex shrink-0 pr-4"
        animate={{ x: [0, "-100%"] }} 
        transition={{
          ease: "linear",
          duration: 12, 
          repeat: Infinity, 
        }}
      >
        {text}
      </motion.div>

     
      <motion.div
        className="text-white text-[250px]  uppercase tracking-wider flex shrink-0 pr-4"
        animate={{ x: [0, "-100%"] }}
        transition={{
          ease: "linear",
          duration: 12,
          repeat: Infinity,
        }}
      >
        {text}
      </motion.div>
      
    </div>
)

}    