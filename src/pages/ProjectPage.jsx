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
    <div className="w-full h-screen   relative flex justify-center items-center flex-col overflow-hidden">
     

        <div className="w-full h-[80px]   flex justify-center  absolute top-0">
            <Navibar />
        </div>


         <div className=" w-full h-[calc(100vh-105px)] p-10 flex flex-col  items-center relative">
                          
          <AnimatedText text="Projects  " />

          </div>

          <div className="w-[400px] h-[200px] flex items-center  flex-col absolute bottom-0 left-0">
              <span className="text-xl mt-5 font-medium tracking-wider text-secondary">
                As a designer, I help companies <br /> to achieve their desired goals.
                </span>

               <div className="p-4 mt-10 h-[10px] border border-gray-300 uppercase rounded-full cursor-pointer rotate-0 opacity-100 bg-transparent flex justify-center items-center ">
                                 <Link to="/contact" realoadDocument >
                                   <AnimatedButton text="Schedule a call" className="text-white text-lg uppercase"  />
                                 </Link>
                               </div>
          </div>
  
          <div className="fixed top-[80px] right-10 h-[calc(100vh-80px)] w-[600px] bg-secondary border-r border-zinc-800 z-40 flex flex-col justify-between p-6 rounded-2xl">
            
            
            <div className=" mb-6">
              <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500">All Projects</h2>
            </div>

            
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-zinc-800">
              
              
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