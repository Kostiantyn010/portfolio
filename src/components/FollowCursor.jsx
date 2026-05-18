import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const FollowCursor = ({ color = '#D4AF37' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.2 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    cursorX.set(mousePosition.x - 20);
    cursorY.set(mousePosition.y - 20);
  }, [mousePosition, cursorX, cursorY]);

  return (
    <>
      <div style={{
        position: 'fixed',
        left: mousePosition.x - 4,
        top: mousePosition.y - 4,
        width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: color,
        pointerEvents: 'none',
        zIndex: 9999
      }} />
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          position: 'fixed',
          width: '40px',
          height: '40px',
          border: `2px solid ${color}`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998
        }}
      />
    </>
  );
};

export default FollowCursor;
