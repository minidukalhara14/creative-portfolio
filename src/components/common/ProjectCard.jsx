import React from 'react';
import { Link } from 'react-router-dom'; // Next.js නම් 'next/link'
import { urlFor } from '../../sanityClient';
 // ඔයා image helper එක හදපු තැනින් import කරගන්න

export default function ProjectCard({ project }) {
  // Sanity එකෙන් එන data ටික destruct කරගන්නවා
  const { title, projectType, image, _id } = project;

  return (
    <Link 
      // සාමාන්‍යයෙන් detail page එකට යන්න project id එක හෝ slug එක පාවිච්චි කරන්න පුළුවන්
      to={`/projects/${_id}`}  
      className="group relative block w-full max-w-[450px] aspect-[3/4] overflow-hidden bg-zinc-900 rounded-sm cursor-pointer"
    >
      
      {/* 1. Sanity Image එක */}
      <div className="w-full h-full overflow-hidden">
        {image ? (
          <img 
            // .url() එකෙන් තමයි sanity image එක සාමාන්‍ය web link එකක් බවට පත් කරන්නේ
            src={urlFor(image).url()} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:blur-[1px] opacity-80 group-hover:opacity-60"
          />
        ) : (
          // ජායාරූපයක් නැති වුණොත් පේන්න placeholder එකක්
          <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-500">
            No Image Provided
          </div>
        )}
      </div>

      {/* 2. Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40 transition-opacity duration-500" />

      {/* 3. Content Area */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
        
        {/* ඉහළ කොටස - Project Type / Short Description */}
        <div className="transform translate-y-2 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
            {projectType || 'Web Development'} 
          </span>
        </div>

        {/* පහළ කොටස - Project Title & Arrow */}
        <div className="space-y-3">
          <h3 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-white uppercase break-words">
            {title}
          </h3>
          
          {/* Arrow Animation */}
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>

      </div>
    </Link>
  );
}