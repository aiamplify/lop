import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trailPositions, setTrailPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Update trail
      setTrailPositions((prev) => {
        const newTrail = [{ x: e.clientX, y: e.clientY }, ...prev.slice(0, 8)];
        return newTrail;
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {trailPositions.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none z-[9999] mix-blend-difference"
          style={{
            left: pos.x,
            top: pos.y,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1 - index * 0.1,
            opacity: 0.5 - index * 0.05,
          }}
          transition={{
            duration: 0.2,
            delay: index * 0.02,
          }}
        >
          <div
            className="bg-brand-green rounded-full"
            style={{
              width: `${6 - index * 0.5}px`,
              height: `${6 - index * 0.5}px`,
              marginLeft: `${-(6 - index * 0.5) / 2}px`,
              marginTop: `${-(6 - index * 0.5) / 2}px`,
            }}
          />
        </motion.div>
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        <div className="w-8 h-8 border-2 border-brand-green rounded-full" />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        <div className="w-1 h-1 bg-brand-green rounded-full" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
