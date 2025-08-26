import { ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface GlassSurfaceProps {
  children: ReactNode;
  className?: string;
  blur?: number;
  opacity?: number;
  borderRadius?: number;
  borderOpacity?: number;
  shadowOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
}

const GlassSurface = ({ 
  children,
  className,
  blur = 16,
  opacity = 0.25,
  borderRadius = 16,
  borderOpacity = 0.2,
  shadowOpacity = 0.1,
  gradientFrom = 'rgba(255, 255, 255, 0.3)',
  gradientTo = 'rgba(255, 255, 255, 0.05)'
}: GlassSurfaceProps) => {
  const glassSurfaceStyles: CSSProperties = {
    background: `rgba(255, 255, 255, ${opacity})`,
    backdropFilter: `blur(${blur}px) saturate(180%)`,
    WebkitBackdropFilter: `blur(${blur}px) saturate(180%)`,
    borderRadius: `${borderRadius}px`,
    border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, ${shadowOpacity}),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1)
    `,
  };

  const shineStyles: CSSProperties = {
    background: `linear-gradient(135deg, ${gradientFrom} 0%, transparent 50%, ${gradientTo} 100%)`,
    borderRadius: `${borderRadius}px`,
  };

  return (
    <div 
      className={cn('relative overflow-hidden', className)}
      style={glassSurfaceStyles}
    >
      {/* Glass shine effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={shineStyles}
      />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;