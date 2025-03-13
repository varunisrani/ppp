'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  fallbackHeight?: string
}

export function SplineScene({ scene, className, fallbackHeight = '100%' }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(0)

  // Check device type and set viewport height
  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setViewportHeight(height);
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    }
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Calculate appropriate minimum height based on device
  const getMinHeight = () => {
    if (isMobile) {
      return Math.max(450, viewportHeight * 0.6) + 'px'; // Ensure minimum 450px height on mobile
    } else if (isTablet) {
      return Math.max(500, viewportHeight * 0.7) + 'px'; // Ensure minimum 500px height on tablet
    } else {
      return fallbackHeight;
    }
  };

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black" style={{ minHeight: getMinHeight() }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative text-center"
          >
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-neutral-800 border-t-white rounded-full animate-spin mb-4"></div>
              <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full blur-sm bg-white/5"></div>
            </div>
            <div className="space-y-2">
              <p className="text-white font-medium tracking-wider text-sm sm:text-base">LOADING</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest">Initializing 3D Scene</p>
            </div>
          </motion.div>
        </div>
      }
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
        style={{ minHeight: getMinHeight() }}
      >
        <Spline
          scene={scene}
          className={className}
          onLoad={() => {
            // Add a slight delay to ensure the scene is fully rendered
            setTimeout(() => setIsLoading(false), 300)
          }}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            transform: isMobile ? 'scale(1.2) translateY(-5%)' : isTablet ? 'scale(1.1)' : 'scale(1)',
          }}
        />
      </motion.div>
    </Suspense>
  )
}