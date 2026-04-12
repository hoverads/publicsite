"use client";

import { MapPin, Briefcase, Clock, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersPage() {
  const openings = [
    {
      title: "Business Development Associate",
      location: "Hybrid / Remote",
      type: "Full-time",
      department: "Sales & Marketing",
      description: "Drive growth and build relationships with premium brands. You will be pitching our sky billboards and securing high-value advertising contracts.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSd_IOBgXmx-Aj1iDervw_czTrdD6Z5s7ELeqvF8kl-qWcEAmg/viewform?usp=dialog"
    },
    {
      title: "Drone Pilot",
      location: "On-site (Various)",
      type: "Contract / Full-time",
      department: "Operations",
      description: "Command state-of-the-art P15 resolution drone fleets. Maintain absolute safety and precision during spectacular aerial display events.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSckQd_C581arHMMuilYEXrU2OtBRvoKyZuX7GG8NjbI4mvNjg/viewform?usp=dialog"
    },
    {
      title: "Co-Pilot / Safety Observer",
      location: "On-site (Various)",
      type: "Contract / Full-time",
      department: "Operations",
      description: "Act as the critical second set of eyes on the flight deck. Monitor airspace, assist in pre-flight checks and ensure compliance with strict SOPs.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSckQd_C581arHMMuilYEXrU2OtBRvoKyZuX7GG8NjbI4mvNjg/viewform?usp=dialog"
    },
    {
      title: "Video Editor & Animator",
      location: "Remote",
      type: "Full-time",
      department: "Creative Studio",
      description: "Design mesmerising 3D animations, light show interpolations, and high impact digital marketing videos for our aerial displays.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdMWvRuir7x59WbiLX4Lzx1ej8AJ0TrF3adMbIbueVuj0ciDQ/viewform?usp=dialog"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black relative">
      {/* Background flare */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extralight text-white mb-6"
          >
            Shape the <span className="font-bold">Skyline</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white-60 leading-relaxed"
          >
            We are building the future of aerial advertising and immersive drone displays. Join our dynamic team and redefine what&apos;s natively possible.
          </motion.p>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {openings.map((job, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              key={index}
              className="bg-neutral-900/50 backdrop-blur-xl border border-white-10 p-8 md:p-10 rounded-3xl hover:bg-neutral-900 hover:border-white-20 transition-all flex flex-col h-full group"
            >
              <div className="mb-8 flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-white leading-tight group-hover:text-red-400 transition-colors">{job.title}</h2>
                  <span className="shrink-0 px-4 py-1.5 bg-black/50 text-white-80 rounded-full text-xs uppercase tracking-widest font-semibold border border-white-10">
                    {job.department}
                  </span>
                </div>

                <div className="flex flex-wrap gap-6 text-white-60 text-sm mb-8 font-medium">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" /> {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-500" /> {job.type}
                  </span>
                </div>

                <p className="text-white-80 text-lg leading-relaxed">
                  {job.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white-10 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full sm:w-auto bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-neutral-200 transition-colors group/btn"
                >
                  <FileText className="w-5 h-5 mr-3 shrink-0" />
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                </a>
                <p className="text-sm text-white-60 sm:ml-4">
                  Send your resume and portfolio.
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA back */}
        <div className="mt-20 text-center">
          <Link href="/" className="inline-flex items-center px-6 py-3 border border-white-20 rounded-full text-white-60 hover:text-white hover:bg-white/5 transition-all">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
