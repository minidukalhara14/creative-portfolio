import { FaArrowDown } from "react-icons/fa";
import ScrollButton from "./ScrollButton";
import AnimatedButton from "./AnimatedButton";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../../sanityClient";
import { IoMdStar } from "react-icons/io";
import IsharaProfile from "../../assets/IsharaProfile.jpg";

export default function AboutMeCard() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "experience"]{
      _id,
      experienceTitle,
      experienceDescription,
      experienceTimeframe
    }`;

    client
      .fetch(query)
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetching error in experiences:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white text-center">Loading Journey...</div>;

  return (
    
    <div className="w-full md:w-[calc(100vw-70px)] lg:mt-0 mt-10 rounded-2xl text-primary flex justify-center items-center relative px-4 md:px-0">
        
        
        <div id="intro" className="w-full min-h-screen -mt-[10px]  bg-secondary flex items-center flex-col rounded-2xl relative pb-20">
          
          
          <div className="absolute -top-[34px]   md:right-[100px] w-[150px] md:w-[200px] h-[35px] text-white flex items-center justify-center">
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

          
          <div className="w-full max-w-[90%] md:w-[700px] h-auto md:h-[200px] flex flex-col mt-[80px] md:mt-[50px] items-center justify-center px-4">
             <span className="text-lg md:text-xl text-center leading-relaxed">
                I have worked with clients across the US, EU, and Asia
                <br className="hidden md:inline" />
                to deliver precision-engineered designs that go straight
                <br className="hidden md:inline" />
                to manufacturing — no rework, no guesswork.
              </span>
          </div>

          <div className="p-4 mt-[20px] md:mt-[10px] h-[10px] border border-gray-300 rounded-full flex justify-center items-center">
            <Link to="/about">
              <AnimatedButton text="Download CV" />
            </Link>
          </div>

         
        <div className="w-full flex justify-center items-center mt-[60px] md:mt-[100px] px-4 relative overflow-hidden">
  <motion.span
    initial={{ y: "100%", opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0 }}
    transition={{
      duration: 1.2,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    }}
    className="relative z-10 block font-display text-4xl sm:text-6xl md:text-[150px] font-semibold uppercase tracking-[-0.03em] text-primary leading-[0.9] select-none text-center"
  >
    My Story
  </motion.span>

  {/* Bottom mask */}
  <div className="absolute bottom-0 z-20 w-full md:w-[calc(100vw-70px)] h-[35px] bg-secondary"></div>
</div>

         
        
          
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-10 sm:py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-20 items-center">

    {/* Image Section */}
    <div className="group w-full max-w-[380px] md:max-w-[420px] aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-800 shadow-xl mx-auto">
      <img
        src={IsharaProfile}
        alt="My Story Graphic"
        className="w-full h-full object-cover object-center md:object-[50%_20%] grayscale transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-[1.03] active:grayscale-0"
      />
    </div>

    {/* Information Section */}
    <div className="flex flex-col justify-center text-left">
      <span className="label text-xs text-zinc-500 mb-4 block">
        Who I Am
      </span>

      <h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-[-0.02em] text-black mb-6 leading-[1.15]">
        ENGINEERED FOR PRECISION, BUILT FOR RESULTS
      </h3>

      <div className="space-y-4 text-zinc-400 text-sm md:text-lg leading-7 font-normal">
        <p>
          I'm Ishara Deshapriya — a mechanical engineer and full-time freelance
          designer based in Sri Lanka, specializing in industrial machine design
          and consumer product development using SolidWorks. My approach is
          straightforward: understand the engineering problem first, then design
          the cleanest, most manufacturable solution possible. Every model I
          deliver is production-ready — complete drawings, accurate tolerances,
          zero ambiguity for your manufacturing team.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 pt-6 border-t border-zinc-800/50 grid grid-cols-3 gap-4 sm:gap-6">
        <div>
          <h5 className="text-xl md:text-2xl font-semibold text-black">
            10+
          </h5>
          <p className="label text-[10px] md:text-xs text-zinc-500 mt-1">
            Years Experience
          </p>
        </div>

        <div>
          <h5 className="text-xl md:text-2xl font-semibold text-black">
            100+
          </h5>
          <p className="label text-[10px] md:text-xs text-zinc-500 mt-1">
            Projects Delivered
          </p>
        </div>

        <div>
          <h5 className="text-xl md:text-2xl font-semibold text-black inline-flex items-center gap-1">
            4.9 <IoMdStar />
          </h5>
          <p className="label text-[10px] md:text-xs text-zinc-500 mt-1">
            Client Ratings
          </p>
        </div>
      </div>
    </div>

  </div>
</div>
         
          <span className="label text-sm lg:text-lg text-primary sticky top-0 bg-transparent pb-4 z-10 block text-center w-full px-4">
            My Journey & Experience
          </span>
            
        
          <div className="w-full h-[400px] mt-5 pt-10 border-t border-zinc-800/50 flex flex-col items-center gap-6 overflow-y-auto scrollbar-none snap-y snap-mandatory pb-6">
            <div className="w-full max-w-2xl px-4 flex flex-col gap-6">
              {experiences && experiences.length > 0 ? (
                experiences.map((exp) => (
                  <div 
                    key={exp._id} 
                    className="w-full min-h-[250px] bg-zinc-900/40 border border-zinc-800/50 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/55 hover:-translate-y-0.5 transition-all duration-300 group snap-center shadow-xl"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="label text-[10px] md:text-xs text-zinc-400 bg-zinc-800/60 px-3 py-1 rounded-full">
                          {exp.experienceTimeframe || "Present"}
                        </span>
                      </div>

                      <h4 className="text-lg md:text-xl font-medium tracking-[-0.015em] text-black uppercase group-hover:text-white transition-colors duration-300">
                        {exp.experienceTitle}
                      </h4>
                    </div>

                    <p className="text-xs md:text-sm text-black font-normal leading-6 mt-4 line-clamp-4 group-hover:text-zinc-300 transition-colors duration-300">
                      {exp.experienceDescription}
                    </p>
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-10 text-zinc-500 label text-sm">
                  No Experience Records Found.
                </div>
              )}
            </div>

            {experiences && experiences.length > 1 && (
              <span className="label text-[10px] text-zinc-600 animate-pulse mt-2 block text-center w-full">
                ↓ Scroll Down to View More Journey ↓
              </span>
            )}
          </div>
              
        </div>
    </div>
  );
}