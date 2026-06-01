import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client, urlFor } from "../../sanityClient";

export default function ServicesSection() {
 
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    
    const query = `*[_type == "services"]{ _id, serviceTitle, serviceDescription, serviceIcon }`;
    
    client
      .fetch(query)
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Services fetch error:", err);
        setLoading(false);
      });
  }, []);

  
  if (loading) {
    return <div className="text-white text-center py-20 bg-secondary min-h-screen flex items-center justify-center">Loading Services...</div>;
  }

  if (!services.length) {
    return <div className="text-white text-center py-20 bg-secondary min-h-screen flex items-center justify-center">No Services Found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-secondary text-white px-8 flex justify-center items-center relative">
      <div className="w-full absolute top-0 min-h-screen max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        
        <div className="flex flex-col border-t border-black mt-10">
          {services.map((service, index) => {
            const isOpen = activeIndex === index;
            
            
            const formattedId = String(index + 1).padStart(2, "0");
            
            return (
              <div
                key={service._id}
                onMouseEnter={() => setActiveIndex(index)}
                className="py-8 border-b border-white/10 cursor-pointer group flex flex-col transition-all duration-300"
              >
                
                <div className="flex items-baseline gap-6 select-none">
                  <span className={`text-sm font-medium transition-colors duration-300 ${isOpen ? "text-primary" : "text-primary/10"}`}>
                    {formattedId}
                  </span>
                  <h3 className={`text-3xl md:text-4xl font-medium tracking-tight uppercase transition-all duration-300 ${isOpen ? "text-primary translate-x-2" : "text-primary/25 group-hover:text-primary"}`}>
                    {service.serviceTitle}
                  </h3>
                </div>

                
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden pl-11"
                >
                  <p className="text-primary text-lg mt-4 max-w-md leading-relaxed">
                    {service.serviceDescription}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        
        <div className="sticky top-24 w-full h-[450px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-zinc-900 mt-20 md:mt-24">
          <AnimatePresence mode="wait">
            {services[activeIndex]?.serviceIcon ? (
              <motion.img
                key={activeIndex}
                src={urlFor(services[activeIndex].serviceIcon).url()} // 💡 සැනිටි ඉමේජ් URL එක ගත්තා
                alt={services[activeIndex].serviceTitle}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20 text-sm">
                No Image Uploaded
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}