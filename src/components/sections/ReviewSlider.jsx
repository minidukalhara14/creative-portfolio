import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';


export default function ContactForm() {
  const formRef = useRef(); // EmailJS එකට form එක අල්ලගන්න useRef එකක් දාන්න ඕනේ
  const [isSending, setIsSending] = useState(false); // Button එක disable කරන්න සහ loading පෙන්වන්න
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

   
    emailjs.sendForm(
      'YOUR_SERVICE_ID',   // customer ගේ EmailJS Service ID එක
      'YOUR_TEMPLATE_ID',  // customer ගේ EmailJS Template ID එක
      formRef.current,
      'YOUR_PUBLIC_KEY'    // customer ගේ EmailJS Public Key එක
    )
    .then((result) => {
        toast.success(`Thank you ${formData.firstName}! Your message has been sent successfully. We will contact you within 24 hours.`, {
            duration: 4000, 
            position: 'top-right', 
          });
        
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
    })
    .catch((error) => {
        toast.error("Something went wrong. Please try again later.", {
            duration: 4000,
            position: 'top-right',
        });
        console.error("EmailJS Error:", error);
    })
    .finally(() => {
        setIsSending(false); 
    });
  };

  return (
    <div className="w-[500px] h-[600px] text-primary p-6 flex flex-col gap-6  items-center absolute top-5 bg-secondary rounded-2xl shadow-md text-card-foreground">
      
      <div className="text-center w-full mt-5">
        
        <p className="text-xl text-muted-foreground ">
            Have a question? 

         </p>
         <p className="text-sm text-muted-foreground mt-2">   
            Drop me a line. I'll get back to you within 24 hours.
        </p>
      </div>

     
      <form ref={formRef} className="w-full mt-3 flex justify-center items-center flex-col gap-4" onSubmit={handleSubmit}>
        
        <div className="flex gap-4 w-full">
          <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" // EmailJS template එකට මේ name එක වැදගත් වෙනවා
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Ishara" 
              className="w-full px-3 py-2 border border-black/20 rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required 
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" // EmailJS template එකට මේ name එක වැදගත් වෙනවා
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Deshapriya" 
              className="w-full px-3 py-2 border border-black/20 rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              required 
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="mt-3 flex flex-col gap-1.5 w-full">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" // EmailJS template එකට මේ name එක වැදගත් වෙනවා
            value={formData.email}
            onChange={handleChange}
            placeholder="ishar@example.com" 
            className="w-full px-3 py-2 border border-black/20 rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            required 
          />
        </div>

        {/* Message/Text Field */}
        <div className="mt-3 flex flex-col gap-1.5 w-full">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea 
            id="message" 
            name="message" // EmailJS template එකට මේ name එක වැදගත් වෙනවා
            rows={4} 
            value={formData.message}
            onChange={handleChange}
            placeholder="How can i help you?" 
            className="w-full px-3 py-2 border border-black/20 rounded-md bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            required 
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSending} // Message එක යන අතරතුර තව පාරක් click කරන්න බැරි වෙන්න disable කරනවා
          className="w-[400px] h-[40px] mt-10 bg-primary text-secondary font-medium rounded-full hover:bg-primary/90 transition-colors text-sm disabled:opacity-70"
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

    </div>
  );
};
