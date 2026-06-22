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

  const handleServiceInteraction = (index, type) => {
    if (window.innerWidth < 768 && type === "click") {
      setActiveIndex(activeIndex === index ? -1 : index);
    } else if (window.innerWidth >= 768 && type === "hover") {
      setActiveIndex(index);
    }
  };

  if (loading) {
    return <div className="text-white text-center py-20 bg-secondary min-h-screen flex items-center justify-center">Loading Services...</div>;
  }

  if (!services.length) {
    return <div className="text-white text-center py-20 bg-secondary min-h-screen flex items-center justify-center">No Services Found.</div>;
  }

  return (
    <div className="w-full h-auto md:min-h-screen bg-secondary text-white px-4 md:px-8 py-16 md:py-0 flex justify-center items-center relative">
      <div className="w-full relative h-auto md:min-h-screen max-w-6xl flex flex-col gap-12 md:gap-16 items-stretch">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="flex flex-col border-t border-black mt-4 md:mt-10">
            {services.map((service, index) => {
              const isOpen = activeIndex === index;
              
              
              const formattedId = String(index + 1).padStart(3, "0");
              
              return (
                <div
                  key={service._id}
                  onMouseEnter={() => handleServiceInteraction(index, "hover")}
                  onClick={() => handleServiceInteraction(index, "click")}
                  className="py-5 sm:py-6 md:py-8 border-b border-white/10 cursor-pointer group flex flex-col transition-all duration-300 hover:bg-black/[0.015]"
                >
                  
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 sm:gap-3 md:gap-6 select-none">
                    
                    
                    <span className="text-[10px] font-medium tracking-wider text-primary/40 block md:hidden mb-1 pl-0">
                      {formattedId}
                    </span>

                    
                    <span className={`text-xs md:text-sm font-medium transition-all duration-300 text-primary hidden md:block ${isOpen ? "md:opacity-100" : "md:opacity-20"}`}>
                      {formattedId}
                    </span>
                  
                    
                    <h3 className={`text-2xl md:text-4xl font-medium tracking-[-0.02em] uppercase transition-all duration-300 text-primary md:translate-x-0 ${isOpen ? "md:translate-x-2 md:opacity-100" : "md:opacity-30 md:group-hover:opacity-100 md:group-hover:translate-x-2"}`}>
                      {service.serviceTitle}
                    </h3>
                  </div>

                 
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden pl-0 md:pl-11 max-md:!h-auto max-md:!opacity-100"
                  >
                    <p className="text-primary text-base md:text-lg mt-3 sm:mt-4 max-w-md leading-7">
                      {service.serviceDescription}
                    </p>

                    {service.serviceIcon && urlFor(service.serviceIcon).url() && (
                      <div className="block md:hidden w-full h-50 mt-4 overflow-hidden rounded-2xls">
                        <img
                          src={urlFor(service.serviceIcon).url()}
                          alt={service.serviceTitle}
                          className="w-full h-full object-cover transition-transform duration-700 rounded-2xl ease-out"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>

          <div className="hidden md:block sticky top-24 w-full h-112.5 overflow-hidden rounded-2xl shadow-2xl bg-zinc-900 mt-24 group">
            <AnimatePresence mode="wait">
              {services[activeIndex]?.serviceIcon && urlFor(services[activeIndex].serviceIcon).url() ? (
                <motion.img
                  key={activeIndex}
                  src={urlFor(services[activeIndex].serviceIcon).url()}
                  alt={services[activeIndex]?.serviceTitle}
                  initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
    </div>
  );
}