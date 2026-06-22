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
                <p className="text-xl animate-pulse">Loading Project Details...</p>
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
        <div className="min-h-screen w-full flex flex-col bg-primary text-secondary items-center overflow-x-hidden">
            
            {/* Navigation Bar */}
            <div className="w-full h-[80px] flex justify-center items-center z-50">
                <Navibar />
            </div>

            {/* Header Section */}
            <div className="w-full md:w-[calc(100vw-70px)] max-w-[1200px] py-16 sm:py-20 px-4 flex flex-col justify-center items-center select-none text-center mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="px-2 sm:px-4"
                >
                    <h1 className="font-display text-4xl md:text-6xl font-semibold uppercase tracking-[-0.03em] max-w-[12ch] sm:max-w-5xl leading-[1.02] sm:leading-[0.98] mx-auto">
                        {title}
                    </h1>
                </motion.div>
                
                {/* මෙතනට projectType එක දැම්මා subtitle එක විදිහට */}
                <span className="label text-sm mt-5 sm:mt-6 text-zinc-500 block px-4">
                    {projectType || 'Mechanical Engineering'}
                </span>
            </div>

            {/* Detailed Content Card */}
            <div className="w-[calc(100vw-30px)] lg:w-[calc(100vw-70px)] rounded-2xl text-primary flex justify-center items-center relative mb-24">
                <div id="intro" className="w-full h-auto min-h-[500px] bg-secondary flex items-center flex-col rounded-2xl relative p-6 sm:p-8 md:p-16">
                    
                    {/* Floating Scroll Button Container */}
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

                    {/* Metadata Header */}
                    <div className="w-full max-w-[800px] min-h-[80px] border-b border-zinc-700/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-10 py-4 sm:py-0">
                        <span className="label text-xs text-zinc-500 font-semibold">
                            Project Specifications
                        </span>
                        {projectUrl && (
                            <a 
                                href={projectUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="label text-sm text-zinc-600 hover:text-black font-semibold transition-all duration-300 border border-zinc-700/20 px-4 py-1.5 rounded-full hover:bg-zinc-100"
                            >
                                View Case Study
                            </a>
                        )}
                    </div>

                    {/* Project Description Text Area */}
                    {description && (
                        <div className="w-full max-w-[800px] mt-8 sm:mt-10 text-left">
                            <p className="text-lg md:text-xl font-normal text-zinc-800 leading-7 sm:leading-8 whitespace-pre-line max-w-[65ch]">
                                {description}
                            </p>
                        </div>
                    )}

                    {/* Image Showcase Gallery */}
                    <div className="w-full max-w-[800px] flex flex-col gap-6 sm:gap-8 mt-10 sm:mt-12">
                        {images && images.length > 0 ? (
                            images.filter(img => urlFor(img).url()).map((img, index) => (
                                <div key={index} className="w-full aspect-square bg-zinc-900/[0.03] rounded-2xl p-2 md:p-4 border border-zinc-900/[0.05]">
                                    <div className="w-full h-full rounded-xl overflow-hidden shadow-xl">
                                        <img 
                                            src={urlFor(img).url()} 
                                            alt={`${title} Showcase - ${index + 1}`} 
                                            className="w-full h-full object-cover object-center select-none"
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="label w-full aspect-[16/9] bg-zinc-100 text-zinc-400 flex items-center justify-center rounded-2xl border border-dashed border-zinc-300 text-sm">
                                No Technical Renders Available
                            </div>
                        )}
                    </div>

                    {/* Back to Project Page Button */}
                    <div className="mt-12 sm:mt-16">
                        <Link to="/projects">
                            <AnimatedButton text="← Back To Projects" className="label text-xs text-zinc-600" />
                        </Link>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <div className="w-full mt-auto">
                <Footer />
            </div>

        </div>
    );
}