import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  tech: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 'dwaara',
    title: 'Dwaara Cafe',
    category: 'Brand Experience',
    year: '2026',
    desc: 'Designed and developed a premium online reservation and cafe experience ecosystem. Combines immersive visual storytelling with a procedural seating layout to drive bookings.',
    tech: 'React / Framer Motion / ThreeJS',
    url: 'https://dwaara-cafe-website.vercel.app/'
  },
  {
    id: 'archilabs',
    title: 'Dwaraa Archilabs',
    category: 'Architecture & Interiors',
    year: '2026',
    desc: 'Designed and developed a luxurious digital showroom concept for an interior design firm. Focuses on premium project portfolios, service clarity, and client consultations.',
    tech: 'React / Tailwind CSS / Framer Motion',
    url: 'https://dwaraa-archilabs.vercel.app/'
  },
  {
    id: 'itlu',
    title: 'ITLU',
    category: 'Fine Dining Experience',
    year: '2026',
    desc: 'Designed and developed a high-end restaurant site for a multi-location vegetarian fine-dining brand. Features curated digital menus, a thali showcase, and a reservation flow.',
    tech: 'HTML / CSS / JavaScript',
    url: 'https://itlu-seven.vercel.app/'
  },
  {
    id: 'marala',
    title: 'Marala Telugu Kitchen',
    category: 'Regional Culinary Platform',
    year: '2026',
    desc: 'Designed and developed an authentic Telugu kitchen platform for traditional regional dining. Highlights signature dishes alongside corporate catering and seating preferences.',
    tech: 'HTML / CSS / JavaScript',
    url: 'https://marala.vercel.app/'
  },
  {
    id: 'aenugu',
    title: 'Aenugu',
    category: 'Luxury Brand Showcase',
    year: '2026',
    desc: 'Designed and developed a premium digital platform celebrating ancestral Telugu culinary heritage. Blends dynamic space storytelling with high-converting reservation paths.',
    tech: 'HTML / CSS / JavaScript',
    url: 'https://aenugu.vercel.app/'
  }
];

interface ProjectCardProps {
  project: Project;
  idx: number;
  currentIndex: number;
  containerHeight: number;
  scrollOffsetVal: MotionValue<number>;
  totalProjects: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  idx,
  currentIndex,
  containerHeight,
  scrollOffsetVal,
  totalProjects
}) => {
  // Calculates circular distance difference to ensure wrapped cards are positioned adjacently
  const getRelativeIndex = (i: number, cur: number, len: number) => {
    let diff = i - cur;
    if (diff > 2) diff -= len;
    else if (diff < -2) diff += len;
    return diff;
  };

  // Continuous position translation derived directly from the animated scrollOffsetVal
  const y = useTransform(scrollOffsetVal, (val: number) => {
    const relIndex = getRelativeIndex(idx, currentIndex, totalProjects);
    return relIndex * containerHeight - val;
  });

  // Dynamic scale factor derived directly to avoid spring-reset lag spikes
  const scale = useTransform(scrollOffsetVal, (val: number) => {
    const relIndex = getRelativeIndex(idx, currentIndex, totalProjects);
    const cardY = relIndex * containerHeight - val;
    const distance = Math.min(Math.abs(cardY), containerHeight);
    return 1 - 0.1 * (distance / containerHeight);
  });

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ y, scale, translateZ: 0 }}
      className="absolute inset-0 w-full h-full flex flex-col justify-between pt-4 pb-6 px-6 lg:pt-6 lg:pb-8 lg:px-8 text-left bg-white/[0.03] backdrop-blur-[6px] select-none cursor-pointer border border-white/[0.02] hover:border-[#FF5F00]/20 transition-colors duration-300 rounded-2xl overflow-hidden [will-change:transform] group"
    >
      {/* Top indicator bar INSIDE each project card */}
      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono pb-1.5 lg:pb-2 shrink-0 border-b border-white/[0.06] w-full pr-2 lg:pr-3">
        <span>PROJECTS_REGISTRY</span>
        
        {/* Dynamic circular redirect link icon */}
        <div className="w-7 h-7 rounded-full border border-[#1E293B] bg-[#050505]/40 flex items-center justify-center text-[#94A3B8] group-hover:border-[#FF5F00] group-hover:bg-[#FF5F00] group-hover:text-black transition-all duration-300 shrink-0">
          <ArrowUpRight className="w-3.5 h-3.5 transition-colors duration-300" />
        </div>
      </div>

      {/* Main card content */}
      <div className="flex-grow flex flex-col justify-center py-1.5 lg:py-2 space-y-2 lg:space-y-2.5 pr-6 lg:pr-8">
        <div>
          <span className="text-[10px] font-mono text-[#FF5F00] uppercase tracking-wider font-bold">
            {project.category}
          </span>
          <h2 className="text-xl lg:text-2xl font-bold text-[#F8FAFC] tracking-tight mt-1">
            {project.title}
          </h2>
        </div>

        <p className="text-xs lg:text-sm text-[#94A3B8] leading-relaxed font-sans">
          {project.desc}
        </p>
      </div>

      {/* Technical specification & index indicator INSIDE each project card */}
      <div className="flex justify-between items-end pt-2 lg:pt-2.5 border-t border-white/[0.06] shrink-0 w-full pr-6 lg:pr-8">
        <div className="space-y-1">
          <div className="text-[10px] font-mono text-[#FF5F00] font-bold">
            TECH // {project.tech}
          </div>
          <div className="text-[8.5px] font-mono text-[#94A3B8]/40 uppercase tracking-wide">
            Click anywhere to launch
          </div>
        </div>

        {/* Index placed in the right bottom corner */}
        <div className="text-[10px] font-mono text-[#94A3B8] tracking-widest font-bold">
          {String(idx + 1).padStart(2, '0')} // {String(totalProjects).padStart(2, '0')}
        </div>
      </div>
    </motion.a>
  );
};

export const SelectedWorkCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState(400);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const lastTransitionTime = useRef<number>(0);
  const isHovered = useRef(false);

  // Short cooling-down window (ms) to allow rapid transitions without getting stuck
  const COOL_DOWN_MS = 300;

  // Motion value to track position offsets
  const scrollOffsetVal = useMotionValue(0);

  // Snappy, hardware-friendly tween configuration for locked-frame vertical glides
  const transitionConfig = {
    type: 'tween' as const,
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1] as const // Sleek easeOutExpo cubic-bezier
  };

  // Calculate the vertical indicator dot position in real-time, matching the scroll progress
  // spacing = 16px (6px dot size + 10px gap), padding top = 4px (py-[4px])
  // Interpolates directly between currentIndex and targetIndex to slide smoothly without jumps
  const indicatorY = useTransform(scrollOffsetVal, (val: number) => {
    const len = projects.length;
    if (val === 0) {
      return 4 + currentIndex * 16;
    }

    const isForward = val > 0;
    const targetIndex = isForward 
      ? (currentIndex + 1) % len 
      : (currentIndex - 1 + len) % len;

    const progress = Math.min(Math.abs(val) / containerHeight, 1);
    const dotIndex = currentIndex + (targetIndex - currentIndex) * progress;

    return 4 + dotIndex * 16;
  });

  useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Autoplay Effect (4.5s Interval)
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      // Loop infinitely
      if (!isAnimating.current && !touchStart && !isHovered.current) {
        handleNext();
      }
    }, 4500);

    return () => clearInterval(autoplayInterval);
  }, [currentIndex, containerHeight, touchStart]);

  const handleNext = () => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      animate(scrollOffsetVal, containerHeight, transitionConfig).then(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        scrollOffsetVal.set(0);
        isAnimating.current = false;
      });
    }
  };

  const handlePrev = () => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      animate(scrollOffsetVal, -containerHeight, transitionConfig).then(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        scrollOffsetVal.set(0);
        isAnimating.current = false;
      });
    }
  };

  const handleScrollSnap = () => {
    const val = scrollOffsetVal.get();
    const threshold = containerHeight * 0.25;

    if (val > threshold) {
      isAnimating.current = true;
      animate(scrollOffsetVal, containerHeight, transitionConfig).then(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        scrollOffsetVal.set(0);
        isAnimating.current = false;
      });
    } else if (val < -threshold) {
      isAnimating.current = true;
      animate(scrollOffsetVal, -containerHeight, transitionConfig).then(() => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
        scrollOffsetVal.set(0);
        isAnimating.current = false;
      });
    } else {
      isAnimating.current = true;
      animate(scrollOffsetVal, 0, transitionConfig).then(() => {
        isAnimating.current = false;
      });
    }
  };

  const handleGoTo = (targetIndex: number) => {
    if (targetIndex === currentIndex || isAnimating.current) return;

    const steps = Math.abs(targetIndex - currentIndex);
    const directionSign = targetIndex > currentIndex ? 1 : -1;

    let stepCount = 0;
    const runStep = () => {
      if (stepCount >= steps) return;
      isAnimating.current = true;

      const nextOffset = directionSign * containerHeight;
      animate(scrollOffsetVal, nextOffset, transitionConfig).then(() => {
        setCurrentIndex((prev) => (prev + directionSign + projects.length) % projects.length);
        scrollOffsetVal.set(0);
        stepCount++;
        if (stepCount < steps) {
          runStep();
        } else {
          isAnimating.current = false;
        }
      });
    };

    runStep();
  };

  const handleWheel = (e: React.WheelEvent) => {
    const now = Date.now();

    // Ignore events if currently animating a snap, or during transition cooling-down
    if (isAnimating.current || now - lastTransitionTime.current < COOL_DOWN_MS) {
      return;
    }

    // Set a noise threshold for trackpad delta sensitivity
    if (Math.abs(e.deltaY) < 10) return;

    if (e.deltaY > 0) {
      lastTransitionTime.current = now;
      handleNext();
    } else if (e.deltaY < 0) {
      lastTransitionTime.current = now;
      handlePrev();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isAnimating.current) return;
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null || isAnimating.current) return;
    const touchEnd = e.targetTouches[0].clientY;
    const diff = touchStart - touchEnd;

    let nextVal = diff;
    const minVal = -containerHeight;
    const maxVal = containerHeight;

    if (nextVal < minVal) nextVal = minVal;
    if (nextVal > maxVal) nextVal = maxVal;

    scrollOffsetVal.set(nextVal);
  };

  const handleTouchEnd = () => {
    if (isAnimating.current) return;
    setTouchStart(null);
    handleScrollSnap();
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden h-full w-full flex flex-col justify-between group select-none text-white bg-transparent"
    >
      {/* Background glow to emphasize glassmorphic refractions */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-[#FF5F00]/8 blur-[70px] pointer-events-none z-0" />

      {/* Main card viewport container */}
      <div className="relative flex-1 w-full overflow-hidden z-10">
        {projects.map((project, idx) => {
          // In a circular carousel, adjacent cards wrap boundaries
          const getRelativeIndex = (i: number, cur: number, len: number) => {
            let diff = i - cur;
            if (diff > 2) diff -= len;
            else if (diff < -2) diff += len;
            return diff;
          };
          
          const relIndex = getRelativeIndex(idx, currentIndex, projects.length);
          if (Math.abs(relIndex) > 1) return null;

          return (
            <ProjectCard
              key={project.id}
              project={project}
              idx={idx}
              currentIndex={currentIndex}
              containerHeight={containerHeight}
              scrollOffsetVal={scrollOffsetVal}
              totalProjects={projects.length}
            />
          );
        })}
      </div>

      {/* Vertical Navigation Dots and Arrows */}
      <div className="absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20">
        {/* Absolute coordinate track for dot indicators (78px height) */}
        <div className="relative w-1.5 h-[78px] shrink-0">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleGoTo(idx)}
              style={{ top: `${4 + idx * 16}px` }}
              className="absolute left-0 w-1.5 h-1.5 rounded-full bg-[#94A3B8]/20 hover:bg-[#94A3B8]/40 transition-colors duration-300 cursor-pointer p-0 border-none m-0 outline-none block"
            />
          ))}

          {/* Solid orange active indicator sliding continuously in real-time */}
          <motion.div
            style={{ y: indicatorY }}
            className="absolute left-0 top-0 w-1.5 h-1.5 rounded-full bg-[#FF5F00] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};
