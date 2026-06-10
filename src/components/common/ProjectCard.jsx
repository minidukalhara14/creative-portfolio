import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../sanityClient';

export default function ProjectCard({ project }) {
  
  const { title, projectType, images, projectUrl, _id } = project;

  console.log(project);
  return (
    <Link 
      to={`/projects/${_id}`}  
      
      className="group relative block w-full overflow-hidden rounded-lg cursor-pointer transition-all duration-300"
    >
      
     
      <div className="w-full h-[260px] md:h-[350px]  overflow-hidden rounded-lg">
        {images && images.length > 0 ? (
          <img 
            src={urlFor(images[0]).url()} 
            alt={title}
            
            className="w-full h-[260px] md:h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-[260px] md:h-[350px] bg-gray-300 flex items-center justify-center text-zinc-500">
            No Image Provided
          </div>
        )}
      </div>

     
      <div className="flex flex-col justify-center items-center p-3 md:p-4">
        <h3 className="text-lg md:text-xl font-sans font-medium tracking-wider text-primary uppercase mt-2 md:mt-4 text-center">
          {title}
        </h3>
       
        <span className="text-[10px] md:text-xs font-mono uppercase text-zinc-400 mt-1">
          {projectType || 'Web Development'} 
        </span>
      </div>
      
    </Link>
  );
}