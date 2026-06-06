import { FaArrowDown } from "react-icons/fa";
import ScrollButton from "./ScrollButton";
import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../../sanityClient";





export default function AboutMeCard() {

    const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2. ඔයා ලියපු GROQ Query එක
    const query = `*[_type == "experience"]{
      _id,
      experienceTitle,
      experienceDescription,
      experienceTimeframe
    }`;

    // 3. සැනිටි එකෙන් Data Fetch කරන කොටස
    client
      .fetch(query)
      .then((data) => {
        setExperiences(data); // ආපු Data ටික state එකට දානවා
        setLoading(false);    // Loading එක ඉවරයි කියනවා
      })
      .catch((err) => {
        console.error("Sanity fetching error in experiences:", err);
        setLoading(false);
      });
  }, []); // 💡 හිස් Array එකක් ([]) දැම්මම මේක රන් වෙන්නේ පිටුව Load වෙද්දී එක පාරක් විතරයි.

  // Loading ස්ක්‍රීන් එකක් (Optional)
  if (loading) return <div className="text-white text-center">Loading Journey...</div>;

     return (
        <div className="w-[calc(100vw-70px)]  rounded-2xl  text-primary flex justify-center items-center relative ">
            
            <div id="intro" className="w-full min-h-screen absolute -top-[10px] bg-secondary flex items-center flex-col rounded-2xl relative">
              
              <div className="absolute -top-[35px] right-[100px] w-[200px] h-[35px] text-white flex items-center justify-center ">
      
                <svg
                    viewBox="0 0 200 50"
                    className="absolute top-0 left-0 w-full h-full fill-secondary"
                    preserveAspectRatio="none"
                >
                    <path d="M 100 0 C 130 0, 150 50, 200 50 L 0 50 C 50 50, 70 0, 100 0 Z" />
                </svg>
                <div className="absolute top-2 w-full h-full flex justify-center items-center">
                    <ScrollButton targetId="intro" />

                </div>

                
                

                </div>

                <div className="w-[700px] h-[200px]  flex flex-col mt-[50px] items-center justify-center ">
                   <span className="text-xl text-center">
                    I have worked with businesses of all sizes <br/>
                    to create stunning websites and designs <br/>
                    that capture their brand's identity.
                   </span>
                </div>

                <div className="p-4 mt-[10px] h-[10px] border border-gray-300 rounded-full rotate-0 opacity-100 bg-transparent flex justify-center items-center ">
                  <Link to="/about" >
                    <AnimatedButton text="Download CV" />
                  </Link>
                </div>

                <div className="w-full flex justify-center items-center mt-[100px]">
                    
                    <motion.span
                        
                        initial={{ y: "100%", opacity: 0 }}
                        
                        
                        whileInView={{ y: 0, opacity: 1 }} 
                        
                        
                        viewport={{ once: true, amount: 0 }} 
                        
                        transition={{
                            duration: 1.2,
                            ease: [0.76, 0, 0.24, 1], 
                            delay: 0.2, 
                        }}
                        className="block text-[150px] font-semibold uppercase tracking-[0.15em] text-primary leading-none select-none"
                    >
                        My Story
                    </motion.span>

                </div>

                <div className="w-[calc(100vw-70px)] absolute  bottom-0  h-[35px] bg-secondary rounded-b-2xl   ">

                </div>
                
            <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    
                   
                    <div className="w-full aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-800 shadow-xl">
                    <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=cover" // ඔයාගේ පින්තූරයේ Link එක මෙතනට දාන්න
                        alt="My Story Graphic" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                    </div>

                    
                    <div className="flex flex-col justify-center text-left">
                    
                   
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-400 mb-4 block">
                        Who I Am
                    </span>
                    
                   
                    <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-black mb-6 leading-tight">
                        Driven by Passion, <br /> Defined by Design
                    </h3>
                   
                    <div className="space-y-4 text-zinc-400 font-sans text-base md:text-lg leading-relaxed font-light">
                        <p>
                        I am a multidisciplinary designer and developer focused on creating premium digital 
                        experiences. Over the past few years, I’ve helped startups and established brands 
                        turn complex problems into beautiful, intuitive, and conversion-driven solutions.
                        </p>
                        <p>
                        My approach blends strategy with aesthetics, ensuring that every pixel serves a 
                        purpose. I believe that great design is not just how it looks, but how effectively 
                        it tells a story and connects with people.
                        </p>
                    </div>

                   
                    <div className="mt-8 pt-6 border-t border-zinc-800/50 flex gap-8">
                        <div>
                        <h5 className="text-2xl font-bold text-black font-mono">5+</h5>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years Experience</p>
                        </div>
                        <div>
                        <h5 className="text-2xl font-bold text-black font-mono">50+</h5>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Projects Delivered</p>
                        </div>
                    </div>

                    

                    </div>


                </div>
                </div>
<span className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 sticky top-0 bg-transparent pb-4 z-10">
    My Journey & Experience
  </span>
              
<div className="w-full h-[400px] mt-5 pt-10 border-t border-zinc-800/50 flex flex-col items-center gap-6 overflow-y-auto scrollbar-none snap-y snap-mandatory pb-6">
  
  
  

  <div className="w-full max-w-2xl px-4 flex flex-col gap-6">
    {experiences && experiences.length > 0 ? (
      experiences.map((exp) => (
        <div 
          key={exp._id} 
         
          className="w-full h-[250px] min-h-[250px] bg-zinc-900/40 border border-zinc-800/50 p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 group snap-center shadow-xl"
        >
          
          <div>
            <div className="flex justify-between items-center mb-4">
           
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider bg-zinc-800/60 px-3 py-1 rounded-full">
                {exp.experienceTimeframe || "Present"}
              </span>
            </div>

           
            <h4 className="text-xl font-medium tracking-wide text-black uppercase group-hover:text-white transition-colors duration-300">
              {exp.experienceTitle}
            </h4>
          </div>

         
          <p className="text-sm text-black font-sans font-light leading-relaxed mt-4 line-clamp-4 group-hover:text-zinc-300 transition-colors duration-300">
            {exp.experienceDescription}
          </p>
        </div>
      ))
    ) : (
      
      <div className="w-full text-center py-10 text-zinc-500 font-mono text-sm">
        No Experience Records Found.
      </div>
    )}
  </div>

 
  {experiences && experiences.length > 1 && (
    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 animate-pulse mt-2">
      ↓ Scroll Down to View More Journey ↓
    </span>
  )}

</div>
                
            </div>
        
        </div>
    );
}