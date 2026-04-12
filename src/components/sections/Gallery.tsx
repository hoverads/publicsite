export default function Gallery() {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1579899307435-02fb420e6e73?q=80&w=1200&auto=format&fit=crop",
      alt: "Drone light show over city",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1521405924368-64c5b828f0a7?q=80&w=800&auto=format&fit=crop",
      alt: "Drone fleet taking off",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=800&auto=format&fit=crop",
      alt: "Hover drone up close",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1540324155970-14e393a525f6?q=80&w=1200&auto=format&fit=crop",
      alt: "Digital ad display",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-black border-b border-white-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold tracking-widest text-white-60 uppercase mb-3">Immersive Visuals</h2>
            <h3 className="text-4xl md:text-6xl font-extralight text-white leading-tight">
              Our Work <br />
              <span className="font-bold">In The Sky</span>
            </h3>
          </div>
          <p className="text-white-60 mt-6 md:mt-0 max-w-sm">
            Explore our curated gallery of mesmerizing drone light shows and aerial digital billboards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-6">
          {images.map((img) => (
            <div
              key={img.id}
              className={`relative rounded-2xl overflow-hidden group ${img.colSpan} ${img.rowSpan}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${img.src}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
