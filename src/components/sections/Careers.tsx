import { Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  return (
    <section id="careers" className="py-24 bg-neutral-900 border-b border-white-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-sm font-bold tracking-widest text-white-60 uppercase mb-3">Join The Team</h2>
            <h3 className="text-4xl md:text-5xl font-extralight text-white leading-tight mb-6">
              Build The Future <br />
              <span className="font-bold">Of Advertising</span>
            </h3>
            <p className="text-white-60 text-lg leading-relaxed mb-8">
              We are constantly seeking innovative minds, skilled pilots, brilliant engineers, and creative marketers who want to redefine the skyline. Work with cutting-edge drone technology and top-tier brands.
            </p>
            <Link href="/careers" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors">
              <Briefcase className="w-5 h-5" />
              View Openings <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-tr from-white/10 to-transparent rounded-3xl p-1 relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <div className="absolute inset-2 bg-cover bg-center rounded-[1.4rem] z-20 grayscale group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop')" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
