import { useEffect, useState } from "react";
import ProjectCard from "../components/common/ProjectCard";
import { client } from "../sanityClient";

export default function ProjectPage() {
    
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    
    client
      .fetch(`*[_type == "project"]{ _id, title, projectType, image }`)
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);
    
    return (
            <div className="w-[600px] h-screen  text-primary relative flex justify-center items-center flex-col">
                <div className="relative h-screen bg-secondary text-primary  flex justify-center items-start pt-20">
  
  
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

            </div>   
     );
}