import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const BlobCursor = ({ color = '#0066ff' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x - 150);
    cursorY.set(mousePosition.y - 150);
  }, [mousePosition, cursorX, cursorY]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${color}44 0%, transparent 70%)`,
          filter: 'blur(40px)',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default BlobCursor;
