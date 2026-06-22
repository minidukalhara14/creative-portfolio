import { FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa"; 
import AnimatedButton from "./AnimatedButton"; 
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-white pt-24 pb-12 px-8 border-t border-white/5 flex flex-col items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-between h-full">
        
        {/* Top Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24 select-none">
          <h2 className="text-xl font-medium tracking-[-0.02em] leading-[1.35] mb-10 text-secondary">
            Have a machine to build or a product to bring to life?<br />
            Let's talk about your project.
          </h2>
          
          <Link
            to="/contact" reloadDocument 
            className="px-4 py-2.5 border text-[10px] border-solid border-white/20 rounded-full hover:border-white/50 transition-colors duration-300 group"
          >
            <AnimatedButton text="Schedule a Call" className="text-secondary uppercase tracking-[-0.01em] text-[10px]" />
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="w-full border-t border-white/10 pt-8 flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-8 text-center">
 
          {/* Copyright - Will be first on mobile */}
          <div className="text-sm font-normal leading-6 text-secondary/50 select-none order-3 md:order-1 md:text-left">
            © {currentYear} Vertex Digital. All Rights Reserved.
          </div>

          {/* Navigation - Mobile: Column, Desktop: Row (Gap increased here) */}
          <div className="order-1 md:order-2">
            <nav className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 select-none">
              <Link to="/" reloadDocument className="label text-[10px] text-secondary hover:text-secondary/60 transition-colors duration-300">Home</Link>
              <Link to="/about" reloadDocument className="label text-[10px] text-secondary hover:text-secondary/60 transition-colors duration-300">About</Link>
              <Link to="/projects" reloadDocument className="label text-[10px] text-secondary hover:text-secondary/60 transition-colors duration-300">Project</Link>
              <Link to="/contact" reloadDocument className="label text-[10px] text-secondary hover:text-secondary/60 transition-colors duration-300">Call Me</Link>
            </nav>
          </div>

          {/* Social Icons - Will be third on mobile */}
          <div className="flex items-center justify-center gap-4 order-2 md:order-3 md:justify-self-end">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-secondary/60 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300">
              <FaGithub className="text-sm" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-secondary/60 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300">
              <FaLinkedin className="text-sm" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-secondary/60 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-300">
              <FaFacebookF className="text-sm" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}