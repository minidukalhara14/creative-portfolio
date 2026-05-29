import AnimatedText from "../components/common/AnimatedText";
import ContactForm from "../components/common/ContactForm";
import Footer from "../components/common/Footer";
import Intro from "../components/common/Intro";
import Navibar from "../components/common/Navibar";
import AnimatedTable from "../components/sections/AnimatedTable"; s


export default function ContactPage() {
    return (
        <div className="w-full  bg-black text-white relative flex justify-center items-center flex-col overflow-hidden">
              
              
              <div className="w-full h-screen  flex justify-center items-center flex-col  select-none relative">
                
                
                <div className="w-full h-[80px]  flex justify-center items-center absolute top-0">
                  <Navibar />
                </div>
        
                   
                <div className=" w-full h-[calc(100vh-105px)] p-10 flex flex-col  items-center relative">
                  
                  <AnimatedText text="CONTACT ME" />
                  
                    <ContactForm />
        
                </div>

              
              </div>
               
              
              
              <Footer/>
        
            </div>
    );
}