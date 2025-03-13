'use client';
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  size?: number;
  mobileSize?: number;
  tabletSize?: number;
};

export function Spotlight({
  className,
  size = 800,
  mobileSize = 300,
  tabletSize = 500,
}: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [parentElement, setParentElement] = useState<HTMLElement | null>(null);
  const [currentSize, setCurrentSize] = useState(size);

  const mouseX = useSpring(0, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 50 });

  const spotlightScale = useSpring(isHovered ? 1 : 0.5, {
    stiffness: 300,
    damping: 30
  });

  const opacity = useSpring(isHovered ? 0.15 : 0.08, {
    stiffness: 300,
    damping: 30
  });

  // Handle responsive size changes
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) { // Mobile
        setCurrentSize(mobileSize);
      } else if (width < 1024) { // Tablet
        setCurrentSize(tabletSize);
      } else { // Desktop
        setCurrentSize(size);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [size, mobileSize, tabletSize]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!parentElement) return;
      const { left, top, width, height } = parentElement.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;
      setMousePosition({ x: (x / width) * 100, y: (y / height) * 100 });
      mouseX.set(x - currentSize / 2);
      mouseY.set(y - currentSize / 2);
    },
    [mouseX, mouseY, parentElement, currentSize]
  );

  useEffect(() => {
    if (containerRef.current) {
      const parent = containerRef.current.parentElement;
      if (parent) {
        parent.style.position = 'relative';
        parent.style.overflow = 'hidden';
        setParentElement(parent);
      }
    }
  }, []);

  useEffect(() => {
    if (!parentElement) return;

    parentElement.addEventListener('mousemove', handleMouseMove);
    parentElement.addEventListener('mouseenter', () => setIsHovered(true));
    parentElement.addEventListener('mouseleave', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('mousemove', handleMouseMove);
      parentElement.removeEventListener('mouseenter', () => setIsHovered(true));
      parentElement.removeEventListener('mouseleave', () => setIsHovered(false));
    };
  }, [parentElement, handleMouseMove]);

  // Add touch support for mobile devices
  useEffect(() => {
    if (!parentElement) return;

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const { left, top, width, height } = parentElement.getBoundingClientRect();
        const x = touch.clientX - left;
        const y = touch.clientY - top;
        setMousePosition({ x: (x / width) * 100, y: (y / height) * 100 });
        mouseX.set(x - currentSize / 2);
        mouseY.set(y - currentSize / 2);
      }
    };

    parentElement.addEventListener('touchmove', handleTouchMove);
    parentElement.addEventListener('touchstart', () => setIsHovered(true));
    parentElement.addEventListener('touchend', () => setIsHovered(false));

    return () => {
      parentElement.removeEventListener('touchmove', handleTouchMove);
      parentElement.removeEventListener('touchstart', () => setIsHovered(true));
      parentElement.removeEventListener('touchend', () => setIsHovered(false));
    };
  }, [parentElement, mouseX, mouseY, currentSize]);

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'pointer-events-none absolute rounded-full',
          'blur-3xl transition-opacity duration-500',
          className
        )}
        style={{
          width: currentSize,
          height: currentSize,
          left: mouseX,
          top: mouseY,
          opacity,
          scale: spotlightScale,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%)`
        }}
      />
    </AnimatePresence>
  );
}
