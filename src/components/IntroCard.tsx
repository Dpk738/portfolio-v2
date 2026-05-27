import React from 'react';
import { motion } from 'framer-motion';

export const IntroCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-full w-full rounded-2xl border border-[#FF5F00] bg-[#FF5F00] flex flex-col justify-between group select-none text-black">
      {/* Top bar with spaceship interface micro-typography */}
      <div className="relative z-10 flex justify-between items-center text-[10px] uppercase tracking-widest text-black/75 font-mono p-5 lg:p-6 pb-0">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          SYS // ACTIVE_
        </span>
        <span className="flex items-center gap-1.5 font-bold font-mono">
          CORE // v2.6.0
        </span>
      </div>

      {/* Main Content */}
      <div className="relative z-10 my-auto flex flex-col justify-center px-5 lg:px-6 py-2">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[30px] sm:text-[38px] md:text-[32px] lg:text-[38px] xl:text-[44px] font-bold leading-[0.95] text-black tracking-tighter uppercase font-sans"
        >
          DEEPAK<br />SRINIVAS
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 space-y-1"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-black font-bold">
            UI/UX & Digital Experience Design
          </p>
          <p className="text-xs sm:text-sm text-black/80 max-w-sm font-sans leading-relaxed tracking-tight font-medium">
            Architecting interactive digital products at the intersection of aesthetics, code, and user behavioral analytics. Specializing in tactile, calibrated interfaces.
          </p>
        </motion.div>
      </div>

      {/* Footer info */}
      <div className="relative z-10 flex justify-between items-end p-5 lg:p-6 pt-0 mt-2 border-t border-black/10">
        <div className="flex flex-col text-[9px] text-black/75 leading-tight font-mono font-bold">
          <span>LAT: 17.3850° N</span>
          <span>LNG: 78.4867° E</span>
        </div>
        <div className="text-[9px] text-black/75 font-mono font-bold">
          SEC // 001
        </div>
      </div>
    </div>
  );
};
