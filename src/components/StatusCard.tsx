import React from 'react';

export const StatusCard: React.FC = () => {
  return (
    <div className="relative overflow-hidden h-full w-full p-6 flex items-center justify-between group select-none text-white bg-transparent">
      <div className="flex items-center gap-4 flex-1 overflow-hidden pr-2">
        {/* Pulsing indicator dot (solid orange) */}
        <div className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5F00] opacity-45" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5F00]" />
        </div>

        <div className="flex flex-col overflow-hidden">
          <span className="text-xs sm:text-sm font-medium text-[#F8FAFC] tracking-tight truncate">
            Currently building modern digital experiences.
          </span>
          <span className="text-[9px] text-[#94A3B8] font-mono uppercase tracking-widest mt-0.5 truncate">
            AVAILABILITY // OPEN_TO_CONTRACT
          </span>
        </div>
      </div>

      <div className="hidden sm:block text-[9px] text-[#94A3B8] font-mono text-right shrink-0">
        <span>SYS_STAT // OK</span>
      </div>
    </div>
  );
};
