"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Plane,
  Sparkles,
  Users,
  Leaf,
  Info,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Brand Advertising",
    description: "Dominate the skyline with massive flying billboards. Perfect for product launches and brand awareness.",
    icon: Plane,
    delay: 0.1
  },
  {
    title: "Public Shows",
    description: "Mesmerizing light shows for festivals, cities, and major events that draw thousands of eyes.",
    icon: Sparkles,
    delay: 0.2
  },
  {
    title: "Personal Events",
    description: "Make your birthday, proposal, or wedding magical with a private drone light show in the sky.",
    icon: Users,
    delay: 0.3
  }
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/hover.ads/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/hoveradsin", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/hoverads/", label: "LinkedIn" }
];

export default function HoveradsLandingPage() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans selection:bg-white/30">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
        />
        {/* 60% Black Overlay - No Blur as requested */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full px-6 md:px-[120px] py-[24px]">
          <div className="flex items-center gap-8 lg:gap-[120px]">
            {/* Logo */}
            <div className="relative w-[180px] h-[40px] flex items-center shrink-0">
              <Image
                src="/logo.jpg"
                alt="Hoverads Logo"
                fill
                sizes="180px"
                className="object-contain"
                priority
              />
            </div>

            {/* Nav Links */}
            <ul className="hidden lg:flex items-center gap-[40px]">
              {["Services", "About", "Shows", "Sustainability"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="group flex items-center gap-[8px] text-white/70 text-[14px] font-medium hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Nav Email - More prominent */}
          <div className="shrink-0 flex items-center">
            <a
              href="mailto:contact@hoverads.in"
              className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white text-black text-[14px] font-bold hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Mail className="w-4 h-4" />
              contact@hoverads.in
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <section className="flex flex-col items-center justify-center w-full px-6 pt-[120px] md:pt-[180px] pb-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center max-w-[900px] gap-[32px]"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              <p className="text-[13px] font-medium tracking-wide">
                <span className="text-white/60">Now taking bookings for</span>{" "}
                <span className="text-white">Summer 2026</span>
              </p>
            </div>

            {/* Heading & Subtitle wrapper */}
            <div className="flex flex-col items-center gap-[24px]">
              <h1 className="text-[40px] md:text-[72px] font-semibold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
                The Sky is Your <br className="hidden md:block" /> New Billboard
              </h1>

              <p className="text-[16px] md:text-[18px] font-normal text-white/60 max-w-[640px] leading-relaxed">
                Elevate your brand with massive flying billboards and mesmerizing drone light shows that turn the night sky into a canvas of endless possibilities.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full px-6 md:px-[120px] py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="group relative p-8 rounded-[24px] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500"
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-semibold mb-3">{service.title}</h3>
                <p className="text-white/50 text-[15px] leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full px-6 md:px-[120px] py-[100px] bg-white/[0.02]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Info className="w-4 h-4 text-blue-400" />
                <span className="text-[12px] font-bold uppercase tracking-widest text-white/60">How we work</span>
              </div>
              <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight">
                Aerial Storytelling <br /> with Precision
              </h2>
              <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-[500px]">
                We use high-performance drones to turn the night sky into a massive display. Whether it's showing your brand's ads or creating magical birthday events, we transform any space into a mesmerizing visual experience.
              </p>
              <ul className="space-y-4">
                {[
                  "Massive Flying Billboards",
                  "Birthday & Anniversary Specials",
                  "Cinematic Light Choreography",
                  "Real-time Digital Art in Sky"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative aspect-video w-full rounded-[32px] overflow-hidden border border-white/10"
            >
              <Image
                src="/about-drone.png"
                alt="Drone Light Show"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>
          </div>
        </section>

        {/* Shows Section - Coming Soon */}
        <section id="shows" className="w-full px-6 md:px-[120px] py-[100px]">
          <div className="relative p-12 md:p-24 rounded-[40px] overflow-hidden text-center bg-white/[0.03] border border-white/10">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 border border-white/20">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span className="text-[14px] font-bold uppercase tracking-[0.2em] text-white">Coming Soon</span>
              </div>
              <h2 className="text-[36px] md:text-[64px] font-bold tracking-tight">Spectacular Public Shows</h2>
              <p className="text-white/50 text-[18px] md:text-[20px] max-w-[700px] mx-auto">
                We are preparing a series of mesmerizing light shows for cities and festivals. Follow us on social media to stay updated on our upcoming tour dates.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section id="sustainability" className="w-full px-6 md:px-[120px] py-[100px]">
          <div className="max-w-[1000px] mx-auto bg-gradient-to-br from-green-500/10 to-blue-500/5 rounded-[40px] p-8 md:p-16 border border-white/5">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-green-500/20 text-green-400 shrink-0">
                <Leaf className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-[28px] md:text-[40px] font-semibold text-green-50">Digital Over Disposable</h2>
                <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed">
                  Traditional aerial advertising relies on massive plastic banners and chemical-heavy print materials that end up in landfills after a single campaign. Our drone billboards are 100% digital, zero-emission, and fully reusable—eliminating plastic waste while delivering a more vibrant, dynamic impact on the sky.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto w-full px-6 md:px-[120px] py-[80px] border-t border-white/10 bg-black shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
            <div className="flex flex-col gap-8">
              <div className="relative w-[180px] h-[40px]">
                <Image src="/logo.png" alt="Hoverads Logo" fill sizes="180px" className="object-contain" />
              </div>
              <p className="text-white/40 text-[15px] max-w-[320px] leading-relaxed">
                Redefining the sky with cutting-edge drone technology. Sustainable, silent, and visually stunning.
              </p>
            </div>

            <div className="flex flex-col items-start gap-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/30">Stay Connected</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-white/30">Inquiries</span>
              <a
                href="mailto:contact@hoverads.in"
                className="text-[20px] md:text-[24px] font-bold tracking-tight hover:text-blue-400 transition-colors flex items-center gap-3"
              >
                <Mail className="w-6 h-6" />
                contact@hoverads.in
              </a>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] text-white/20">
            <p>© 2026 Hoverads. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
