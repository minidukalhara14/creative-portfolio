import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesSection() {
  // සර්විසස් වලට අදාළ ඩේටා ටික
  const servicesData = [
    {
      id: "01",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive, and user-centric digital experiences that convert.",
      img: "https://images.unsplash.com/photo-1581291518655-9523c932dedf?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "02",
      title: "Web Development",
      description: "Building high-performance, responsive websites with modern frameworks and smooth animations.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "03",
      title: "Branding & Identity",
      description: "Crafting unique brand identities, logos, and design systems that stand out from the crowd.",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=600&auto=format&fit=crop",
    },
  ];

  // දැනට hover වෙලා තියෙන සර්විස් එකේ index එක තියාගන්න state එකක් (මුලින්ම පළවෙනි එක පෙන්වනවා)
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full min-h-screen bg-secondary text-white  px-8 flex justify-center items-center">
      <div className="w-full min-h-screen max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        {/* ⬅️ වම් පැත්ත: Services List */}
        <div className="flex flex-col border-t border-black">
          {servicesData.map((service, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className="py-8 border-b border-white/10 cursor-pointer group flex flex-col transition-all duration-300"
              >
                {/* Number සහ Title එක තියෙන කොටස */}
                <div className="flex items-baseline gap-6 select-none">
                  <span className={`text-sm font-medium transition-colors duration-300 ${isOpen ? "text-primary" : "text-primary/10"}`}>
                    {service.id}
                  </span>
                  <h3 className={`text-3xl md:text-4xl font-medium tracking-tight uppercase transition-all duration-300 ${isOpen ? "text-primary translate-x-2" : "text-primary/25 group-hover:text-primary"}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Description එක ලස්සනට Slide down වෙන්න හදපු ඇනිමේෂන් එක */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden pl-11"
                >
                  <p className="text-primary text-lg mt-4 max-w-md leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* ➡️ දකුණු පැත්ත: Animated Image Card */}
        {/* 'sticky top-24' නිසා වම් පැත්ත scroll වෙද්දි වුණත් image එක එක තැනක ලස්සනට රැඳී තියෙනවා */}
        <div className="sticky top-24 w-full h-[450px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-zinc-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeIndex} // Index එක වෙනස් වෙද්දි අලුත් image එකක් විදිහට අඳුරගන්න key එකක් දෙනවා
              src={servicesData[activeIndex].img}
              alt={servicesData[activeIndex].title}
              // Image එක fade-in වෙද්දි සහ fade-out වෙද්දි සිදුවන ඇනිමේෂන්
              initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}