import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { client, urlFor } from "../../sanityClient";
import { GoCodeReview } from "react-icons/go";
import AnimatedButton from "./AnimatedButton";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

export default function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const query = `*[_type == "reviews"]{ _id, clientName, designation, reviewText, clientImage }`;
    
    client
      .fetch(query)
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity Reviews fetch error:", err);
        setLoading(false);
      });
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  if (loading) {
    return <div className="text-white text-center py-20 bg-secondary">Loading Reviews...</div>;
  }

  if (reviews.length === 0) {
    return null; 
  }

  const current = reviews[currentIndex];

  return (
   
    <div className="w-full px-4 md:px-8 lg:w-[calc(100vw-70px)] bg-secondary text-white py-16 md:py-24 flex flex-col justify-center items-center border-t rounded-2xl lg:rounded-t-none lg:rounded-b-2xl border-white/5 mt-6 lg:mt-0 mx-auto">
      
     
      <div className="w-full max-w-4xl bg-black/20 mx-auto flex flex-col items-center text-center rounded-2xl p-5 md:p-8">
        
        
        <span className="text-primary/40 text-5xl md:text-6xl font-serif mb-4 md:mb-6 select-none">
          <GoCodeReview />
        </span>

        
        <div className="min-h-[140px] md:min-h-[180px] flex items-center justify-center px-2 md:px-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-base md:text-2xl font-light leading-relaxed tracking-wide text-primary/90"
            >
              "{current.reviewText}"
            </motion.p>
          </AnimatePresence>
        </div>

       
        <div className="mt-6 md:mt-8 flex flex-col items-center gap-3">
          {current.clientImage && (
            <img
              src={urlFor(current.clientImage).url()}
              alt={current.clientName}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10"
            />
          )}
          <div>
            <h4 className="text-sm md:text-base font-medium text-primary">{current.clientName}</h4>
            <p className="text-xs md:text-sm text-primary/50 font-light mt-0.5">{current.designation}</p>
          </div>
        </div>

       
        <div className="flex items-center gap-6 md:gap-8 mt-8 md:mt-12 select-none">
          <button 
            onClick={prevReview}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 flex items-center justify-center text-primary/60 hover:text-primary hover:border-white/40 transition-all duration-300 group"
          >
            <AnimatedButton text={<GrFormPreviousLink className="text-lg md:text-xl" />} />
          </button>
          
          <span className="text-xs md:text-sm font-light text-primary/30 tracking-widest">
            {currentIndex + 1} / {reviews.length}
          </span>

          <button 
            onClick={nextReview}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 flex items-center justify-center text-primary/60 hover:text-primary hover:border-white/40 transition-all duration-300 group"
          >
            <AnimatedButton text={<GrFormNextLink className="text-lg md:text-xl" />} />
          </button>
        </div>

      </div>
    </div>
  );
}