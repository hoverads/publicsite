import { Store, Handshake } from "lucide-react";

export default function Franchise() {
  return (
    <section id="franchise" className="py-24 bg-black border-b border-white-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-sm font-bold tracking-widest text-white-60 uppercase mb-3">Partner With Us</h2>
        <h3 className="text-4xl md:text-5xl font-extralight text-white leading-tight mb-8">
          Franchise & Service <br />
          <span className="font-bold">Partnerships</span>
        </h3>
        <p className="max-w-2xl mx-auto text-white-60 text-lg leading-relaxed mb-12">
          Unlock a highly lucrative opportunity in the growing drone advertising and aerial display industry. Tap into our proven operational backbone, superior hardware, and vast clientele. Become an exclusive service partner in your region today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center bg-white/5 border border-white-10 p-10 rounded-3xl backdrop-blur-sm">
            <Store className="w-12 h-12 text-white mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Franchising</h4>
            <p className="text-white-60 mb-8">Operate a regional node for Hover Ads with full strategic, marketing, and hardware support. Rapid ROI and exclusive geographical rights.</p>
            <a href="mailto:contact@hoverads.in?subject=Franchise%20Inquiry" className="mt-auto px-6 py-3 border border-white-20 text-white rounded-full hover:bg-white hover:text-black transition-colors font-medium">
              Inquire Now
            </a>
          </div>
          <div className="flex flex-col items-center bg-white/5 border border-white-10 p-10 rounded-3xl backdrop-blur-sm">
            <Handshake className="w-12 h-12 text-white mb-6" />
            <h4 className="text-2xl font-bold text-white mb-4">Service Partnets</h4>
            <p className="text-white-60 mb-8">Got a fleet? Connect with our global advertising management platform. Take gigs, run shows, and earn consistently.</p>
            <a href="mailto:contact@hoverads.in?subject=Service%20Partner%20Inquiry" className="mt-auto px-6 py-3 border border-white-20 text-white rounded-full hover:bg-white hover:text-black transition-colors font-medium">
              Join Network
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
