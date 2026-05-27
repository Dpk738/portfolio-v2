import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socials = [
  { name: 'Email', icon: Mail, url: 'mailto:deepaksrinivas@example.com' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com' },
  { name: 'GitHub', icon: GithubIcon, url: 'https://github.com' },
  { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com' }
];

export const ContactCard: React.FC = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden h-full w-full flex flex-col justify-between group select-none text-white bg-transparent">
      {/* Card Header */}
      <div className="flex justify-between items-center text-[8.5px] uppercase tracking-wider text-[#94A3B8] font-mono px-5 pt-4 pb-1 shrink-0 w-full">
        <span>SYS_CONNECT</span>
        <span className="text-right text-[#94A3B8]/80 font-mono tracking-wider truncate max-w-[110px]">
          {hoveredSocial ? hoveredSocial : "CREATE // 2026"}
        </span>
      </div>

      {/* Row of Raw Logos */}
      <div className="my-auto flex-1 flex items-center justify-center py-2 px-5">
        <div className="grid grid-cols-4 w-full justify-items-center">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial(social.name)}
                onMouseLeave={() => setHoveredSocial(null)}
                whileHover={{ scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                className="flex items-center justify-center h-9 w-9"
              >
                <Icon className="w-7 h-7 text-[#94A3B8] hover:text-[#FF5F00] transition-colors duration-300" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
