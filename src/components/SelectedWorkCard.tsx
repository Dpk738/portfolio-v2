import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'dwaara',
    title: 'Dwaara Cafe',
    category: 'Brand Experience',
    year: '2026',
    desc: 'Bespoke online reservation and sensory cafe design ecosystem. Implements fully procedural seating grids and fluid web interactions.',
    tech: 'React / Framer Motion / ThreeJS',
    url: 'https://dwaara-cafe-website.vercel.app/'
  }
];

export const SelectedWorkCard: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <div className="relative overflow-hidden h-full w-full flex flex-col justify-between group select-none text-white bg-transparent">
      
      {/* Top indicator bar */}
      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono px-6 lg:px-8 pt-6 lg:pt-8 pb-2 shrink-0">
        <span>PROJECTS_REGISTRY</span>
        <span>INDEX // 03</span>
      </div>

      {/* Main scrollable project list */}
      <div className="flex-1 overflow-y-auto no-scrollbar py-1 px-6 lg:px-8">
        {projects.map((project, idx) => (
          <a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative py-3 border-b border-[#1E293B]/40 last:border-b-0 cursor-pointer flex justify-between items-center group/row block"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(0)}
          >
            <div className="relative z-10 flex flex-col overflow-hidden mr-3">
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono text-[#FF5F00] tracking-wider font-bold">
                  0{idx + 1}
                </span>
                <h3 className="text-sm font-semibold text-[#F8FAFC] group-hover/row:text-white transition-colors duration-300 truncate">
                  {project.title}
                </h3>
              </div>
              <span className="text-[10px] text-[#94A3B8] font-sans mt-0.5 ml-4 truncate">
                {project.category}
              </span>
            </div>

            {/* Year & Arrow indicator */}
            <div className="relative z-10 flex items-center gap-3 shrink-0">
              <span className="text-[9px] font-mono text-[#94A3B8] hidden sm:block">
                {project.year}
              </span>
              <div className="w-7 h-7 rounded-full border border-[#1E293B] bg-[#050505]/40 flex items-center justify-center group-hover/row:border-[#FF5F00] group-hover/row:bg-[#FF5F00] group-hover/row:text-black transition-all duration-300 text-[#94A3B8]">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/row:text-black transition-colors duration-300" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Bottom context screen / scrollable description panel */}
      <div className="mx-6 lg:mx-8 mb-6 lg:mb-8 pt-3 border-t border-[#1E293B]/40 min-h-[64px] flex flex-col justify-center text-[10px] text-[#94A3B8] font-mono shrink-0">
        <AnimatePresence mode="wait">
          {hoveredIndex !== null ? (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="space-y-1"
            >
              <div className="text-[#F8FAFC] tracking-tight leading-normal font-sans text-xs">
                {projects[hoveredIndex].desc}
              </div>
              <div className="text-[8.5px] text-[#FF5F00] tracking-wider font-mono font-bold">
                TECH: {projects[hoveredIndex].tech}
              </div>
            </motion.div>
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="italic text-[9px] text-[#94A3B8]/60 text-center"
            >
              Select project row to display system specifications.
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
