export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-white-60 uppercase mb-3">About Us</h2>
            <h3 className="text-5xl md:text-6xl font-extralight text-white leading-tight mb-8">
              Pioneers of the <br />
              <span className="font-bold">Aerial Canvas</span>
            </h3>
            <p className="text-white-60 text-lg leading-relaxed mb-6">
              Hover Ads is revolutionizing the advertising and event broadcasting industry by transforming the sky into an enormous, unmissable digital canvas. Combining advanced drone fleets, high-resolution P15 displays, and robust software engines, we deliver a spectacle that stops the world in its tracks.
            </p>
            <p className="text-white-60 text-lg leading-relaxed">
              We aren&apos;t just deploying screens; we are creating immersive experiences. Whether it&apos;s a massive product launch, a mesmerizing light show, or tactical digital marketing integrations, we turn ambitions into literal skylines. 
            </p>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-white-10">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1549449339-444f2bb73dd3?q=80&w=1200&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">HOVER ADS</div>
              <div className="text-xl text-white-60 mt-2 font-light">Elevating brands since the dawn of the drone era.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
