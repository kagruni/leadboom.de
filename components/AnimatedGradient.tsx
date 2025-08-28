"use client";

import React from 'react';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 animated-gradient opacity-70" />
      <style jsx>{`
        .animated-gradient {
          background: linear-gradient(
            45deg,
            #000000 0%,
            #1a0b3d 20%,
            #4c1d95 40%,
            #7c3aed 60%,
            #4c1d95 80%,
            #000000 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        
        .animated-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(168, 85, 247, 0.3) 0%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        
        .animated-gradient:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default AnimatedGradient;