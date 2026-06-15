import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const formRef = useRef(); 
  const [isSending, setIsSending] = useState(false); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // මචන්, මෙතනට ඔයාගේ Keys ටික දාන්න
    emailjs.sendForm(
      'service_oug0tem', // Service ID
      'template_wpq2f3a', // Template ID
      formRef.current, 
      'znLTpiEJquXNkGvd7'  // Public Key
    )
    .then(() => {
        
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
       toast.success(`Thank you ${formData.firstName}! Sent successfully.`, { position: 'top-right' });
        formRef.current.reset(); // Form එක reset කරන්න
    })
    .catch((error) => {
        toast.error("Something went wrong.", { position: 'top-right' });
        console.error("EmailJS Error:", error);
    })
    .finally(() => { setIsSending(false); });
  };

  return (
    <div className="w-[95%] max-w-[500px] md:w-[500px] h-auto md:h-[600px] text-primary p-6 flex flex-col gap-6 items-center relative bg-secondary rounded-2xl shadow-md text-card-foreground">
      
      <div className="text-center w-full mt-2 md:mt-5">
        <p className="text-xl text-muted-foreground">Have a project in mind?</p>
        <p className="text-sm text-muted-foreground mt-2">Send me the details. I'll get back to you within 24 hours.</p>
      </div>

      <form ref={formRef} className="w-full mt-3 flex justify-center items-center flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" // 👈 මේක අනිවාර්යයි
              value={formData.firstName} 
              onChange={handleChange} 
              placeholder="Ishara" 
              className="w-full px-3 py-2 border border-black/20 rounded-md bg-background text-sm focus:outline-none" 
              required 
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" // 👈 මේක අනිවාර්යයි
              value={formData.lastName} 
              onChange={handleChange} 
              placeholder="Deshapriya" 
              className="w-full px-3 py-2 border border-black/20 rounded-md bg-background text-sm focus:outline-none" 
              required 
            />
          </div>
        </div>

        <div className="mt-1 md:mt-3 flex flex-col gap-1.5 w-full">
          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" // 👈 මේක අනිවාර්යයි
            value={formData.email} 
            onChange={handleChange} 
            placeholder="you@example.com" 
            className="w-full px-3 py-2 border border-black/20 rounded-md bg-background text-sm focus:outline-none" 
            required 
          />
        </div>

        <div className="mt-1 md:mt-3 flex flex-col gap-1.5 w-full">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea 
            id="message" 
            name="message" // 👈 මේක අනිවාර්යයි
            rows={4} 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Tell me about your project..." 
            className="w-full px-3 py-2 border border-black/20 rounded-md bg-background text-sm resize-none focus:outline-none" 
            required 
          />
        </div>

        <button type="submit" disabled={isSending} className="w-full md:w-[400px] h-[40px] mt-6 md:mt-10 bg-primary text-secondary font-medium rounded-full text-sm disabled:opacity-70 transition-opacity">
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}