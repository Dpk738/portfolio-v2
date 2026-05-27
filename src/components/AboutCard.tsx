import React from 'react';

export const AboutCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-full w-full rounded-2xl border border-[#FF5F00] bg-[#FF5F00] flex flex-col justify-between group select-none text-black">
      <div className="text-[9px] uppercase tracking-wider text-black/75 font-mono px-4 pt-4 pb-1 shrink-0 font-bold">
        MISSION_STATEMENT
      </div>

      <div className="my-auto flex-1 overflow-y-auto no-scrollbar py-2 px-4">
        <p className="text-xs sm:text-sm xl:text-base text-black font-medium leading-relaxed tracking-tight font-sans">
          Design is not just visual; it is behavioral. I believe in interfaces that feel invisible yet tactile, stripping away the noise to let the system speak. Specializing in designing calibrated design systems, bespoke brand platforms, and high-performance React frontends. Excellence lies in precision.
        </p>
      </div>

      <div className="text-[8.5px] text-black/75 font-mono flex justify-between shrink-0 px-4 pb-4 pt-1 border-t border-black/10 mt-2 font-bold">
        <span>SPEC // DEEPAK</span>
        <span>EDITION 2026</span>
      </div>
    </div>
  );
};
