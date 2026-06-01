import React from 'react';
import { Link } from 'react-router-dom';
import { urlFor } from '../../sanityClient';


export default function ProjectCard({ project }) {
  
  const { title, projectType, image, _id } = project;

  return (
    <Link 
      // සාමාන්‍යයෙන් detail page එකට යන්න project id එක හෝ slug එක පාවිච්චි කරන්න පුළුවන්
      to={`/projects/${_id}`}  
      className="group relative block w-full overflow-hidden bg-green-50036 rounded-lg cursor-pointer"
    >
      
      {/* 1. Sanity Image එක */}
      <div className="w-full h-[350px] overflow-hidden  rounded-lg">
        {image ? (
          <img 
            // .url() එකෙන් තමයි sanity image එක සාමාන්‍ය web link එකක් බවට පත් කරන්නේ
            src={urlFor(image).url()} 
            alt={title}
            className="w-full h-[350px] object-cover"
          />
        ) : (
          // ජායාරූපයක් නැති වුණොත් පේන්න placeholder එකක්
          <div className="w-full h-[350px] bg-gray-300 flex items-center justify-center text-zinc-500">
            No Image Provided
          </div>
        )}
      </div>

     

      {/* 3. Content Area */}
    
         <div className="flex flex-col justify-center items-center p-4">
          <h3 className="text-xl  font-sans font-medium tracking-wider text-primary uppercase mt-4 ">
            {title}
          </h3>
       
       
          <span className="text-xs font-mono uppercase  text-zinc-400">
            {projectType || 'Web Development'} 
          </span>
        

        {/* පහළ කොටස - Project Title & Arrow */}
       
          
         
          
        </div>

      
    </Link>
  );
}