import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedButton from "../components/common/AnimatedButton";
import ScrollButton from "../components/common/ScrollButton";
import Navibar from "../components/common/Navibar";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";
import Footer from "../components/common/Footer";

export default function ProjectDetailPage() {
    const { id } = useParams(); 
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "project" && _id == $id][0]{
            title,
            projectType,
            images,
            description,
            projectUrl
        }`;

        client
            .fetch(query, { id })
            .then((data) => {
                setProject(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Sanity fetching error: ", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen w-full flex bg-primary text-secondary justify-center items-center">
                <p className="text-xl font-mono animate-pulse">Loading Project Details...</p>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen w-full flex bg-primary text-secondary justify-center items-center">
                <p className="text-xl">Project Not Found!</p>
            </div>
        );
    }

    const { title, projectType, images, description, projectUrl } = project;

    return (
        /* මුළු පිටුවම flex column එකක් කරලා content එක මැදට ගෙන min-h-screen එකක් දුන්නා */
        <div className="min-h-screen w-full flex flex-col bg-primary text-secondary items-center overflow-x-hidden">
            
            {/* Navibar Container */}
            <div className="w-full h-[80px] flex justify-center items-center z-50">
                <Navibar />
            </div>

            {/* Title & Description Area (කලින් absolute එක අයින් කරලා flex-col කරා) */}
            <div className="w-[calc(100vw-70px)] py-20 flex flex-col justify-center items-center select-none text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="px-4"
                >
                    <h1 className="text-5xl font-bold uppercase tracking-wider">
                        {title}
                    </h1>
                </motion.div>
                
                {/* Description එක හරියටම මැදට ගන්න text-center සහ mx-auto දාලා තියෙනවා */}
                <span className="text-sm max-w-[700px] w-full font-mono uppercase mt-8 text-zinc-400 tracking-wider block px-4 leading-relaxed text-center mx-auto">
                    {description || 'Web Development'}
                </span>
            </div>

            {/* Content Section (කලින් තිබ්බ absolute top-[480px] අයින් කරලා සාමාන්‍ย flow එකට ගත්තා) */}
            <div className="w-[calc(100vw-70px)] rounded-2xl text-primary flex justify-center items-center relative mb-24">
                <div id="intro" className="w-full h-auto min-h-[500px] bg-secondary flex items-center flex-col rounded-2xl relative p-8 md:p-16">
                    
                    {/* SVG Curve Tab with Scroll Button */}
                    <div className="absolute -top-[34px] w-[200px] h-[35px] text-white flex items-center justify-center ">
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

                   
                    <div className="w-full h-[100px] border-b border-zinc-700/30 flex flex-row items-center justify-between gap-10">
                        <span className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500">
                            {projectType || 'General'}
                        </span>
                        {project.projectUrl && (
                            <a 
                                href={project.projectUrl} // <-- මෙතනටත් projectUrl දෙන්න
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500 hover:text-primary transition-all duration-300"
                            >
                                View Live
                            </a>
                        )}
                    </div>

                    
                    <div className="w-full max-w-[800px] flex flex-col gap-6 mt-8">
                        {images && images.length > 0 ? (
                            images.map((img, index) => (
                                <div key={index} className="w-full aspect-[4/3] bg-sky-800/10 rounded-2xl p-4 md:p-8">
                                    <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                                        <img 
                                            src={urlFor(img).url()} 
                                            alt={`${title} - ${index + 1}`} 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="w-full aspect-[4/3] bg-zinc-800 text-zinc-400 flex items-center justify-center rounded-2xl">
                                No Image Available
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {/* Footer Container - දැන් මෙය කිසිම හිරවීමක් නැතුව පිටුවේ අන්තිමටම පෙනේවි */}
            <div className="w-full mt-auto">
                <Footer />
            </div>

        </div>
    );
}