export default function Partners() {
  const partners = [
    "TECH CORP", "GLOBAL MEDIA", "STUDIOS PLUS", "SKY DYNAMICS", "FUTURE BRANDS"
  ];

  return (
    <section id="partners" className="py-20 bg-neutral-950 border-b border-white-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-bold tracking-widest text-center text-white-60 uppercase mb-12">
          Trusted by Industry Leaders
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, idx) => (
            <div key={idx} className="text-2xl md:text-3xl font-black text-white tracking-widest">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
