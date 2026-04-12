import { MapPin, ShieldCheck, MonitorPlay } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      title: "Carefully Selected Locations",
      description: "We strategically select high-traffic, premium geographical zones to ensure your brand receives maximal visibility and engagement.",
      icon: <MapPin className="w-10 h-10 text-white" />,
    },
    {
      title: "High-Quality P15 Displays",
      description: "Our fleets feature ultra-bright P15 resolution displays, emitting sharp, dynamic ad formats observable even from vast distances.",
      icon: <MonitorPlay className="w-10 h-10 text-white" />,
    },
    {
      title: "Strict Safety Protocols & SOP",
      description: "Safety is our absolute priority. We operate under stringent aviation compliance, rigorously tested Standard Operating Procedures, and dual-layer redundancies.",
      icon: <ShieldCheck className="w-10 h-10 text-white" />,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-neutral-950 border-b border-white-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-white-60 uppercase mb-3">Why Hover Ads</h2>
          <h3 className="text-4xl md:text-5xl font-extralight text-white">
            Unrivalled Quality <br />
            <span className="font-bold">& Absolute Safety</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-black border border-white-10 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                {point.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">{point.title}</h4>
              <p className="text-white-60 leading-relaxed max-w-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
