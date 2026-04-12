import { MonitorSmartphone, Megaphone, Plane, Sparkles, Cpu } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Aerial Advertising Campaigns",
      description: "15-30 second high-impact ads in multiple premium locations. It&apos;s an unmissable digital billboard in the sky.",
      icon: <Plane className="w-8 h-8 text-white" />,
      colSpan: "md:col-span-2",
    },
    {
      title: "Drone Light Shows",
      description: "Mesmerising aerial displays for public events, personal milestones, and brand inaugurations.",
      icon: <Sparkles className="w-8 h-8 text-white" />,
      colSpan: "md:col-span-1",
    },
    {
      title: "Digital Marketing",
      description: "Elite digital marketing strategies to exponentially grow your brand beyond the sky and across the web.",
      icon: <Megaphone className="w-8 h-8 text-white" />,
      colSpan: "md:col-span-1",
    },
    {
      title: "AI & Automations",
      description: "Transform your operations with state-of-the-art AI workflows and intelligent automation solutions.",
      icon: <Cpu className="w-8 h-8 text-white" />,
      colSpan: "md:col-span-1",
    },
    {
      title: "Software Solutions",
      description: "Custom software architecture and full-stack development crafted specifically for your enterprise needs.",
      icon: <MonitorSmartphone className="w-8 h-8 text-white" />,
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section id="services" className="py-24 bg-black border-b border-white-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold tracking-widest text-white-60 uppercase mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-extralight text-white leading-tight">
            Comprehensive <br />
            <span className="font-bold">Next-Gen Services</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-neutral-900/50 border border-white-10 p-8 md:p-12 rounded-2xl hover:bg-neutral-900 transition-all duration-300 overflow-hidden ${service.colSpan}`}
            >
              {/* Hover effect gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-6 w-16 h-16 rounded-2xl bg-black border border-white-10 flex items-center justify-center relative z-10 group-hover:scale-110 group-hover:border-white-20 transition-all duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h4>
              <p className="text-white-60 leading-relaxed relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
