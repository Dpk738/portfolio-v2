import React, { useEffect, useState, useRef } from 'react';
import { Activity } from 'lucide-react';

export const SciFiGraphCard: React.FC = () => {
  // Live astrophysical data states
  const [earthOrbitAngle, setEarthOrbitAngle] = useState<number>(0);
  const [earthSunDistance, setEarthSunDistance] = useState<number>(1.000);
  const [moonPhaseAngle, setMoonPhaseAngle] = useState<number>(0);
  const [moonPhaseName, setMoonPhaseName] = useState<string>('New Moon');
  const [timeStr, setTimeStr] = useState<string>('00:00:00');
  
  // High-speed telemetry radar sweep
  const [sweepAngle, setSweepAngle] = useState<number>(0);

  const frameRef = useRef<number | null>(null);


  
  useEffect(() => {
    const calculateTelemetry = () => {
      const now = new Date();

      // 1. Calculate Day of the Year
      const start = new Date(now.getFullYear(), 0, 0);
      const diff = now.getTime() - start.getTime();
      const oneDay = 1000 * 60 * 60 * 24;
      const dayOfYear = Math.floor(diff / oneDay);

      // 2. Earth Orbital Angle (approx 360 / 365 degrees per day)
      const earthAngle = (dayOfYear / 365.25) * 360;
      setEarthOrbitAngle(earthAngle);

      // 3. Earth-Sun Distance in AU (Perihelion on Jan 3, eccentricity e = 0.0167)
      const daysSincePerihelion = (dayOfYear >= 3) ? (dayOfYear - 3) : (365 - 3 + dayOfYear);
      const meanAnomalyRad = (2 * Math.PI * daysSincePerihelion) / 365.25;
      const distance = (1 - 0.0167 * 0.0167) / (1 + 0.0167 * Math.cos(meanAnomalyRad));
      setEarthSunDistance(distance);

      // 4. Moon Phase Angle & Age (New Moon Reference epoch: Jan 11, 2024 at 16:57:00 UTC)
      const refNewMoon = new Date('2024-01-11T16:57:00Z');
      const daysElapsed = (now.getTime() - refNewMoon.getTime()) / (1000 * 60 * 60 * 24);
      const synodicMonth = 29.530588853;
      const moonAge = daysElapsed % synodicMonth;
      const moonAngle = (moonAge / synodicMonth) * 360;
      setMoonPhaseAngle(moonAngle);

      // 5. Determine Moon Phase Name
      let phase = 'New Moon';
      if (moonAge < 1.84) phase = 'New Moon';
      else if (moonAge < 5.53) phase = 'Waxing Crescent';
      else if (moonAge < 9.22) phase = 'First Quarter';
      else if (moonAge < 12.91) phase = 'Waxing Gibbous';
      else if (moonAge < 16.61) phase = 'Full Moon';
      else if (moonAge < 20.30) phase = 'Waning Gibbous';
      else if (moonAge < 23.99) phase = 'Third Quarter';
      else if (moonAge < 27.68) phase = 'Waning Crescent';
      else phase = 'New Moon';
      setMoonPhaseName(phase);

      // 6. High-precision UTC clock readout
      const pad = (num: number) => num.toString().padStart(2, '0');
      const ms = Math.floor(now.getMilliseconds() / 100);
      setTimeStr(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}.${ms}`);

      // 7. Update visual radar sweep angle
      setSweepAngle((prev) => (prev + 1.2) % 360);

      frameRef.current = requestAnimationFrame(calculateTelemetry);
    };

    frameRef.current = requestAnimationFrame(calculateTelemetry);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // SVG dimensions (Wide Aspect Ratio to fit Card Width)
  const width = 300;
  const height = 110;
  const centerX = 150;
  const centerY = 55;

  // Orbit radius constants optimized to span almost the entire 300px width
  const earthOrbitRadius = 110;
  const moonOrbitRadius = 25;

  const tilt = 0.22; // Sleek 3D side-angle perspective tilt factor

  // Earth coordinates mapped ACCURATELY to real-time orbital angle (projected on tilted plane)
  const earthX = centerX + earthOrbitRadius * Math.cos((earthOrbitAngle * Math.PI) / 180);
  const earthY = centerY + earthOrbitRadius * Math.sin((earthOrbitAngle * Math.PI) / 180) * tilt;

  // Moon coordinates mapped ACCURATELY to real-time lunar phase angle (relative to Earth, projected)
  const moonX = earthX + moonOrbitRadius * Math.cos((moonPhaseAngle * Math.PI) / 180);
  const moonY = earthY + moonOrbitRadius * Math.sin((moonPhaseAngle * Math.PI) / 180) * tilt;

  return (
    <div className="relative overflow-hidden h-full w-full flex flex-col justify-between select-none text-white bg-transparent font-sans">
      {/* Top Meta info */}
      <div className="flex justify-between items-center text-[9px] sm:text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono px-5 sm:px-6 pt-4 pb-2 border-b border-[#1E293B]/40 shrink-0">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F00] animate-pulse"></span>
          ORBITAL_TELEMETRY
        </span>
        <span className="flex items-center gap-1 font-bold text-[#FF5F00] font-mono">
          <Activity className="w-3.5 h-3.5" />
          {timeStr}
        </span>
      </div>

      {/* SVG Zoomed Orbital Canvas */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden py-1">
        
        {/* Subtle grid ticks on background */}
        <div className="absolute inset-0 px-5 sm:px-6 py-3 flex flex-col justify-between pointer-events-none opacity-5">
          <div className="border-b border-[#94A3B8] w-full h-0"></div>
          <div className="border-b border-[#94A3B8] w-full h-0"></div>
        </div>

        <svg className="w-full h-full max-h-[130px] overflow-visible" viewBox={`0 0 ${width} ${height}`}>
          {/* Radial glow defs */}
          <defs>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF5F00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FF5F00" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="earthGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Radar Sweep Trail (Warship Sonar style - Long Decay) */}
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = ((sweepAngle - i * 1.5) * Math.PI) / 180;
            const opacity = 0.36 * (1 - i / 60);
            // Thickest at the leading edge, thinner towards the tail
            const strokeWidth = 0.8 * (1 - i / 60) + 0.15;
            const x2 = centerX + earthOrbitRadius * 1.3 * Math.cos(angle);
            const y2 = centerY + earthOrbitRadius * 1.3 * Math.sin(angle) * tilt;
            return (
              <line
                key={i}
                x1={centerX}
                y1={centerY}
                x2={x2}
                y2={y2}
                stroke="#FF5F00"
                strokeWidth={strokeWidth}
                strokeOpacity={opacity}
              />
            );
          })}

          {/* Sun Core Spin Axis (Z-axis) */}
          <line
            x1={centerX}
            y1={centerY - 22}
            x2={centerX}
            y2={centerY + 22}
            stroke="#FF5F00"
            strokeWidth="0.5"
            strokeDasharray="1,1"
            strokeOpacity="0.3"
          />

          {/* Earth Orbit track (Projected Ellipse - Brighter Orange) */}
          <ellipse
            cx={centerX}
            cy={centerY}
            rx={earthOrbitRadius}
            ry={earthOrbitRadius * tilt}
            fill="none"
            stroke="#FF5F00"
            strokeWidth="1.2"
            strokeDasharray="2,2"
            opacity="0.4"
          />

          {/* gravitational coordinate lines (Sun to Earth) */}
          <line
            x1={centerX}
            y1={centerY}
            x2={earthX}
            y2={earthY}
            stroke="#FF5F00"
            strokeWidth="0.5"
            strokeOpacity="0.15"
          />

          {/* Earth Spin Axis (Z-axis) */}
          <line
            x1={earthX}
            y1={earthY - 14}
            x2={earthX}
            y2={earthY + 14}
            stroke="#38BDF8"
            strokeWidth="0.4"
            strokeDasharray="1,1"
            strokeOpacity="0.3"
          />

          {/* Moon Orbit track (Projected Ellipse - Brighter Blue) */}
          <ellipse
            cx={earthX}
            cy={earthY}
            rx={moonOrbitRadius}
            ry={moonOrbitRadius * tilt}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="0.8"
            strokeDasharray="1.5,1.5"
            opacity="0.45"
          />

          {/* gravitational coordinate lines (Earth to Moon) */}
          <line
            x1={earthX}
            y1={earthY}
            x2={moonX}
            y2={moonY}
            stroke="#38BDF8"
            strokeWidth="0.4"
            strokeOpacity="0.2"
          />

          {/* Glowing Sun core (5x Larger) */}
          <circle
            cx={centerX}
            cy={centerY}
            r="30"
            fill="url(#sunGlow)"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r="15"
            fill="#FF5F00"
          />
          <text
            x={centerX}
            y={centerY - 18}
            fill="#FF5F00"
            fontSize="5.5"
            fontFamily="monospace"
            textAnchor="middle"
            className="font-bold opacity-75"
          >
            SOL
          </text>

          {/* Earth Core (5x Larger) */}
          <circle
            cx={earthX}
            cy={earthY}
            r="18"
            fill="url(#earthGlow)"
          />
          <circle
            cx={earthX}
            cy={earthY}
            r="9"
            fill="#38BDF8"
          />
          <text
            x={earthX}
            y={earthY - 12}
            fill="#38BDF8"
            fontSize="5"
            fontFamily="monospace"
            textAnchor="middle"
            className="font-bold opacity-75"
          >
            TERRA
          </text>

          {/* Moon Core (5x Larger) */}
          <circle
            cx={moonX}
            cy={moonY}
            r="4.5"
            fill="#E2E8F0"
          />
          <text
            x={moonX}
            y={moonY + 11}
            fill="#E2E8F0"
            fontSize="4"
            fontFamily="monospace"
            textAnchor="middle"
            className="opacity-60"
          >
            LUNA
          </text>
        </svg>
      </div>

      {/* Readout parameters footer */}
      <div className="flex justify-between items-center text-[9px] text-[#94A3B8] font-mono px-5 sm:px-6 pb-4 pt-2 border-t border-[#1E293B]/40 shrink-0 bg-[#050505]/20">
        <div className="grid grid-cols-4 gap-2 w-full text-[8px] sm:text-[8.5px]">
          <div className="flex flex-col">
            <span className="text-[6.5px] text-[#94A3B8]/60 uppercase leading-none">ORBIT_DEG</span>
            <span className="text-[#F8FAFC] font-semibold mt-0.5 font-mono">
              {earthOrbitAngle.toFixed(4)}°
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[6.5px] text-[#94A3B8]/60 uppercase leading-none">ORBIT_DIST</span>
            <span className="text-[#F8FAFC] font-semibold mt-0.5 font-mono">
              {earthSunDistance.toFixed(5)} AU
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[6.5px] text-[#94A3B8]/60 uppercase leading-none">LUNA_PHASE</span>
            <span className="text-[#F8FAFC] font-semibold mt-0.5 truncate uppercase">
              {moonPhaseName}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[6.5px] text-[#94A3B8]/60 uppercase leading-none">LUNA_ALIGN</span>
            <span className="text-[#F8FAFC] font-semibold mt-0.5 font-mono">
              {moonPhaseAngle.toFixed(4)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
