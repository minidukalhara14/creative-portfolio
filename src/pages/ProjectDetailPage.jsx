
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedButton from "../components/common/AnimatedButton";
import ScrollButton from "../components/common/ScrollButton";
import Navibar from "../components/common/Navibar";// ⚠️ ඔයාගේ sanityClient එක තියෙන තැන අනුව path එක වෙනස් කරගන්න
import { useEffect, useState } from "react";
import { SanityClient } from "@sanity/client/stega";
import { client, urlFor } from "../sanityClient";
import Footer from "../components/common/Footer";


export default function ProjectDetailPage() {
    // 1. URL එකෙන් ':id' එක ගන්නවා
    const { id } = useParams(); 
    
    // 2. Project data save කරගන්න state එකක්
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    // 3. Page එක load වෙද්දීම Sanity එකෙන් data fetch කරනවා
    useEffect(() => {
   
        const query = `*[_type == "project" && _id == $id][0]{
            title,
            projectType,
            image,
            description,
            liveLink,
            // ඔයාට Sanity schema එකේ තියෙන වෙනත් fields (උදා: tools, siteLink) තියෙනවා නම් ඒවා මෙතනට දාන්න
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
    }, [id]); // ID එක වෙනස් වෙන හැම සැරේකම අලුත් data fetch වෙනවා

    // Data එනකම් Loading screen එකක් පෙන්වනවා
    if (loading) {
        return (
            <div className="min-h-screen w-full flex bg-primary text-secondary justify-center items-center">
                <p className="text-xl font-mono animate-pulse">Loading Project Details...</p>
            </div>
        );
    }

    // වැරදි ID එකක් ආවොත් හෝ Project එකක් නැත්නම්
    if (!project) {
        return (
            <div className="min-h-screen w-full flex bg-primary text-secondary justify-center items-center">
                <p className="text-xl">Project Not Found!</p>
            </div>
        );
    }

    // Sanity එකෙන් ආපු Data ටික වෙන් කරලා ගන්නවා
    const { title, projectType, image, description, liveLink } = project;

    return (
        <div className="min-h-screen w-full flex flex-col bg-primary text-secondary justify-center items-center relative">
            
            <div className="w-full h-[80px] cursor-pointer flex justify-center items-center absolute top-0">
                <Navibar />
                </div>
            <div className="w-full h-[400px] absolute top-[80px] flex justify-center items-center flex-col select-none">
                

               <div className="w-[calc(100vw-70px)]   h-[500px] flex flex-col justify-center items-center  mb-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center px-4"
                >
                   
                    <h1 className="text-5xl font-bold uppercase tracking-wider">
                        {title}
                    </h1>
                </motion.div>
                 <span className="text-sm w-[700px] font-mono uppercase mt-8 text-zinc-400 tracking-wider flex justify-center items-center block mb-2">
                        {description || 'Web Development'}
                    </span>

                    </div>
            </div>

            <div className="w-[calc(100vw-70px)] absolute top-[480px]   transform rounded-2xl text-primary flex justify-center items-center relative mb-10">
                <div id="intro" className="w-full h-auto min-h-[500px] bg-secondary flex items-center flex-col rounded-2xl relative p-8 md:p-16">
                    
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
                    <div className="w-full  h-[100px] border-b  flex flex-row  items-center justify-between gap-10 ">
                        
                        <span className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500">
                            {projectType || 'General'}
                        </span>
                        <span className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-500">
                            {liveLink ? (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="underline">
                                    View Live
                                </a>
                            ) : (
                                'No Live Link'
                            )}
                        </span>    

                    </div>
                   <div className="w-[800px] h-[600px] bg-sky-800 flex mt-8 justify-center items-center rounded-2xl">
                    <div className="w-[700px] h-[500px] rounded-xl overflow-hidden  shadow-2xl">
                        {image ? (
                            <img 
                                src={urlFor(image).url()} 
                                alt={title} 
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-zinc-800 text-zinc-400 flex items-center justify-center">
                                No Image Available
                            </div>
                        )}
                    </div>
                    </div>

                    
                
                </div>
            </div>
           <Footer />
        </div>
    );
}