import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GhostCursor = ({ color = '#00ff41' }) => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    let timeoutId;
    const handleMouseMove = (e) => {
      setTrails((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        if (newTrail.length > 20) newTrail.shift();
        return newTrail;
      });

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setTrails([]);
      }, 100); // fade out quickly when stopped
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 9999
    }}>
      {trails.map((trail, index) => (
        <motion.div
          key={trail.id}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            left: trail.x - 4,
            top: trail.y - 4,
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      ))}
    </div>
  );
};

export default GhostCursor;
