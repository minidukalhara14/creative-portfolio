import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa"; 
import AnimatedButton from "./AnimatedButton"; 
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-white pt-24 pb-12 px-8 border-t border-white/5 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-between h-full">
        
       
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24 select-none">
          <h2 className="text-xl  font-medium tracking-wide leading-tight mb-10 text-secondary">
            Have a machine to build or a product to bring to life?<br />
            Let's talk about your project.
            </h2>
          
          
          <Link
            to="/contact" reloadDocument 
            className="p-4 border text-[10px] border-solid border-white/20 rounded-full hover:border-white/50 transition-colors duration-300 group"
          >
            <AnimatedButton text="Schedule a Call" className="text-secondary uppercase tracking-wider text-[10px]" />
          </Link>
        </div>

       
<div className="w-full border-t border-white/10 pt-8 grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-6 text-center md:text-left">
  
 
  <div className="text-sm font-light text-secondary/50 select-none md:justify-self-start">
  © {currentYear} Vertex Digital. All Rights Reserved.
  </div>

 
  <div className="md:justify-self-center">
    <nav className="flex items-center justify-center gap-6 select-none">
      <Link to="/" reloadDocument className="text-[10px] uppercase tracking-wider text-secondary hover:text-secondary/60 transition-colors duration-300">
        Home
      </Link>
      <Link to="/about" reloadDocument className="text-[10px] uppercase tracking-wider text-secondary hover:text-secondary/60 transition-colors duration-300">
        About
      </Link>
      <Link to="/projects" reloadDocument className="text-[10px] uppercase tracking-wider text-secondary hover:text-secondary/60 transition-colors duration-300">
        Project
      </Link>
      <Link to="/contact" reloadDocument  className="text-[10px] uppercase tracking-wider text-secondary hover:text-secondary/60 transition-colors duration-300">
        Call Me
      </Link>
    </nav>
  </div>

  
  <div className="flex items-center justify-center md:justify-self-end gap-4">
    
    {/* GitHub Link */}
    <a 
      href="https://github.com/your-username" 
      target="_blank" 
      rel="noreferrer"
      className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-secondary/60 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300"
    >
      <FaGithub className="text-sm" />
    </a>

    
    <a 
      href="https://linkedin.com/in/your-username" 
      target="_blank" 
      rel="noreferrer"
      className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-secondary/60 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300"
    >
      <FaLinkedin className="text-sm" />
    </a>

    
    <a 
      href="https://facebook.com/your-profile" 
      target="_blank" 
      rel="noreferrer"
      className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-secondary/60 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300"
    >
      <FaFacebookF className="text-sm" />
    </a>

  </div>

</div>
        
        
      </div>
    </footer>
  );
}