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
  },
  {
    id: 'archilabs',
    title: 'Dwaraa Archilabs',
    category: 'Architecture & Interiors',
    year: '2026',
    role: 'Full-Stack Design & Development',
    content: "Dwaara Archilabs is an emerging architecture and interior design firm based in Hyderabad. After discovering that the brand's website consisted only of a placeholder landing page, I independently designed and developed a premium website concept to demonstrate how a stronger digital presence could elevate client trust and brand perception.\n\nThe experience was built around luxury positioning, project storytelling, service clarity, and consultation-driven conversions. Through refined typography, immersive imagery, and structured content architecture, the concept transforms Dwaara from a local firm into a digitally credible design studio.\n\nThis project highlights my ability to identify business opportunities and translate them into impactful web experiences."
  },
  {
    id: 'itlu',
    title: 'ITLU',
    category: 'Fine Dining Experience',
    year: '2026',
    role: 'UX Design & Frontend Development',
    content: 'ITLU is a classic South Indian vegetarian fine-dining brand with premium locations in Jubilee Hills and Financial District, Hyderabad. I designed and built a full-featured brand website that combines deep heritage storytelling with conversion-focused user experiences.\n\nThe culinary concept is rooted in the traditions of five southern states, drawing from over 50 family recipes. I structured the page flow to reflect this heritage, leading with a visual preview of signature items like Neyyi Karam Dosa and a showcase of the Rajabhojanam Thali (a royal feast served in custom brassware). To handle their extensive offerings, I implemented an elegant, interactive menu modal featuring dedicated categories like "Ammamma Specials" and "Jain Specials."\n\nTo drive business growth, the site integrates a tailored catering inquiry workflow for premium events (highlighting live dosa counters and traditional brass layouts) alongside location-specific contact channels and guest reviews. The centerpiece of the site is an intuitive, two-step table reservation system that lets guests choose their preferred venue and input dining details, providing a seamless booking confirmation loop that positions ITLU as a premium culinary destination.'
  },
  {
    id: 'marala',
    title: 'Marala Telugu Kitchen',
    category: 'Traditional Regional Cuisine',
    year: '2026',
    role: 'Creative Direction & Full-Stack Development',
    content: 'Marala Telugu Kitchen is an authentic regional restaurant in Gachibowli’s Financial District, celebrating the distinct culinary legacies of Andhra Pradesh and Telangana. The project centers around a nostalgic "Marala" (meaning "Again" in Telugu) narrative, evoking memories of home-cooked meals and regional festivals.\n\nI designed and developed a brand-forward experience that highlights their signature dishes (such as the multi-course Rajamahendravaram Bhojanam and traditional Atreyapuram Pootharekulu) with pricing and detailed ingredient spotlights. Understanding their target audience in the tech corridor, I implemented a comprehensive FAQ module addressing corporate catering and lunchbox delivery needs.\n\nFor reservations, I created a custom interactive booking modal featuring advanced seating-preference selectors (traditional banana leaf dining, private dining rooms, or corporate group blocks). This tailored UX layout successfully streams individual diners and corporate events into distinct conversion funnels, maximizing seat capacity and streamlining the booking process for both casual diners and business clients.'
  },
  {
    id: 'aenugu',
    title: 'Aenugu',
    category: 'Luxury Fine Dining',
    year: '2026',
    role: 'Creative Web Design & UX Engineering',
    content: 'Aenugu is an ultra-premium fine-dining destination in Bandlaguda, Hyderabad, that elevates traditional Telugu culinary heritage to a luxury experience. Drawing inspiration from its name—symbolizing strength, grace, and heritage—the site is engineered to reflect ancestral cooking techniques combined with warm, attentive hospitality.\n\nI built a highly visual, modern site architecture that showcases Aenugu\'s signature culinary elements, such as clay and brass slow-cooking techniques, and premium dishes like Gongura Mamsam and the 14-course Royal Rajahmundry Thali. The website features an interactive architectural walkthrough highlighting their physical spaces—including the "Manduva Logili" (open courtyard), carved wooden pillars, and custom terracotta/terrazzo masonry—creating a digital preview of the restaurant’s physical elegance.\n\nThe reservation experience uses a bespoke booking module optimized for fine-dining occasions, enabling guests to request specific timing, seat placements, and state dietary or celebratory notes. Through smooth motion layouts and heritage-infused brand aesthetics, the project establishes a cohesive digital footprint that translates Aenugu’s offline luxury into a high-converting online presence.'
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
