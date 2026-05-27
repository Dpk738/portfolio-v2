import React, { useEffect, useState } from 'react';
import { Compass } from 'lucide-react';

export const ClockCard: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const seconds = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    second: '2-digit',
  });

  const parts = formattedTime.split(' ');
  const hm = parts[0];
  const ampm = parts[1];

  const secVal = time.getSeconds();

  return (
    <div className="relative overflow-hidden h-full w-full flex flex-col justify-between group select-none text-white bg-transparent">
      {/* Top Meta info */}
      <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono px-6 pt-4 pb-1 shrink-0">
        <span>LOC_TIME</span>
        <span className="flex items-center gap-1">
          <Compass className="w-3.5 h-3.5 text-[#FF5F00] opacity-90 group-hover:rotate-180 transition-transform duration-1000" />
          HYD // IND
        </span>
      </div>

      {/* Main clock readout */}
      <div className="my-auto flex flex-col justify-center py-1.5 px-6 flex-1 overflow-y-auto no-scrollbar">
        <div className="flex items-baseline text-2xl lg:text-3xl font-semibold text-[#F8FAFC] font-mono tracking-tighter">
          <span>{hm}</span>
          <span className="text-[#FF5F00] text-base lg:text-lg ml-0.5 font-light animate-pulse">:</span>
          <span className="text-base lg:text-lg text-[#94A3B8] ml-0.5">{seconds}</span>
          <span className="text-[10px] uppercase text-[#94A3B8] ml-2 tracking-widest font-mono">{ampm}</span>
        </div>
      </div>

      {/* Footer timezone description */}
      <div className="flex justify-between items-center text-[10px] text-[#94A3B8] font-mono px-6 pb-4 pt-1 border-t border-[#1E293B]/40 mt-1 shrink-0">
        <span>IST // UTC+5.5</span>
        <div className="w-20 h-[3px] bg-[#1E293B] overflow-hidden rounded-full">
          <div 
            className="h-full bg-[#FF5F00] transition-all duration-300 ease-out"
            style={{ width: `${((secVal + 1) / 60) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
