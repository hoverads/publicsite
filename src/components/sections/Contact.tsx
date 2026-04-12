"use client";

import { Mail, Phone, CalendarHeart, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [showFirst, setShowFirst] = useState(true);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    // @ts-ignore
    const formData = new FormData(event.target);
    formData.append("access_key", "22ba8f99-f448-485b-ab9d-5c7d767380a6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("success");
        // @ts-ignore
        event.target.reset();
      } else {
        setResult("error");
      }
    } catch (error) {
      setResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-neutral-950 border-t border-white-10 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="h-[80px] md:h-[120px] relative flex justify-center items-center mb-6">
          <h2 className={`absolute text-4xl md:text-7xl font-extralight text-white leading-tight transition-all duration-1000 ${
            showFirst ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4 pointer-events-none"
          }`}>
            Book your event now.
          </h2>
          <h2 className={`absolute text-4xl md:text-7xl font-extralight text-white leading-tight transition-all duration-1000 ${
            !showFirst ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4 pointer-events-none"
          }`}>
            Elevate your brand now.
          </h2>
        </div>
        
        <p className="text-xl text-white-60 mb-12 max-w-2xl mx-auto">
          Contact us today to schedule your mesmerizing aerial display or book advertising space on our sky-high digital billboards.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <a href="mailto:contact@hoverads.in" className="flex items-center gap-3 px-8 py-5 bg-white/5 border border-white-20 rounded-full hover:bg-white hover:text-black transition-all group w-full md:w-auto justify-center">
            <Mail className="w-6 h-6 text-white group-hover:text-black transition-colors" />
            <span className="font-semibold text-lg">contact@hoverads.in</span>
          </a>
          <a href="tel:7981382598" className="flex items-center gap-3 px-8 py-5 bg-white/5 border border-white-20 rounded-full hover:bg-white hover:text-black transition-all group w-full md:w-auto justify-center">
            <Phone className="w-6 h-6 text-white group-hover:text-black transition-colors" />
            <span className="font-semibold text-lg">+91 7981382598</span>
          </a>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-neutral-900 border border-white-10 rounded-2xl p-8 backdrop-blur-xl">
            <div className="flex items-center justify-center mb-6">
              <CalendarHeart className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Event Inquiry Form</h3>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white-60 mb-2">Name</label>
                  <input type="text" name="name" required className="w-full bg-black border border-white-20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-white-60 mb-2">Company (Optional)</label>
                  <input type="text" name="company" className="w-full bg-black border border-white-20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="Acme Inc" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white-60 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full bg-black border border-white-20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm text-white-60 mb-2">Phone</label>
                  <input type="tel" name="phone" className="w-full bg-black border border-white-20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-white-60 mb-2">Message</label>
                <textarea name="message" required className="w-full bg-black border border-white-20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white transition-colors h-32 resize-none" placeholder="Tell us about your event or campaign..."></textarea>
              </div>
              
              {result === "success" && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-sm">Success! Your message has been sent. We'll get back to you soon.</p>
                </div>
              )}
              {result === "error" && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p className="text-sm">Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full bg-white text-black font-bold text-lg rounded-lg py-4 mt-2 hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
