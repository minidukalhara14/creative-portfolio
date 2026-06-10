import { useEffect, useState } from "react";
import ProjectCard from "../components/common/ProjectCard";
import { client } from "../sanityClient";
import Navibar from "../components/common/Navibar";
import AnimatedText from "../components/common/AnimatedText";
import AnimatedButton from "../components/common/AnimatedButton";
import { Link } from "react-router-dom";

export default function ProjectPage() {
    
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "project"]{ _id, title, projectType, images, projectUrl }`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);
    
  return (
   
    <div className="w-full h-auto min-h-screen md:h-screen relative flex justify-start md:justify-center items-center flex-col md:overflow-hidden bg-black text-white">
      
       
        <div className="w-full h-[80px] flex justify-center absolute top-0 z-[999]">
            <Navibar />
        </div>

        
        <div className="w-full h-auto md:h-[calc(100vh-105px)]  md:p-[20px] flex flex-col items-center relative mt-[90px] md:mt-0">
          <AnimatedText text="Projects  " />
        </div>

       
        <div className="w-full md:w-[400px] h-auto md:h-[200px] flex items-center flex-col relative md:absolute md:bottom-0 md:left-0 px-6 mt-6 md:mt-0">
            <span className="text-lg md:text-xl font-medium tracking-wider text-center md:text-left text-white md:text-secondary">
              As a designer, I help companies <br className="hidden md:block" /> to achieve their desired goals.
            </span>

             <div className="p-4 mt-6 md:mt-10 h-[10px] border border-gray-300 uppercase rounded-full cursor-pointer flex justify-center items-center">
                 <Link to="/contact" reloadDocument>
                   <AnimatedButton text="Schedule a call" className="text-white text-base md:text-lg uppercase"  />
                 </Link>
             </div>
        </div>

       
        <div className="w-[calc(100%-30px)] mb-[20px] md:w-[600px] h-auto md:h-[calc(100vh-80px)] relative md:fixed md:top-[80px] md:right-10 bg-secondary border-t md:border-t-0 md:border-r border-zinc-800 z-30 md:z-40 flex flex-col justify-between p-6 rounded-2xl mt-12 md:mt-0">
          
          <div className="mb-4 md:mb-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">All Projects</h2>
          </div>

        
          <div className="flex-1 md:overflow-y-auto md:pr-2 p-1 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800">
            <div className="grid grid-cols-1 gap-6 pb-10">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
          </div>

        </div>

    </div>
  );
}