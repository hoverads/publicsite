"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // phase 0: drone moves up
    // phase 1: display unfurls with "The sky is the new billboard"
    // phase 2: text changes to "ON AIR", logo moves to nav
    const t1 = setTimeout(() => setPhase(1), 1500);
    const t2 = setTimeout(() => setPhase(2), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px]"></div>
      </div>
      
      <div className="z-10 flex flex-col items-center w-full px-4 pt-48 md:pt-64">

        {/* Drone Animation Wrapper */}
        <motion.div
          initial={{ y: "100vh", scale: 0.5 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
          className="relative flex flex-col items-center mt-12 w-full max-w-4xl"
        >

          {/* Banner Unfurling */}
          <AnimatePresence>
            {phase >= 1 && (
              <motion.div
                initial={{ height: 0, opacity: 0, rotateX: 90 }}
                animate={{ height: "auto", opacity: 1, rotateX: 0 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                style={{ transformPerspective: 1000, transformOrigin: "top" }}
                className="w-full bg-black/40 backdrop-blur-2xl border border-white-10 p-8 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden z-20 mt-8 md:mt-12"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5"></div>
                
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <h2 className="text-4xl md:text-7xl font-extralight text-white leading-tight">
                    The sky is the new <br />
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-white">
                      billboard
                    </span>
                  </h2>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Call to action arrow floating */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white-60"
      >
        <span className="text-sm tracking-widest uppercase">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white-60 to-transparent"></div>
      </motion.div>
    </section>
  );
}
