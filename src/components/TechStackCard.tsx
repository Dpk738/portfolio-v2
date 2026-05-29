import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1-3.5 3.5V2z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    <path d="M12 9h3.5a3.5 3.5 0 1 1-3.5 3.5V9z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
  </svg>
);

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.5" />
  </svg>
);

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3a6.5 6.5 0 0 0-4.3 9.4L6 18.5a1 1 0 0 0 1.4 1.3l6.1-1.7A6.5 6.5 0 0 0 17.8 8.7L12 3z" />
    <path d="M12 21a6.5 6.5 0 0 0 4.3-9.4l1.7-6.1a1 1 0 0 0-1.4-1.3l-6.1 1.7a6.5 6.5 0 0 0-4.3 9.4L12 21z" />
  </svg>
);

const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M8 9h4" />
    <path d="M10 9v7" />
    <path d="M17 10.5c0-.8-.7-1.5-1.5-1.5h-1c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5h-1.5" />
  </svg>
);

const VercelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3L2 21h20L12 3z" />
  </svg>
);

const NodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2z" />
    <path d="M12 22V12" />
    <path d="M12 12L4 7.5" />
    <path d="M12 12l8-4.5" />
  </svg>
);

const FramerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 2h14l-7 7H5V2z" />
    <path d="M12 9h7v7l-7 7v-7H5l7-7z" />
  </svg>
);

const techItems = [
  { name: 'Figma', icon: FigmaIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Framer Motion', icon: FramerIcon },
  { name: 'Tailwind CSS', icon: TailwindIcon },
  { name: 'TypeScript', icon: TypeScriptIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'Vercel', icon: VercelIcon },
  { name: 'AI / ML', icon: Cpu }
];

export const TechStackCard: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden h-full w-full flex flex-col justify-between select-none text-white bg-transparent">
      {/* Card Header */}
      <div className="flex justify-between items-center text-[8.5px] uppercase tracking-wider text-[#94A3B8] font-mono px-3.5 sm:px-5 pt-4 pb-2 shrink-0 w-full border-b border-[#94A3B8]/45">
        <span>TECH_STACK</span>
        <span className="text-right text-[#94A3B8]/80 font-mono tracking-wider truncate max-w-[110px]">
          {hoveredTech ? hoveredTech : 'DECLARED_OK'}
        </span>
      </div>

      {/* Grid of Raw Logos */}
      <div className="flex-1 w-full grid grid-cols-4 grid-rows-2">
        {techItems.map((tech, idx) => {
          const Icon = tech.icon;
          const isNotFirstCol = idx % 4 !== 0;
          const isFirstRow = idx < 4;
          return (
            <motion.div
              key={tech.name}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              className={`group flex items-center justify-center w-full h-full border-[#94A3B8]/45 transition-all duration-300 py-2 ${isNotFirstCol ? 'border-l' : ''
                } ${isFirstRow ? 'border-b' : ''}`}
            >
              <Icon className="w-[22px] h-[22px] text-[#94A3B8] group-hover:text-[#ff5f00] transition-colors duration-300" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
