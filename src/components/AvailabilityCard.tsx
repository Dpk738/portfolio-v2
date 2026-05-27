import React from 'react';

export const AvailabilityCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-full w-full rounded-2xl border border-[#FF5F00] bg-[#FF5F00] flex flex-col justify-between group select-none text-black">
      
      {/* Top indicator bar */}
      <div className="flex justify-between items-center text-[9px] uppercase tracking-wider text-black/75 font-mono px-4 pt-4 pb-1 shrink-0 font-bold">
        <span>AVAILABILITY</span>
        <span>STATUS // OPEN</span>
      </div>

      {/* List content */}
      <div className="my-auto flex-1 overflow-y-auto no-scrollbar py-2 px-4 text-left flex flex-col justify-center">
        <h3 className="text-sm font-bold text-black tracking-tight mb-2 font-sans">
          Available for:
        </h3>
        <ul className="space-y-1.5 text-xs sm:text-sm text-black/85 font-sans font-medium">
          <li className="flex items-center gap-2">
            <span className="text-black font-mono text-[11px] font-bold">+</span>
            <span>Brand websites</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-black font-mono text-[11px] font-bold">+</span>
            <span>Product design</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-black font-mono text-[11px] font-bold">+</span>
            <span>UI systems</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-black font-mono text-[11px] font-bold">+</span>
            <span>Interactive experiences</span>
          </li>
        </ul>
      </div>

      {/* Footer bar */}
      <div className="text-[8.5px] text-black/75 font-mono px-4 pb-4 pt-1 border-t border-[#1E293B]/10 mt-2 shrink-0 font-bold">
        <span>SCHEDULER // ACTIVE</span>
      </div>
    </div>
  );
};
