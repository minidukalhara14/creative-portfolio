import { Link } from 'react-router-dom';
import { urlFor } from '../../sanityClient';

export default function ProjectCard({ project }) {
  
  const { title, projectType, images, _id } = project;
  const imageUrl = images?.[0] ? urlFor(images[0]).url() : null;

  console.log(project);
  return (
    <Link 
      to={`/projects/${_id}`}  
      
      className="group relative block w-full overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      
     
      <div className="w-full aspect-square overflow-hidden rounded-2xl bg-gray-300">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-zinc-500">
            No Image Provided
          </div>
        )}
      </div>

     
      <div className="flex flex-col justify-center items-center p-4 md:p-5">
        <h3 className="text-lg md:text-xl font-medium tracking-[-0.02em] text-primary uppercase mt-3 md:mt-5 text-center transition-colors duration-300 group-hover:text-primary/80">
          {title}
        </h3>
       
        <span className="label text-[10px] md:text-xs text-zinc-400 mt-1.5 transition-colors duration-300 group-hover:text-zinc-500">
          {projectType || 'Web Development'} 
        </span>
      </div>
      
    </Link>
  );
}