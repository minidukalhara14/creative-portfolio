import AnimatedText from "../components/common/AnimatedText";
import ContactForm from "../components/common/ContactForm";
import Footer from "../components/common/Footer";
import Navibar from "../components/common/Navibar";

export default function ContactPage() {
    return (
       
        <div className="w-full min-h-screen bg-black text-white flex flex-col justify-between overflow-hidden relative">
              
              
              <div className="w-full h-[80px] flex justify-center items-center absolute top-0 z-[999]">
                <Navibar />
              </div>
        
             
              <div className="w-full h-auto md:flex-1 p-4 md:p-10 flex flex-col md:grid md:grid-cols-1 md:place-items-center relative gap-4 md:gap-0 mt-[100px] md:mt-0">
                
               
               
                <div className="w-full text-center md:row-start-1 md:col-start-1 md:z-0">
                  <AnimatedText text="CONTACT ME" />
                </div>
                
               
                <div className="w-full flex justify-center relative md:row-start-1 md:col-start-1 md:z-10 pt-4 md:pt-0">
                  <ContactForm />
                </div>
      
              </div>
               
             
              <div className="w-full relative z-20 mt-auto">
                <Footer/>
              </div>
        
        </div>
    );
}