import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  return (
    <div className="w-full h-auto md:min-h-screen bg-secondary text-white px-4 md:px-8 py-16 md:py-0 flex justify-center items-center relative">
      <div className="w-full relative h-auto md:min-h-screen max-w-6xl flex flex-col gap-12 md:gap-16 items-stretch">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="flex flex-col border-t border-black mt-4 md:mt-10">
            {services.map((service, index) => {
              const isOpen = activeIndex === index;
              const formattedId = String(index + 1).padStart(2, "0");
              
              return (
                <div
                  key={service._id}
                  onMouseEnter={() => handleServiceInteraction(index, "hover")}
                  onClick={() => handleServiceInteraction(index, "click")}
                  className="py-5 sm:py-6 md:py-8 border-b border-white/10 cursor-pointer group flex flex-col transition-all duration-300 hover:bg-black/[0.015]"
                >
                  <div className="flex items-baseline gap-3 sm:gap-4 md:gap-6 select-none">
                    <span className={`text-xs md:text-sm font-medium transition-colors duration-300 ${isOpen ? "text-primary" : "text-primary/10"}`}>
                      {formattedId}
                    </span>
                    <h3 className={`text-2xl md:text-4xl font-medium tracking-[-0.02em] uppercase transition-all duration-300 ${isOpen ? "text-primary translate-x-2" : "text-primary/25 group-hover:text-primary"}`}>
                      {service.serviceTitle}
                    </h3>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden pl-7 sm:pl-8 md:pl-11"
                  >
                    <p className="text-primary text-base md:text-lg mt-3 sm:mt-4 max-w-md leading-7">
                      {service.serviceDescription}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* මේ තියෙන්නේ ඔයා අහපු, ProjectCard එකේ වගේ පින්තූරය පේන කොටස විතරයි */}
          <div className="hidden md:block sticky top-24 w-full aspect-square overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 shadow-2xl mt-24">
            {services[activeIndex]?.serviceIcon ? (
              <img
                src={urlFor(services[activeIndex].serviceIcon).url()}
                alt={services[activeIndex]?.serviceTitle}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.06]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-500">
                No Image Provided
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}