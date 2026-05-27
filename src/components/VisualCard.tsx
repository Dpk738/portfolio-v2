import React, { useRef, useEffect, useState } from 'react';

export const VisualCard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    
    interface ParticleInstance {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseSize: number;
      size: number;
      color: string;
      update: () => void;
      draw: (c: CanvasRenderingContext2D) => void;
    }

    const particles: ParticleInstance[] = [];
    const particleCount = 320;
    const mouse = { x: -1000, y: -1000, active: false, radius: 85 };

    class Particle implements ParticleInstance {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseSize: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.15;
        this.vy = (Math.random() - 0.5) * 0.15;
        this.baseSize = Math.random() * 1.1 + 0.5;
        this.size = this.baseSize;
        this.color = 'rgba(255, 255, 255, 0.95)'; // bright white particle
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x += (dx / dist) * force * 1.5;
            this.y += (dy / dist) * force * 1.5;
            this.size = this.baseSize * (1 + force * 0.5);
          } else {
            if (this.size > this.baseSize) {
              this.size -= 0.05;
            }
          }
        }
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      }
    }

    const init = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      width = rect?.width || 300;
      height = rect?.height || 300;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform();
      ctx.scale(dpr, dpr);

      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const handleResize = () => {
      init();
    };

    init();
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 40) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = (1 - dist / 40) * 0.06;
            ctx.strokeStyle = `rgba(148, 163, 184, ${opacity})`; // slate lines
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Render individual particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      mouse.x = x;
      mouse.y = y;
      mouse.active = true;
      setCoords({ x, y });
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
      setCoords({ x: 0, y: 0 });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden h-full w-full flex flex-col justify-between group select-none text-white bg-transparent"
    >
      {/* Interactive canvas layer */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full cursor-crosshair z-0"
      />

      {/* UI Overlay Labels */}
      <div className="relative z-10 p-6 flex flex-col justify-between h-full pointer-events-none w-full">
        <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-[#94A3B8] font-mono">
          <span>GENERATIVE // RADAR</span>
          <span>INDEX // 04</span>
        </div>

        <div className="text-[9px] text-[#94A3B8] font-mono flex justify-between items-end mt-auto">
          <span>COORDS // X:{coords.x} Y:{coords.y}</span>
          <span>GRAVITY_INVERT</span>
        </div>
      </div>
    </div>
  );
};
