import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  content: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'dwaara',
    title: 'Dwaara Cafe',
    category: 'Brand Experience',
    year: '2026',
    role: 'Branding & UI/UX Strategy',
    content: 'Dwaara Cafe is a premium South Indian tiffin café concept website designed to elevate the brand’s digital identity through a modern yet culturally rooted experience.\n\nThe project focused on combining traditional South Indian warmth with contemporary UI aesthetics using immersive visuals, premium typography, and conversion-focused layouts.\n\nI designed a fully responsive experience featuring curated menu storytelling, modern café branding, intuitive navigation, and seamless mobile optimization.\n\nThe interface was crafted to emotionally reflect comfort, authenticity, and hygienic dining while improving discoverability and customer trust online.\n\nBuilt using modern frontend workflows, the project showcases my approach toward blending branding, UI/UX strategy, motion design, and experiential web storytelling.'
  }
];

export const CaseStudyCard: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeCase = caseStudies.find((c) => c.id === activeId);

  return (
    <div className="relative overflow-hidden h-full w-full flex flex-col justify-between group select-none text-white bg-transparent font-sans">
      <AnimatePresence mode="wait">
        {!activeCase ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between h-full w-full"
          >
            {/* Header */}
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono px-6 pt-6 pb-2 shrink-0">
              <span>CASE_STUDIES</span>
              <span>INDEX // 02</span>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto no-scrollbar py-2 px-6">
              <div className="flex flex-col divide-y divide-[#1E293B]/40">
                {caseStudies.map((study) => (
                  <button
                    key={study.id}
                    onClick={() => setActiveId(study.id)}
                    className="w-full text-left py-3 cursor-pointer flex justify-between items-center group/row"
                  >
                    <div className="flex flex-col pr-3">
                      <h3 className="text-sm font-semibold text-[#F8FAFC] group-hover/row:text-[#FF5F00] transition-colors duration-300">
                        {study.title}
                      </h3>
                      <span className="text-[10px] text-[#94A3B8] font-sans mt-0.5">
                        {study.category} • {study.year}
                      </span>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-[#1E293B] bg-[#050505]/40 flex items-center justify-center group-hover/row:border-[#FF5F00] group-hover/row:bg-[#FF5F00] group-hover/row:text-black transition-all duration-300 text-[#94A3B8]">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/row:text-black transition-colors duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[9px] text-[#94A3B8]/60 font-mono px-6 pb-6 pt-2 border-t border-[#1E293B]/40 mt-2 shrink-0">
              <span>ARCHIVE // ACTIVE</span>
              <span>SELECT_PROJECT</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between h-full w-full"
          >
            {/* Expanded Header with Back Action */}
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono px-6 pt-6 pb-2 shrink-0">
              <span className="text-[#FF5F00] font-bold">CASE // {activeCase.title}</span>
              <button
                onClick={() => setActiveId(null)}
                className="flex items-center gap-1.5 cursor-pointer text-[#F8FAFC] hover:text-[#FF5F00] transition-colors duration-300 font-bold"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>BACK</span>
              </button>
            </div>

            {/* Expanded Content Scrollable */}
            <div className="flex-1 overflow-y-auto no-scrollbar py-2 px-6 text-left">
              <div className="space-y-3">
                <div className="text-[10px] font-mono uppercase text-[#94A3B8]">
                  ROLE: <span className="text-[#F8FAFC] font-semibold">{activeCase.role}</span>
                </div>
                <div className="text-[11px] sm:text-xs text-[#E2E8F0] font-sans leading-relaxed whitespace-pre-line tracking-tight">
                  {activeCase.content}
                </div>
              </div>
            </div>

            {/* Expanded Footer */}
            <div className="flex justify-between items-center text-[9px] text-[#94A3B8]/60 font-mono px-6 pb-6 pt-2 border-t border-[#1E293B]/40 mt-2 shrink-0">
              <span>{activeCase.year} // SYSTEM_READOUT</span>
              <span>END_OF_FILE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
