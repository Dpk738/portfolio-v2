import { motion } from 'framer-motion';
import { IntroCard } from './components/IntroCard';
import { ClockCard } from './components/ClockCard';
import { TechStackCard } from './components/TechStackCard';
import { StatusCard } from './components/StatusCard';
import { SelectedWorkCard } from './components/SelectedWorkCard';
import { VisualCard } from './components/VisualCard';
import { AboutCard } from './components/AboutCard';
import { ContactCard } from './components/ContactCard';
import { AvailabilityCard } from './components/AvailabilityCard';
import { CaseStudyCard } from './components/CaseStudyCard';
import { SciFiGraphCard } from './components/SciFiGraphCard';

const cardVariants = {
  initial: { opacity: 0, scale: 0.98, y: 10 },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const
    }
  }),
  hover: {
    y: -2,
    scale: 1.006,
    boxShadow: '0 10px 30px -15px rgba(0, 0, 0, 0.8)', // clean dark drop shadow
    borderColor: '#FF5F00', // brand orange border highlight
    transition: {
      type: 'spring' as const,
      stiffness: 400,
      damping: 30
    }
  }
};

function App() {
  return (
    <div className="relative min-h-screen md:h-screen w-screen bg-[#050505] text-[#F8FAFC] font-sans flex flex-col items-center justify-center overflow-y-auto md:overflow-hidden p-4 md:p-5 lg:p-6 select-none">
      {/* Main Grid Wrapper (Edge-to-Edge Desktop Layout) */}
      <div className="w-full h-full flex items-center justify-center">
        <main className="w-full h-full grid grid-cols-2 md:grid-cols-12 md:grid-rows-12 gap-4">
          
          {/* Card 1: Intro Card (6x4) */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-5 rounded-2xl border border-[#FF5F00] cursor-default bg-[#FF5F00] overflow-hidden"
          >
            <IntroCard />
          </motion.div>

          {/* Card 2: Live Clock (4x2) */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-1 md:col-start-7 md:col-end-11 md:row-start-1 md:row-end-3 rounded-2xl border border-[#475569] cursor-default bg-[#000000] overflow-hidden"
          >
            <ClockCard />
          </motion.div>

          {/* Card 3: Tech Stack (2x2) */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-1 md:col-start-11 md:col-end-13 md:row-start-1 md:row-end-3 rounded-2xl border border-[#475569] cursor-default bg-[#000000] overflow-hidden"
          >
            <TechStackCard />
          </motion.div>

          {/* Card 4: Status (6x2) */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-7 md:col-end-13 md:row-start-3 md:row-end-5 rounded-2xl border border-[#475569] cursor-default bg-[#000000] overflow-hidden"
          >
            <StatusCard />
          </motion.div>

          {/* Card 5a: Selected Work (4x4) */}
          <motion.div
            custom={4}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-1 md:col-end-5 md:row-start-5 md:row-end-9 rounded-2xl border border-[#475569] cursor-default bg-transparent overflow-hidden min-h-[280px] md:min-h-0"
          >
            <SelectedWorkCard />
          </motion.div>

          {/* Card 5b: Sci-Fi Telemetry Graph (3x4) */}
          <motion.div
            custom={5}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-5 md:col-end-8 md:row-start-5 md:row-end-9 rounded-2xl border border-[#475569] cursor-default bg-[#000000] overflow-hidden"
          >
            <SciFiGraphCard />
          </motion.div>

          {/* Card 9: Availability Card (3x4) */}
          <motion.div
            custom={8}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-1 md:col-end-4 md:row-start-9 md:row-end-13 rounded-2xl border border-[#FF5F00] cursor-default bg-[#FF5F00] overflow-hidden"
          >
            <AvailabilityCard />
          </motion.div>

          {/* Card 10: Case Study Card (4x4) */}
          <motion.div
            custom={9}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-4 md:col-end-8 md:row-start-9 md:row-end-13 rounded-2xl border border-[#475569] cursor-default bg-[#000000] overflow-hidden"
          >
            <CaseStudyCard />
          </motion.div>

          {/* Card 6: Visual Canvas Card (3x8) (Generative Radar) */}
          <motion.div
            custom={5}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-8 md:col-end-11 md:row-start-5 md:row-end-13 rounded-2xl border border-[#475569] cursor-default bg-[#000000] overflow-hidden min-h-[260px] md:min-h-0"
          >
            <VisualCard />
          </motion.div>

          {/* Card 7: About Card (2x6) */}
          <motion.div
            custom={6}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-11 md:col-end-13 md:row-start-5 md:row-end-11 rounded-2xl border border-[#FF5F00] cursor-default bg-[#FF5F00] overflow-hidden"
          >
            <AboutCard />
          </motion.div>

          {/* Card 8: Contact Card (2x2) */}
          <motion.div
            custom={7}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="col-span-full md:col-start-11 md:col-end-13 md:row-start-11 md:row-end-13 rounded-2xl border border-[#475569] cursor-default bg-[#000000] overflow-hidden"
          >
            <ContactCard />
          </motion.div>

        </main>
      </div>
    </div>
  );
}

export default App;
