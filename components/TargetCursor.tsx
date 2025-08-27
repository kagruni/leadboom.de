"use client";

import { useEffect, useRef, useCallback, useMemo } from "react";
import "./TargetCursor.css";

interface TargetCursorProps {
  targetSelector?: string;
  spinDuration?: number;
  hideDefaultCursor?: boolean;
}

const TargetCursor = ({
  targetSelector = "button, .btn, [role='button'], a[href]",
  spinDuration = 2,
  hideDefaultCursor = true,
}: TargetCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<HTMLDivElement[]>([]);
  const spinAnimationRef = useRef<number | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const isSpinningRef = useRef(true);
  const activeTargetRef = useRef<Element | null>(null);

  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
      parallaxStrength: 0.00005,
    }),
    []
  );

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    const rotation = isSpinningRef.current ? `rotate(${rotationRef.current}deg)` : 'rotate(0deg)';
    cursorRef.current.style.transform = `translate(${x}px, ${y}px) ${rotation}`;
  }, []);

  const startSpinAnimation = useCallback(() => {
    if (!cursorRef.current) return;
    
    let startTime: number | null = null;
    const duration = spinDuration * 1000; // Convert to milliseconds
    
    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration; // Loop the animation
      
      rotationRef.current = progress * 360;
      
      if (cursorRef.current && isSpinningRef.current) {
        const currentTransform = cursorRef.current.style.transform.replace(/rotate\([^)]*\)/, '').trim();
        cursorRef.current.style.transform = `${currentTransform} rotate(${rotationRef.current}deg)`;
      }
      
      if (isSpinningRef.current) {
        spinAnimationRef.current = requestAnimationFrame(animate);
      }
    };
    
    spinAnimationRef.current = requestAnimationFrame(animate);
  }, [spinDuration]);

  const stopSpinAnimation = useCallback(() => {
    isSpinningRef.current = false;
    if (spinAnimationRef.current) {
      cancelAnimationFrame(spinAnimationRef.current);
      spinAnimationRef.current = null;
    }
    if (cursorRef.current) {
      cursorRef.current.style.transform = cursorRef.current.style.transform.replace(/rotate\([^)]*\)/g, 'rotate(0deg)');
      rotationRef.current = 0;
    }
  }, []);

  const resumeSpinAnimation = useCallback(() => {
    isSpinningRef.current = true;
    startSpinAnimation();
  }, [startSpinAnimation]);

  const animateToCorners = useCallback((target: Element) => {
    if (!cursorRef.current || cornersRef.current.length === 0) return;

    const rect = target.getBoundingClientRect();
    const { borderWidth, cornerSize } = constants;

    // Position cursor to center of the button
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    
    // Move cursor to button center (fixed position)
    cursorRef.current.style.transform = `translate(${buttonCenterX}px, ${buttonCenterY}px) rotate(0deg)`;

    // Position corners relative to button boundaries (not cursor position)
    const positions = [
      // Top-left
      {
        x: rect.left - buttonCenterX - borderWidth,
        y: rect.top - buttonCenterY - borderWidth,
      },
      // Top-right
      {
        x: rect.right - buttonCenterX + borderWidth - cornerSize,
        y: rect.top - buttonCenterY - borderWidth,
      },
      // Bottom-right
      {
        x: rect.right - buttonCenterX + borderWidth - cornerSize,
        y: rect.bottom - buttonCenterY + borderWidth - cornerSize,
      },
      // Bottom-left
      {
        x: rect.left - buttonCenterX - borderWidth,
        y: rect.bottom - buttonCenterY + borderWidth - cornerSize,
      },
    ];

    cornersRef.current.forEach((corner, index) => {
      if (corner && positions[index]) {
        corner.style.transition = 'transform 0.2s ease-out';
        corner.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`;
      }
    });
  }, [constants]);

  const resetCorners = useCallback(() => {
    const { cornerSize } = constants;
    const positions = [
      { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
      { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
      { x: cornerSize * 0.5, y: cornerSize * 0.5 },
      { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
    ];

    cornersRef.current.forEach((corner, index) => {
      if (corner && positions[index]) {
        corner.style.transition = 'transform 0.3s ease-out';
        corner.style.transform = `translate(${positions[index].x}px, ${positions[index].y}px)`;
      }
    });
  }, [constants]);

  useEffect(() => {
    if (!cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
    }

    // Initialize cursor position
    const cursor = cursorRef.current;
    cursor.style.transform = `translate(${window.innerWidth / 2}px, ${window.innerHeight / 2}px)`;

    // Start initial spin animation
    startSpinAnimation();

    const handleMouseMove = (e: MouseEvent) => {
      // Only move cursor if not hovering over a target
      if (!activeTargetRef.current) {
        moveCursor(e.clientX, e.clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element;
      const matchingTarget = target.closest(targetSelector);
      
      if (matchingTarget && matchingTarget !== activeTargetRef.current) {
        activeTargetRef.current = matchingTarget;
        stopSpinAnimation();
        animateToCorners(matchingTarget);

        const handleMouseLeave = (leaveEvent: MouseEvent) => {
          activeTargetRef.current = null;
          resetCorners();
          
          // Resume mouse following immediately
          moveCursor(leaveEvent.clientX, leaveEvent.clientY);
          
          setTimeout(() => {
            if (!activeTargetRef.current) {
              resumeSpinAnimation();
            }
          }, 50);
          matchingTarget.removeEventListener('mouseleave', handleMouseLeave);
        };

        matchingTarget.addEventListener('mouseleave', handleMouseLeave);
      }
    };

    const handleMouseDown = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(0.7)';
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform += ' scale(0.9)';
      }
    };

    const handleMouseUp = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
      if (cursorRef.current) {
        cursorRef.current.style.transform = cursorRef.current.style.transform.replace(/scale\([^)]*\)/g, 'scale(1)');
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseUp);
      window.removeEventListener("mouseup", handleMouseUp);
      
      if (spinAnimationRef.current) {
        cancelAnimationFrame(spinAnimationRef.current);
      }
      
      document.body.style.cursor = originalCursor;
    };
  }, [targetSelector, hideDefaultCursor, moveCursor, startSpinAnimation, stopSpinAnimation, resumeSpinAnimation, animateToCorners, resetCorners]);

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div ref={dotRef} className="target-cursor-dot" />
      <div 
        ref={el => { if (el) cornersRef.current[0] = el; }} 
        className="target-cursor-corner corner-tl" 
      />
      <div 
        ref={el => { if (el) cornersRef.current[1] = el; }} 
        className="target-cursor-corner corner-tr" 
      />
      <div 
        ref={el => { if (el) cornersRef.current[2] = el; }} 
        className="target-cursor-corner corner-br" 
      />
      <div 
        ref={el => { if (el) cornersRef.current[3] = el; }} 
        className="target-cursor-corner corner-bl" 
      />
    </div>
  );
};

export default TargetCursor;